import React, {useState} from 'react'
import Footer from './footer/footer'
import Menu from './navbar/menu'
import Script from 'next/script'

const Layout = ({ children }) => {

  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-205554847-1`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-205554847-1');
        `}
      </Script>
      
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XJFDQBN5PL`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XJFDQBN5PL');
        `}
      </Script>
      <Menu/>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;