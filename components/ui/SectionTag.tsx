export default function SectionTag({ children, className = "", rightDash = false }: { children: React.ReactNode, className?: string, rightDash?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-4 text-[11px] font-bold tracking-[0.2em] uppercase text-[#a07850] ${className}`}>
      <div className="w-6 h-0.5 bg-[#a07850] rounded shrink-0"></div>
      <span>{children}</span>
      {rightDash && <div className="w-6 h-0.5 bg-[#a07850] rounded shrink-0"></div>}
    </div>
  );
}
