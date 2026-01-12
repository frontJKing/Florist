import "@/styles/animations.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GaleryWedding() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section className="">
      <div className="relative w-full bg-white md:py-10 z-0">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
          <Image
            src="/background1.png"
            alt="Background pattern"
            fill
            className="object-cover mix-blend-multiply floating-bg"
            priority
          />
        </div>
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl md:text-4xl uppercase text-emerald-950 font-extrabold text-center mb-12">
            Nasze realizacje
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/s1.jpg",
              "/s2.jpg",
              "/s3.jpg",
              "/s4.jpg",
              "/s5.jpg",
              "/s8.jpg",
            ].map((src, idx) => (
              <figure
                key={src}
                onClick={() => setModalImage(src)}
                className="relative overflow-hidden rounded-2xl shadow-lg border border-white/10 group h-64 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Realizacja ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <figcaption className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                  <div>
                    <div className="font-semibold">Realizacja #{idx + 1}</div>
                    <div className="text-base text-white/90">
                      Kompletna dekoracja
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      {/* Modal / Lightbox */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Powiększone zdjęcie"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-xl object-contain"
            />
            <button
              onClick={() => setModalImage(null)}
              className="mt-3 ml-auto block bg-emerald-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-emerald-900"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
