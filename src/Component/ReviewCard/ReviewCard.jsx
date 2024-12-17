import React from "react";
import flag from "@/assets/images/flag.svg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = ({ userPic, name, county, countyPic, review, star }) => {

  const maxRating = 5;
  const filledStars = star > 5 ? 5 : star;
  const unfilledStars = maxRating - filledStars;
  return (
    <div className="reviw-border">
    <div className="reviewCard">
      <div className="reviewCardHeader">
        <div className="review-pic">
          <img className="userPic" src={userPic} alt="" />
        </div>

<div className="comma-box">
        <img src="/images/left-comma.svg" alt="" />
        <div>
          <p className="p1 elisp-text review-title" >
            {name}
          </p>
          <div className=" flagName">
            {" "}
            <img src={countyPic} alt="" />
            <p className="p2">{county}</p>
          </div>

        </div>
        <img src="/images/right-comma.svg" alt="" />
        </div>
      </div>
      <p className="p1 clientreview">{review}</p>

      <div className="starBox">
        {[...Array(filledStars)].map((_, index) => (
          <AiFillStar
            key={index}
            className="yellow-color"
            style={{ fontSize: "20px" }}
          />
        ))}
        {[...Array(unfilledStars)].map((_, index) => (
          <AiOutlineStar
            key={index}
            className="red-color"
            style={{ fontSize: "20px" }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ReviewCard;
