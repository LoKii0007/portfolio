import React, { useRef, useState } from 'react'
import "../css/contact.css"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Keyboard } from '../models/Keyboard';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ContactForm() {
  const baseUrl = 'https://portfoliobackend-sigma.vercel.app/api/first';
  // const baseUrl = 'http://localhost:3000/api/first';
  const [isTyping, setIsTyping] = useState(false)
  const [loading, setLoading] = useState(false)
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

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try {
      if(!formData.name || !formData.email || !formData.message){
        toast.error('please fill all fields')
        return
      }
      const res = await axios.post(baseUrl , formData)
      console.log(res)
      if(res.status == 201){
        toast.success('message sent successfully')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      }else{
        toast.error('some error occured')
      }
    } catch (error) {
      toast.error('some error occured')
    }finally{
      setLoading(false)
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
            <form type="submit" className='contact-form'>
              <div className=" d-flex flex-column ">
                <label htmlFor="name" className="custom-form align-items-start d-flex form-label">Name</label>
                <input requi type="name" required  onChange={(e) => handleData(e)} value={formData.name} name='name' className="contact-name form-control" id="name" placeholder='someone' />
              </div>
              <div className="my-3 d-flex flex-column">
                <label htmlFor="Email" className="custom-form align-items-start d-flex form-label ">Email</label>
                <input type="email" required onChange={(e) => handleData(e)} value={formData.email} name='email' className="contact-email form-control" id="email" placeholder='someone@gmail.com' />
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="message" className="custom-form align-items-start d-flex form-label ">Message</label>
                <textarea type="text" required onChange={(e) => handleData(e)} value={formData.message} name='message' placeholder='Leave a message' className="contact-message form-control" id="message" />
              </div>

              <div className="text-center submit-btn pt-5">
                <button disabled={loading } onClick={(e)=>handleSubmit(e)} className='common-btn-2'>{loading ? 'Sending ...' : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-right rounded-5 d-flex flex-column">
          <div className="contact-img rounded-5 d-flex justify-content-center align-items-center">
            {/* <img src="/portfolio1.png" alt="" /> */}
            <div className="model">
              <Canvas camera={{ fov: 16, position: [10, 10, 10] }} >
                {/* <OrbitControls enableZoom={false} autoRotate={false} /> */}
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
                <b>Email</b> <br />
                <a className='link' href="mailto:lokeshyadv8177@gmail.com">lokeshyadv8177@gmail.com</a>
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-phone"></i>
              </div>
              <div className="mobile-info">
                <b>Phone</b> <br />
                <a className='link' href="tel:+919560545070">+91 9560545070</a>
              </div>
            </div>
            <div className="mobile rounded-4 py-3 d-flex align-items-center">
              <div className="mobile-icon px-4">
                <i className="bi bi-linkedin"></i>
              </div>
              <div className="mobile-info">
                <b>LinkedIn</b> <br />
                <Link className='link' to='https://www.linkedin.com/in/yadav-lokesh/' target='blank' >https://www.linkedin.com/in/yadav-lokesh/</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
