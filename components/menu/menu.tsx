"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // blokada scrolla tła + ESC
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed w-full z-50">
      {/* top bar (możesz schować na mobile) */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "opacity-0 h-0" : "opacity-100 h-10"
        } bg-emerald-950 backdrop-blur-sm text-[13px] overflow-hidden`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center h-10">
          <div className="flex items-center justify-center gap-6 text-white">
            <a
              href="tel:+48691100145"
              className="hidden sm:inline-flex items-center gap-2 font-family-nunito text-white hover:text-white/90 transition-colors"
              aria-label="Zadzwoń: +48 691 100 145"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>+48 691 100 145</span>
            </a>

            {/* DESKTOP – email */}
            <a
              href="mailto:danielenflores@gmail.com"
              className="hidden sm:inline-flex items-center gap-2 font-family-nunito text-white hover:text-white/90 transition-colors"
              aria-label="Napisz email: danielenflores@gmail.com"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M4 7.2L12 12.2L20 7.2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>

              <span>danielenflores@gmail.com</span>
            </a>

            {/* MOBILE – szybki telefon */}
            <a
              href="tel:+48691100145"
              className="sm:hidden inline-flex items-center gap-2 font-family-nunito text-white/90 hover:text-white transition-colors"
              aria-label="Zadzwoń: +48 691 100 145"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>+48 691 100 145</span>
            </a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md pt-0"
            : "bg-transparent pt-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div
            className={`${
              isScrolled
                ? "w-full bg-transparent"
                : "absolute left-1/2 -translate-x-1/2 w-[92%] md:max-w-6xl bg-white backdrop-blur-md border border-white/40 rounded-2xl shadow-lg"
            } p-3 md:p-4 transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              {/* logo */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  aria-label="Daniel En Flores — Strona główna"
                  className="inline-flex items-center gap-3 group transition-transform duration-200 hover:scale-105"
                >
                  <div className="leading-tight">
                    <span className="block text-emerald-900 font-extrabold font-family-overlock tracking-tight text-sm md:text-base lg:text-xl">
                      Daniel En Flores
                    </span>
                    <span className="block text-xs text-emerald-800 font-medium font-family-nunito -mt-0.5">
                      Florystyka & Dekoracje
                    </span>
                  </div>
                </Link>
              </div>

              {/* DESKTOP */}
              <nav className="hidden lg:flex items-center gap-6 uppercase text-sm font-extrabold font-family-nunito text-emerald-900">
                <Link
                  className="px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-900 after:transition-all hover:after:w-full"
                  href="/"
                >
                  Strona główna
                </Link>
                <Link
                  className="px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-900 after:transition-all hover:after:w-full"
                  href="/wedding"
                >
                  Florystyka ślubna
                </Link>
                <Link
                  className="px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-900 after:transition-all hover:after:w-full"
                  href="/events"
                >
                  Imprezy okolicznościowe
                </Link>
                <Link
                  className="px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-900 after:transition-all hover:after:w-full"
                  href="/contact"
                >
                  Kontakt
                </Link>
              </nav>

              {/* social icons (desktop/tablet) */}
              <div className="hidden md:flex items-center gap-3 text-gray-600">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100071604113962&rdid=JLnkrQtfTrqPDBi8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E2Rry3aC6%2F#"
                  className="w-8 h-8 rounded-full bg-emerald-900 hover:bg-white hover:text-emerald-900 flex items-center justify-center text-white transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  </svg>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/danielenflores/"
                  className="w-8 h-8 rounded-full group bg-emerald-900 text-white flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2z" />
                    <path
                      d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"
                      className="fill-emerald-900 transition-colors group-hover:fill-white"
                    />
                    <circle
                      cx="17"
                      cy="7"
                      r="1.2"
                      className="fill-emerald-900 transition-colors group-hover:fill-white"
                    />
                  </svg>
                </a>
              </div>

              {/* MOBILE: hamburger */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl
                           bg-emerald-900 text-white hover:bg-emerald-800 transition-colors"
                aria-label="Otwórz menu"
                aria-expanded={isOpen}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`lg:hidden fixed inset-0 z-60 transition ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-2xl
                      transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                      }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="p-5 flex items-center justify-between border-b border-emerald-100">
            <div className="leading-tight">
              <div className="text-emerald-900 font-extrabold font-family-overlock tracking-tight text-base">
                Daniel En Flores
              </div>
              <div className="text-xs text-emerald-800 font-medium font-family-nunito -mt-0.5">
                Florystyka & Dekoracje
              </div>
            </div>

            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-900 text-white hover:bg-emerald-800 transition-colors"
              aria-label="Zamknij menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="p-5 flex flex-col gap-2 font-family-nunito">
            <Link
              onClick={closeMenu}
              href="/"
              className="px-4 py-3 rounded-xl font-extrabold uppercase text-emerald-900 hover:bg-emerald-50"
            >
              Strona główna
            </Link>
            <Link
              onClick={closeMenu}
              href="/wedding"
              className="px-4 py-3 rounded-xl font-extrabold uppercase text-emerald-900 hover:bg-emerald-50"
            >
              Florystyka ślubna
            </Link>
            <Link
              onClick={closeMenu}
              href="/events"
              className="px-4 py-3 rounded-xl font-extrabold uppercase text-emerald-900 hover:bg-emerald-50"
            >
              Imprezy okolicznościowe
            </Link>
            <Link
              onClick={closeMenu}
              href="/contact"
              className="px-4 py-3 rounded-xl font-extrabold uppercase text-emerald-900 hover:bg-emerald-50"
            >
              Kontakt
            </Link>

            <div className="mt-5 pt-5 border-t border-emerald-100 text-sm text-emerald-900/80 space-y-2">
              <a
                className="block px-4 py-2 rounded-xl hover:bg-emerald-50"
                href="tel:+48691100145"
              >
                📞 +48 691 100 145
              </a>
              <a
                className="block px-4 py-2 rounded-xl hover:bg-emerald-50"
                href="mailto:danielenflores@gmail.com"
              >
                ✉️ danielenflores@gmail.com
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3 px-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100071604113962&rdid=JLnkrQtfTrqPDBi8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E2Rry3aC6%2F#"
                className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/danielenflores/"
                className="w-10 h-10 rounded-full group bg-emerald-900 text-white flex items-center justify-center hover:bg-emerald-800 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2z" />
                  <path
                    d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"
                    className="fill-emerald-900 transition-colors group-hover:fill-white"
                  />
                  <circle
                    cx="17"
                    cy="7"
                    r="1.2"
                    className="fill-emerald-900 transition-colors group-hover:fill-white"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
