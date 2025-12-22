import React from 'react';
import { motion } from 'framer-motion';
import useInViewAnimation from '@/Hooks/useInViewAnimation';

const AchievementCard = ({ icon, count, label, index }) => {
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
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="achievement-card"
        >
            <div className="circle-icon achievement-icon-wrapper ">
                <div className="icon-inner">
                    <img src={icon} alt={label} />
                </div>
            </div>
            <h2 className="achievement-count">{count}</h2>
            <p className="achievement-label">{label}</p>
        </motion.div>
    );
};

export default AchievementCard;
