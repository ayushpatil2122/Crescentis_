import CoreValues from "@/components/CoreValues";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import OurProcess from "@/components/OurProcess";
import PartnerSlider from "@/components/Partner";
import TeamSection from "@/components/TeamMember";
import WhyCrescentis from "@/components/WhyCrescentis";

export default function Home() {
  return (
   <>
    <Hero/>
    <Info/>
    <WhyCrescentis/>
    <OurProcess/>
    <TeamSection/>
    <CoreValues/>
    <PartnerSlider/>
   </>
  );
}
