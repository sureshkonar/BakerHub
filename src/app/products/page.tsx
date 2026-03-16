"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/data";

export default function ProductsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((item) => item.category === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Our Menu
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          Browse Bakery Products
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Freshly baked cakes, pastries, cupcakes, breads, and custom designs.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === category
                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                : "border-white/15 text-white/70 hover:border-white/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
