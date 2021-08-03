import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import RealisationsWeb from '../components/realisationsweb'
import AccordionWeb from '../components/accordion-web'


export default function WebDesign() {

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
        <div className="grid hero2 bggreen px10 py5">
        <div className="colonne">
            <h1 className="txtwhite">Web Design</h1>
            <p className="txtwhite leadL">Nous transformons votre site en machine 
            à générer des clients. Notre objectif : faire de votre site votre vendeur N°1.</p>
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
                        sur ces mots clés pour que votre référencement naturel soit optimal.</p>       
            </div>
            </article>

            <article className="card2 bgpink">
            <div className="card2__content txtwhite">
                <div className="number">03</div>
                <h3>UX / UI</h3>
                <p>Nous élaborons avec vous un plan du site et 
                    une architecture des pages. Cela nous aide à définir les principaux 
                    éléments, les fonctionnalités et la structure de votre nouveau site web.</p>       
            </div>
            </article>

            <article className="card2 bglightgrey">
            <div className="card2__content">
                <div className="number">04</div>
                <h3>Stratégie de contenu</h3>
                <p>En collaboration avec votre équipe, nous déterminons quel 
                        contenu est nécessaire et utile pour votre site web, ainsi que 
                        l'endroit où il doit être placé pour un impact maximal.</p>       
            </div>
            </article>

            <article className="card2 bgpink">
            <div className="card2__content txtwhite">
                <div className="number">05</div>
                <h3>Génération de leads</h3>
                <p>Votre site ne doit pas simplement être beau. 
                    Il doit convertir vos visiteurs en prospects. Nous concevons toutes les 
                    pages dans cette optique, à l'aide de Call to Action (CTA) et de landing pages.</p>       
            </div>
            </article>

            <article className="card2 bglightgrey">
            <div className="card2__content">
                <div className="number">06</div>
                <h3>Développement</h3>
                <p>Nous concevons les graphiques et les éléments visuels pour 
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

        <div className="grid px20 pb0">
        <div className="colonne">
            <div className="cta">
                <div className="ctacontent bgyellow">
                    <h3>Nous ne sommes pas des voyageurs intergalactiques...</h3>
                </div>
                <div className="ctacontent bgpink">
                <p className="txtwhite lineheigt2">Mais nous n’hésiterons pas à faire le 
                petit pas supplémentaire qui vous permettra de décrocher la lune.</p>
                </div>
            </div>
        </div>
        </div>

        <div className="sp7"></div>


        </main>
        </>
    )
}