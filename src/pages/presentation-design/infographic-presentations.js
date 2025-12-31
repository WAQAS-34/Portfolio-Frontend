import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationPortfolio from '@/Component/PresentationPortfolio/PresentationPortfolio'
import PresentationTypeHero from '@/Component/PresentationTypeHero/PresentationTypeHero'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import SliderExample from '@/Component/SliderExample'
import WhyChooseUs from '@/Component/WhyChooseUs/WhyChooseUs'
import { pageType, PresentationType } from '@/constant'
// import SliderExample from '@/Component/SliderExample'
import React from 'react'

const InvestorPitchDecks = () => {
    return (
        <>
            <Header />
            <PresentationTypeHero type={PresentationType.InfographicPresentation }/>
            <ServicesSlides/>

            <WhyChooseUs/>
            <PresentationPortfolio type={PresentationType.InfographicPresentation}/>
            <ContactForm type={pageType.Presentation}/>

        </>

    )
}

export default InvestorPitchDecks