"use client";

import { useState } from "react";

const defaultOutput = {
  posterIdea: "Weekend Chocolate Delight\nFresh Chocolate Cakes Available\nLimited Weekend Offer",
  instagramCaption:
    "Indulge in rich chocolate heaven this weekend 🍫 Freshly baked with love in Tirunelveli.",
  whatsappPromo:
    "Special weekend offer on chocolate cakes! Order now before stock runs out.",
};

export default function AIHelper() {
  const [prompt, setPrompt] = useState("Chocolate cake weekend offer");
  const [output, setOutput] = useState(defaultOutput);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    // Placeholder for a free AI endpoint (Ollama/OpenRouter/local LLM)
    await new Promise((resolve) => setTimeout(resolve, 600));

    setOutput({
      posterIdea: `${prompt}\nLimited Weekend Offer\nFreshly baked in Tirunelveli`,
      instagramCaption: `Fresh from the oven ✨ ${prompt}. DM to reserve your slice!`,
      whatsappPromo: `Limited-time promo: ${prompt}. Reply to book your order today!`,
    });
    setLoading(false);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Prompt Generator</h3>
        <p className="mt-2 text-sm text-white/60">
          Describe your offer and generate marketing content instantly.
        </p>
        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="mt-6 h-32 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white outline-none focus:border-[var(--accent)]"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 w-full rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-70"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Output</h3>
        <div className="mt-4 space-y-4 text-sm text-white/70">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Poster Idea
            </p>
            <p className="whitespace-pre-line">{output.posterIdea}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Instagram Caption
            </p>
            <p>{output.instagramCaption}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              WhatsApp Promo
            </p>
            <p>{output.whatsappPromo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
