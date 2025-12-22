import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import React from 'react'
import googleSlides from "@/db/googleSlides.json"

const GoogleSlidesPresentation = () => {
    return (
        <>
            <SEOHead
                title={seoData.presentationDesign.title}
                description={seoData.presentationDesign.description}
                keywords={seoData.presentationDesign.keywords}
                canonicalUrl={seoData.presentationDesign.canonicalUrl}
                structuredData={seoData.presentationDesign.structuredData}
                ogTitle={seoData.presentationDesign.title}
                ogDescription={seoData.presentationDesign.description}
                ogImage="https://devpixelsolutions.com/images/og-google-slides.jpg"
            />

            <Header />
            <PresentationDesign data={googleSlides} type={"GoogleSlide"} />
            <ContactForm />
        </>
    )
}

export default GoogleSlidesPresentation