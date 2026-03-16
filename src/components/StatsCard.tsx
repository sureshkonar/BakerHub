type StatsCardProps = {
  label: string;
  value: string;
  change?: string;
};

export default function StatsCard({ label, value, change }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-white">{value}</p>
        {change && (
          <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
