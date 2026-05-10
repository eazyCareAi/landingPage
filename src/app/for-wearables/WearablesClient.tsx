"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import {
  Watch,
  PlayCircle,
  CalendarCheck,
  Mail,
  AlertCircle,
  Clock,
  TrendingDown,
  HeartPulse,
  DollarSign,
  Brain,
  Bell,
  Hospital,
  TrendingUp,
  BarChart3,
  Trophy,
  Moon,
  Droplets,
  Thermometer,
  Battery,
  Activity,
  Waves,
  Timer,
  ShieldCheck,
  LockKeyhole,
  Globe,
  Wifi,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

/* ── INLINE STYLES (ported exactly from original HTML, fonts changed to Poppins) ── */
function PageStyles() {
  return (
    <style>{`
      :root{
        --teal:#1AB89E;--teal2:#0ED4B5;--teal-dim:rgba(26,184,158,.15);--teal-glow:rgba(26,184,158,.25);
        --navy:#060E1A;--navy2:#0A1628;--navy3:#0F1F35;--navy4:#162840;
        --slate:#1C2E45;--slate2:#243650;
        --white:#FFFFFF;--off:#EEF4F3;--muted:rgba(255,255,255,.5);--faint:rgba(255,255,255,.12);
        --red:#FF4D6D;--amber:#FFAA00;--green:#1AB89E;
        --violet:#8B5CF6;--violet-dim:rgba(139,92,246,.15);
        --f-head:'Poppins',sans-serif;--f-body:'Poppins',sans-serif;
        --r:14px;--r2:24px;--r3:32px;
      }
      .w-page{font-family:var(--f-body);background:var(--navy);color:var(--white);overflow-x:hidden;line-height:1.6}
      .w-canvas{position:fixed;inset:0;z-index:0;pointer-events:none}
      .w-wrap{position:relative;z-index:1}

      /* HERO */
      .w-hero{min-height:100dvh;display:flex;align-items:center;padding:120px 48px 80px;max-width:1400px;margin:0 auto;gap:64px}
      .w-hero-left{flex:1;min-width:0}
      .w-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(26,184,158,.1);border:1px solid rgba(26,184,158,.25);border-radius:100px;padding:6px 16px;font-size:.78rem;font-weight:600;color:var(--teal);letter-spacing:.06em;text-transform:uppercase;margin-bottom:28px}
      .w-eyebrow .pulse{width:8px;height:8px;border-radius:50%;background:var(--teal);animation:pulseGlow 2s ease-in-out infinite}
      @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(26,184,158,.6)}50%{box-shadow:0 0 0 6px rgba(26,184,158,0)}}
      .w-hero-h1{font-family:var(--f-head);font-size:clamp(2.6rem,5vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-.03em;margin-bottom:24px}
      .w-hero-h1 .teal{color:var(--teal)}
      .w-hero-h1 .stroke{-webkit-text-stroke:2px var(--teal);color:transparent}
      @media(max-width:768px){.w-hero-h1 .stroke{-webkit-text-stroke:1px var(--teal)}}
      .w-hero-sub{font-size:1.08rem;color:rgba(255,255,255,.62);line-height:1.75;max-width:500px;margin-bottom:40px}
      .w-hero-stats{display:flex;gap:32px;margin-bottom:44px;flex-wrap:wrap}
      .w-h-stat{display:flex;flex-direction:column}
      .w-h-stat-num{font-family:var(--f-head);font-size:2.2rem;font-weight:800;color:var(--teal);line-height:1;letter-spacing:-.03em}
      .w-h-stat-lbl{font-size:.78rem;color:rgba(255,255,255,.45);margin-top:4px}
      .w-hero-ctas{display:flex;gap:14px;flex-wrap:wrap}
      .w-btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--teal);color:var(--navy);font-family:var(--f-body);font-size:.95rem;font-weight:700;padding:15px 32px;border-radius:100px;text-decoration:none;border:none;cursor:pointer;box-shadow:0 6px 24px rgba(26,184,158,.45);transition:all .2s}
      .w-btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 36px rgba(26,184,158,.6)}
      .w-btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--white);font-family:var(--f-body);font-size:.95rem;font-weight:600;padding:15px 32px;border-radius:100px;text-decoration:none;border:1.5px solid rgba(255,255,255,.2);transition:all .2s;cursor:pointer}
      .w-btn-ghost:hover{border-color:var(--teal);color:var(--teal)}
      .w-hero-right{flex:0 0 540px;position:relative;display:flex;align-items:center;justify-content:center}
      @media(max-width:1024px){.w-hero-right{display:none}}

      /* SECTIONS */
      .w-section{padding:96px 48px;max-width:1400px;margin:0 auto}
      .w-sec-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(26,184,158,.08);border:1px solid rgba(26,184,158,.2);border-radius:100px;padding:5px 14px;font-size:.75rem;font-weight:700;color:var(--teal);letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px}
      .w-sec-h2{font-family:var(--f-head);font-size:clamp(1.9rem,3.5vw,2.9rem);font-weight:800;letter-spacing:-.025em;line-height:1.15;margin-bottom:14px}
      .w-sec-desc{font-size:1rem;color:rgba(255,255,255,.55);max-width:560px;line-height:1.75}
      .w-center{text-align:center}.w-center .w-sec-desc{margin:0 auto}
      .w-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(26,184,158,.25),transparent);margin:0 48px}

      /* SCROLL REVEAL */
      .w-reveal,.w-reveal-left,.w-reveal-right{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
      .w-reveal-left{transform:translateX(-28px)}
      .w-reveal-right{transform:translateX(28px)}
      .w-reveal.up,.w-reveal-left.up,.w-reveal-right.up{opacity:1;transform:none}

      /* DEVICE LINEUP */
      .w-device-lineup{padding:80px 48px;background:rgba(26,184,158,.02);border-top:1px solid rgba(26,184,158,.08);border-bottom:1px solid rgba(26,184,158,.08)}
      .w-device-lineup-inner{max-width:1400px;margin:0 auto}
      .w-device-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px}
      @media(max-width:768px){.w-device-cards{grid-template-columns:1fr}}
      .w-device-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:var(--r3);padding:36px 32px;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;overflow:hidden;transition:all .35s;cursor:pointer}
      .w-device-card::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(26,184,158,.07) 0%,transparent 65%);opacity:0;transition:opacity .3s}
      .w-device-card:hover{transform:translateY(-8px);border-color:rgba(26,184,158,.35);background:rgba(26,184,158,.05)}
      .w-device-card:hover::before{opacity:1}
      .w-device-card-svg{margin-bottom:28px;position:relative;z-index:1}
      .w-device-card h3{font-family:var(--f-head);font-size:1.2rem;font-weight:800;margin-bottom:10px}
      .w-device-card p{font-size:.84rem;color:rgba(255,255,255,.5);line-height:1.7;margin-bottom:20px}
      .w-device-specs{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
      .w-spec-chip{display:inline-flex;align-items:center;gap:5px;background:rgba(26,184,158,.1);border:1px solid rgba(26,184,158,.2);border-radius:100px;padding:4px 12px;font-size:.72rem;font-weight:600;color:var(--teal)}
      .w-device-badge{position:absolute;top:18px;right:18px;background:var(--teal);color:var(--navy);font-size:.65rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:100px}

      /* FLOW */
      .w-flow-section{padding:80px 48px;max-width:1400px;margin:0 auto}
      .w-flow-layout{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;margin-top:56px}
      @media(max-width:768px){.w-flow-layout{grid-template-columns:1fr}}
      .w-flow-steps{display:flex;flex-direction:column;gap:0}
      .w-flow-step{display:flex;align-items:flex-start;gap:20px;padding:24px 0;border-bottom:1px solid rgba(255,255,255,.06);cursor:pointer;transition:all .2s}
      .w-flow-step:last-child{border-bottom:none}
      .w-flow-step:hover .w-fs-icon{background:var(--teal);color:var(--navy)}
      .w-fs-num{width:32px;height:32px;min-width:32px;border-radius:50%;background:rgba(26,184,158,.15);border:1px solid rgba(26,184,158,.3);display:flex;align-items:center;justify-content:center;font-family:var(--f-head);font-size:.85rem;font-weight:800;color:var(--teal);margin-top:3px}
      .w-fs-icon{width:48px;height:48px;min-width:48px;border-radius:14px;background:rgba(26,184,158,.1);display:flex;align-items:center;justify-content:center;font-size:1.3rem;color:var(--teal);transition:all .3s}
      .w-flow-step h3{font-family:var(--f-head);font-size:.98rem;font-weight:700;margin-bottom:5px}
      .w-flow-step p{font-size:.82rem;color:rgba(255,255,255,.5);line-height:1.65}
      .w-flow-step .tag{display:inline-block;margin-top:8px;background:rgba(26,184,158,.1);border-radius:100px;padding:3px 12px;font-size:.7rem;font-weight:600;color:var(--teal)}

      /* PROBLEM */
      .w-problem-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:56px}
      @media(max-width:768px){.w-problem-grid{grid-template-columns:1fr}}
      .w-prob-card{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2);border-radius:var(--r2);padding:28px;display:flex;align-items:flex-start;gap:16px;transition:all .3s}
      .w-prob-card:hover{transform:translateY(-4px);border-color:rgba(255,77,109,.4)}
      .w-prob-icon{width:50px;height:50px;min-width:50px;border-radius:14px;background:rgba(255,77,109,.12);display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#FF4D6D}
      .w-prob-card h3{font-family:var(--f-head);font-size:.98rem;font-weight:700;margin-bottom:6px}
      .w-prob-card p{font-size:.82rem;color:rgba(255,255,255,.5);line-height:1.65}
      .w-prob-num{font-family:var(--f-head);font-size:1.6rem;font-weight:800;color:#FF4D6D;margin-bottom:4px}

      /* DASHBOARD */
      .w-dash-section{padding:80px 48px;background:rgba(255,255,255,.015)}
      .w-dash-inner{max-width:1400px;margin:0 auto}
      .w-wdash{display:grid;grid-template-columns:300px 1fr 260px;gap:20px;margin-top:48px}
      @media(max-width:1024px){.w-wdash{grid-template-columns:1fr}}
      .w-wdash-panel{background:var(--navy3);border:1px solid rgba(255,255,255,.08);border-radius:var(--r2);padding:22px}
      .w-wdash-title{font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:18px}
      .w-heartrate-display{text-align:center;padding:20px 0}
      .w-hr-num{font-family:var(--f-head);font-size:3.6rem;font-weight:800;color:var(--teal);line-height:1}
      .w-hr-unit{font-size:.85rem;color:rgba(255,255,255,.4);margin-top:4px}
      .w-hr-label{font-size:.72rem;color:rgba(255,255,255,.35);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}
      .w-ecg-wrap{margin:16px 0;height:48px;overflow:hidden;position:relative}
      .w-mini-metric{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)}
      .w-mini-metric:last-child{border-bottom:none}
      .w-mm-label{font-size:.76rem;color:rgba(255,255,255,.45)}
      .w-mm-val{font-family:var(--f-head);font-size:.9rem;font-weight:700;white-space:nowrap}
      .w-mm-ok{color:var(--teal)}
      .w-mm-warn{color:#FFAA00}
      .w-mm-bad{color:#FF4D6D}

      /* SPARKLINE */
      .w-spark-row{display:flex;gap:10px;align-items:center;margin-bottom:16px}
      .w-spark-label{font-size:.76rem;color:rgba(255,255,255,.45);width:70px;flex-shrink:0}
      .w-spark-chart{flex:1;height:32px}
      .w-spark-val{font-family:var(--f-head);font-size:.85rem;font-weight:700;color:var(--teal);min-width:54px;width:auto;text-align:right;flex-shrink:0;white-space:nowrap}

      /* ALERT */
      .w-alert-card{border-radius:var(--r2);padding:16px 20px;margin-bottom:10px;display:flex;align-items:center;gap:14px;transition:all .2s}
      .w-alert-high{background:rgba(255,77,109,.08);border:1px solid rgba(255,77,109,.25)}
      .w-alert-med{background:rgba(255,170,0,.06);border:1px solid rgba(255,170,0,.2)}
      .w-alert-ok{background:rgba(26,184,158,.06);border:1px solid rgba(26,184,158,.2)}
      .w-alert-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
      .w-alert-high .w-alert-icon{background:rgba(255,77,109,.2);color:#FF4D6D}
      .w-alert-med .w-alert-icon{background:rgba(255,170,0,.15);color:#FFAA00}
      .w-alert-ok .w-alert-icon{background:rgba(26,184,158,.15);color:var(--teal)}
      .w-alert-text{flex:1}
      .w-alert-title{font-size:.82rem;font-weight:700;margin-bottom:2px}
      .w-alert-high .w-alert-title{color:#FF4D6D}
      .w-alert-med .w-alert-title{color:#FFAA00}
      .w-alert-ok .w-alert-title{color:var(--teal)}
      .w-alert-sub{font-size:.72rem;color:rgba(255,255,255,.45)}
      .w-alert-time{font-size:.7rem;color:rgba(255,255,255,.3);white-space:nowrap}

      /* ROI */
      .w-roi-section{padding:80px 48px;background:rgba(26,184,158,.03)}
      .w-roi-inner{max-width:1400px;margin:0 auto}
      .w-roi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:48px}
      @media(max-width:768px){.w-roi-grid{grid-template-columns:1fr}}
      .w-roi-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:var(--r2);padding:28px;text-align:center;transition:all .3s}
      .w-roi-card:hover{transform:translateY(-6px);border-color:rgba(26,184,158,.3);background:rgba(26,184,158,.07)}
      .w-roi-icon{width:56px;height:56px;border-radius:16px;background:rgba(26,184,158,.12);display:flex;align-items:center;justify-content:center;font-size:1.5rem;color:var(--teal);margin:0 auto 16px}
      .w-roi-num{font-family:var(--f-head);font-size:2.4rem;font-weight:800;color:var(--teal);letter-spacing:-.03em}
      .w-roi-lbl{font-size:.82rem;color:rgba(255,255,255,.5);margin-top:6px;line-height:1.5}

      /* TESTIMONIALS */
      .w-test-section{padding:80px 48px;max-width:1400px;margin:0 auto}
      .w-test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
      @media(max-width:768px){.w-test-grid{grid-template-columns:1fr}}
      .w-test-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:var(--r2);padding:28px;position:relative;transition:all .3s}
      .w-test-card:hover{border-color:rgba(26,184,158,.25);transform:translateY(-4px)}
      .w-test-metric{font-family:var(--f-head);font-size:1.4rem;font-weight:800;color:var(--teal);margin-bottom:16px}
      .w-test-quote{font-size:3rem;color:rgba(26,184,158,.2);font-family:Georgia,serif;line-height:.7;margin-bottom:8px}
      .w-test-card>p{font-size:.84rem;color:rgba(255,255,255,.6);line-height:1.75;margin-bottom:20px}
      .w-test-author{display:flex;align-items:center;gap:12px}
      .w-ta-avatar{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--f-head);font-size:.8rem;font-weight:800;color:var(--white)}
      .w-ta-name{font-size:.84rem;font-weight:700}
      .w-ta-role{font-size:.72rem;color:rgba(255,255,255,.4);margin-top:2px}

      /* FINAL CTA */
      .w-final-cta{padding:100px 48px;text-align:center;background:radial-gradient(ellipse 80% 60% at 50% 100%,rgba(26,184,158,.1) 0%,transparent 70%)}
      .w-final-cta h2{font-family:var(--f-head);font-size:clamp(2rem,4vw,3.2rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:20px}
      .w-final-cta p{font-size:1rem;color:rgba(255,255,255,.55);max-width:520px;margin:0 auto 40px;line-height:1.75}
      .w-final-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

      /* INTEGRATION */
      .w-int-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px;justify-content:center}
      .w-int-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:8px 18px;font-size:.8rem;font-weight:600;color:rgba(255,255,255,.65);transition:all .2s}
      .w-int-pill:hover{border-color:var(--teal);color:var(--teal)}

      @media(max-width:768px){
        .w-hero{padding:100px 24px 60px;gap:32px;flex-direction:column}
        .w-section{padding:64px 24px}
        .w-device-lineup{padding:64px 24px}
        .w-flow-section{padding:64px 24px}
        .w-dash-section{padding:64px 24px}
        .w-roi-section{padding:64px 24px}
        .w-test-section{padding:64px 24px}
        .w-final-cta{padding:64px 24px}
        .w-divider{margin:0 24px}
        .w-hero-right{display:none}
        .w-hero-h1{font-size:clamp(2rem,8vw,3rem)}
        .w-h-stat-num{font-size:1.8rem}
        .w-btn-primary,.w-btn-ghost{padding:12px 24px;font-size:.88rem}
      }
    `}</style>
  );
}

