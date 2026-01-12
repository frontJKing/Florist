"use client";

import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/events/Header";
import GaleryEvents from "@/components/events/GaleryEvents";

export default function Events() {
  return (
    <div>
      <Menu />
      <main className="bg-white text-gray-900 font-family-nunito min-h-screen pt-28 md:pt-32">
        <Header />
        <div className="relative w-full bg-white py-16 sm:py-20 z-0">
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
            <Image
              src="/background1.png"
              alt="Background pattern"
              fill
              className="object-cover md:object-fill mix-blend-multiply floating-bg"
              priority
            />
          </div>
          <section
            id="services"
            className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-12"
          >
            <h2 className="text-2xl md:text-4xl font-extrabold text-emerald-950 uppercase   text-center mb-4">
              Oferta specjalna
            </h2>
            <div className="bg-emerald-50 rounded-xl border border-emerald-950  shadow p-6">
              <ul className="space-y-3 text-gray-800">
                <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-3">
                  <div>
                    <div className="font-semibold">Ścianki balonowe</div>
                    <div className="text-sm text-gray-600">
                      Efektowne tło na zdjęcia i strefy eventowe
                    </div>
                  </div>
                  <div className="font-semibold mt-2 sm:mt-0">od 700 zł</div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-3">
                  <div>
                    <div className="font-semibold">
                      Dekoracje stołów balonami
                    </div>
                    <div className="text-sm text-gray-600">
                      Kolorowe lub eleganckie aranżacje na każdy stół
                    </div>
                  </div>
                  <div className="font-semibold mt-2 sm:mt-0">
                    od 150 zł / szt.
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-3">
                  <div>
                    <div className="font-semibold">Dekoracje kwiatowe</div>
                    <div className="text-sm text-gray-600">
                      Kompozycje stołowe i dekoracje przestrzeni
                    </div>
                  </div>
                  <div className="font-semibold mt-2 sm:mt-0">od 350 zł</div>
                </li>
                <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3">
                  <div>
                    <div className="font-semibold">Konstrukcje i stelaże</div>
                    <div className="text-sm text-gray-600">
                      Mocowania i stelaże w cenie montażu
                    </div>
                  </div>
                  <div className="font-semibold mt-2 sm:mt-0">w cenie</div>
                </li>
              </ul>

              <div className="mt-6 text-center sm:text-right">
                <Link
                  href="/contact"
                  aria-label="Poproś o ofertę - przejdź do kontaktu"
                  className="inline-block w-full sm:w-auto text-center bg-emerald-700 text-white px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-emerald-200 hover:scale-105 transition-transform"
                >
                  Poproś o ofertę
                </Link>
              </div>
            </div>
            <h2 className="text-2xl text-emerald-950 md:text-4xl font-extrabold uppercase  text-center mb-6 mt-6 md:mt-12">
              Pakiety i usługi dodatkowe
            </h2>

            <div className="bg-gray-50 border border-emerald-800 rounded-xl p-6 space-y-4">
              <p className="font-semibold">
                Koordynacja dekoracji (montaż/demontaż) — od 500 zł
              </p>
              <p className="font-semibold">
                Wypożyczalnia tekstyliów i zastawy — wg wyceny
              </p>
              <p className="font-semibold">Oświetlenie i LED — wg wyceny</p>
            </div>
          </section>
        </div>
        <GaleryEvents />

        <section className="container mx-auto max-w-6xl px-6 py-16">
          <div className="bg-linear-to-r from-emerald-600 to-emerald-950  p-8 rounded-2xl shadow-xl text-white text-center">
            <h3 className="text-2xl font-semibold">
              Masz pytania? Potrzebujesz wyceny?
            </h3>
            <p className="mt-3 text-white/90">
              Napisz lub zadzwoń — przygotujemy ofertę dostosowaną do Twojego
              wydarzenia.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/contact"
                aria-label="Skontaktuj się - przejdź do formularza kontaktowego"
                className="inline-block bg-white text-emerald-800 px-6 py-3 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-white/30 hover:scale-105 transition-transform"
              >
                Skontaktuj się
              </Link>
              <a
                href="tel:+48795705302"
                className="inline-block border border-white/30 text-white px-6 py-3 rounded-md"
              >
                Zadzwoń
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
