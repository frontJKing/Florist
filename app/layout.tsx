import type { Metadata } from "next";
import "./global.css";
import { Overlock, Nunito } from "next/font/google";

const overlock = Overlock({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-overlock",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel En Flores - Profesjonalne studio florystyczne",
  description:
    "Florystyka ślubna, bukiety, dekoracje. Kwiaciarnia Warszawa Grochów.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${overlock.variable} ${nunito.variable}`}>
      <body className="font-nunito overflow-x-hidden">{children}</body>
    </html>
  );
}
