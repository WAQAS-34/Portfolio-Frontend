import React from 'react';
import AchievementCard from '../AchievementCard/AchievementCard';

const Achievement = () => {
    const achievements = [
        {
            icon: '/images/service-icon/slides-count.svg',
            count: '50k+',
            label: 'Slides Design'
        },
        {
            icon: '/images/service-icon/customers-count.svg',
            count: '1000+',
            label: 'Customers'
        },
        {
            icon: '/images/service-icon/support-count.svg',
            count: '24/7',
            label: 'Support'
        }
    ];

    return (
        <div className="achievement-section">
            <div className="">
                <h1 className="achievement-heading  heading3 rubik-font">
                    We have done it for many. <span className="red-color">You are the next!</span>
                </h1>
                
                <div className="achievement-cards-grid">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            index={index}
                            icon={achievement.icon}
                            count={achievement.count}
                            label={achievement.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievement;
