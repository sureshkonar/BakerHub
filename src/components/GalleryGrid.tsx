import Image from "next/image";
import { GalleryItem } from "@/lib/data";

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="group break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="relative h-56">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-white/60">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
