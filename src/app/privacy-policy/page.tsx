import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "EazyCare AI Privacy Policy — learn how we collect, use, store, and protect your personal health information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#060E1A] pt-28 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#1AB89E]/10 border border-[#1AB89E]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#1AB89E] uppercase tracking-wider mb-4">
              Legal
            </div>
            <h1 className="text-3xl md:text-[2.6rem] font-extrabold tracking-tight text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-white/55">Last updated: May 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                EazyCare AI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile applications, and AI-powered health services (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-white/75 leading-relaxed">
                By accessing or using our Services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                We collect several types of information to provide and improve our Services:
              </p>
              <h3 className="text-lg font-semibold text-white/90 mb-2">2.1 Personal Information</h3>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2 mb-4">
                <li>Name, email address, phone number, and date of birth</li>
                <li>Health information you voluntarily provide (symptoms, medical history, medications)</li>
                <li>Account credentials and profile information</li>
                <li>Payment information (processed securely by third-party payment processors)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white/90 mb-2">2.2 Usage Data</h3>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2 mb-4">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Interaction data (pages visited, features used, session duration)</li>
                <li>AI conversation logs (used solely to improve response quality)</li>
              </ul>
              <h3 className="text-lg font-semibold text-white/90 mb-2">2.3 Wearables Data</h3>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Heart rate, SpO₂, body temperature, and ECG readings from connected devices</li>
                <li>Sleep patterns and activity metrics</li>
                <li>Data is encrypted in transit and at rest</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Provide personalized AI health assessments and recommendations</li>
                <li>Facilitate telehealth consultations with verified medical professionals</li>
                <li>Monitor health trends and generate alerts for anomalies</li>
                <li>Improve our AI models and service quality</li>
                <li>Communicate updates, appointment reminders, and health tips</li>
                <li>Comply with legal obligations and protect against fraud</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing & Disclosure</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                We do not sell your personal information. We may share data only in the following circumstances:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li><strong>Healthcare Providers:</strong> With your explicit consent, we share relevant health data with doctors or clinics for consultations.</li>
                <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our Services (cloud hosting, analytics, payment processing) under strict confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to users.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>AES-256 encryption for data at rest</li>
                <li>TLS 1.3 for all data in transit</li>
                <li>Multi-factor authentication (MFA) for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>HIPAA and GDPR compliance frameworks</li>
                <li>Strict access controls and staff training</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Export your data in a portable format</li>
                <li>Object to automated decision-making</li>
                <li>File a complaint with a data protection authority</li>
              </ul>
              <p className="text-white/75 leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:privacy@eazycare.ai" className="text-[#1AB89E] hover:underline">privacy@eazycare.ai</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">7. Data Retention</h2>
              <p className="text-white/75 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Health records are retained per applicable medical record retention regulations.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">8. Children&apos;s Privacy</h2>
              <p className="text-white/75 leading-relaxed">
                Our Services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">9. Changes to This Policy</h2>
              <p className="text-white/75 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our Services. Please review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
              <p className="text-white/75 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@eazycare.ai" className="text-[#1AB89E] hover:underline">privacy@eazycare.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
