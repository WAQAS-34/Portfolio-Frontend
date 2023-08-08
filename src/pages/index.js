import ContactForm from '@/Component/ContactForm/ContactForm'
import Experties from '@/Component/Experties/Experties'
import Header from '@/Component/Header/Header.jsx'
import HeroSection from '@/Component/HeroSection/HeroSection'
import Portfolio from '@/Component/Portfolio/Portfolio'
import Services from '@/Component/Services/Services'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import SkillsTab from '@/Component/SkillsTab/SkillsTab'
import { Element } from 'react-scroll'


export default function Home() {
  return (
    <>

      <Header />
      <Element name='home'>
        <HeroSection />
      </Element>

      <ServicesSlides />

      <Element name="services">
        <Services />
      </Element>
      <Element name="portfolio">

        <Portfolio />
      </Element>
      <Element name="Expertise">

        <Experties />
      </Element>
      <Element name="contact">

        <ContactForm />
      </Element>



    </>
  )
}
