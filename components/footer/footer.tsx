import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-emerald-950">
      {/* ===================== */}
      {/* MOBILE FOOTER (md-)   */}
      {/* ===================== */}
      <div className="md:hidden">
        <div className="px-4 pt-10 pb-6">
          {/* logo + opis */}
          <Link
            href="/"
            aria-label="Daniel En Flores — Strona główna"
            className="flex items-center justify-center gap-4"
          >
            <div className="w-16 h-16 rounded-full border border-white bg-white overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Daniel En Flores Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <div className="text-white font-family-overlock font-bold tracking-wide text-lg">
                Daniel En Flores
              </div>
              <div className="text-white/70 font-family-nunito text-sm">
                Florystyka & Dekoracje
              </div>
            </div>
          </Link>

          <p className="mt-5 text-white/80 text-sm leading-relaxed text-center font-family-nunito">
            Profesjonalne studio florystyczne oferujące wyjątkowe kompozycje
            kwiatowe na każdą okazję.
          </p>

          {/* szybki kontakt (przyciski) */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            <a
              href="tel:+48691100145"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 text-white px-4 py-3 font-semibold font-family-nunito active:scale-[0.99] transition"
            >
              {/* phone icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Zadzwoń: +48 691 100 145
            </a>

            <a
              href="mailto:danielenflores@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 text-white px-4 py-3 font-semibold font-family-nunito active:scale-[0.99] transition"
            >
              {/* mail icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M4 7.2L12 12.2L20 7.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              Napisz email
            </a>
          </div>

          {/* social */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100071604113962&rdid=JLnkrQtfTrqPDBi8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E2Rry3aC6%2F#"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-white text-emerald-900 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/danielenflores/"
              className="w-11 h-11 rounded-full group bg-white text-emerald-900  flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2z" />
                <path
                  d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"
                  className="fill-white transition-colors group-hover:fill-emerald-950"
                />
                <circle
                  cx="17"
                  cy="7"
                  r="1.2"
                  className="fill-white transition-colors group-hover:fill-emerald-950"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* dolny pasek mobile */}
        <div className="border-t border-white/15 px-4 py-5 text-center text-xs text-white/60 font-family-nunito">
          <p>© 2025 Daniel En Flores. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Polityka prywatności
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* DESKTOP FOOTER (md+)  */}
      {/* ===================== */}
      <div className="hidden md:block">
        {/* Main Footer */}
        <div className="container mx-auto flex justify-center items-center px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
            {/* Logo Section */}
            <Link
              href="/"
              aria-label="Daniel En Flores — Strona główna"
              className=" group transition-transform duration-200 hover:scale-105"
            >
              <div className="space-y-4 justify-center items-center flex flex-col">
                <div className="w-40 h-40 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden hover:border-emerald-800 transition-colors">
                  <Image
                    src="/logo.jpg"
                    alt="Kwiatki Kaśki Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-100 max-w-xs text-center font-family-overlock tracking-wider">
                  Profesjonalne studio florystyczne oferujące wyjątkowe
                  kompozycje kwiatowe na każdą okazję.
                </p>
              </div>
            </Link>

            {/* Contact Info */}
            <div className="justify-start flex flex-col font-family-nunito">
              <h3 className="font-semibold text-gray-100 mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
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
                  danielenflores@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
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
                  +48 691 100 145
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="justify-start text-right items-center font-family-nunito flex flex-col">
              <h3 className="font-semibold text-gray-100 mb-4">Social Media</h3>
              <div className="flex gap-4 mb-6">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100071604113962&rdid=JLnkrQtfTrqPDBi8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E2Rry3aC6%2F#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-900 hover:bg-emerald-800 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/danielenflores/"
                  className="w-10 h-10 group rounded-full bg-white text-emerald-900  flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2z" />
                    <path
                      d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z"
                      className="fill-white transition-colors group-hover:fill-emerald-950"
                    />
                    <circle
                      cx="17"
                      cy="7"
                      r="1.2"
                      className="fill-white transition-colors group-hover:fill-emerald-950"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="justify-start text-right font-family-nunito flex flex-col">
              <h3 className="font-semibold text-gray-100 mb-4">Nawigacja</h3>
              <ul className="space-y-2 text-gray-200">
                <li>
                  <Link
                    href="/"
                    className="hover:text-emerald-800 transition-colors"
                  >
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-emerald-800 transition-colors"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-emerald-800 transition-colors"
                  >
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-emerald-800 transition-colors"
                  >
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-emerald-800 transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-center font-family-nunito md:justify-between items-center text-sm text-gray-300">
              <p>© 2025 Daniel En flores. Wszelkie prawa zastrzeżone.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="hover:text-emerald-800 transition-colors"
                >
                  Polityka prywatności
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-emerald-800 transition-colors"
                >
                  Regulamin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
