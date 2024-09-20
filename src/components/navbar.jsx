import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'
import { Observer } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { GlobalContext } from '../context/globalContext'

const Navbar = ({isMobile, isTablet}) => {

    gsap.registerPlugin(Observer)
    const {darkTheme, setDarkTheme} = useContext(GlobalContext)
    console.log(darkTheme)
    const [handleView, setHandleView] = useState('portfolio')

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.to('.custom-navbar', {
            y: 0,
            ease: "elastic",
            duration: 1
        })
        tl.to('.custom-navbar', {
            // width:`${isMobile && '95vw'} ${isTablet && '90vw'} ${!isMobile && '80vw'}  `,
            width:`${isMobile ? '92vw' : '80vw'}`,
            // ease: "elastic",
            duration: 1
        })
        tl.to('.navbar-left, .navbar-right', {
            opacity:1
        })

        const tl2 = gsap.to('nav', {
            y:'-10vh',
            paused:true
        })

        const navMobile = gsap.to('nav', {
            y:'20vh',
            paused:true
        })


        // {
        //     isMobile && 
        //     Observer.create({
        //         target: window,
        //         type : 'wheel , touch',
        //         onDown : ()=> navMobile.play(),
        //         onUp : ()=> navMobile.reverse()
        //     })
        // }

        {
            !isMobile &&
            Observer.create({
                target: window,
                type : 'wheel , touch',
                onDown : ()=> tl2.play(),
                onUp : ()=> tl2.reverse()
            })
        }

    }, [isMobile])

    function handleFlag(){
        console.log('clicked')
    }

    function handleTheme(){
        setDarkTheme(!darkTheme)
    }


    useEffect(() => {
        const element = document.querySelector(`#${handleView}`);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
    }, [handleView]);

    return (
        <>
            <nav className={` d-flex position-fixed justify-content-center`}>
                <div className={` ${darkTheme?'dark-theme-bg':'light-theme-bg'} custom-navbar rounded-pill d-flex justify-content-between align-items-center `} >
                    <div className={`navbar-left nav-items ms-3 d-flex flex-row justify-content-center align-items-center`}>
                        <button onClick={()=> handleTheme()} className="theme d-flex align-items-center overflow-y-hidden">
                            <div className='d-flex flex-column theme-icon'>
                            <i className={` ${darkTheme?'light-mode':''} bi bi-brightness-high-fill`}></i>
                            <i className={` ${darkTheme?'dark-mode':''} bi bi-moon-stars-fill`}></i>
                            </div>
                        </button>
                        <Link to="/" className={`${darkTheme?'dark-theme-text':'light-theme-text'} nav-item loki px-3 py-1`}>Lokesh</Link>
                    </div>
                    <div className={`navbar-right position-relative nav-items d-flex flex-row justify-content-center align-items-center`}>
                        <div onClick={()=>setHandleView('projects')} className={` ${darkTheme?'dark-theme-text':'light-theme-text'} nav-item px-3 py-1 rounded-pill`}>Projects</div>
                        <div onClick={()=>setHandleView('skills')} className={` ${darkTheme?'dark-theme-text':'light-theme-text'} nav-item px-3 py-1 rounded-pill`}>Skills</div>
                        <div onClick={()=>setHandleView('contact')} className={` ${darkTheme?'dark-theme-text':'light-theme-text'} nav-item px-3 py-1 rounded-pill`}>Connect</div>
                        <div onClick={handleFlag}  className={` ${darkTheme?'dark-theme-text':'light-theme-text'} nav-item nav-item-last px-3 py-1 rounded-pill`}>Say, Hi</div>
                        {/* <div data-bs-toggle="offcanvas" href="#menu" aria-controls="menu" className="menu px-3 py-1">
                            <i className="bi bi-list"></i>
                        </div> */}
                        <div className="pill-bg position-absolute rounded-pill"></div>
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
