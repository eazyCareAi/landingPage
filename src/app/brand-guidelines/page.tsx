import type { Metadata } from "next";
import BrandGuidelinesClient from "./BrandGuidelinesClient";

export const metadata: Metadata = {
  title: "Brand Guidelines | EazyCare AI",
  description:
    "Official brand guidelines for eazyCare.Ai — logo usage, color palette, typography, and visual identity standards for partners and designers.",
  keywords: [
    "eazyCare.Ai brand",
    "brand guidelines",
    "logo usage",
    "color palette",
    "healthcare branding",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/brand-guidelines",
    title: "Brand Guidelines | EazyCare AI",
    description: "Official brand guidelines, logo assets, and visual identity standards.",
    images: ["https://www.eazycare.ai/images/eazycareai-preview.webp"],
  },
  alternates: {
    canonical: "https://www.eazycare.ai/brand-guidelines",
  },
};

export default function BrandGuidelinesPage() {
  return <BrandGuidelinesClient />;
}
