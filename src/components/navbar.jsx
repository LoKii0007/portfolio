import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'

const Navbar = () => {

    useEffect(() => {

        const tl = gsap.timeline()

        tl.to('.custom-navbar', {
            y: 0,
            ease: "expo.in",
            duration: 0.5
        })
        tl.to('.custom-navbar', {
            borderBottom: 3,
            ease: "power4.in",
            duration: 0.7
        })

        tl.to(".nav-items", {
            y: 0,
            opacity: 1,
            ease: "back.in",
            duration: 1,
            stagger: 0.07
        })
    })

    return (
        <>
            <div className=''>
                <div className={`custom-navbar d-flex justify-content-between align-items-center `} >
                    <div className={`navbar-left nav-items ms-5 d-flex flex-row justify-content-center align-items-center`}>
                        <Link to="/" className="nav-item px-3 py-1">Portfolio</Link>
                    </div>
                    <div className={`navbar-right nav-items me-5 d-flex flex-row justify-content-center align-items-center`}>
                        <Link to="/" className="nav-item px-3 py-1">Home</Link>
                        <Link to="/projects" className="nav-item px-3 py-1">Projects</Link>
                        <Link to="/about" className="nav-item px-3 py-1">TechStack</Link>
                        <Link to="/about" className="nav-item px-3 py-1">Contact</Link>
                        <div data-bs-toggle="offcanvas" href="#menu" aria-controls="menu nav-item" className="menu px-3 py-1">
                            <i className="bi bi-list"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end d-flex flex-column align-items-center" tabIndex="-1" id="menu" aria-labelledby="menuLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-start align-items-center">
                    <Link to="/" className="menu-item px-3 py-1">Home</Link>
                    <Link to="/projects" className="menu-item px-3 py-1">Projects</Link>
                    <Link to="/about" className="menu-item px-3 py-1">TechStack</Link>
                    <Link to="/about" className="menu-item px-3 py-1">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
