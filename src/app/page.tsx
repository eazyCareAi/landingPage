import type { Metadata } from "next";
import LandingClient from "@/components/landing/LandingClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EazyCare AI — You AI-Powered Healthcare Companion | AI Care. Human Touch.",
  description:
    "EazyCare AI is coming. Your AI-powered health companion for instant symptom guidance, verified doctor consultations, and mental wellness support. Join the waitlist.",
  keywords: [
    "AI health assistant",
    "online doctor consultation",
    "AI mental health",
    "symptom checker",
    "EazyCare AI",
    "telehealth app",
    "healthcare AI",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/",
    title: "EazyCare AI — You AI-Powered Healthcare Companion | AI Care. Human Touch.",
    description:
      "Your AI-powered health companion is almost here. Instant guidance. Verified doctors. Mental wellness. Join the waitlist for early access.",
    images: [
      {
        url: "https://www.eazycare.ai/images/eazycareai-preview.webp",
        width: 1200,
        height: 500,
        alt: "EazyCare AI Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eazycareai",
    title: "EazyCare AI — You AI-Powered Healthcare Companion | AI Care. Human Touch.",
    description:
      "AI-powered health companion. Instant guidance, verified doctors, mental wellness. Join the waitlist.",
    images: [
      {
        url: "https://www.eazycare.ai/images/eazycareai-preview.webp",
        width: 1200,
        height: 500,
        alt: "EazyCare AI Preview",
      },
    ],
  },
  alternates: {
    canonical: "https://www.eazycare.ai/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "EazyCare AI",
  url: "https://www.eazycare.ai",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "EazyCare AI is an AI-powered health companion offering instant symptom guidance, online doctor consultations, and mental wellness support — 100% private, available 24/7.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: {
    "@type": "Organization",
    name: "EazyCare AI",
    url: "https://www.eazycare.ai",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingClient />
    </>
  );
}
