import { PresentationType } from "@/constant";
import ServiceCard from "../ServiceCard/ServiceCard";

const WhyChooseUs = ({ type }) => {
    const services = [
        {
            icon: "/images/service-icon/e-t-e.png",
            title: "End-to-End Care",
            description:
                "Unsure what you need? We guide you from idea to final deck  stress-free.",
        },
        {
            icon: "/images/service-icon/e-d.png",
            title: "Expert Designers",
            description:
                "Get presentations crafted by pros trained in specialized fields.",
        },
        {
            // icon: "/images/service-icon/delivery.png",
            icon: "/images/service-icon/del.svg",

            title: "Fast Delivery",
            description:
                "Need it now? Get your deck ready in as little as 4 hours.",
        },
        {
            icon: "/images/service-icon/c-e.png",
            title: "Content Enhancement",
            description:
                "We fine-tune your words to make your presentation sharp, engaging, and error free.",
        },
    ];
    const Mobservices = [
        {
            icon: "/images/service-icon/r-c.svg",
            title: "React Native Expert",
            description:
                " Cross-platform apps built from ready designs.",
        },
        {
            icon: "/images/service-icon/f-l-d.svg",
            title: "Full Stack Developer",
            description:
                "React Native, API integration, and Node.js backend.",
        },
        {
            // icon: "/images/service-icon/delivery.svg",
            icon: "/images/service-icon/delivery.svg",
            title: "End-to-End Delivery",
            description:
                "From development to App Store & Play Store launch.",
        },
        {
            icon: "/images/service-icon/c-s-c.svg",
            title: "Clean, Scalable Code",
            description:
                "Built for performance and long-term reliability.",
        },
    ];

    const servicesType = type == PresentationType.MobileApp ? Mobservices : services

    return (
        <>
            <div className="container  why-choose-setion">
                <h1 className="heading3 rubik-font  choose-us">
                    Why
                    <span className="red-color "> Choose </span>
                    US?

                </h1>
                {type != PresentationType.MobileApp ?

                    <p className="p1">
                        <span className="red-color bold">  Devpixel,</span> we deliver high quality pitch decks, presentation
                        templates, and business presentations that combine creativity,
                        clarity, and professional design. Every project is tailored to your
                        brand, fully editable, and built to communicate your message with
                        impact. With fast delivery, smooth communication, and experience
                        across multiple industries, we ensure presentations that look
                        polished, feel consistent, and help you achieve real results.
                    </p>


                    :

                    <p className="p1 " style={{maxWidth:"870px"}}> 

                        At  <span className="red-color bold">  DevPixel Solution,</span> we deliver complete <b>full-stack app</b> solutions using <b>React
                        Native</b> and Node.js, ensuring fast, scalable, and high-performance mobile applications from front to back
                    </p>


                }

                <div className={`why-choose-up`}>
                    {servicesType.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;
