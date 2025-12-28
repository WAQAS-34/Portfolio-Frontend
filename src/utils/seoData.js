// SEO data constants for different pages
export const seoData = {
  home: {
    title: "Dev Pixel Solutions - Mobile App development & Presentation Design Expert",
    description: "Professional React Native mobile app development and presentation design services. Expert cross-platform developer specializing in iOS/Android apps, PowerPoint templates, pitch decks, and business presentations.",
    keywords: "React Native developer, cross-platform mobile app developer, mobile app front-end developer, React Native expert, presentation design, PowerPoint templates, pitch deck design, Google Slides, business presentations, infographic design",
    canonicalUrl: "https://devpixelsolutions.com",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Dev Pixel Solutions",
      "url": "https://devpixelsolutions.com",
      "logo": "https://devpixelsolutions.com/images/logo.png",
      "description": "Professional React Native mobile app development and presentation design services",
      "sameAs": [
        "https://www.linkedin.com/company/devpixelsolutions",
        "https://twitter.com/devpixelsolutions"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92 3056256473",
        "contactType": "customer service"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "offers": [
        {
          "@type": "Service",
          "name": "React Native Mobile App Development",
          "description": "Cross-platform mobile app development using React Native"
        },
        {
          "@type": "Service", 
          "name": "Presentation Design Services",
          "description": "Professional PowerPoint, Google Slides, and pitch deck design"
        }
      ]
    }
  },

  mobileApp: {
    title: "React Native Mobile App Development Services - Cross-Platform Expert",
    description: "Professional React Native mobile app development services. Expert cross-platform developer creating high-performance iOS and Android apps with modern UI/UX design and seamless user experience.",
    keywords: "React Native developer, cross-platform mobile app developer, mobile app front-end developer, React Native expert, iOS app development, Android app development, mobile app UI/UX, React Native services",
    canonicalUrl: "https://devpixelsolutions.com/mobile-app",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "React Native Mobile App Development",
      "description": "Professional cross-platform mobile app development using React Native for iOS and Android",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Mobile App Development",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile App Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "React Native App Development"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Cross-Platform Mobile Apps"
            }
          }
        ]
      }
    }
  },

  mobileDevelopment: {
    title: "Mobile Development Services - React Native Front-End Developer",
    description: "Expert mobile development services specializing in React Native front-end development. Professional cross-platform mobile app developer creating responsive, high-performance mobile applications.",
    keywords: "mobile app front-end developer, React Native front-end developer, mobile development services, cross-platform development, React Native expert, mobile app developer, front-end mobile development",
    canonicalUrl: "https://devpixelsolutions.com/mobile-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Mobile Development Services",
      "description": "Expert React Native front-end development and cross-platform mobile app development services",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Mobile Development",
      "areaServed": "Worldwide"
    }
  },

  presentation: {
    title: "Professional Presentation Design Services - PowerPoint & Google Slides Expert",
    description: "Expert presentation design services for PowerPoint, Google Slides, and Keynote. Professional pitch deck design, business presentations, infographic design, and branded presentation templates.",
    keywords: "presentation design, PowerPoint presentation, Google Slides, pitch deck, investor pitch deck, PowerPoint template, slides design, business presentation, infographic design, presentation designer",
    canonicalUrl: "https://devpixelsolutions.com/presentation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Presentation Design Services",
      "description": "Professional presentation design for PowerPoint, Google Slides, pitch decks, and business presentations",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Presentation Design",
      "areaServed": "Worldwide"
    }
  },

  investorPitchDecks: {
    title: "Investor Pitch Deck Design Services - Professional Pitch Presentations",
    description: "Expert investor pitch deck design services. Professional pitch deck designer creating compelling investor presentations, startup pitch decks, and business pitch presentations that secure funding.",
    keywords: "investor pitch deck, pitch deck design, investor presentation, startup pitch deck, business pitch presentation, pitch deck designer, investor deck, funding presentation, venture capital pitch",
    canonicalUrl: "https://devpixelsolutions.com/presentation/investor-pitch-decks",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Investor Pitch Deck Design",
      "description": "Professional investor pitch deck design services for startups and businesses seeking funding",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Pitch Deck Design"
    }
  },

  brandedMasterTemplates: {
    title: "Branded Master Template Design - Professional PowerPoint Templates",
    description: "Custom branded master template design services. Professional PowerPoint templates, Google Slides templates, and presentation templates with consistent branding and corporate identity.",
    keywords: "branded master template, PowerPoint template, Google Slides template, presentation template, brand template design, corporate presentation template, business template, slide template design",
    canonicalUrl: "https://devpixelsolutions.com/presentation/branded-master-templates",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Branded Master Template Design",
      "description": "Custom branded presentation templates for PowerPoint and Google Slides with consistent corporate branding",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Template Design"
    }
  },

  keynote: {
    title: "Keynote Presentation Design Services - Professional Apple Keynote Templates",
    description: "Expert Keynote presentation design services for Apple Keynote. Professional presentation designer creating stunning Keynote templates, business presentations, and corporate slide designs.",
    keywords: "Keynote presentation, Apple Keynote design, Keynote template, presentation design, Keynote slides, business presentation, corporate Keynote, professional Keynote design",
    canonicalUrl: "https://devpixelsolutions.com/keynote",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Keynote Presentation Design",
      "description": "Professional Apple Keynote presentation design and template creation services",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Keynote Design"
    }
  },

  powerPoint: {
    title: "PowerPoint Presentation Design Services - Professional PPT Templates",
    description: "Expert PowerPoint presentation design services. Professional PowerPoint designer creating custom PPT templates, business presentations, corporate slide designs, and branded PowerPoint templates.",
    keywords: "PowerPoint presentation, PPT design, PowerPoint template, presentation design, PowerPoint slides, business presentation, corporate PowerPoint, professional PPT design, slide design",
    canonicalUrl: "https://devpixelsolutions.com/power-point",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "PowerPoint Presentation Design",
      "description": "Professional PowerPoint presentation design and custom PPT template creation services",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "PowerPoint Design"
    }
  },

  presentationDesign: {
    title: "Google Slides Presentation Design Services - Professional Slide Templates",
    description: "Expert Google Slides presentation design services. Professional presentation designer creating custom Google Slides templates, business presentations, and corporate slide designs for Google Workspace.",
    keywords: "Google Slides, Google Slides design, Google Slides template, presentation design, Google presentation, business slides, corporate Google Slides, professional slide design",
    canonicalUrl: "https://devpixelsolutions.com/presentation-design",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Google Slides Presentation Design",
      "description": "Professional Google Slides presentation design and template creation services",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Google Slides Design"
    }
  },

  uiUx: {
    title: "UI/UX Design Services - Mobile App & Web Interface Design Expert",
    description: "Professional UI/UX design services for mobile apps and websites. Expert user interface and user experience designer creating intuitive, modern designs that enhance user engagement and conversion.",
    keywords: "UI/UX design, user interface design, user experience design, mobile app UI, web design, UX designer, UI designer, app design, website UI/UX, interface design",
    canonicalUrl: "https://devpixelsolutions.com/ui-ux",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "UI/UX Design Services",
      "description": "Professional user interface and user experience design for mobile apps and websites",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "UI/UX Design"
    }
  },

  websiteDevelopment: {
    title: "Website Development Services - Professional Web Developer",
    description: "Expert website development services creating responsive, fast-loading, and SEO-optimized websites. Professional web developer specializing in modern web technologies and user-friendly designs.",
    keywords: "website development, web development, responsive website, web developer, website design, custom website, professional website, web development services, modern website",
    canonicalUrl: "https://devpixelsolutions.com/website-development",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Website Development Services",
      "description": "Professional website development creating responsive and SEO-optimized websites",
      "provider": {
        "@type": "Organization",
        "name": "Dev Pixel Solutions"
      },
      "serviceType": "Website Development"
    }
  }
};

// Common keywords for all pages
export const commonKeywords = "Dev Pixel Solutions, React Native developer, presentation design, mobile app development, PowerPoint design, cross-platform apps";

// Generate page-specific keywords
export const generateKeywords = (pageKeywords) => {
  return `${pageKeywords}, ${commonKeywords}`;
};