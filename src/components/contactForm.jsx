import { useContext, useState } from "react";
import "../css/contact.css";
import "../css/contactForm.css";
import toast from "react-hot-toast";
import axios from "axios";
import { GlobalContext } from "../context/globalContext";

const ContactForm = () => {
  const { darkTheme } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleData(e) {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

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
        className={`${
          darkTheme
            ? "light-theme-shadow dark-theme-bg"
            : "light-theme-shadow light-theme-bg"
        } p-5 rounded-5 m-5`}
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
          <form type="submit" style={{width: "100%"}} className="contact-form d-flex flex-column">
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
    </>
  );
};

export default ContactForm;
