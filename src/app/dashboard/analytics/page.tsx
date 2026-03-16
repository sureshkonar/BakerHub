import Chart from "@/components/Chart";
import StatsCard from "@/components/StatsCard";

const revenueData = [
  { label: "Mon", value: 3200 },
  { label: "Tue", value: 4200 },
  { label: "Wed", value: 2800 },
  { label: "Thu", value: 5100 },
  { label: "Fri", value: 6100 },
  { label: "Sat", value: 7400 },
  { label: "Sun", value: 4600 },
];

const customerData = [
  { label: "New", value: 32 },
  { label: "Repeat", value: 54 },
  { label: "VIP", value: 18 },
];

export default function DashboardAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Analytics
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Business Insights
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard label="Revenue Estimate" value="₹1,32,400" />
        <StatsCard label="Customer Count" value="320" />
        <StatsCard label="Top Product" value="Chocolate Fudge" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Chart title="Revenue Per Day" data={revenueData} />
        <Chart title="Customer Mix" data={customerData} />
      </div>
    </div>
  );
}
