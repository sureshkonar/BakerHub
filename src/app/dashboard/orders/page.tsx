const orders = [
  {
    id: "ORD-1024",
    customer: "Priya S.",
    phone: "9876543210",
    product: "Red Velvet Cake",
    quantity: 1,
    pickup: "2025-10-08",
    status: "Pending",
  },
  {
    id: "ORD-1025",
    customer: "Karthik M.",
    phone: "9123456780",
    product: "Croissant Box",
    quantity: 6,
    pickup: "2025-10-09",
    status: "Baking",
  },
  {
    id: "ORD-1026",
    customer: "Asha R.",
    phone: "9090909090",
    product: "Custom Celebration Cake",
    quantity: 1,
    pickup: "2025-10-10",
    status: "Confirmed",
  },
];

const actions = ["Confirm", "Start Baking", "Ready", "Delivered", "Cancel"];

export default function DashboardOrdersPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Orders
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Manage Orders
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_0.8fr_1fr] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Phone</span>
          <span>Product</span>
          <span>Pickup</span>
          <span>Status</span>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-[1.2fr_1fr_1fr_1fr_0.8fr_1fr] items-center gap-4 border-b border-white/5 px-6 py-4 text-sm text-white/70"
          >
            <span className="text-white">{order.id}</span>
            <span>{order.customer}</span>
            <span>{order.phone}</span>
            <span>{order.product}</span>
            <span>{order.pickup}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              {order.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-5">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition hover:border-white/40"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
