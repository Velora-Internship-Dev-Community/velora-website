import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/projects", label: "Projects" },
  { href: "/industries-partnerships", label: "Industries & partnerships" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Let's talk" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "X(Twitter)" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "Linked in" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue px-6 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Velora
            </h2>
            <p className="text-sm font-normal text-blue-100">The premium African tech company</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">Explore</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-500/60 pt-8 text-xs text-blue-200 sm:flex-row">
          <p>© Velora {year}</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
