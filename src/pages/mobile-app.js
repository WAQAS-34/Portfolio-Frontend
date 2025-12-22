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

const MobileApp = () => {
    return (
        <>
            <SEOHead
                title={seoData.mobileApp.title}
                description={seoData.mobileApp.description}
                keywords={seoData.mobileApp.keywords}
                canonicalUrl={seoData.mobileApp.canonicalUrl}
                structuredData={seoData.mobileApp.structuredData}
                ogTitle={seoData.mobileApp.title}
                ogDescription={seoData.mobileApp.description}
                ogImage="https://devpixelsolutions.com/images/og-mobile-app.jpg"
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

export default MobileApp