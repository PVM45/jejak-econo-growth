import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Methodology } from "@/components/landing/Methodology";
import { Services } from "@/components/landing/Services";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { TargetMarket } from "@/components/landing/TargetMarket";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Methodology />
        <Services />
        <SuccessStories />
        <TargetMarket />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
