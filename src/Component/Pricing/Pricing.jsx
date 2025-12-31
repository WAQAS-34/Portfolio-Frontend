import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import TopHeading from '../TopHeading/TopHeading';

const Pricing = () => {
    const pricingData = [
        {
            plan: 'Basic',
            price: '20',
            delivery: '/2-day delivery',
            features: [
                'Up to 5 slides',
                'Customized template',
                'Unlimited revisions',
                'Include source file',
                'Charts & graphs',
                'Infographics',
                'Slide transition',
                'Slide animation',
                'Priority Support',
                'PPT Format',
                'PDF'
            ],
            isHighlighted: false
        },
        {
            plan: 'Standard',
            price: '40',
            delivery: '/3-day delivery',
            features: [
                'Up to 10 slides',
                'Customized template',
                'Unlimited revisions',
                'Include source file',
                'Charts & graphs',
                'Infographics',
                'Slide transition',
                'Slide animation',
                'Priority Support',
                'PPT Format',
                'PDF'
            ],
            isHighlighted: true
        },
        {
            plan: 'Premium',
            price: '80',
            delivery: '/5-day delivery',
            features: [
                'Up to 20 slides',
                'Customized template',
                'Unlimited revisions',
                'Include source file',
                'Charts & graphs',
                'Infographics',
                'Slide transition',
                'Slide animation',
                'Priority Support',
                'PPT Format',
                'PDF'
            ],
            isHighlighted: false
        }
    ];

    return (
        <section className="pricing-section bg-blue ">
            <div className=" pricing-container">
                <TopHeading 
                hidebutton
                    tittle="My" 
                    colorTitle="Pricing" 
                />
                
                <div className="pricing-grid">
                    {pricingData.map((pricing, index) => (
                        <PricingCard
                            key={index}
                            plan={pricing.plan}
                            price={pricing.price}
                            delivery={pricing.delivery}
                            features={pricing.features}
                            isHighlighted={pricing.isHighlighted}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
