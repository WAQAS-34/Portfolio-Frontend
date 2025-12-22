import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationPortfolio from '@/Component/PresentationPortfolio/PresentationPortfolio'
import PresentationTypeHero from '@/Component/PresentationTypeHero/PresentationTypeHero'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import WhyChooseUs from '@/Component/WhyChooseUs/WhyChooseUs'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import { PresentationType } from '@/constant'
import React from 'react'

const BrandedMasterTemplates = () => {
    return (
        <>
            <SEOHead
                title={seoData.brandedMasterTemplates.title}
                description={seoData.brandedMasterTemplates.description}
                keywords={seoData.brandedMasterTemplates.keywords}
                canonicalUrl={seoData.brandedMasterTemplates.canonicalUrl}
                structuredData={seoData.brandedMasterTemplates.structuredData}
                ogTitle={seoData.brandedMasterTemplates.title}
                ogDescription={seoData.brandedMasterTemplates.description}
                ogImage="https://devpixelsolutions.com/images/og-branded-templates.jpg"
            />

            <Header />
            <PresentationTypeHero type={PresentationType.BrandedMasterTemplates}/>
            <ServicesSlides/>
            <WhyChooseUs/>
            <PresentationPortfolio type={PresentationType.BrandedMasterTemplates}/>
            <ContactForm />
        </>
    )
}

export default BrandedMasterTemplates