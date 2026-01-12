import "@/styles/animations.css";

export default function FAQ() {
  return (
    <section className="container mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-3xl md:text-4xl uppercase  text-emerald-950 font-extrabold text-center mb-12">
        Najczęściej pytane
      </h2>

      <div className="space-y-4">
        {[
          {
            q: "Ile czasu wcześniej trzeba zamawiać?",
            a: "Idealne jest zarezerwowanie 3-6 miesięcy wcześniej. W sezonie możliwe też 2-3 miesiące wcześniej.",
          },
          {
            q: "Czy oferujecie próbne bukiety?",
            a: "Tak! W pakietach Elegancki i Premium zawarte są próbne bukiety. W pakiecie Delikatny możliwe za dodatkową opłatą.",
          },
          {
            q: "Czy możecie dostosować się do mojego budżetu?",
            a: "Oczywiście! Wszystkie pakiety są elastyczne — dostosowujemy się do waszych potrzeb i budżetu.",
          },
          {
            q: "Czy montujecie dekoracje w innym mieście?",
            a: "Tak, pracujemy w Warszawie i okolicach. Dla dalszych lokalizacji zapraszamy do kontaktu.",
          },
        ].map((item, idx) => (
          <details
            key={idx}
            className="p-4 bg-emerald-100 rounded-lg border border-emerald-100 group"
          >
            <summary className="font-semibold cursor-pointer text-gray-800 group-open:text-emerald-700">
              {item.q}
            </summary>
            <p className="mt-3 text-gray-800">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
