import Link from "next/link";
import Logo from "../ui/Logo";
import SocialLinks from "../ui/SocialLinks";
import ContactInfoList from "../ui/ContactInfoList";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo variant="footer" className="flex items-center gap-2.5 mb-4" />

            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Crafting high-performance digital experiences with the MERN stack. Open
              to exciting opportunities.
            </p>

            <SocialLinks
              containerClassName="flex gap-3"
              linkClassName="cursor-pointer w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/40 hover:text-[#c8a97e] hover:border-[#c8a97e]/40 transition-all duration-300"
              iconClassName="text-base"
            />
          </div>
          <div>
            <h4 className="font-['Syne'] font-bold text-white text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["home", "about", "skills", "projects", "experience", "contact"].map((link) => (
                <li key={link}>
                  <Link href={`#${link}`} className="cursor-pointer text-white/35 text-sm hover:text-[#c8a97e] transition-colors duration-200 capitalize whitespace-nowrap">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-['Syne'] font-bold text-white text-sm mb-5">
              Contact
            </h4>
            <ContactInfoList variant="footer" />
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 Murtaza Mazhar. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">Built with React &amp; TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
