import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { withBasePath } from "@/lib/asset";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={withBasePath(product.image)}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.availableToday && (
          <span className="absolute left-4 top-4 rounded-full bg-emerald-400/90 px-3 py-1 text-xs font-semibold text-black">
            Available Today
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="text-sm text-white/60">{product.category}</p>
        </div>
        <p className="text-sm text-white/70">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-base font-semibold text-[var(--accent)]">₹{product.price}</span>
          <Link
            href="/order"
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition hover:border-white/40"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}
