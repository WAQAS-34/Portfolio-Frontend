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
import { ImCross } from "react-icons/im";
import { whatsappURL } from "@/utils/whatsAppurl";

function Header({ admin }) {
  const [showSideBar, setshowSideBar] = useState(false);

  const router = useRouter();
  const [currentIndex, setcurrentIndex] = useState(null);

  const navigation = [
    {
      name: "Home",
      path: "home",
      linkPath: "/",

    },
    {
      name: "services",
      path: "services",
      linkPath: "/#services",
    },
    {
      name: "Portfolio",
      path: "portfolio",
      linkPath: "/#portfolio",
    },
    {
      name: "Expertise",
      path: "Expertise",
      linkPath: "/#Expertise",
    },
    {
      name: "contact",
      path: "contact",
      linkPath: "/#contact",
    },
  ];
  const adminNavigation = [
    {
      name: "website",
      path: "/admin/web-dev/view.html",
    },
    {
      name: "Mobile",
      path: "/admin/mob-dev/view.html",
    },
    {
      name: "UiUx",
      path: "/admin/ui-ux/view.html",
    },
    {
      name: "Presentation",
      path: "/admin/presentation/view.html",
    },
    {
      name: "Client",
      path: "/admin/testimonial/view.html",
    },
  ];
  console.log("showSideBar", showSideBar);
  const handleNavigate = () => {
    setshowSideBar(false);
  };
  useEffect(() => {
    if (window.innerWidth < 500) {
      setshowSideBar(false);
    }
  }, []);

  return (
    <>
      <Navbar
        expand={"lg"}
        className="p-0   bg-body-tertiary  bg-blue headdercontainer  "
        sticky="top"
      >
        <Container className="container-padding">
          <Navbar.Brand className="p-0" href="/">
            <img src={logo.src} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`}>
            <RiMenu3Line
              onClick={() => setshowSideBar(true)}
              style={{ color: "#fff", fontSize: "30px" }}
            />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
            className={`bg-blue `}
            show={showSideBar}
          >
            <Offcanvas.Header>
              <Offcanvas.Title
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
                id={`offcanvasNavbarLabel-expand-${"md"}`}
              >
                <img src={logo.src} className="logo" />
                <ImCross
                  onClick={() => setshowSideBar(false)}
                  style={{ color: "gray" }}
                />
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
                        href={item.path}
                      >
                        {item.name}
                      </Nav.Link>
                    );
                  })
                ) : router.pathname != "/" ? (
                  navigation?.map((item, ind) => {
                    return (
                      <Nav.Link
                        onClick={() => {
                          setshowSideBar(false);
                        }}
                        className={` header-link ${
                          admin && router.pathname == item.path
                            ? "active-nav-link"
                            : !admin && ind == currentIndex
                            ? "active"
                            : ""
                        }`}
                        key={ind}
                        to={item.path}
                        href={item.linkPath}
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
                          // onClick={handleNavigate}
                          onClick={() => {
                            setshowSideBar(false);
                          }}
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
                          to={item.path}
                          href={item.linkPath}
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
