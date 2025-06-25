import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useContext } from "react";
import { useGSAP } from "@gsap/react";
import { GlobalContext } from "../context/globalContext";

import "../css/section3.css";

function Section3() {
  gsap.registerPlugin(ScrollTrigger);
  const { darkTheme } = useContext(GlobalContext);

  useGSAP(() => {

    //# --------------------- animation -------------------------------

    gsap.to(".word-text, .inner-circle, .middle-circle, .outer-circle", {
      rotation: 0,
      scrollTrigger: {
        trigger: ".skills",
        start: "top bottom",
        end: "+=700px",
        scrub: 1,
      },
    });

    //# ---------------------pining conatiner -------------------------------

    gsap.to(".word", {
      scrollTrigger: {
        trigger: ".word",
        start: "top top",
        end: `+=1000px`,
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div
        className={` ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } word d-flex justify-content-center align-items-center`}
      >
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg dark-theme-text"
              : "light-theme-bg light-theme-text"
          } word-text`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg-light dark-theme-text"
              : "light-theme-bg-light light-theme-tex"
          } outer-circle d-flex justify-content-center align-items-center position-absolute`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg dark-theme-text"
              : "light-theme-bg light-theme-tex"
          } middle-circle d-flex justify-content-center align-items-center position-absolute`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg-light dark-theme-text"
              : "light-theme-bg-light light-theme-tex"
          } inner-circle d-flex justify-content-center align-items-center position-absolute`}
        >
          Build clean. <br />
          Ship fast.
        </div>
      </div>
    </>
  );
}

export default Section3;
