import { useEffect, useState } from "react";
import "../css/projects.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { projectsList } from "../constants/projectData";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { gsap} from "../hooks/gsapSetup";


function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const { darkTheme } = useContext(GlobalContext);

  function responsive() {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    responsive();
    window.addEventListener("resize", responsive);
    return () => {
      window.removeEventListener("resize", responsive);
    };
  }, []);

  useGSAP(() => {
    const height = window.innerHeight;

    gsap.to(".work-project", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".work-project",
        start: "top top",
        end: `+=${height}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });

    if (!isMobile) {
      const pinnedSections = gsap.utils.toArray(".pinned");

      pinnedSections.forEach((section, index, sections) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: `+=${window.innerHeight * 0.8 * (sections.length - index)}`,
            pin: true,
            scrub: 1,
          },
        });

        gsap.to(section, {
          scale: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: `+=400`,
            scrub: 1,
          },
        });
      });
    }
  }, [isMobile]);

  return (
    <>
      <div
        id="projects"
        className={` ${
          darkTheme
            ? "dark-theme-bg dark-theme-text"
            : "light-theme-bg light-theme-text"
        } projects d-flex flex-column justify-content-center align-items-center`}
      >
        <div
          className={`work-project d-flex flex-column justify-content-center align-items-center`}
        >
          <div className="main d-flex">
            <div className="main-left">
              <div style={{ width: "100%", textAlign: "end" }}>SOME</div>{" "}
              <div>SELECTED</div>
            </div>
            <div className="main-middle">PROJECTS</div>
            <div className="main-right">
              WEB <br />
              DEVOLOPMENT
            </div>
          </div>
          <div className="text-center main-bottom">
            CUSTOMER PROJECTS , PERSONAL PROJECTS <br />
            SOME RESEARCH AND PLAYGROUND.
          </div>
        </div>

        {projectsList?.map((data, index) => (
          <div
            key={index}
            className={`${
              projectsList.length - 1 === index ? "scroll" : "pinned"
            } ${
              darkTheme ? "dark-theme-bg" : "light-theme-bg"
            } project-wrapper d-flex flex-column align-items-center justify-content-center`}
          >
            <div
              className={` ${
                darkTheme
                  ? "dark-theme-bg dark-theme-text light-theme-shadow dark-theme-gradient "
                  : "light-theme-bg light-theme-text light-theme-shadow light-theme-gradient"
              } project-card gap-3 d-flex project-${index + 1} p-3`}
            >
              <div className="project-left d-flex flex-column justify-content-between">
                <div className="left-top p-3">
                  <div className="project-name pb-4">{data.name}</div>
                  <div className="project-desc d-flex flex-column">
                    {data.points.map((point, index) => (
                      <div key={index} className="pb-2">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <Link target="_blank" to={data.link} className={`button-left`}>
                  <button
                    className={`${
                      darkTheme
                        ? "dark-theme-bg dark-theme-text"
                        : "light-theme-bg light-theme-text"
                    } project-button rounded-pill d-flex justify-content-between align-items-center p-3 border-0`}
                  >
                    <div className="button-left">Open case</div>
                    <div className="button-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="project-right d-flex justify-content-center align-items-center">
                <Link to={data.link} target="blank">
                  <img
                    className="img project-img"
                    src={`/${data.desktopImage}`}
                    alt="image"
                  />
                </Link>
              </div>
            </div>
            {projectsList.length - 1 !== index && (
              <div
                style={{ width: "100%" }}
                className={`${
                  darkTheme ? "dark-theme-bg" : "light-theme-bg"
                } pb-5`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
