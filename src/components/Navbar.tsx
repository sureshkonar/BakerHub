import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/order", label: "Order" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          BakerHub
        </Link>
        <div className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/order"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40"
          >
            Order Now
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-black transition hover:brightness-110"
          >
            Owner Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
