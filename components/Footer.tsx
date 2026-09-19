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
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v6h3v-6h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z" />
    ),
  },
  {
    href: "https://twitter.com",
    label: "X(Twitter)",
    icon: (
      <path d="M17.53 6h2.06l-4.5 5.14L20.4 18h-4.15l-3.25-4.26L9.22 18H7.16l4.8-5.5L6.6 6h4.25l2.94 3.9L17.53 6Zm-.72 10.8h1.14l-6.2-8.2h-1.2l6.26 8.2Z" />
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6ZM12 4c-2.17 0-2.44.01-3.29.05-.85.04-1.43.18-1.94.38a3.9 3.9 0 0 0-1.41.92 3.9 3.9 0 0 0-.92 1.41c-.2.51-.34 1.09-.38 1.94C4.01 9.56 4 9.83 4 12s.01 2.44.05 3.29c.04.85.18 1.43.38 1.94.2.5.47.92.92 1.41.45.45.9.72 1.41.92.51.2 1.09.34 1.94.38.85.04 1.12.05 3.3.05s2.44-.01 3.29-.05c.85-.04 1.43-.18 1.94-.38.5-.2.92-.47 1.41-.92.45-.45.72-.9.92-1.41.2-.51.34-1.09.38-1.94.04-.85.05-1.12.05-3.29s-.01-2.44-.05-3.29c-.04-.85-.18-1.43-.38-1.94a3.9 3.9 0 0 0-.92-1.41 3.9 3.9 0 0 0-1.41-.92c-.51-.2-1.09-.34-1.94-.38C14.44 4.01 14.17 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm4.85-.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    ),
  },
  {
    href: "https://linkedin.com",
    label: "Linked in",
    icon: (
      <path d="M6.94 8.5H4.56V19h2.38V8.5Zm-1.19-3.8a1.38 1.38 0 1 0 0 2.76 1.38 1.38 0 0 0 0-2.76ZM19 12.98c0-3.06-1.63-4.48-3.8-4.48-1.75 0-2.53.96-2.97 1.64V8.5H9.86c.03.7 0 10.5 0 10.5h2.37v-5.86c0-.31.02-.62.11-.84.25-.62.82-1.26 1.77-1.26 1.25 0 1.75.95 1.75 2.34V19H19v-6.02Z" />
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue px-6 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="mb-2 font-heading text-2xl font-bold tracking-tight text-white md:text-3xl">
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
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
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
