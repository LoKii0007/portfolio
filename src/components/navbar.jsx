import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../css/navbar.css";
import { useGSAP } from "@gsap/react";
import { GlobalContext } from "../context/globalContext";

const Navbar = ({ isMobile }) => {
  const { darkTheme, setDarkTheme } = useContext(GlobalContext);
  const [handleView, setHandleView] = useState("portfolio");
  const [navbarHidden, setNavbarHidden] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".custom-navbar", {
      y: 0,
      ease: "elastic",
      duration: 1,
    });
    tl.to(".custom-navbar", {
      width: `${isMobile ? "92vw" : "80vw"}`,
      duration: 1,
    });
    tl.to(".navbar-left, .navbar-right", {
      opacity: 1,
    });

  }, [isMobile]);

  function handleTheme() {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    const cachedTheme = localStorage.getItem("darkTheme");
    if (cachedTheme) {
      setDarkTheme(JSON.parse(cachedTheme));
    }
  }, [setDarkTheme]);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  useEffect(() => {
    const element = document.querySelector(`#${handleView}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, [handleView]);

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleSCroll = ()=>{
        const currentScrollY = window.scrollY

        if(currentScrollY > lastScrollY){
            setNavbarHidden(true)
        }else{
            setNavbarHidden(false)
        }

        lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleSCroll)

    return ()=>{
        window.removeEventListener('scroll', handleSCroll)
    }
  }, []);

  return (
    <>
      <nav className={` d-flex position-fixed justify-content-center ${navbarHidden && 'nav-pos'}`}>
        <div
          className={` ${
            darkTheme ? "dark-theme-bg" : "light-theme-bg"
          } custom-navbar rounded-pill d-flex justify-content-between align-items-center `}
        >
          <div
            className={`navbar-left nav-items ms-3 d-flex flex-row justify-content-center align-items-center`}
          >
            <button
              onClick={() => handleTheme()}
              className="theme d-flex align-items-center overflow-y-hidden"
            >
              <div className="d-flex flex-column theme-icon">
                <i
                  className={` ${
                    darkTheme ? "light-mode" : ""
                  } bi bi-brightness-high-fill`}
                ></i>
                <i
                  className={` ${
                    darkTheme ? "dark-mode" : ""
                  } bi bi-moon-stars-fill`}
                ></i>
              </div>
            </button>
            <Link
              to="/"
              className={`${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } nav-item loki px-3 py-1`}
            >
              Lokesh
            </Link>
          </div>
          <div
            className={`navbar-right position-relative nav-items d-flex flex-row justify-content-center align-items-center`}
          >
            <div
              onClick={() => setHandleView("projects")}
              className={` ${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } nav-item px-3 py-1 rounded-pill`}
            >
              Projects
            </div>
            <div
              onClick={() => setHandleView("skills")}
              className={` ${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } nav-item px-3 py-1 rounded-pill`}
            >
              Skills
            </div>
            <div
              onClick={() => setHandleView("contact")}
              className={` ${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } nav-item px-3 py-1 rounded-pill`}
            >
              Connect
            </div>
            <div
              className={` ${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } nav-item nav-item-last px-3 py-1 rounded-pill`}
            >
              Say, Hi
            </div>
            <div className="pill-bg position-absolute rounded-pill"></div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end d-flex flex-column align-items-center"
        tabIndex="-1"
        id="menu"
        aria-labelledby="menuLabel"
      >
        <div className="offcanvas-body pe-3 pt-4 d-flex flex-column align-items-end">
          <Link
            to="/"
            className="menu-item d-flex px-3 py-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Home
            <i className="bi bi-list ps-3"></i>
          </Link>
          <Link
            to="/projects"
            className="menu-item px-3 py-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Projects
            <i className="bi bi-card-list ps-3"></i>
          </Link>
          <Link
            to="/about"
            className="menu-item px-3 py-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            TechStack
            <i className="bi bi-stack ps-3"></i>
          </Link>
          <Link
            to="/about"
            className="menu-item px-3 py-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Contact
            <i className="bi bi-person-lines-fill ps-3"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
