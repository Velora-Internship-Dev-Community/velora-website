import Image from "next/image";
import type { CoreValue } from "@/lib/types";

interface ValueCardProps {
  value: CoreValue;
  /** Zero-based position, shown as an editorial numeral on the artwork. */
  index: number;
}

/**
 * Card structure matches the Projects cards. The gradient artwork is the main
 * visual; the title and description always sit on white below it, so text
 * contrast never depends on the image. Hover only slowly scales the artwork.
 */
export default function ValueCard({ value, index }: ValueCardProps) {
  return (
    <article
      className="group flex flex-col border border-[#E1E1E1] bg-white p-4 transition-colors duration-300 hover:border-slate-300"
      style={{ borderRadius: "10px" }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "8px" }}>
        <Image
          src={value.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 290px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), rgba(0,0,0,0))" }}
          aria-hidden="true"
        />
        <span
          className="absolute bottom-3 left-4 font-heading text-sm tracking-wide text-white"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 font-heading text-xl font-normal tracking-tight text-slate-900">
        {value.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
    </article>
  );
}
