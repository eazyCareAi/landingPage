"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

interface LeadFormProps {
  source: string;
  compact?: boolean;
}

export default function LeadForm({ source, compact = false }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const payload: Record<string, string> = { email, source };
      if (name.trim()) payload.name = name.trim();
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 rounded-xl px-5 py-4">
        <CheckCircle size={20} className="text-teal-600 shrink-0" />
        <p className="text-sm font-semibold text-teal-700">
          You&apos;re on the list! We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 rounded-full bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-7 py-3 rounded-full bg-teal-500 text-white text-sm font-bold hover:bg-teal-600 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30"
        >
          {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
          {status === "loading" ? "Submitting..." : "Get Early Access"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Email Address *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
        />
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3.5 rounded-xl bg-teal-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:-translate-y-0.5 transition-all disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : null}
        {status === "loading" ? "Submitting..." : "Join the Waitlist"}
      </button>
    </form>
  );
}
