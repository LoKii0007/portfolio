import React, { useEffect, useState } from 'react'
import '../css/projects.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Projects() {

  gsap.registerPlugin(ScrollTrigger)
  const [img, setImg] = useState(false)

  useEffect(() => {

    const pinnedSections = gsap.utils.toArray('.pinned')
    pinnedSections.forEach((section, index, sections) => {

      let img =  section.querySelector('img')
      img.onload = ()=>{
        let pinHeight = section.offsetHeight
        
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${pinHeight*(sections.length-index)}` ,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            markers:true
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

    function responsive(){
      if(window.innerWidth <600 ){
           setImg(true)
      }else{
        setImg(false)
      }
    }
    responsive()
    window.addEventListener('resize', responsive)
    return()=>{
      window.removeEventListener('resize', responsive)
    }

  }, [])

  return (
    <>
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <div className="work-project pt-5">
          Work
        </div>

        <div className="pinned pr wr pr-1 py-5">
          <img className='img' src={`/${img?'fotf-600.jpg':'fotf.png'}`} alt="image" />
        </div>

        <div className="personal-project">
          Personal Projects
        </div>

        <div className="pinned pr pr-2 py-5">
          <img className='img' src={`/${img?'ydmc-600.jpg':'ydmc.png'}`} alt="image" />
        </div>
        <div className="pinned pr pr-3 py-5">
          <img className='img' src={`/${img?'fotf-600.jpg':'wechat.png'}`} alt="image" />
        </div>
        <div className="scroll pr pr-4 py-5">
          <img className='img'  src={`/${img?'savor-600.png':'savor.png'}`} alt="image" />
        </div>
      </div>
    </>
  )
}

export default Projects