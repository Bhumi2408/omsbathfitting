import HeroSlider from "./components/HeroSlider";
import SignatureSeries from "./components/SignatureSeries";
import AboutSection from "./components/AboutSection";
import FeaturedCategory from "./components/FeaturedCategory";
import ShowerSeries from "./components/ShowerSeries";
import NeoSection from "./components/NeoSection";
import BathSetSection from "./components/BathSetSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CPBathFittingContent from "./components/CPBathFittingContent";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
    <HeroSlider/>
    <AboutSection/>
    <FeaturedCategory/>
    <ShowerSeries/>
    <NeoSection/>
    <BathSetSection/>
    <SignatureSeries/>
    <Testimonials/>
    <Contact/>
    <CPBathFittingContent/>
    <FAQSection/>
    </>
  );
}
