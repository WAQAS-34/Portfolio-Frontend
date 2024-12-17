import { useRouter } from "next/router";
import React from "react";

const SocialIcon = () => {
  const router = useRouter();
  const handleDirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      style={{
        backgroundColor: "#000",
        position: "fixed",
        bottom: "15px",
        right: "15px",
        padding: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        zIndex: 999,
      }}
    >
      <img
        className="social-icon"
        src="/images/fiverr.png"
        onClick={() => handleDirect("https://www.fiverr.com/s/EgPZDb9")

        }
        style={{ width: "60px", marginRight: "5px" }}
      />
      <img
        className="social-icon"

        onClick={() => {
          handleDirect(
            "https://www.upwork.com/fl/~01d7f38bba1c799002?mp_source=share"
          )
        }}
        src="/images/upwok.png"
        style={{ width: "60px" }}
      />
    </div>
  );
};

export default SocialIcon;
