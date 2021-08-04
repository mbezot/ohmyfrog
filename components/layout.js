import React, {useState} from 'react'
import Footer from './footer'
import Navbar from './navbar/navigation'
import Dropdown from './navbar/dropdown'



const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;