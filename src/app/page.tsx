import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
