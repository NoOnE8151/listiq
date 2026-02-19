import Header from "@/components/landing page/header";
import HeroSection from "@/components/landing page/hero";
import PreviewSection from "@/components/landing page/preview";
import FeaturedSection from "@/components/landing page/features";
import CallToAction from "@/components/landing page/cta";
import Footer from "@/components/landing page/footer";

export default function Home() {
  return (
   <>
   <header className="md:px-15 md:px-3 px-5 py-5">
   <Header/>
   </header>
   <main className="md:px-15 md:px-3 px-5 py-5 flex flex-col gap-32">
    <HeroSection />
    <PreviewSection />
    <FeaturedSection />
    <CallToAction />
   </main>
   <footer>
    <Footer />
   </footer>
   </>
  );
}
