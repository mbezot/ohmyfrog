import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Clients from '../components/customers'
import Temoignages from '../components/temoignages'
import Services from '../components/services'
import React, { useRef } from "react";



export default function Home({ allPostsData }) {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
    <Head>
  <title>Oh My Frog | Agence de marketing digital</title>
  <meta name="description" content="Oh My Frog est une agence pour les Entrepreneurs et PME 
  perfusée au digital, agile, honnête, qui bosse dur, qui aime s’éclater et qui pétille d’idées 
  fraîches pour votre business." />
  <meta property="og:title" content="Oh My Frog | Agence de marketing digital" />
  <meta property="og:description" content="Oh My Frog est une agence pour les Entrepreneurs et PME 
  perfusée au digital, agile, honnête, qui bosse dur, qui aime s’éclater et qui pétille d’idées 
  fraîches pour votre business." />
  <meta property="og:url" content="https://ohmyfrog.fr" />
  <meta property="og:type" content="website" />
  <link rel="icon" href="/favicon.ico" />
</Head>
<main className="grid-wrap">
<div className="grid bggreen hero px10">
  <div className="colonne">
    <h1 className="txtwhite">Oh My FroG</h1>
    <p className="leadXL pb3">
      <span className="txtyellow">Agence de marketing digital</span> agile, 
      honnête, qui bosse dur, qui aime s’éclater et qui pétille d’idées 
      fraîches pour votre business.</p>

      <div className="flexrowleft">
      <Link href="/strategie_digitale"><a className="coolBeans">
          Stratégie digitale
          </a>
        </Link>

        <Link href="/marketing_digital"><a className="coolBeans">
          Marketing Digital</a>
        </Link>

        <Link href="/web_design"><a className="coolBeans">
          Web Design</a>
        </Link>
      </div>

        
  </div>
  <div className="lottiehome">
  <lottie-player
  Scale="1"
    id="ohmyfrog" ref={ref}
    autoplay loop
    mode="normal"
    src="./images/lotties/homehero.json"
        ></lottie-player>
  </div>
</div>


<div className="sp7"></div>


<div className="px10">
        <div className="wrapper">
            
       <article className="card2 bgyellow">
            <Image src="/images/that-would-be-great-800x400.jpg" 
            alt="Ça ne marche plus aussi bien qu'avant" 
            width={600} height={300} />
        <div className="card2__content">
            <h3>Ça ne marche plus aussi bien qu&apos;avant</h3>
            <p>Vos campagnes d’encarts presse, d’affichage, de pages jaunes ne 
              sont plus aussi performantes qu’avant. Pendant ce temps, 
              vos concurrents progressent, et vous prennent des parts de marché.</p>       
            <div className="right bottom">
            <Link href="/marketing_digital">
              <a className="btn-plus">
              <div>On a de meilleures solutions</div>
                <div className="plus">+</div>
              </a>
            </Link>
            </div>
        </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/math-lady-800x400.jpg" 
            alt="Vous manquez de temps ou de savoir-faire" 
            width={600} height={300} />
            <div className="card2__content">
            <h3>Vous manquez de temps ou de savoir-faire</h3>
            <p>On vous parle de digital, mais vous ne savez pas par quoi commencer. 
              Vous avez mis en place en des actions qui manquent d’efficacité, 
              et vous manquez de temps pour les optimiser.</p>
            <div className="right bottom">
              <Link href="/strategie_digitale">
                <a className="btn-plus">
                <div>On prend les choses en main</div>
                  <div className="plus">+</div>
                </a>
              </Link>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/confused-travolta-800x400.jpg" 
            alt="On ne vous trouve pas dans Google" 
            width={600} height={300} />
            <div className="card2__content">
            <h3>On ne vous trouve pas dans Google</h3>
          <p>Votre site web est mal référencé et obsolète, il ne reflète plus votre 
            marque et votre savoir-faire ? Pourtant aujourd&apos;hui, 80% de vos clients 
            potentiels cherchent en ligne avant de trouver un produit ou un service.</p>
            <div className="right bottom">
              <Link href="/web_design">
                <a className="btn-plus">
                <div>On booste votre référencement</div>
                  <div className="plus">+</div>
                </a>
              </Link>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/suspicious-leonardo-800x400.jpg" 
            alt="Vous n'avez pas confiance" 
            width={600} height={300} />
            <div className="card2__content">
            <h3>Vous n&apos;avez pas confiance</h3>
          <p>Il vous manque une vraie stratégie pour coordonner votre site, 
            votre communication, votre marketing, mais vous ne savez pas à 
            qui vous adresser ? Comment être sûr de ne pas se tromper d’agence ?</p>
            <div className="right bottom">
              <Link href="/a_propos">
                <a className="btn-plus">
                <div>On vous explique tout</div>
                  <div className="plus">+</div>
                </a>
              </Link>
            </div>
            </div>
        </article>

      </div>
    </div>

<div className="sp7"></div>

<div className="grid px10">
<div className="colonne">
    <h2 className="center">Passez votre communication digitale en mode Ninja</h2>
</div>
  <div className="colonne">
    <div className="height100">
        <h3><mark className="txtdarkblue">Simple</mark></h3>
        <p><strong>Chez nous, pas de jargon</strong>. Nous vous expliquons clairement 
          quelles sont les techniques digitales les plus efficaces pour 
          votre entreprise, comment les mettre en place et à quel coût.</p>
          <p>&nbsp;</p>
    </div>
    <div className="height100">
        <h3><mark className="txtdarkblue">Rapide</mark></h3>
        <p><strong>L’avantage du digital, c’est sa rapidité et sa souplesse</strong>. Nous mettons en œuvre votre plan d’action rapidement, 
            nous mesurons les performances en continu et nous adaptons vos campagnes en temps réel.</p>
            <p>&nbsp;</p>
  </div>
  <div className="height100">
        <h3><mark className="txtdarkblue">Efficace</mark></h3>
        <p><strong>Avec le marketing digital, on peut facilement mesurer l’efficacité de vos campagnes</strong>. Nous mettons en place des 
            indicateurs de performance : vous savez exactement quelles campagnes ont le plus de succès.</p>
            <p>&nbsp;</p>
    </div>
    <div className="height100">
        <h3><mark className="txtdarkblue">Transparent</mark></h3>
        <p>Chaque fois que c’est possible, <strong>nous vous faisons passer en direct</strong> : 
              vous ne payez pas de surcoût ni de “marge d’agence” avec les prestataires.</p>
    </div>
  </div>
</div>
<div className="sp7"></div>
<Services />
<div className="sp7"></div>
<Clients />
<div className="sp7"></div>
<Temoignages />
<div className="sp7"></div>
</main>
    </>
  )
}
