import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

const useInViewAnimation = () => {
    const mainControls = useAnimation();
    const elementRef = useRef(null);
    const isInView = useInView(elementRef);
    // const isInView = useInView(elementRef);


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } 
        else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return { elementRef, mainControls };
};

export default useInViewAnimation;
