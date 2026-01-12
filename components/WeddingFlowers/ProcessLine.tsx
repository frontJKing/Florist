import "@/styles/animations.css";

export default function ProcessLine() {
  return (
    <section className="container mx-auto max-w-6xl font-family-nunito px-6 py-20">
      <h2 className="text-3xl md:text-4xl text-emerald-950 font-extrabold uppercase  text-center">
        Proces współpracy
      </h2>

      <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
        Prowadzę Was krok po kroku, dbając o każdy detal i pełen spokój w dniu
        ślubu.
      </p>

      {/* === MOBILE: pionowy timeline (linia z lewej, cyfra na środku elementu) === */}
      <div className="mt-16 space-y-10 md:hidden relative">
        {/* linia */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-700" />

        {[
          {
            num: "1",
            title: "Konsultacja",
            desc: "Poznajemy Waszą wizję, styl uroczystości i budżet",
          },
          {
            num: "2",
            title: "Projekt florystyczny",
            desc: "Tworzę koncepcję, moodboard oraz wstępny kosztorys",
          },
          {
            num: "3",
            title: "Przygotowanie",
            desc: "Kompletowanie kwiatów i elementów dekoracyjnych",
          },
          {
            num: "4",
            title: "Dzień ślubu",
            desc: "Montaż, koordynacja i perfekcyjna realizacja",
          },
        ].map((step, idx) => (
          <div key={idx} className="relative flex items-stretch gap-6">
            {/* kolumna osi */}
            <div className="relative flex items-center justify-center w-12">
              <div className="relative z-10 w-12 h-12 bg-linear-to-br from-emerald-700 to-emerald-950 text-white rounded-full flex items-center justify-center font-extrabold">
                {step.num}
              </div>
            </div>

            {/* karta */}
            <div className="flex-1 bg-gray-50 border-2 border-emerald-700 rounded-xl p-6 transition-colors duration-300 hover:border-emerald-950">
              <h3 className="font-extrabold text-lg">{step.title}</h3>
              <p className="text-gray-800 mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/*
    DESKTOP: poziomy timeline
    - tutaj wyrównujemy wysokości: kolumny flex + karta flex-1
  */}
      <div className="hidden md:block mt-20 relative">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-emerald-700" />

        <div className="grid grid-cols-4 gap-8 items-stretch">
          {[
            {
              num: "1",
              title: "Konsultacja",
              desc: "Poznajemy Waszą wizję, styl uroczystości i budżet",
            },
            {
              num: "2",
              title: "Projekt florystyczny",
              desc: "Tworzę koncepcję, moodboard oraz wstępny kosztorys",
            },
            {
              num: "3",
              title: "Przygotowanie",
              desc: "Kompletowanie kwiatów i elementów dekoracyjnych",
            },
            {
              num: "4",
              title: "Dzień ślubu",
              desc: "Montaż, koordynacja i perfekcyjna realizacja",
            },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center h-full">
              <div className="relative z-10">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-700 to-emerald-950 text-white rounded-full flex items-center justify-center font-extrabold">
                  {step.num}
                </div>
              </div>

              <div className="mt-6 w-full flex-1">
                <div className="h-full bg-gray-50 border-2 border-emerald-700 rounded-xl p-6 text-center transition-colors duration-300 hover:border-emerald-950 flex flex-col">
                  <h3 className="font-extrabold text-lg">{step.title}</h3>
                  <p className="text-gray-800 mt-2">{step.desc}</p>

                  {/* opcjonalnie: stabilizuje dół karty, gdy tekst różnej długości */}
                  <div className="mt-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
