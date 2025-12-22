import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import UiUx from '@/Component/UiUx/UiUx'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import React from 'react'

const UiUxDesign = () => {
    return (
        <>
            <SEOHead
                title={seoData.uiUx.title}
                description={seoData.uiUx.description}
                keywords={seoData.uiUx.keywords}
                canonicalUrl={seoData.uiUx.canonicalUrl}
                structuredData={seoData.uiUx.structuredData}
                ogTitle={seoData.uiUx.title}
                ogDescription={seoData.uiUx.description}
                ogImage="https://devpixelsolutions.com/images/og-ui-ux.jpg"
            />

            <Header />
            <UiUx />
            <ContactForm/>
        </>
    )
}

export default UiUxDesign