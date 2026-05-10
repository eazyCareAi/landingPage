import type { Metadata, Viewport } from "next";
import { Poppins, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EazyCare AI | AI-Powered Health Companion",
    template: "%s | EazyCare AI",
  },
  description:
    "EazyCare AI is an AI-powered health companion offering instant symptom guidance, online doctor consultations, and mental wellness support — 100% private, available 24/7.",
  keywords: [
    "AI health assistant",
    "online doctor consultation",
    "AI mental health",
    "symptom checker",
    "EazyCare AI",
    "telehealth app",
    "healthcare AI",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://www.eazycare.ai"),
  openGraph: {
    type: "website",
    url: "https://www.eazycare.ai",
    title: "EazyCare AI | AI Care. Human Touch.",
    description:
      "Get instant AI health guidance, consult verified doctors online, and access mental wellness support — anytime, anywhere.",
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
    title: "EazyCare AI | AI Care. Human Touch.",
    description:
      "AI-powered health companion. Instant guidance, verified doctors, mental wellness.",
    images: [
      {
        url: "https://www.eazycare.ai/images/eazycareai-preview.webp",
        width: 1200,
        height: 500,
        alt: "EazyCare AI Preview",
      },
    ],
  },
  icons: {
    icon: "https://www.eazycare.ai/images/favicon.ico",
    shortcut: "https://www.eazycare.ai/images/icon.png",
    apple: "https://www.eazycare.ai/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A9E8A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
