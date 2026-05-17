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
      url: "https://github.com/alexjohnson",
      icon: "ri-github-fill",
      label: "GitHub",
    },
    {
      url: "https://linkedin.com/in/alexjohnson",
      icon: "ri-linkedin-fill",
      label: "LinkedIn",
    },
    {
      url: "https://twitter.com/alexjohnson",
      icon: "ri-twitter-x-fill",
      label: "Twitter",
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
          {showLabels && <span className="text-xs font-medium">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
