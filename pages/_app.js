import Layout from '../components/layout'
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
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
