import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import PartnerSlider from "@/components/Partner";
import Services from "@/components/Services";
import SpaceThemeHero from "@/components/SpaceThemeHero";

export default function Home() {
  return (
   <>
    <Appbar/>
    <Hero/>
    <Info/>
    <SpaceThemeHero/>
    <Services/>
    <PartnerSlider/>
    <Footer/>
   </>
  );
}
