import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import WebsiteDevelopmet from '@/Component/WebsiteDevelopmet/WebsiteDevelopmet'
import React from 'react'
import powerPoint from "@/db/powerPoint.json"
const Presentation = () => {
    return (
        <>
            <Header />
            <PresentationDesign data={powerPoint} type={"PowerPoint"} />
            <ContactForm />
        </>
    )
}

export default Presentation