import type { Metadata } from "next";
import ClinicRoiClient from "./ClinicRoiClient";

export const metadata: Metadata = {
  title: "Clinic ROI Calculator | EazyCare AI",
  description:
    "Calculate how much more revenue your clinic could generate with eazyCare.Ai. Free AI-powered ROI calculator for clinics and hospitals.",
  keywords: [
    "clinic ROI calculator",
    "healthcare AI ROI",
    "clinic revenue calculator",
    "AI clinic software ROI",
    "hospital revenue uplift",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/clinic-roi-calculator",
    title: "Clinic ROI Calculator | EazyCare AI",
    description: "See exactly how much more money your clinic could be making with AI.",
    images: ["https://www.eazycare.ai/images/eazycareai-preview.webp"],
  },
  alternates: {
    canonical: "https://www.eazycare.ai/clinic-roi-calculator",
  },
};

export default function ClinicRoiPage() {
  return <ClinicRoiClient />;
}
