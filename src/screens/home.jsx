import { useEffect } from "react";
import Portfolio from "../components/portfolio";
import Projects from "../components/projects";
import TechStack from "../components/techstack";
import ContactForm from "../components/contact";
import "../css/home.css";

const Home = ({ isMobile }) => {
  async function handleAnalytics() {
    try {
      await fetch(
        "https://portfoliobackend-sigma.vercel.app/api/analytics/track"
      );
    } catch (error) {}
  }

  useEffect(() => {
    handleAnalytics();
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Update mouse position
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update main cursor position immediately
      cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 10}px)`;
    });

    // Smooth following cursor animation
    function animateFollower() {
      const speed = 0.1;

      followerX += (mouseX - followerX) * speed;
      followerY += (mouseY - followerY) * speed;

      cursorFollower.style.transform = `translate(${followerX - 20}px, ${
        followerY - 20
      }px)`;

      requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Add click effect
    document.addEventListener("mousedown", () => {
      cursor.style.transform += " scale(0.8)";
      cursorFollower.style.transform += " scale(0.8)";
    });

    document.addEventListener("mouseup", () => {
      cursor.style.transform = cursor.style.transform.replace(
        " scale(0.8)",
        ""
      );
      cursorFollower.style.transform = cursorFollower.style.transform.replace(
        " scale(0.8)",
        ""
      );
    });

    // Hide cursor when leaving the window
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursorFollower.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursorFollower.style.opacity = "1";
    });
  }, []);

  return (
    <>
      <div class="cursor"></div>
      <div class="cursor-follower"></div>

      <Portfolio isMobile={isMobile} />
      <TechStack />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
