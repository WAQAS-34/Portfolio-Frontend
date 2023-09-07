import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import WebsiteDevelopmet from '@/Component/WebsiteDevelopmet/WebsiteDevelopmet'
import React from 'react'

const Presentation = () => {
    return (
        <>
            <Header />
            <PresentationDesign type={"Keynote"} />
            <ContactForm />
        </>
    )
}

export default Presentation