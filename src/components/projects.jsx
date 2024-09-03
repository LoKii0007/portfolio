import React, { useEffect, useState } from "react";
import "../css/projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const [img, setImg] = useState(false);

  useEffect(() => {
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

    // pinnedSections.forEach((section, index, sections) => {
    //   gsap.to(section, {
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "top 15%",
    //       end: `+=${(window.innerHeight*0.8)* (sections.length - index)}`,
    //       pin: true,
    //       scrub: 1,
    //     },
    //   });

    //   gsap.to(section, {
    //     scale: 0.5,
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "top 15%",
    //       end: `+=400`,
    //       scrub: 1,
    //     },
    //   });
    // });

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
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <div className="work-project d-flex flex-column justify-content-center align-items-center">
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

        <div className="pinned project-wrapper d-flex justify-content-center">
          <div className="project-card gap-3 d-flex project-1 p-3 mb-5">
          <div className="project-left d-flex flex-column justify-content-between">
            <div className="left-top p-3">
              <div className="project-name pb-4">Fotf</div>
              <div className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati suscipit incidunt dolor nulla magni neque.</div>
            </div>
            <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
              <div className="button-left">Open case</div>
              <div className="button-right">icon</div>
            </div>
          </div>
          <div className="project-right d-flex justify-content-center align-items-center">
            {/* <Link to="https://fotf-frontend.vercel.app" target="blank"> */}
            <img
              className="img project-img"
              src={`/${img ? "fotf-600.jpg" : "fotf.png"}`}
              alt="image"
            />
            {/* </Link> */}
          </div>
          </div>
        </div>

        <div className="pinned project-wrapper d-flex justify-content-center">
        <div className="project-card mb-5 gap-3 d-flex project-2 p-3">
          <div className="project-left d-flex flex-column justify-content-between">
            <div className="left-top p-3">
              <div className="project-name pb-4">ydmc</div>
              <div className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio in, impedit voluptatum sequi libero.</div>
            </div>
            <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
              <div className="button-left">Open case</div>
              <div className="button-right">icon</div>
            </div>
          </div>
          <div className="project-right d-flex justify-content-center align-items-center">
            <Link to="https://ydmc.vercel.app" target="blank">
              <img
                className="img project-img"
                src={`/${img ? "ydmc-600.jpg" : "ydmc.png"}`}
                alt="image"
              />
            </Link>
          </div>
        </div>
        </div>

        <div className="pinned project-wrapper d-flex justify-content-center">
        <div className="project-card mb-5 gap-3 d-flex project-3 p-3">
          <div className="project-left d-flex flex-column justify-content-between">
            <div className="left-top p-3">
              <div className="project-name pb-4">WeChat</div>
              <div className="project-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos soluta odio consequuntur delectus quaerat natus.</div>
            </div>
            <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
              <div className="button-left">Open case</div>
              <div className="button-right">icon</div>
            </div>
          </div>
          <div className="project-right d-flex justify-content-center align-items-center">
            <Link to="https://we-chat-frontend-opal.vercel.app" target="blank">
              <img
                className="img project-img"
                src={`/${img ? "wechat-600.jpg" : "wechat.png"}`}
                alt="image"
              />
            </Link>
          </div>
        </div>
        </div>

        <div className="pinned project-wrapper d-flex justify-content-center">
        <div className=" project-card mb-5 gap-3 d-flex project-5 p-3">
          <div className="project-left d-flex flex-column justify-content-between">
            <div className="left-top p-3">
              <div className="project-name pb-4">Xr central</div>
              <div className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quos omnis recusandae quaerat voluptatum iste.</div>
            </div>
            <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
              <div className="button-left">Open case</div>
              <div className="button-right">icon</div>
            </div>
          </div>
          <div className="project-right d-flex justify-content-center align-items-center">
            <Link to="https://login-auth-54c3e.web.app/" target="blank">
              <img
                className="img project-img"
                src={`/${img ? "xrc-600.jpg" : "xrc.png"}`}
                alt="image"
              />
            </Link>
          </div>
        </div>
        </div>

        <div className="scroll project-wrapper d-flex justify-content-center">
        <div className="project-card mb-5 gap-3 d-flex project-4 p-3">
          <div className="project-left d-flex flex-column justify-content-between">
            <div className="left-top p-3">
              <div className="project-name pb-4">Savor Heaven</div>
              <div className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse, molestiae modi eligendi itaque omnis?</div>
            </div>
            <div className="project-button rounded-pill d-flex justify-content-between align-items-center p-3">
              <div className="button-left">Open case</div>
              <div className="button-right">icon</div>
            </div>
          </div>
          <div className="project-right d-flex justify-content-center align-items-center">
            <Link to="https://savor-haven.vercel.app" target="blank">
              <img
                className="img project-img"
                src={`/${img ? "savor-600.png" : "savor.png"}`}
                alt="image"
              />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
