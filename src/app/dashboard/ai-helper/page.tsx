import AIHelper from "@/components/AIHelper";

export default function DashboardAIHelperPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          AI Poster Helper
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-white">
          Marketing Prompt Generator
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Generate poster ideas, Instagram captions, and WhatsApp promos.
        </p>
      </div>
      <AIHelper />
    </div>
  );
}
