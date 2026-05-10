"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
  Calculator,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Clock,
  CheckCircle,
} from "lucide-react";

function formatCurrency(n: number, compact = false) {
  if (compact && n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(1) + "M";
  if (compact && n >= 1_000) return "$" + (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);

  useEffect(() => {
    const start = prev.current;
    const diff = value - start;
    const duration = 800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = start + diff * eased;
      setDisplay(current);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    prev.current = value;
  }, [value]);

  let text: string;
  if (value >= 1_000_000) text = (display / 1_000_000).toFixed(2) + "M";
  else if (value >= 1_000) text = (display / 1_000).toFixed(1) + "K";
  else text = display.toFixed(0);

  return (
    <span>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

export default function ClinicRoiClient() {
  const [patientsPerDay, setPatientsPerDay] = useState(60);
  const [revenuePerConsult, setRevenuePerConsult] = useState(25);
  const [doctors, setDoctors] = useState(3);
  const [operatingDays, setOperatingDays] = useState(26);
  const [abandonmentRate, setAbandonmentRate] = useState(15);
  const [throughputGain, setThroughputGain] = useState(30);
  const [abandonmentReduction, setAbandonmentReduction] = useState(50);
  const [retentionGain, setRetentionGain] = useState(10);

  const results = useMemo(() => {
    const baselineRevenue = patientsPerDay * revenuePerConsult * operatingDays;
    const newCapacity = patientsPerDay * (1 + throughputGain / 100);
    const recovered = patientsPerDay * (abandonmentRate / 100) * (abandonmentReduction / 100);
    const effectivePatients = newCapacity + recovered;
    const aiRevenue = effectivePatients * revenuePerConsult * operatingDays;
    const incremental = aiRevenue - baselineRevenue;
    const roiPct = baselineRevenue > 0 ? (incremental / baselineRevenue) * 100 : 0;
    const extraPatientsPerDay = effectivePatients - patientsPerDay;
    const extraPatientsPerMonth = extraPatientsPerDay * operatingDays;

    return {
      baselineRevenue,
      aiRevenue,
      incremental,
      roiPct,
      effectivePatients,
      extraPatientsPerDay,
      extraPatientsPerMonth,
    };
  }, [patientsPerDay, revenuePerConsult, doctors, operatingDays, abandonmentRate, throughputGain, abandonmentReduction]);

  const inputSection = (
    <div className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <Stethoscope size={18} className="text-[#1AB89E]" />
        Your Clinic Profile
      </h3>

      {[
        { label: "Patients per day", value: patientsPerDay, min: 10, max: 500, step: 5, onChange: setPatientsPerDay, icon: <Users size={14} /> },
        { label: "Revenue per consultation ($)", value: revenuePerConsult, min: 5, max: 500, step: 5, onChange: setRevenuePerConsult, icon: <DollarSign size={14} /> },
        { label: "Number of doctors", value: doctors, min: 1, max: 50, step: 1, onChange: setDoctors, icon: <Stethoscope size={14} /> },
        { label: "Operating days per month", value: operatingDays, min: 1, max: 31, step: 1, onChange: setOperatingDays, icon: <Calendar size={14} /> },
        { label: "Patient abandonment rate (%)", value: abandonmentRate, min: 0, max: 50, step: 1, onChange: setAbandonmentRate, icon: <AlertTriangle size={14} /> },
      ].map((field) => (
        <div key={field.label}>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-white/70 flex items-center gap-2">
              {field.icon} {field.label}
            </label>
            <span className="text-sm font-bold text-[#1AB89E]">{field.value}</span>
          </div>
          <input
            type="range"
            min={field.min}
            max={field.max}
            step={field.step}
            value={field.value}
            onChange={(e) => field.onChange(Number(e.target.value))}
            className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-[#1AB89E]"
          />
        </div>
      ))}

      <div className="pt-4 border-t border-white/10">
        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
          <Sparkles size={18} className="text-[#1AB89E]" />
          AI Impact Assumptions
        </h3>
        {[
          { label: "Throughput increase (%)", value: throughputGain, min: 10, max: 80, step: 5, onChange: setThroughputGain },
          { label: "Abandonment recovery (%)", value: abandonmentReduction, min: 10, max: 90, step: 5, onChange: setAbandonmentReduction },
          { label: "Retention gain (%)", value: retentionGain, min: 0, max: 30, step: 5, onChange: setRetentionGain },
        ].map((field) => (
          <div key={field.label} className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-white/70">{field.label}</label>
              <span className="text-sm font-bold text-[#1AB89E]">{field.value}%</span>
            </div>
            <input
              type="range"
              min={field.min}
              max={field.max}
              step={field.step}
              value={field.value}
              onChange={(e) => field.onChange(Number(e.target.value))}
              className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer accent-[#1AB89E]"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#060E1A] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1AB89E]/5 to-transparent pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1AB89E]/10 border border-[#1AB89E]/20 text-[#1AB89E] text-sm font-semibold mb-6">
            <Calculator size={15} />
            Free ROI Calculator
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Increase Your Clinic Revenue by{" "}
            <span className="text-[#1AB89E]">40%</span>
            <br className="hidden md:block" />
            <span className="text-white"> — Without Adding a Single Doctor</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Our AI Clinic ROI Calculator shows you exactly how much more money your practice
            could be making starting this month. No guesswork. Just your numbers, multiplied.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Inputs */}
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              {inputSection}
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-6">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp size={18} className="text-[#1AB89E]" />
                  <h3 className="text-lg font-bold">Your Results</h3>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Before AI</p>
                    <p className="text-3xl font-bold text-white/80 mb-1">
                      {formatCurrency(results.baselineRevenue)}
                    </p>
                    <p className="text-sm text-white/50">Monthly revenue</p>
                    <div className="mt-4 space-y-2 text-sm text-white/50">
                      <p className="flex items-center gap-2"><Users size={13} /> {patientsPerDay} patients/day</p>
                      <p className="flex items-center gap-2"><DollarSign size={13} /> ${revenuePerConsult}/consultation</p>
                      <p className="flex items-center gap-2"><Calendar size={13} /> {operatingDays} days/month</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-5">
                    <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-2">After AI</p>
                    <p className="text-3xl font-bold text-[#1AB89E] mb-1">
                      {formatCurrency(results.aiRevenue)}
                    </p>
                    <p className="text-sm text-white/60">Monthly revenue</p>
                    <div className="mt-4 space-y-2 text-sm text-white/60">
                      <p className="flex items-center gap-2"><Users size={13} className="text-[#1AB89E]" /> {Math.round(results.effectivePatients)} patients/day</p>
                      <p className="flex items-center gap-2"><TrendingUp size={13} className="text-[#1AB89E]" /> +{results.extraPatientsPerDay.toFixed(0)} extra/day</p>
                      <p className="flex items-center gap-2"><Sparkles size={13} className="text-[#1AB89E]" /> +{results.roiPct.toFixed(0)}% ROI</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Extra Revenue / Month", value: formatCurrency(results.incremental), accent: true },
                    { label: "Extra Patients / Month", value: "+" + results.extraPatientsPerMonth.toFixed(0), accent: false },
                    { label: "ROI Percentage", value: "+" + results.roiPct.toFixed(0) + "%", accent: true },
                    { label: "Payback Period", value: "1–3 weeks", accent: false },
                  ].map((metric, i) => (
                    <div key={i} className={`rounded-xl p-4 text-center ${metric.accent ? "border border-[#1AB89E]/20 bg-[#1AB89E]/5" : "border border-white/10 bg-white/[0.02]"}`}>
                      <p className="text-xl font-bold mb-1">{metric.value}</p>
                      <p className="text-xs text-white/50">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How <span className="text-[#1AB89E]">eazyCare.Ai</span> Increases Your Revenue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users size={24} />,
                title: "More Patients Seen",
                stat: "+20–50%",
                desc: "AI-powered intake and triage reduce consultation time, letting each doctor see more patients per day.",
              },
              {
                icon: <Clock size={24} />,
                title: "Fewer Patients Lost",
                stat: "+5–15%",
                desc: "Smart queue management and pre-consultation screening reduce abandonment from long wait times.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Higher Retention",
                stat: "+5–10%",
                desc: "Better patient experience and follow-up automation drive repeat visits and long-term loyalty.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="w-12 h-12 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center text-[#1AB89E] mb-4">
                  {item.icon}
                </div>
                <p className="text-2xl font-bold text-[#1AB89E] mb-1">{item.stat}</p>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Example */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Realistic Example</h2>
          <p className="text-white/50 text-center mb-10">A typical clinic using eazyCare.Ai</p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Doctors", value: "3" },
                { label: "Patients/Day", value: "60" },
                { label: "Revenue/Visit", value: "$20" },
                { label: "Days/Month", value: "26" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Before AI</p>
                <p className="text-3xl font-bold mb-1">$31,200</p>
                <p className="text-sm text-white/50">Monthly revenue</p>
              </div>
              <div className="rounded-xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-5">
                <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-3">After AI</p>
                <p className="text-3xl font-bold text-[#1AB89E] mb-1">$43,680</p>
                <p className="text-sm text-white/60">Monthly revenue (+40%)</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#1AB89E]/10 border border-[#1AB89E]/20 text-center">
              <p className="text-lg font-bold text-[#1AB89E]">+$12,480 extra revenue per month</p>
              <p className="text-sm text-white/60">Software cost typically recovered in 1–3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/[0.07]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book a Free <span className="text-[#1AB89E]">Revenue Audit</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            See exactly what eazyCare.Ai can do for your clinic. Our team will walk you through
            a personalized analysis using your real numbers.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm source="clinic-roi-calculator" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> No commitment</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> Personalized report</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> 15-min call</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
