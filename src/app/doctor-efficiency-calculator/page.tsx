import type { Metadata } from "next";
import DoctorEfficiencyClient from "./DoctorEfficiencyClient";

export const metadata: Metadata = {
  title: "Doctor Efficiency Calculator | EazyCare AI",
  description:
    "Discover how many virtual doctors eazyCare.Ai can add to your hospital chain. Free enterprise capacity calculator for hospital groups.",
  keywords: [
    "doctor efficiency calculator",
    "hospital capacity calculator",
    "virtual doctors",
    "enterprise healthcare AI",
    "hospital chain ROI",
  ],
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai/doctor-efficiency-calculator",
    title: "Doctor Efficiency Calculator | EazyCare AI",
    description: "Add virtual doctors to your hospital chain without hiring anyone.",
    images: ["https://www.eazycare.ai/images/eazycareai-preview.webp"],
  },
  alternates: {
    canonical: "https://www.eazycare.ai/doctor-efficiency-calculator",
  },
};

export default function DoctorEfficiencyPage() {
  return <DoctorEfficiencyClient />;
}
