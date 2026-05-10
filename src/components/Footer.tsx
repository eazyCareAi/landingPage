"use client";

import Link from "next/link";
import Image from "next/image";
import { TwitterIcon, InstagramIcon, GithubIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#060E1A] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1 xs:col-span-2 sm:col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-darkmode.png"
                alt="EazyCare AI"
                width={120}
                height={60}
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              AI Care. Human Touch.
              <br />
              Your AI-powered health companion — instant guidance, verified doctors, mental wellness. Private. Secure. Always available.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://x.com/eazycareai"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#1AB89E] hover:text-[#060E1A] transition-all"
              >
                <TwitterIcon size={16} />
              </a>
              {/* <a
                href="https://www.instagram.com/easyCare.ai"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#1AB89E] hover:text-[#060E1A] transition-all"
              >
                <InstagramIcon size={16} />
              </a> */}
              <a
                href="https://www.youtube.com/@eazyCareAi"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#1AB89E] hover:text-[#060E1A] transition-all"
              >
                <YoutubeIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/eazycareai"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#1AB89E] hover:text-[#060E1A] transition-all"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://www.github.com/eazyCareAi"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#1AB89E] hover:text-[#060E1A] transition-all"
              >
                <GithubIcon size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[0.82rem] font-bold tracking-wider uppercase text-white/50 mb-4">
              Platform
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/#how-it-works" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                AI Health Assistant
              </Link>
              <Link href="/#how-it-works" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Online Consultations
              </Link>
              <Link href="/#how-it-works" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Mental Wellness
              </Link>
              <Link href="/#how-it-works" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Health Records
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[0.82rem] font-bold tracking-wider uppercase text-white/50 mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                About Us
              </Link>
              <Link href="/for-doctors-and-clinics" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                For Doctors & Clinics
              </Link>
              <Link href="/for-wearables" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Wearables
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Blog
              </Link>
              {/* <Link href="#" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Careers
              </Link>
              <Link href="#" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Press
              </Link> */}
            </div>
          </div>
          <div>
            <h4 className="text-[0.82rem] font-bold tracking-wider uppercase text-white/50 mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Security
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[0.82rem] font-bold tracking-wider uppercase text-white/50 mb-4">
              Important Links
            </h4>
            <div className="flex flex-col gap-2">
              <a href="/whitepaper" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Whitepaper
              </a>
              <Link href="/brand-guidelines" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Brand Guidelines
              </Link>
              <Link href="/clinic-roi-calculator" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Clinic ROI Calculator
              </Link>
              <Link href="/doctor-efficiency-calculator" className="text-sm text-white/60 hover:text-[#1AB89E] transition-colors">
                Doctor Efficiency Calculator
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[0.8rem] text-white/50">
            &copy; {new Date().getFullYear()} eazyCare.ai | All rights reserved. AI Care. Human Touch.
          </p>
          <p className="text-[0.8rem] text-white/40">
            eazyCare.ai | Launching Soon
          </p>
        </div>
      </div>
    </footer>
  );
}