/* ── PARTICLE CANVAS ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = 0, H = 0;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number; color: string }[] = [];
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
  return <canvas ref={canvasRef} className="w-canvas" />;
}

/* ── SCROLL REVEAL HOOK ── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("up"); });
    }, { threshold: 0.12 });
    document.querySelectorAll(".w-reveal, .w-reveal-left, .w-reveal-right").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── LIVE HEART RATE HOOK ── */
function useLiveHR() {
  const [hr, setHr] = useState(72);
  useEffect(() => {
    const interval = setInterval(() => {
      setHr((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next < 60 ? 60 : next > 95 ? 95 : next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return hr;
}

export default function WearablesClient() {
  useScrollReveal();
  const hr = useLiveHR();

  return (
    <div className="w-page">
      <PageStyles />
      <ParticleCanvas />
      <div className="w-wrap">
        <Navbar />

        {/* ── HERO ── */}
        <section className="w-hero">
          <div className="w-hero-left w-reveal">
            <div className="w-eyebrow"><div className="pulse" />Live Now · Continuous Health Intelligence</div>
            <h1 className="w-hero-h1">Your Body Talks.<br /><span className="teal">EazyCare AI</span><br /><span className="stroke">Listens 24/7.</span></h1>
            <p className="w-hero-sub">Smartwatch, ring, and patch sensors that stream your vitals continuously to EazyCare AI — detecting anomalies before symptoms appear and briefing your doctor before you even arrive at the clinic.</p>
            <div className="w-hero-stats">
              <div className="w-h-stat"><span className="w-h-stat-num">24/7</span><span className="w-h-stat-lbl">Continuous monitoring</span></div>
              <div className="w-h-stat"><span className="w-h-stat-num">18+</span><span className="w-h-stat-lbl">Health biomarkers tracked</span></div>
              <div className="w-h-stat"><span className="w-h-stat-num">&lt;90s</span><span className="w-h-stat-lbl">Alert-to-doctor response</span></div>
            </div>
            <div className="w-hero-ctas">
              <a href="#preorder" className="w-btn-primary"><Watch size={18} />Pre-order Your Device</a>
              <a href="#how-it-works" className="w-btn-ghost"><PlayCircle size={18} />See How It Works</a>
            </div>
          </div>

          {/* Hero SVG */}
          <div className="w-hero-right w-reveal-right" style={{ transitionDelay: ".2s" }}>
            <svg viewBox="0 0 520 560" style={{ maxWidth: "100%", width: 520, height: 560 }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(26,184,158,.18)"/><stop offset="100%" stopColor="rgba(26,184,158,0)"/></radialGradient>
                <filter id="glow2"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <filter id="softGlow"><feGaussianBlur stdDeviation="8" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <ellipse cx="260" cy="300" rx="220" ry="200" fill="url(#heroGlow)" />
              {/* Watch band top */}
              <rect x="210" y="80" width="50" height="70" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.25)" strokeWidth="1" />
              <rect x="260" y="80" width="50" height="70" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.25)" strokeWidth="1" />
              <circle cx="222" cy="95" r="3" fill="#060E1A" /><circle cx="222" cy="107" r="3" fill="#060E1A" /><circle cx="222" cy="119" r="3" fill="#060E1A" />
              <circle cx="298" cy="95" r="3" fill="#060E1A" /><circle cx="298" cy="107" r="3" fill="#060E1A" /><circle cx="298" cy="119" r="3" fill="#060E1A" />
              {/* Watch case */}
              <rect x="185" y="145" width="150" height="170" rx="38" fill="#0A1628" stroke="rgba(26,184,158,.5)" strokeWidth="1.5" />
              <rect x="193" y="153" width="134" height="154" rx="30" fill="#071120" />
              <rect x="193" y="153" width="134" height="154" rx="30" fill="radial-gradient(circle,rgba(26,184,158,.15),transparent)" opacity=".6" />
              {/* Screen content */}
              <text x="260" y="186" fontFamily="Poppins,sans-serif" fontSize="26" fontWeight="800" fill="#FFFFFF" textAnchor="middle">09:41</text>
              <text x="260" y="200" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.35)" textAnchor="middle">THU, 15 MAY</text>
              <rect x="205" y="208" width="110" height="36" rx="10" fill="rgba(26,184,158,.1)" stroke="rgba(26,184,158,.3)" strokeWidth=".8" />
              <path d="M218 222 C218 218 222 216 225 220 C228 216 232 218 232 222 C232 226 225 231 225 231 C225 231 218 226 218 222Z" fill="#FF4D6D" opacity=".9" />
              <text x="237" y="224" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="800" fill="#1AB89E">72</text>
              <text x="253" y="224" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.4)"> BPM</text>
              <text x="237" y="234" fontFamily="Poppins,sans-serif" fontSize="7" fill="rgba(255,255,255,.3)">Normal Range</text>
              <polyline points="205,256 215,256 220,248 226,264 232,244 238,256 244,256 249,252 254,262 258,256 268,256 273,248 279,264 285,244 291,256 296,256 305,256 310,256" fill="none" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round">
                <animate attributeName="opacity" values="1;.4;1" dur="2.2s" repeatCount="indefinite" />
              </polyline>
              <rect x="205" y="270" width="110" height="26" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth=".8" />
              <text x="215" y="285" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.5)">SpO₂</text>
              <text x="293" y="285" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="800" fill="#1AB89E" textAnchor="end">98%</text>
              <rect x="214" y="300" width="92" height="18" rx="9" fill="rgba(26,184,158,.18)" stroke="rgba(26,184,158,.35)" strokeWidth=".8" />
              <circle cx="225" cy="309" r="3" fill="#1AB89E"><animate attributeName="opacity" values="1;.3;1" dur="1.5s" repeatCount="indefinite" /></circle>
              <text x="232" y="313" fontFamily="Poppins,sans-serif" fontSize="7" fill="#1AB89E" fontWeight="600">AI Monitoring Active</text>
              {/* Watch band bottom */}
              <rect x="210" y="315" width="50" height="70" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.25)" strokeWidth="1" />
              <rect x="260" y="315" width="50" height="70" rx="12" fill="#0F1F35" stroke="rgba(26,184,158,.25)" strokeWidth="1" />
              <circle cx="222" cy="330" r="3" fill="#060E1A" /><circle cx="222" cy="342" r="3" fill="#060E1A" />
              <circle cx="298" cy="330" r="3" fill="#060E1A" /><circle cx="298" cy="342" r="3" fill="#060E1A" />
              <rect x="335" y="195" width="8" height="28" rx="4" fill="#1C2E45" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
              {/* Smart Ring */}
              <g transform="translate(60, 380)">
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#1C2E45" strokeWidth="18" />
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="rgba(26,184,158,.5)" strokeWidth="1.5" />
                <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="8" />
                <ellipse cx="88" cy="50" rx="8" ry="5" fill="#0F1F35" stroke="rgba(26,184,158,.7)" strokeWidth="1.2" />
                <ellipse cx="88" cy="50" rx="3" ry="2" fill="#1AB89E" opacity=".8"><animate attributeName="opacity" values=".8;.3;.8" dur="2s" repeatCount="indefinite" /></ellipse>
                <text x="50" y="78" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#1AB89E" textAnchor="middle">Smart Ring</text>
                <text x="50" y="89" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.35)" textAnchor="middle">SpO₂ · Sleep · Temp</text>
              </g>
              <path d="M170 430 Q195 400 210 330" fill="none" stroke="rgba(26,184,158,.25)" strokeWidth="1" strokeDasharray="5,4"><animate attributeName="stroke-dashoffset" values="0;-18" dur="1.5s" repeatCount="indefinite" /></path>
              {/* Patch Sensor */}
              <g transform="translate(350, 350)">
                <rect x="0" y="0" width="110" height="70" rx="16" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1.2" />
                <rect x="6" y="6" width="98" height="58" rx="12" fill="rgba(26,184,158,.05)" />
                <circle cx="22" cy="55" r="7" fill="#0F1F35" stroke="rgba(26,184,158,.5)" strokeWidth="1" />
                <circle cx="88" cy="55" r="7" fill="#0F1F35" stroke="rgba(26,184,158,.5)" strokeWidth="1" />
                <line x1="29" y1="55" x2="81" y2="55" stroke="rgba(26,184,158,.2)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="55" y="22" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.7)" textAnchor="middle">ECG Patch</text>
                <polyline points="14,36 20,36 24,28 28,44 32,24 36,36 42,36 46,33 50,40 54,36 60,36 64,28 68,44 72,24 76,36 82,36 88,36 94,36" fill="none" stroke="#1AB89E" strokeWidth="1.2" strokeLinecap="round" opacity=".9"><animate attributeName="opacity" values=".9;.4;.9" dur="1.8s" repeatCount="indefinite" /></polyline>
                <text x="55" y="90" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.35)" textAnchor="middle">Continuous ECG · HRV · Rhythm</text>
              </g>
              <path d="M360 380 Q330 360 335 265" fill="none" stroke="rgba(26,184,158,.25)" strokeWidth="1" strokeDasharray="5,4"><animate attributeName="stroke-dashoffset" values="0;-18" dur="1.8s" repeatCount="indefinite" /></path>
              {/* Floating data bubbles */}
              <g filter="url(#glow2)">
                <rect x="12" y="155" width="105" height="46" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1"><animate attributeName="y" values="155;147;155" dur="3.2s" repeatCount="indefinite" /></rect>
                <text x="24" y="174" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.45)">Skin Temp</text>
                <text x="24" y="188" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#1AB89E">36.6°C ✓</text>
                <rect x="395" y="130" width="112" height="46" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1"><animate attributeName="y" values="130;122;130" dur="3.8s" repeatCount="indefinite" /></rect>
                <text x="408" y="149" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.45)">HRV Score</text>
                <text x="408" y="163" fontFamily="Poppins,sans-serif" fontSize="12" fontWeight="700" fill="#1AB89E">62ms  ↑ Good</text>
                <rect x="395" y="210" width="112" height="50" rx="12" fill="#0A1628" stroke="rgba(255,170,0,.4)" strokeWidth="1"><animate attributeName="y" values="210;202;210" dur="4.2s" repeatCount="indefinite" /></rect>
                <text x="408" y="229" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.45)">AI Alert</text>
                <text x="408" y="241" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#FFAA00">Stress Elevated</text>
                <text x="408" y="252" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.35)">Last 2 hours · Review</text>
                <rect x="12" y="490" width="130" height="46" rx="12" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1"><animate attributeName="y" values="490;482;490" dur="3.5s" repeatCount="indefinite" /></rect>
                <text x="24" y="508" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.45)">Clinic Sync</text>
                <text x="24" y="522" fontFamily="Poppins,sans-serif" fontSize="10" fontWeight="700" fill="#1AB89E">Dr Azri Briefed ✓</text>
              </g>
            </svg>
          </div>
        </section>

        <div className="w-divider" />

        {/* ── PROBLEM ── */}
        <section className="w-section" id="problem">
          <div className="w-reveal w-center">
            <div className="w-sec-tag"><AlertCircle size={14} /> The Blind Spot in Healthcare</div>
            <h2 className="w-sec-h2">Health Doesn&apos;t Wait for<br /><span style={{ color: "var(--teal)" }}>Your Next Appointment.</span></h2>
            <p className="w-sec-desc">Most critical health events happen between clinic visits — when no one is watching. EazyCare AI Wearables close that gap permanently.</p>
          </div>
          <div className="w-problem-grid">
            <div className="w-prob-card w-reveal" style={{ transitionDelay: ".05s" }}>
              <div className="w-prob-icon"><Clock size={24} /></div>
              <div><div className="w-prob-num">72 hrs</div><h3>Average Delay Before Seeking Care</h3><p>Patients experiencing early cardiac events wait an average of 72 hours before seeking help — because symptoms are dismissed as stress or fatigue. Continuous AI monitoring catches what you ignore.</p></div>
            </div>
            <div className="w-prob-card w-reveal" style={{ transitionDelay: ".1s" }}>
              <div className="w-prob-icon"><TrendingDown size={24} /></div>
              <div><div className="w-prob-num">83%</div><h3>Of Data Lost Between Visits</h3><p>A 10-minute clinic visit captures less than 0.007% of your health data. The other 99.993% — sleep quality, stress patterns, activity, resting heart rate — is never seen by your doctor.</p></div>
            </div>
            <div className="w-prob-card w-reveal" style={{ transitionDelay: ".15s" }}>
              <div className="w-prob-icon"><HeartPulse size={24} /></div>
              <div><div className="w-prob-num">1 in 3</div><h3>Heart Events Strike Without Warning</h3><p>One in three cardiac events occurs in people with no prior symptoms. HRV and rhythm anomalies visible 48–72 hours before an event go completely undetected without continuous monitoring.</p></div>
            </div>
            <div className="w-prob-card w-reveal" style={{ transitionDelay: ".2s" }}>
              <div className="w-prob-icon"><DollarSign size={24} /></div>
              <div><div className="w-prob-num">RM 12K+</div><h3>Average Emergency Admission Cost</h3><p>A single undetected cardiac event requiring emergency admission costs over RM 12,000. Early AI detection and proactive clinical intervention costs a fraction of that — and could save your life.</p></div>
            </div>
          </div>
        </section>

        <div className="w-divider" />

        {/* ── DEVICE LINEUP ── */}
        <div className="w-device-lineup">
          <div className="w-device-lineup-inner">
            <div className="w-reveal w-center">
              <div className="w-sec-tag"><Watch size={14} /> The EazyCare AI Device Ecosystem</div>
              <h2 className="w-sec-h2">Three Devices.<br /><span style={{ color: "var(--teal)" }}>One Unified Health Intelligence.</span></h2>
              <p className="w-sec-desc" style={{ margin: "0 auto" }}>Choose the device that fits your lifestyle, or combine all three for complete continuous coverage.</p>
            </div>
            <div className="w-device-cards">
              {/* Smartwatch */}
              <div className="w-device-card w-reveal" style={{ transitionDelay: ".05s" }}>
                <div className="w-device-badge">Most Popular</div>
                <div className="w-device-card-svg">
                  <svg viewBox="0 0 140 180" width="140" height="180" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient id="wg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(26,184,158,.2)"/><stop offset="100%" stopColor="rgba(26,184,158,0)"/></radialGradient></defs>
                    <ellipse cx="70" cy="95" rx="55" ry="55" fill="url(#wg1)" />
                    <rect x="48" y="8" width="20" height="38" rx="8" fill="#1C2E45" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <rect x="72" y="8" width="20" height="38" rx="8" fill="#1C2E45" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <rect x="28" y="42" width="84" height="96" rx="24" fill="#0A1628" stroke="rgba(26,184,158,.6)" strokeWidth="1.5" />
                    <rect x="34" y="48" width="72" height="84" rx="20" fill="#060E1A" />
                    <text x="70" y="72" fontFamily="Poppins,sans-serif" fontSize="14" fontWeight="800" fill="white" textAnchor="middle">09:41</text>
                    <path d="M55 84 C55 80 60 78 62.5 82 C65 78 70 80 70 84 C70 88 62.5 93 62.5 93Z" fill="#FF4D6D" />
                    <text x="74" y="89" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="800" fill="#1AB89E">72bpm</text>
                    <polyline points="36,104 42,104 45,98 49,110 52,94 56,104 62,104 65,101 68,108 70,104 76,104 79,98 83,110 86,94 90,104 96,104 104,104" fill="none" stroke="#1AB89E" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
                    <rect x="36" y="113" width="68" height="14" rx="7" fill="rgba(26,184,158,.1)" stroke="rgba(26,184,158,.25)" strokeWidth=".8" />
                    <text x="70" y="123" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="#1AB89E" textAnchor="middle">SpO₂ 98% · Stress 24</text>
                    <rect x="48" y="138" width="20" height="38" rx="8" fill="#1C2E45" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <rect x="72" y="138" width="20" height="38" rx="8" fill="#1C2E45" stroke="rgba(26,184,158,.3)" strokeWidth="1" />
                    <rect x="112" y="72" width="5" height="18" rx="2.5" fill="#243650" stroke="rgba(26,184,158,.3)" strokeWidth=".8" />
                  </svg>
                </div>
                <h3>EazyCare Watch S1</h3>
                <p>Full-featured health smartwatch with AMOLED display. Real-time ECG, SpO₂, blood pressure estimation, and skin temperature — all streaming live to your EazyCare AI dashboard.</p>
                <div className="w-device-specs">
                  <span className="w-spec-chip"><HeartPulse size={12} /> ECG</span>
                  <span className="w-spec-chip"><Droplets size={12} /> SpO₂</span>
                  <span className="w-spec-chip"><Thermometer size={12} /> Temp</span>
                  <span className="w-spec-chip"><Moon size={12} /> Sleep</span>
                  <span className="w-spec-chip"><Battery size={12} /> 7-day battery</span>
                </div>
              </div>
              {/* Smart Ring */}
              <div className="w-device-card w-reveal" style={{ transitionDelay: ".1s" }}>
                <div className="w-device-card-svg">
                  <svg viewBox="0 0 140 180" width="140" height="180" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient id="rg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(139,92,246,.15)"/><stop offset="100%" stopColor="rgba(139,92,246,0)"/></radialGradient></defs>
                    <ellipse cx="70" cy="90" rx="55" ry="55" fill="url(#rg1)" />
                    <ellipse cx="70" cy="90" rx="46" ry="18" fill="none" stroke="#1C2E45" strokeWidth="22" />
                    <ellipse cx="70" cy="90" rx="46" ry="18" fill="none" stroke="rgba(139,92,246,.6)" strokeWidth="1.5" />
                    <ellipse cx="70" cy="78" rx="46" ry="18" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10" />
                    <ellipse cx="116" cy="90" rx="10" ry="7" fill="#0A1628" stroke="rgba(26,184,158,.7)" strokeWidth="1.2" />
                    <ellipse cx="116" cy="90" rx="4" ry="3" fill="#1AB89E" opacity=".7"><animate attributeName="opacity" values=".7;.25;.7" dur="2s" repeatCount="indefinite" /></ellipse>
                    <ellipse cx="70" cy="90" rx="24" ry="9" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
                    <rect x="18" y="118" width="104" height="44" rx="12" fill="rgba(10,22,40,.9)" stroke="rgba(139,92,246,.3)" strokeWidth="1" />
                    <text x="70" y="134" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.45)" textAnchor="middle">Readiness Score</text>
                    <text x="70" y="150" fontFamily="Poppins,sans-serif" fontSize="18" fontWeight="800" fill="#8B5CF6" textAnchor="middle">87 / 100</text>
                    <circle cx="30" cy="38" r="3" fill="rgba(26,184,158,.6)"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" /><animate attributeName="opacity" values=".6;.2;.6" dur="2s" repeatCount="indefinite" /></circle>
                    <text x="38" y="42" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="rgba(255,255,255,.4)">Tracking Active</text>
                  </svg>
                </div>
                <h3>EazyCare Ring R1</h3>
                <p>Ultra-thin titanium smart ring worn day and night. Focuses on sleep architecture, HRV, body temperature trends, and recovery scores — the metrics that matter most for chronic condition management.</p>
                <div className="w-device-specs">
                  <span className="w-spec-chip"><Moon size={12} /> Sleep</span>
                  <span className="w-spec-chip"><Activity size={12} /> HRV</span>
                  <span className="w-spec-chip"><Thermometer size={12} /> Temp</span>
                  <span className="w-spec-chip"><Battery size={12} /> 10-day battery</span>
                </div>
              </div>
              {/* ECG Patch */}
              <div className="w-device-card w-reveal" style={{ transitionDelay: ".15s" }}>
                <div className="w-device-card-svg">
                  <svg viewBox="0 0 140 180" width="140" height="180" xmlns="http://www.w3.org/2000/svg">
                    <defs><radialGradient id="pg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(255,170,0,.12)"/><stop offset="100%" stopColor="rgba(255,170,0,0)"/></radialGradient></defs>
                    <ellipse cx="70" cy="90" rx="55" ry="55" fill="url(#pg1)" />
                    <rect x="18" y="52" width="104" height="76" rx="18" fill="#0A1628" stroke="rgba(255,170,0,.5)" strokeWidth="1.5" />
                    <rect x="24" y="58" width="92" height="64" rx="14" fill="rgba(255,170,0,.04)" />
                    <circle cx="32" cy="112" r="9" fill="#0F1F35" stroke="rgba(255,170,0,.6)" strokeWidth="1.2" />
                    <circle cx="108" cy="112" r="9" fill="#0F1F35" stroke="rgba(255,170,0,.6)" strokeWidth="1.2" />
                    <line x1="41" y1="112" x2="99" y2="112" stroke="rgba(255,170,0,.2)" strokeWidth="1" strokeDasharray="4,3" />
                    <text x="70" y="76" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.7)" textAnchor="middle">ECG PATCH</text>
                    <polyline points="24,94 32,94 36,84 40,104 44,74 48,94 56,94 60,90 64,98 68,94 72,94 76,84 80,104 84,74 88,94 96,94 100,90 104,98 108,94 116,94" fill="none" stroke="#FFAA00" strokeWidth="1.5" strokeLinecap="round"><animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite" /></polyline>
                    <rect x="34" y="128" width="80" height="16" rx="8" fill="rgba(255,170,0,.12)" stroke="rgba(255,170,0,.3)" strokeWidth=".8" />
                    <circle cx="40" cy="136" r="3" fill="#FFAA00"><animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite" /></circle>
                    <text x="48" y="139.5" fontFamily="Poppins,sans-serif" fontSize="7" fill="#FFAA00" fontWeight="600">Transmitting Live</text>
                    <rect x="0" y="22" width="140" height="24" rx="10" fill="rgba(10,22,40,.9)" stroke="rgba(255,170,0,.25)" strokeWidth="1" />
                    <text x="70" y="38" fontFamily="Poppins,sans-serif" fontSize="8" fill="rgba(255,255,255,.5)" textAnchor="middle">Rhythm · Arrhythmia · AFib Detect</text>
                  </svg>
                </div>
                <h3>EazyCare Patch P1</h3>
                <p>Medical-grade adhesive ECG patch worn on the chest for 7–14 days. Detects arrhythmia, atrial fibrillation, and cardiac rhythm anomalies — the clinical-grade solution for high-risk patients.</p>
                <div className="w-device-specs">
                  <span className="w-spec-chip"><Waves size={12} /> 12-lead ECG</span>
                  <span className="w-spec-chip"><AlertCircle size={12} /> AFib detect</span>
                  <span className="w-spec-chip"><Clock size={12} /> 14-day wear</span>
                  <span className="w-spec-chip"><ShieldCheck size={12} /> Clinical grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="w-flow-section" id="how-it-works">
          <div className="w-reveal">
            <div className="w-sec-tag"><Watch size={14} /> The EazyCare AI Wearables Flow</div>
            <h2 className="w-sec-h2">Wear It. Forget It.<br /><span style={{ color: "var(--teal)" }}>AI Does the Rest.</span></h2>
            <p className="w-sec-desc">Your wearable streams health data continuously to EazyCare AI — which analyses, alerts, and briefs your doctor in real time.</p>
          </div>
          <div className="w-flow-layout">
            <div className="w-flow-steps w-reveal-left" style={{ transitionDelay: ".1s" }}>
              <div className="w-flow-step">
                <div className="w-fs-num">1</div>
                <div className="w-fs-icon"><Watch size={22} /></div>
                <div>
                  <h3>Device Syncs Continuously</h3>
                  <p>Your EazyCare wearable captures heart rate, ECG, SpO₂, temperature, HRV, and movement data every few seconds — streaming encrypted to the EazyCare AI cloud over WiFi or LTE.</p>
                  <span className="tag">🔄 Real-time sync every 5 seconds</span>
                </div>
              </div>
              <div className="w-flow-step">
                <div className="w-fs-num">2</div>
                <div className="w-fs-icon"><Brain size={22} /></div>
                <div>
                  <h3>AI Analyses & Establishes Baseline</h3>
                  <p>EazyCare AI learns your unique health baseline over 7 days, then continuously compares real-time readings against it. Deviations — not just absolute thresholds — trigger intelligent alerts.</p>
                  <span className="tag">🧠 Personalised AI model per user</span>
                </div>
              </div>
              <div className="w-flow-step">
                <div className="w-fs-num">3</div>
                <div className="w-fs-icon"><Bell size={22} /></div>
                <div>
                  <h3>Smart Alerts — For You & Your Doctor</h3>
                  <p>When anomalies are detected, you receive a push notification and your linked doctor gets an AI-generated clinical brief on their EazyCare dashboard. Urgency is auto-classified: watch, act, or emergency.</p>
                  <span className="tag">🚨 Doctor briefed in under 90 seconds</span>
                </div>
              </div>
              <div className="w-flow-step">
                <div className="w-fs-num">4</div>
                <div className="w-fs-icon"><Hospital size={22} /></div>
                <div>
                  <h3>Arrive at Clinic — Doctor Already Knows</h3>
                  <p>When you visit the clinic, your doctor has 14 days of your health trend data, AI-highlighted anomalies, and a pre-built consultation brief. Zero time wasted on history-taking. Maximum time on care.</p>
                  <span className="tag">📋 Full clinical brief auto-prepared</span>
                </div>
              </div>
            </div>
            {/* Flow diagram SVG */}
            <div className="w-reveal-right" style={{ transitionDelay: ".15s" }}>
              <svg viewBox="0 0 420 480" width="100%" style={{ maxWidth: 420 }} xmlns="http://www.w3.org/2000/svg">
                <defs><radialGradient id="fg1" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="rgba(26,184,158,.12)"/><stop offset="100%" stopColor="rgba(26,184,158,0)"/></radialGradient></defs>
                <ellipse cx="210" cy="240" rx="180" ry="180" fill="url(#fg1)" />
                <circle cx="210" cy="240" r="60" fill="#0A1628" stroke="rgba(26,184,158,.4)" strokeWidth="1.5" />
                <circle cx="210" cy="240" r="50" fill="rgba(26,184,158,.06)" stroke="rgba(26,184,158,.2)" strokeWidth="1" />
                <text x="210" y="234" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="800" fill="#1AB89E" textAnchor="middle">EazyCare</text>
                <text x="210" y="248" fontFamily="Poppins,sans-serif" fontSize="11" fontWeight="800" fill="#1AB89E" textAnchor="middle">AI Core</text>
                <circle cx="210" cy="240" r="64" fill="none" stroke="rgba(26,184,158,.2)" strokeWidth="1" strokeDasharray="6,8"><animateTransform attributeName="transform" type="rotate" from="0 210 240" to="360 210 240" dur="12s" repeatCount="indefinite" /></circle>
                <circle cx="210" cy="100" r="32" fill="#0F1F35" stroke="rgba(26,184,158,.5)" strokeWidth="1.2" />
                <text x="210" y="97" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Watch S1</text>
                <text x="210" y="110" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#1AB89E" textAnchor="middle">72 BPM</text>
                <line x1="210" y1="132" x2="210" y2="176" stroke="rgba(26,184,158,.4)" strokeWidth="1.2" strokeDasharray="4,3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="1.2s" repeatCount="indefinite" /></line>
                <circle cx="88" cy="340" r="32" fill="#0F1F35" stroke="rgba(139,92,246,.5)" strokeWidth="1.2" />
                <text x="88" y="337" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Ring R1</text>
                <text x="88" y="350" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#8B5CF6" textAnchor="middle">HRV 62ms</text>
                <line x1="114" y1="318" x2="168" y2="280" stroke="rgba(139,92,246,.35)" strokeWidth="1.2" strokeDasharray="4,3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="1.6s" repeatCount="indefinite" /></line>
                <circle cx="332" cy="340" r="32" fill="#0F1F35" stroke="rgba(255,170,0,.5)" strokeWidth="1.2" />
                <text x="332" y="337" fontFamily="Poppins,sans-serif" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Patch P1</text>
                <text x="332" y="350" fontFamily="Poppins,sans-serif" fontSize="9" fontWeight="700" fill="#FFAA00" textAnchor="middle">ECG Live</text>
                <line x1="306" y1="318" x2="252" y2="280" stroke="rgba(255,170,0,.35)" strokeWidth="1.2" strokeDasharray="4,3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="1.4s" repeatCount="indefinite" /></line>
                <circle cx="360" cy="180" r="32" fill="#0F1F35" stroke="rgba(26,184,158,.5)" strokeWidth="1.2" />
                <text x="360" y="177" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="rgba(255,255,255,.7)" textAnchor="middle">Doctor</text>
                <text x="360" y="190" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="rgba(255,255,255,.7)" textAnchor="middle">Dashboard</text>
                <line x1="332" y1="195" x2="274" y2="220" stroke="rgba(26,184,158,.4)" strokeWidth="1.2" strokeDasharray="4,3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="1s" repeatCount="indefinite" /></line>
                <circle cx="60" cy="180" r="32" fill="#0F1F35" stroke="rgba(26,184,158,.5)" strokeWidth="1.2" />
                <text x="60" y="177" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="rgba(255,255,255,.7)" textAnchor="middle">Patient</text>
                <text x="60" y="190" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="rgba(255,255,255,.7)" textAnchor="middle">App</text>
                <line x1="88" y1="195" x2="146" y2="220" stroke="rgba(26,184,158,.4)" strokeWidth="1.2" strokeDasharray="4,3"><animate attributeName="stroke-dashoffset" values="0;-14" dur="1.1s" repeatCount="indefinite" /></line>
                <rect x="120" y="52" width="150" height="28" rx="14" fill="#FF4D6D" opacity=".9"><animate attributeName="opacity" values=".9;.6;.9" dur="2s" repeatCount="indefinite" /></rect>
                <text x="190" y="70" fontFamily="Poppins,sans-serif" fontSize="8" fontWeight="700" fill="white" textAnchor="middle">⚠ AFib Detected — Alert Sent</text>
              </svg>
            </div>
          </div>
        </section>

        <div className="w-divider" />

        {/* ── LIVE METRICS DASHBOARD ── */}
        <div className="w-dash-section" id="dashboard">
          <div className="w-dash-inner">
            <div className="w-reveal w-center">
              <div className="w-sec-tag"><TrendingUp size={14} /> Live Health Intelligence</div>
              <h2 className="w-sec-h2">Your Doctor Sees Everything.<br /><span style={{ color: "var(--teal)" }}>In Real Time.</span></h2>
              <p className="w-sec-desc" style={{ margin: "0 auto" }}>A live clinical view of your wearable data — presented to your doctor exactly how they need it.</p>
            </div>
            <div className="w-wdash w-reveal" style={{ transitionDelay: ".1s" }}>
              {/* Left: Heart + vitals */}
              <div className="w-wdash-panel">
                <div className="w-wdash-title">Heart Monitor — Live</div>
                <div className="w-heartrate-display">
                  <div className="w-hr-num">{hr}</div>
                  <div className="w-hr-unit">beats per minute</div>
                  <div className="w-hr-label">Normal · Sinus Rhythm</div>
                </div>
                <div className="w-ecg-wrap">
                  <svg viewBox="0 0 256 48" width="100%" height="48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <polyline points="0,24 16,24 22,18 28,30 32,10 36,24 48,24 52,21 56,28 60,24 72,24 78,18 84,30 88,10 92,24 104,24 108,21 112,28 116,24 128,24 134,18 140,30 144,10 148,24 160,24 164,21 168,28 172,24 184,24 190,18 196,30 200,10 204,24 216,24 220,21 224,28 228,24 240,24 248,24 256,24" fill="none" stroke="#1AB89E" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-mini-metric"><span className="w-mm-label">SpO₂</span><span className="w-mm-val w-mm-ok">98%</span></div>
                <div className="w-mini-metric"><span className="w-mm-label">HRV</span><span className="w-mm-val w-mm-ok">62 ms</span></div>
                <div className="w-mini-metric"><span className="w-mm-label">Skin Temp</span><span className="w-mm-val w-mm-ok">36.6°C</span></div>
                <div className="w-mini-metric"><span className="w-mm-label">Blood Pressure</span><span className="w-mm-val w-mm-warn">134/86 ↑</span></div>
                <div className="w-mini-metric"><span className="w-mm-label">Stress Index</span><span className="w-mm-val w-mm-warn">Moderate</span></div>
                <div className="w-mini-metric"><span className="w-mm-label">Sleep Score</span><span className="w-mm-val w-mm-ok">78 / 100</span></div>
              </div>
              {/* Centre: Trends + AI insights */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="w-wdash-panel">
                  <div className="w-wdash-title">7-Day Trends</div>
                  <div className="w-spark-row">
                    <span className="w-spark-label">Heart Rate</span>
                    <svg className="w-spark-chart" viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="0,20 25,18 50,22 75,16 100,20 125,14 150,18 175,12 200,16" fill="none" stroke="#1AB89E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="w-spark-val">72 bpm</span>
                  </div>
                  <div className="w-spark-row">
                    <span className="w-spark-label">SpO₂</span>
                    <svg className="w-spark-chart" viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="0,12 25,10 50,14 75,12 100,10 125,12 150,8 175,10 200,12" fill="none" stroke="#1AB89E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="w-spark-val">98%</span>
                  </div>
                  <div className="w-spark-row">
                    <span className="w-spark-label">HRV</span>
                    <svg className="w-spark-chart" viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="0,18 25,22 50,16 75,20 100,14 125,18 150,22 175,16 200,12" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="w-spark-val" style={{ color: "#8B5CF6" }}>62ms</span>
                  </div>
                  <div className="w-spark-row">
                    <span className="w-spark-label">Sleep</span>
                    <svg className="w-spark-chart" viewBox="0 0 200 32" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="0,16 25,14 50,18 75,12 100,14 125,10 150,16 175,12 200,14" fill="none" stroke="#1AB89E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="w-spark-val">7.2 hrs</span>
                  </div>
                </div>
                <div className="w-wdash-panel">
                  <div className="w-wdash-title">AI Clinical Insights</div>
                  <div style={{ background: "rgba(26,184,158,.08)", border: "1px solid rgba(26,184,158,.2)", borderRadius: 14, padding: "12px 14px", marginBottom: 10, fontSize: ".8rem", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--teal)" }}>🧠 EazyCare AI:</strong> Patient&apos;s resting HR has dropped 4 bpm over the past 7 days. Recovery score improved 12%. Sleep consistency is now in the top 20% for their age group. <span style={{ display: "inline-flex", gap: 4, alignItems: "center", marginLeft: 6 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", animation: "typing .9s ease-in-out infinite" }} /><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", animation: "typing .9s ease-in-out .2s infinite" }} /><span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--teal)", animation: "typing .9s ease-in-out .4s infinite" }} /></span>
                  </div>
                  <div style={{ background: "rgba(255,170,0,.06)", border: "1px solid rgba(255,170,0,.2)", borderRadius: 14, padding: "12px 14px", marginBottom: 10, fontSize: ".8rem", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
                    <strong style={{ color: "#FFAA00" }}>⚠️ Watch:</strong> Blood pressure trending slightly elevated during evening hours (136/86 avg). Recommend reducing sodium intake and scheduling a follow-up in 2 weeks.
                  </div>
                  <div style={{ background: "rgba(26,184,158,.06)", border: "1px solid rgba(26,184,158,.2)", borderRadius: 14, padding: "12px 14px", fontSize: ".8rem", color: "rgba(255,255,255,.75)", lineHeight: 1.6 }}>
                    <strong style={{ color: "var(--teal)" }}>✅ Good:</strong> SpO₂ consistently above 97%. No arrhythmia detected in the past 14 days. ECG pattern stable.
                  </div>
                </div>
              </div>
              {/* Right: Alerts + Actions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="w-wdash-panel">
                  <div className="w-wdash-title">Active Alerts</div>
                  <div className="w-alert-card w-alert-high">
                    <div className="w-alert-icon"><AlertCircle size={18} /></div>
                    <div className="w-alert-text"><div className="w-alert-title">AFib Pattern Detected</div><div className="w-alert-sub">Irregular rhythm &gt; 30s at 02:14 AM</div></div>
                    <div className="w-alert-time">2h ago</div>
                  </div>
                  <div className="w-alert-card w-alert-med">
                    <div className="w-alert-icon"><TrendingUp size={18} /></div>
                    <div className="w-alert-text"><div className="w-alert-title">BP Trending Up</div><div className="w-alert-sub">Evening avg 136/86 over 3 days</div></div>
                    <div className="w-alert-time">5h ago</div>
                  </div>
                  <div className="w-alert-card w-alert-ok">
                    <div className="w-alert-icon"><ShieldCheck size={18} /></div>
                    <div className="w-alert-text"><div className="w-alert-title">All Clear — Morning Check</div><div className="w-alert-sub">No anomalies in past 6 hours</div></div>
                    <div className="w-alert-time">6h ago</div>
                  </div>
                </div>
                <div className="w-wdash-panel">
                  <div className="w-wdash-title">Doctor Actions</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(26,184,158,.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)", fontSize: ".9rem", flexShrink: 0 }}><MessageSquare size={16} /></div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: ".82rem", fontWeight: 700 }}>Message Patient</div><div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.45)" }}>Send follow-up instructions</div></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(26,184,158,.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--teal)", fontSize: ".9rem", flexShrink: 0 }}><CalendarCheck size={16} /></div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: ".82rem", fontWeight: 700 }}>Schedule Review</div><div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.45)" }}>Book appointment within 14 days</div></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,77,109,.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF4D6D", fontSize: ".9rem", flexShrink: 0 }}><HeartPulse size={16} /></div>
                    <div style={{ flex: 1 }}><div style={{ fontSize: ".82rem", fontWeight: 700 }}>Flag for Cardiology</div><div style={{ fontSize: ".72rem", color: "rgba(255,255,255,.45)" }}>Refer if 2nd AFib event occurs</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-divider" />

        {/* ── INTEGRATIONS ── */}
        <section className="w-section w-center">
          <div className="w-reveal">
            <div className="w-sec-tag"><Globe size={14} /> Ecosystem Integrations</div>
            <h2 className="w-sec-h2">Works With Your<br /><span style={{ color: "var(--teal)" }}>Existing Health Stack.</span></h2>
            <p className="w-sec-desc" style={{ margin: "0 auto" }}>EazyCare AI Wearables integrate with the platforms and devices you already use.</p>
          </div>
          <div className="w-int-row w-reveal" style={{ transitionDelay: ".1s" }}>
            {["Apple Health / Google Fit", "Samsung Health", "Garmin Connect", "Fitbit", "Oura Ring", "Withings", "Epic / MyChart", "Teladoc", "WhatsApp Alerts", "Emergency Services"].map((item) => (
              <span key={item} className="w-int-pill">{item}</span>
            ))}
          </div>
        </section>

        <div className="w-divider" />

        {/* ── ROI ── */}
        <div className="w-roi-section">
          <div className="w-roi-inner">
            <div className="w-reveal w-center">
              <div className="w-sec-tag"><Trophy size={14} /> Proven Outcomes</div>
              <h2 className="w-sec-h2">Real Results From<br /><span style={{ color: "var(--teal)" }}>Continuous Monitoring.</span></h2>
            </div>
            <div className="w-roi-grid">
              {[
                { icon: HeartPulse, num: "94%", lbl: "Of AFib episodes detected before symptoms" },
                { icon: Clock, num: "72h", lbl: "Earlier detection vs. traditional care" },
                { icon: TrendingDown, num: "−68%", lbl: "Reduction in emergency admissions" },
                { icon: ShieldCheck, num: "4.9/5", lbl: "Patient satisfaction score" },
              ].map((r, i) => (
                <div key={r.lbl} className="w-roi-card w-reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="w-roi-icon"><r.icon size={28} /></div>
                  <div className="w-roi-num">{r.num}</div>
                  <div className="w-roi-lbl">{r.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-divider" />

        {/* ── TESTIMONIALS ── */}
        <section className="w-test-section">
          <div className="w-reveal w-center">
            <div className="w-sec-tag"><MessageSquare size={14} /> Trusted by Early Adopters</div>
            <h2 className="w-sec-h2">What Patients & Doctors<br /><span style={{ color: "var(--teal)" }}>Are Saying.</span></h2>
          </div>
          <div className="w-test-grid">
            {[
              { metric: "AFib caught early", quote: "I wore the EazyCare Patch for 10 days after my doctor recommended it. On day 7, the AI detected an atrial fibrillation pattern I'd never felt. My cardiologist said we caught it 6 months earlier than we would have with routine checks.", name: "David Chen", role: "Patient — Singapore", avatar: "DC", color: "#1AB89E" },
              { metric: "−68% ER visits", quote: "Since recommending EazyCare Wearables to my chronic heart failure patients, our emergency admission rate has dropped by more than two-thirds. The AI catches fluid retention and arrhythmia days before they become crises.", name: "Dr. Sarah Williams", role: "Cardiologist — London, UK", avatar: "SW", color: "#7B5EA7" },
              { metric: "Peace of mind", quote: "My father is 78 and lives alone. The EazyCare Ring monitors him 24/7 and alerts me and his doctor if anything looks off. Last month it flagged an irregular heart rhythm. We got him to hospital within the hour. It saved his life.", name: "Amina Rashid", role: "Family Caregiver — Dubai", avatar: "AR", color: "#E85D75" },
            ].map((t, i) => (
              <div key={t.name} className="w-test-card w-reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="w-test-metric">{t.metric}</div>
                <div className="w-test-quote">&ldquo;</div>
                <p>{t.quote}</p>
                <div className="w-test-author">
                  <div className="w-ta-avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div><div className="w-ta-name">{t.name}</div><div className="w-ta-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-divider" />

        {/* ── FINAL CTA ── */}
        <section className="w-final-cta" id="preorder">
          <div className="w-reveal">
            <h2>Your Health Never Sleeps.<br /><span style={{ color: "var(--teal)" }}>Neither Does EazyCare AI.</span></h2>
            <p>Join the waitlist for EazyCare Wearables. Pre-order today and receive early access pricing, free 3-month premium AI monitoring, and priority pairing with a linked EazyCare AI clinician.</p>
            <div className="max-w-md mx-auto">
              <LeadForm source="Wearable Waitlist" />
            </div>
            <p style={{ fontSize: ".75rem", color: "rgba(131, 131, 131, 1)", marginTop: 24 }}>Ships Q4 2026. No payment until dispatch. Pairs with EazyCare AI app on iOS & Android.</p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
