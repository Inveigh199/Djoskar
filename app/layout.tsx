import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DJ OZI | Ekskluzywna Oprawa Muzyczna",
  description: "Wymarzony dzień, niezapomniana noc. Ekskluzywna oprawa muzyczna i wizualna wesel.",
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
      </body>
    </html>
  );
}
