import ContactForm from "@/Component/ContactForm/ContactForm"
import Header from "@/Component/Header/Header"
import PresentationHeroSection from "@/Component/PresentationHeroSection/PresentationHeroSection"
import PresentationSlider from "@/Component/PresentationSlider/PresentationSlider"
import PresesentationService from "@/Component/PresesentationService/PresesentationService"
import ServicesSlides from "@/Component/ServicesSlides/ServicesSlides"
import Achievement from "@/Component/Achievement/Achievement"
import Pricing from "@/Component/Pricing/Pricing"

const Presentation = () => {
    return (
        <>
            <Header />
            <PresentationHeroSection />
            <PresentationSlider />
            {/* <ServicesSlides /> */}
            <PresesentationService />
            <Achievement />
            <Pricing />
            {/* <PresentationDesign data={keynote} type={"Keynote"} /> */}
            <ContactForm />
        </>
    )
}

export default Presentation