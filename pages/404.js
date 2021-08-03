import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function FourOhFour() {
  return <>

        <Head>
            <title>Oh My Frog | 404 |Page introuvable</title>
        </Head>

        <main className="grid-wrap hero bgyellow">
            <div className="grid px10 py5">
            <div className="colonne">
                <h1 className="pb3">404</h1>
                <h2>Oups ! Vous n'étiez pas supposé voir ça</h2>
                <p>La page que vous recherchez n'existe plus.<br/>
                Rendez-vous sur la 
                    <Link href="/">
                    <a>
                         &nbsp;page d'accueil
                    </a>
                    </Link> et rappelez-vous : vous n'avez rien vu.
                </p>
                <Link href="/">
                    <a className="coolBeans mt5">
                    Retour à l'accueil
                    </a>
                </Link>
            </div>
            </div>
        </main>

    
  </>
}