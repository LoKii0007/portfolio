import "../css/portfolio.css";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { gsap } from "../hooks/gsapSetup";
import Section3 from "./Section3";

const Portfolio = () => {
  const { darkTheme } = useContext(GlobalContext);

  //? onl load
  useGSAP(() => {
    gsap.to(".portfolio-img", {
      y: 0,
      duration: 1,
      ease: "back",
      opacity: 1,
    });

  }, []);

  return (
    <>
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
        </section>
      </div>
      <Section3 />
    </>
  );
};

export default Portfolio;
