"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  actions?: ReactNode;
}

export default function Navbar({ actions }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/for-doctors-and-clinics", label: "For Doctors" },
    { href: "/for-wearables", label: "Wearables" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#060E1A]/95 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/10"
          : "bg-[#060E1A]/80 backdrop-blur-xl border-b border-[rgba(26,184,158,0.2)]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/images/logo-darkmode.png"
            alt="EazyCare AI"
            width={150}
            height={80}
          />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-[#1AB89E]"
                  : "text-white/70 hover:text-[#1AB89E]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {actions}
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#1AB89E] text-[#060E1A] shadow-[0_4px_20px_rgba(26,184,158,0.4)] hover:bg-[#0ED4B5] transition-all"
          >
            Join Waitlist
          </Link>
        </div>
        <button
          className="md:hidden text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#060E1A]/95 border-b border-white/10 p-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-[#1AB89E]"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {actions && <div className="pt-2 border-t border-white/10">{actions}</div>}
          <Link
            href="/#waitlist"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold bg-[#1AB89E] text-[#060E1A]"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </header>
  );
}
