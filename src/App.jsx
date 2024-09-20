import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./screens/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ContactForm from "./components/contact";
import { Toaster } from "react-hot-toast";
import Preloader from "./components/preloader";
import { GlobalContextProvider } from "./context/globalContext";
import "./index.css";
import "./app.css";
import "./css/common.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 578);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 578 && window.innerWidth < 768
  );
  const [isLoaded, setIsLoaded] = useState(true);

  const assets = ["/docker.png", "/express.png", "/docker.png"];

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  function responsive() {
    if (window.innerWidth < 578) setIsMobile(true);
    if (window.innerWidth >= 578) setIsMobile(false);
    if (window.innerWidth >= 578 && window.innerWidth < 768) setIsTablet(true);
    if (window.innerWidth < 578 || window.innerWidth >= 768) setIsTablet(false);
  }

  useEffect(() => {
    responsive();
    window.addEventListener("resize", responsive);

    return () => {
      window.removeEventListener("resize", responsive);
    };
  }, []);

  // ------------------------------------
  // lenis smooth scroll
  // ------------------------------------

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      {/* {isLoaded ? ( */}
      <GlobalContextProvider>
        <Router>
          <Navbar isMobile={isMobile} isTablet={isTablet} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home isMobile={isMobile} />}
            ></Route>
          </Routes>
          <Toaster />
        </Router>
      </GlobalContextProvider>
      {/* ) : (
        <Preloader assets={assets} onLoadingComplete={handleLoadingComplete} />
      )} */}
    </>
  );
}

export default App;
