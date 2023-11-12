import ContactForm from '@/Component/ContactForm/ContactForm'
import Header from '@/Component/Header/Header'
import PresentationDesign from '@/Component/PresentationDesign/PresentationDesign'
import WebsiteDevelopmet from '@/Component/WebsiteDevelopmet/WebsiteDevelopmet'
import React from 'react'
import keynote from "@/db/keynote.json"

const Presentation = () => {
    return (
        <>
            <Header />
            <PresentationDesign data={keynote} type={"Keynote"} />
            <ContactForm />
        </>
    )
}

export default Presentation