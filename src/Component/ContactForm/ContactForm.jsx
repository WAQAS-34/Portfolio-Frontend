import React, { useEffect, useRef, useState } from "react";
import TopHeading from "../TopHeading/TopHeading";
import waqas from "@/assets/images/waqas.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import instagram from "@/assets/images/instagram.svg";
import linkdin from "@/assets/images/linkdin.svg";
import facebook from "@/assets/images/facebook.svg";
import arrowright from "@/assets/images/arrow-right.svg";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import useInViewAnimation from "@/Hooks/useInViewAnimation";
import { motion, useAnimation, useInView } from "framer-motion";
import axios from "axios";
import BASE_URL from "@/url";
import { contact } from "@/endPoints";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { MdOutlineEmail } from "react-icons/md";

import { GrMapLocation } from "react-icons/gr";

const ContactForm = () => {
  const phoneNumber = "+923056256473";
  const message = "Hello";
  // Construct  the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const ref = useRef();
  const { elementRef, mainControls } = useInViewAnimation();
  const [loading, setloading] = useState(false);
  const [State, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const conatactRef = useRef();
  const isInview = useInView(conatactRef);
  const contactControls = useAnimation();
  useEffect(() => {
    if (isInview) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [isInview]);
  const handleSend = () => {
    setloading(true);
    axios({
      url: `${BASE_URL}${contact}`,
      method: "post",
      data: {
        ...State,
      },
    })
      .then((res) => {
        setloading(false);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        console.log("res", res);
        if (res.data) {
          toast.success(`message sent successfully`, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        setloading(false);
        setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        if (err?.response?.data?.message) {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };
  return (
    <div id="contact" className="bg-blue">
      <div className="container container-padding contactFormBox">
        <TopHeading
          elementRef={ref}
          tittle={"Let's make your    "}
          colorTitle={"brand brilliant!"}
          btnText={"GET IN TOUCH"}
        />
        <motion.p
          ref={elementRef}
          variants={{
            hidden: { opacity: 0, y: 55 },
            visible: { opacity: 1, y: 0 },
          }}
          initial={"hidden"}
          animate={mainControls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="p1 conatactText "
        >
          If you would like to work with us or just want to get in touch, we’d
          love to hear from you!
        </motion.p>

        <motion.div
          ref={conatactRef}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial={"hidden"}
          animate={contactControls}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
          className="contact-form"
        >
          <div>
            <img src={waqas.src} alt="" />
            <h6 className="heading5 text-white profile-text">Waqas Abbas</h6>
            <div className="dot-container">
              {/* <div className="dot"></div> */}
              <MdOutlineEmail style={{ color: "#fff", fontSize: "16px" }} />
              <p className="p1">info@devpixelsolutions.com</p>
            </div>
            <div className="dot-container">
              {/* <div className="dot"></div> */}
              <GrMapLocation
                className="locationIcon"
                style={{ color: "#fff !important", fontSize: "16px" }}
              />
              <p className="p1">Sialkot, Pakistan.51310</p>
            </div>
            <div className="dot-container">
              <div className="dot"></div>
              <p className="p1"> connect with our lead today</p>
            </div>

            {/* <p className="p1"> </p> */}

            <div className="contact-icon">
              <Link target="_blank" href={whatsappURL}>
                <img src={whatsapp.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={instagram.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={linkdin.src} alt="" />
              </Link>
              <Link href={"/"}>
                <img src={facebook.src} alt="" />
              </Link>
            </div>
            <button className="btn4 hoverglow">
              Book a free call <img src={arrowright.src} alt="" />{" "}
            </button>
          </div>
          <div className="input-wrapper">
            <div className="inputWerapper">
              <input
                value={State.name}
                onChange={(e) =>
                  setState((prev) => {
                    return {
                      ...prev,
                      name: e.target.value,
                    };
                  })
                }
                type="text"
                placeholder="Name"
                className="inputStyle"
              />
              <input
                value={State.email}
                onChange={(e) =>
                  setState((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  })
                }
                type="email"
                placeholder="Email"
                className="inputStyle"
              />
            </div>
            <input
              type="text"
              value={State.subject}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    subject: e.target.value,
                  };
                })
              }
              placeholder="Subject"
              className="inputStyle"
            />
            <textarea
              value={State.message}
              onChange={(e) =>
                setState((prev) => {
                  return {
                    ...prev,
                    message: e.target.value,
                  };
                })
              }
              placeholder="Message"
              className="inputStyle height  "
            ></textarea>
            <button className="outlinebtn1" onClick={handleSend}>
              {loading ? <Loader /> : "Send"}
            </button>
          </div>
        </motion.div>
      </div>

      <div className="footer ">
        <img src={logo.src} />
        <p className="p1">
          © 2023 Copyright The Presentation Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
