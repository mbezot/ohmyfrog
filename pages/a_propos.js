import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Services from '../components/services'
import React, { useRef } from "react";

export default function apropos() {

    const ref = useRef(null);
    React.useEffect(() => {
    import("@lottiefiles/lottie-player");
    });

    return (
        <>
        <Head>
        <title>A propos de Oh My Frog</title>
        <meta name="description" content="Nous aidons les PME à obtenir plus de trafic, de contacts et 
                        de ventes en ligne grâce à un marketing digital simple, rapide et efficace" />
        <meta property="og:title" content="A propos de Oh My Frog" />
        <meta property="og:description" content="Nous aidons les PME à obtenir plus de trafic, de contacts et 
                        de ventes en ligne grâce à un marketing digital simple, rapide et efficace" />
        <meta property="og:url" content="https://ohmyfrog.fr/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid-wrap">

        <div className="grid hero2 bgpink px10 py5">
        <div className="colonne">
            <h1 className="txtwhite">Qui sommes-nous ?</h1>
            <p className="leadL txtwhite">Nous aidons les PME à obtenir plus de trafic, de contacts et de ventes en ligne grâce à un marketing digital simple, rapide et efficace*.</p>
            
            <div className="pt7">
            <ul className="accordion acctext">
			<li>
				<input type="checkbox" id="histoire"/>
				<label htmlFor="histoire">*et on adore raconter l’histoire de la Grenouille à Grande Bouche<i className="icon-chevron-down"></i></label>
				<section>
                <p>Il était une fois une grenouille à grande bouche qui se baladait dans la forêt. 
                    En chemin, elle rencontre un lapin et lui demande :</p>
                    <p>« Tu es qui, toiiiiiiiii ?<br /> – Je suis le lapin<br /> 
                    – Et tu fais quoi toiiiiiiiiiiiii ?<br /> 
                    – Je me ballade dans la forêt<br /> 
                    – Et qu’est-ce que tu manges, toiiiiiiiiii ?<br /> 
                    – Je mange des carottes<br /> – D’accord ! »</p>
                    <p>&nbsp;</p>
                    <p>Et la grenouille à grande bouche poursuit son chemin. Un peu plus loin, 
                        elle rencontre une vache et lui demande :</p>
                    <p>« Tu es qui, toiiiiiiiii ?<br /> – Je suis la vache<br /> – 
                    Et tu fais quoi toiiiiiiiiiiiii ?<br /> – Je me repose un peu en broutant.<br /> 
                    – Et tu manges quoi, toiiiiiiiiii ?<br /> – Je mange de l’herbe.<br /> 
                    – D’accord ! »</p>
                    <p>&nbsp;</p>
                    <p>Contente, la grenouille à grande bouche passe son chemin et continue 
                        sa promenade. Elle rencontre alors un serpent.</p>
                    <p>« Qui tu es toiiiiiiiiiii ?<br /> – Je suis le serpent.<br /> 
                    – Et qu’est-ce que tu fais, toiiiiiiiiiiiiiiiiii ?<br /> 
                    – J’ai faim et je cherche quelque chose à grignoter.<br /> 
                    – Et qu’est-ce que tu manges, toiiiiiiiiiiii ?<br /> 
                    – J’adore les grenouilles à grande bouche ! »</p>
                    <p>Alors, d’une toute petite bouche, la grenouille à grande bouche lui répond:</p>
                    <p>« Ah bon, tu en connais beaucoup des grenouilles à grande bouche ? »</p>			
                    </section>
			</li>
		</ul>
        </div>

        <div className="lottieabout">
                <lottie-player
                    id="aboutlottie" ref={ref}
                    loop
                    autoplay preserveAspectRatio
                    mode="normal"
                    src="./images/lotties/apropos.json"
                    style={{ width: "500px", height: "500px" }}>
                </lottie-player>
            </div>

        </div>
        </div>

        <div className="sp7"></div>

        <div className="grid px20">
        <div className="colonne">
            <h2>Derrière la grenouille</h2>
            <p>“Je déteste l’odeur du patchouli, les selfies la bouche en canard, 
                les gens qui disent “sans vouloir vous offenser”, 
                les leggins couleur chair et les vidéos de chats. 
                J’adore les orages en été, les boucles d’oreilles extravagantes, 
                bouquiner au coin du feu, cuisiner des recettes bizarres 
                et boire un verre en terrasse”</p>
                <p>&nbsp;</p>
            <p>&mdash; Mélanie Bezot-Trottet, Fondateur</p>
            <p>&nbsp;</p>
            <div className="left"><Image src="/images/frog.svg" 
                alt="Oh My Frog" 
                width={100} height={100} />
            </div>
        </div>
        </div>

        <div className="sp7"></div>

        <div className="grid px10 bgdarkblue pt7 pb7">
        <div className="colonne txtwhite">
            <h2>Les PME traversent actuellement une période de turbulences, et c’est une bonne chose.</h2>
            <p>La technologie évolue rapidement et nos habitudes changent : 
                on passe plus de temps en télétravail, et plus de temps sur nos écrans. 
                C’est le moment de développer votre présence en ligne, et de faire la différence 
                face à vos concurrents.</p>
            <p>Oh My Frog vous accompagne pour vous aider à tirer votre épingle du jeu dans 
                l’univers digital. Il faut que votre marque soit visible, irrésistible, inoubliable !</p>
        </div>
        <div className="colonne">
            <div className="flexgridparent txtwhite">
                <div className="flexgridchild bggreen certification">
                <div className="left"><Image src="/images/google-ads.svg" 
                alt="Certifications Google Ads" 
                width={100} height={100} />
                </div>
                <h3>Certifications Google Ads</h3>
                    <p>Publicité sur le réseau de Recherche <br />
                    Publicité sur le réseau Display<br />
                    Annonces Shopping</p>
                </div>
            </div>
            <div className="flexgridparent">
                <div className="flexgridchild bgyellow certification">
                    <div className="left"><Image src="/images/hubspot-academy.svg" 
                    alt="Certifications HubSpot" 
                    width={100} height={100} />
                    </div>
                    <h3>Certifications HubSpot</h3>
                        <p>Inbound Marketing<br />
                        Growth-Driven Design<br />
                        Email Marketing</p>
                </div>
            </div>
        </div>
        </div>

        <div className="sp7"></div>

        <div className="grid px10">
            <div className="colonne">
                <h2>C'est notre truc</h2>
                <p>Ces disciplines sont pour nous ce que l’eau est à... eh bien, la grenouille.</p>
                <p>&nbsp;</p>
            </div>
        </div>
        
        <Services />

        <div className="sp7"></div>

        <div className="grid px20">
        <div className="colonne">
            <div className="cta">
                <div className="ctacontent bgyellow">
                    <h3>Nous sommes l’alternative aux agences généralistes</h3>
                </div>
                <div className="ctacontent bgpink">
                <p className="txtwhite lineheigt2">Une petite équipe d'experts, un accompagnement personnalisé, une bonne humeur contagieuse. C’est nous.</p>
                </div>
            </div>
        </div>
        </div>

        <div className="sp7"></div>

        </main>

        </>
    )
}