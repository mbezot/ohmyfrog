import React from 'react'
import Link from "next/link"
import styled from "styled-components"

const MenuBars = styled.i`
  display:none;
  @media screen and (max-width:768px) {
    display:block;
    background-image: url(./images/icons/menu.svg);
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-50%, 25%);
  }
`;

const Navbar = ({toggle}) => {
  return (
    <>
      <nav>

        <div className="logo">
          <Link href="/"><a>Oh My Frog</a></Link>
        </div>

        <MenuBars onClick={toggle}/>

        <div className="NavMenu">

            <Link href="/"><a>
              Accueil
              </a>
            </Link>
            
            <Link href="/strategie_digitale"><a>
              Stratégie digitale
              </a>
            </Link>

            <Link href="/marketing_digital"><a>
              Marketing Digital</a>
            </Link>

            <Link href="/web_design"><a>
              Web Design</a>
            </Link>

            <Link href="/a_propos"><a>
              A propos</a>
            </Link>

        </div>
        <div className="navButton right">
        <button className="menuButton">
            <Link href="#contact"><a>
              Contact</a>
            </Link>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
