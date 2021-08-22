import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import RealisationsWeb from '../components/realisationsweb'
import AccordionWeb from '../components/accordions/accordion-web'
import Ctaone from '../components/cta/ctaone'
import React, { useRef } from "react";


export default function WebDesign() {

    const ref = useRef(null);
    React.useEffect(() => {
    import("@lottiefiles/lottie-player");
    });    

    return (
        
        <>
        <Head>
            <title>Oh My Frog | Web Design</title>
            <meta name="description" content="Nous transformons votre site en machine à générer des clients." />
            <meta property="og:title" content="Oh My Frog | Web Design" />
            <meta property="og:description" content="Nous transformons votre site en machine à générer des clients." />
            <meta property="og:url" content="https://ohmyfrog.fr/web_design" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="grid-wrap">
        <div className="grid hero bgyellow px10 py5">
        <div className="colonne">
            <h1>Web Design</h1>
            <p className="leadL">Nous transformons votre site en machine 
            à générer des clients. <br /><br />
            Notre objectif : en faire votre vendeur N°1.</p>
            <div className="lottieweb">
                <lottie-player
                    id="weblottie" ref={ref}
                    loop
                    autoplay
                    mode="normal"
                    src="./images/lotties/webdesign.json">
                </lottie-player>
            </div>
        </div>
        </div>

        <div className="sp7"></div>

        <div className="grid px10 pb5">
            <div className="colonne">
                <h2>Comment nous fonctionnons</h2>
            </div>
        </div>

        <div className="px10">
        <div className="wrapper">

            <article className="card2 bgpink">
            <div className="card2__content txtwhite">
                <div className="number">01</div>
                <h3>Analyse</h3>
                <p>Notre processus de conception commence 
                    par la compréhension de votre entreprise, de votre marché, et de 
                    vos objectifs commerciaux.</p>       
            </div>
            </article>

            <article className="card2 bglightgrey">
            <div className="card2__content">
                <div className="number">02</div>
                <h3>Référencement</h3>
                <p>Nous recerchons les mots clés relatifs à votre activité 
                        les plus demandés dans Google. Nous optimisons votre site 
                        sur ces mots clés pour que votre référencement soit optimal.</p>       
            </div>
            </article>

            <article className="card2 bgpink">
            <div className="card2__content txtwhite">
                <div className="number">03</div>
                <h3>UX / UI</h3>
                <p>Nous élaborons avec vous un plan du site et 
                    une architecture des pages. Cela nous aide à définir les principaux 
                    éléments, les fonctionnalités et la structure de votre nouveau site web.</p>
                <p>Nous soignons aussi le design de votre site, pour que vous
                    fassiez bonne impression, dès les premières secondes.</p>       
            </div>
            </article>

            <article className="card2 bglightgrey">
            <div className="card2__content">
                <div className="number">04</div>
                <h3>Stratégie de contenu</h3>
                <p>En collaboration avec votre équipe, nous déterminons quel 
                        contenu est nécessaire et utile pour votre site web, ainsi que 
                        l&apos;endroit où il doit être placé pour un impact maximal.</p>       
            </div>
            </article>

            <article className="card2 bgpink">
            <div className="card2__content txtwhite">
                <div className="number">05</div>
                <h3>Génération de leads</h3>
                <p>Votre site ne doit pas simplement être beau. 
                    Il doit convertir vos visiteurs en clients. Nous concevons toutes les 
                    pages dans cette optique, à l&apos;aide de Call to Action (CTA) 
                    et de landing pages.</p>       
            </div>
            </article>

            <article className="card2 bglightgrey">
            <div className="card2__content">
                <div className="number">06</div>
                <h3>Animation et déploiement</h3>
                <p>Enfin, Nous concevons les graphiques et les éléments visuels pour 
                        donner vie à votre site web.</p>       
            </div>
            </article>

        </div>
        </div>

        <div className="sp7"></div>

        <RealisationsWeb />

        <div className="sp7"></div>

        <AccordionWeb />

        <div className="sp7"></div>

        <Ctaone />

        <div className="sp7"></div>


</main>
        </>
    )
}