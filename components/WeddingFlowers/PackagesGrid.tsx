"use client";

import Link from "next/link";

const packages = [
  {
    id: "pakiet1",
    name: "PAKIET 1 — Kwiaty żywe",
    subtitle: "Luksusowe dekoracje z naturalnych kwiatów",
    features: {
      "Kompozycje na stoły": "od 900 zł / szt.",
      "Dekoracje świecami": "150 zł / komplet",
      "Stół prezydialny": "od 1500 zł",
      "Dekoracja za stołem (ścianka, kwiaty, LED, stelaże)": "od 2000 zł",
      "Dekoracja wejścia na salę": "od 1500 zł",
      "Serwety, obrusy i tekstylia": "wg wyceny wypożyczalni",
      "Stelaże i konstrukcje": "w cenie",
    } as Record<string, string>,
  },
  {
    id: "pakiet2",
    name: "PAKIET 2 — Kwiaty mieszane",
    subtitle: "Efekt glamour w niższym budżecie",
    features: {
      "Kompozycje na stoły": "od 700 zł / szt.",
      "Dekoracje świecami": "150 zł / komplet",
      "Stół prezydialny": "od 1500 zł",
      "Dekoracja za stołem (ścianka, kwiaty mieszane, LED, stelaże)":
        "od 2000 zł",
      "Dekoracja wejścia na salę": "od 1500 zł",
      "Serwety, obrusy i tekstylia": "wg wyceny wypożyczalni",
      "Stelaże i konstrukcje": "w cenie",
    } as Record<string, string>,
  },
  {
    id: "pakiet3",
    name: "PAKIET 3 — Kwiaty sztuczne",
    subtitle: "Piękne i trwałe kompozycje",
    features: {
      "Kompozycje na stoły": "od 500 zł / szt.",
      "Dekoracje świecami": "150 zł / komplet",
      "Stół prezydialny": "od 1500 zł",
      "Dekoracja za stołem (ścianka, kwiaty sztuczne, LED, stelaże)":
        "od 2000 zł",
      "Dekoracja wejścia na salę": "od 1500 zł",
      "Serwety, obrusy i tekstylia": "wg wyceny wypożyczalni",
      "Stelaże i konstrukcje": "w cenie",
    } as Record<string, string>,
  },
  {
    id: "pakiet4",
    name: "PAKIET 4 — Dekoracja kościoła",
    subtitle: "Elegancja i wyjątkowa oprawa zaślubin",
    features: {
      "Bukiety na ołtarz / stół urzędnika": "od 500 zł / szt.",
      "Kwiaty wzdłuż alejki": "od 350 zł / szt.",
      "Biały dywan": "800 zł",
      "Świece + lampiony": "150 zł / komplet",
      "Dekoracje ławek / krzeseł": "od 150 zł / szt.",
      "Krzesła dla Pary Młodej i świadków": "100 zł / komplet",
      "Dekoracja klęcznika": "50 zł / komplet",
      "Stelaże i konstrukcje": "w cenie",
    } as Record<string, string>,
  },
  {
    id: "pakiet5",
    name: "PAKIET 5 — Florystyka indywidualna",
    subtitle: "Dopasowana do stylu Pary Młodej",
    features: {
      "Bukiet ślubny": "od 350 zł",
      "Bukiet świadkowej": "od 200 zł",
      Korsarz: "50 zł",
      Butonierka: "25 zł",
      "Tablica (dekoracja samochodu)": "50 zł",
      "Klamki (dekoracja samochodu)": "od 15 zł",
      "Dekoracja maski": "350 zł",
      "Mocowania i stelaże": "w cenie",
    } as Record<string, string>,
  },
];

export default function WeddingPackages() {
  return (
    <section id="packages" className="py-20 bg-emerald-950">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl text-white font-extrabold uppercase text-center mb-8">
          Pakiety ślubne
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <div
              key={p.id}
              className="relative rounded-xl overflow-hidden border border-gray-100 bg-gray-50 hover:shadow-md transition-transform transform hover:scale-105 flex flex-col min-h-[420px]"
            >
              <div className="h-2 bg-linear-to-r from-emerald-700 to-emerald-400" />
              <div className="p-6 bg-gray-50 flex flex-col h-full">
                <div className="relative pb-2">
                  {i === 1 && (
                    <div className="absolute top-0 right-0 inline-block bg-emerald-300 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Polecany
                    </div>
                  )}
                  <div className="text-xs tracking-widest text-emerald-700 font-semibold">
                    {p.name.split(" — ")[0]}
                  </div>
                  <h3 className="text-2xl font-extrabold text-emerald-800 mt-1">
                    {p.name.split(" — ")[1] ?? p.name}
                  </h3>
                  <div className="mt-1 text-sm text-gray-600">{p.subtitle}</div>
                </div>

                <ul className="mt-6 space-y-2 text-gray-700 grow">
                  {Object.keys(p.features).map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-700 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172 15.293 5.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <div className="font-medium text-gray-800">{k}</div>
                        <div className="text-sm text-gray-600">
                          {(p.features as Record<string, string>)[k]}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={`/contact?pakiet=${encodeURIComponent(p.id)}`}
                    className="flex w-full text-center bg-linear-to-r from-emerald-800 to-emerald-700 hover:from-emerald-600 hover:to-emerald-500 text-white px-6 h-12 rounded-full font-semibold shadow-md transition items-center justify-center"
                  >
                    Poproś o ofertę
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
