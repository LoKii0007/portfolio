import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import Home from "./screens/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import "./index.css"
import './css/common.css'
import ContactForm from "./components/contact"
import { Toaster } from "react-hot-toast"

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const [isMobile, setIsMobile] = useState(window.innerWidth<600)

  function responsive(){
    if(window.innerWidth<600) setIsMobile(true)
    else setIsMobile(false)
  }

  useEffect(()=>{
    responsive()
    window.addEventListener('resize', responsive)

    return()=>{
      window.removeEventListener('resize', responsive)
    }
  }, [])

  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }, [])

  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home isMobile={isMobile} />}></Route>
          <Route exact path="/contact" element={<ContactForm/>}></Route>
        </Routes>
        {/* <Footer/> */}
        <Toaster/>
      </Router>
    </>
  )
}

export default App
