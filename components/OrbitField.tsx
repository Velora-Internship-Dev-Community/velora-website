import type { TechBadge } from "@/lib/techBadges";

interface Ring {
  radius: number;
  durationSeconds: number;
  direction: "normal" | "reverse";
  scale: number;
  opacity: number;
  badges: TechBadge[];
}

interface OrbitFieldProps {
  badges: TechBadge[];
}

function buildRings(badges: TechBadge[]): Ring[] {
  const ringConfigs: Omit<Ring, "badges">[] = [
    { radius: 460, durationSeconds: 70, direction: "normal", scale: 1, opacity: 1 },
    { radius: 560, durationSeconds: 95, direction: "reverse", scale: 0.94, opacity: 0.92 },
    { radius: 660, durationSeconds: 120, direction: "normal", scale: 0.88, opacity: 0.82 },
  ];

  // Spread badges evenly across the rings (round-robin) so the set keeps
  // scaling cleanly as more technologies are added.
  return ringConfigs.map((config, ringIndex) => ({
    ...config,
    badges: badges.filter((_, i) => i % ringConfigs.length === ringIndex),
  }));
}

export default function OrbitField({ badges }: OrbitFieldProps) {
  const rings = buildRings(badges);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center 2xl:flex"
      aria-hidden="true"
    >
      {rings.map((ring) => {
        const counterDirection = ring.direction === "normal" ? "reverse" : "normal";
        const diameter = ring.radius * 2;

        return (
          <div key={ring.radius} className="absolute" style={{ width: diameter, height: diameter }}>
            {/* Static, subtle orbit path */}
            <div className="absolute inset-0 rounded-full border border-blue-300/55" />

            {/* Rotating ring: carries every badge around the circle. Only this
                element's transform animates, so it never fights a static transform. */}
            <div
              className="absolute inset-0"
              style={{
                animation: `orbit-rotate ${ring.durationSeconds}s linear infinite ${ring.direction}`,
              }}
            >
              {ring.badges.map((badge, index) => {
                const angle = (360 / ring.badges.length) * index;
                return (
                  <div
                    key={badge.label}
                    className="absolute left-1/2 top-1/2 h-0 w-0"
                    style={{
                      // Places the badge at its angle on the circle, then cancels
                      // that rotation so nothing below this point is tilted.
                      transform: `rotate(${angle}deg) translate(${ring.radius}px) rotate(${-angle}deg)`,
                    }}
                  >
                    {/* Centering + depth (scale/opacity): static, so it can't be
                        clobbered by the counter-rotation animation below. */}
                    <div
                      style={{
                        transform: `translate(-50%, -50%) scale(${ring.scale})`,
                        opacity: ring.opacity,
                      }}
                    >
                      {/* Continuous counter-rotation: exactly cancels the ring's
                          spin over time so the icon stays upright while it travels. */}
                      <div
                        style={{
                          animation: `orbit-rotate ${ring.durationSeconds}s linear infinite ${counterDirection}`,
                        }}
                      >
                        <span
                          title={badge.label}
                          className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-1 shadow-[0_4px_14px_-2px_rgba(54,111,229,0.15),0_2px_6px_-1px_rgba(0,0,0,0.05)]"
                        >
                          {badge.icon}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
