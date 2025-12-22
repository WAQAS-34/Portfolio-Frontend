import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationPortfolio from '@/Component/PresentationPortfolio/PresentationPortfolio'
import PresentationTypeHero from '@/Component/PresentationTypeHero/PresentationTypeHero'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import SliderExample from '@/Component/SliderExample'
import WhyChooseUs from '@/Component/WhyChooseUs/WhyChooseUs'
import { PresentationType } from '@/constant'
// import SliderExample from '@/Component/SliderExample'
import React from 'react'

const InvestorPitchDecks = () => {
    return (
        <>
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