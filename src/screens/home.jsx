import React, { useEffect } from "react";
import Portfolio from "../components/portfolio";
import Projects from "../components/projects";
import TechStack from "../components/techstack";
import ContactForm from "../components/contact";
import "../css/home.css";

const Home = ({ isMobile }) => {

  useEffect(() => {
    fetch("http://localhost:3000/api/analytics/track")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Portfolio isMobile={isMobile} />
      <TechStack />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
