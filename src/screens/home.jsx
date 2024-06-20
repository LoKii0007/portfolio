import React from 'react'
import Portfolio from '../components/portfolio'
import '../css/home.css'
import Projects from '../components/projects'
import Tech from '../components/tech'
import TechStack from '../components/techstack'

const Home = () => {
  return (
    <>
      <Portfolio/>
      {/* <Tech/> */}
      <TechStack/>
      <Projects/>
    </>
  )
}

export default Home
