import "@/styles/animations.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="relative w-full font-family-nunito -mt-20 md:-mt-32 pt-28 md:pt-32 min-h-[70vh] md:h-[760px] overflow-hidden z-0">
      <Image
        src="/I_M-152.jpg"
        alt="Florystyka ślubna — Daniel En Flores"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/60 z-10" />

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-6 pt-12 max-w-5xl mx-auto">
          {/* H1 */}
          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-family-overlock font-bold lg:text-7xl tracking-tight sm:tracking-widest text-white drop-shadow-lg mb-4 md:mb-6">
            Dekoracje imprez okolicznościowych
          </h1>

          {/* podtytuł */}
          <p className="mt-2 text-sm sm:text-base md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto">
            Kompleksowa oprawa florystyczna i dekoratorska
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 w-full px-4">
            {/* PRIMARY – butelkowa zieleń */}
            <Link
              href="/contact"
              aria-label="Umów konsultację"
              className="inline-flex items-center justify-center w-full sm:w-[220px] max-w-md px-6 py-3 rounded-full
                         bg-emerald-950 text-white font-semibold
                         hover:bg-emerald-900
                         transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Umów konsultację
            </Link>

            {/* SECONDARY */}
            <a
              href="#packages"
              aria-label="Zobacz pakiety"
              className="inline-flex items-center justify-center w-full sm:w-[220px] max-w-md px-6 py-3 rounded-full
                         border border-white/40 text-white/90 font-semibold
                         hover:border-white/70 hover:text-white
                         transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Zobacz pakiety
            </a>
          </div>

          {/* trust line */}
          <div className="mt-8 flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base text-white/60 tracking-wide gap-2 md:gap-4">
            <span className="w-6 h-px bg-white/30 hidden md:inline-block" />
            <span className="px-1 md:px-6">Urodziny</span>
            <span className="hidden md:inline">•</span>
            <span className="px-1 md:px-6">Rocznice</span>
            <span className="hidden md:inline">•</span>
            <span className="px-1 md:px-6">Komunie</span>
            <span className="hidden md:inline">•</span>
            <span className="px-1 md:px-6">Chrzty</span>
            <span className="hidden md:inline">•</span>
            <span className="px-1 md:px-6">Eventy Firmowe</span>
            <span className="w-6 h-px bg-white/30 hidden md:inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
}
