import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "EazyCare AI Cookie Policy — learn how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-sm text-white/55">Last updated: May 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">1. What Are Cookies?</h2>
              <p className="text-white/75 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners. Similar technologies include pixel tags, web beacons, and local storage.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Cookies</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                EazyCare AI uses cookies and similar technologies for the following purposes:
              </p>

              <h3 className="text-lg font-semibold text-white/90 mb-2">2.1 Essential Cookies</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2 mb-4">
                <li>Session management and authentication</li>
                <li>Security features and fraud prevention</li>
                <li>Load balancing and performance optimization</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90 mb-2">2.2 Analytics Cookies</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2 mb-4">
                <li>Page views and navigation patterns</li>
                <li>Feature usage and engagement metrics</li>
                <li>Error tracking and debugging</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90 mb-2">2.3 Functional Cookies</h3>
              <p className="text-white/75 leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2 mb-4">
                <li>Language and region preferences</li>
                <li>Accessibility settings (font size, contrast)</li>
                <li>Recently viewed content</li>
              </ul>

              <h3 className="text-lg font-semibold text-white/90 mb-2">2.4 Marketing Cookies</h3>
              <p className="text-white/75 leading-relaxed">
                These cookies are used to track visitors across websites to display relevant and engaging advertisements. We only use these with your explicit consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Cookies</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior insights</li>
                <li><strong>Cloudflare:</strong> For security, performance, and DDoS protection</li>
                <li><strong>Stripe:</strong> For secure payment processing (only on payment pages)</li>
                <li><strong>Intercom / Zendesk:</strong> For customer support chat functionality</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">4. Cookie Duration</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                Cookies can be either session-based or persistent:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until you manually delete them</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">5. Managing Your Cookie Preferences</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                You can manage your cookie preferences in several ways:
              </p>
              <ul className="list-disc pl-5 text-white/75 leading-relaxed space-y-2">
                <li><strong>Cookie Banner:</strong> Use the cookie consent banner that appears when you first visit our site to customize your preferences</li>
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can usually find these in the &ldquo;Options&rdquo; or &ldquo;Preferences&rdquo; menu</li>
                <li><strong>Do Not Track:</strong> We honor browser &ldquo;Do Not Track&rdquo; signals where technically feasible</li>
              </ul>
              <p className="text-white/75 leading-relaxed mt-4">
                Please note that disabling certain cookies may affect the functionality of our website and your ability to use some features.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3">6. Changes to This Policy</h2>
              <p className="text-white/75 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
              <p className="text-white/75 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at{" "}
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
