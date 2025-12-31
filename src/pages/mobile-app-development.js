import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationPortfolio from '@/Component/PresentationPortfolio/PresentationPortfolio'
import PresentationTypeHero from '@/Component/PresentationTypeHero/PresentationTypeHero'
import Statistics from '@/Component/Statistics/Statistics'
import WhyChooseUs from '@/Component/WhyChooseUs/WhyChooseUs'
import SEOHead from '@/Component/SEO/SEOHead'
import { seoData } from '@/utils/seoData'
import { PresentationType } from '@/constant'
import React from 'react'

const MobileDevelopment = () => {
    return (
        <>
            <SEOHead
                title={seoData.mobileDevelopment.title}
                description={seoData.mobileDevelopment.description}
                keywords={seoData.mobileDevelopment.keywords}
                canonicalUrl={seoData.mobileDevelopment.canonicalUrl}
                structuredData={seoData.mobileDevelopment.structuredData}
                ogTitle={seoData.mobileDevelopment.title}
                ogDescription={seoData.mobileDevelopment.description}
                ogImage="https://devpixelsolutions.com/images/og-mobile-development.jpg"
            />

            <Header />
            <PresentationTypeHero disbaleSlide type={PresentationType.MobileApp}/>
            
            <Statistics />
            <WhyChooseUs type={PresentationType.MobileApp}/>
            <PresentationPortfolio type={PresentationType.MobileApp}/>
            <ContactForm />
        </>
    )
}

export default MobileDevelopment