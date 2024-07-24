import React from 'react'
import Portfolio from '../components/portfolio'
import Projects from '../components/projects'
import TechStack from '../components/techstack'
import ContactForm from '../components/contact'
import '../css/home.css'
import MatterJs from '../components/matter'

const Home = () => {
  return (
    <>
      <Portfolio/>
      {/* <MatterJs/> */}
      <TechStack/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default Home
