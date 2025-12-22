import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import React from 'react'
import powerPoint from "@/db/powerPoint.json"

const PowerPointPresentation = () => {
    return (
        <>
            <SEOHead
                title={seoData.powerPoint.title}
                description={seoData.powerPoint.description}
                keywords={seoData.powerPoint.keywords}
                canonicalUrl={seoData.powerPoint.canonicalUrl}
                structuredData={seoData.powerPoint.structuredData}
                ogTitle={seoData.powerPoint.title}
                ogDescription={seoData.powerPoint.description}
                ogImage="https://devpixelsolutions.com/images/og-powerpoint.jpg"
            />

            <Header />
            <PresentationDesign data={powerPoint} type={"PowerPoint"} />
            <ContactForm />
        </>
    )
}

export default PowerPointPresentation