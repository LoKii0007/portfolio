import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../css/portfolio.css";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";
import { RubiksCubeModel } from "../models/Rubiks-cube";
import { TeseractModel } from "../models/Teseract";
import { Perf } from "r3f-perf";
import { PlaneModel } from "../models/Plane";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import ContactForm from "./contactForm";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const Portfolio = ({ isMobile }) => {
  gsap.registerPlugin(ScrollTrigger);

  const [cubeRef, setCubeRef] = useState();
  const [planeRef, setPlaneRef] = useState();
  const radian = Math.PI / 180;
  const windowHeight = window.innerHeight;
  const planeCanvas = useRef();
  const { darkTheme } = useContext(GlobalContext);

  useGSAP(() => {
    const img = document.querySelector(".portfolio-img");

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
        end: `+=${isMobile ? window.innerWidth*0.5 : window.innerWidth * 1}`,
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

  // ---------------------
  // cube-animation
  // ----------------------

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

    tl.to('.box-3', {
      scale : 1,
      x : '20vw'
    })

    // tl.to(".cube-model", {
    //   x: "20vw",
    //   opacity:1,
    // })

    // if (cubeRef) {
    //   tl.to(
    //     cubeRef.current.rotation,
    //     {
    //       x: radian * 360,
    //       y: 0,
    //       z: 0,
    //     },
    //     0
    //   );

    //   tl.to(
    //     cubeRef.current.position,
    //     {
    //       x: -2,
    //       y:-2,
    //       z:0
    //     },
    //     0
    //   );
    // }
  }, [cubeRef]);

  // ---------------------
  // plane -animation
  // ----------------------
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-wrapper",
        start: `${isMobile ? "left left" : "top bottom"}`,
        end: `+=${windowHeight}`,
        scrub: 1,
      },
    });

    tl.to(".plane-model", {
      x: 0,
      y:'-20vh'
    });

    if (planeRef) {
      tl.to(
        planeRef.current.rotation,
        {
          x:0,
          y: radian * 80,
          z: 0,
        },
        0
      );
    }
  }, [cubeRef]);

  return (
    <div
      className={`portfolio-main ${
        darkTheme ? "dark-theme-bg" : "light-theme-bg"
      } `}
    >
      <section className="portfolio d-flex">
        <div className="portfolio-section d-flex justify-content-around align-items-center">
          <div className="portfolio-left d-flex ps-2 ">
            <div className={` portfolio-desc d-flex flex-column `}>
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
            className={`portfolio-mid pe-2 portfolio-img d-flex justify-content-center align-items-center`}
            id="portfolio-img"
          >
            <img
              className={darkTheme ? "dark-theme-border" : "light-theme-border"}
              src="images/portfolio1.png"
              alt=""
            />
          </div>
        </div>
        <div className="portfolio-right">{/* <ContactForm /> */}</div>
      </section>

      <section className="portfolio-wrapper d-flex">
        <div className="portfolio-section2 position-relative d-flex flex-column justify-content-center align-items-center ">
          {/* <div className="plane-model position-fixed">
            <Canvas camera={{ fov: 20, position: [0, 0, 5] }}>
              <ambientLight intensity={2} />
              <PlaneModel setPlaneRef={setPlaneRef} />
            </Canvas>
          </div> */}
          <div
            id="target"
            // className={`${
            //   darkTheme ? "dark-theme-text" : "light-theme-text"
            // } expert text-center`}
            className="expert text-center"
          >
            An Expert in web ani<span className="text-m">m</span>ations
          </div>
        </div>

        <div className="portfolio-section3 px-md-5 position-relative d-flex align-items-center">
          <div className="box-2 p-5 justify-content-center align-items-center">2D</div>
          {/* <div className="cube-model position-absolute">
            <Canvas
              ref={planeCanvas}
              camera={{ fov: 60, position: [0, 3, 15] }}
            >
              <ambientLight intensity={2} />
              <directionalLight position={[0, 3, 10]} />
              <RubiksCubeModel setCubeRef={setCubeRef} />
            </Canvas>
          </div> */}
          <div className="box-3 p-5 position-absolute justify-content-center align-items-center">3D</div>
          
        </div>

        {/* <div className="portfolio-section4 d-flex flex-column justify-content-center align-items-center">
          <div className="">4D???</div>
          <div className="model-2">
            <Canvas camera={{ fov: 60, position: [0, 3, 60] }}>
              <ambientLight intensity={5} />
              <directionalLight position={[0, 3, 10]} />
              <Perf position="top-right" />
              <TeseractModel />
            </Canvas>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Portfolio;
