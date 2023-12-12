import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import WebsiteDevelopmet from '@/Component/WebsiteDevelopmet/WebsiteDevelopmet'
import React from 'react'
import googleSlides from "@/db/googleSlides.json"
console.log("googleSlides",googleSlides);

const Presentation = () => {
    return (
        <>
            <Header />
            <PresentationDesign data={googleSlides} type={"GoogleSlide"} />
            <ContactForm />
        </>
    )
}

export default Presentation