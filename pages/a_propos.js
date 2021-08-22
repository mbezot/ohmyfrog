import Head from 'next/head'
import Image from 'next/image'
import Services from '../components/services'
export default function apropos() {

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

        <div className="grid hero bgabout px10 py5">
        <div className="colonne">
            <h1 className="txtwhite">Qui sommes-nous ?</h1>
            <p className="leadL txtwhite">Nous aidons les PME à obtenir plus de trafic, de contacts et de ventes en ligne grâce à un marketing digital simple, rapide et efficace*.</p>
            
            <div className="pt7">
            <ul className="accordion acctext">
			<li>
				<input type="checkbox" id="histoire"/>
				<label htmlFor="histoire">*et acessoirement, on adore raconter l’histoire de la Grenouille à Grande Bouche<i className="icon-chevron-down"></i></label>
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

        </div>
        </div>

        <div className="sp7"></div>

        <div className="px10">
            <div className="wrapper">
                <h2>Voici le deal</h2>
            </div>
            <div className="wrapper">
                <div className="card2__content bglightgrey"><p>Chez Oh My Frog, nous avons aidé des dizaines de clients 
                    à faire passer leur entreprise d&apos;une idée à une marque 
                    florissante. Notre petite et puissante équipe d&apos;indépendants, 
                    designers, stratèges, rédacteurs, photographes et vidéastes 
                    se charge de projets aussi variés que l&apos;identité de marque, 
                    la stratégie marketing, en passant par la conception de sites web 
                    et bien plus encore.</p></div>
                <div className="card2__content bglightgrey"><p>Nous n&apos;avons pas l&apos;habitude de prendre les choses à 
                    la légère, et c&apos;est la même chose dans notre travail.</p>
                    <p><br />Nous vivons pour repousser les limites de la créativité,
                    pour garder les pieds sur terre, et pour (aussi) célébrer les vendredis !
                    C&apos;est notre truc depuis 2017, et on adore notre job.</p></div>
            </div>
        </div>

        <div className="sp7"></div>

        <div className="px10 bggreen">

        <div className="sp7"></div>
        <h2>C&apos;est notre histoire</h2>

            <div className="wrapper">
                <div className="card2__content">
                    <h4>2011-2017</h4>
                    <p>Lancer un blog. Jouer avec le design, le HTML et le CSS. 
                        Créer des affiches pour le plaisir.
                        Se mettre à Wordpress. Faire des erreurs. Surfer sur Google, beaucoup. 
                        Reprendre le rythme. Démarrer une micro-entreprise. Gagner un premier client 
                        pour la conception d&apos;un site. </p>
                </div>
                <div className="card2__content">
                    <h4>2018</h4>
                    <p>Lancer la <a href="https://frogposters.com/" rel="noreferrer" target="_blank">première boutique en ligne</a>. 
                        Se perfectionner dans les 
                        techniques de marketing digital et de pub. Se former à l&apos;inbound marketing. 
                        Construire des méthodologies.  
                    </p>
                </div>
                <div className="card2__content">
                    <h4>2019</h4>
                    <p>Commencer à réfléchir à un plan pour faire quelque chose de mieux et de plus structuré.
                        Ajouter l&apos;animation des réseaux sociaux au menu des services.
                        </p>
                </div>
                <div className="card2__content">
                    <h4>2020</h4>
                    <p>Le monde s&apos;écroule en mars. Adopter la technique du &quot;pivot&quot;, 
                        ne pas faire de pause et aider les clients à se développer 
                        malgré une pandémie mondiale... Et en profiter pour se former au développement web.
                        Quitter mon job de responsable marketing. Lancer Oh My Frog.</p>
                </div>
                <div className="card2__content">
                    <h4>2021</h4>
                    <p>Des objectifs ambitieux, de grands rêves, et une belle croissance à venir ;) </p>
                </div>
            </div>

            <div className="sp7"></div>

        </div>

        <div className="grid px10 bgdarkblue pt7 pb7">
            <div className="wrapper">
        <div className="txtwhite">
            <h3>Les PME traversent actuellement une période de turbulences, et c’est une bonne chose.</h3>
            <p>La technologie évolue rapidement et nos habitudes changent : 
                on passe plus de temps en télétravail, et plus de temps sur nos écrans. 
                C’est le moment de développer votre présence en ligne, et de faire la différence 
                face à vos concurrents.</p>
            <p><br/>Oh My Frog vous accompagne pour vous aider à tirer votre épingle du jeu dans 
                l’univers digital. </p>
        </div>
        
        <article className="card2 bggreen">
            <div className="card2__content">
                <div className="left">
                    <Image src="/images/google-ads.svg" 
                    alt="Certifications Google Ads" 
                    width={100} height={100} />
                </div>
                <h3>Certifications Google Ads</h3>
                    <p>Publicité sur le réseau de Recherche <br />
                    Publicité sur le réseau Display<br />
                    Annonces Shopping</p>
            </div>
        </article>
        
        
        <article className="card2 bgyellow">
            <div className="card2__content">
                <div className="left"><Image src="/images/hubspot-academy.svg" 
                    alt="Certifications HubSpot" 
                    width={100} height={100} />
                    </div>
                    <h3>Certifications HubSpot</h3>
                        <p>Inbound Marketing<br />
                        Growth-Driven Design<br />
                        Email Marketing</p>
                </div>
        </article>
        
    </div>
    </div>

        <div className="sp7"></div>

        <div className="grid px10">
            <div className="colonne">
                <h2>C&apos;est notre truc</h2>
                <p>Ces disciplines sont pour nous ce que l’eau est à... eh bien, la grenouille.</p>
                <p>&nbsp;</p>
            </div>
        </div>
        
        <Services />

        <div className="sp7"></div>

        <div className="px20">
        <div className="wrapper">
            <div>
                <h2>Bon à savoir - ou pas - sur le fondateur</h2>
                <Image src="/images/frog.svg" 
                alt="Oh My Frog" 
                width={100} height={100} />
            </div>
            <div>
                <p><i>“Je déteste l’odeur du patchouli, les selfies la bouche en canard, 
                les gens qui disent “sans vouloir vous offenser”, 
                les leggins couleur chair et les vidéos de chats. 
                J’adore les orages en été, les boucles d’oreilles extravagantes, 
                bouquiner au coin du feu, cuisiner des recettes bizarres 
                et boire un verre en terrasse”</i></p>
                <p>&nbsp;</p>
                <p>&mdash; Mélanie Bezot-Trottet</p>
            </div>
        </div>
        </div>

        <div className="sp7"></div>

    </main>

        </>
    )
}