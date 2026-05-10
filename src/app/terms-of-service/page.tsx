import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "EazyCare AI Terms of Service — the rules and guidelines governing your use of our AI-powered health platform.",
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-white/55">Last updated: May 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Welcome to EazyCare AI. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the EazyCare AI website, mobile applications, and AI-powered health services (collectively, the &ldquo;Services&rdquo;), operated by EazyCare AI Sdn Bhd (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="text-white/75 leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">2. Description of Services</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                EazyCare AI provides AI-powered health companion services, including but not limited to:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>AI symptom assessment and health guidance</li>
                <li>Online consultation booking with verified healthcare providers</li>
                <li>Mental wellness support and resources</li>
                <li>Personal health record management</li>
                <li>Continuous health monitoring via wearable device integration</li>
                <li>Clinic kiosk systems for patient intake and triage</li>
              </ul>
              <p className="text-white/75 leading-relaxed mt-4">
                <strong>Important:</strong> EazyCare AI is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">3. User Accounts</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                To access certain features, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Providing accurate, current, and complete information during registration</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
              </ul>
              <p className="text-white/75 leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">4. Acceptable Use</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity of the Services</li>
                <li>Use the Services for emergency medical situations requiring immediate attention</li>
                <li>Share false or misleading health information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                The Services and their original content, features, and functionality are owned by EazyCare AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-white/75 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">6. Medical Disclaimer</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                THE SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND DO NOT CONSTITUTE MEDICAL ADVICE. THE AI SYSTEM DOES NOT DIAGNOSE CONDITIONS OR PRESCRIBE TREATMENTS.
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>Never disregard professional medical advice or delay seeking it because of something you have read on our Services.</li>
                <li>If you think you may have a medical emergency, call your doctor or emergency services immediately.</li>
                <li>EazyCare AI does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the Services.</li>
                <li>Reliance on any information provided by EazyCare AI is solely at your own risk.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">7. Subscription and Payments</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Some features of the Services may require payment. By subscribing:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li>You agree to pay all fees associated with your selected plan</li>
                <li>Subscription fees are billed in advance on a recurring basis</li>
                <li>You may cancel your subscription at any time through your account settings</li>
                <li>Refunds are provided in accordance with our refund policy</li>
                <li>We reserve the right to change pricing with reasonable notice</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EAZYCARE AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.
              </p>
              <p className="text-white/75 leading-relaxed">
                Our total liability to you for all claims arising from or relating to these Terms or the Services shall not exceed the amount you paid to us during the twelve (12) months preceding the event giving rise to liability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p className="text-white/75 leading-relaxed">
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
              <p className="text-white/75 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Malaysia.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">11. Changes to Terms</h2>
              <p className="text-white/75 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the &ldquo;Last updated&rdquo; date. Your continued use of the Services after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Contact Us</h2>
              <p className="text-white/75 leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@eazycare.ai" className="text-[#1AB89E] hover:underline">legal@eazycare.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
