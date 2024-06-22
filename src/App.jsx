import { useEffect } from "react"
import Navbar from "./components/navbar"
import Home from "./screens/home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"
import Footer from "./components/footer"
import "./index.css"
import './css/common.css'
import ContactForm from "./components/contact"

function App() {

  gsap.registerPlugin(ScrollTrigger)

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
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/contact" element={<ContactForm/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
