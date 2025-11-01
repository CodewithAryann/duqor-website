import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
// import PortfolioGallery from './components/PortfolioGallery';
// import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import AboutPage from './components/Aboutus';
import DesignPhilosophy from './components/PhilosophySection';
import Process from './components/Process';
import PortfolioSection from './components/PortfolioSection';
import Introduction from './components/Intro';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Introduction />
      <AboutPage />      
      <ServicesSection />
      <DesignPhilosophy />
      <StatsSection />
      {/* <PortfolioGallery /> */}
      {/* <ProcessSection /> */}
      <Process />
      <PortfolioSection />
      <FAQ />
      <ContactSection />
    </div>
  );
}
