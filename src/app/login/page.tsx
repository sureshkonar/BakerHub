"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    setStatus("success");
    router.push("/dashboard");
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl items-center px-6 py-16">
      <div className="glass-panel w-full rounded-[32px] p-8">
        <h1 className="text-2xl font-semibold text-white">Owner Login</h1>
        <p className="mt-2 text-sm text-white/70">
          Sign in to manage orders, products, and gallery updates.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-[var(--accent)]"
            required
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Signing in..." : "Login"}
          </button>
          {message && (
            <p className="text-sm text-red-300">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
