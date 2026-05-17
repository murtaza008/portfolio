import React from "react";

export default function AboutDetails() {
  const details = [
    {
      icon: "ri-map-pin-line",
      label: "Location",
      value: "Lahore, Pakistan",
    },
    {
      icon: "ri-briefcase-line",
      label: "Experience",
      value: "2+ Years",
    },
    {
      icon: "ri-code-s-slash-line",
      label: "Specialty",
      value: "MERN Stack",
    },
    {
      icon: "ri-graduation-cap-line",
      label: "Degree",
      value: "BSSE",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2.5 mb-6">
      {details.map((detail, index) => (
        <div
          key={index}
          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-stone-100 hover:-translate-y-0.5 transition-transform duration-300"
        >
          <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#c8a97e]/15 text-[#a07850]">
            <i className={`${detail.icon} text-xs`}></i>
          </div>
          <div>
            <div className="text-stone-400 text-[10px]">{detail.label}</div>
            <div className="text-[#1a1a1a] text-xs font-semibold">
              {detail.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
