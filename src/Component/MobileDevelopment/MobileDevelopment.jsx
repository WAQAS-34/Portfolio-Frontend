import MobilePortfolio from "@/Component/MobilePortfolio/MobilePortfolio";
import TopHeading from "@/Component/TopHeading/TopHeading";
import { mobileDispatch } from "@/store/action";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import mobileAppState from "@/db/mobileApp.json"
const MobileDevelopment = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  // const mobileAppState = useSelector(
  //   (state) => state && state.mobileAppReducer.mobileApp
  // );
  console.log("mobileAppState",mobileAppState)
  useEffect(() => {
    dispatch(mobileDispatch());
  }, []);
  return (
    <div className="bg-darkblue mobile-development-box">
      <div className="container mobiledevelopment  container-padding">
        <div className="developmentWrapper">
          <TopHeading
            elementRef={ref}
            tittle={"Mobile App  "}
            colorTitle={"Development"}
            btnText={"Portfolio"}
          />
        </div>
        {/* <MobilePortfolio /> */}
      </div>
      {/* <MobilePortfolio /> */}
      {mobileAppState &&
        mobileAppState?.map((item, ind) => {

          return !item.selected ? (
            <div key={ind}>
              <MobilePortfolio
                ind={ind}
                appName={item.appName}
                appDecs={item.appDecs}
                appImage={item.appImage}
                appSkills={item.appSkills}
                allScreenImages={item.allScreenImages}
              />
            </div>
          ) : null;
        })}
    </div>
  );
};

export default MobileDevelopment;
