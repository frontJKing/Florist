"use client";

import { useState } from "react";
import Menu from "@/components/menu/menu";
import Footer from "@/components/footer/footer";
import HeaderContact from "@/components/contact/HeaderContact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    eventDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 6)); // Lipiec 2026

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Formularz:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        eventDate: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  // Zajęte terminy (przykładowe)
  const occupiedDates = [
    "2026-07-12",
    "2026-07-20",
    "2026-08-03",
    "2026-08-15",
    "2026-08-22",
    "2026-09-10",
    "2026-09-25",
    "2026-10-05",
    "2026-10-18",
    "2026-11-02",
    "2026-11-20",
    "2026-12-15",
  ];

  const isDateOccupied = (dateStr: string) => occupiedDates.includes(dateStr);

  // Generowanie dni w miesiącu
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Puste pola na początek
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }

    // Dni miesiąca
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(
        currentMonth.getMonth() + 1
      ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const occupied = isDateOccupied(dateStr);

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => {
            if (!occupied) {
              setFormData({ ...formData, eventDate: dateStr });
            }
          }}
          disabled={occupied}
          className={`p-2 text-sm rounded font-medium transition ${
            occupied
              ? "bg-red-200 text-red-700 cursor-not-allowed opacity-60"
              : formData.eventDate === dateStr
              ? "bg-emerald-700 text-white shadow-md"
              : "bg-white border border-emerald-200 hover:bg-emerald-100"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div>
      <Menu />
      <main className="bg-white text-gray-900 min-h-screen pt-28 md:pt-32">
        {/* Hero — full bleed od góry */}
        <HeaderContact />

        {/* Contact Info Cards */}
        <section className="container mx-auto max-w-6xl px-6 pt-12 md:py-12">
          <h2 className="text-2xl font-semibold mb-6">Informacje kontaktowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 bg-emerald-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Telefon</h3>
              <a
                href="tel:+48691100145"
                className="text-emerald-700 hover:underline font-medium"
              >
                +48 691 100 145
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Pon–Pt: 9:00–18:00 | Sob: 10:00–16:00
              </p>
            </article>

            <article className="p-6 bg-emerald-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:kwiartikaski@gmail.com"
                className="text-emerald-700 hover:underline font-medium"
              >
                danielenflores@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Odpowiadamy w ciągu 24 godzin
              </p>
            </article>
          </div>
        </section>

        {/* Calendar & Form */}
        <section id="form" className="container mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Dostępne terminy</h2>
              <div className="bg-emerald-50 p-6 rounded-2xl shadow-sm sticky top-36">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-emerald-100 rounded transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <h3 className="font-semibold text-gray-800">
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-emerald-100 rounded transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((d) => (
                    <div
                      key={d}
                      className="text-center text-xs font-semibold text-gray-600"
                    >
                      {d}
                    </div>
                  ))}
                  {renderCalendar()}
                </div>

                <div className="text-sm space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-700 rounded"></div>
                    <span>Wybrany termin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-200 rounded"></div>
                    <span>Zajęty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-emerald-200 rounded"></div>
                    <span>Dostępny</span>
                  </div>
                </div>

                {formData.eventDate && (
                  <div className="mt-4 p-3 bg-white rounded border border-emerald-200">
                    <p className="text-xs text-gray-600">Wybrana data:</p>
                    <p className="font-semibold text-emerald-700">
                      {new Date(formData.eventDate).toLocaleDateString(
                        "pl-PL",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">
                Formularz kontaktowy
              </h2>
              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-700 p-6 rounded-2xl text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg">Wiadomość wysłana!</h3>
                  <p className="mt-2">
                    Dziękujemy za kontakt. Odpowiemy najszybciej jak się da.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      placeholder="Jan Kowalski"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        placeholder="jan@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Typ usługi *
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white"
                      >
                        <option value="">Wybierz usługę</option>
                        <option value="bukiet">Bukiet</option>
                        <option value="dekoracja-slubna">
                          Dekoracja ślubna
                        </option>
                        <option value="dekoracja-eventu">
                          Dekoracja eventu
                        </option>
                        <option value="inne">Inne</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Planowana data *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-700 resize-none"
                      placeholder="Opisz swoją wizję, budżet i wszelkie szczegóły..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-semibold transition"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Map / Location */}
        <section className="container mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Gdzie działamy</h2>
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850387!2d20.921112622643887!3d52.23306532087702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1709668632543!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl text-center shadow-lg max-w-md pointer-events-auto">
                <h3 className="font-semibold text-lg text-gray-900">
                  Obszar działania
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Realizujemy dekoracje na terenie Warszawy oraz w promieniu do
                  50 km od stolicy.
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  * Dalsze dojazdy wyceniane są indywidualnie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto max-w-6xl px-6 pb-6 md:py-16">
          <div className="bg-linear-to-r from-emerald-800 to-emerald-700 p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Nie czekaj, zarezerwuj termin!
              </h3>
              <p className="mt-2 text-white/90">
                Wyślij formularz lub zadzwoń — zajmiemy się tym osobiście.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#form"
                className="inline-block bg-white text-emerald-900 px-6 py-3 rounded-md font-semibold shadow-sm hover:shadow-md transition"
              >
                Napisz do nas
              </a>
              <a
                href="tel:+48691100145"
                className="inline-block border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition"
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
