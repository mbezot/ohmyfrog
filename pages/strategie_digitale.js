import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AccordionStrategy from '../components/accordion-strategy'
import Clients from '../components/customers'
import Temoignages from '../components/temoignages'
import React, { useRef } from "react";

export default function StrategieDigitale() {

    const ref = useRef(null);
    React.useEffect(() => {
    import("@lottiefiles/lottie-player");
    });  

    return (
        <>
        <Head>
            <title>Oh My Frog | Stratégie Digitale</title>
            <meta name="description" content="Un plan d’action pour vendre à la bonne personne, au bon moment." />
            <meta property="og:title" content="Oh My Frog | Stratégie Digitale" />
            <meta property="og:description" content="Un plan d’action pour vendre à la bonne personne, au bon moment." />
            <meta property="og:url" content="https://ohmyfrog.fr/strategie_digitale" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="grid-wrap">

        <div className="grid hero2 bgpink px10 py5">
        <div className="colonne">
            <h1 className="txtwhite">Stratégie Digitale</h1>
            <p className="txtwhite leadL">Votre plan d’action pour 
            vendre à la bonne personne, au bon moment.</p>
            <div className="lottiestrat">
                <lottie-player
                    id="strategylottie" ref={ref}
                    count="2"
                    autoplay preserveAspectRatio
                    mode="normal"
                    src="./images/lotties/strategy.json"
                    style={{ width: "auto", height: "500px"}}>
                </lottie-player>
            </div>
        </div>
        </div>

        <div className="sp7"></div>

        <div className="grid px10">
            <div className="colonne">
                <h2>Votre chiffre d’affaires stagne comme l’équipe de foot de Maubeuge ?</h2>
                <p>Cela ne vient pas d’un manque de motivation de votre équipe, ni de vos prix, ni du ralentissement de l’économie.
C’est parce que vous fonctionnez au feeling et à l’opportunité, plutôt que d’avoir un plan d’action stratégique.</p>
            </div>
            <div className="colonne">

                <div className="numbercard">
                    <div className="number txtgreen">01</div>
                    <div>
                        <p>Diagnostic de l'existant<br />
                        Définition des objectifs<br />
                        Mise en place des tableaux de bord</p>
                    </div>
                </div>
                <div className="numbercard">
                    <div className="number txtgreen">02</div>
                    <div>
                        <p>Identifcation des cibles (persona)<br />
                        Sélection des médias<br />Choix des messages</p>
                    </div>
                </div>
                <div className="numbercard">
                    <div className="number txtgreen">03</div>
                    <div>
                        <p>Plan de communication stratégique<br />
                        Calendrier éditorial</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="sp7"></div>

        <AccordionStrategy />

        <div className="sp7"></div>

        <div className="grid px10">
            <div className="colonne">
                <h2>Les livrables</h2>
                <p className="leadL">A l'issue de votre plan stratégique, 
                nous vous remettons un rapport d'audit, un plan de communication stratégique 
                ainsi que des tableaux de bord pour suivre vos KPI</p>
                <p>&nbsp;</p>
            </div>
        </div>

        <div className="grid px10 pb7">
  <div className="colonne">
    <div className="iconcard bggreen">
          <div className="cardicon">
            <Image src="/images/icons/icon-sablier.svg" 
              alt="Audit marketing"
              width={80} height={80} />
          </div>
            <span>&nbsp;</span>
            <h3 className="txtwhite">Rapport d'Audit</h3>
            <p className="txtwhite">Le rapport d'audit présente l'analyse de votre site web, de votre référencement, de vos réseaux sociaux, et de la génération de leads. Les préconisations seront un guide pour bien démarrer et corriger le cap actuel.</p>     
    </div>
  </div>
  <div className="colonne">
  <div className="iconcard bggreen">
          <div className="cardicon">
            <Image src="/images/icons/icon-double-rond.svg" 
              alt="Création de sites web"
              width={80} height={80} />
          </div>
          <span>&nbsp;</span>
          <h3 className="txtwhite">Tableaux de bord</h3>
          <p className="txtwhite">Les tableaux de bord vous permettront de suivre chaque mois les indicateurs de performance. Vous aurez une vision claire de votre situation et de son évolution dans le temps.</p>
    </div>
  </div>
  <div className="colonne">
  <div className="iconcard bggreen">
          <div className="cardicon">
            <Image src="/images/icons/icon-bols.svg" 
              alt="Marketing digital"
              width={80} height={80} />
          </div>
          <span>&nbsp;</span>
          <h3 className="txtwhite">Plan de communication</h3>
          <p className="txtwhite">Le plan de communication stratégique reprend les préconisations de l'audit, décrit vos personas, et détaille pour chaque cible les messages à mettre en avant, et les canaux de communication les plus performants.</p>
    </div>
  </div>
</div>
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

<Clients />
<div className="sp7"></div>
<Temoignages />
<div className="sp7"></div>
        </main>

        </>
    )
}