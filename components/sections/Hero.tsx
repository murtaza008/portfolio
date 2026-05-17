import HeroDesktopContent from "./hero/HeroDesktopContent";
import HeroMobileContent from "./hero/HeroMobileContent";
import HeroVisuals from "./hero/HeroVisuals";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("https://readdy.ai/api/search-image?query=modern%20software%20development%20workspace%20with%20multiple%20monitors%20showing%20code%2C%20clean%20bright%20office%20environment%2C%20programming%20setup%20with%20laptop%20and%20desktop%20computers%2C%20light%20colored%20modern%20tech%20workspace%2C%20bright%20natural%20lighting%2C%20minimalist%20coding%20environment%2C%20professional%20developer%20desk%20setup&width=1920&height=1080&seq=hero-bg-coding&orientation=landscape")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center">
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full pt-20 pb-12">
          <HeroDesktopContent />
          <div className="flex justify-end items-center pr-6 transition-all duration-600 delay-200 opacity-100 translate-y-0">
            <HeroVisuals />
          </div>
        </div>
        
        <HeroMobileContent />
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-stone-400/50 animate-float-up"></div>
        <span className="text-stone-400 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
