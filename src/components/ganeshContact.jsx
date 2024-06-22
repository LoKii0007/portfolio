import React from 'react'
import '../css/ganesh.css'

function GaneshContact() {
    return (
        <>
            <div className="contact d-flex justify-content-between rounded-5 align-items-center">
                <div className="contact-left d-flex flex-column justify-content-evenly ">
                    <div className="contact-top">
                        <div className="welcome">
                            Welcome to Our Application
                        </div>
                        <div className="please">
                            Please Login to Use the Platform
                        </div>
                    </div>
                    <div className="contact-middle d-flex flex-column justify-content-evenly align-items-center">
                        <form action="" type="submit" className='contact-form'>
                            <div className=" d-flex flex-column">
                                <label htmlFor="email" className="custom-form d-flex form-label-name px-2 ">Enter Email</label>
                                <input type="email" name='email' className="contact-email rounded-pill form-control" id="email" placeholder='someone@gmail.com' />
                            </div>
                            <div className=" d-flex flex-column my-3">
                                <label htmlFor="password" className="custom-form d-flex form-label-email px-2">Enter Password</label>
                                <input type="password" name='password' className="contact-name rounded-pill form-control" id="password" placeholder='123456' />
                            </div>
                            <div className=" d-flex mx-2">
                                <input type="checkbox" name='tick' className="contact-tick me-3" />
                                Remember me
                            </div>
                            <div className="text-center pt-5">
                                <button className='submit-btn py-3 rounded-pill'>submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-bottom d-flex justify-content-evenly align-items-center">
                        <div className="provider d-flex justify-content-between align-items-center">
                            <button className='provider-btn rounded-pill'>
                                <i class="bi bi-facebook me-3"></i>
                                facebook Login
                            </button>
                            <button className='provider-btn rounded-pill'>
                                <i class="bi bi-google me-3"></i>
                                Google Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className="contact-right d-flex justify-content-center align-items-center">
                    <img src="/glasses.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default GaneshContact