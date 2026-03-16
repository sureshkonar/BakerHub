import Chart from "@/components/Chart";
import StatsCard from "@/components/StatsCard";

const ordersData = [
  { label: "Mon", value: 12 },
  { label: "Tue", value: 18 },
  { label: "Wed", value: 22 },
  { label: "Thu", value: 16 },
  { label: "Fri", value: 28 },
  { label: "Sat", value: 34 },
  { label: "Sun", value: 20 },
];

const productsData = [
  { label: "Cakes", value: 42 },
  { label: "Pastry", value: 26 },
  { label: "Cupcake", value: 18 },
  { label: "Bread", value: 12 },
  { label: "Custom", value: 16 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Overview
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Business Control Panel
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard label="Orders Today" value="24" change="+8%" />
        <StatsCard label="Orders This Week" value="142" change="+12%" />
        <StatsCard label="Total Orders" value="1,204" />
        <StatsCard label="Best Seller" value="Red Velvet" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Chart title="Orders Per Day" data={ordersData} />
        <Chart title="Popular Products" data={productsData} />
      </div>
    </div>
  );
}
