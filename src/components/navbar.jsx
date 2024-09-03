import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'
import { Observer } from 'gsap/all'

const Navbar = () => {

    gsap.registerPlugin(Observer)

    useEffect(() => {

        const tl = gsap.timeline()

        tl.to('.custom-navbar', {
            y: 0,
            ease: "expo.in",
            duration: 0.5
        })
        tl.to('.custom-navbar', {
            borderBottom: 0,
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

        const tl2 = gsap.timeline({paused : true})

        tl2.to('nav', {
            y:'-10vh'
        })

        Observer.create({
            target: window,
            type : 'wheel , touch',
            onDown : ()=> tl2.play(),
            onUp : ()=> tl2.reverse()
        })
    })

    return (
        <>
            <nav className='d-flex position-sticky justify-content-center mt-3'>
                <div className={`custom-navbar rounded-pill d-flex justify-content-between align-items-center `} >
                    <div className={`navbar-left nav-items ms-5 d-flex flex-row justify-content-center align-items-center`}>
                        <Link to="/" className="logo px-3 py-1">Lokesh</Link>
                    </div>
                    <div className={`navbar-right nav-items me-2 d-flex flex-row justify-content-center align-items-center`}>
                        <Link to="/projects" className="nav-item px-3 py-1 rounded-pill">Projects</Link>
                        <Link to="/about" className="nav-item px-3 py-1 rounded-pill">Skills</Link>
                        <Link to="/contact" className="nav-item px-3 py-1 rounded-pill">Connect</Link>
                        <Link to="/contact" className="nav-item nav-item-last px-3 py-1 rounded-pill">Say, Hi</Link>
                        <div data-bs-toggle="offcanvas" href="#menu" aria-controls="menu" className="menu px-3 py-1">
                            <i className="bi bi-list"></i>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end d-flex flex-column align-items-center" tabIndex="-1" id="menu" aria-labelledby="menuLabel">
                <div className="offcanvas-body pe-3 pt-4 d-flex flex-column align-items-end">
                    <Link to="/" className="menu-item d-flex px-3 py-1" data-bs-dismiss="offcanvas" aria-label="Close">
                        Home
                        <i className="bi bi-list ps-3"></i>
                    </Link>
                    <Link to="/projects" className="menu-item px-3 py-1"  data-bs-dismiss="offcanvas" aria-label="Close">
                        Projects
                        <i className="bi bi-card-list ps-3"></i>
                    </Link>
                    <Link to="/about" className="menu-item px-3 py-1"  data-bs-dismiss="offcanvas" aria-label="Close">
                        TechStack
                        <i className="bi bi-stack ps-3"></i>
                    </Link>
                    <Link to="/about" className="menu-item px-3 py-1"  data-bs-dismiss="offcanvas" aria-label="Close">
                        Contact
                        <i className="bi bi-person-lines-fill ps-3"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
