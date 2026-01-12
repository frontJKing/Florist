import Footer from "@/components/footer/footer";
import About from "@/components/HomePage/about";
import Galeria from "@/components/HomePage/galeria";
import Kontakt from "@/components/HomePage/kontakt";
import ShortStory from "@/components/HomePage/shortStory";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative min-h-screen ">
        {/* Hero image as background - changed from fixed to absolute */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            aria-hidden="true"
          >
            <source src="/flowersVideo.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje elementu wideo.
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Menu />

          <main className="relative w-full">
            <div className="h-screen w-full flex items-center justify-center">
              {/* Changed from h-[80vh] to h-screen */}
              <div className="flex flex-col items-center justify-center text-center px-6 -mt-16">
                {/* Added negative margin top */}
                <div className="w-40 h-40 md:w-50 md:h-50 rounded-full border-2 mt-14 border-white/40 flex items-center justify-center text-white font-semibold text-lg md:text-xl backdrop-blur-sm">
                  <Image
                    src="/logo.jpg"
                    alt="En Flores Logo"
                    width={160}
                    height={160}
                    className="object-contain rounded-full"
                  />
                </div>
                <h1 className="mt-10 text-4xl md:text-7xl font-family-overlock font-bold lg:text-8xl tracking-widest text-white drop-shadow-lg mb-4">
                  Daniel En Flores
                </h1>
                <p className="text-sm md:text-2xl mt-4 text-white/90 tracking-wider font-semibold">
                  Profesjonalne studio florystyczne
                </p>
                <div className="mt-8 flex gap-6">
                  <Link
                    href="/wedding"
                    className="bg-white/95 hover:bg-white uppercase text-emerald-900 px-8 py-3 font-family-nunito rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Oferta
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block bg-linear-to-r from-emerald-900 to-emerald-950 font-family-nunito text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:from-emerald-800 hover:to-emerald-900"
                  >
                    KONTAKT
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative w-full">
        <ShortStory />
      </div>
      <div className="relative w-full">
        <About />
      </div>
      <div className="relative w-full">
        <Galeria />
      </div>
      <div className="relative w-full">
        <Kontakt />
      </div>
      <div className="relative w-full">
        <Footer />
      </div>
    </div>
  );
}
