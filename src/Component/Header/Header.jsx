import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { RxCross2 } from "react-icons/rx";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import whatsapp from "@/assets/images/whatsapp.svg";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-scroll";

function Header({ admin }) {
  
  const phoneNumber = "+923056256473";
  const message = "Hello";
  // Construct  the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const router = useRouter();
  const [currentIndex, setcurrentIndex] = useState(null);

  const navigation = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "services",
      path: "services",
    },
    {
      name: "Portfolio",
      path: "portfolio",
    },
    {
      name: "Expertise",
      path: "Expertise",
    },
    {
      name: "contact",
      path: "contact",
    },
  ];
  const adminNavigation = [
    {
      name: "website",
      path: "/admin/web-dev/view",
    },
    {
      name: "Mobile",
      path: "/admin/mob-dev/view",
    },
    {
      name: "UiUx",
      path: "/admin/ui-ux/view",
    },
    {
      name: "Presentation",
      path: "/admin/presentation/view",
    },
    {
      name: "Client",
      path: "/admin/testimonial/view",
    },
  ];
 

  return (
    <>
      <Navbar
        expand={"lg"}
        className="p-0   bg-body-tertiary  bg-blue headdercontainer  "
        sticky="top"
      >
        <Container className="container-padding">
          <Navbar.Brand className="p-0" href="/">
            {/* <Image priority={false} src={logo} className="logo"></Image> */}
            <img src={logo.src} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`}>
            <RiMenu3Line style={{ color: "#fff", fontSize: "30px" }} />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
            className="bg-blue"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                <img src={logo.src} className="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3  nav-link-wrapper">
                {admin ? (
                  adminNavigation.map((item, ind) => {
                    return (
                      <Nav.Link
                        onClick={() => setcurrentIndex(ind)}
                        className={` header-link ${
                          router.pathname == item.path ? "active" : ""
                        }`}
                        key={ind}
                        // className={`${
                        //   router.pathname == item.path
                        //     ? " header-link active-nav-link"
                        //     : "header-link"
                        // }  `}
                        href={item.path}
                      >
                        {item.name}
                      </Nav.Link>
                    );
                  })
                ) : (
                  <>
                    {navigation?.map((item, ind) => {
                      return (
                        <Link
                          spy={true}
                          smooth={true}
                          duration={500}
                          // onClick={() => setcurrentIndex(ind)}
                          className={` header-link ${
                            admin && router.pathname == item.path
                              ? "active-nav-link"
                              : !admin && ind == currentIndex
                              ? "active"
                              : ""
                          }`}
                          key={ind}
                          href={item.path}
                          to={item.path}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </>
                )}
              </Nav>
              {admin ? null : (
                <div className="header-search-box ">
                  <button
                    onClick={() => router.push(whatsappURL)}
                    className="outlinebtn1"
                    style={{ width: "97px", height: "39px" }}
                  >
                    Hire Us
                    {/* <BsWhatsapp
                      style={{
                        fontSize: "23px",
                        color: "#fff",
                      }}
                    /> */}
                  </button>
                </div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
