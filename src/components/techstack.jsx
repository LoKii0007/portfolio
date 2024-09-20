import { ScrollTrigger } from "gsap/all";
import "../css/techstack.css";
import gsap from "gsap";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import SkillBtn from "./skillBtn";

function TechStack() {
  gsap.registerPlugin(ScrollTrigger);
  const { darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    gsap.to(".frontend", {
      width: "100%",
      y: "-20vh",
      scrollTrigger: {
        trigger: ".frontend",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".backend-1", {
      width: "100%",
      y: "-10vh",
      scrollTrigger: {
        trigger: ".backend-1",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".backend-2", {
      width: "100%",
      y: "10vh",
      scrollTrigger: {
        trigger: ".backend-2",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".devops", {
      width: "100%",
      y: "20vh",
      scrollTrigger: {
        trigger: ".devops",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
  });

  return (
    <>
      <div id="skills"
        className={` ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } techstack position-relative d-flex align-items-center justify-content-center`}
      >
        <div className={`${darkTheme?'light-theme-bg light-theme-text':'dark-theme-bg dark-theme-text'} rounded-pill px-5 py-2`}>MY TECHSTACK</div>
        <div className="skills position-absolute d-flex flex-column align-items-center justify-content-center">
          <div className="frontend d-flex justify-content-center align-items-center">
            <div className="front-1 d-flex align-items-center justify-content-around">
              <SkillBtn name="Node.js" />
              <div className="react front ">
                <img className="icon-img" src="/images/react.png" alt="" />
              </div>
            </div>
            <div className="front-2 d-flex align-items-center justify-content-around">
              <div className="next front">
                <img className="icon-img" src="/images/next.png" alt="" />
                {/* Next.js */}
              </div>
              <SkillBtn name="Three.js" />
            </div>
          </div>

          <div className="backend-1  d-flex justify-content-around align-items-center">
            <SkillBtn name="Pub/Subs" />
            <SkillBtn name="Websockets" />
          </div>

          <div className="backend-2  d-flex justify-content-around align-items-center">
            <SkillBtn name="GSAP" />
            <SkillBtn name="Redis" />
          </div>
          <div className="devops d-flex justify-content-center align-items-center">
            <div className="front-1 d-flex align-items-center justify-content-around">
              <SkillBtn name="docker" />
              <div className="prometheus dev ">
                <img className="icon-img" src="/images/prometheus.png" alt="" />
              </div>
            </div>
            <div className="front-2 d-flex align-items-center justify-content-around">
              <div className="grafana dev ">
                <img className="icon-img" src="/images/grafana.png" alt="" />
              </div>
              <SkillBtn name="Scaling" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
