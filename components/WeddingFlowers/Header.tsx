import "@/styles/animations.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section
      className="
        relative w-full font-family-nunito overflow-hidden
        -mt-24 md:-mt-32 pt-24 md:pt-32
        min-h-[560px] h-[70svh] md:h-[760px]
      "
    >
      <Image
        src="/I_M-152.jpg"
        alt="Florystyka ślubna — Daniel En Flores"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/35 to-black/65" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-5 sm:px-6 pt-10 md:pt-12 max-w-5xl mx-auto">
          {/* H1 */}
          <h1
            className="
              mt-6 md:mt-10
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              font-family-overlock font-bold
              tracking-[0.18em] sm:tracking-widest
              drop-shadow-lg
              mb-4 md:mb-6
              leading-tight
            "
          >
            Florystyka ślubna z klasą
          </h1>

          {/* podtytuł */}
          <p className="mt-3 text-sm sm:text-base md:text-xl text-white/90 leading-relaxed max-w-md md:max-w-xl mx-auto">
            Kwiaty w najlepszym wydaniu
          </p>

          {/* CTA */}
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                w-full max-w-[320px] sm:w-[220px]
                px-6 py-3 rounded-full
                bg-emerald-950 text-white font-semibold
                hover:bg-emerald-900
                transition-colors duration-300
              "
            >
              Umów konsultację
            </Link>

            <a
              href="#packages"
              className="
                inline-flex items-center justify-center
                w-full max-w-[320px] sm:w-[220px]
                px-6 py-3 rounded-full
                border border-white/40 text-white/90 font-semibold
                hover:border-white/70 hover:text-white
                transition-colors duration-300
              "
            >
              Zobacz pakiety
            </a>
          </div>

          {/* trust line */}
          <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm md:text-base text-white/60 tracking-wide">
            <span className="hidden sm:block w-6 h-px bg-white/30" />
            <span>Projekt</span>
            <span className="opacity-60">•</span>
            <span>Dostawa</span>
            <span className="opacity-60">•</span>
            <span>Montaż</span>
            <span className="hidden sm:block w-6 h-px bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
