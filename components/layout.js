import React, {useState} from 'react'
import Footer from './footer/footer'
import Menu from './navbar/menu'

const Layout = ({ children }) => {

  return (
    <div>
      <Menu/>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;