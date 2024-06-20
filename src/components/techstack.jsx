import { ScrollTrigger } from 'gsap/all';
import '../css/techstack.css'
import gsap from 'gsap';
import { useEffect } from 'react';

function TechStack() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
     gsap.to('.frontend', {
      width:'100%',
      y : '-25vh',
      scrollTrigger:{
        trigger:'.techstack',
        start:'center bottom',
        end:'top top',
        scrub : true,
        // markers : true
      }
     })
     gsap.to('.backend', {
      width:'100%',
      scrollTrigger:{
        trigger:'.techstack',
        start:'center bottom',
        end:'top top',
        scrub : true,
        // markers : true
      }
     })
     gsap.to('.devops', {
      width:'100%',
      y : '25vh',
      scrollTrigger:{
        trigger:'.techstack',
        start:'center bottom',
        end:'top top',
        scrub : true,
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
          <div className="frontend d-flex justify-content-evenly">
            <div className="next front mx-5">
              <img className='icon-img' src="/next.png" alt="" />
            </div>
            <div className="react front mx-5">
              <img className='icon-img' src="/react.png" alt="" />
            </div>
            <div className="gsap front mx-5">
              <img className='icon-img' src="/gsap.png" alt="" />
            </div>
            <div className="three front mx-5">
              3d model
            </div>
          </div>
          <div className="backend  d-flex justify-content-between">
            <div className="node back mx-5">
              <img className='icon-img' src="/node.png" alt="" />
            </div>
            <div className="express back mx-5">
              <img className='icon-img' src="/express.png" alt="" />
            </div>
            <div className="ws back mx-5">
              <img className='icon-img' src="/websocket.png" alt="" />
            </div>
            <div className="redis back mx-5">
              <img className='icon-img' src="/redis.png" alt="" />
            </div>
            <div className="pub back mx-5">
              Pub/Subs
            </div>
          </div>
          <div className="devops d-flex justify-content-evenly">
            <div className="prometheus dev mx-5">
              <img className='icon-img' src="/prometheus.png" alt="" />
            </div>
            <div className="docker dev mx-5">
              <img className='icon-img' src="/docker.png" alt="" />
            </div>
            <div className="grafana dev mx-5">
              <img className='icon-img' src="/grafana.png" alt="" />
            </div>
            <div className="scaling dev mx-5">
              scaling
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;