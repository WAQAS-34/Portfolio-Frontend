import React from 'react';
import { motion } from 'framer-motion';
import useInViewAnimation from '@/Hooks/useInViewAnimation';

const ServiceCard = ({ icon, title, description, index }) => {
    const { elementRef, mainControls } = useInViewAnimation();

    return (
        <motion.div
            ref={elementRef}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="service-card"
        >
            <div className="service-card-icon">
                <div className="icon-inner">
                    <img src={icon} alt={title} />
                </div>
            </div>
            <h3 className="service-card-title rubik-font">{title}</h3>
            <p className="service-card-description">{description}</p>
        </motion.div>
    );
};

export default ServiceCard;
