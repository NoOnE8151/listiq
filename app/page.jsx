import Header from "@/components/landing page/header";
import HeroSection from "@/components/landing page/hero";
import PreviewSection from "@/components/landing page/preview";

export default function Home() {
  return (
   <>
   <header className="md:px-15 md:px-3 px-5 py-5">
   <Header/>
   </header>
   <main className="md:px-15 md:px-3 px-5 py-5 h-screen">
    <HeroSection />
    <PreviewSection />
   </main>
   </>
  );
}
