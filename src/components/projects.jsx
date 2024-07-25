import React, { useEffect, useState } from 'react'
import '../css/projects.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

function Projects() {

  gsap.registerPlugin(ScrollTrigger)
  const [img, setImg] = useState(false)

  useEffect(() => {

    const height = window.innerHeight

    gsap.to('.work-project', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.work-project',
        start: "top top",
        end: `+=${height}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        // markers:true
      }
    })

    const pinnedSections = gsap.utils.toArray('.pinned')
    pinnedSections.forEach((section, index, sections) => {

      let img = section.querySelector('img')
      img.onload = () => {
        let pinHeight = section.offsetHeight

        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${pinHeight * (sections.length - index)}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            // markers:true
          }
        })

        gsap.to(img, {
          scale: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${pinHeight}`,
            scrub: 1,
          }
        }
        )
      }

    })

    function responsive() {
      if (window.innerWidth < 600) {
        setImg(true)
      } else {
        setImg(false)
      }
    }
    responsive()
    window.addEventListener('resize', responsive)
    return () => {
      window.removeEventListener('resize', responsive)
    }

  }, [])

  return (
    <>
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <div className="work-project d-flex flex-column justify-content-center align-items-center">
          <div className="main d-flex">
            <div className="main-left"><div style={{ width: "100%", textAlign: "end" }} >SOME</div> <div>SELECTED</div></div>
            <div className="main-middle">PROJECTS</div>
            <div className="main-right">WEB <br />DEVOLOPMENT<br />UI & UX</div>
          </div>
          <div className="text-center main-bottom">
            CUSTOMER PROJECTS , PERSONAL PROJECTS <br />
            SOME RESEARCH AND PLAYGROUND.
          </div>
        </div>

        <div className="pinned project project-1 py-5">
          <Link className='position-relative d-flex justify-content-center align-items-center' to='https://fotf-frontend.vercel.app' target='blank' >
            <img className='img ' src={`/${img ? 'fotf-600.jpg' : 'fotf.png'}`} alt="image" />
          </Link>
        </div>
        <div className="pinned project project-2 py-5">
          <Link to='https://ydmc.vercel.app' target='blank'><img className='img' src={`/${img ? 'ydmc-600.jpg' : 'ydmc.png'}`} alt="image" /></Link>
        </div>
        <div className="pinned project project-3 py-5">
          <Link to='https://we-chat-frontend-opal.vercel.app' target='blank'><img className='img' src={`/${img ? 'wechat-600.jpg' : 'wechat.png'}`} alt="image" /></Link>
        </div>
        <div className="pinned project project-5 py-5">
          <Link to='https://login-auth-54c3e.web.app/' target='blank'><img className='img' src={`/${img ? 'xrc-600.jpg' : 'xrc.png'}`} alt="image" /></Link>
        </div>
        <div className="scroll project project-4 py-5">
          <Link to='https://savor-haven.vercel.app' target='blank'><img className='img' src={`/${img ? 'savor-600.png' : 'savor.png'}`} alt="image" /></Link>
        </div>
      </div>
    </>
  )
}

export default Projects