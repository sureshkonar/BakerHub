type ChartProps = {
  title: string;
  data: { label: string; value: number }[];
};

export default function Chart({ title, data }: ChartProps) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <span className="text-xs text-white/40">Last 7 days</span>
      </div>
      <div className="mt-6 flex items-end gap-3">
        {data.map((item) => (
          <div key={item.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative h-32 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute bottom-0 w-full rounded-full bg-[var(--accent)]"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-xs text-white/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
