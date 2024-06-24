import { ScrollTrigger } from 'gsap/all';
import '../css/techstack.css'
import gsap from 'gsap';
import { useEffect } from 'react';

function TechStack() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('.frontend', {
      width: '100%',
      y: '-20vh',
      scrollTrigger: {
        trigger: '.frontend',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
        // markers : true
      }
    })
    gsap.to('.backend-1', {
      width: '100%',
      y: '-10vh',
      scrollTrigger: {
        trigger: '.backend-1',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
        // markers : true
      }
    })
    gsap.to('.backend-2', {
      width: '100%',
      y: '10vh',
      scrollTrigger: {
        trigger: '.backend-2',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
        // markers : true
      }
    })
    gsap.to('.devops', {
      width: '100%',
      y: '20vh',
      scrollTrigger: {
        trigger: '.devops',
        start: 'top bottom',
        end: 'top 20%',
        scrub: 1,
        // markers : true
      }
    })
  })


  return (
    <>
      <div className="techstack position-relative d-flex align-items-center justify-content-center">
        <div className="stack px-5 py-2 rounded-pill">
          MY TECHSTACK
        </div>
        <div className="skills position-absolute d-flex flex-column align-items-center justify-content-center">

          <div className="frontend d-flex justify-content-center align-items-center">
            <div className="front-1 d-flex align-items-center justify-content-around">
              <div className="node back tech-icon rounded-pill">
                Node.js
              </div>
              <div className="react front ">
                <img className='icon-img' src="/react.png" alt="" />
              </div>
            </div>
            <div className="front-2 d-flex align-items-center justify-content-around">
              <div className="next front">
                <img className='icon-img' src="/next.png" alt="" />
                {/* Next.js */}
              </div>
              <div className="three front rounded-pill tech-icon ">
                Three.js
              </div>
            </div>
          </div>

          <div className="backend-1  d-flex justify-content-around align-items-center">
            <div className="pub back tech-icon rounded-pill">
              Pub/Subs
            </div>
            <div className="ws back tech-icon rounded-pill">
              {/* <img className='icon-img' src="/websocket.png" alt="" /> */}
              Websockets
            </div>
          </div>

          <div className="backend-2  d-flex justify-content-around align-items-center">
            <div className="gsap front rounded-pill tech-icon">
              GSAP
            </div>
            <div className="redis back tech-icon rounded-pill">
              {/* <img className='icon-img' src="/redis.png" alt="" /> */}
              Redis
            </div>
          </div>
          <div className="devops d-flex justify-content-center align-items-center">
            <div className="front-1 d-flex align-items-center justify-content-around">
              <div className="docker dev tech-icon rounded-pill">
                {/* <img className='icon-img' src="/docker.png" alt="" /> */}
                Docker
              </div>
              <div className="prometheus dev ">
                <img className='icon-img' src="/prometheus.png" alt="" />
              </div>
            </div>
            <div className="front-2 d-flex align-items-center justify-content-around">
              <div className="grafana dev ">
                <img className='icon-img' src="/grafana.png" alt="" />
              </div>
              <div className="scaling dev tech-icon rounded-pill">
                scaling
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;

{/* <div className="react-model">
                <Canvas camera={{ fov: 30, position: [0, 0, 15] }} >
                  <OrbitControls enableZoom={false} autoRotate={true} />
                  <ambientLight intensity={1} />
                  <directionalLight position={[3, 2, 1]} />
                  <ReactModel/>
                </Canvas>
              </div> */}