import { Navbar, Footer } from "@/components/layout";
import { Hero, Vision, Portfolio, Services, Playlists, Gallery, Testimonials, Contact } from "@/components/sections";
import { Marquee } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Vision />
      <Portfolio />
      <Services />
      <Playlists />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
