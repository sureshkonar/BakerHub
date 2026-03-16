import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
      <DashboardSidebar />
      <div className="bg-black/60">
        <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
      </div>
    </div>
  );
}
