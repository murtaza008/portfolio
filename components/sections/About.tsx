import SectionTag from "../ui/SectionTag";
import AboutStats from "./about/AboutStats";
import AboutDetails from "./about/AboutDetails";

export default function About() {
  return (
    <section id="about" className="py-12 bg-[#f8f5f0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c8a97e]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative transition-all duration-400 opacity-0 -translate-x-12">
            <div className="absolute -top-4 -left-3 font-['Syne'] font-black text-[100px] leading-none text-stone-100 select-none z-0">
              01
            </div>
            <div className="relative z-10 rounded-3xl overflow-hidden group">
              <img
                alt="Developer life"
                className="w-full h-[320px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src="https://readdy.ai/api/search-image?query=funny%20humorous%20cartoon%20illustration%20of%20a%20programmer%20developer%20drowning%20in%20coffee%20cups%20surrounded%20by%20multiple%20glowing%20monitors%20showing%20code%20errors%2C%20messy%20desk%20with%20sticky%20notes%20everywhere%2C%20comic%20style%20vibrant%20colors%2C%20developer%20life%20humor%20meme%20art&width=600&height=560&seq=aboutfunny9&orientation=portrait"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/20 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="transition-all duration-400 delay-100 opacity-0 translate-x-12">
            <SectionTag>Get To Know Me</SectionTag>
            <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight mb-5">
              Passionate Developer
              <br />
              <span className="text-[#a07850]">&amp; Problem Solver</span>
            </h2>
            <p className="text-stone-500 leading-relaxed mb-4 text-[14px]">
              I&apos;m a dedicated full-stack developer with hands-on experience building scalable, performant web applications across the complete development lifecycle. I specialize in creating seamless user experiences backed by robust server-side architecture using the MERN stack and Next.js, with a strong focus on AI-integrated systems.
            </p>
            <p className="text-stone-500 leading-relaxed mb-6 text-[14px]">
              Currently seeking an Associate Software Engineer role where I can contribute to impactful products, grow alongside talented teams, and continue pushing the boundaries of what's possible with modern web technologies.
            </p>

            <AboutDetails />

            <a
              href="/assets/Murtaza%20Mazhar.pdf"
              download="Murtaza-Mazhar-Resume.pdf"
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#a07850] transition-all duration-300 hover:scale-105 whitespace-nowrap text-sm"
            >
              <i className="ri-download-line"></i> Download Resume
            </a>
          </div>
        </div>

        <AboutStats />

      </div>
    </section>
  );
}
