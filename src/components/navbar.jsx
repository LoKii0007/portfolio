import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'

const Navbar = () => {

    useEffect(() => {
        gsap.to(".nav-items", {
            y: 0,
            ease: "back.in",
            duration: 1,
            stagger: 0.07
        })

        gsap.to(".line", {
            x: 0,
            duration: 1,
            ease: "back.in"
        })
    })

    return (
        <>
            <div className=''>
                <div className={`custom-navbar d-flex justify-content-between align-items-center `} >
                    <div className={`navbar-left ms-5 d-flex flex-row `}>
                        <div className="logo-name nav-items">
                            <Link to="/" className="nav-items">Portfolio</Link>
                        </div>
                    </div>
                    <div className={`navbar-right me-5 d-flex flex-row `}>
                        <div id='cross' className="menu d-flex flex-column justify-content-center align-items-center">
                            <div className='menu-line'></div>
                            <div className='menu-line my-2'></div>
                            <div className='menu-line'></div>
                        </div>
                        <div className="nav-items mx-1">
                            <Link to="/" className="nav-items">Home</Link>
                        </div>
                        <div className="nav-items mx-3">
                            <Link to="/about" className="nav-items">About</Link>
                        </div>
                        <div className="nav-items mx-3">
                            <Link to="/" className="nav-items">Tech</Link>
                        </div>
                        <div className="nav-items mx-3">
                            <Link to="/" className="nav-items">Contact</Link>
                        </div>
                        <div id='menu1' className="menu d-flex flex-column justify-content-center align-items-center">
                            <div className='menu-line'></div>
                            <div className='menu-line my-2'></div>
                            <div className='menu-line'></div>
                        </div>
                    </div>
                </div>
                <div className={`line`}></div>

            </div>
        </>
    )
}

export default Navbar
