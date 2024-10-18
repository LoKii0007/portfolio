import React, { useEffect, useState } from "react";
import "../css/projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { projectsList } from "../../public/content/data";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const [img, setImg] = useState(false);

  const {darkTheme} = useContext(GlobalContext)


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

    const pinnedSections = gsap.utils.toArray(".pinned");

    pinnedSections.forEach((section, index, sections) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 15%",
          end: `+=${(window.innerHeight*0.8)* (sections.length - index)}`,
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

    // function responsive() {
    //   if (window.innerWidth < 600) {
    //     setImg(true);
    //   } else {
    //     setImg(false);
    //   }
    // }
    // responsive();
    // window.addEventListener("resize", responsive);
    // return () => {
    //   window.removeEventListener("resize", responsive);
    // };
  }, []);

  return (
    <>
      <div id="projects" className={` ${darkTheme?'dark-theme-bg dark-theme-text':'light-theme-bg light-theme-text'} projects d-flex flex-column justify-content-center align-items-center`}>
        <div className={`work-project d-flex flex-column justify-content-center align-items-center`}>
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
          <div key={index} className={`${projectsList.length-1 === index ? 'scroll' : 'pinned'} ${darkTheme?'dark-theme-bg':'light-theme-bg'} project-wrapper d-flex flex-column align-items-center justify-content-center`}>
            <div className={` ${darkTheme?'dark-theme-bg dark-theme-text light-theme-shadow dark-theme-gradient ':'light-theme-bg light-theme-text light-theme-shadow light-theme-gradient'} project-card gap-3 d-flex project-${index+1} p-3`}>
              <div className="project-left d-flex flex-column justify-content-between">
                <div className="left-top p-3">
                  <div className="project-name pb-4">{data.name}</div>
                  <div className="project-desc d-flex flex-column">
                    {data.points.map((point, index)=>(
                      <div key={index} className="pb-2">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
                  <div className="button-left">Open case</div>
                  <div className="button-right">icon</div>
                </div>
              </div>
              <div className="project-right d-flex justify-content-center align-items-center">
                <Link to={data.link} target="blank">
                  <img
                    className="img project-img"
                    src={`/${img ? data.mobileImage : data.desktopImage}`}
                    alt="image"
                  />
                </Link>
              </div>
            </div>
            { projectsList.length-1 !== index && <div style={{width:'100%'}} className={`${darkTheme?'dark-theme-bg':'light-theme-bg'} pb-5`} ></div> }
          </div>
        ))}

      </div>
    </>
  );
}

export default Projects;
