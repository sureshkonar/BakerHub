"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import GalleryGrid from "@/components/GalleryGrid";
import { freshBatch, galleryItems, products, testimonials } from "@/lib/data";
import { withBasePath } from "@/lib/asset";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,163,115,0.2),_transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Freshly Baked Happiness
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Homemade Cakes & Pastries in Tirunelveli
            </h1>
            <p className="text-base text-white/70">
              Celebrate every moment with handcrafted desserts, warm breads, and
              custom cakes baked with love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/order"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Order Now
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:border-white/40"
              >
                View Menu
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel relative rounded-[32px] p-6"
          >
            <div className="relative h-80 overflow-hidden rounded-3xl">
              <Image
                src={withBasePath("/images/hero-cake.svg")}
                alt="Signature cake"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">Signature Special</p>
                <p className="text-lg font-semibold text-white">Rose Petal Cake</p>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                Starts at ₹1200
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Fresh From The Oven
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Latest Bakery Items
            </h2>
          </div>
          <Link href="/products" className="text-sm text-white/60">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="glass-panel grid gap-6 rounded-[32px] p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Best Sellers
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Customer Favorites
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Our most loved cakes, crafted for celebrations and everyday joy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {products
                .filter((item) => item.bestSeller)
                .map((item) => (
                  <span
                    key={item.id}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
                  >
                    {item.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="grid gap-4">
            {products
              .filter((item) => item.bestSeller)
              .slice(0, 2)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image src={withBasePath(item.image)} alt={item.name} fill />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/60">₹{item.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Today&apos;s Fresh Batch
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Morning Bake Gallery
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {freshBatch.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              className="glass-panel overflow-hidden rounded-3xl p-4"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image src={withBasePath(item.image)} alt={item.title} fill />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Testimonials
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Loved by Tirunelveli
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-6 text-sm text-white/70"
            >
              <p>“{item.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Find Us
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Serving Tirunelveli with Fresh Bakes
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Visit the home bakery or schedule a pickup. We&apos;re located near
              Town Hall Road.
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <p>📍 Tirunelveli, Tamil Nadu</p>
              <p>⏱️ 9:00 AM - 8:00 PM</p>
              <p>📞 +91 98765 43210</p>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[32px]">
            <iframe
              title="Tirunelveli Map"
              className="h-80 w-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=tirunelveli%20town&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Featured Gallery
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Beautiful Moments
          </h2>
        </div>
        <GalleryGrid items={galleryItems} />
      </section>
    </div>
  );
}
