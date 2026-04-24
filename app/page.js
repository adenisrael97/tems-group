import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import Portfolio from "@/components/Portfolio";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import NextProjectSection from "@/components/NextProjectSection"; 

export default function HomePage() {
  return (
    <main>  
      <HeroSection/>
      <StatsSection/>
      <ServicesSection/>
      <Portfolio/>  
      <WhyChooseUsSection/>
      <TestimonialSection/>
      <NextProjectSection/>


    </main>
  );
}