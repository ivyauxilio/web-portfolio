const links = [
  { href: "#about", label: "About" },
  { href: "#design", label: "Design" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-midnight-900/10 bg-lavender-50/85 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
        aria-label="Main"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold text-midnight-900"
        >
          Auxilio
        </a>
        <ul className="flex gap-6 text-sm font-medium text-midnight-800">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-midnight-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
