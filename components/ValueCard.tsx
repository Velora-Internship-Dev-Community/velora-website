import Image from "next/image";
import type { CoreValue } from "@/lib/types";

interface ValueCardProps {
  value: CoreValue;
}

/**
 * White square card with the value's name. On hover (or keyboard focus) the
 * gradient artwork fades in over the card, like the Industries cards, the
 * text turns white and the description appears. Devices without hover show the
 * description on the white card instead, since there is no hover to reveal it.
 */
export default function ValueCard({ value }: ValueCardProps) {
  return (
    <article
      tabIndex={0}
      className="group relative flex aspect-square flex-col overflow-hidden border border-slate-200 bg-white p-6 outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
      style={{ borderRadius: "10px" }}
    >
      <Image
        src={value.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 300px, (min-width: 768px) 45vw, 100vw"
        className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:hidden"
        aria-hidden="true"
      />
      {/* Soft scrim keeps the text readable on the brighter gradients */}
      <div
        className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:hidden"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center">
        <h3 className="text-center font-heading text-lg font-normal text-slate-900 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
          {value.name}
        </h3>
        <p className="absolute inset-x-0 bottom-0 text-left text-sm leading-relaxed text-slate-600 transition-all duration-300 group-hover:translate-y-0 group-hover:text-white/90 group-focus-visible:translate-y-0 group-focus-visible:text-white/90 [@media(hover:hover)]:translate-y-1.5 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
          {value.description}
        </p>
      </div>
    </article>
  );
}
