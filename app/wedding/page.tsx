"use client";

import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import ProcessLine from "@/components/WeddingFlowers/ProcessLine";
import Header from "@/components/WeddingFlowers/Header";
import WeddingPackages from "@/components/WeddingFlowers/PackagesGrid";
import WhyUs from "@/components/WeddingFlowers/WhyUs";
import GaleryWedding from "@/components/WeddingFlowers/GaleryWedding";
import Review from "@/components/WeddingFlowers/Review";
import FAQ from "@/components/WeddingFlowers/Faq";

export default function WeddingPage() {
  return (
    <div>
      <Menu />
      <main className="bg-gray-50 text-gray-900 min-h-screen pt-28 md:pt-32 font-nunito text-base md:text-lg">
        <Header />
        <ProcessLine />
        <WeddingPackages />
        <section id="uslugi" className="container mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl text-emerald-950 md:text-4xl font-extrabold uppercase  text-center mb-6">
            Usługi dodatkowe
          </h2>

          <div className="bg-gray-50 border border-emerald-800 rounded-xl p-6 space-y-4">
            <p className="font-semibold">Koordynacja dnia ślubu — od 3500 zł</p>
            <p className="font-semibold">
              Aparat Instax — 350 zł + koszt wkładów
            </p>
            <p className="font-semibold">Manekin na suknię — 150 zł</p>
          </div>
        </section>
        <WhyUs />
        <GaleryWedding />
        <Review />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
