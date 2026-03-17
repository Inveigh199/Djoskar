import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// Zmieniona ścieżka na relatywną (wychodzimy z app i wchodzimy do components)
import CookieBanner from "../components/CookieBanner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: 'DJ Oskar | Ekskluzywna Oprawa Muzyczna Wesel i Eventów',
  description: "Wymarzony dzień, niezapomniana noc. Ekskluzywna oprawa muzyczna i wizualna wesPlanujesz wymarzone wesele? DJ Oskar to ekskluzywna oprawa muzyczna i wizualna, która zachwyci Twoich gości. Nowoczesne podejście, klasa i parkiet pełen energii.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${manrope.className} antialiased selection:bg-yellow-500/50 selection:text-white`}>
        <div className="grain-overlay" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}