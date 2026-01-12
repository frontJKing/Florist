import Image from "next/image";

export default function ShortStory() {
  return (
    <div className="bg-emerald-950 font-family-nunito">
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-start md:items-center">
          {/* IMAGE */}
          <div className="md:col-span-2">
            <div
              className="
                relative rounded-2xl overflow-hidden shadow-2xl
                bg-emerald-900/30
                h-[60svh]
                sm:h-[520px]
                md:h-[750px]
              "
            >
              <Image
                src="/person.png"
                alt="Kaśka — właścicielka studia"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 40vw, 33vw"
                className="object-cover object-top md:object-center"
              />
            </div>
          </div>

          {/* TEXT */}
          <div
            className="
              md:col-span-3
              space-y-5 sm:space-y-6
              text-center md:text-left
              flex flex-col
              items-center md:items-start
            "
          >
            <div className="w-full">
              <span className="text-white/90 font-semibold text-xs sm:text-sm uppercase tracking-widest block">
                Moja opowieść
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-family-overlock font-extrabold leading-tight text-white">
                Wszystko zaczęło się od pasji do kwiatów
              </h2>
            </div>

            <p className="text-white/90 text-base md:text-md leading-relaxed max-w-prose">
              Moja przygoda z kwiatami zaczęła się już w dzieciństwie, gdy razem
              z babcią i rodzicami pielęgnowałem rodzinne ogrody. Pierwsze kroki
              we florystyce stawiałem jako nastolatek, tworząc dekoracje dla
              bliskich. Przełomowym momentem był ślub mojej siostry – to właśnie
              przygotowanie oprawy kwiatowej do tego wydarzenia stało się
              impulsem, by cztery lata temu rozpocząć profesjonalną edukację,
              ukończyć kursy i otworzyć własną działalność florystyczną.
            </p>

            <p className="text-white/90 text-base md:text-md leading-relaxed max-w-prose">
              Tak powstało Daniel En Flores – nazwa, która po hiszpańsku oznacza
              „Daniel w kwiatach” i doskonale oddaje to, jak bardzo jestem
              zanurzony w swojej pasji. Każdego roku poszerzam umiejętności na
              szkoleniach i poprzez realizację licznych zleceń, które pozwalają
              mi stale się rozwijać.
            </p>

            <p className="text-white/90 text-base md:text-md leading-relaxed max-w-prose">
              Od dwóch lat jestem także certyfikowanym wedding plannerem, dzięki
              czemu łączę florystykę z kompleksową organizacją ślubów. W
              najbliższych miesiącach planuję otworzyć pełną firmę eventową, aby
              jeszcze bardziej odciążyć Pary Młode i zapewnić im wsparcie na
              każdym etapie przygotowań.
            </p>

            <p className="text-white/90 text-base md:text-md leading-relaxed max-w-prose">
              Florystyka to nie tylko moja praca – to moja prawdziwa pasja,
              poparta wiedzą, doświadczeniem i profesjonalnymi kwalifikacjami.
              Chętnie stworzę wyjątkową oprawę także dla Was.
            </p>

            {/* STATS */}
            <div className="pt-3 sm:pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <div className="text-3xl font-extrabold text-white">4+</div>
                <p className="text-sm text-white/80">Lat doświadczenia</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                <div className="text-3xl font-extrabold text-white">150+</div>
                <p className="text-sm text-white/80">Zrealizowanych zleceń</p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center col-span-2 sm:col-span-1">
                <div className="text-3xl font-extrabold text-white">100%</div>
                <p className="text-sm text-white/80">Zadowolenia klientów</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
