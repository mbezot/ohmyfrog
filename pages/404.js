import Head from 'next/head'
import Link from 'next/link'
import React, { useRef } from "react";

export default function FourOhFour() {

    const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return <>

        <Head>
            <title>Oh My Frog | 404 |Page introuvable</title>
        </Head>

        <main className="grid-wrap hero bgdarkblue">
            <div className="grid px10 py5">
                <div className="colonne txtwhite">
                        <h1>404</h1>
                        <h2>Oups ! Vous n'étiez pas supposé voir ça</h2>
                        <p>La page que vous recherchez n'existe plus.<br/>
                        Rendez-vous sur la&nbsp; 
                            <Link href="/">
                            <a className="txtwhite">
                                page d'accueil
                            </a>
                            </Link> et rappelez-vous : vous n'avez rien vu.
                        </p>
                        <Link href="/">
                            <a className="coolBeans mt5">
                            Retour à l'accueil
                            </a>
                        </Link>
                    </div>
                    <div className="colonne">
                    <lottie-player
                    id="404lottie" ref={ref}
                    loop
                    autoplay
                    mode="normal"
                    src="./images/lotties/quatrecentquatre.json">
                </lottie-player>
                    </div>
                </div>
        </main>

    
  </>
}