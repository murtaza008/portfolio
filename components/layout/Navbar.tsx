"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import NavLinks from "./navbar/NavLinks";

const RESUME_URL = "/assets/Murtaza%20Mazhar.pdf";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold so that when section is near top, it becomes active
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once initially
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white/60 backdrop-blur-md py-5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo variant="dark" />

        <NavLinks activeSection={activeSection} />

        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_URL}
            download="Murtaza-Mazhar-Resume.pdf"
            className="cursor-pointer flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium rounded-lg border transition-all duration-300 whitespace-nowrap border-stone-300 text-stone-600 hover:border-[#a07850] hover:text-[#a07850]"
          >
            <i className="ri-download-line text-sm"></i> Resume
          </a>
          <Link
            href="#contact"
            className="cursor-pointer flex items-center gap-1.5 px-5 py-2 text-[13px] font-semibold text-white bg-[#1a1a1a] rounded-lg hover:bg-[#a07850] transition-all duration-300 whitespace-nowrap"
          >
            Hire Me <i className="ri-arrow-right-line text-sm"></i>
          </Link>
        </div>
        <button
          suppressHydrationWarning
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden cursor-pointer w-9 h-9 flex items-center justify-center text-stone-700"
        >
          <i className="text-xl ri-menu-3-line"></i>
        </button>
      </div>
      <div
        className={`lg:hidden transition-all duration-350 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-1">
          <NavLinks
            activeSection={activeSection}
            isMobile={true}
            onMobileLinkClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex gap-3 mt-3 pt-3 border-t border-stone-100">
            <a
              href={RESUME_URL}
              download="Murtaza-Mazhar-Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-stone-600 border border-stone-200 rounded-xl whitespace-nowrap"
            >
              <i className="ri-download-line"></i> Resume
            </a>

            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer flex-1 flex items-center justify-center py-2.5 text-sm font-semibold text-white bg-[#1a1a1a] rounded-xl whitespace-nowrap"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
