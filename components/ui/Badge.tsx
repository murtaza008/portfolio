export type BadgeVariant = 'default' | 'skill' | 'experience' | 'solid';

export default function Badge({ children, variant = 'default', className = "" }: { children: React.ReactNode, variant?: BadgeVariant, className?: string }) {
  let baseClasses = "rounded-full inline-flex items-center ";
  
  if (variant === 'skill') {
    baseClasses += "px-2 py-0.5 text-xs font-medium bg-white border border-stone-200 text-stone-500 hover:border-stone-300 hover:text-stone-700 transition-all duration-200 cursor-default";
  } else if (variant === 'experience') {
    baseClasses += "px-3 py-1 text-xs bg-[#c8a97e]/12 text-[#a07850] border border-[#c8a97e]/25 font-medium";
  } else if (variant === 'solid') {
    baseClasses += "px-2.5 py-1 text-xs font-bold bg-white/90 text-[#a07850]";
  } else {
    baseClasses += "px-2 py-0.5 text-[10px] bg-stone-100 text-stone-500 border border-stone-200";
  }

  return (
    <span className={`${baseClasses} ${className}`}>
      {children}
    </span>
  );
}
