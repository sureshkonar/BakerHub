import Image from "next/image";
import { galleryItems } from "@/lib/data";

export default function DashboardGalleryPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Gallery
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-white">
            Manage Gallery
          </h1>
        </div>
        <button className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black">
          Upload Photo
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="relative h-48">
              <Image src={item.image} alt={item.title} fill />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/50">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
