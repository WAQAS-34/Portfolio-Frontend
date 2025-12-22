import React from 'react';

const Statistics = () => {
    const stats = [
        {
            number: "5+",
            label: "Years of Experience"
        },
        {
            number: "100+",
            label: "Customers"
        },
        {
            number: "300+",
            label: "Completed Projects"
        }
    ];

    return (
        <div className="statistics-section">
            <div className="container">
                <div className="statistics-grid">
                    {stats.map((stat, index) => (
                        <React.Fragment key={index}>
                            <div className="stat-item">
                                <h2 className="stat-number">{stat.number}</h2>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                            {index < stats.length - 1 && (
                                <div className="stat-divider"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;