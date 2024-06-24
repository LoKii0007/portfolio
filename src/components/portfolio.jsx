import React, { useEffect } from 'react'
import gsap from 'gsap';
import '../css/portfolio.css'
import { Canvas } from '@react-three/fiber';
import { Circle, MeshDistortMaterial, OrbitControls, Ring, Sphere, Stage } from '@react-three/drei';


const Portfolio = () => {

    useEffect(() => {

        gsap.to(".portfolio-img", {
            y: 0,
            duration: 1,
            ease: "back",
            opacity: 1
        })
    }, [])

    return (
        <>
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
                        {/* <div id='portfolio-desc'>I make <span className='name'>Creative</span> web applications</div> */}
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

        </>
    )
}

export default Portfolio
