import Head from 'next/head'
import Image from 'next/image'
import AccordionMarketing from '../components/accordions/accordion-marketing'
import Clients from '../components/customers'
import Cta2 from '../components/cta/cta2'
import React, { useRef } from "react";

export default function MarketingDigital() {

    const ref = useRef(null);
    React.useEffect(() => {
    import("@lottiefiles/lottie-player");
    });

    return (
        <>
        <Head>
            <title>Oh My Frog | Marketing Digital</title>
            <meta name="description" content="Générez plus de demandes clients ! Attirez les prospects qualifiés, 
                convertissez vos visiteurs en clients et transformez-les en ambassadeurs de votre marque." />
            <meta property="og:title" content="Oh My Frog | Marketing Digital" />
            <meta property="og:description" content="Générez plus de demandes clients ! Attirez les prospects qualifiés, 
                convertissez vos visiteurs en clients et transformez-les en ambassadeurs de votre marque." />
            <meta property="og:url" content="https://ohmyfrog.fr/marketing_digital" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="grid-wrap">

        <div className="grid hero2 bgyellow px10 py5">
        <div className="colonne">
            <h1>Marketing Digital</h1>
            <p className="leadL">Pour nous, le marketing digital se compose de quatre ingrédients : le bon message, les bonnes personnes, le bon média et le bon moment*.</p>
            <div className="pt7">
                <p className="leadM">*La liste des ingrédients est simple comme bonjour, mais il faut le bon chef pour les réunir de manière cohérente. C'est là que nous intervenons.</p>
            </div>
            <div className="lottiemarketing">
                <lottie-player
                    id="weblottie" ref={ref}
                    count="1"
                    autoplay
                    mode="normal"
                    src="./images/lotties/marketing.json"
                    style={{ width: "900px", height: "900px" }}>
                </lottie-player>
            </div>
        </div>
        </div>

        <div className="sp7"></div>



        <div className="grid px10 pb0">
            <div className="colonne">
                <h2>Le parcours client</h2>
                <p className="leadM">Nous relions précisément chaque tactique à chaque étape 
                du parcours client, pour convertir vos visiteurs en ambassadeurs de votre marque.</p>
                <p>&nbsp;</p>
            </div>
        </div>

        <div className="px10">
        <div className="wrapper">
            
        <article className="card2 bgdarkblue txtwhite">
            <div className="card2__content txtwhite">
                <div className="number">01</div>
                <h3>Attirer</h3>
                <p>Attirer les visiteurs à l'aide de votre site web, réseaux sociaux, SEO, 
                    emailings, vidéos, campagnes de publicité, influenceurs...</p>     
            </div>
        </article>
        

        <article className="card2 bgpink">
            <div className="card2__content">
                <div className="number">02</div>
                <h3>Convertir</h3>
                <p>Convertir les visiteurs en prospects, en utilisant le marketing de contenu, 
                    les landing pages, demandes de devis, chat...</p>     
            </div>
        </article>

        <article className="card2 bgyellow">
            <div className="card2__content">
                <div className="number">03</div>
                <h3>Vendre</h3>
                <p>Transformer les visiteurs en clients grâce aux notes et avis consommateurs, 
                    comparateurs de produits, liste de prix, promotions, CRM, 
                    retargeting, emails auto text-centermatisés...</p>     
            </div>
        </article>

        <article className="card2 bggreen">
            <div className="card2__content">
                <div className="number">04</div>
                <h3>Fidéliser</h3>
                <p>Faire de vos clients des ambassadeurs en utilisant les parrainages, 
                    success-stories, ventes privées, cartes de fidélité, 
                    enquêtes, sondages, newsletters...</p>     
            </div>
        </article>

      </div>
    </div>

        <div className="sp7"></div>

        <AccordionMarketing />

        <div className="sp7"></div>

        <Cta2 />

        <div className="sp7"></div>

        <Clients />

        <div className="sp7"></div>

        <div className="px10 bglightgrey pt7 pb7">
        <div className="wrapper">
            
        <article className="card2 bgyellow">
            <div className="card2__content">
                <div className="number">+260%<span className="numbernormal"> leads</span></div>
                <p>pour <strong>Chabanel Montélimar </strong>
                    après l’optimisation des lading pages du site par Oh My Frog</p>
                    <div className="bottom right">
                            <a className="btn-plus" href="https://www.chabanel-montelimar.fr/" target="_blank">
                            <div>Voir le site</div>
                            <div className="plus">+</div>
                            </a>
                    </div>          
            </div>
        </article>
        

        <article className="card2 bgyellow">
            <div className="card2__content">
            <div className="number">+550%<span className="numbernormal"> leads</span></div>
                    <p>pour <strong>Stores Habit’Alp</strong> après la refonte complète du site par Oh My Frog</p>     
                    <div className="bottom right">
                            <a className="btn-plus" href="https://www.storeshabitalp.fr/" target="_blank">
                            <div>Voir le site</div>
                            <div className="plus">+</div>
                            </a>
                    </div> 
            </div>
        </article>

        <article className="card2 bgyellow">
            <div className="card2__content">
            <div className="number">+800%<span className="numbernormal"> leads</span></div>
                    <p>pour <strong>StedBis </strong>
                    après la refonte complète du site par Oh My Frog</p>     
                    <div className="bottom right">
                            <a className="btn-plus" href="https://www.stedbis.com/" target="_blank">
                            <div>Voir le site</div>
                            <div className="plus">+</div>
                            </a>
                    </div> 
            </div>
        </article>

      </div>
    </div>

        
</main>
        </>
    )
}