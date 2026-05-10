import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  KeyRound,
  AlertTriangle,
  Fingerprint,
  Clock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "EazyCare AI Security — learn about our comprehensive security measures, compliance standards, and data protection practices.",
};

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Your health information is protected with the same standards used by banks and military institutions.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description:
      "We enforce MFA for all accounts, including biometric authentication, TOTP authenticator apps, and hardware security keys. Your account stays protected even if your password is compromised.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Our infrastructure is hosted on ISO 27001 and SOC 2 Type II certified cloud providers with redundant data centers, automated backups, and 99.99% uptime guarantees.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description:
      "Role-based access control (RBAC) ensures only authorized personnel can access sensitive data. All access is logged, monitored, and regularly audited.",
  },
  {
    icon: FileCheck,
    title: "HIPAA & GDPR Compliance",
    description:
      "We adhere to HIPAA (Health Insurance Portability and Accountability Act) and GDPR (General Data Protection Regulation) standards, ensuring your health data is handled with the highest legal protections.",
  },
  {
    icon: KeyRound,
    title: "Zero-Knowledge Architecture",
    description:
      "Where technically feasible, we implement zero-knowledge principles so that even our engineering team cannot access your unencrypted health records without your explicit consent.",
  },
  {
    icon: Clock,
    title: "Continuous Monitoring",
    description:
      "Our Security Operations Center (SOC) monitors systems 24/7/365 using AI-powered threat detection, intrusion prevention systems, and real-time anomaly detection.",
  },
  {
    icon: Globe,
    title: "Data Sovereignty",
    description:
      "Health data is stored in regional data centers compliant with local regulations. Malaysian user data stays in Malaysia; EU data stays within the European Economic Area.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "We maintain a comprehensive incident response plan with defined SLAs. In the unlikely event of a security breach, affected users are notified within 72 hours as required by GDPR.",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security Management" },
  { name: "SOC 2 Type II", desc: "Service Organization Controls" },
  { name: "HIPAA", desc: "Health Data Protection (US)" },
  { name: "GDPR", desc: "EU Data Protection Regulation" },
  { name: "PDPA", desc: "Personal Data Protection Act (Malaysia)" },
  { name: "PCI DSS", desc: "Payment Card Industry Standards" },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#060E1A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-5">
              <Shield size={14} />
              Trust & Safety
            </div>
            <h1 className="text-4xl md:text-[3.2rem] font-extrabold tracking-tight text-white mb-5">
              Your Security Is Our <span className="text-[#1AB89E]">Priority</span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-[600px] mx-auto">
              At EazyCare AI, we understand that health data is the most sensitive information you entrust to us. That&apos;s why we&apos;ve built a multi-layered security architecture designed from the ground up to protect your privacy.
            </p>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="pb-20 px-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-[#060E1A] border border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1AB89E]/10 flex items-center justify-center text-[#1AB89E] mb-4">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="pb-20 px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-[#0A1628] rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-extrabold text-white mb-2 text-center">
                Compliance & Certifications
              </h2>
              <p className="text-white/65 text-center mb-8">
                EazyCare AI meets or exceeds industry security standards
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="bg-[#060E1A] rounded-xl p-4 text-center border border-white/10"
                  >
                    <div className="text-sm font-bold text-white mb-1">
                      {cert.name}
                    </div>
                    <div className="text-xs text-white/55">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bug Bounty */}
        <section className="pb-20 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Responsible Disclosure
            </h2>
            <p className="text-white/65 leading-relaxed mb-6 max-w-[600px] mx-auto">
              We encourage security researchers to report vulnerabilities responsibly. If you discover a security issue, please email us at{" "}
              <a
                href="mailto:security@eazycare.ai"
                className="text-[#1AB89E] font-semibold hover:underline"
              >
                security@eazycare.ai
              </a>
              . We commit to acknowledging reports within 48 hours and resolving critical issues within 7 days.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-5 py-2 text-sm font-semibold text-[#0ED4B5]">
              <Shield size={16} />
              We do not pursue legal action against good-faith security researchers
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-24 px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Security Questions?
            </h2>
            <p className="text-white/65 leading-relaxed mb-6">
              Our security team is here to help. Reach out anytime for questions about our security practices or to report concerns.
            </p>
            <a
              href="mailto:security@eazycare.ai"
              className="inline-flex items-center gap-2 bg-[#1AB89E] text-white font-semibold px-7 py-3 rounded-full shadow-lg shadow-[#1AB89E]/20 hover:bg-[#1AB89E] transition-all"
            >
              Contact Security Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
