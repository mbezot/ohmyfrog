import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Menu = () => {

        const [click, setClick] = useState(false)
        const [navbar, setNavbar] = useState(false)
        // TOGGLE
        const handleClick = () => {
            setClick(!click)
        }
    
        const closeMobileMenu = () => {
            setClick(false)
        }
        // change BG color
        const changeBackground = () => {
            if(window.scrollY >=100)
            {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        }
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', changeBackground);
          }
        


    return (
        <>
        <header>
            <nav className="">
                <div className={navbar ? 'nav navactive' : 'nav'}>
                    <div className='nav-container container'>

                    <div className="logo">
                        <Link onClick={closeMobileMenu} href="/"><a>Oh My FroG</a></Link>
                    </div>

                        <div onClick={handleClick} className='menu-icon'>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/'><a>Accueil</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/strategie_digitale'><a>Stratégie digitale</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/marketing_digital'><a>Marketing Digital</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/web_design'><a>Web Design</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/portfolio'><a>Portfolio</a></Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} 
                                className='nav-link' href='/a_propos'><a>A Propos</a></Link>
                            </li>

                            <div className="navButton right">
                            <button className="menuButton">
                                <Link onClick={closeMobileMenu} href="#contact"><a>
                                Contact</a>
                                </Link>
                            </button>
                        </div>

                        </ul>
                        
                        

                    </div>
                </div>
            </nav>
        </header>
        </>
        );
    }
    
    export default Menu;