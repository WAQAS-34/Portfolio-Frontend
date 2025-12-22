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

const InvestorPitchDecks = () => {
    return (
        <>
            <SEOHead
                title={seoData.investorPitchDecks.title}
                description={seoData.investorPitchDecks.description}
                keywords={seoData.investorPitchDecks.keywords}
                canonicalUrl={seoData.investorPitchDecks.canonicalUrl}
                structuredData={seoData.investorPitchDecks.structuredData}
                ogTitle={seoData.investorPitchDecks.title}
                ogDescription={seoData.investorPitchDecks.description}
                ogImage="https://devpixelsolutions.com/images/og-investor-pitch-decks.jpg"
            />

            <Header />
            <PresentationTypeHero type={PresentationType.InvestorPitchDecks}/>
            <ServicesSlides/>
            <WhyChooseUs/>
            <PresentationPortfolio type={PresentationType.InvestorPitchDecks}/>
            <ContactForm />
        </>
    )
}

export default InvestorPitchDecks