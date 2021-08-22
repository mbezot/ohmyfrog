import Layout from '../components/layout'
import Script from 'next/script'
import '../styles/layout.scss'
import '../styles/typography.scss'
import '../styles/cards.scss'
import '../styles/buttons.scss'
import '../styles/spacers.scss'
import '../styles/accordion.scss'
import '../styles/footer.scss'
import '../styles/backgrounds-text-colors.scss'
import '../styles/lottie.scss'
import '../styles/menu.scss'


function MyApp({ Component, pageProps }) {

  return (
    <>
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

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
