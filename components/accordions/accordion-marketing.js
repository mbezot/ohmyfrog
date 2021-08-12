import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AccordionMarketing = () => {

    return (
        <>
        <div className="grid bggreen px10 py5">
            <div className="colonne">
        <ul className="accordion accblue">
			<li>
				<input type="checkbox" id="inbound marketing"/>
				<label htmlFor="inbound marketing">Inbound Marketing<i className="icon-chevron-down"></i></label>
				<section>
					<p>Particulièrement efficace en B2B, la démarche consiste à attirer les prospects plutôt que d&apos;aller les chercher avec les techniques de marketing traditionnelles.</p>
                    <p>Il faut connaître vos cibles (les personas), comprendre leurs problématiques et leurs proposer des solutions.</p>
                    <p>Pour cela, l&apos;idéal est de leur proposer un contenu utile, qui les aidera à trouver des solutions : c&apos;est ce que nous appelons le content marketing.</p>
				</section>
			</li>
			<li>
				<input type="checkbox" id="content marketing" />
				<label htmlFor="content marketing">Content marketing</label>
				<section>
                    <p>Le marketing de contenu permet de souligner votre expertise, de vous faire connaître et d&apos;inspirer la confiance de vos prospects. Il peut prendre plusieurs formes :</p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Vidéos de présentation</li>
                        <li className="continuoustext">Quizz interactifs</li>
                        <li className="continuoustext">Infographies</li>
                        <li className="continuoustext">Livres blancs</li>
                        <li className="continuoustext">Articles de blog...</li>
                    </ul>
				</section>
			</li>
			<li>
				<input type="checkbox" id="marketing automation" />
				<label htmlFor="marketing automation">Marketing automation</label>
				<section>
					<p>Automatiser vos campagnes marketing, c’est envoyer des messages à vos cibles de manière automatique, au bon moment et à la bonne personne. Vous pouvez par exemple :</p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Envoyer un code promo 15 minutes après l&apos;abandon d&apos;un panier</li>
                        <li className="continuoustext">Proposer un rendez-vous à la personne qui vient de télécharger votre livre blanc</li>
                        <li className="continuoustext">Envoyer un SMS un jour avant vos portes ouvertes</li>
                    </ul>
                </section>
			</li>
            <li>
				<input type="checkbox" id="réseaux sociaux" />
				<label htmlFor="réseaux sociaux">Réseaux sociaux</label>
				<section>
					<p>Votre présence sur les réseaux sociaux est indispensable pour développer votre image de marque, votre notoriété et votre visibilité.</p>
                    <p>Notre objectif est de vous aider à générer du traffic et des opportunités en créant du contenu pertinent pour votre audience.</p>
                </section>
			</li>
		</ul>
        </div>

        <div className="colonne">
        <ul className="accordion accblue">
			<li>
				<input type="checkbox" id="SEO et SEA"/>
				<label htmlFor="SEO et SEA">Référencement naturel et payant (SEO et SEA)<i className="icon-chevron-down"></i></label>
				<section>
                    <p>Aujourd’hui, avoir un beau site web et des articles de blog ne suffit plus. Vous avez besoin de trafic !</p>
                    <p>Nous optimisons votre site pour le <strong>référencement naturel (SEO pour Search Engine Optimization)</strong> pour que l’on vous trouve. Pour cela, nous recherchons les mots-clés les plus demandés, puis nous les intégrons dans les pages de votre site. Nous optimisons aussi votre code source, vos images etc.</p>
                    <p>Pour mettre en place une stratégie de <strong>référencement payant (SEA pour Search Engine Advertising)</strong>, nous analysons votre concurrence, définissons ensemble votre cible, les mots clés sur lesquels vous voulez vous positionner, le type de campagne et votre budget. Puis nous lançons la campagne, analysons les résultats et ajustons pour plus de pertinence et de ROI.</p>
                </section>
			</li>
			<li>
				<input type="checkbox" id="publicité en ligne" />
				<label htmlFor="publicité en ligne">Publicité en ligne</label>
				<section>
                    <p>Les <strong>campagnes display</strong> permettent de diffuser vos messages de manière hyper-personnalisée et peu intrusive, sous forme de bannières. Par exemple, nous ciblons vos prospects par centres d’intérêt et par secteur géographique. La mesure des performances se fait en temps réel.</p>
					<p>Les <strong>publicités sur les réseaux sociaux (SMA pour Social Media Advertising)</strong> se fondent dans le fil d’actualité et sont d’une efficacité redoutable. Images, vidéos, diaporamas… L’idée est de commencer avec un petit budget, tester ce qui fonctionne et adapter la campagne en conséquence.</p>
				</section>
			</li>
			<li>
				<input type="checkbox" id="Newsletters et SMS" />
				<label htmlFor="Newsletters et SMS">Newsletters et SMS</label>
				<section>
					<p>Les <strong>campagnes d’email marketing</strong> sont l’un des moyens les plus efficaces pour acquérir des clients potentiels, et c&apos;est aujourd&apos;hui encore le canal avec le meilleur taux de conversion. Partagez vos actus, envoyez une promotion, informez sur un événement, annoncez le lancement d’un produit...</p>
                    <p>Parce qu’une personne regarde son téléphone portable 221 fois par jour, les campagnes SMS bénéficient d&apos;un taux d’ouverture de 98%, c&apos;est imparable.</p>
				</section>
			</li>
		</ul>
        </div>
        </div>
        </>
        );
    }
    
    export default AccordionMarketing;