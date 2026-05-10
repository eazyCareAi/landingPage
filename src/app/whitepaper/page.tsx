import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper | EazyCare AI",
  description:
    "Read the EazyCare AI Whitepaper — our complete vision for AI-powered healthcare, platform architecture, and go-to-market strategy.",
  alternates: {
    canonical: "https://www.eazycare.ai/whitepaper",
  },
};

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-[#060E1A]">
      <div className="h-screen w-full">
        <object
          data="/eazyCare.Ai_Whitepaper.pdf"
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full text-white px-6">
            <p className="text-lg mb-4">
              It appears your browser does not support inline PDF viewing.
            </p>
            <a
              href="/eazyCare.Ai_Whitepaper.pdf"
              download
              className="px-6 py-3 rounded-full bg-[#1AB89E] text-white font-semibold hover:bg-[#157A6E] transition-all"
            >
              Download Whitepaper PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
