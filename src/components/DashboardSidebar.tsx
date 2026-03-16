import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/orders", label: "Orders" },
  { href: "/dashboard/products", label: "Products" },
  { href: "/dashboard/gallery", label: "Gallery" },
  { href: "/dashboard/ai-helper", label: "AI Poster Helper" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/settings", label: "Settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full flex-col gap-6 border-r border-white/10 bg-black/40 px-6 py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          BakerHub
        </p>
        <h2 className="text-lg font-semibold text-white">Owner Dashboard</h2>
      </div>
      <nav className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-2xl border border-transparent px-4 py-2 text-white/70 transition hover:border-white/15 hover:bg-white/5 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
