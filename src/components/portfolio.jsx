import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../css/portfolio.css";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/all";
import { RubiksCubeModel } from "../models/Rubiks-cube";
import { TeseractModel } from "../models/Teseract";
import { Perf } from "r3f-perf";
import { PlaneModel } from "../models/Plane";

const Portfolio = ({ isMobile }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [cubeRef, setCubeRef] = useState();
  const [planeRef, setPlaneRef] = useState();
  const radian = Math.PI / 180;
  const windowHeight = window.innerHeight
  const planeCanvas = useRef()

  useEffect(() => {
    gsap.to(".portfolio-img", {
      y: 0,
      duration: 1,
      ease: "back",
      opacity: 1,
    });

    gsap.to(".portfolio-wrapper", {
      x: `${isMobile ? "-150vw" : "-100vw"}`,
      scrub: 1,
      scrollTrigger: {
        trigger: ".portfolio-wrapper",
        start: "top top",
        end: `+=${isMobile ? window.innerWidth * 1.5 : window.innerWidth * 1.5}`,
        pin: true,
        scrub: 0.2,
      },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-section2",
        start: `${isMobile ? "left left" : "bottom top"}`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers:true
      },
    });

    tl.to(".cube-model", {
      x: 0,
      y: 0,
      opacity: 1,
    });

    if (cubeRef) {
      tl.to(
        cubeRef.current.rotation,
        {
          x: 0,
          y: radian * 360,
          z: radian * 360,
        },
        0
      );
    }
  }, [cubeRef])

  //? --------------------- plane -animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-wrapper",
        start: `${isMobile ? "left left" : "top bottom"}`,
        end: `+=${windowHeight}`,
        scrub: 1,
      }
    });

    tl.to(".plane-model", {
      x: 0,
    });

    if (planeRef) {
      tl.to(
        planeRef.current.rotation,
        {
          y: radian * (80),
          z: 0,
        },
        0
      )

      // tl.to(planeCanvas.current.fov, {
        
      // })
    }
  }, [cubeRef]);


  return (
    <div className="portfolio-main">
      <div className="portfolio d-flex justify-content-around align-items-center">
        <div className="portfolio-left d-flex ps-2 ">
          <div className="portfolio-desc d-flex flex-column ">
            <div className="desc-1" id="portfolio-desc" data-text="Hi i'm">
              Hi i'm <span className="name">Lokesh</span>
            </div>
            <div
              className="desc-2"
              id="portfolio-desc"
              data-text="A full stack"
            >
              A full stack
            </div>
            <div
              className="desc-3"
              id="portfolio-desc"
              data-text="Web Devoloper."
            >
              Web Devoloper.
            </div>
          </div>
        </div>
        <div
          className="portfolio-right pe-2 portfolio-img d-flex justify-content-center align-items-center"
          id="portfolio-img"
        >
          <img src="portfolio1.png" alt="" />
        </div>
      </div>

      {/* <div className="portfolio-wrapper d-flex">
        <div className="portfolio-section2 d-flex flex-column justify-content-center align-items-center">
          <div className="plane-model">
          <Canvas camera={{ fov: 20, position: [0, 0, 5] }}>
              <ambientLight intensity={2} />
              <PlaneModel setPlaneRef={setPlaneRef} />
            </Canvas>
          </div>
          <div className="expert">An Expert in web animations</div>
        </div>

        <div className="portfolio-section3 d-flex justify-content-center align-items-center">
          <div className="cube-model">
            <Canvas ref={planeCanvas} camera={{ fov: 60, position: [0, 3, 25] }}>
              <ambientLight intensity={2} />
              <directionalLight position={[0, 3, 10]} />
              <RubiksCubeModel setCubeRef={setCubeRef} />
            </Canvas>
          </div>
          <div>3D</div>
        </div>

        <div className="portfolio-section4 d-flex flex-column justify-content-center align-items-center">
          <div className="">4D???</div>
          <div className="model-2">
            <Canvas camera={{ fov: 60, position: [0, 3, 60] }}>
              <ambientLight intensity={5} />
              <directionalLight position={[0, 3, 10]} />
              <Perf position="top-right" />
              <TeseractModel />
            </Canvas>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
