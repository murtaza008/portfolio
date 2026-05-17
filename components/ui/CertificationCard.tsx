import { CertificationItemType } from "../../types";

export default function CertificationCard({ item }: { item: CertificationItemType }) {
  // Convert rgb(r, g, b) to rgba(r, g, b, 0.094) for the background
  const getBgColor = (color: string) => {
    return color.replace('rgb', 'rgba').replace(')', ', 0.094)');
  };

  return (
    <div
      className="group relative p-5 rounded-2xl bg-[#f8f5f0] border border-stone-100 hover:bg-white hover:border-stone-200 hover:-translate-y-2 transition-all duration-400 overflow-hidden opacity-0 translate-y-12"
      style={{ transitionDelay: `${item.delayMs}ms` }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 group-hover:h-1"
        style={{ backgroundColor: item.color }}
      ></div>
      <div
        className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{
          backgroundColor: getBgColor(item.color),
          color: item.color,
        }}
      >
        <i className={`${item.iconClass} text-xl`}></i>
      </div>
      <h3 className="font-['Syne'] font-bold text-[#1a1a1a] text-sm leading-tight mb-1.5">
        {item.title}
      </h3>
      <p className="text-stone-400 text-xs mb-1">{item.issuer}</p>
      <p className="text-stone-300 text-xs mb-4">{item.year}</p>
      <a
        href={item.verifyUrl}
        target="_blank"
        rel="nofollow noreferrer"
        className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 hover:gap-2.5 whitespace-nowrap"
        style={{ color: item.color }}
      >
        <i className="ri-verified-badge-line"></i> Verify
        <i className="ri-external-link-line text-[10px]"></i>
      </a>
    </div>
  );
}
