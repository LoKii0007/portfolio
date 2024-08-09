import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import '../css/portfolio.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ScrollTrigger } from 'gsap/all';
import { RubiksCubeModel } from '../models/Rubiks-cube';


const Portfolio = ({isMobile}) => {
    gsap.registerPlugin(ScrollTrigger)
    const [cubeRef, setCubeRef] = useState()
    const radian = Math.PI / 180

    useEffect(() => {

        gsap.to(".portfolio-img", {
            y: 0,
            duration: 1,
            ease: "back",
            opacity: 1
        })

        gsap.to('.portfolio-wrapper', {
            x: `${isMobile?'-300vw':'-150vw'}`,
            scrub: 1,
            scrollTrigger: {
                trigger: '.portfolio-main',
                start: 'top top',
                end: `+=${isMobile?window.innerWidth * 3:window.innerWidth * 1.5}`,
                pin: true,
                scrub: 0.2
            }
        })

    }, [])

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.portfolio-section2',
                start: `${isMobile?'left left':'bottom top'}`,
                end: `+=${window.innerWidth}`,
                scrub: 1,
                // markers:true
            }
        })

        tl.to('.cube-model', {
            x:0, 
            y:0,
            opacity:1
        })

        if (cubeRef) {
            tl.to(cubeRef.current.rotation, {
                x: 0,
                y: radian * 360,
                z: radian * 360
            },0)
        }
    }, [cubeRef])

    return (
        <div className='portfolio-main' >
            <div className="portfolio-wrapper d-flex">
            <div className="portfolio d-flex justify-content-around align-items-center">
                <div className="portfolio-left d-flex ps-2 ">
                    <div className="portfolio-desc d-flex flex-column ">
                        <div className='desc-1' id='portfolio-desc' data-text="Hi i'm">
                            Hi i'm <span className='name'>Lokesh</span>
                        </div>
                        <div className='desc-2' id='portfolio-desc' data-text="A full stack">
                            A full stack
                        </div>
                        <div className='desc-3' id='portfolio-desc' data-text="devoloper">
                            devoloper
                        </div>
                    </div>
                </div>
                <div className="portfolio-right pe-2 portfolio-img d-flex justify-content-center align-items-center" id='portfolio-img'>
                    {/* <div className="model">
                        <Canvas>
                            <OrbitControls enableZoom={false} />
                            <Stage enviornment='city' >
                                <Model/>
                            </Stage>
                        </Canvas>
                    </div> */}
                    <img src="portfolio1.png" alt="" />
                </div>
            </div>
            <div className="portfolio-section2 d-flex justify-content-center align-items-center">
                I CAN CREATE WEBSITES IN 2D
            </div>
            <div className="portfolio-section3 d-flex justify-content-center align-items-center">
                <div className="cube-model">
                    <Canvas camera={{ fov: 60, position: [0, 3, 25] }} >
                        <OrbitControls enableZoom={false} touches={false} autoRotate={false} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[0, 3, 10]} />
                        <RubiksCubeModel setCubeRef={setCubeRef} />
                    </Canvas>
                </div>
                <div>3D</div>
            </div>
            <div className="portfolio-section4 d-flex justify-content-center align-items-center">
                4D???
            </div>
            </div>
        </div>
    )
}

export default Portfolio
