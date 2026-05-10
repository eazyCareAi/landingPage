import type { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EazyCare AI for Doctors & Clinics | AI-Powered Patient Kiosk System",
  description:
    "Transform your clinic with EazyCare AI smart kiosks. AI-powered patient intake, instant triage, medical history analysis and faster diagnoses. Serve more patients every day.",
  keywords: [
    "AI clinic kiosk",
    "patient intake system",
    "smart clinic",
    "AI triage",
    "clinic management AI",
    "EazyCare AI for doctors",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/for-doctors-and-clinics",
    title: "EazyCare AI for Doctors & Clinics | AI-Powered Patient Kiosk System",
    description:
      "Transform your clinic with EazyCare AI smart kiosks. AI-powered patient intake, instant triage, medical history analysis and faster diagnoses.",
    images: ["https://www.eazycare.ai/images/eazycareai-preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@eazycareai",
    title: "EazyCare AI for Doctors & Clinics",
    description:
      "AI-powered patient intake, instant triage, and faster diagnoses for your clinic.",
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
    canonical: "https://www.eazycare.ai/for-doctors-and-clinics",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EazyCare AI Smart Kiosk for Clinics",
  description:
    "AI-powered patient intake kiosk system for clinics and hospitals. Smart triage, history analysis, and doctor briefing.",
  brand: { "@type": "Brand", name: "EazyCare AI" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free demo available",
  },
};

export default function DoctorsPage() {
  return (
    <>
      <Script
        id="json-ld-doctors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DoctorsClient />
    </>
  );
}
