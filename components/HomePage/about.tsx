import Image from "next/image";
import Link from "next/link";
import "@/styles/animations.css";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-white z-0">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
        <Image
          src="/background1.png"
          alt="Background pattern"
          fill
          className="object-cover md:object-fill mix-blend-multiply floating-bg"
          quality={100}
          priority
        />
      </div>

      {/* Content Grid */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* First Section */}
          <div className="relative h-[300px] md:h-[500px] w-full z-0">
            <Image
              src="/main2.jpg"
              alt="Florystyka"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight font-family-nunito text-gray-800">
              FLORYSTYKA
              <br />
              <span className="text-emerald-900">WARSZAWA</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-family-nunito">
              Tworzymy wyjątkowe dekoracje kwiatowe na każdą okazję.
              Specjalizujemy się w kompleksowej oprawie ślubów, przyjęć i
              eventów firmowych. Działamy na terenie całej Warszawy i okolic,
              dostarczając piękno tam, gdzie go potrzebujesz.
            </p>
            <Link
              href="/wedding"
              className="inline-block bg-linear-to-r uppercase from-emerald-900 to-emerald-950 font-family-nunito text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:from-emerald-800 hover:to-emerald-900"
            >
              Oferta
            </Link>
          </div>

          {/* Second Section */}
          <div className="relative h-[300px] md:h-[500px] w-full md:order-2 z-0">
            <Image
              src="/main1.jpg"
              alt="Pracownia"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg md:order-1">
            <h2 className="text-3xl font-bold tracking-tight font-family-nunito text-gray-800">
              PRACOWNIA
              <br />
              <span className="text-emerald-900">FLORYSTYCZNA</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg font-family-nunito">
              To przestrzeń kreatywna, w której powstają unikalne projekty na
              indywidualne zamówienie. Skupiamy się na tworzeniu dedykowanych
              dekoracji dla naszych klientów. Każda kompozycja jest
              przygotowywana specjalnie dla Ciebie.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-linear-to-r uppercase from-emerald-900 to-emerald-950 font-family-nunito text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:from-emerald-800 hover:to-emerald-900"
            >
              kontakt
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
