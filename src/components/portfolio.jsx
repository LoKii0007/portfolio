import "../css/portfolio.css";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { gsap } from "../hooks/gsapSetup";

const Portfolio = ({ isMobile }) => {
  const { darkTheme } = useContext(GlobalContext);

  useGSAP(() => {
    gsap.to(".portfolio-img", {
      y: 0,
      duration: 1,
      ease: "back",
      opacity: 1,
    });

    gsap.to(".expert", {
      scale: 1,
      y: 0,
      x: 0,
      scrollTrigger: {
        trigger: ".portfolio-main",
        start: "top top",
        endTrigger: ".portfolio-wrapper",
        end: "top top",
        scrub: 0,
      },
    });

    ////////////////////////////////
    // horizontal scroll
    ///////////////////////////////

    gsap.to(".portfolio-wrapper", {
      x: `${isMobile ? "-30vw" : "-50vw"}`,
      scrollTrigger: {
        trigger: ".portfolio-wrapper",
        start: "top top",
        end: `+=${isMobile ? window.innerWidth * 0.5 : window.innerWidth * 1}`,
        pin: true,
        scrub: 0.2,
      },
    });

    gsap.to(".box-2", {
      y: 0,
      scrollTrigger: {
        trigger: ".portfolio-section2",
        start: "top -20%",
        end: "top -20%",
        scrub: 1,
        // markers: true
      },
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-section2",
        start: "top -40%",
        end: "+=400",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(".box-3", {
      scale: 1,
      x: "20vw",
    });
  }, []);

  ////////////////////////////////
  // expert text
  ///////////////////////////////

  useGSAP(() => {
    gsap.to(".expert", {
      color: "rgba(161,196,253, 1)",
      scrollTrigger: {
        trigger: ".portfolio-main",
        start: "top top",
        endTrigger: ".portfolio-wrapper",
        end: "top top",
        scrub: 1,
      },
    });
  }, [darkTheme]);

  return (
    <div
      className={`portfolio-main ${
        darkTheme ? "dark-theme-bg" : "light-theme-bg"
      } `}
    >
      <section className="portfolio d-flex relative ">
        <div className="portfolio-section d-flex justify-content-around align-items-center w-[100vw]">
          <div className="portfolio-left d-flex ps-2 ">
            <div className={` portfolio-desc bowl d-flex flex-column `}>
              <div
                className={`${
                  darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                } desc-1`}
                id="portfolio-desc"
                data-text="Hi i'm"
              >
                Hi i'm <span className="name">Lokesh</span>
              </div>
              <div
                className={`${
                  darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                } desc-2`}
                id="portfolio-desc"
                data-text="A full stack"
              >
                A full stack
              </div>
              <div
                className={`${
                  darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                } desc-3`}
                id="portfolio-desc"
                data-text="Web Devoloper."
              >
                Web Devoloper.
              </div>
            </div>
          </div>
          <div
            className={`portfolio-mid pe-2 portfolio-img d-flex justify-content-center align-items-center relative`}
            id="portfolio-img"
          >
            <img
              className={`${
                darkTheme ? "dark-theme-border" : "light-theme-border"
              } cover-photo `}
              src="images/portfolio.jpg"
              alt=""
            />
            {/* <img
              className="social-img-1 social-img"
              src="/images/linkedin.png"
              alt=""
            />
            <img
              className="social-img-2 social-img"
              src="/images/instagram.png"
              alt=""
            />
            <img
              className="social-img-3 social-img"
              src="/images/github.png"
              alt=""
            />
            <img
              className="social-img-4 social-img"
              src="/images/forkyou.ico"
              alt=""
            /> */}
          </div>
        </div>
        {/* <div className="w-full contact-form">
          <ContactForm />
        </div> */}
      </section>

      <section className="portfolio-wrapper d-flex">
        <div className="portfolio-section2 position-relative d-flex flex-column justify-content-center align-items-center ">
          <div id="target" className="expert text-center">
            An Expert in web ani<span className="text-m">m</span>ations
          </div>
        </div>

        <div className="portfolio-section3 px-md-5 position-relative d-flex align-items-center">
          <div className="box-2 p-5 d-flex justify-content-center align-items-center">
            2D
          </div>
          <div className="box-3 p-5 d-flex position-absolute justify-content-center align-items-center">
            3D
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
