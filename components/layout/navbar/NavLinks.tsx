import React from "react";
import Link from "next/link";

interface NavLinksProps {
  activeSection: string;
  isMobile?: boolean;
  onMobileLinkClick?: () => void;
}

export default function NavLinks({ activeSection, isMobile = false, onMobileLinkClick }: NavLinksProps) {
  const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];

  const getLinkClasses = (section: string) => {
    return activeSection === section
      ? "cursor-pointer relative px-3.5 py-2 text-[13px] font-medium transition-all duration-250 rounded-lg whitespace-nowrap text-[#a07850]"
      : "cursor-pointer relative px-3.5 py-2 text-[13px] font-medium transition-all duration-250 rounded-lg whitespace-nowrap text-stone-600 hover:text-[#1a1a1a]";
  };

  const getMobileLinkClasses = (section: string) => {
    return activeSection === section
      ? "cursor-pointer text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap text-[#a07850] bg-[#a07850]/8"
      : "cursor-pointer text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap text-stone-500 hover:text-[#1a1a1a] hover:bg-stone-50";
  };

  if (isMobile) {
    return (
      <>
        {sections.map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            onClick={onMobileLinkClick}
            className={getMobileLinkClasses(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </>
    );
  }

  return (
    <ul className="hidden lg:flex items-center gap-0.5">
      {sections.map((section) => (
        <li key={section}>
          <Link href={`#${section}`} className={getLinkClasses(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && (
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#a07850]"></span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
