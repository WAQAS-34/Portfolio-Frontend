// import ContactForm from '@/Component/ContactForm/ContactForm'
// import Header from '@/Component/Header/Header'
// import MobileDevelopment from '@/Component/MobileDevelopment/MobileDevelopment'
// import React from 'react'

// const index = () => {
//     return (
//         <>
//             <Header />
//             <MobileDevelopment />
//             <ContactForm/>
//         </>
//     )
// }

// export default index
import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationPortfolio from '@/Component/PresentationPortfolio/PresentationPortfolio'
import PresentationTypeHero from '@/Component/PresentationTypeHero/PresentationTypeHero'
import ServicesSlides from '@/Component/ServicesSlides/ServicesSlides'
import Statistics from '@/Component/Statistics/Statistics'
import WhyChooseUs from '@/Component/WhyChooseUs/WhyChooseUs'
import { PresentationType } from '@/constant'
import React from 'react'

const InvestorPitchDecks = () => {
    return (
        <>
            <Header />
            <PresentationTypeHero  disbaleSlide type={PresentationType.MobileApp}/>
            
            <Statistics />
            <WhyChooseUs type={PresentationType.MobileApp}/>
            <PresentationPortfolio type={PresentationType.MobileApp}/>
            <ContactForm />

        </>

    )
}

export default InvestorPitchDecks