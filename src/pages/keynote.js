import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import React from 'react'
import keynote from "@/db/keynote.json"

const KeynotePresentation = () => {
    return (
        <>
            <SEOHead
                title={seoData.keynote.title}
                description={seoData.keynote.description}
                keywords={seoData.keynote.keywords}
                canonicalUrl={seoData.keynote.canonicalUrl}
                structuredData={seoData.keynote.structuredData}
                ogTitle={seoData.keynote.title}
                ogDescription={seoData.keynote.description}
                ogImage="https://devpixelsolutions.com/images/og-keynote.jpg"
            />

            <Header />
            <PresentationDesign data={keynote} type={"Keynote"} />
            <ContactForm />
        </>
    )
}

export default KeynotePresentation