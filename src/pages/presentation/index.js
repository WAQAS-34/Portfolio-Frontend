import ContactForm from "@/Component/ContactForm/ContactForm"
import Header from "@/Component/Header/Header"
import PresentationHeroSection from "@/Component/PresentationHeroSection/PresentationHeroSection"
import PresentationSlider from "@/Component/PresentationSlider/PresentationSlider"
import PresesentationService from "@/Component/PresesentationService/PresesentationService"
import Achievement from "@/Component/Achievement/Achievement"
import Pricing from "@/Component/Pricing/Pricing"
import SEOHead from "@/Component/SEO/SEOHead"
import { seoData } from "@/utils/seoData"

const Presentation = () => {
    return (
        <>
            <SEOHead
                title={seoData.presentation.title}
                description={seoData.presentation.description}
                keywords={seoData.presentation.keywords}
                canonicalUrl={seoData.presentation.canonicalUrl}
                structuredData={seoData.presentation.structuredData}
                ogTitle={seoData.presentation.title}
                ogDescription={seoData.presentation.description}
                ogImage="https://devpixelsolutions.com/images/og-presentation.jpg"
            />

            <Header />
            <PresentationHeroSection />
            <PresentationSlider />
            <PresesentationService />
            <Achievement />
            <Pricing />
            <ContactForm />
        </>
    )
}

export default Presentation