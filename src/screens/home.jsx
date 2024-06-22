import React from 'react'
import Portfolio from '../components/portfolio'
import '../css/home.css'
import Projects from '../components/projects'
import Tech from '../components/tech'
import TechStack from '../components/techstack'
import ContactForm from '../components/contact'

const Home = () => {
  return (
    <>
      <Portfolio/>
      {/* <Tech/> */}
      <TechStack/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default Home
