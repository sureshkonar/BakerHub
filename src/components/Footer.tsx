export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-white">BakerHub Tirunelveli</p>
          <p>Homemade cakes & pastries baked daily.</p>
        </div>
        <div className="space-y-1">
          <p>WhatsApp: +91 98765 43210</p>
          <p>Instagram: @bakerhub.tvl</p>
          <p>Open 9:00 AM - 8:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
