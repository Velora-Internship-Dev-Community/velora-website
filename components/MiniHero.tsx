interface MiniHeroProps {
  title: string;
  description?: string;
}

export default function MiniHero({ title, description }: MiniHeroProps) {
  return (
    <section className="px-6 pb-16 pt-20 text-center md:pb-24 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-5 font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-xl text-sm font-normal leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
