import React from 'react'
import "../css/contact.css"

export default function ContactForm() {

  return (
    <>
      <div className="contact d-flex justify-content-between align-items-center">
        <div className="contact-left p-5 rounded-5">
          <div className="contact-top">
            <div className="touch">
              Get in touch
            </div>
            <div className="chat">
              Let's Chat
            </div>
          </div>
          <hr/>
          <div className="contact-bottom">
            <form action="" type="submit" className='contact-form'>
              <div className=" d-flex flex-column ">
                <label htmlFor="name" className="custom-form align-items-start d-flex form-label">Name</label>
                <input type="name" readonly className="contact-name form-control" id="name" placeholder='someone' />
              </div>
              <div className="my-3 d-flex flex-column">
                <label htmlFor="Email" className="custom-form align-items-start d-flex form-label ">Email</label>
                <input type="email" readonly className="contact-email form-control" id="email" placeholder='someone@gmail.com' />
              </div>
              <div className=" d-flex flex-column">
                <label htmlFor="message" className="custom-form align-items-start d-flex form-label ">Message</label>
                <textarea type="text" placeholder='Leave a message' className="contact-message form-control" id="message" />
              </div>

              <div className="text-center pt-5">
                <button className='common-btn-2'>submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-right rounded-5 d-flex flex-column">
          <div className="contact-img rounded-5 d-flex justify-content-center align-items-center">
            <img src="/portfolio1.png" alt="" />
          </div>
          <div className="contact-info rounded-5 d-flex flex-column justify-content-center align-items-center">
            <div className="email rounded-4 py-2 d-flex align-items-center">
              <div className="email-icon px-4">
              <i class="bi bi-envelope"></i>
              </div>
              <div className="email-info">
                 Email <br />
                 lokeshyadv8177@gmail.com
              </div>
            </div>
            <div className="mobile my-3 rounded-4 py-2 d-flex align-items-center">
              <div className="mobile-icon px-4">
              <i class="bi bi-envelope"></i>
              </div>
              <div className="mobile-info">
                phone <br />
                +91 9560545070
              </div>
            </div>
            <div className="mobile rounded-4 py-2 d-flex align-items-center">
              <div className="mobile-icon px-4">
              <i class="bi bi-envelope"></i>
              </div>
              <div className="mobile-info">
                phone <br />
                +91 9560545070
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
