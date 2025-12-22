import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import WebsiteDevelopmet from '@/Component/WebsiteDevelopmet/WebsiteDevelopmet'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import React from 'react'

const WebsitePortfolio = () => {
    return (
        <>
            <SEOHead
                title={seoData.websiteDevelopment.title}
                description={seoData.websiteDevelopment.description}
                keywords={seoData.websiteDevelopment.keywords}
                canonicalUrl={seoData.websiteDevelopment.canonicalUrl}
                structuredData={seoData.websiteDevelopment.structuredData}
                ogTitle={seoData.websiteDevelopment.title}
                ogDescription={seoData.websiteDevelopment.description}
                ogImage="https://devpixelsolutions.com/images/og-website-development.jpg"
            />

            <Header />
            <WebsiteDevelopmet />
            <ContactForm/>
        </>
    )
}

export default WebsitePortfolio