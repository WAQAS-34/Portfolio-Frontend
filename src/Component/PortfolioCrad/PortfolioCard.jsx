import React, { useEffect, useState } from "react";

import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion } from "framer-motion";
import eye from "@/assets/images/eye.svg";
import thumbsup from "@/assets/images/thumbs-up.svg";
import { FaRegThumbsUp } from "react-icons/fa";
import BASE_URL from "@/url";
import { PORTFOLIO_TYPE } from "@/utils/utils";
import { mobileappdev, presentation, uiux, webdev } from "@/endPoints";
import axios from "axios";
import portfolio1 from "@/assets/images/portfolio1.svg";
import baguetteBox from "baguettebox.js";
const PortfolioCard = ({
  views,
  likeCount,
  showtittle,
  bluecolor,
  tittle,
  fullImage,
  year,
  image,
  id,
}) => {
  const { elementRef, mainControls } = useInViewAnimation();
  const [likes, setlikes] = useState(likeCount);
  const [isLike, setisLike] = useState(false);
  const handleLikes = () => {
    // localStorage.setItem("islike", true);
    // localStorage.setItem("likeid", id);
    if (!isLike) {
      setlikes((prev) => prev + 1);
      setisLike(true);
      axios({
        url: `${BASE_URL}${
          tittle == PORTFOLIO_TYPE.Mobile_app_development
            ? mobileappdev
            : tittle == PORTFOLIO_TYPE.Presentations_Design
            ? presentation
            : tittle == PORTFOLIO_TYPE.Website_Development
            ? webdev
            : uiux
        }/${id}`,
        method: "patch",
        data: {
          likeCount: likes + 1,
        },
      })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {});
    }
  };
  baguetteBox.run(".images", {
    // Custom options
    captions: true,
    buttons: false,
    fullScreen: false,
  });
  // useEffect(() => {
  //   const isLike = localStorage.getItem("islike");
  //   const likeid = localStorage.getItem("likeid");
  //   if (isLike && likeid == id) {
  //     setisLike(true);
  //   }
  // }, []);

  return (
    <>
      {/* <div className="images">
           <a
          href={`https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg`}
          data-at-450={image}
          data-at-800={image}
          data-at-1366={image}
          data-at-1920={image}
        >

          <motion.img
            className="portfolioImg"
            whileHover={{ scale: 1.1 }} // Scale to 1.2 on hover
            transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
            src={image}
            alt=""
          />
        </a>
    </div> */}

      <motion.div
        ref={elementRef}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{
          duration: 3,
          delay: 0.2,
          ease: "easeIn",
          type: "spring",
          // staggerChildren: 0.5
        }}
        className={`portfolioCard ${bluecolor}`}
      >
        <div
          className="images"
          style={{ overflow: "hidden", borderRadius: "14px" }}
        >
          <a
            href={ fullImage??image}
            data-at-450={
              fullImage??image
            }
            data-at-800={
              fullImage??image
            }
            data-at-1366={
              fullImage??image
            }
            data-at-1920={
              fullImage??image
            }
          >
            <motion.img
            onClick={(e)=>e.stopPropagation()}
              className="portfolioImg"
              whileHover={{ scale: 1.1 }} // Scale to 1.2 on hover
              transition={{ duration: 0.3, ease: "easeInOut" }} // Animation duration and easing
              src={image}
              alt=""
            />
          </a>
        </div>
        <div className="portfolioCardWrapper">
          {showtittle ? (
            <div>
              <h4 className="heading4"> {tittle}</h4>
            </div>
          ) : null}

          <div
            style={{ width: showtittle ? "auto" : "100%" }}
            className="infoContainer"
          >
            <div className="thumbContainer">
              <FaRegThumbsUp
                onClick={(e) => {
                  e.stopPropagation(), handleLikes(likeCount);
                }}
                style={{ color: isLike ? "#ff4237" : "" }}
                className="likeIcon"
              />
              <p className="p2" style={{ marginTop: "2px" }}>
                {likes} likes
              </p>
            </div>
            <div className="thumbContainer">
              <img src={eye.src} alt="" />
              <p className="p2">{views} </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioCard;
