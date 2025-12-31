import React from 'react'
import PresentationDesignTabs from '../PresentationDesignTabs/PresentationDesignTabs'
import { PresentationType } from '@/constant'

// Helper function to generate random counts in range 200-800
const generateRandomCount = (min = 200, max = 800) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Investor Pitch Decks Portfolio Data
const investorPitchDecksData = [
    {
        id: 1,
        webImage: "/images/investor/Slide1.jpeg",
        fullImage: "/images/investor/Slide1.jpeg",
        likeCount: 342,
        views: 687,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/investor/Slide2.jpeg",
        fullImage: "/images/investor/Slide2.jpeg",
        likeCount: 298,
        views: 534,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/investor/Slide3.jpeg",
        fullImage: "/images/investor/Slide3.jpeg",
        likeCount: 456,
        views: 723,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/investor/Slide4.jpeg",
        fullImage: "/images/investor/Slide4.jpeg",
        likeCount: 267,
        views: 412,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/investor/Slide5.jpeg",
        fullImage: "/images/investor/Slide5.jpeg",
        likeCount: 389,
        views: 645,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/investor/Slide6.jpeg",
        fullImage: "/images/investor/Slide6.jpeg",
        likeCount: 523,
        views: 798,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/investor/Slide7.jpeg",
        fullImage: "/images/investor/Slide7.jpeg",
        likeCount: 234,
        views: 367,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/investor/Slide8.jpeg",
        fullImage: "/images/investor/Slide8.jpeg",
        likeCount: 445,
        views: 612,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/investor/Slide9.jpeg",
        fullImage: "/images/investor/Slide9.jpeg",
        likeCount: 312,
        views: 489,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/investor/Slide10.jpeg",
        fullImage: "/images/investor/Slide10.jpeg",
        likeCount: 567,
        views: 743,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/investor/Slide11.jpeg",
        fullImage: "/images/investor/Slide11.jpeg",
        likeCount: 289,
        views: 423,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/investor/Slide12.jpeg",
        fullImage: "/images/investor/Slide12.jpeg",
        likeCount: 398,
        views: 576,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/investor/Slide13.jpeg",
        fullImage: "/images/investor/Slide13.jpeg",
        likeCount: 467,
        views: 689,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/investor/Slide14.jpeg",
        fullImage: "/images/investor/Slide14.jpeg",
        likeCount: 256,
        views: 378,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/investor/Slide15.jpeg",
        fullImage: "/images/investor/Slide15.jpeg",
        likeCount: 534,
        views: 721,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/investor/Slide16.jpeg",
        fullImage: "/images/investor/Slide16.jpeg",
        likeCount: 345,
        views: 512,
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
        likeCount: 278,
        views: 456,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/brand-master-template/Slide2.jpeg",
        fullImage: "/images/brand-master-template/Slide2.jpeg",
        likeCount: 423,
        views: 678,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/brand-master-template/Slide3.jpeg",
        fullImage: "/images/brand-master-template/Slide3.jpeg",
        likeCount: 356,
        views: 589,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/brand-master-template/Slide4.jpeg",
        fullImage: "/images/brand-master-template/Slide4.jpeg",
        likeCount: 489,
        views: 734,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/brand-master-template/Slide5.jpeg",
        fullImage: "/images/brand-master-template/Slide5.jpeg",
        likeCount: 245,
        views: 398,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/brand-master-template/Slide6.jpeg",
        fullImage: "/images/brand-master-template/Slide6.jpeg",
        likeCount: 567,
        views: 789,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/brand-master-template/Slide7.jpeg",
        fullImage: "/images/brand-master-template/Slide7.jpeg",
        likeCount: 334,
        views: 523,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/brand-master-template/Slide8.jpeg",
        fullImage: "/images/brand-master-template/Slide8.jpeg",
        likeCount: 412,
        views: 656,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/brand-master-template/Slide9.jpeg",
        fullImage: "/images/brand-master-template/Slide9.jpeg",
        likeCount: 298,
        views: 467,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/brand-master-template/Slide10.jpeg",
        fullImage: "/images/brand-master-template/Slide10.jpeg",
        likeCount: 543,
        views: 712,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/brand-master-template/Slide11.jpeg",
        fullImage: "/images/brand-master-template/Slide11.jpeg",
        likeCount: 267,
        views: 434,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/brand-master-template/Slide12.jpeg",
        fullImage: "/images/brand-master-template/Slide12.jpeg",
        likeCount: 456,
        views: 623,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/brand-master-template/Slide13.jpeg",
        fullImage: "/images/brand-master-template/Slide13.jpeg",
        likeCount: 378,
        views: 567,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/brand-master-template/Slide14.jpeg",
        fullImage: "/images/brand-master-template/Slide14.jpeg",
        likeCount: 512,
        views: 745,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/brand-master-template/Slide15.jpeg",
        fullImage: "/images/brand-master-template/Slide15.jpeg",
        likeCount: 289,
        views: 445,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/brand-master-template/Slide16.jpeg",
        fullImage: "/images/brand-master-template/Slide16.jpeg",
        likeCount: 434,
        views: 678,
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
        likeCount: 367,
        views: 598,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/business-presentation/Slide2.jpeg",
        fullImage: "/images/business-presentation/Slide2.jpeg",
        likeCount: 445,
        views: 712,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/business-presentation/Slide3.jpeg",
        fullImage: "/images/business-presentation/Slide3.jpeg",
        likeCount: 289,
        views: 456,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/business-presentation/Slide4.jpeg",
        fullImage: "/images/business-presentation/Slide4.jpeg",
        likeCount: 523,
        views: 789,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/business-presentation/Slide5.jpeg",
        fullImage: "/images/business-presentation/Slide5.jpeg",
        likeCount: 234,
        views: 378,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/business-presentation/Slide6.jpeg",
        fullImage: "/images/business-presentation/Slide6.jpeg",
        likeCount: 456,
        views: 634,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/business-presentation/Slide7.jpeg",
        fullImage: "/images/business-presentation/Slide7.jpeg",
        likeCount: 378,
        views: 567,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/business-presentation/Slide8.jpeg",
        fullImage: "/images/business-presentation/Slide8.jpeg",
        likeCount: 512,
        views: 723,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/business-presentation/Slide9.jpeg",
        fullImage: "/images/business-presentation/Slide9.jpeg",
        likeCount: 298,
        views: 445,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/business-presentation/Slide10.jpeg",
        fullImage: "/images/business-presentation/Slide10.jpeg",
        likeCount: 434,
        views: 656,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/business-presentation/Slide11.jpeg",
        fullImage: "/images/business-presentation/Slide11.jpeg",
        likeCount: 356,
        views: 534,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/business-presentation/Slide12.jpeg",
        fullImage: "/images/business-presentation/Slide12.jpeg",
        likeCount: 489,
        views: 698,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/business-presentation/Slide13.jpeg",
        fullImage: "/images/business-presentation/Slide13.jpeg",
        likeCount: 267,
        views: 423,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/business-presentation/Slide14.jpeg",
        fullImage: "/images/business-presentation/Slide14.jpeg",
        likeCount: 543,
        views: 756,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/business-presentation/Slide15.jpeg",
        fullImage: "/images/business-presentation/Slide15.jpeg",
        likeCount: 312,
        views: 489,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/business-presentation/Slide16.jpeg",
        fullImage: "/images/business-presentation/Slide16.jpeg",
        likeCount: 423,
        views: 612,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 17,
        webImage: "/images/business-presentation/Slide17.jpeg",
        fullImage: "/images/business-presentation/Slide17.jpeg",
        likeCount: 389,
        views: 567,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 18,
        webImage: "/images/business-presentation/Slide18.jpeg",
        fullImage: "/images/business-presentation/Slide18.jpeg",
        likeCount: 456,
        views: 734,
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
        likeCount: 324,
        views: 567,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 27,
        webImage: "/images/info-graphic/Slide2.jpeg",
        fullImage: "/images/info-graphic/Slide2.jpeg",
        likeCount: 278,
        views: 445,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 28,
        webImage: "/images/info-graphic/Slide3.jpeg",
        fullImage: "/images/info-graphic/Slide3.jpeg",
        likeCount: 456,
        views: 689,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 29,
        webImage: "/images/info-graphic/Slide4.jpeg",
        fullImage: "/images/info-graphic/Slide4.jpeg",
        likeCount: 389,
        views: 612,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 30,
        webImage: "/images/info-graphic/Slide5.jpeg",
        fullImage: "/images/info-graphic/Slide5.jpeg",
        likeCount: 234,
        views: 378,
        type: "InfographicPresentation",
        selected: false,
        portfolioType: "Infographic Presentations"
    },
    {
        id: 31,
        webImage: "/images/info-graphic/Slide6.jpeg",
        fullImage: "/images/info-graphic/Slide6.jpeg",
        likeCount: 512,
        views: 734,
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
        likeCount: 367,
        views: 589,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 2,
        webImage: "/images/mob-app/Slide2.jpeg",
        fullImage: "/images/mob-app/Slide2.jpeg",
        likeCount: 423,
        views: 656,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 3,
        webImage: "/images/mob-app/Slide3.jpeg",
        fullImage: "/images/mob-app/Slide3.jpeg",
        likeCount: 298,
        views: 467,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 4,
        webImage: "/images/mob-app/Slide4.jpeg",
        fullImage: "/images/mob-app/Slide4.jpeg",
        likeCount: 512,
        views: 723,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 5,
        webImage: "/images/mob-app/Slide5.jpeg",
        fullImage: "/images/mob-app/Slide5.jpeg",
        likeCount: 245,
        views: 389,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 6,
        webImage: "/images/mob-app/Slide6.jpeg",
        fullImage: "/images/mob-app/Slide6.jpeg",
        likeCount: 456,
        views: 634,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 7,
        webImage: "/images/mob-app/Slide7.jpeg",
        fullImage: "/images/mob-app/Slide7.jpeg",
        likeCount: 334,
        views: 523,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 8,
        webImage: "/images/mob-app/Slide8.jpeg",
        fullImage: "/images/mob-app/Slide8.jpeg",
        likeCount: 489,
        views: 698,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 9,
        webImage: "/images/mob-app/Slide9.jpeg",
        fullImage: "/images/mob-app/Slide9.jpeg",
        likeCount: 278,
        views: 445,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 10,
        webImage: "/images/mob-app/Slide10.jpeg",
        fullImage: "/images/mob-app/Slide10.jpeg",
        likeCount: 543,
        views: 756,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 11,
        webImage: "/images/mob-app/Slide11.jpeg",
        fullImage: "/images/mob-app/Slide11.jpeg",
        likeCount: 312,
        views: 478,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 12,
        webImage: "/images/mob-app/Slide12.jpeg",
        fullImage: "/images/mob-app/Slide12.jpeg",
        likeCount: 434,
        views: 612,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 13,
        webImage: "/images/mob-app/Slide13.jpeg",
        fullImage: "/images/mob-app/Slide13.jpeg",
        likeCount: 356,
        views: 567,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 14,
        webImage: "/images/mob-app/Slide14.jpeg",
        fullImage: "/images/mob-app/Slide14.jpeg",
        likeCount: 467,
        views: 689,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 15,
        webImage: "/images/mob-app/Slide15.jpeg",
        fullImage: "/images/mob-app/Slide15.jpeg",
        likeCount: 289,
        views: 423,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 16,
        webImage: "/images/mob-app/Slide16.jpeg",
        fullImage: "/images/mob-app/Slide16.jpeg",
        likeCount: 398,
        views: 578,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 17,
        webImage: "/images/mob-app/Slide17.jpeg",
        fullImage: "/images/mob-app/Slide17.jpeg",
        likeCount: 523,
        views: 734,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 18,
        webImage: "/images/mob-app/Slide18.jpeg",
        fullImage: "/images/mob-app/Slide18.jpeg",
        likeCount: 267,
        views: 412,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 19,
        webImage: "/images/mob-app/Slide19.jpeg",
        fullImage: "/images/mob-app/Slide19.jpeg",
        likeCount: 445,
        views: 656,
        type: "InvestorPitch",
        selected: false,
        portfolioType: "Investor Pitch Decks"
    },
    {
        id: 20,
        webImage: "/images/mob-app/Slide20.jpeg",
        fullImage: "/images/mob-app/Slide20.jpeg",
        likeCount: 378,
        views: 589,
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