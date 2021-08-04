import React from 'react'
import Link from "next/link"
import styled from "styled-components"

const DropdownContainer = styled.div`
  position:fixed;
  z-index: 999;
  width:100%;
  height:100%;
  background:#86BF58;
  display:grid;
  align-items:center;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const CloseIcon = styled.i`
  background-image: url(./images/icons/close.svg);
  background-size:contain;
  height:40px;
  width:40px;
  cursor:pointer;
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  outline:none;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>

      <CloseIcon onClick={toggle}/>

      <div className="DropdownWrapper">
        <div className="dropdownMenu">
            
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
        <div className="dropdownBtnWrap">

          <button className="dropdownButton">
            <Link href="#contact"><a>
              Contact</a>
            </Link>
          </button>

        </div>
      </div>
    </DropdownContainer>
  )
}

export default Dropdown
