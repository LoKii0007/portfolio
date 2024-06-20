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
                        <Link to="/" className="nav-item px-3 py-1">Portfolio</Link>
                    </div>
                    <div className={`navbar-right me-5 d-flex flex-row `}>
                        <Link to="/" className="nav-item px-3 py-1">Home</Link>
                        <Link to="/projects" className="nav-item px-3 py-1">Projects</Link>
                        <Link to="/about" className="nav-item px-3 py-1">TechStack</Link>
                        <Link to="/about" className="nav-item px-3 py-1">Contact</Link>
                        <div data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample" className="menu">
                            ...
                        </div>
                    </div>
                </div>
                <div className={`line`}></div>

            </div>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
