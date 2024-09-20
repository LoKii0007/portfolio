import React, { useRef, useState } from 'react'
import "../css/contact.css"
import '../css/contactForm.css'
import toast from 'react-hot-toast';
import axios from 'axios';

const ContactForm = () => {

    const baseUrl = 'https://portfoliobackend-sigma.vercel.app/api/first';
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    })
  
    function handleData(e) {
      e.preventDefault()
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }

  
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
        <div className="contact-box p-5 rounded-5 ">
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
                <input type="name" required  onChange={(e) => handleData(e)} value={formData.name} name='name' className="contact-name form-control" id="name" placeholder='someone' />
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
    </>
  )
}

export default ContactForm