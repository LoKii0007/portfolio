import { useContext, useEffect, useRef, useState } from "react";
import "../css/contact.css";
import { Canvas } from "@react-three/fiber";
import { Keyboard } from "../models/Keyboard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/globalContext";

export default function ContactForm() {
  const { darkTheme } = useContext(GlobalContext);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const typingTimeoutRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleData(e) {
    e.preventDefault();
    setIsTyping(true);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 300);
  }

  useState(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!formData.name || !formData.email || !formData.message) {
        toast.error("please fill all fields");
        return;
      }
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/first`,
        formData
      );
      toast.success("message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("some error occured");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        id="contact"
        className={` ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } contact d-flex justify-content-between align-items-center`}
      >
        <div
          className={`${
            darkTheme
              ? "light-theme-shadow dark-theme-bg"
              : "light-theme-shadow light-theme-bg"
          } contact-left p-5 rounded-5 `}
        >
          <div className="contact-top">
            <div className={`touch`}>Get in touch</div>
            <div
              className={`${
                darkTheme ? "dark-theme-text" : "light-theme-text"
              } chat`}
            >
              Let's Chat
            </div>
          </div>
          {/* <hr /> */}
          <div
            style={{
              height: "1px",
              width: "100%",
              margin: "10px 0px",
              backgroundColor: `${darkTheme ? "white" : "black"}`,
            }}
          ></div>
          <div
            className={`${
              darkTheme ? "dark-theme-text" : "light-theme-text"
            } contact-bottom`}
          >
            <form type="submit" className="contact-form">
              <div className=" d-flex flex-column ">
                <label
                  htmlFor="name"
                  className="custom-form align-items-start d-flex form-label"
                >
                  Name
                </label>
                <input
                  type="name"
                  required
                  onChange={(e) => handleData(e)}
                  value={formData.name}
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="someone"
                />
              </div>
              <div className="my-3 d-flex flex-column">
                <label
                  htmlFor="Email"
                  className="custom-form align-items-start d-flex form-label "
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  onChange={(e) => handleData(e)}
                  value={formData.email}
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="someone@gmail.com"
                />
              </div>
              <div className=" d-flex flex-column">
                <label
                  htmlFor="message"
                  className="custom-form align-items-start d-flex form-label "
                >
                  Message
                </label>
                <textarea
                  type="text"
                  required
                  onChange={(e) => handleData(e)}
                  value={formData.message}
                  name="message"
                  placeholder="Leave a message"
                  className="form-control"
                  id="message"
                />
              </div>

              <div className="text-center submit-btn pt-5">
                <button
                  disabled={loading}
                  onClick={(e) => handleSubmit(e)}
                  className="common-btn-2"
                >
                  {loading ? "Sending ..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-right rounded-5 d-flex flex-column">
          <div
            className={` ${
              darkTheme
                ? "dark-theme-shadow dark-theme-bg"
                : "light-theme-shadow light-theme-bg"
            } contact-img rounded-5 d-flex justify-content-center align-items-center`}
          >
            {/* <img src="/portfolio1.png" alt="" /> */}
            <div className="model">
              <Canvas camera={{ fov: 16, position: [10, 10, 10] }}>
                {/* <OrbitControls enableZoom={false} autoRotate={false} /> */}
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Keyboard isTyping={isTyping} />
              </Canvas>
            </div>
          </div>
          <div
            className={` ${
              darkTheme
                ? "dark-theme-shadow dark-theme-bg"
                : "light-theme-shadow light-theme-bg"
            } contact-info rounded-5 d-flex flex-column justify-content-evenly align-items-center `}
          >
            <div className="email rounded-4 py-3 d-flex align-items-center">
              <div className="email-icon px-4">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="email-info">
                <b>Email</b> <br />
                <a className="link" href="mailto:lokeshyadv8177@gmail.com">
                  lokeshyadv8177@gmail.com
                </a>
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-phone"></i>
              </div>
              <div className="mobile-info">
                <b>Github</b> <br />
                <Link
                  className="link"
                  to="https://github.com/LoKii0007"
                  target="blank"
                >
                  Github
                </Link>
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-github"></i>
              </div>
              <div className="mobile-info">
                <b>LinkedIn</b> <br />
                <Link
                  className="link"
                  to="https://www.linkedin.com/in/yadav-lokesh/"
                  target="blank"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
