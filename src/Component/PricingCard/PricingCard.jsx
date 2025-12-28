import React from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { whatsappURL } from "@/utils/whatsAppurl";
const PricingCard = ({
  plan,
  price,
  delivery,
  features,
  isHighlighted,
  index,
}) => {
  const { elementRef, mainControls } = useInViewAnimation();
  const router = useRouter()
  const  handleRedriect = ()=>{
    router.push(whatsappURL)

  }
  return (
    <motion.div
      ref={elementRef}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`pricing-card `}
      onClick={handleRedriect}
    >
      <div className="header-container">
        <div className="pricing-card-header">
          <h3 className="pricing-plan-name heading2">{plan}</h3>
          <div className=" circle-icon pricing-icon">
            <div className="icon-inner">
              {/* <img src="/images/service-icon/top-arrow.svg" alt="arrow" /> */}
              <TfiArrowTopRight className="arrow-icon" />
            </div>
          </div>
        </div>

        <div className="pricing-amount">
          <span className="pricing-price heading3">${price}</span>
          <span className="pricing-delivery rubik-font ">{delivery}</span>
        </div>
      </div>
      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <li key={idx} className="pricing-feature-item">
            <img src="/images/service-icon/check.svg" />
            <span className="feature-text p2">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
