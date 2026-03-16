import Link from "next/link";

const whatsappMessage = encodeURIComponent(
  "Hi BakerHub! I'd like to place a bakery order."
);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          Let&apos;s Bake Something Beautiful
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Reach out for custom cakes, celebrations, and daily bakes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
          <p>Phone: +91 98765 43210</p>
          <p className="mt-2">Instagram: @bakerhub.tvl</p>
          <p className="mt-2">Email: hello@bakerhub.in</p>
          <Link
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black"
          >
            WhatsApp Us
          </Link>
        </div>
        <div className="glass-panel overflow-hidden rounded-3xl">
          <iframe
            title="Tirunelveli Map"
            className="h-72 w-full"
            loading="lazy"
            src="https://maps.google.com/maps?q=tirunelveli%20town&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </div>
  );
}
