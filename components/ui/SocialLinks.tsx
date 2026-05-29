import React from "react";

interface SocialLinksProps {
  containerClassName?: string;
  linkClassName?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

export default function SocialLinks({
  containerClassName = "flex gap-2",
  linkClassName = "cursor-pointer w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-stone-200 text-stone-500 hover:text-[#a07850] hover:border-[#c8a97e] hover:scale-110 transition-all duration-300",
  iconClassName = "text-sm",
  showLabels = false,
}: SocialLinksProps) {
  const links = [
    {
      url: "https://github.com/murtaza008",
      icon: "ri-github-fill",
      label: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/murtaza-mazhar-04a02b19c",
      icon: "ri-linkedin-fill",
      label: "LinkedIn",
    },
  ];

  return (
    <div className={containerClassName}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="nofollow noreferrer"
          aria-label={link.label}
          className={linkClassName}
        >
          <i className={`${link.icon} ${iconClassName}`}></i>
          {showLabels && (
            <span className="text-xs font-medium">{link.label}</span>
          )}
        </a>
      ))}
    </div>
  );
}
