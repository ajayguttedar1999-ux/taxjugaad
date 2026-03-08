import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <main className="pb-[72px] md:pb-0">
      <Hero />
      <TrustBar />
      <PainPoints />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </main>
  );
};

export default Index;
