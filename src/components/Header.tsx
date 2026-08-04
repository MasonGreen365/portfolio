const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT ME" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-wide">
          Mason Green
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
