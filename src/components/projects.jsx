import React, { useEffect } from 'react'
import '../css/projects.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Projects() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    const pinnedSections = gsap.utils.toArray('.pinned')

    pinnedSections.forEach((section, index, sections) => {

      let img =  section.querySelector('img')

      img.onload = ()=>{
        let pinHeight = section.offsetHeight
        // console.log('pin Height', pinHeight)

        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${pinHeight*(sections.length-index)}` ,
            pin: true,
            pinSpacing: false,
            scrub: 1
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
  }, [])

  return (
    <>
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <div className="work-project py-5">
          Work
        </div>

        <div className="pinned pr pr-1">
          <img className='img' src="/fotf.png" alt="" />
        </div>

        <div className="personal-project py-5">
          Personal Projects
        </div>

        <div className="pinned pr pr-2">
          <img className='img' src="/ydmc.png" alt="" />
        </div>
        <div className="pinned pr pr-3">
          <img className='img' src="/ydmc.png" alt="" />
        </div>
        <div className="scroll pr pr-4">
          <img className='img' src="/ydmc.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Projects