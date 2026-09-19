import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="px-6 py-24 text-center md:py-32">
      <div className="mx-auto max-w-xl">
        <p className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-brand-blue">
          404
        </p>
        <h1 className="mb-5 font-heading text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-slate-600 md:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/">Back to home</Button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Or head to{" "}
          <Link href="/contact" className="font-medium text-brand-blue hover:text-brand-dark">
            Let&apos;s talk
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
