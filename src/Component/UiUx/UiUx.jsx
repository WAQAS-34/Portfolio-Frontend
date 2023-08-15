import MobilePortfolio from "@/Component/MobilePortfolio/MobilePortfolio";
import TopHeading from "@/Component/TopHeading/TopHeading";
import React, { useEffect, useRef } from "react";
import portfolio1 from "@/assets/images/portfolio1.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import { useDispatch, useSelector } from "react-redux";
import { uiuxDispatch } from "@/store/action";

const UiUx = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const uiuxState = useSelector((state) => state && state.uiuxDesign.uiux);
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
  useEffect(() => {
    dispatch(uiuxDispatch());
  }, []);
  const itemsPerRow = 2;
  const numRows = Math.ceil(uiuxState?.length / itemsPerRow);
  return (
    <div className="bg-darkblue">
      <div className="container mobiledevelopment container-padding ">
        <div className="website-development">
          <TopHeading
            elementRef={ref}
            tittle={"UI/UX    "}
            colorTitle={"Design"}
            btnText={"Portfolio"}
          />
        </div>

        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div className="portfolio-row" key={rowIndex}>
            {uiuxState &&
              uiuxState
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
                    />
                  </div>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiUx;
