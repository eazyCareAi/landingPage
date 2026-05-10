"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Rocket,
  Mail,
  ArrowRight,
  ShieldCheck,
  Users,
  Cpu,
  Clock,
  Bot,
  Video,
  Brain,
  LockKeyhole,
  Crown,
  Ticket,
  Lock,
  MessageCircle,
  Globe,
  Database,
  CheckCircle,
  ChevronDown,
  Bell,
  PlayCircle,
  Share2,
  HelpCircle,
} from "lucide-react";
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  GithubIcon,
} from "@/components/SocialIcons";

function useLaunchReadiness() {
  const [pct, setPct] = useState(40);
  useEffect(() => {
    const start = new Date(2026, 4, 7); // May 7, 2026 = 40%
    const launch = new Date(2026, 7, 28); // Aug 28, 2026 = 100%
    const total = launch.getTime() - start.getTime();
    const compute = () => {
      const elapsed = Date.now() - start.getTime();
      const p = Math.min(100, Math.max(40, 40 + (60 * elapsed) / total));
      setPct(Math.round(p));
    };
    compute();
    const id = setInterval(compute, 60000); // recheck every minute
    return () => clearInterval(id);
  }, []);
  return pct;
}

function LaunchReadiness() {
  const pct = useLaunchReadiness();
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-white/55 font-medium">Launch readiness</span>
        <span className="text-xs font-bold text-[#1AB89E]">{pct}% Complete</span>
      </div>
      <div className="h-1.5 bg-[#0F1F35] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const launch = new Date(2026, 7, 28, 0, 0, 0);
    const update = () => {
      const diff = launch.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { v: time.d, l: "Days" },
        { v: time.h, l: "Hours" },
        { v: time.m, l: "Minutes" },
        { v: time.s, l: "Seconds" },
      ].map((u) => (
        <div
          key={u.l}
          className="bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-xl p-4 text-center"
        >
          <div className="text-2xl md:text-4xl font-extrabold text-white tabular-nums">
            {pad(u.v)}
          </div>
          <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/65 mt-1">
            {u.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadForm({
  source,
  showUseCase = true,
  showCountry = true,
  buttonText = "Join the Waitlist",
}: {
  source?: string;
  showUseCase?: boolean;
  showCountry?: boolean;
  buttonText?: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      useCase: fd.get("useCase"),
      country: fd.get("country"),
      source,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div className="text-4xl text-[#1AB89E] mb-3">
          <CheckCircle className="inline-block w-12 h-12" />
        </div>
        <h4 className="text-lg font-bold text-white mb-2">
          You&apos;re on the list! 🎉
        </h4>
        <p className="text-sm text-white/65">
          We&apos;ll email you with early access details before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-xs font-semibold text-white/65 mb-1.5">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Your full name"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-[#1AB89E]/20 transition-all placeholder:text-white/55"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-white/65 mb-1.5">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-[#1AB89E]/20 transition-all placeholder:text-white/55"
        />
      </div>
      {showUseCase && (
        <div>
          <label className="block text-xs font-semibold text-white/65 mb-1.5">
            I&apos;m interested in EazyCare AI for
          </label>
          <select
            name="useCase"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-[#1AB89E]/20 transition-all"
          >
            <option value="">Select one</option>
            <option>Personal health guidance</option>
            <option>My family&apos;s healthcare</option>
            <option>Mental wellness support</option>
            <option>My business / employees</option>
            <option>As a doctor / healthcare provider</option>
          </select>
        </div>
      )}
      {showCountry && (
        <div>
          <label className="block text-xs font-semibold text-white/65 mb-1.5">
            Country
          </label>
          <select
            name="country"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-[#1AB89E]/20 transition-all"
          >
            <option value="">Select your country</option>
            <option>Malaysia</option>
            <option>Singapore</option>
            <option>Indonesia</option>
            <option>Philippines</option>
            <option>India</option>
            <option>United Arab Emirates</option>
            <option>Australia</option>
            <option>United Kingdom</option>
            <option>Other</option>
          </select>
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-[#1AB89E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#1AB89E]/20 hover:bg-[#1AB89E] hover:-translate-y-0.5 transition-all disabled:opacity-60"
      >
        <Rocket size={16} />
        {loading ? "Submitting..." : buttonText}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-500 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between py-5 text-left text-[0.95rem] font-semibold transition-colors ${
          open ? "text-[#1AB89E]" : "text-white hover:text-[#1AB89E]"
        }`}
      >
        {question}
        <ChevronDown
          size={18}
          className={`text-[#1AB89E] transition-transform duration-300 shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? 300 : 0 }}
      >
        <div className="pb-5 text-sm text-white/65 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function LandingClient() {
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSuccess, setHeroSuccess] = useState(false);

  const heroSubscribe = async () => {
    if (!heroEmail.includes("@")) return;
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: heroEmail, source: "Email Subscribe" }),
      });
      if (res.ok) setHeroSuccess(true);
    } catch {
      // network error — keep form visible
    }
  };

  return (
    <div className="min-h-screen bg-[#060E1A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,rgba(26,184,158,0.15)_0%,transparent_70%)] animate-[drift1_18s_ease-in-out_infinite_alternate] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,rgba(26,184,158,0.10)_0%,transparent_70%)] animate-[drift2_22s_ease-in-out_infinite_alternate] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-6">
                <Rocket size={14} />
                Coming Soon — AI Healthcare Reimagined
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] tracking-tight text-white mb-5">
                Your <span className="text-[#1AB89E]">AI-Powered</span>
                <br />
                Health{" "}
                <span className="text-transparent [-webkit-text-stroke:2px_#1A9E8A]">
                  Companion
                </span>
                <br />
                is Almost Here
              </h1>
              <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-md mb-6">
                Instant symptom guidance. Verified doctors online. Mental
                wellness support — 24/7, private, and built for everyone.{" "}
                <strong className="text-white/90">Be first in line.</strong>
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  { icon: Bot, text: "AI Health Assistant" },
                  { icon: Video, text: "Online Doctor Consults" },
                  { icon: Brain, text: "Mental Wellness" },
                  { icon: LockKeyhole, text: "100% Private" },
                ].map((p) => (
                  <span
                    key={p.text}
                    className="inline-flex items-center gap-1.5 bg-[#060E1A] border border-white/10 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/65 shadow-sm"
                  >
                    <p.icon size={14} className="text-[#1AB89E]" />
                    {p.text}
                  </span>
                ))}
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/55 mb-3">
                  <Mail size={14} className="text-[#1AB89E]" />
                  Get notified at launch
                </div>
                {!heroSuccess ? (
                  <div className="flex flex-col sm:flex-row rounded-2xl sm:rounded-full border border-teal-200 bg-teal-50/50 overflow-hidden focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100 transition-all max-w-md">
                    <input
                      type="email"
                      value={heroEmail}
                      onChange={(e) => setHeroEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-transparent border-none outline-none px-5 py-3.5 text-sm text-white placeholder:text-white/55"
                    />
                    <button
                      onClick={heroSubscribe}
                      className="bg-[#1AB89E] text-white px-6 py-3 text-sm font-bold hover:bg-[#1AB89E] transition-colors flex items-center justify-center gap-1.5 rounded-b-2xl sm:rounded-r-full sm:rounded-bl-none"
                    >
                      Notify Me <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-xl px-4 py-3 text-sm text-[#1AB89E] max-w-md">
                    <CheckCircle size={18} />
                    <span>
                      You&apos;re on the list! We&apos;ll notify you the moment
                      we launch. 🎉
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 mt-2 text-xs text-white/55">
                  <ShieldCheck size={12} className="text-[#1AB89E]" />
                  No spam. Unsubscribe anytime. Early access + exclusive launch
                  offer for subscribers.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-white/55 font-medium">
                  Follow us:
                </span>
                {[
                  { href: "https://x.com/eazycareai", icon: TwitterIcon },
                  // { href: "https://www.instagram.com/easyCare.ai", icon: InstagramIcon },
                  { href: "https://github.com/eazyCareAi", icon: GithubIcon },
                  { href: "https://www.linkedin.com/in/eazycareai", icon: LinkedinIcon },
                  { href: "https://www.youtube.com/@eazyCareAi", icon: YoutubeIcon },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="w-9 h-9 rounded-full bg-[#0A1628] border border-white/10 flex items-center justify-center text-white/55 hover:bg-[#1AB89E] hover:text-white hover:border-teal-500 hover:-translate-y-0.5 transition-all"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1AB89E] mb-5">
                  <Clock size={14} />
                  Launching 28 August 2026 (00:00:00 IST)
                </div>
                <CountdownTimer />
                <LaunchReadiness />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-3">
                {[
                  {
                    icon: Bot,
                    title: "AI Health Assistant",
                    desc: "Instant answers, 24/7. No appointment needed.",
                  },
                  {
                    icon: Video,
                    title: "Online Doctors",
                    desc: "Verified physicians via video or chat, in minutes.",
                  },
                  {
                    icon: Brain,
                    title: "Mental Wellness",
                    desc: "AI counsellor — judgment-free, always available.",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Health Records",
                    desc: "All your health data, private & secure.",
                    soon: true,
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-[#1AB89E]/10 hover:border-[#1AB89E]/30 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center text-[#1AB89E] mb-3">
                      <f.icon size={18} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-white/65 leading-relaxed">
                      {f.desc}
                    </p>
                    {"soon" in f && (
                      <span className="inline-block mt-2 bg-[#0A1628] rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold text-white/55 uppercase tracking-wide">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="border-y border-white/10 py-7 bg-[#060E1A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
            {[
              { icon: Users, strong: "Trusted by", text: "Patients & Doctors" },
              { icon: Cpu, strong: "AI-Powered", text: "Health Insights" },
              { icon: ShieldCheck, strong: "100%", text: "Secure & Private" },
              { icon: Clock, strong: "Available 24/7", text: "Whenever You Need" },
            ].map((t) => (
              <div
                key={t.strong}
                className="flex items-center gap-3 py-2 md:border-r md:border-white/10 md:last:border-r-0 md:px-6"
              >
                <t.icon size={22} className="text-[#1AB89E] shrink-0" />
                <span className="text-sm text-white/65">
                  <strong className="text-white">{t.strong}</strong>
                  <br />
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 md:py-24" id="how-it-works">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
              <Rocket size={14} />
              Simple & Fast
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
              From Confusion to Clarity
              <br />
              in Minutes
            </h2>
            <p className="text-base text-white/65 max-w-lg mx-auto leading-relaxed">
              Here&apos;s how EazyCare AI turns your health questions into clear,
              actionable answers — no waiting rooms required.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: 1,
                title: "Tell Us How You Feel",
                desc: "Describe your symptoms, health concern, or emotional state in plain language — as brief or as detailed as you like.",
              },
              {
                num: 2,
                title: "Get Instant AI Guidance",
                desc: "Our AI Health Assistant analyses your input and delivers medically-informed insights within seconds.",
              },
              {
                num: 3,
                title: "Consult a Real Doctor",
                desc: "Need professional care? Connect with a verified, licensed doctor via video or chat — in minutes, not weeks.",
              },
              {
                num: 4,
                title: "Track Your Health",
                desc: "Monitor your wellness journey, past consultations, and health progress — all in your private dashboard.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-[#1AB89E]/5 hover:border-[#1AB89E]/30 transition-all h-full relative">
                  <div className="w-11 h-11 rounded-full bg-[#1AB89E] text-white flex items-center justify-center text-base font-extrabold mb-4 shadow-lg shadow-[#1AB89E]/20">
                    {s.num}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {s.desc}
                  </p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-6 -right-3 text-teal-200">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section
        className="py-20 md:py-24 bg-[#060E1A]"
        id="waitlist"
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
                <Bell size={14} />
                Early Access Perks
              </div>
              <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
                Join the Waitlist.
                <br />
                Get <span className="text-[#1AB89E]">Rewarded</span> First.
              </h2>
              <p className="text-base text-white/65 leading-relaxed mb-8 max-w-md">
                EazyCare AI is launching soon. Waitlist subscribers get
                exclusive benefits that won&apos;t be available after launch.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Crown,
                    title: "3 Months Free Premium",
                    desc: "Waitlist members get 3 months of premium access — AI assistant, doctor consultations & wellness — completely free.",
                  },
                  {
                    icon: Ticket,
                    title: "Priority Launch Access",
                    desc: "Skip the queue. Waitlist members get access before the general public on launch day.",
                  },
                  {
                    icon: Lock,
                    title: "Founder Pricing — Locked Forever",
                    desc: "The price you see at launch is the price you keep — for life. Regular pricing increases after launch.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Shape the Product",
                    desc: "Early users get direct access to our product team to influence the features we build first.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center text-[#1AB89E] shrink-0">
                      <p.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        {p.title}
                      </h4>
                      <p className="text-xs text-white/65 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white/5 backdrop-blur-xl border border-[#1AB89E]/30 rounded-3xl p-6 md:p-10 shadow-lg">
                <h3 className="text-xl font-extrabold text-white mb-1">
                  Secure Your Spot 🩺
                </h3>
                <p className="text-sm text-white/65 mb-6">
                  Join thousands already on the waitlist. Takes 30 seconds.
                </p>
                <LeadForm source="Main Waitlist" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
              <Cpu size={14} />
              The Problem We&apos;re Solving
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
              Healthcare is Broken.
              <br />
              We&apos;re Fixing It.
            </h2>
            <p className="text-base text-white/65 max-w-lg mx-auto leading-relaxed">
              The numbers behind why EazyCare AI needs to exist right now.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "3.6B",
                lbl: "People globally lack access to basic healthcare services",
              },
              {
                num: "14 days",
                lbl: "Average wait time for a GP appointment in Southeast Asia",
              },
              {
                num: "$40",
                lbl: "Per visit cost of private out-of-pocket GP consultation",
              },
              {
                num: "< 900",
                lbl: "GP per 1M people in SEA region",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-[#1AB89E]/5 hover:border-[#1AB89E]/30 transition-all">
                  <div className="text-3xl md:text-[2.4rem] font-black text-[#1AB89E] tracking-tight leading-none mb-2">
                    {s.num}
                  </div>
                  <div className="text-xs text-white/65 leading-relaxed">
                    {s.lbl}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-20 md:py-24 bg-[#060E1A]" id="privacy">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
                <ShieldCheck size={14} />
                Privacy First
              </div>
              <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
                Your Health Data.
                <br />
                <span className="text-[#1AB89E]">Always Yours.</span>
              </h2>
              <p className="text-base text-white/65 leading-relaxed mb-6 max-w-md">
                EazyCare AI is built privacy-first. We never sell, share, or
                monetise your health data. Every conversation is end-to-end
                encrypted from the moment you type.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: LockKeyhole, text: "End-to-End Encrypted" },
                  { icon: ShieldCheck, text: "HIPAA & DPDP Compliant" },
                  { icon: Globe, text: "GDPR Ready" },
                  { icon: Database, text: "No Data Selling" },
                  { icon: CheckCircle, text: "AES-256 Encryption" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-1.5 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-lg px-3 py-2 text-xs font-semibold text-white/90"
                  >
                    <b.icon size={14} className="text-[#1AB89E]" />
                    {b.text}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-white/5 border border-[#1AB89E]/30 rounded-3xl p-8 md:p-10 text-center shadow-lg">
                <div className="w-[120px] h-[120px] rounded-full bg-[#1AB89E]/10 border-2 border-teal-200 flex items-center justify-center text-[#1AB89E] text-5xl mx-auto mb-5 shadow-lg shadow-teal-500/10">
                  <ShieldCheck size={48} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Bank-Grade Security
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  HIPAA & GDPR Compliant Infrastructure. Your health story stays
                  between you and your care team — always.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Channels */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
              <Share2 size={14} />
              Follow Our Journey
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-base text-white/65 max-w-lg mx-auto leading-relaxed">
              Follow EazyCare AI on social media for health tips, launch
              updates, behind-the-scenes, and exclusive prelaunch content.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "https://x.com/eazycareai",
                icon: TwitterIcon,
                color: "#1DA1F2",
                bg: "rgba(29,161,242,0.1)",
                title: "Twitter / X",
                desc: "Real-time health tips, launch countdown, and brand voice.",
                handle: "@eazycareai",
              },
              // {
              //   href: "https://www.instagram.com/easyCare.ai",
              //   icon: InstagramIcon,
              //   color: "#E1306C",
              //   bg: "rgba(225,48,108,0.1)",
              //   title: "Instagram",
              //   desc: "Health education, behind-the-scenes, and wellness content.",
              //   handle: "@easyCare.ai",
              // },
              {
                href: "https://github.com/eazyCareAi",
                icon: GithubIcon,
                color: "#333",
                bg: "rgba(51,51,51,0.1)",
                title: "GitHub",
                desc: "Open-source contributions and project updates.",
                handle: "@eazyCareAi",
              },
              {
                href: "https://linkedin.com/in/eazycareai",
                icon: LinkedinIcon,
                color: "#0A66C2",
                bg: "rgba(10,102,194,0.1)",
                title: "LinkedIn",
                desc: "Corporate wellness, AI healthcare thought leadership, and B2B updates.",
                handle: "eazycareai",
              },
              {
                  href: "https://www.youtube.com/@eazyCareAi",
                icon: YoutubeIcon,
                color: "#FF0000",
                bg: "rgba(255,0,0,0.1)",
                title: "YouTube",
                desc: "Doctor Q&As, platform tutorials, and health education series.",
                handle: "@eazyCareAi",
              },
            ].map((c, i) => (
              <ScrollReveal key={c.href} delay={i * 100}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className="group block bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1.5 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-colors"
                    style={{ background: c.bg, color: c.color }}
                  >
                    <c.icon size={28} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-xs text-white/65 mb-3 leading-relaxed">
                    {c.desc}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold rounded-full px-3 py-1"
                    style={{ color: c.color, background: c.bg }}
                  >
                    {c.handle}
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-[#060E1A]" id="faq">
        <div className="max-w-[1160px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
              <HelpCircle size={14} />
              FAQ
            </div>
            <h2 className="text-3xl md:text-[2.4rem] font-extrabold tracking-tight text-white mb-4">
              Got Questions?
            </h2>
            <p className="text-base text-white/65 max-w-md mx-auto leading-relaxed">
              Everything you need to know before we launch.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 md:px-6 shadow-sm">
              <FAQItem question="What is EazyCare AI?">
                EazyCare AI is an AI-powered health companion that provides
                instant symptom guidance, connects you with verified doctors for
                online consultations, and offers mental wellness support — all in
                one secure, private platform available 24/7. Free to get started.
              </FAQItem>
              <FAQItem question="When is EazyCare AI launching?">
                EazyCare AI is launching very soon. Exact date coming shortly —
                join the waitlist to get notified first and secure your early
                access perks before everyone else.
              </FAQItem>
              <FAQItem question="Is EazyCare AI free?">
                Yes — EazyCare AI will have a free tier available from day one.
                The AI Health Assistant is free to use. Premium features
                including unlimited doctor consultations and advanced health
                tracking are available via subscription. Waitlist members get 3
                months of premium free at launch.
              </FAQItem>
              <FAQItem question="Is my health data safe?">
                Absolutely. EazyCare AI uses end-to-end encryption for all health
                interactions. Your personal health data is never sold or shared
                without your explicit consent. The platform is built to HIPAA and
                GDPR standards. Your health story is yours — always.
              </FAQItem>
              <FAQItem question="Can EazyCare AI replace a real doctor?">
                EazyCare AI is your first line of care — not a replacement for
                professional medical advice. The AI Health Assistant helps you
                understand symptoms and decide next steps. For professional
                diagnosis, the platform seamlessly connects you with a verified,
                licensed doctor via video or chat.
              </FAQItem>
              <FAQItem question="Which countries will EazyCare AI be available in?">
                EazyCare AI is launching first in Malaysia, Singapore,
                Indonesia, and the Philippines. Expansion to India, UAE, and
                other markets follows in Phase 2. Sign up to the waitlist
                regardless of location — we&apos;ll notify you when your country
                goes live.
              </FAQItem>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden" id="cta">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,158,138,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-5">
              <Rocket size={14} />
              Be First
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Healthcare is About to Get{" "}
              <span className="text-[#1AB89E]">Eazy</span>.
            </h2>
            <p className="text-base md:text-lg text-white/65 max-w-xl mx-auto leading-relaxed mb-8">
              No waiting rooms. No confusion. No appointments. Just clear,
              trustworthy health guidance — powered by AI, backed by real
              doctors.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Link
                href="#waitlist"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#1AB89E] text-white font-bold text-sm shadow-lg shadow-[#1AB89E]/20 hover:bg-[#1AB89E] hover:-translate-y-0.5 transition-all"
              >
                <Bell size={16} />
                Join the Waitlist — Free
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent text-white font-semibold text-sm border-[1.5px] border-white/10 hover:border-teal-500 hover:text-[#1AB89E] hover:-translate-y-0.5 transition-all"
              >
                <PlayCircle size={16} />
                See How It Works
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs text-white/55">
                Follow for launch updates:
              </span>
              {[
                { href: "https://x.com/eazycareai", icon: TwitterIcon },
                // { href: "https://www.instagram.com/easyCare.ai", icon: InstagramIcon },
                { href: "https://www.linkedin.com/in/eazycareai", icon: LinkedinIcon },
                { href: "https://www.github.com/eazyCareAi", icon: GithubIcon },
                { href: "https://www.youtube.com/@eazyCareAi", icon: YoutubeIcon },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 rounded-full bg-[#0A1628] border border-white/10 flex items-center justify-center text-white/55 hover:bg-[#1AB89E] hover:text-white hover:border-teal-500 hover:-translate-y-0.5 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
