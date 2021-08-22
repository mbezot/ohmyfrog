import Layout from '../components/layout'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
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

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
