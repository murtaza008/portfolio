import React from "react";

interface ContactInfoListProps {
  variant?: "contact" | "footer";
}

export default function ContactInfoList({ variant = "contact" }: ContactInfoListProps) {
  const items = [
    {
      icon: "ri-mail-line",
      label: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com",
    },
    {
      icon: "ri-phone-line",
      label: "+1 (555) 234-5678",
      href: "tel:+1 (555) 234-5678",
    },
    {
      icon: "ri-map-pin-line",
      label: "San Francisco, CA",
      href: "#",
    },
  ];

  if (variant === "footer") {
    return (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-white/35 text-sm">
            <i className={`${item.icon} text-[#c8a97e] shrink-0`}></i>
            <span className="truncate">{item.label}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="cursor-pointer flex items-center gap-3 p-2.5 rounded-xl bg-white/6 hover:bg-white/12 transition-all duration-250 group"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#c8a97e]/20 text-[#c8a97e] shrink-0">
            <i className={`${item.icon} text-xs`}></i>
          </div>
          <span className="text-white/70 text-sm group-hover:text-white transition-colors">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
