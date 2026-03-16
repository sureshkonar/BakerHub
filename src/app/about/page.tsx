export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          About BakerHub
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          A Home Bakery Built on Warmth & Craft
        </h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
          <p>
            BakerHub is a boutique home bakery in Tirunelveli specializing in
            handcrafted cakes, pastries, and breads. Every recipe is made in
            small batches with premium ingredients and a focus on memorable
            flavors.
          </p>
          <p className="mt-4">
            From birthday celebrations to everyday treats, we bring personalized
            touches, custom designs, and warm service to every order.
          </p>
        </div>
        <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Our Promise
          </p>
          <ul className="mt-4 space-y-3">
            <li>Freshly baked, never frozen.</li>
            <li>Custom flavors and designs for every occasion.</li>
            <li>Premium ingredients sourced locally when possible.</li>
            <li>Friendly, flexible order experience.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
