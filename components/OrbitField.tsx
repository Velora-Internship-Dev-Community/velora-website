import Logo from "@/components/Logo";
import type { TechBadge } from "@/lib/techBadges";

type Direction = "normal" | "reverse";

interface RingSpec {
  /** Ring radius: px for the desktop field, container-width percent (cqw) for the stage. */
  radius: number;
  durationSeconds: number;
  direction: Direction;
  scale: number;
  opacity: number;
}

interface PlacedRing extends RingSpec {
  badges: TechBadge[];
}

interface OrbitFieldProps {
  badges: TechBadge[];
}

const RING_LINE = "border border-blue-300/55";

/* ── Shared ring renderer ─────────────────────────────────────────────── */

interface RingLayerProps {
  ring: PlacedRing;
  unit: "px" | "cqw";
  badgeClassName: string;
  badgeStyle?: React.CSSProperties;
}

/**
 * One orbit: a static line plus a rotating layer that carries its badges.
 * Each badge counter-rotates at the same speed so it stays upright while it
 * travels. Only one element per concern animates `transform`, so animation
 * never fights a static transform.
 */
function RingLayer({ ring, unit, badgeClassName, badgeStyle }: RingLayerProps) {
  const counterDirection: Direction = ring.direction === "normal" ? "reverse" : "normal";
  const diameter = ring.radius * 2;
  const size: React.CSSProperties =
    unit === "px"
      ? { width: diameter, height: diameter }
      : { width: `${diameter}%`, aspectRatio: "1 / 1" };

  return (
    <div
      className="absolute"
      style={{ ...size, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <div className={`absolute inset-0 rounded-full ${RING_LINE}`} />

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
                // Places the badge at its angle on the circle, then cancels that
                // rotation so nothing below this point is tilted.
                transform: `rotate(${angle}deg) translate(${ring.radius}${unit}) rotate(${-angle}deg)`,
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) scale(${ring.scale})`,
                  opacity: ring.opacity,
                }}
              >
                <div
                  style={{
                    animation: `orbit-rotate ${ring.durationSeconds}s linear infinite ${counterDirection}`,
                  }}
                >
                  <span title={badge.label} className={badgeClassName} style={badgeStyle}>
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
}

/* ── Desktop field (2xl+): large fixed-size orbits around the headline ── */

const DESKTOP_RINGS: RingSpec[] = [
  { radius: 460, durationSeconds: 70, direction: "normal", scale: 1, opacity: 1 },
  { radius: 560, durationSeconds: 95, direction: "reverse", scale: 0.94, opacity: 0.92 },
  { radius: 660, durationSeconds: 120, direction: "normal", scale: 0.88, opacity: 0.82 },
];

export default function OrbitField({ badges }: OrbitFieldProps) {
  // Spread badges evenly across the rings (round-robin) so the set keeps
  // scaling cleanly as more technologies are added.
  const rings: PlacedRing[] = DESKTOP_RINGS.map((spec, ringIndex) => ({
    ...spec,
    badges: badges.filter((_, i) => i % DESKTOP_RINGS.length === ringIndex),
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 hidden 2xl:block"
      aria-hidden="true"
      style={{ left: "-8px" }}
    >
      {rings.map((ring) => (
        <RingLayer
          key={ring.radius}
          ring={ring}
          unit="px"
          badgeClassName="flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/55 bg-white p-1"
        />
      ))}
    </div>
  );
}

/* ── Stage (below lg): the same orbit idea, sized from its own width ───── */

interface StageRingSpec extends RingSpec {
  /** Relative share of the badges this ring carries (bigger ring, more badges). */
  weight: number;
}

const STAGE_RINGS: StageRingSpec[] = [
  { radius: 21, durationSeconds: 60, direction: "normal", scale: 1, opacity: 1, weight: 6 },
  { radius: 33, durationSeconds: 85, direction: "reverse", scale: 0.95, opacity: 0.95, weight: 10 },
  { radius: 46, durationSeconds: 110, direction: "normal", scale: 0.9, opacity: 0.9, weight: 12 },
];

/** Split badges across rings in proportion to their weights, keeping order. */
function distributeByWeight(badges: TechBadge[], weights: number[]): TechBadge[][] {
  const total = weights.reduce((sum, w) => sum + w, 0);
  const groups: TechBadge[][] = [];
  let start = 0;
  weights.forEach((weight, i) => {
    const isLast = i === weights.length - 1;
    const count = isLast ? badges.length - start : Math.round((weight / total) * badges.length);
    groups.push(badges.slice(start, start + count));
    start += count;
  });
  return groups;
}

/**
 * Responsive orbit for phones and tablets. Everything is measured in the
 * stage's own width (container query units), so the composition scales as one
 * piece instead of being a shrunken desktop layout. It sits below the hero
 * copy, so orbiting badges can never cross the text.
 */
export function OrbitStage({ badges }: OrbitFieldProps) {
  const groups = distributeByWeight(
    badges,
    STAGE_RINGS.map((r) => r.weight),
  );
  const rings: PlacedRing[] = STAGE_RINGS.map((spec, i) => ({ ...spec, badges: groups[i] }));

  return (
    <div
      className="pointer-events-none relative aspect-square w-full lg:hidden"
      style={{ containerType: "inline-size" }}
      aria-hidden="true"
    >
      {rings.map((ring) => (
        <RingLayer
          key={ring.radius}
          ring={ring}
          unit="cqw"
          badgeClassName="flex items-center justify-center rounded-full border border-blue-300/55 bg-white"
          badgeStyle={{ width: "clamp(34px, 8cqw, 46px)", height: "clamp(34px, 8cqw, 46px)" }}
        />
      ))}

      {/* Centre of the orbit */}
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-300/55 bg-white"
        style={{ width: "22cqw", height: "22cqw" }}
      >
        <Logo className="h-[40%] w-auto text-brand-blue" />
      </div>
    </div>
  );
}
