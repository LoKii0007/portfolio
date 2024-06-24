import React, { useRef, useState } from 'react'
import "../css/contact.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Keyboard } from '../models/Keyboard';
import { ContactFormApi } from '../api/conatctformapi';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [isTyping, setIsTyping] = useState(false)
  const typingTimeoutRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleData(e) {
    e.preventDefault()
    setIsTyping(true)
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 500);
  }

  useState(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    }
  }, [])

  async function handleSubmit(){
    e.preventDefault()
    const res = await ContactFormApi(data)
    console.log(res)
    if(res !== undefined){
      toast.success('message sent successfully')
    }else{
      toast.error('some error occured')
    }
  }

  return (
    <>
      <div className="contact d-flex justify-content-between align-items-center">
        <div className="contact-left p-5 rounded-5 ">
          <div className="mobile-model">
            <Canvas camera={{ fov: 16, position: [0, 10, 12] }} >
              <OrbitControls enableZoom={false} autoRotate={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Keyboard isTyping={isTyping} />
            </Canvas>
          </div>
          <div className="contact-top">
            <div className="touch">
              Get in touch
            </div>
            <div className="chat">
              Let's Chat
            </div>
          </div>
          <hr />
          <div className="contact-bottom">
            <form action="" type="submit" className='contact-form'>
              <div className=" d-flex flex-column ">
                <label htmlFor="name" className="custom-form align-items-start d-flex form-label">Name</label>
                <input type="name" required={true} onChange={(e) => handleData(e)} value={formData.name} name='name' className="contact-name form-control" id="name" placeholder='someone' />
              </div>
              <div className="my-3 d-flex flex-column">
                <label htmlFor="Email" className="custom-form align-items-start d-flex form-label ">Email</label>
                <input type="email" required={true} onChange={(e) => handleData(e)} value={formData.email} name='email' className="contact-email form-control" id="email" placeholder='someone@gmail.com' />
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="message" className="custom-form align-items-start d-flex form-label ">Message</label>
                <textarea type="text" required={true} onChange={(e) => handleData(e)} value={formData.message} name='message' placeholder='Leave a message' className="contact-message form-control" id="message" />
              </div>

              <div className="text-center pt-5">
                <button onClick={handleSubmit} className='common-btn-2'>submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-right rounded-5 d-flex flex-column">
          <div className="contact-img rounded-5 d-flex justify-content-center align-items-center">
            {/* <img src="/portfolio1.png" alt="" /> */}
            <div className="model">
              <Canvas camera={{ fov: 16, position: [10, 10, 10] }} >
                <OrbitControls enableZoom={false} autoRotate={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Keyboard isTyping={isTyping} />
              </Canvas>
            </div>
          </div>
          <div className="contact-info rounded-5 d-flex flex-column justify-content-evenly align-items-center">
            <div className="email rounded-4 py-3 d-flex align-items-center">
              <div className="email-icon px-4">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="email-info">
                Email <br />
                lokeshyadv8177@gmail.com
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="mobile-info">
                phone <br />
                +91 9560545070
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="mobile-info">
                LinkedIn <br />
                https://www.linkedin.com/in/yadav-lokesh/
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
