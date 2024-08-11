import {HeroSection} from "@/app/components/sections/HeroSection";
import {RoadmapSection} from "@/app/components/sections/RoadmapSection";
import {FeaturesSection} from "@/app/components/sections/FeaturesSection";
import {BenefitsSection} from "@/app/components/sections/BenefitsSection";
import {ClientsSection} from "@/app/components/sections/ClientsSection";
import {CallToActionSection} from "@/app/components/sections/CallToActionSection";


export default function Home() {
  return (
      <>
          <HeroSection/>
          <RoadmapSection/>
          <FeaturesSection/>
          <BenefitsSection/>
          <ClientsSection/>
          <CallToActionSection/>
        </>
  );
}