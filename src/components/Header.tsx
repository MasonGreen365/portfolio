import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/#resume", label: "RESUME" },
];

/* Sticky site header with primary navigation and Calendly link. */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Mason Green
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="group relative">
              <Link
                href="/contact"
                className="inline-block hover:underline"
                aria-haspopup="true"
              >
                CONTACT ME
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <a
                  href="https://calendly.com/masongreen511/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-black bg-white px-4 py-2 text-center hover:underline"
                >
                  Calendly
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
