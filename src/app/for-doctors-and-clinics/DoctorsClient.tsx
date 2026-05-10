"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { detectCountry, getCountryContent, setDetectedCountry, countryFlags, type CountryContent, type CountryCode } from "@/lib/countryData";
import {
  Hospital, CalendarCheck, PlayCircle, AlertCircle, Clock, Users, FileX, DollarSign, IdCard,
  MessageCircle, HeartPulse, TrendingUp, Stethoscope, Zap, Brain, Smile, MonitorPlay, Bot,
  Trophy, Plug, MessageSquare, Rocket, Mail, ArrowLeft, CheckCircle, Smartphone, ScanLine,
  Ban, HeartHandshake, Handshake, Wand2, Crown, Star, ShieldCheck, BarChart3, LockKeyhole,
  Globe, Shield, Bell, Watch, RefreshCw, TrendingDown, Droplets, Thermometer, Moon, Battery,
  Activity, Waves, AlertTriangle, QrCode, Phone, ListChecks, ChevronDown, Scan, Fingerprint,
} from "lucide-react";


function useCountUp(target: number, suffix = "", duration = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setValue(Math.floor(start));
            if (start >= target) clearInterval(timer);
          }, 16);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, display: value + suffix };
}

function CountUpMetric({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { ref, display } = useCountUp(target, suffix);
  return (
    <div ref={ref}>
      <div className="metric-big">{display}</div>
      <div className="metric-lbl" style={{ marginTop: "8px" }}>{label}</div>
    </div>
  );
}

function PageStyles() {
  return (
    <style>{`

*,*::before,*::after{box-sizing:border-box}
:root{
  --teal:#1AB89E;--teal2:#0ED4B5;--teal-dim:rgba(26,184,158,.15);--teal-glow:rgba(26,184,158,.25);
  --navy:#060E1A;--navy2:#0A1628;--navy3:#0F1F35;--navy4:#162840;
  --slate:#1C2E45;--slate2:#243650;
  --white:#FFFFFF;--off:#EEF4F3;--muted:rgba(255,255,255,.5);--faint:rgba(255,255,255,.12);
  --red:#FF4D6D;--amber:#FFAA00;--green:#1AB89E;
  --f-head:'Poppins',sans-serif;--f-body:'Poppins',sans-serif;
  --r:14px;--r2:24px;--r3:32px;
}
html{scroll-behavior:smooth}
body{font-family:var(--f-body);background:var(--navy);color:var(--white);overflow-x:hidden;line-height:1.6}

/* ── CANVAS BG ─────────────────────────────────────────── */
#bgCanvas{position:fixed;inset:0;z-index:0;pointer-events:none}
.page-wrap{position:relative;z-index:1}

/* ── HERO ──────────────────────────────────────────────── */
.hero{
  min-height:100vh;display:flex;align-items:center;
  padding:120px 48px 80px;max-width:1400px;margin:0 auto;
  gap:64px;
}
.hero-left{flex:1;min-width:0}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(26,184,158,.1);border:1px solid rgba(26,184,158,.25);
  border-radius:100px;padding:6px 16px;
  font-size:.78rem;font-weight:600;color:var(--teal);
  letter-spacing:.06em;text-transform:uppercase;margin-bottom:28px
}
.hero-eyebrow .pulse{
  width:8px;height:8px;border-radius:50%;background:var(--teal);
  animation:pulseGlow 2s ease-in-out infinite
}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(26,184,158,.6)}50%{box-shadow:0 0 0 6px rgba(26,184,158,0)}}

.hero-h1{
  font-family:var(--f-head);font-size:clamp(2.6rem,5vw,4.2rem);
  font-weight:800;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px
}
.hero-h1 .teal{color:var(--teal)}
.hero-h1 .stroke{-webkit-text-stroke:2px var(--teal);color:transparent}
.hero-sub{
  font-size:1.08rem;color:rgba(255,255,255,.78);line-height:1.75;
  max-width:500px;margin-bottom:40px
}
.hero-stats{display:flex;gap:32px;margin-bottom:44px;flex-wrap:wrap}
.h-stat{display:flex;flex-direction:column}
.h-stat-num{
  font-family:var(--f-head);font-size:2.2rem;font-weight:800;
  color:var(--teal);line-height:1;letter-spacing:-.03em
}
.h-stat-lbl{font-size:.78rem;color:rgba(255,255,255,.68);margin-top:4px}
.hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
.btn-primary{
  display:inline-flex;align-items:center;gap:8px;
  background:var(--teal);color:var(--navy);
  font-family:var(--f-body);font-size:.95rem;font-weight:700;
  padding:15px 32px;border-radius:100px;text-decoration:none;border:none;cursor:pointer;
  box-shadow:0 6px 24px rgba(26,184,158,.45);transition:all .2s
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 36px rgba(26,184,158,.6)}
.btn-ghost{
  display:inline-flex;align-items:center;gap:8px;
  background:transparent;color:var(--white);
  font-family:var(--f-body);font-size:.95rem;font-weight:600;
  padding:15px 32px;border-radius:100px;text-decoration:none;
  border:1.5px solid rgba(255,255,255,.2);transition:all .2s;cursor:pointer
}
.btn-ghost:hover{border-color:var(--teal);color:var(--teal)}

/* ── HERO RIGHT — KIOSK SVG ───────────────────────────── */
.hero-right{flex:0 0 520px;position:relative}
.kiosk-scene{width:100%;max-width:520px}

/* ── SECTION COMMONS ───────────────────────────────────── */
.section{padding:96px 48px;max-width:1400px;margin:0 auto}
.sec-tag{
  display:inline-flex;align-items:center;gap:6px;
  background:rgba(26,184,158,.08);border:1px solid rgba(26,184,158,.2);
  border-radius:100px;padding:5px 14px;
  font-size:.75rem;font-weight:700;color:var(--teal);
  letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px
}
.sec-h2{
  font-family:var(--f-head);font-size:clamp(1.9rem,3.5vw,2.9rem);
  font-weight:800;letter-spacing:-.025em;line-height:1.15;margin-bottom:14px
}
.sec-desc{font-size:1rem;color:rgba(255,255,255,.75);max-width:560px;line-height:1.75}
.center{text-align:center}.center .sec-desc{margin:0 auto}

/* ── DIVIDER ───────────────────────────────────────────── */
.divider{height:1px;background:linear-gradient(90deg,transparent,rgba(26,184,158,.25),transparent);margin:0 48px}

/* ── THE PROBLEM ────────────────────────────────────────── */
.problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:56px}
.prob-card{
  background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2);
  border-radius:var(--r2);padding:28px;
  display:flex;align-items:flex-start;gap:16px;
  transition:all .3s
}
.prob-card:hover{transform:translateY(-4px);border-color:rgba(255,77,109,.4)}
.prob-icon{
  width:50px;height:50px;min-width:50px;border-radius:14px;
  background:rgba(255,77,109,.12);display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;color:#FF4D6D
}
.prob-card h3{font-family:var(--f-head);font-size:.98rem;font-weight:700;margin-bottom:6px}
.prob-card p{font-size:.82rem;color:rgba(255,255,255,.72);line-height:1.65}
.prob-num{
  font-family:var(--f-head);font-size:1.6rem;font-weight:800;
  color:#FF4D6D;margin-bottom:4px
}

/* ── KIOSK EXPLAINER ───────────────────────────────────── */
.kiosk-explainer{
  display:grid;grid-template-columns:1fr 1fr;
  gap:64px;align-items:center;margin-top:56px
}
.flow-steps{display:flex;flex-direction:column;gap:0}
.flow-step{
  display:flex;align-items:flex-start;gap:20px;
  padding:24px 0;border-bottom:1px solid rgba(255,255,255,.06);
  cursor:pointer;transition:all .2s
}
.flow-step:last-child{border-bottom:none}
.flow-step:hover .fs-icon{background:var(--teal);color:var(--navy)}
.fs-num{
  width:32px;height:32px;min-width:32px;border-radius:50%;
  background:rgba(26,184,158,.15);border:1px solid rgba(26,184,158,.3);
  display:flex;align-items:center;justify-content:center;
  font-family:var(--f-head);font-size:.85rem;font-weight:800;color:var(--teal);
  margin-top:3px
}
.fs-icon{
  width:48px;height:48px;min-width:48px;border-radius:14px;
  background:rgba(26,184,158,.1);display:flex;align-items:center;justify-content:center;
  font-size:1.3rem;color:var(--teal);transition:all .3s
}
.flow-step h3{font-family:var(--f-head);font-size:.98rem;font-weight:700;margin-bottom:5px}
.flow-step p{font-size:.82rem;color:rgba(255,255,255,.72);line-height:1.65}
.flow-step .tag{
  display:inline-block;margin-top:8px;
  background:rgba(26,184,158,.1);border-radius:100px;
  padding:3px 12px;font-size:.7rem;font-weight:600;color:var(--teal)
}

/* ── KIOSK DISPLAY VISUALIZATION ───────────────────────── */
.kiosk-display-wrap{
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r3);padding:32px;position:relative;overflow:hidden
}
.kiosk-display-wrap::before{
  content:'';position:absolute;top:-40%;right:-20%;
  width:400px;height:400px;
  background:radial-gradient(circle,rgba(26,184,158,.12) 0%,transparent 70%);
  border-radius:50%;pointer-events:none
}

/* ── BENEFITS BENTO ────────────────────────────────────── */
.bento{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto auto;gap:20px;margin-top:56px}
.bento-card{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r2);padding:28px;transition:all .35s;position:relative;overflow:hidden
}
.bento-card::before{
  content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,transparent,var(--teal),transparent);
  opacity:0;transition:opacity .3s
}
.bento-card:hover{transform:translateY(-6px);border-color:rgba(26,184,158,.3);background:rgba(26,184,158,.06)}
.bento-card:hover::before{opacity:1}
.bento-big{grid-column:span 2}
.bc-icon{
  width:52px;height:52px;border-radius:16px;
  background:rgba(26,184,158,.12);display:flex;align-items:center;justify-content:center;
  font-size:1.4rem;color:var(--teal);margin-bottom:18px
}
.bento-card h3{font-family:var(--f-head);font-size:1.05rem;font-weight:700;margin-bottom:10px}
.bento-card p{font-size:.83rem;color:rgba(255,255,255,.72);line-height:1.7}
.metric-big{
  font-family:var(--f-head);font-size:3.2rem;font-weight:800;
  color:var(--teal);line-height:1;letter-spacing:-.03em;margin-bottom:8px
}
.metric-lbl{font-size:.8rem;color:rgba(255,255,255,.68)}

/* ── LIVE DASHBOARD MOCKUP ─────────────────────────────── */
.dashboard-section{padding:80px 48px;background:rgba(255,255,255,.015)}
.dashboard-inner{max-width:1400px;margin:0 auto}
.dash-grid{display:grid;grid-template-columns:280px 1fr;gap:24px;margin-top:48px}
.dash-sidebar{
  background:var(--navy3);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r2);padding:20px;display:flex;flex-direction:column;gap:8px
}
.dash-patient{
  display:flex;align-items:center;gap:12px;
  padding:12px;border-radius:var(--r);cursor:pointer;transition:all .2s
}
.dash-patient:hover,.dash-patient.active{background:rgba(26,184,158,.1);border:1px solid rgba(26,184,158,.2)}
.dash-patient{border:1px solid transparent}
.dp-avatar{
  width:38px;height:38px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--f-head);font-size:.85rem;font-weight:800;color:var(--navy);flex-shrink:0
}
.dp-info{min-width:0}
.dp-name{font-size:.82rem;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dp-status{font-size:.7rem;margin-top:2px}
.dash-main{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:20px}
.dash-card{
  background:var(--navy3);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r2);padding:22px
}
.dash-card-title{
  font-size:.72rem;font-weight:700;letter-spacing:.08em;
  text-transform:uppercase;color:rgba(255,255,255,.65);margin-bottom:16px
}
.vital-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.vital-name{font-size:.82rem;color:rgba(255,255,255,.65)}
.vital-val{font-family:var(--f-head);font-size:.95rem;font-weight:700}
.vital-bar{flex:1;height:5px;background:rgba(255,255,255,.08);border-radius:100px;margin:0 12px;overflow:hidden}
.vital-fill{height:100%;border-radius:100px;transition:width 1.5s ease}
.ai-bubble{
  background:rgba(26,184,158,.08);border:1px solid rgba(26,184,158,.2);
  border-radius:var(--r);padding:12px 14px;margin-bottom:10px;
  font-size:.8rem;color:rgba(255,255,255,.75);line-height:1.6
}
.ai-bubble strong{color:var(--teal)}
.ai-typing{display:inline-flex;gap:4px;align-items:center;margin-left:6px}
.ai-typing span{
  width:5px;height:5px;border-radius:50%;background:var(--teal);
  animation:typing .9s ease-in-out infinite
}
.ai-typing span:nth-child(2){animation-delay:.2s}
.ai-typing span:nth-child(3){animation-delay:.4s}
@keyframes typing{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}

.queue-chart{display:flex;align-items:flex-end;gap:8px;height:80px}
.qb{flex:1;border-radius:4px 4px 0 0;background:rgba(26,184,158,.25);transition:height .5s ease;position:relative}
.qb.highlight{background:var(--teal);box-shadow:0 0 12px rgba(26,184,158,.5)}
.qb-lbl{position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);font-size:.6rem;color:rgba(255,255,255,.60);white-space:nowrap}

.triage-list{display:flex;flex-direction:column;gap:8px}
.triage-item{
  display:flex;align-items:center;justify-content:space-between;
  padding:8px 12px;background:rgba(255,255,255,.04);border-radius:var(--r);
}
.ti-name{font-size:.8rem;font-weight:600}
.ti-urgency{
  font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:100px
}
.u-low{background:rgba(26,184,158,.15);color:var(--teal)}
.u-med{background:rgba(255,170,0,.15);color:#FFAA00}
.u-high{background:rgba(255,77,109,.15);color:#FF4D6D}
.ti-time{font-size:.7rem;color:rgba(255,255,255,.60)}

/* ── CLINIC SCENE ───────────────────────────────────────── */
.scene-section{padding:80px 48px}
.scene-inner{max-width:1400px;margin:0 auto}
.scenes-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:48px}
.scene-card{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r3);overflow:hidden;position:relative
}
.scene-svg-wrap{
  width:100%;aspect-ratio:16/9;position:relative;overflow:hidden;
  background:linear-gradient(135deg,var(--navy3),var(--navy4))
}
.scene-caption{padding:24px 28px}
.scene-caption h3{font-family:var(--f-head);font-size:1.05rem;font-weight:700;margin-bottom:6px}
.scene-caption p{font-size:.82rem;color:rgba(255,255,255,.72);line-height:1.65}
.before-after{
  display:flex;align-items:center;gap:12px;margin-top:12px;flex-wrap:wrap
}
.ba-chip{
  display:inline-flex;align-items:center;gap:6px;
  border-radius:100px;padding:5px 12px;font-size:.75rem;font-weight:600
}
.ba-before{background:rgba(255,77,109,.1);color:#FF4D6D;border:1px solid rgba(255,77,109,.2)}
.ba-after{background:rgba(26,184,158,.1);color:var(--teal);border:1px solid rgba(26,184,158,.2)}

/* ── ROI SECTION ───────────────────────────────────────── */
.roi-section{padding:80px 48px;background:rgba(26,184,158,.03)}
.roi-inner{max-width:1400px;margin:0 auto}
.roi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:48px}
.roi-card{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r2);padding:28px;text-align:center;transition:all .3s
}
.roi-card:hover{transform:translateY(-6px);border-color:rgba(26,184,158,.3);background:rgba(26,184,158,.07)}
.roi-icon{
  width:56px;height:56px;border-radius:16px;
  background:rgba(26,184,158,.12);display:flex;align-items:center;justify-content:center;
  font-size:1.5rem;color:var(--teal);margin:0 auto 16px
}
.roi-num{
  font-family:var(--f-head);font-size:2rem;font-weight:800;
  color:var(--teal);letter-spacing:-.025em;margin-bottom:6px
}
.roi-card h3{font-size:.9rem;font-weight:700;margin-bottom:8px}
.roi-card p{font-size:.78rem;color:rgba(255,255,255,.68);line-height:1.6}

/* ── INTEGRATION LOGOS ─────────────────────────────────── */
.integration-row{
  display:flex;flex-wrap:wrap;justify-content:center;gap:16px;margin-top:40px
}
.int-chip{
  display:inline-flex;align-items:center;gap:8px;
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
  border-radius:var(--r);padding:10px 20px;
  font-size:.82rem;font-weight:600;color:rgba(255,255,255,.7);
  transition:all .2s
}
.int-chip:hover{border-color:var(--teal);color:var(--white);background:rgba(26,184,158,.08)}
.int-chip i{color:var(--teal);font-size:1rem}

/* ── TESTIMONIALS ───────────────────────────────────────── */
.testimonials{padding:80px 48px}
.test-inner{max-width:1400px;margin:0 auto}
.test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
.test-card{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);
  border-radius:var(--r2);padding:28px;position:relative;transition:all .3s
}
.test-card:hover{border-color:rgba(26,184,158,.25);transform:translateY(-4px)}
.test-quote{
  font-size:3rem;font-family:var(--f-head);color:var(--teal);
  opacity:.3;line-height:1;margin-bottom:12px
}
.test-card p{font-size:.88rem;color:rgba(255,255,255,.65);line-height:1.75;margin-bottom:20px;font-style:italic}
.test-author{display:flex;align-items:center;gap:12px}
.ta-avatar{
  width:42px;height:42px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:var(--f-head);font-size:.9rem;font-weight:800;color:var(--navy)
}
.ta-name{font-size:.85rem;font-weight:700}
.ta-role{font-size:.75rem;color:rgba(255,255,255,.65)}
.test-metric{
  position:absolute;top:20px;right:20px;
  background:rgba(26,184,158,.12);border:1px solid rgba(26,184,158,.25);
  border-radius:var(--r);padding:6px 12px;
  font-family:var(--f-head);font-size:.85rem;font-weight:800;color:var(--teal)
}

/* ── CTA FINAL ──────────────────────────────────────────── */
.final-cta{
  padding:100px 48px;text-align:center;
  background:radial-gradient(ellipse at 50% 60%,rgba(26,184,158,.12) 0%,transparent 70%)
}
.final-cta h2{
  font-family:var(--f-head);font-size:clamp(2.2rem,4.5vw,3.5rem);
  font-weight:800;letter-spacing:-.03em;margin-bottom:18px
}
.final-cta p{font-size:1rem;color:rgba(255,255,255,.75);margin-bottom:44px;max-width:540px;margin-left:auto;margin-right:auto}
.final-ctas{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}

.f-back:hover{color:var(--teal)}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
.reveal{opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease}
.reveal.up{opacity:1;transform:translateY(0)}
.reveal-left{opacity:0;transform:translateX(-40px);transition:opacity .7s ease,transform .7s ease}
.reveal-left.up{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(40px);transition:opacity .7s ease,transform .7s ease}
.reveal-right.up{opacity:1;transform:translateX(0)}

/* ── RESPONSIVE ─────────────────────────────────────────── */
@media(max-width:1100px){.hero{flex-direction:column;text-align:center}.hero-sub{margin:0 auto 40px}.hero-ctas{justify-content:center}.hero-stats{justify-content:center}.hero-right{width:100%;max-width:500px;margin:0 auto}.kiosk-explainer{grid-template-columns:1fr}.problem-grid{grid-template-columns:1fr}.bento{grid-template-columns:1fr 1fr}.bento-big{grid-column:span 2}.dash-grid{grid-template-columns:1fr}.scenes-grid{grid-template-columns:1fr}.roi-grid{grid-template-columns:1fr}.test-grid{grid-template-columns:1fr}}
@media(max-width:640px){.hero{padding:100px 20px 60px}.section{padding:64px 20px}.bento{grid-template-columns:1fr}.bento-big{grid-column:span 1}.roi-grid{grid-template-columns:1fr 1fr}.dash-main{grid-template-columns:1fr}.hero-stats{gap:20px}.final-cta{padding:64px 20px}.dashboard-section,.scene-section,.roi-section,.testimonials{padding:64px 20px}}

@media(max-width:768px){
  .hero{flex-direction:column;padding:100px 24px 60px;gap:32px}
  .hero-right{display:none}
  .section{padding:64px 24px}
  .problem-grid{grid-template-columns:1fr}
  .flow-layout{grid-template-columns:1fr}
  .bento{grid-template-columns:1fr}
  .bento-big{grid-column:span 1}
  .roi-grid{grid-template-columns:1fr}
  .test-grid{grid-template-columns:1fr}
  .final-cta{padding:64px 24px}
  .divider{margin:0 24px}
  .step-cards{grid-template-columns:1fr}
  .clinic-grid{grid-template-columns:1fr}
}

    `}</style>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0;
    const particles = [] as { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[];
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 80; i++) {
      particles.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 1.8 + 0.5, alpha: Math.random() * 0.5 + 0.1, color: Math.random() > 0.5 ? "26,184,158" : "255,255,255" });
    }
    let animId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      const g = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H));
      g.addColorStop(0, "rgba(6,14,26,0)"); g.addColorStop(1, "rgba(6,14,26,.6)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(26,184,158,${(0.12 * (1 - dist / 120)).toFixed(3)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
        }
      }
      particles.forEach((p) => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) { p.x = Math.random() * W; p.y = Math.random() * H; } ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${p.color},${p.alpha})`; ctx.fill(); });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("up"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function DoctorsClient() {
  useScrollReveal();
  const [country, setCountry] = useState<CountryContent | null>(null);
  const [detecting, setDetecting] = useState(true);

  useEffect(() => {
    detectCountry()
      .then((cc) => setCountry(getCountryContent(cc)))
      .finally(() => setDetecting(false));
  }, []);

  const handleManualCountry = (cc: CountryCode) => {
    setDetectedCountry(cc);
    setCountry(getCountryContent(cc));
    setDetecting(false);
  };

  // Default to MY content until detection resolves
  const data = country || getCountryContent("MY");

  return (
    <div style={{ fontFamily: "'Poppins',sans-serif", background: "#060E1A", color: "#FFFFFF", overflowX: "hidden", lineHeight: 1.6 }}>
      <PageStyles />
      <ParticleCanvas />
      <div className="page-wrap">
        <Navbar
          actions={
            <div className="flex items-center gap-2">
              {detecting ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(26,184,158,.08)", border: "1px solid rgba(26,184,158,.2)", borderRadius: "100px", padding: "3px 10px", fontSize: ".7rem", fontWeight: 600, color: "var(--teal)", letterSpacing: ".03em", whiteSpace: "nowrap" }}>
                  Detecting...
                </span>
              ) : country ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: "rgba(26,184,158,.12)", border: "1px solid rgba(26,184,158,.3)", borderRadius: "100px", padding: "3px 10px", fontSize: ".7rem", fontWeight: 600, color: "var(--teal)", letterSpacing: ".03em", whiteSpace: "nowrap" }}>
                  {countryFlags[data.code]} {data.code}
                </span>
              ) : null}
              <select
                value={data.code}
                onChange={(e) => handleManualCountry(e.target.value as CountryCode)}
                style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "6px", padding: "2px 6px", fontSize: ".65rem", color: "rgba(255,255,255,.55)", cursor: "pointer" }}
                title="Change region"
              >
                <option value="MY">🇲🇾 Malaysia</option>
                <option value="US">🇺🇸 United States</option>
                <option value="GB">🇬🇧 United Kingdom</option>
                <option value="IN">🇮🇳 India</option>
                <option value="SG">🇸🇬 Singapore</option>
                <option value="AU">🇦🇺 Australia</option>
                <option value="CA">🇨🇦 Canada</option>
                <option value="AE">🇦🇪 UAE</option>
              </select>
            </div>
          }
        />


        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero" style={{ paddingTop: 140 }}>
          <div className="hero-left reveal-left">
            <div className="hero-eyebrow"><div className="pulse"></div> Clinic Intelligence Platform</div>
            <h1 className="hero-h1">
              Your Clinic.<br />
              <span className="teal">Smarter.</span> Faster.<br />
              <span className="stroke">Always Ready.</span>
            </h1>
            <p className="hero-sub">
              EazyCare AI smart kiosks scan, triage, and brief your patients before they reach your door — so you walk in knowing everything. Fewer queues, faster diagnoses, more patients served, better outcomes.
            </p>
            <div className="hero-stats">
              <div className="h-stat">
                <span className="h-stat-num">3×</span>
                <span className="h-stat-lbl">More patients per day</span>
              </div>
              <div className="h-stat">
                <span className="h-stat-num">73%</span>
                <span className="h-stat-lbl">Faster intake & triage</span>
              </div>
              <div className="h-stat">
                <span className="h-stat-num">94%</span>
                <span className="h-stat-lbl">Patient satisfaction rate</span>
              </div>
            </div>
            <div className="hero-ctas">
              <a href="#contact" className="btn-primary"><CalendarCheck size={18} /> Book a Free Demo</a>
              <a href="#how-it-works" className="btn-ghost"><PlayCircle size={18} /> See It In Action</a>
            </div>
          </div>

          <div className="hero-right reveal-right">
            {/* Kiosk Illustration */}
            <svg className="kiosk-scene" viewBox="0 0 520 580" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glowBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1AB89E" stopOpacity=".18" />
                  <stop offset="100%" stopColor="#060E1A" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="kioskGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1C2E45" />
                  <stop offset="100%" stopColor="#0A1628" />
                </linearGradient>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0F1F35" />
                  <stop offset="100%" stopColor="#060E1A" />
                </linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
                <clipPath id="screenClip"><rect x="158" y="60" width="204" height="320" rx="10" /></clipPath>
              </defs>

              {/* Background glow */}
              <ellipse cx="260" cy="290" rx="220" ry="220" fill="url(#glowBg)" />

              {/* Floor shadow */}
              <ellipse cx="260" cy="540" rx="140" ry="18" fill="rgba(0,0,0,.4)" />

              {/* Kiosk base/stand */}
              <rect x="228" y="480" width="64" height="60" rx="8" fill="url(#kioskGrad)" stroke="rgba(26,184,158,.2)" strokeWidth="1" />
              <rect x="200" y="532" width="120" height="12" rx="6" fill="#162840" stroke="rgba(26,184,158,.15)" strokeWidth="1" />

              {/* Kiosk body */}
              <rect x="148" y="45" width="224" height="440" rx="18" fill="url(#kioskGrad)" stroke="rgba(26,184,158,.25)" strokeWidth="1.5" />
              {/* Kiosk top camera bar */}
              <rect x="148" y="45" width="224" height="36" rx="18" fill="#162840" />
              <rect x="148" y="63" width="224" height="18" rx="0" fill="#162840" />
              {/* Camera dot */}
              <circle cx="260" cy="63" r="5" fill="#1AB89E" opacity=".8">
                <animate attributeName="opacity" values=".8;.3;.8" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="260" cy="63" r="9" fill="none" stroke="#1AB89E" strokeWidth="1" opacity=".3">
                <animate attributeName="r" values="9;14;9" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values=".3;0;.3" dur="2.5s" repeatCount="indefinite" />
              </circle>

              {/* Screen area */}
              <rect x="158" y="88" width="204" height="348" rx="10" fill="url(#screenGrad)" stroke="rgba(26,184,158,.3)" strokeWidth="1" />

              {/* Screen UI content */}
              <g clipPath="url(#screenClip)">
                {/* App header */}
                <rect x="158" y="88" width="204" height="38" fill="rgba(26,184,158,.1)" />
                <text x="260" y="112" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E" textAnchor="middle">eazycare.ai</text>

                {/* Welcome text */}
                <text x="260" y="148" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.5)" textAnchor="middle">Good morning! I'm your health companion.</text>
                <text x="260" y="162" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">How are you feeling today?</text>

                {/* Face scan circle */}
                <circle cx="260" cy="220" r="48" fill="none" stroke="rgba(26,184,158,.2)" strokeWidth="1" />
                <circle cx="260" cy="220" r="38" fill="rgba(26,184,158,.06)" />
                {/* Scan line animation */}
                <line x1="220" y1="200" x2="300" y2="200" stroke="#1AB89E" strokeWidth="1" opacity=".7">
                  <animate attributeName="y1" values="180;260;180" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="180;260;180" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".7;.2;.7" dur="2s" repeatCount="indefinite" />
                </line>
                {/* Face outline */}
                <circle cx="260" cy="212" r="16" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
                <path d="M244 234 Q260 248 276 234" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
                {/* Scan corners */}
                <path d="M222 182 L222 192 M222 182 L232 182" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M298 182 L298 192 M298 182 L288 182" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M222 258 L222 248 M222 258 L232 258" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M298 258 L298 248 M298 258 L288 258" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round" />
                {/* Scan label */}
                <text x="260" y="278" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E" textAnchor="middle" opacity=".8">Scanning... Please look at the camera</text>

                {/* Status chips */}
                <rect x="175" y="292" width="54" height="18" rx="9" fill="rgba(26,184,158,.15)" stroke="rgba(26,184,158,.3)" strokeWidth=".5" />
                <text x="202" y="304" fontFamily="Poppins,sans-serif" fontSize="7" fill="#1AB89E" textAnchor="middle">✓ ID Verified</text>
                <rect x="236" y="292" width="66" height="18" rx="9" fill="rgba(26,184,158,.15)" stroke="rgba(26,184,158,.3)" strokeWidth=".5" />
                <text x="269" y="304" fontFamily="Poppins,sans-serif" fontSize="7" fill="#1AB89E" textAnchor="middle">✓ Records Loaded</text>

                {/* Bottom touch area */}
                <rect x="180" y="318" width="160" height="32" rx="16" fill="rgba(26,184,158,.2)" stroke="rgba(26,184,158,.4)" strokeWidth="1" />
                <text x="260" y="338" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#1AB89E" textAnchor="middle">Touch to Begin →</text>
              </g>

              {/* Side speaker grills */}
              <line x1="152" y1="200" x2="152" y2="210" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="152" y1="215" x2="152" y2="225" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="152" y1="230" x2="152" y2="240" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="368" y1="200" x2="368" y2="210" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="368" y1="215" x2="368" y2="225" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="368" y1="230" x2="368" y2="240" stroke="rgba(26,184,158,.2)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Patient silhouette (left) */}
              <g opacity=".7">
                {/* Body */}
                <circle cx="108" cy="310" r="24" fill="#243650" />
                <path d="M80 370 Q80 340 108 340 Q136 340 136 370 L136 480" fill="#243650" />
                {/* Head */}
                <circle cx="108" cy="282" r="20" fill="#2A3F58" />
                {/* Interaction arrow */}
                <path d="M136 310 L158 310" stroke="#1AB89E" strokeWidth="1.5" strokeDasharray="4,3">
                  <animate attributeName="opacity" values="1;.3;1" dur="1.5s" repeatCount="indefinite" />
                </path>
                <text x="90" y="500" fontFamily="Poppins,sans-serif" fontSize="10" fill="rgba(255,255,255,.4)" textAnchor="middle">Patient</text>
              </g>

              {/* Floating data bubbles */}
              <g filter="url(#glow)">
                {/* Bubble 1 */}
                <rect x="24" y="180" width="100" height="44" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1">
                  <animate attributeName="y" values="180;172;180" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="34" y="198" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)">Temp</text>
                <text x="34" y="212" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E">36.8°C ✓</text>

                {/* Bubble 2 */}
                <rect x="392" y="160" width="108" height="44" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1">
                  <animate attributeName="y" values="160;152;160" dur="3.5s" repeatCount="indefinite" />
                </rect>
                <text x="402" y="178" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)">Blood Pressure</text>
                <text x="402" y="192" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E">118/76 ✓</text>

                {/* Bubble 3 */}
                <rect x="392" y="240" width="108" height="44" rx="12" fill="#0A1628" stroke="rgba(255,170,0,.35)" strokeWidth="1">
                  <animate attributeName="y" values="240;232;240" dur="4s" repeatCount="indefinite" />
                </rect>
                <text x="402" y="258" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)">Triage Priority</text>
                <text x="402" y="272" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#FFAA00">Medium</text>

                {/* Bubble 4 — AI insight */}
                <rect x="20" y="360" width="120" height="54" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1">
                  <animate attributeName="y" values="360;352;360" dur="3.8s" repeatCount="indefinite" />
                </rect>
                <text x="30" y="378" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E">AI Summary</text>
                <text x="30" y="390" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.65)">Return visit. History:</text>
                <text x="30" y="402" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.65)">hypertension, 3 visits.</text>
              </g>
            </svg>
          </div>
        </section>

        <div className="divider"></div>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <section className="section" id="problem">
          <div className="reveal center">
            <div className="sec-tag"><AlertCircle size={18} /> The Real Cost of Manual Intake</div>
            <h2 className="sec-h2">Every Clinic Faces These Challenges.<br /><span style={{ color: "var(--teal)" }}>Every Single Day.</span></h2>
            <p className="sec-desc">Before EazyCare AI, clinic staff spend hours on tasks AI can handle in seconds — at the cost of patient care.</p>
          </div>
          <div className="problem-grid">
            <div className="prob-card reveal" style={{ transitionDelay: ".05s" }}>
              <div className="prob-icon"><Clock size={18} /></div>
              <div>
                <div className="prob-num">47 min</div>
                <h3>Average Patient Wait Time</h3>
                <p>Patients wait nearly an hour before seeing a doctor — most of that time spent on paperwork, repeat questions, and manual data entry that AI can handle in under 3 minutes.</p>
              </div>
            </div>
            <div className="prob-card reveal" style={{ transitionDelay: ".1s" }}>
              <div className="prob-icon"><Users size={18} /></div>
              <div>
                <div className="prob-num">12–18</div>
                <h3>Patients Seen Per Doctor Daily</h3>
                <p>Without AI assistance, the average GP can see 12–18 patients per day. Clinical time is consumed by administrative work that should never reach the doctor's desk.</p>
              </div>
            </div>
            <div className="prob-card reveal" style={{ transitionDelay: ".15s" }}>
              <div className="prob-icon"><FileX size={18} /></div>
              <div>
                <div className="prob-num">68%</div>
                <h3>Consultations Without Full History</h3>
                <p>Doctors make decisions without complete patient history in nearly 7 out of 10 consultations — leading to missed context, repeated tests, and suboptimal diagnoses.</p>
              </div>
            </div>
            <div className="prob-card reveal" style={{ transitionDelay: ".2s" }}>
              <div className="prob-icon"><DollarSign size={18} /></div>
              <div>
                <div className="prob-num">{data.revenueLost}</div>
                <h3>Monthly Revenue Lost Per Doctor</h3>
                <p>The combination of slow intake, no-shows, and administrative overhead costs the average clinic {data.revenueLostDesc} in lost consultation revenue.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
        <section className="section" id="how-it-works">
          <div className="reveal">
            <div className="sec-tag"><RefreshCw size={18} /> The EazyCare AI Kiosk Flow</div>
            <h2 className="sec-h2">Patient Walks In.<br /><span style={{ color: "var(--teal)" }}>Doctor Is Already Briefed.</span></h2>
            <p className="sec-desc">The EazyCare AI Smart Kiosk processes every patient before they reach your consulting room — delivering a complete clinical brief to your screen in real time.</p>
          </div>
          <div className="kiosk-explainer">
            <div className="flow-steps reveal-left" style={{ transitionDelay: ".1s" }}>
              <div className="flow-step">
                <div className="fs-num">1</div>
                <div className="fs-icon"><IdCard size={18} /></div>
                <div>
                  <h3>Patient Arrives & Identifies</h3>
                  <p>Patient taps the kiosk screen. Face scan or {data.idScanLabel} confirms identity and instantly loads their full medical history, previous visit notes, medications, and allergies.</p>
                  <span className="tag">⚡ Under 8 seconds</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="fs-num">2</div>
                <div className="fs-icon"><MessageCircle size={18} /></div>
                <div>
                  <h3>AI Symptom Interview</h3>
                  <p>The AI conducts a structured clinical interview — asking about current symptoms, duration, severity, and relevant history. Supports multiple languages. Touchscreen + voice input.</p>
                  <span className="tag">📋 Structured intake in 3–5 min</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="fs-num">3</div>
                <div className="fs-icon"><HeartPulse size={18} /></div>
                <div>
                  <h3>Biometric & Vitals Capture</h3>
                  <p>Optional integrated sensors capture temperature, blood pressure, pulse oximetry, and BMI. All readings are logged automatically to the patient record and flagged if abnormal.</p>
                  <span className="tag">🩺 Vitals auto-logged</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="fs-num">4</div>
                <div className="fs-icon"><AlertTriangle size={18} /></div>
                <div>
                  <h3>AI Triage & Priority Scoring</h3>
                  <p>AI calculates a triage priority score based on symptoms, vitals, and history. Urgent cases are flagged immediately. Non-urgent patients are queued and estimated wait time is displayed.</p>
                  <span className="tag">🚦 Auto-prioritisation</span>
                </div>
              </div>
              <div className="flow-step">
                <div className="fs-num">5</div>
                <div className="fs-icon"><Stethoscope size={18} /></div>
                <div>
                  <h3>Doctor Receives Complete Brief</h3>
                  <p>Before the patient enters the room, the doctor's dashboard shows: AI-generated visit summary, history analysis, symptom progression since last visit, and suggested investigation pathways.</p>
                  <span className="tag">📊 Doctor briefed before door opens</span>
                </div>
              </div>
            </div>

            {/* Kiosk UI Demo */}
            <div className="kiosk-display-wrap reveal-right" style={{ transitionDelay: ".15s" }}>
              <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.60)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="ph-fill ph-monitor" style={{ color: "var(--teal)" }}></i> Live Kiosk Interface Preview
              </div>

              {/* Kiosk screen mockup */}
              <div style={{ background: "#060E1A", border: "1px solid rgba(26,184,158,.3)", borderRadius: "16px", overflow: "hidden" }}>
                {/* Header bar */}
                <div
                  style={{
                    background: "rgba(26,184,158,.1)",
                    padding: "12px 18px",
                    borderBottom: "1px solid rgba(26,184,158,.2)",
                  }}
                  className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span style={{ fontFamily: "var(--f-head)", fontSize: ".9rem", fontWeight: 700, color: "var(--teal)" }}>eazycare.ai</span>
                  <span style={{ fontSize: ".72rem", color: "rgba(255,255,255,.65)" }}>Kiosk #3 — Lobby A</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: ".72rem", color: "var(--teal)" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--teal)", display: "inline-block" }}></span> Live
                  </div>
                </div>

                {/* Screen content */}
                <div style={{ padding: "20px" }}>
                  {/* Patient card */}
                  <div
                    style={{
                      background: "rgba(26,184,158,.08)",
                      border: "1px solid rgba(26,184,158,.2)",
                      borderRadius: "12px",
                      padding: "16px",
                      marginBottom: "16px",
                    }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "var(--teal)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--f-head)", fontSize: "1rem", fontWeight: 800, color: "var(--navy)" }}>{data.patient.initial}</div>
                    <div>
                      <div style={{ fontSize: ".9rem", fontWeight: 700 }}>{data.patient.name}</div>
                      <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.68)" }} className="break-words leading-relaxed">DOB: {data.patient.dob}  •  {data.idLabel}: {data.patient.id}  •  Visit #7</div>
                    </div>
                    <div className="sm:ml-auto w-full sm:w-auto" style={{ marginLeft: "auto", background: "rgba(255,170,0,.15)", border: "1px solid rgba(255,170,0,.3)", borderRadius: "8px", padding: "6px 12px", textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--f-head)", fontSize: ".8rem", fontWeight: "800", color: "#FFAA00" }}>Medium</div>
                      <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.65)" }}>Triage</div>
                    </div>
                  </div>

                  {/* Vitals row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                      <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.65)", marginBottom: "4px" }}>TEMP</div>
                      <div style={{ fontFamily: "var(--f-head)", fontSize: ".95rem", fontWeight: "700", color: "var(--teal)" }}>37.2°C</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                      <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.65)", marginBottom: "4px" }}>BP</div>
                      <div style={{ fontFamily: "var(--f-head)", fontSize: ".95rem", fontWeight: "700", color: "#FFAA00" }}>138/88</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                      <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.65)", marginBottom: "4px" }}>SpO₂</div>
                      <div style={{ fontFamily: "var(--f-head)", fontSize: ".95rem", fontWeight: "700", color: "var(--teal)" }}>98%</div>
                    </div>
                    <div style={{ background: "rgba(255,255,255,.04)", borderRadius: "10px", padding: "10px", textAlign: "center" }}>
                      <div style={{ fontSize: ".65rem", color: "rgba(255,255,255,.65)", marginBottom: "4px" }}>PULSE</div>
                      <div style={{ fontFamily: "var(--f-head)", fontSize: ".95rem", fontWeight: "700", color: "var(--teal)" }}>82 bpm</div>
                    </div>
                  </div>

                  {/* AI brief */}
                  <div style={{ background: "rgba(26,184,158,.06)", border: "1px solid rgba(26,184,158,.18)", borderRadius: "12px", padding: "14px", marginBottom: "16px" }}>
                    <div style={{ fontSize: ".7rem", fontWeight: "700", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}><Bot size={18} /> AI Clinical Brief</div>
                    <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.68)", lineHeight: "1.65" }}><strong style={{ color: "var(--white)" }}>Chief complaint:</strong> Persistent headache (3 days), dizziness. <strong style={{ color: "var(--white)" }}>History note:</strong> Hypertension diagnosed 2022. Last BP reading (visit #6, Apr 2026): 142/90. Currently on Amlodipine 5mg. <strong style={{ color: "var(--white)" }}>AI flag:</strong> BP trending upward over last 3 visits. Consider medication review.</p>
                  </div>

                  {/* Quick actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="w-full sm:flex-1" style={{ flex: "1", background: "rgba(26,184,158,.12)", border: "1px solid rgba(26,184,158,.25)", borderRadius: "8px", padding: "8px", textAlign: "center", fontSize: ".72rem", fontWeight: "600", color: "var(--teal)", cursor: "pointer" }}>📋 Full History</div>
                    <div className="w-full sm:flex-1" style={{ flex: "1", background: "rgba(26,184,158,.12)", border: "1px solid rgba(26,184,158,.25)", borderRadius: "8px", padding: "8px", textAlign: "center", fontSize: ".72rem", fontWeight: "600", color: "var(--teal)", cursor: "pointer" }}>📊 Visit Trend</div>
                    <div className="w-full sm:flex-1" style={{ flex: "1", background: "rgba(26,184,158,.12)", border: "1px solid rgba(26,184,158,.25)", borderRadius: "8px", padding: "8px", textAlign: "center", fontSize: ".72rem", fontWeight: "600", color: "var(--teal)", cursor: "pointer" }}>💊 Medications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* ── BENEFITS TO CLINICS ────────────────────────────────────────────── */}
        <section className="section" id="benefits">
          <div className="reveal center">
            <div className="sec-tag"><Trophy size={18} /> Clinic Benefits</div>
            <h2 className="sec-h2">Everything Changes When<br /><span style={{ color: "var(--teal)" }}>AI Joins Your Team</span></h2>
            <p className="sec-desc">From the moment a patient walks through the door, EazyCare AI is already working — so you don't have to start from zero.</p>
          </div>
          <div className="bento">
            <div className="bento-card bento-big reveal" style={{ transitionDelay: ".05s" }}>
              <div className="bc-icon"><Zap size={18} /></div>
              <h3>3× More Patients Per Day — Without Hiring More Staff</h3>
              <p>When AI handles intake, triage, history retrieval, and pre-diagnosis briefing, your doctor spends zero time on admin — and maximum time on care. Most clinics deploying EazyCare AI see patient throughput triple within the first 60 days. The same doctors, the same hours, 3× the impact.</p>
              <div style={{ display: "flex", gap: "16px", marginTop: "20px", flexWrap: "wrap" }}>
                <CountUpMetric target={45} label="Avg patients/day per doctor (was 15)" />
                <CountUpMetric target={3} suffix=" min" label="Min avg intake time (was 12 min)" />
              </div>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: ".1s" }}>
              <div className="bc-icon"><Brain size={18} /></div>
              <h3>Complete Context Before Every Consultation</h3>
              <p>AI synthesises every previous visit, lab result, prescription, and complaint into a 30-second clinical brief. You walk in knowing everything.</p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: ".05s" }}>
              <div className="bc-icon"><Shield size={18} /></div>
              <h3>Intelligent Triage — Zero Missed Urgencies</h3>
              <p>AI priority scoring flags critical patients immediately. No more urgent cases waiting behind routine check-ups because a receptionist didn't catch the signs.</p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: ".1s" }}>
              <div className="bc-icon"><TrendingUp size={18} /></div>
              <h3>Track Patient Health Progress Over Time</h3>
              <p>AI identifies deterioration trends across visits that human pattern recognition misses — enabling proactive care rather than reactive treatment.</p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: ".15s" }}>
              <div className="bc-icon"><Smile size={18} /></div>
              <h3>Patients Arrive Calm, Informed & Prepared</h3>
              <p>The kiosk explains the process, manages wait time expectations, and answers common questions — patients arrive at your door calmer and better prepared to describe their condition.</p>
            </div>
            <div className="bento-card reveal" style={{ transitionDelay: ".2s" }}>
              <div className="bc-icon"><DollarSign size={18} /></div>
              <h3>Lower Operating Costs, Higher Revenue</h3>
              <p>Reduce front desk staffing needs by 40–60%. Eliminate paper forms. Serve more patients without overtime. Most clinics recover kiosk costs within the first quarter of deployment.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* ── LIVE DASHBOARD ─────────────────────────────────────────────── */}
        <div className="dashboard-section" id="dashboard">
          <div className="dashboard-inner">
            <div className="reveal center">
              <div className="sec-tag"><MonitorPlay size={18} /> Doctor Dashboard</div>
              <h2 className="sec-h2">Your Clinic Intelligence<br /><span style={{ color: "var(--teal)" }}>Command Centre</span></h2>
              <p className="sec-desc" style={{ margin: "0 auto" }}>Every patient. Every status. Every insight — live on your screen before they step into your room.</p>
            </div>
            <div className="dash-grid reveal" style={{ transitionDelay: ".1s" }}>
              {/* Sidebar: patient queue */}
              <div className="dash-sidebar">
                <div style={{ fontSize: ".7rem", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.60)", padding: "4px 0 12px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>Today's Queue — 11 patients</div>
                <div className="dash-patient active">
                  <div className="dp-avatar" style={{ background: "var(--teal)" }}>A</div>
                  <div className="dp-info">
                    <div className="dp-name">{data.patient.name.split(" ")[0]} {data.patient.name.split(" ").slice(-1)[0]}</div>
                    <div className="dp-status" style={{ color: "#FFAA00" }}>⚡ In Consultation</div>
                  </div>
                </div>
                <div className="dash-patient">
                  <div className="dp-avatar" style={{ background: "#7B5EA7" }}>S</div>
                  <div className="dp-info">
                    <div className="dp-name">Siti Nurhaliza</div>
                    <div className="dp-status" style={{ color: "var(--teal)" }}>✓ AI Briefed — Ready</div>
                  </div>
                </div>
                <div className="dash-patient">
                  <div className="dp-avatar" style={{ background: "#E85D75" }}>R</div>
                  <div className="dp-info">
                    <div className="dp-name">Rajan Pillai</div>
                    <div className="dp-status" style={{ color: "#FF4D6D" }}>🔴 Urgent — Flagged</div>
                  </div>
                </div>
                <div className="dash-patient">
                  <div className="dp-avatar" style={{ background: "#FFAA00" }}>L</div>
                  <div className="dp-info">
                    <div className="dp-name">Lim Wei Ting</div>
                    <div className="dp-status" style={{ color: "rgba(255,255,255,.65)" }}>⏳ At Kiosk (2 min)</div>
                  </div>
                </div>
                <div className="dash-patient">
                  <div className="dp-avatar" style={{ background: "#4A9EBF" }}>M</div>
                  <div className="dp-info">
                    <div className="dp-name">Mohamed Faiz</div>
                    <div className="dp-status" style={{ color: "rgba(255,255,255,.65)" }}>⏳ Waiting — 8 min</div>
                  </div>
                </div>
                <div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.3)", textAlign: "center", padding: "8px" }}>+6 more today</div>
              </div>

              {/* Main dashboard */}
              <div className="dash-main">
                {/* Vitals card */}
                <div className="dash-card">
                  <div className="dash-card-title"><i className="ph-fill ph-heartbeat" style={{ color: "var(--teal)" }}></i> Current Patient — Vitals</div>
                  <div className="vital-row">
                    <span className="vital-name">Temperature</span>
                    <div className="vital-bar"><div className="vital-fill" style={{ width: "52%", background: "var(--teal)" }} id="vb1"></div></div>
                    <span className="vital-val" style={{ color: "var(--teal)" }}>37.2°C</span>
                  </div>
                  <div className="vital-row">
                    <span className="vital-name">Blood Pressure</span>
                    <div className="vital-bar"><div className="vital-fill" style={{ width: "72%", background: "#FFAA00" }} id="vb2"></div></div>
                    <span className="vital-val" style={{ color: "#FFAA00" }}>138/88</span>
                  </div>
                  <div className="vital-row">
                    <span className="vital-name">Pulse Rate</span>
                    <div className="vital-bar"><div className="vital-fill" style={{ width: "58%", background: "var(--teal)" }} id="vb3"></div></div>
                    <span className="vital-val" style={{ color: "var(--teal)" }}>82 bpm</span>
                  </div>
                  <div className="vital-row">
                    <span className="vital-name">SpO₂</span>
                    <div className="vital-bar"><div className="vital-fill" style={{ width: "88%", background: "var(--teal)" }} id="vb4"></div></div>
                    <span className="vital-val" style={{ color: "var(--teal)" }}>98%</span>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="dash-card">
                  <div className="dash-card-title"><i className="ph-fill ph-robot" style={{ color: "var(--teal)" }}></i> AI Clinical Insights</div>
                  <div className="ai-bubble"><strong>Chief Complaint:</strong> Persistent headache (3 days), dizziness on standing. Rates pain 6/10.</div>
                  <div className="ai-bubble"><strong>History Flag:</strong> BP has increased across last 3 visits (+12mmHg systolic trend). Medication adherence unclear.</div>
                  <div className="ai-bubble"><strong>Suggested pathway:</strong> Consider Amlodipine dose review. Renal function bloods if BP {'>'}140 persists. <span className="ai-typing"><span></span><span></span><span></span></span></div>
                </div>

                {/* Queue chart */}
                <div className="dash-card">
                  <div className="dash-card-title"><i className="ph-fill ph-chart-bar" style={{ color: "var(--teal)" }}></i> Hourly Patient Flow Today</div>
                  <div className="queue-chart" id="queueChart">
                    <div className="qb" style={{ height: "35%" }}><span className="qb-lbl">8am</span></div>
                    <div className="qb" style={{ height: "55%" }}><span className="qb-lbl">9am</span></div>
                    <div className="qb" style={{ height: "90%" }}><span className="qb-lbl">10am</span></div>
                    <div className="qb highlight" style={{ height: "75%" }}><span className="qb-lbl">Now</span></div>
                    <div className="qb" style={{ height: "60%", opacity: ".4" }}><span className="qb-lbl">12pm</span></div>
                    <div className="qb" style={{ height: "45%", opacity: ".4" }}><span className="qb-lbl">1pm</span></div>
                    <div className="qb" style={{ height: "30%", opacity: ".4" }}><span className="qb-lbl">2pm</span></div>
                    <div className="qb" style={{ height: "20%", opacity: ".4" }}><span className="qb-lbl">3pm</span></div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "22px" }}>
                    <div style={{ textAlign: "center" }}><div style={{ fontFamily: "var(--f-head)", fontSize: "1.2rem", fontWeight: "800", color: "var(--teal)" }}>23</div><div style={{ fontSize: ".7rem", color: "rgba(255,255,255,.65)" }}>Seen today</div></div>
                    <div style={{ textAlign: "center" }}><div style={{ fontFamily: "var(--f-head)", fontSize: "1.2rem", fontWeight: "800", color: "#FFAA00" }}>8</div><div style={{ fontSize: ".7rem", color: "rgba(255,255,255,.65)" }}>In queue</div></div>
                    <div style={{ textAlign: "center" }}><div style={{ fontFamily: "var(--f-head)", fontSize: "1.2rem", fontWeight: "800", color: "var(--teal)" }}>4 min</div><div style={{ fontSize: ".7rem", color: "rgba(255,255,255,.65)" }}>Avg wait</div></div>
                  </div>
                </div>

                {/* Triage list */}
                <div className="dash-card">
                  <div className="dash-card-title"><i className="ph-fill ph-ranking" style={{ color: "var(--teal)" }}></i> AI Triage Queue</div>
                  <div className="triage-list">
                    <div className="triage-item">
                      <span className="ti-name">Rajan Pillai, 67</span>
                      <span className="ti-urgency u-high">🔴 Urgent</span>
                      <span className="ti-time">Chest tightness</span>
                    </div>
                    <div className="triage-item">
                      <span className="ti-name">Siti Nurhaliza, 34</span>
                      <span className="ti-urgency u-med">🟡 Medium</span>
                      <span className="ti-time">Fever 3 days</span>
                    </div>
                    <div className="triage-item">
                      <span className="ti-name">Lim Wei Ting, 28</span>
                      <span className="ti-urgency u-med">🟡 Medium</span>
                      <span className="ti-time">Knee pain</span>
                    </div>
                    <div className="triage-item">
                      <span className="ti-name">Mohamed Faiz, 41</span>
                      <span className="ti-urgency u-low">🟢 Routine</span>
                      <span className="ti-time">Prescription refill</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CLINIC SCENES ───────────────────────────────────────────────── */}
        <section className="scene-section" id="scenes">
          <div className="scene-inner">
            <div className="reveal center">
              <div className="sec-tag"><Hospital size={18} /> Real-World Impact</div>
              <h2 className="sec-h2">See the Difference<br /><span style={{ color: "var(--teal)" }}>Before & After</span></h2>
              <p className="sec-desc" style={{ margin: "0 auto" }}>The same clinic. The same staff. The same doctor. A completely different patient experience.</p>
            </div>
            <div className="scenes-grid">
              {/* Scene 1: Crowded waiting room → smooth flow */}
              <div className="scene-card reveal" style={{ transitionDelay: ".05s" }}>
                <div className="scene-svg-wrap">
                  <svg width="100%" height="100%" viewBox="0 0 640 360" fill="none">
                    <defs>
                      <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0F1F35" /><stop offset="100%" stopColor="#060E1A" />
                      </linearGradient>
                    </defs>
                    <rect width="640" height="360" fill="url(#sg1)" />
                    {/* floor */}
                    <rect x="0" y="260" width="640" height="100" fill="#0A1628" />
                    {/* ceiling lights */}
                    <rect x="80" y="0" width="120" height="8" rx="4" fill="rgba(26,184,158,.15)" />
                    <rect x="440" y="0" width="120" height="8" rx="4" fill="rgba(26,184,158,.15)" />
                    {/* EazyCare AI kiosk */}
                    <rect x="260" y="80" width="120" height="200" rx="12" fill="#162840" stroke="rgba(26,184,158,.4)" strokeWidth="1.5" />
                    <rect x="275" y="95" width="90" height="140" rx="8" fill="#060E1A" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    {/* Kiosk screen content */}
                    <text x="320" y="140" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#1AB89E" textAnchor="middle">eazycare.ai</text>
                    <text x="320" y="160" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)" textAnchor="middle">Good morning!</text>
                    <circle cx="320" cy="195" r="22" fill="none" stroke="rgba(26,184,158,.4)" strokeWidth="1" />
                    <circle cx="320" cy="187" r="10" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
                    <line x1="300" y1="180" x2="340" y2="180" stroke="#1AB89E" strokeWidth=".8" opacity=".6">
                      <animate attributeName="y1" values="173;210;173" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="173;210;173" dur="2s" repeatCount="indefinite" />
                    </line>
                    <text x="320" y="228" fontFamily="Poppins,sans-serif" fontSize="7" fill="#1AB89E" textAnchor="middle">Scanning...</text>
                    {/* Kiosk stand */}
                    <rect x="305" y="280" width="30" height="30" rx="4" fill="#0F1F35" />

                    {/* Patient 1 — at kiosk */}
                    <circle cx="220" cy="220" r="16" fill="#243650" />
                    <circle cx="220" cy="200" r="13" fill="#2A3F58" />
                    <path d="M204 240 Q204 222 220 222 Q236 222 236 240" fill="#243650" />
                    {/* Arrow to kiosk */}
                    <path d="M238 215 L262 215" stroke="#1AB89E" strokeWidth="1.2" strokeDasharray="3,2">
                      <animate attributeName="opacity" values="1;.2;1" dur="1.5s" repeatCount="indefinite" />
                    </path>

                    {/* Patient 2 — getting number/ready */}
                    <circle cx="420" cy="220" r="16" fill="#243650" />
                    <circle cx="420" cy="200" r="13" fill="#2A3F58" />
                    <path d="M404 240 Q404 222 420 222 Q436 222 436 240" fill="#243650" />

                    {/* Patient 3 — waiting calmly on seat */}
                    <rect x="480" y="228" width="50" height="20" rx="4" fill="#162840" />
                    <circle cx="505" cy="218" r="12" fill="#2A3F58" />
                    <path d="M493 238 L493 228 L517 228 L517 238" fill="#243650" />

                    {/* Patient 4 — seated left */}
                    <rect x="100" y="228" width="50" height="20" rx="4" fill="#162840" />
                    <circle cx="125" cy="218" r="12" fill="#2A3F58" />
                    <path d="M113 238 L113 228 L137 228 L137 238" fill="#243650" />

                    {/* Floating briefed badge */}
                    <rect x="370" y="155" width="100" height="32" rx="10" fill="#0A1628" stroke="rgba(26,184,158,.5)" strokeWidth="1">
                      <animate attributeName="y" values="155;148;155" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <text x="420" y="173" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E" fontWeight="600" textAnchor="middle">✓ Briefed in 3 min</text>

                    {/* Top label */}
                    <rect x="20" y="16" width="160" height="28" rx="8" fill="rgba(26,184,158,.12)" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <text x="100" y="34" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E" textAnchor="middle">With EazyCare AI</text>
                  </svg>
                </div>
                <div className="scene-caption">
                  <h3>Smart, Frictionless Patient Flow</h3>
                  <p>Patients interact with the AI kiosk independently, get triaged, and are briefed — before the doctor even calls them in. Average wait time drops from 47 minutes to under 5.</p>
                  <div className="before-after">
                    <span className="ba-chip ba-before"> Before: 47 min avg wait</span>
                    <span className="ba-chip ba-after"><CheckCircle size={18} /> After: 4 min avg wait</span>
                  </div>
                </div>
              </div>

              {/* Scene 2: Doctor briefed at desk */}
              <div className="scene-card reveal" style={{ transitionDelay: ".1s" }}>
                <div className="scene-svg-wrap">
                  <svg width="100%" height="100%" viewBox="0 0 640 360" fill="none">
                    <defs>
                      <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0A1628" /><stop offset="100%" stopColor="#060E1A" />
                      </linearGradient>
                    </defs>
                    <rect width="640" height="360" fill="url(#sg2)" />
                    {/* Room walls */}
                    <rect x="0" y="270" width="640" height="90" fill="#0A1628" />
                    {/* Desk */}
                    <rect x="120" y="210" width="400" height="70" rx="8" fill="#162840" stroke="rgba(26,184,158,.15)" strokeWidth="1" />
                    {/* Monitor */}
                    <rect x="260" y="100" width="200" height="130" rx="10" fill="#0F1F35" stroke="rgba(26,184,158,.35)" strokeWidth="1.5" />
                    <rect x="270" y="110" width="180" height="110" rx="6" fill="#060E1A" />
                    {/* Monitor stand */}
                    <rect x="345" y="230" width="30" height="15" rx="4" fill="#162840" />
                    {/* Screen content */}
                    <rect x="278" y="118" width="165" height="20" rx="4" fill="rgba(26,184,158,.1)" stroke="rgba(26,184,158,.2)" strokeWidth=".5" />
                    <text x="360" y="131" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="700" fill="#1AB89E" textAnchor="middle">AI Clinical Brief — {data.patient.name.split(" ")[0]}</text>
                    <rect x="278" y="144" width="165" height="12" rx="3" fill="rgba(255,255,255,.04)" />
                    <text x="284" y="153" fontFamily="Poppins,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.55)">BP Trend: 128/80 → 132/84 → 138/88 ↑</text>
                    <rect x="278" y="160" width="165" height="12" rx="3" fill="rgba(255,255,255,.04)" />
                    <text x="284" y="169" fontFamily="Poppins,sans-serif" fontSize="6.5" fill="rgba(255,255,255,.55)">Chief complaint: headache, dizziness</text>
                    <rect x="278" y="176" width="165" height="12" rx="3" fill="rgba(26,184,158,.08)" />
                    <text x="284" y="185" fontFamily="Poppins,sans-serif" fontSize="6.5" fill="#1AB89E">AI: Consider Amlodipine dose review</text>
                    <rect x="278" y="192" width="80" height="18" rx="9" fill="rgba(26,184,158,.15)" stroke="rgba(26,184,158,.3)" strokeWidth=".5" />
                    <text x="318" y="204" fontFamily="Poppins,sans-serif" fontSize="7" fill="#1AB89E" textAnchor="middle">Full History →</text>

                    {/* Doctor silhouette */}
                    <circle cx="180" cy="185" r="28" fill="#243650" />
                    <circle cx="180" cy="158" r="22" fill="#2A3F58" />
                    {/* Lab coat suggestion */}
                    <rect x="158" y="188" width="44" height="60" rx="6" fill="#1C3A52" />
                    <rect x="170" y="188" width="20" height="60" rx="0" fill="#243650" />
                    {/* Stethoscope hint */}
                    <path d="M166 200 Q175 218 184 200" stroke="rgba(26,184,158,.4)" strokeWidth="1.5" fill="none" />

                    {/* Glow from screen on doctor */}
                    <ellipse cx="260" cy="185" rx="50" ry="30" fill="rgba(26,184,158,.04)" />

                    {/* Floating checkmarks */}
                    <rect x="460" y="120" width="130" height="80" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.3)" strokeWidth="1">
                      <animate attributeName="opacity" values="1;.7;1" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <text x="475" y="142" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)">Before room entry:</text>
                    <text x="475" y="158" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E">✓ History loaded</text>
                    <text x="475" y="172" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E">✓ Vitals captured</text>
                    <text x="475" y="186" fontFamily="Poppins,sans-serif" fontSize="8" fill="#1AB89E">✓ AI brief ready</text>

                    {/* Label */}
                    <rect x="20" y="16" width="200" height="28" rx="8" fill="rgba(26,184,158,.12)" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <text x="120" y="34" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E" textAnchor="middle">Doctor Pre-Briefed by AI</text>
                  </svg>
                </div>
                <div className="scene-caption">
                  <h3>Complete Clinical Brief Before Every Patient</h3>
                  <p>The doctor sees the full picture the moment the patient is called in — history, trends, AI flags, current vitals, medications. First 30 seconds saved. Every consultation, every day.</p>
                  <div className="before-after">
                    <span className="ba-chip ba-before"> Before: 8 min building context</span>
                    <span className="ba-chip ba-after"><CheckCircle size={18} /> After: Ready before patient enters</span>
                  </div>
                </div>
              </div>

              {/* Scene 3: Old-style chaos queue */}
              <div className="scene-card reveal" style={{ transitionDelay: ".05s" }}>
                <div className="scene-svg-wrap">
                  <svg width="100%" height="100%" viewBox="0 0 640 360" fill="none">
                    <rect width="640" height="360" fill="#060E1A" />
                    <rect x="0" y="270" width="640" height="90" fill="#0A1628" />
                    {/* Reception desk */}
                    <rect x="440" y="180" width="180" height="90" rx="6" fill="#162840" stroke="rgba(255,77,109,.2)" strokeWidth="1" />
                    <text x="530" y="230" fontFamily="Poppins,sans-serif" fontSize="10" fill="rgba(255,255,255,.4)" textAnchor="middle">Reception</text>
                    {/* Long queue of patient silhouettes */}
                    <g>
                      {/* Queue line indicator */}
                      <path d="M50 240 L430 240" stroke="rgba(255,77,109,.2)" strokeWidth="1" strokeDasharray="6,4" />
                      {/* Patients in queue */}
                      <g opacity=".8">
                        <circle cx="380" cy="225" r="13" fill="#2A3F58" /><path d="M367 243 Q367 232 380 232 Q393 232 393 243" fill="#243650" />
                        <circle cx="340" cy="225" r="13" fill="#2A3F58" /><path d="M327 243 Q327 232 340 232 Q353 232 353 243" fill="#243650" />
                        <circle cx="300" cy="225" r="13" fill="#2A3F58" /><path d="M287 243 Q287 232 300 232 Q313 232 313 243" fill="#243650" />
                        <circle cx="260" cy="225" r="13" fill="#2A3F58" /><path d="M247 243 Q247 232 260 232 Q273 232 273 243" fill="#243650" />
                        <circle cx="220" cy="225" r="13" fill="#2A3F58" /><path d="M207 243 Q207 232 220 232 Q233 232 233 243" fill="#243650" />
                        <circle cx="180" cy="225" r="13" fill="#2A3F58" /><path d="M167 243 Q167 232 180 232 Q193 232 193 243" fill="#243650" />
                        <circle cx="140" cy="225" r="13" fill="#2A3F58" /><path d="M127 243 Q127 232 140 232 Q153 232 153 243" fill="#243650" />
                        <circle cx="100" cy="225" r="13" fill="#2A3F58" /><path d="M87 243 Q87 232 100 232 Q113 232 113 243" fill="#243650" />
                        <circle cx="60" cy="225" r="13" fill="#2A3F58" /><path d="M47 243 Q47 232 60 232 Q73 232 73 243" fill="#243650" />
                      </g>
                    </g>
                    {/* Wait time counter */}
                    <rect x="440" y="80" width="180" height="80" rx="12" fill="rgba(255,77,109,.08)" stroke="rgba(255,77,109,.3)" strokeWidth="1" />
                    <text x="530" y="112" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.45)" textAnchor="middle">Estimated Wait Time</text>
                    <text x="530" y="140" fontFamily="Poppins,sans-serif" fontSize="28" fontWeight="800" fill="#FF4D6D" textAnchor="middle">47 min</text>
                    {/* Angry/frustrated indicator */}
                    <text x="80" y="178" fontFamily="Poppins,sans-serif" fontSize="22" textAnchor="middle">😤</text>
                    <text x="150" y="178" fontFamily="Poppins,sans-serif" fontSize="22" textAnchor="middle">😩</text>
                    <text x="220" y="178" fontFamily="Poppins,sans-serif" fontSize="22" textAnchor="middle">😞</text>
                    <text x="290" y="178" fontFamily="Poppins,sans-serif" fontSize="22" textAnchor="middle">😤</text>
                    {/* Label */}
                    <rect x="20" y="16" width="140" height="28" rx="8" fill="rgba(255,77,109,.12)" stroke="rgba(255,77,109,.3)" strokeWidth="1" />
                    <text x="90" y="34" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#FF4D6D" textAnchor="middle">Without AI Kiosk</text>
                  </svg>
                </div>
                <div className="scene-caption">
                  <h3>The Problem: Crowded Waiting Rooms, Frustrated Patients</h3>
                  <p>Without AI triage and smart intake, patients queue for 45+ minutes before any clinical action. Reception staff are overwhelmed. Doctors are under-briefed. Patients leave unhappy — or leave entirely.</p>
                  <div className="before-after">
                    <span className="ba-chip ba-before"> 9 patients waiting, 47 min avg</span>
                    <span className="ba-chip ba-after"><CheckCircle size={18} /> AI kiosk processes all in parallel</span>
                  </div>
                </div>
              </div>

              {/* Scene 4: Patient interaction with kiosk */}
              <div className="scene-card reveal" style={{ transitionDelay: ".1s" }}>
                <div className="scene-svg-wrap">
                  <svg width="100%" height="100%" viewBox="0 0 640 360" fill="none">
                    <defs>
                      <radialGradient id="sg3glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#1AB89E" stopOpacity=".15" />
                        <stop offset="100%" stopColor="#060E1A" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="640" height="360" fill="#060E1A" />
                    <rect x="0" y="280" width="640" height="80" fill="#0A1628" />
                    <ellipse cx="320" cy="250" rx="200" ry="120" fill="url(#sg3glow)" />

                    {/* Multiple kiosks in lobby */}
                    {/* Kiosk 1 (center main) */}
                    <rect x="250" y="80" width="140" height="220" rx="14" fill="#162840" stroke="rgba(26,184,158,.4)" strokeWidth="1.5" />
                    <rect x="265" y="98" width="110" height="160" rx="8" fill="#060E1A" stroke="rgba(26,184,158,.25)" strokeWidth="1" />
                    <circle cx="320" cy="90" r="5" fill="#1AB89E"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite" /></circle>
                    <text x="320" y="125" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#1AB89E" textAnchor="middle">eazycare.ai</text>
                    <circle cx="320" cy="168" r="28" fill="none" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <circle cx="320" cy="160" r="12" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
                    <line x1="294" y1="155" x2="346" y2="155" stroke="#1AB89E" strokeWidth="1" opacity=".7">
                      <animate attributeName="y1" values="142;194;142" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="y2" values="142;194;142" dur="2s" repeatCount="indefinite" />
                    </line>
                    <rect x="283" y="210" width="74" height="22" rx="11" fill="rgba(26,184,158,.2)" stroke="rgba(26,184,158,.4)" strokeWidth="1" />
                    <text x="320" y="224" fontFamily="Poppins,sans-serif" fontSize="7.5" fontWeight="700" fill="#1AB89E" textAnchor="middle">Tap to check in</text>
                    {/* Kiosk stand */}
                    <rect x="305" y="300" width="30" height="20" rx="4" fill="#0F1F35" />

                    {/* Kiosk 2 (left, smaller/bg) */}
                    <rect x="80" y="110" width="110" height="180" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.2)" strokeWidth="1" opacity=".6" />
                    <rect x="93" y="126" width="84" height="130" rx="6" fill="#060E1A" opacity=".8" />
                    <rect x="82" y="300" width="106" height="10" rx="4" fill="#0A1628" />

                    {/* Kiosk 3 (right, smaller/bg) */}
                    <rect x="450" y="110" width="110" height="180" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.2)" strokeWidth="1" opacity=".6" />
                    <rect x="463" y="126" width="84" height="130" rx="6" fill="#060E1A" opacity=".8" />
                    <rect x="452" y="300" width="106" height="10" rx="4" fill="#0A1628" />

                    {/* Patient at main kiosk */}
                    <circle cx="200" cy="230" r="20" fill="#2A3F58" />
                    <circle cx="200" cy="206" r="17" fill="#2F4A65" />
                    <path d="M180 255 Q180 235 200 235 Q220 235 220 255 L220 300" fill="#243650" />
                    {/* Extended arm pointing at kiosk */}
                    <path d="M220 240 Q240 238 255 235" stroke="#3A5570" strokeWidth="6" strokeLinecap="round" />

                    {/* Real-time data streams from kiosk */}
                    <path d="M362 150 Q400 130 430 120" stroke="rgba(26,184,158,.3)" strokeWidth="1" strokeDasharray="4,3">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </path>
                    {/* Data cards popping up */}
                    <rect x="430" y="90" width="96" height="48" rx="10" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1">
                      <animate attributeName="y" values="90;83;90" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <text x="440" y="110" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.5)">Symptom logged</text>
                    <text x="440" y="124" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#1AB89E" fontWeight="600">Headache · 3 days</text>

                    {/* Label */}
                    <rect x="20" y="16" width="200" height="28" rx="8" fill="rgba(26,184,158,.12)" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <text x="120" y="34" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="700" fill="#1AB89E" textAnchor="middle">Patient Self-Triage Kiosk</text>
                  </svg>
                </div>
                <div className="scene-caption">
                  <h3>Patients Served Instantly — In Parallel</h3>
                  <p>Multiple kiosks in your lobby mean multiple patients being triaged simultaneously. No queue at reception. Every patient starts their clinical journey the moment they walk in the door.</p>
                  <div className="before-after">
                    <span className="ba-chip ba-before"> 1 receptionist, 1 patient at a time</span>
                    <span className="ba-chip ba-after"><CheckCircle size={18} /> 3+ kiosks, all patients in parallel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI ─────────────────────────────────────────────────────────── */}
        <section className="roi-section" id="roi">
          <div className="roi-inner">
            <div className="reveal center">
              <div className="sec-tag"><TrendingUp size={18} /> Return on Investment</div>
              <h2 className="sec-h2">The Numbers Speak<br /><span style={{ color: "var(--teal)" }}>for Themselves</span></h2>
              <p className="sec-desc" style={{ margin: "0 auto" }}>EazyCare AI smart kiosks typically pay for themselves within 6–8 weeks of deployment. Here's what clinics see in the first 90 days.</p>
            </div>
            <div className="roi-grid">
              <div className="roi-card reveal" style={{ transitionDelay: ".05s" }}>
                <div className="roi-icon"><Users size={18} /></div>
                <div className="roi-num">+186%</div>
                <h3>Patient Throughput</h3>
                <p>Average doctor sees 15 → 43 patients per day. Same hours, smarter workflow.</p>
              </div>
              <div className="roi-card reveal" style={{ transitionDelay: ".1s" }}>
                <div className="roi-icon"><Clock size={18} /></div>
                <div className="roi-num">−91%</div>
                <h3>Admin Time Per Patient</h3>
                <p>AI handles intake, history pull, and triage. Doctors reclaim 8+ min per consultation.</p>
              </div>
              <div className="roi-card reveal" style={{ transitionDelay: ".15s" }}>
                <div className="roi-icon"><DollarSign size={18} /></div>
                <div className="roi-num">{data.revenueUplift}</div>
                <h3>Monthly Revenue Uplift</h3>
                <p>Average monthly revenue increase for a 3-doctor clinic in the first 90 days.</p>
              </div>
              <div className="roi-card reveal" style={{ transitionDelay: ".2s" }}>
                <div className="roi-icon"><Smile size={18} /></div>
                <div className="roi-num">94%</div>
                <h3>Patient Satisfaction</h3>
                <p>Patients rate the kiosk experience 4.8/5 on average. Zero-queue clinics retain patients.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* ── INTEGRATIONS ───────────────────────────────────────────────── */}
        <section className="section" style={{ padding: "64px 48px" }}>
          <div className="reveal center">
            <div className="sec-tag"><Plug size={18} /> Seamless Integration</div>
            <h2 className="sec-h2">Works With Your<br /><span style={{ color: "var(--teal)" }}>Existing Systems</span></h2>
            <p className="sec-desc" style={{ margin: "0 auto" }}>{data.integrationDesc}</p>
          </div>
          <div className="integration-row reveal" style={{ transitionDelay: ".1s" }}>
            {data.integrationTags.map((tag, i) => (
              <div className="int-chip" key={i}><Plug size={18} /> {tag}</div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
        <section className="testimonials" id="testimonials">
          <div className="test-inner">
            <div className="reveal center">
              <div className="sec-tag"> From Doctors & Clinic Owners</div>
              <h2 className="sec-h2">Trusted By Clinicians<br /><span style={{ color: "var(--teal)" }}>Who've Made the Shift</span></h2>
            </div>
            <div className="test-grid">
              <div className="test-card reveal" style={{ transitionDelay: ".05s" }}>
                <div className="test-metric">{data.testimonials[0].metric}</div>
                <div className="test-quote">"</div>
                <p>{data.testimonials[0].quote}</p>
                <div className="test-author">
                  <div className="ta-avatar" style={{ background: "var(--teal)" }}>DR</div>
                  <div>
                    <div className="ta-name">{data.testimonials[0].name}</div>
                    <div className="ta-role">{data.testimonials[0].role}</div>
                  </div>
                </div>
              </div>
              <div className="test-card reveal" style={{ transitionDelay: ".1s" }}>
                <div className="test-metric">{data.testimonials[1].metric}</div>
                <div className="test-quote">"</div>
                <p>{data.testimonials[1].quote}</p>
                <div className="test-author">
                  <div className="ta-avatar" style={{ background: "#7B5EA7" }}>SK</div>
                  <div>
                    <div className="ta-name">{data.testimonials[1].name}</div>
                    <div className="ta-role">{data.testimonials[1].role}</div>
                  </div>
                </div>
              </div>
              <div className="test-card reveal" style={{ transitionDelay: ".15s" }}>
                <div className="test-metric">{data.testimonials[2].metric}</div>
                <div className="test-quote">"</div>
                <p>{data.testimonials[2].quote}</p>
                <div className="test-author">
                  <div className="ta-avatar" style={{ background: "#E85D75" }}>FH</div>
                  <div>
                    <div className="ta-name">{data.testimonials[2].name}</div>
                    <div className="ta-role">{data.testimonials[2].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="final-cta" id="contact">
          <div className="reveal">
            <div className="sec-tag" style={{ display: "inline-flex", marginBottom: "20px" }}><Rocket size={18} /> Get Started</div>
            <h2>Your Clinic Could Be<br /><span style={{ color: "var(--teal)" }}>3× More Effective</span> by Next Month.</h2>
            <p>Book a free 30-minute demo. We'll show you exactly how EazyCare AI kiosks would work in your specific clinic setup — zero obligation, no sales pressure.</p>
            <div className="final-ctas">
              <a href="mailto:clinics@eazycare.ai" className="btn-primary"><CalendarCheck size={18} /> Book a Free Demo</a>
              <a href="mailto:clinics@eazycare.ai" className="btn-ghost"><Mail size={18} /> Contact Our Clinic Team</a>
            </div>
            <p style={{ marginTop: "24px", fontSize: ".82rem", color: "rgba(255,255,255,.3)" }}>
              Typically deployed within 2 weeks. Hardware + setup included. Ongoing AI updates at no extra cost.
            </p>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      </div>{/* /page-wrap */}
      <Footer />
    </div>
  );
}
