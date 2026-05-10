"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
  Calculator,
  Building2,
  Users,
  DollarSign,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  ShieldCheck,
} from "lucide-react";

function formatCurrency(n: number, compact = false) {
  if (compact && n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
  if (compact && n >= 1_000) return "$" + (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function DoctorEfficiencyClient() {
  const [clinics, setClinics] = useState(10);
  const [doctorsPerClinic, setDoctorsPerClinic] = useState(5);
  const [patientsPerDoctor, setPatientsPerDoctor] = useState(40);
  const [revenuePerConsult, setRevenuePerConsult] = useState(25);
  const [workingDays, setWorkingDays] = useState(26);
  const [abandonmentRate, setAbandonmentRate] = useState(15);
  const [productivityGain, setProductivityGain] = useState(35);
  const [abandonmentRecovery, setAbandonmentRecovery] = useState(40);

  const results = useMemo(() => {
    const baseDaily = clinics * doctorsPerClinic * patientsPerDoctor;
    const baseMonthly = baseDaily * workingDays;
    const baseRevenue = baseMonthly * revenuePerConsult;

    const aiDaily = baseDaily * (1 + productivityGain / 100);
    const recoveredDaily = baseDaily * (abandonmentRate / 100) * (abandonmentRecovery / 100);
    const effectiveDaily = aiDaily + recoveredDaily;
    const effectiveMonthly = effectiveDaily * workingDays;
    const aiRevenue = effectiveMonthly * revenuePerConsult;

    const incrementalRevenue = aiRevenue - baseRevenue;
    const roiPct = baseRevenue > 0 ? (incrementalRevenue / baseRevenue) * 100 : 0;

    const extraPatientsDaily = effectiveDaily - baseDaily;
    const virtualDoctors = extraPatientsDaily / patientsPerDoctor;

    return {
      baseDaily,
      baseMonthly,
      baseRevenue,
      effectiveDaily,
      effectiveMonthly,
      aiRevenue,
      incrementalRevenue,
      roiPct,
      extraPatientsDaily,
      virtualDoctors,
    };
  }, [clinics, doctorsPerClinic, patientsPerDoctor, revenuePerConsult, workingDays, abandonmentRate, productivityGain, abandonmentRecovery]);

  const inputSection = (
    <div className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <Building2 size={18} className="text-[#1AB89E]" />
        Hospital Chain Profile
      </h3>

      {[
        { label: "Number of clinics / branches", value: clinics, min: 1, max: 100, step: 1, onChange: setClinics, icon: <Building2 size={14} /> },
        { label: "Doctors per clinic", value: doctorsPerClinic, min: 1, max: 50, step: 1, onChange: setDoctorsPerClinic, icon: <Stethoscope size={14} /> },
        { label: "Patients per doctor / day", value: patientsPerDoctor, min: 5, max: 100, step: 5, onChange: setPatientsPerDoctor, icon: <Users size={14} /> },
        { label: "Revenue per consultation ($)", value: revenuePerConsult, min: 5, max: 500, step: 5, onChange: setRevenuePerConsult, icon: <DollarSign size={14} /> },
        { label: "Working days per month", value: workingDays, min: 1, max: 31, step: 1, onChange: setWorkingDays, icon: <Calendar size={14} /> },
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
          { label: "Productivity gain (%)", value: productivityGain, min: 10, max: 80, step: 5, onChange: setProductivityGain },
          { label: "Abandonment recovery (%)", value: abandonmentRecovery, min: 10, max: 90, step: 5, onChange: setAbandonmentRecovery },
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
            Enterprise Capacity Calculator
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Add <span className="text-[#1AB89E]">20 Virtual Doctors</span>
            <br className="hidden md:block" />
            <span className="text-white"> to Your Hospital Chain</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            eazyCare.Ai unlocks hidden capacity across your network, turning existing staff into
            super-performers and recovering lost patients you didn't even know you were losing.
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

                {/* Hero Metric: Virtual Doctors */}
                <div className="rounded-xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-6 text-center mb-6">
                  <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-2">
                    Virtual Doctors Created
                  </p>
                  <p className="text-5xl md:text-6xl font-bold text-[#1AB89E] mb-2">
                    {results.virtualDoctors.toFixed(1)}
                  </p>
                  <p className="text-sm text-white/60">
                    Additional doctor capacity — without hiring anyone
                  </p>
                </div>

                {/* Before / After */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">Before AI</p>
                    <p className="text-3xl font-bold text-white/80 mb-1">
                      {formatCurrency(results.baseRevenue)}
                    </p>
                    <p className="text-sm text-white/50">Monthly revenue</p>
                    <div className="mt-4 space-y-2 text-sm text-white/50">
                      <p className="flex items-center gap-2"><Building2 size={13} /> {results.baseDaily.toLocaleString()} patients/day</p>
                      <p className="flex items-center gap-2"><Users size={13} /> {clinics * doctorsPerClinic} total doctors</p>
                      <p className="flex items-center gap-2"><Calendar size={13} /> {workingDays} days/month</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-5">
                    <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-2">After AI</p>
                    <p className="text-3xl font-bold text-[#1AB89E] mb-1">
                      {formatCurrency(results.aiRevenue)}
                    </p>
                    <p className="text-sm text-white/60">Monthly revenue</p>
                    <div className="mt-4 space-y-2 text-sm text-white/60">
                      <p className="flex items-center gap-2"><Building2 size={13} className="text-[#1AB89E]" /> {Math.round(results.effectiveDaily).toLocaleString()} patients/day</p>
                      <p className="flex items-center gap-2"><TrendingUp size={13} className="text-[#1AB89E]" /> +{Math.round(results.extraPatientsDaily).toLocaleString()} extra/day</p>
                      <p className="flex items-center gap-2"><Sparkles size={13} className="text-[#1AB89E]" /> +{results.roiPct.toFixed(0)}% total uplift</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Incremental Revenue / Mo", value: formatCurrency(results.incrementalRevenue), accent: true },
                    { label: "Extra Patients / Day", value: "+" + Math.round(results.extraPatientsDaily).toLocaleString(), accent: false },
                    { label: "Total ROI", value: "+" + results.roiPct.toFixed(0) + "%", accent: true },
                    { label: "Extra Patients / Month", value: "+" + Math.round(results.extraPatientsDaily * workingDays).toLocaleString(), accent: false },
                  ].map((metric, i) => (
                    <div key={i} className={`rounded-xl p-4 text-center ${metric.accent ? "border border-[#1AB89E]/20 bg-[#1AB89E]/5" : "border border-white/10 bg-white/[0.02]"}`}>
                      <p className="text-lg font-bold mb-1">{metric.value}</p>
                      <p className="text-xs text-white/50">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Insight */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="rounded-2xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-8 md:p-10">
            <Zap size={32} className="text-[#1AB89E] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              "We Add {Math.round(results.virtualDoctors)} Virtual Doctors to Your Hospital Chain
              <br className="hidden md:block" />
              Without Hiring or Expanding Infrastructure."
            </h2>
            <p className="text-white/60 leading-relaxed max-w-xl mx-auto">
              Hospitals understand "doctors," not "AI features." This calculator proves that
              eazyCare.Ai isn't software — it's revenue expansion capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Is Powerful */}
      <section className="py-16 px-6 border-t border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why This Is <span className="text-[#1AB89E]">Extremely Powerful</span> for Hospital Chains
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users size={24} />,
                title: "Converts AI Into Staffing",
                desc: "Hospitals understand 'doctors,' not 'AI features.' The Virtual Doctor metric speaks their language.",
              },
              {
                icon: <DollarSign size={24} />,
                title: "Justifies Enterprise Pricing",
                desc: "If 1 doctor generates $15K–$30K/month, 20 virtual doctors = $300K–$600K/month value created.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Creates Budget Justification",
                desc: "CFO logic becomes: 'We are not buying software — we are buying revenue expansion capacity.'",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="w-12 h-12 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center text-[#1AB89E] mb-4">
                  {item.icon}
                </div>
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
          <p className="text-white/50 text-center mb-10">A 10-clinic hospital chain using eazyCare.Ai</p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                { label: "Clinics", value: "10" },
                { label: "Doctors/Clinic", value: "5" },
                { label: "Patients/Doc/Day", value: "40" },
                { label: "Revenue/Visit", value: "$25" },
                { label: "Days/Month", value: "26" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-xs text-white/50">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Before AI</p>
                <p className="text-3xl font-bold mb-1">$1.3M</p>
                <p className="text-sm text-white/50">Monthly revenue</p>
                <p className="mt-3 text-sm text-white/40">2,000 patients/day across network</p>
              </div>
              <div className="rounded-xl border border-[#1AB89E]/20 bg-[#1AB89E]/5 p-5">
                <p className="text-xs font-semibold text-[#1AB89E] uppercase tracking-wider mb-3">After AI</p>
                <p className="text-3xl font-bold text-[#1AB89E] mb-1">$1.83M</p>
                <p className="text-sm text-white/60">Monthly revenue (+41%)</p>
                <p className="mt-3 text-sm text-white/50">2,820 patients/day across network</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#1AB89E]/10 border border-[#1AB89E]/20 text-center">
              <p className="text-lg font-bold text-[#1AB89E]">+$530K extra revenue per month</p>
              <p className="text-sm text-white/60">Equivalent to ~20.5 additional doctors at zero hiring cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/[0.07]">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Custom <span className="text-[#1AB89E]">Capacity Report</span>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Ready to see what hidden capacity looks like in your organization? Our enterprise team
            will build a custom analysis using your real network data.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm source="doctor-efficiency-calculator" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> No commitment</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> Custom analysis</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} className="text-[#1AB89E]" /> Enterprise pricing</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
