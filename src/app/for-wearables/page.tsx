import type { Metadata } from "next";
import WearablesClient from "./WearablesClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EazyCare AI Wearables | Continuous Health Intelligence on Your Wrist",
  description:
    "EazyCare AI Wearables — smartwatch, ring, and patch sensors that stream live health data to your doctor. Continuous monitoring, AI-powered alerts, real-time clinical insights.",
  keywords: [
    "health wearables",
    "smartwatch health",
    "ECG patch",
    "continuous health monitoring",
    "AI health alerts",
    "EazyCare Wearables",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/for-wearables",
    title: "EazyCare AI Wearables | Continuous Health Intelligence on Your Wrist",
    description:
      "Smartwatch, ring, and patch sensors that stream live health data to your doctor. Continuous monitoring, AI-powered alerts, real-time clinical insights.",
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
    title: "EazyCare AI Wearables",
    description:
      "Continuous health monitoring with smartwatch, ring, and ECG patch. AI-powered alerts for you and your doctor.",
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
    canonical: "https://www.eazycare.ai/for-wearables",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EazyCare AI Wearables",
  description:
    "Smartwatch, smart ring, and ECG patch with continuous health monitoring and AI-powered alerts.",
  brand: { "@type": "Brand", name: "EazyCare AI" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Pre-order available",
  },
};

export default function WearablesPage() {
  return (
    <>
      <Script
        id="json-ld-wearables"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WearablesClient />
    </>
  );
}
