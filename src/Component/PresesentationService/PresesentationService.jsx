import Link from 'next/link';
import ServiceCard from '../ServiceCard/ServiceCard';

const PresesentationService = () => {
    const services = [
        {
            icon: '/images/service-icon/pitch-deck.svg',
            title: 'Investor Pitch Decks',
            description: 'Pitch decks that impress potential investors and help to fundraise for your business.',
            pathname: "/presentation-design/investor-pitch-decks.html"
        },
        {
            icon: '/images/service-icon/slides.svg',
            title: 'Branded Master Templates',
            pathname: "/presentation-design/branded-master-templates.html",
            description: 'Custom master template that reflect your brand identity and elevate your future presentations.'
        },
        {
            icon: '/images/service-icon/presentation.svg',
            title: 'Business Presentations',
            description: 'Transform your content into stunning business presentations that captivate your audience and clearly your brand.',
            pathname: "/presentation-design/business-presentations.html",
        },
        {
            icon: '/images/service-icon/pitches.svg',
            title: 'Infographic Presentation',
            description: 'Transform complex data into clear, engaging infographic presentations that inspire and inform.',
            pathname: "/presentation-design/infographic-presentations.html",

        }
    ];

    return (
        <>
            <div className="container presentation-service-section">
                <h1 className="heading3 rubik-font ">

                    Look what are the  <span className="red-color"> Presentation Services </span>
                    we've for you...
                </h1>

                <div className="why-choose-up">
                    {services.map((service, index) => (
                        <Link style={{textDecoration:"none"}} href={service.pathname}>
                            <ServiceCard
                                key={index}
                                index={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
};

export default PresesentationService;
