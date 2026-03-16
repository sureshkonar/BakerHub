"use client";

import Image from "next/image";
import { products } from "@/lib/data";

export default function DashboardProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Products
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white">
            Manage Products
          </h1>
        </div>
        <button className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black">
          Add Product
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>Product</span>
          <span>Category</span>
          <span>Price</span>
          <span>Status</span>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/5 px-6 py-4 text-sm text-white/70"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
                <Image src={product.image} alt={product.name} fill />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{product.name}</p>
                <p className="text-xs text-white/40">{product.description}</p>
              </div>
            </div>
            <span>{product.category}</span>
            <span>₹{product.price}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs ${
                product.availableToday
                  ? "bg-emerald-400/20 text-emerald-200"
                  : "bg-white/10 text-white/50"
              }`}
            >
              {product.availableToday ? "Available" : "Hidden"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
