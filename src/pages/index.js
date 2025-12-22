import ContactForm from "@/Component/ContactForm/ContactForm";
import Experties from "@/Component/Experties/Experties";
import Header from "@/Component/Header/Header.jsx";
import HeroSection from "@/Component/HeroSection/HeroSection";
import Portfolio from "@/Component/Portfolio/Portfolio";
import Services from "@/Component/Services/Services";
import ServicesSlides from "@/Component/ServicesSlides/ServicesSlides";
import SEOHead from "@/Component/SEO/SEOHead";
import { seoData } from "@/utils/seoData";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <SEOHead
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalUrl={seoData.home.canonicalUrl}
        structuredData={seoData.home.structuredData}
        ogTitle={seoData.home.title}
        ogDescription={seoData.home.description}
        ogImage="https://devpixelsolutions.com/images/og-home.jpg"
      />

      <Header />
      <Element name="home">
        <HeroSection />
      </Element>

      <ServicesSlides />

      <Element name="services" id="services">
        <Services />
      </Element>
      <Element name="portfolio" id="portfolio">
        <Portfolio />
      </Element>
      <Element name="Expertise" id="Expertise">
        <Experties />
      </Element>
      <Element name="contact" id="contact">
        <ContactForm />
      </Element>
    </>
  );
}
