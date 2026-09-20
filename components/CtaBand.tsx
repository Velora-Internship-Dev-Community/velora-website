import Button from "@/components/Button";

interface CtaBandProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}

export default function CtaBand({
  title = "Let's build something that matters",
  description = "Talk to us about your challenge — we'll show you how technology can solve it.",
  buttonLabel = "Start a conversation",
  href = "/contact",
}: CtaBandProps) {
  return (
    <section className="border-t border-slate-100 bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-lg text-sm text-slate-600 md:text-base">{description}</p>
        <div className="mt-7 flex justify-center">
          <Button href={href} size="lg">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
