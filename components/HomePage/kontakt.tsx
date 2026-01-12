"use client";
import { useState } from "react";
import Image from "next/image";
import "@/styles/animations.css";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <section className="relative w-full bg-white py-20 z-0">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
        <Image
          src="/background1.png"
          alt="Background pattern"
          fill
          className="object-cover mix-blend-multiply floating-bg"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative font-family-nunito z-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-emerald-800 to-emerald-950 bg-clip-text text-transparent">
            KONTAKT
          </h2>
          <div className="hidden md:flex flex-col md:flex-row justify-center gap-8 text-gray-600">
            {/* Pierwszy box */}
            <div className=" bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-emerald-900 font-bold text-xl mb-2">
                  FLORYSTYKA WARSZAWA
                </span>
                <span className="text-gray-700 font-medium">
                  Profesjonalne usługi
                </span>
              </div>
            </div>

            {/* Drugi box */}
            <div className=" bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-emerald-900 font-bold text-xl mb-2">
                  PRACOWNIA FLORYSTYCZNA
                </span>
                <span className="text-gray-700 font-medium">
                  Kreatywne projekty
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-0 md:mt-12">
          {/* Image Section */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl z-0">
            <Image
              src="/s2.jpg"
              alt="Contact decoration"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Form Section */}
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-extrabold mb-8 font-family-nunito text-emerald-900 text-center">
              FORMULARZ KONTAKTOWY
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-md font-medium text-gray-700 ml-1">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  placeholder="Wprowadź swoje imię i nazwisko"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-800 transition-all duration-200 shadow-sm text-gray-800 placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-md font-medium text-gray-700 ml-1">
                  Adres e-mail
                </label>
                <input
                  type="email"
                  placeholder="Wprowadź swój adres e-mail"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-800 transition-all duration-200 shadow-sm text-gray-800 placeholder:text-gray-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-md font-medium text-gray-700 ml-1">
                  Temat wiadomości
                </label>
                <input
                  type="text"
                  placeholder="Wprowadź temat wiadomości"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-800 transition-all duration-200 shadow-sm text-gray-800 placeholder:text-gray-400"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-md font-medium text-gray-700 ml-1">
                  Treść wiadomości
                </label>
                <textarea
                  placeholder="Wprowadź treść swojej wiadomości..."
                  rows={6}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-800 transition-all duration-200 shadow-sm resize-none text-gray-800 placeholder:text-gray-400"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-emerald-900 to-emerald-950 text-white font-semibold py-4 rounded-xl hover:from-emerald-800 hover:to-emerald-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wider mt-4"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
