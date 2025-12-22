import React from 'react'
import PresentationDesignTabs from '../PresentationDesignTabs/PresentationDesignTabs'
import { PresentationType } from '@/constant'

// Investor Pitch Decks Portfolio Data
const investorPitchDecksData = [
    {
        id: 1,
        webImage: "/images/investor/Slide1.jpeg",
        fullImage: "/images/investor/Slide1.jpeg",
        likeCount: 85,
        views: 245,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/investor/Slide2.jpeg",
        fullImage: "/images/investor/Slide2.jpeg",
        likeCount: 92,
        views: 312,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/investor/Slide3.jpeg",
        fullImage: "/images/investor/Slide3.jpeg",
        likeCount: 67,
        views: 189,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/investor/Slide4.jpeg",
        fullImage: "/images/investor/Slide4.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/investor/Slide5.jpeg",
        fullImage: "/images/investor/Slide5.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/investor/Slide6.jpeg",
        fullImage: "/images/investor/Slide6.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/investor/Slide7.jpeg",
        fullImage: "/images/investor/Slide7.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/investor/Slide8.jpeg",
        fullImage: "/images/investor/Slide8.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/investor/Slide9.jpeg",
        fullImage: "/images/investor/Slide9.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/investor/Slide10.jpeg",
        fullImage: "/images/investor/Slide10.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/investor/Slide11.jpeg",
        fullImage: "/images/investor/Slide11.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/investor/Slide12.jpeg",
        fullImage: "/images/investor/Slide12.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/investor/Slide13.jpeg",
        fullImage: "/images/investor/Slide13.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/investor/Slide14.jpeg",
        fullImage: "/images/investor/Slide14.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/investor/Slide15.jpeg",
        fullImage: "/images/investor/Slide15.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/investor/Slide16.jpeg",
        fullImage: "/images/investor/Slide16.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    }
];
// Branded Master Templates Portfolio Data

const brandedMasterTemplatesData = [
    {
        id: 1,
        webImage: "/images/brand-master-template/Slide1.jpeg",
        fullImage: "/images/brand-master-template/Slide1.jpeg",
        likeCount: 85,
        views: 245,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/brand-master-template/Slide2.jpeg",
        fullImage: "/images/brand-master-template/Slide2.jpeg",
        likeCount: 92,
        views: 312,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/brand-master-template/Slide3.jpeg",
        fullImage: "/images/brand-master-template/Slide3.jpeg",
        likeCount: 67,
        views: 189,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/brand-master-template/Slide4.jpeg",
        fullImage: "/images/brand-master-template/Slide4.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/brand-master-template/Slide5.jpeg",
        fullImage: "/images/brand-master-template/Slide5.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/brand-master-template/Slide6.jpeg",
        fullImage: "/images/brand-master-template/Slide6.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/brand-master-template/Slide7.jpeg",
        fullImage: "/images/brand-master-template/Slide7.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/brand-master-template/Slide8.jpeg",
        fullImage: "/images/brand-master-template/Slide8.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/brand-master-template/Slide9.jpeg",
        fullImage: "/images/brand-master-template/Slide9.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/brand-master-template/Slide10.jpeg",
        fullImage: "/images/brand-master-template/Slide10.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/brand-master-template/Slide11.jpeg",
        fullImage: "/images/brand-master-template/Slide11.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/brand-master-template/Slide12.jpeg",
        fullImage: "/images/brand-master-template/Slide12.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/brand-master-template/Slide13.jpeg",
        fullImage: "/images/brand-master-template/Slide13.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/brand-master-template/Slide14.jpeg",
        fullImage: "/images/brand-master-template/Slide14.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/brand-master-template/Slide15.jpeg",
        fullImage: "/images/brand-master-template/Slide15.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/brand-master-template/Slide16.jpeg",
        fullImage: "/images/brand-master-template/Slide16.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    }
];

// Business Presentations Portfolio Data
const businessPresentationsData = [
    {
        id: 1,
        webImage: "/images/business-presentation/Slide1.jpeg",
        fullImage: "/images/business-presentation/Slide1.jpeg",
        likeCount: 85,
        views: 245,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/business-presentation/Slide2.jpeg",
        fullImage: "/images/business-presentation/Slide2.jpeg",
        likeCount: 92,
        views: 312,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/business-presentation/Slide3.jpeg",
        fullImage: "/images/business-presentation/Slide3.jpeg",
        likeCount: 67,
        views: 189,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/business-presentation/Slide4.jpeg",
        fullImage: "/images/business-presentation/Slide4.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/business-presentation/Slide5.jpeg",
        fullImage: "/images/business-presentation/Slide5.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/business-presentation/Slide6.jpeg",
        fullImage: "/images/business-presentation/Slide6.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/business-presentation/Slide7.jpeg",
        fullImage: "/images/business-presentation/Slide7.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/business-presentation/Slide8.jpeg",
        fullImage: "/images/business-presentation/Slide8.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/business-presentation/Slide9.jpeg",
        fullImage: "/images/business-presentation/Slide9.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/business-presentation/Slide10.jpeg",
        fullImage: "/images/business-presentation/Slide10.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/business-presentation/Slide11.jpeg",
        fullImage: "/images/business-presentation/Slide11.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/business-presentation/Slide12.jpeg",
        fullImage: "/images/business-presentation/Slide12.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/business-presentation/Slide13.jpeg",
        fullImage: "/images/business-presentation/Slide13.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/business-presentation/Slide14.jpeg",
        fullImage: "/images/business-presentation/Slide14.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/business-presentation/Slide15.jpeg",
        fullImage: "/images/business-presentation/Slide15.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/business-presentation/Slide16.jpeg",
        fullImage: "/images/business-presentation/Slide16.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
        {
        id: 16,
        webImage: "/images/business-presentation/Slide17.jpeg",
        fullImage: "/images/business-presentation/Slide17.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
        {
        id: 16,
        webImage: "/images/business-presentation/Slide18.jpeg",
        fullImage: "/images/business-presentation/Slide18.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    }
];

// Infographic Presentations Portfolio Data
const infographicPresentationsData = [

    {
        id: 26,
        webImage: "/images/info-graphic/Slide1.jpeg",
        fullImage: "/images/info-graphic/Slide1.jpeg",
        likeCount: 19,
        views: 48,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 27,
        webImage: "/images/info-graphic/Slide2.jpeg",
        fullImage: "/images/info-graphic/Slide2.jpeg",
        likeCount: 6,
        views: 20,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 28,
        webImage: "/images/info-graphic/Slide3.jpeg",
        fullImage: "/images/info-graphic/Slide3.jpeg",
        likeCount: 18,
        views: 35,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 29,
        webImage: "/images/info-graphic/Slide4.jpeg",
        fullImage: "/images/info-graphic/Slide4.jpeg",
        likeCount: 43,
        views: 98,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
        {
        id: 29,
        webImage: "/images/info-graphic/Slide5.jpeg",
        fullImage: "/images/info-graphic/Slide5.jpeg",
        likeCount: 43,
        views: 98,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
        {
        id: 29,
        webImage: "/images/info-graphic/Slide6.jpeg",
        fullImage: "/images/info-graphic/Slide6.jpeg",
        likeCount: 43,
        views: 98,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    }
];
const mobapp = [
    {
        id: 1,
        webImage: "/images/mob-app/Slide1.jpeg",
        fullImage: "/images/mob-app/Slide1.jpeg",
        likeCount: 85,
        views: 245,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/mob-app/Slide2.jpeg",
        fullImage: "/images/mob-app/Slide2.jpeg",
        likeCount: 92,
        views: 312,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/mob-app/Slide3.jpeg",
        fullImage: "/images/mob-app/Slide3.jpeg",
        likeCount: 67,
        views: 189,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/mob-app/Slide4.jpeg",
        fullImage: "/images/mob-app/Slide4.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/mob-app/Slide5.jpeg",
        fullImage: "/images/mob-app/Slide5.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/mob-app/Slide6.jpeg",
        fullImage: "/images/mob-app/Slide6.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/mob-app/Slide7.jpeg",
        fullImage: "/images/mob-app/Slide7.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/mob-app/Slide8.jpeg",
        fullImage: "/images/mob-app/Slide8.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/mob-app/Slide9.jpeg",
        fullImage: "/images/mob-app/Slide9.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/mob-app/Slide10.jpeg",
        fullImage: "/images/mob-app/Slide10.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/mob-app/Slide11.jpeg",
        fullImage: "/images/mob-app/Slide11.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/mob-app/Slide12.jpeg",
        fullImage: "/images/mob-app/Slide12.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/mob-app/Slide13.jpeg",
        fullImage: "/images/mob-app/Slide13.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/mob-app/Slide14.jpeg",
        fullImage: "/images/mob-app/Slide14.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/mob-app/Slide15.jpeg",
        fullImage: "/images/mob-app/Slide15.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/mob-app/Slide16.jpeg",
        fullImage: "/images/mob-app/Slide16.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
        {
        id: 16,
        webImage: "/images/mob-app/Slide17.jpeg",
        fullImage: "/images/mob-app/Slide17.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
        {
        id: 16,
        webImage: "/images/mob-app/Slide18.jpeg",
        fullImage: "/images/mob-app/Slide18.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
        {
        id: 16,
        webImage: "/images/mob-app/Slide19.jpeg",
        fullImage: "/images/mob-app/Slide19.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
      {
        id: 16,
        webImage: "/images/mob-app/Slide20.jpeg",
        fullImage: "/images/mob-app/Slide20.jpeg",
        likeCount: 73,
        views: 201,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    }
];
const PresentationPortfolio = ({ type }) => {
    const headings = {
        [PresentationType.InvestorPitchDecks]: {
            text: "Let's create your next Investor",
            highlight: "Pitch Deck Design"
        },
        [PresentationType.BrandedMasterTemplates]: {
            text: "Let's create your next",
            highlight: "Master Template Design"
        },
        [PresentationType.BusinessPresentations]: {
            text: "Let's create your next",
            highlight: "Business Presentation Design"
        },
        [PresentationType.InfographicPresentation]: {
            text: "Let's create your next",
            highlight: "Infographic Presentation Design"
        },
        [PresentationType.MobileApp]: {
            text: <>Let's create your next
                <span className="red-color"> mobile app  faster, smarter, </span>
                and ready to launch.
            </>,

        }
    }

    // Portfolio data organized by presentation type using separate array variables
    const portfolioData = {
        [PresentationType.InvestorPitchDecks]: investorPitchDecksData,
        [PresentationType.BrandedMasterTemplates]: brandedMasterTemplatesData,
        [PresentationType.BusinessPresentations]: businessPresentationsData,
        [PresentationType.InfographicPresentation]: infographicPresentationsData,
        [PresentationType.MobileApp]: mobapp,

    }

    const currentHeading = headings[type] || headings[PresentationType.InvestorPitchDecks]
    const currentPortfolio = portfolioData[type] || portfolioData[PresentationType.InvestorPitchDecks]

    console.log("portfolio[type]", currentPortfolio);


    return (
        <div className='container presentation-portfolio'>
            <h1 className="  heading3 rubik-font">
                {currentHeading.text}
                <span className="red-color"> {currentHeading.highlight}</span>
            </h1>

            <PresentationDesignTabs data={currentPortfolio} type={type} />
        </div>
    )
}

export default PresentationPortfolio