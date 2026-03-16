import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Gallery
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-white">
          Every Bake Has A Story
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Explore a curated selection of birthday cakes, wedding tiers, cupcakes,
          and fresh breads.
        </p>
      </div>
      <GalleryGrid items={galleryItems} />
    </div>
  );
}
