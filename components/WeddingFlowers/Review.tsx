import "@/styles/animations.css";
import { useState } from "react";

export default function Review() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-emerald-950 text-white py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl uppercase font-extrabold text-center mb-12">
          Opinie klientów
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Daniel według mojej wiedzy obecnie wykonuje dwa zawody: jest florystą jak i cudotwórcą. Zdjęcia same w sobie oddają to jak pięknie udało mu się udekorować zarówno kościół, salę jak i również samochód. Ja natomiast chciałbym powiedzieć tutaj coś więcej – przed naszym weselem wydarzyło się tyle nieprzewidzianych rzeczy że w pewnym momencie sami nie dowierzaliśmy, że jest to w ogóle możliwe, nie mniej to właśnie Daniel ratował nas dosłownie z każdej możliwej wtopy która by się wydarzyła gdyby nie jego interwencja. Gdybym mógł ocenić współpracę to dałbym 1000/10. Każdemu kto zastanawiałbym się nad podjęciem współpracy otwarcie i z czystym sumieniem gorąco polecam i mocno zachęcam 🙂",
              author: "Jakub",
              date: "Czerwiec 2025",
            },
            {
              text: "Jesteśmy ogromnie wdzięczni za przepiękną dekorację naszego wesela! Spisał się Pan na medal – od samego początku idealnie zrozumiał naszą wizję i przeniósł ją w rzeczywistość jeszcze piękniej, niż mogliśmy sobie wymarzyć. Każdy detal był dopracowany, a całość stworzyła wyjątkową, magiczną atmosferę. Goście byli zachwyceni, a my czuliśmy się jak w bajce. Z całego serca polecamy!",
              author: "Weronika",
              date: "Sierpień 2025",
            },
            {
              text: "Chciałabym z całego serca podziękować za przepiękne dekoracje sali na nasze wesele! 🥰 Wszystko było wyważone, delikatne i niesamowicie stylowe – dokładnie tak, jak sobie wymarzyliśmy. Dziękuję za profesjonalizm, zaangażowanie i cudowną współpracę 🌸✨❤️",
              author: "Aleksandra",
              date: "Maj 2025",
            },
          ].map((review, idx) => {
            const isOpen = open === idx;
            const limit = 260;
            const needsTruncate = review.text.length > limit;
            const preview =
              needsTruncate && !isOpen
                ? review.text.slice(0, limit) + "…"
                : review.text;

            return (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md border-l-4 border-emerald-600 hover:shadow-lg transition flex flex-col"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-800 italic mb-4">
                  &ldquo;{preview}&rdquo;
                </p>

                {needsTruncate && (
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="self-start text-sm text-emerald-700 hover:underline mb-3"
                    aria-expanded={isOpen}
                  >
                    {isOpen ? "Pokaż mniej" : "Pokaż więcej"}
                  </button>
                )}

                <div className="mt-auto">
                  <p className="font-semibold text-emerald-900">
                    {review.author}
                  </p>
                  <p className="text-base text-gray-600">{review.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
