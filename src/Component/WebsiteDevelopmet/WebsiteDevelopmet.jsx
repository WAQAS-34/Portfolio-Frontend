import MobilePortfolio from "@/Component/MobilePortfolio/MobilePortfolio";
import TopHeading from "@/Component/TopHeading/TopHeading";
import React, { useEffect, useRef } from "react";
import portfolio1 from "@/assets/images/portfolio1.svg";
import PortfolioCard from "../PortfolioCrad/PortfolioCard";
import { useDispatch, useSelector } from "react-redux";
import { websiteDev } from "@/store/action";
import webDevState from "@/db/website-development.json"
const WebsiteDevelopmet = () => {
  const ref = useRef();
  const dispatch = useDispatch();
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

  // const webDevState = useSelector(
  //   (state) => state && state.webDevelopment.webDev
  // );
  console.log("webDevState",webDevState)
  useEffect(() => {
    dispatch(websiteDev());
  }, []);
  const itemsPerRow = 2;
  const numRows = Math.ceil(webDevState?.length / itemsPerRow);
  return (
    <div className="bg-darkblue">
      <div className="container mobiledevelopment container-padding ">
        <div className="website-development">
          <TopHeading
            elementRef={ref}
            tittle={"Website   "}
            colorTitle={"Development"}
            btnText={"Portfolio"}
          />
        </div>
        {Array.from({ length: numRows }, (_, rowIndex) => (
          <div className="portfolio-row" key={rowIndex}>
            {webDevState &&
              webDevState
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

export default WebsiteDevelopmet;
