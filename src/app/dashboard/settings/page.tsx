export default function DashboardSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Settings
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Business Settings
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Store Details
          </p>
          <div className="mt-4 space-y-3">
            <p>Store Name: BakerHub Tirunelveli</p>
            <p>UPI ID: bakerhub@upi</p>
            <p>Pickup Hours: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Notifications
          </p>
          <div className="mt-4 space-y-3">
            <p>WhatsApp alerts for new orders</p>
            <p>Email summary every evening</p>
            <p>Low stock warnings for ingredients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
