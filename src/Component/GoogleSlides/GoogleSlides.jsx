import React, { useEffect, useRef } from "react";
import TopHeading from "../TopHeading/TopHeading";
import arrow from "../../assets/images/arrow.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import portfolio1 from "@/assets/images/portfolio1.svg";
import { motion } from "framer-motion";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { presentationDispatch } from "@/store/action";
import { useDispatch, useSelector } from "react-redux";
import { PresentationContent, PresentationType } from "@/constant";

const GoogleSlides = ({ data, type }) => {
  console.log("data", data);
  const ref = useRef();
  const cardRef = useRef();
  const PresetationState = useSelector(
    (state) => state && state.presetatIonReducer.presentation
  );
  console.log("PresetationState", PresetationState);
  const portfolio = [
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
    {
      tittle: "Mobile app development",
      year: "© 2023",
      image: portfolio1,
    },
  ];
  const { elementRef, mainControls } = useInViewAnimation();

  const itemsPerRow = 2;
  const numRows = Math.ceil(data?.length / itemsPerRow);

  return (
    <div className="googleSlides">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <div className="portfolio-row" key={rowIndex}>
          {data &&
            data
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map((item, ind) => (
                <div key={ind} className="portfolio-card">
                  <PortfolioCard
                    fullImage={item.fullImage}
                    id={item._id}
                    likeCount={item.likeCount}
                    views={item.views}
                    bluecolor={"bg-blue"}
                    tittle={item.portfolioType}
                    year={item.year}
                    image={item.webImage}
                    
                    // showHoverButton={type === PresentationType.MobileApp ? true : false}
                    showHoverButton={true}
                    hoverButtonText="Click to view "
                    onHoverButtonClick={(id, image) => {
                      // Handle button click
                      console.log('Button clicked for item:', id);
                    }}
                  />
                </div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default GoogleSlides;
