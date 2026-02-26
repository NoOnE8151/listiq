import Header from "@/components/landing page/header";
import HeroSection from "@/components/landing page/hero";
import PreviewSection from "@/components/landing page/preview";
import FeaturedSection from "@/components/landing page/features";
import CallToAction from "@/components/landing page/cta";
import Footer from "@/components/landing page/footer";
import HowItWorksSection from "@/components/landing page/HowItWorks";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="md:px-15 px-5 py-5">
        <Header />
      </header>
      <main className="md:px-15 px-5 py-5 flex flex-col gap-32">
        <HeroSection />
        <PreviewSection />
        <FeaturedSection />
        <HowItWorksSection />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>

      <a href="#top" className="bg-element text-white p-5 fixed bottom-0 right-0 hover:bg-element-hover active:bg-element-active">
        <ArrowUp />
      </a>
    </>
  );
}
