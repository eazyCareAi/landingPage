"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
  Copy,
  Check,
  Palette,
  Type,
  ShieldCheck,
  Eye,
  Download,
  Handshake,
} from "lucide-react";

const colors = [
  {
    name: "Vitality Teal",
    hex: "#00C4B5",
    rgb: "0, 196, 181",
    cmyk: "100, 0, 7, 23",
    usage: "Primary accent — the \"C\" in Care, period, and \"i\" dot",
  },
  {
    name: "Obsidian Black",
    hex: "#000000",
    rgb: "0, 0, 0",
    cmyk: "0, 0, 0, 100",
    usage: "Primary text on light backgrounds",
  },
  {
    name: "Pure White",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    usage: "Backgrounds and dark-mode text",
  },
];

const doItems = [
  "Use the logo exactly as provided in official assets",
  "Use the Light Mode logo on white backgrounds",
  "Use the Dark Mode logo on dark gray / black backgrounds",
  "Maintain clear space equal to the height of the letter 'C'",
];

const dontItems = [
  "Recolor the teal elements",
  "Place the logo over busy images without a backdrop",
  "Separate 'eazyCare' and '.Ai' into different blocks",
  "Stretch, rotate, or add drop shadows to the logo",
];

function ColorCard({ color }: { color: (typeof colors)[0] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <div
        className="h-28 w-full flex items-end justify-end p-3"
        style={{ backgroundColor: color.hex }}
      >
        <button
          onClick={copy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 text-white text-xs font-semibold backdrop-blur-sm hover:bg-black/60 transition-all"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy HEX"}
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-white mb-1">{color.name}</h3>
        <div className="space-y-1 text-sm text-white/60">
          <p>
            <span className="text-white/40">HEX</span> {color.hex}
          </p>
          <p>
            <span className="text-white/40">RGB</span> {color.rgb}
          </p>
          <p>
            <span className="text-white/40">CMYK</span> {color.cmyk}
          </p>
        </div>
        <p className="mt-3 text-xs text-white/50 leading-relaxed">{color.usage}</p>
      </div>
    </div>
  );
}

export default function BrandGuidelinesClient() {
  return (
    <div className="min-h-screen bg-[#060E1A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1AB89E]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1AB89E]/10 border border-[#1AB89E]/20 text-[#1AB89E] text-sm font-semibold mb-6">
            <Palette size={15} />
            Official Brand Manual v1.0
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Where Compassionate Care
            <br />
            Meets <span className="text-[#1AB89E]">Cutting-Edge AI</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            The eazyCare.Ai brand is built on a single promise: healthcare should feel
            effortless, intelligent, and deeply human. These guidelines ensure consistency
            across every touchpoint.
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center">
              <Palette size={20} className="text-[#1AB89E]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Color Palette</h2>
              <p className="text-sm text-white/50">Designed to evoke trust, hygiene, and innovation</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colors.map((c) => (
              <ColorCard key={c.hex} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Logo Usage */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center">
              <Eye size={20} className="text-[#1AB89E]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Logo Usage Rules</h2>
              <p className="text-sm text-white/50">How to use the eazyCare.Ai mark correctly</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Do */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check size={14} className="text-emerald-400" />
                </div>
                <h3 className="font-bold text-emerald-400">Do</h3>
              </div>
              <ul className="space-y-3">
                {doItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <ShieldCheck size={14} className="text-red-400" />
                </div>
                <h3 className="font-bold text-red-400">Do Not</h3>
              </div>
              <ul className="space-y-3">
                {dontItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <ShieldCheck size={15} className="text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo variations visual */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white p-8 flex flex-col items-center justify-center gap-4">
              <p className="text-xs font-semibold text-black/40 uppercase tracking-wider">Light Mode</p>
              <div className="text-3xl font-bold text-black">
                eazy<span className="text-[#00C4B5]">C</span>are<span className="text-[#00C4B5]">.</span>A<span className="text-[#00C4B5]">i</span>
              </div>
              <p className="text-xs text-black/50">Black text + Teal accents on white</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0A1628] p-8 flex flex-col items-center justify-center gap-4">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Dark Mode</p>
              <div className="text-3xl font-bold text-white">
                eazy<span className="text-[#00C4B5]">C</span>are<span className="text-[#00C4B5]">.</span>A<span className="text-[#00C4B5]">i</span>
              </div>
              <p className="text-xs text-white/50">White text + Teal accents on dark</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center">
              <Type size={20} className="text-[#1AB89E]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Typography</h2>
              <p className="text-sm text-white/50">Clean, geometric, and highly legible</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-4">Primary Typeface</p>
              <p className="text-2xl font-bold mb-2">Poppins / Syne / DM Sans</p>
              <p className="text-sm text-white/50 mb-6">Geometric sans-serif family for modern, tech-forward feel</p>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold">Bold Heading</p>
                  <p className="text-xs text-white/40">32–48px / Weight 700</p>
                </div>
                <div>
                  <p className="text-xl font-semibold">Section Heading</p>
                  <p className="text-xs text-white/40">20–28px / Weight 600</p>
                </div>
                <div>
                  <p className="text-base">Body copy flows naturally with generous line height for comfortable reading on any device.</p>
                  <p className="text-xs text-white/40">14–18px / Weight 400 / Line-height 1.6</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-4">Font Hierarchy</p>
              <div className="space-y-5">
                {[
                  { label: "H1 / Hero", size: "48px", weight: "700", sample: "AI Care. Human Touch." },
                  { label: "H2 / Section", size: "32px", weight: "700", sample: "Transform Your Clinic" },
                  { label: "H3 / Subsection", size: "24px", weight: "600", sample: "Smart Patient Intake" },
                  { label: "Body", size: "16px", weight: "400", sample: "EazyCare AI is an AI-powered health companion offering instant symptom guidance." },
                  { label: "Caption", size: "12px", weight: "500", sample: "Confidential — Internal Use Only" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white/40">{item.label}</span>
                      <span className="text-xs text-white/30">{item.size} / {item.weight}</span>
                    </div>
                    <p className="text-white/80" style={{ fontSize: item.size, fontWeight: item.weight }}>
                      {item.sample}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Pillars */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Visual Identity Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye size={24} />,
                title: "Simplicity",
                desc: "'eazy' implies a lack of friction. The logo is uncluttered. Every interaction should feel effortless.",
              },
              {
                icon: <Handshake size={24} />,
                title: "Connection",
                desc: "The teal color visually bridges the gap between human care ('Care') and digital intelligence ('Ai').",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Modernity",
                desc: "The '.Ai' suffix and geometric font signal that we are a forward-thinking, tech-first company.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center mx-auto mb-4 text-[#1AB89E]">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/[0.07]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with <span className="text-[#1AB89E]">eazyCare.Ai</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Want to use our brand in your materials? Request high-resolution assets or explore
            partnership opportunities with our team.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm source="brand-guidelines" />
          </div>
          <p className="mt-6 text-xs text-white/30">
            For specific asset requests, email{" "}
            <a href="mailto:partners@eazycare.ai" className="text-[#1AB89E] hover:underline">
              partners@eazycare.ai
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
