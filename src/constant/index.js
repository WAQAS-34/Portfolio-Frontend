export const PresentationType = {
    InvestorPitchDecks: "InvestorPitchDecks",
    BrandedMasterTemplates: "BrandedMasterTemplates",
    BusinessPresentations: "BusinessPresentations",
    InfographicPresentation: "InfographicPresentation",
    MobileApp: "MobileApp",

}

export const PresentationContent = {
    [PresentationType.InvestorPitchDecks]: {
        title: "Investor Pitch",
        titleHighlight: "Decks Design",
        description: "Launch your vision fast! I'll design a polished, investor-ready pitch deck in just 8 hours—complete with strategic visuals, strong storytelling, and a professional layout that grabs attention and drives investor confidence."
    },
    [PresentationType.BrandedMasterTemplates]: {
        title: "Branded",
        titleHighlight: "Master",
        titleSuffix: "Templates",
        description: "Custom-designed master templates that capture your brand identity with precision, offering full flexibility to edit and adapt. Built with consistent styling, clean layouts, and fully editable elements—enabling your team to create polished presentations quickly and confidently."
    },
    [PresentationType.BusinessPresentations]: {
        title: "Business",
        titleHighlight: "Presentations",
        description: "Drive results fast! Get impactful, ready-to-deliver business presentations designed to impress, build trust, and help you close deals with confidence."
    },
    [PresentationType.InfographicPresentation]: {
        title: "Infographic",
        titleHighlight: "Presentations",
        description: "Turn complex data into stunning visuals! Get custom infographic presentations that simplify information, engage your audience, and impress with clear, visually compelling slides."
    },
    [PresentationType.MobileApp]: {
        title: <> Building High-Performance Mobile Apps for 
         <span className="red-color"> IOS </span>
         and </>,
        titleHighlight: "Android",
        description: "From design to deployment we turn your ready designs into powerful, production-ready mobile apps. Using React Native, we create fast, stable, and scalable cross-platform apps backed by API integration and Node.js backend development for seamless, secure performance. From clean code to App Store and Play Store launch, I make sure your app is ready to perform and built to grow."
    }
}