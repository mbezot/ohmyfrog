import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AccordionStrategy = () => {

    return (
        <>
        <div className="grid bgdarkblue px10 py5">
            <div className="colonne">
        <ul className="accordion accyellow">
			<li>
				<input type="checkbox" id="diagnostic"/>
				<label htmlFor="diagnostic">Diagnostic de l'existant<i className="icon-chevron-down"></i></label>
				<section>
					<p>Nous passons votre site, vos réseaux sociaux et votre stratégie digitale sur le grill.
                        Nous examinons ce qui fonctionne et les points de vigilance, particulièrement en ce qui concerne la génération de leads, le référencement (SEO) et l’expérience utilisateurs. Nous vous remettons un rapport d'audit qui vous permet de savoir ce qui fonctionne et ce qu'il faut améliorer.</p>
				</section>
			</li>
			<li>
				<input type="checkbox" id="objectifs" />
				<label htmlFor="objectifs">Définition des objectifs</label>
				<section>
                    <ul className="continuoustext">
                        <li className="continuoustext">Faire connaître un nouveau produit ou un nouveau service ?</li>
                        <li className="continuoustext">Accroître les ventes et/ou recevoir plus de leads ?</li>
                        <li className="continuoustext">Modifier votre image de marque ?</li>
                        <li className="continuoustext">Fidéliser vos clients ?</li>
                    </ul>
					<p>On ne peut pas démarrer un plan marketing stratégique sans se fixer d’objectifs. Ils doivent être suffisamment ambitieux, mais aussi réalistes, atteignables et mesurables. Que souhaitez-vous accomplir :</p>
				</section>
			</li>
			<li>
				<input type="checkbox" id="tableaux de bord" />
				<label htmlFor="tableaux de bord">Mise en place des tableaux de bord</label>
				<section>
					<p>Nous allons mettre en place les indicateurs qui nous permettront de mesurer l’efficacité de nos actions. Ces KPI (pour Key Performance Indicators) varient selon les objectifs. Ces KPI peuvent être :</p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Le nombre de visiteurs sur votre site</li>
                        <li className="continuoustext">Le nombre d’abonnés sur vos réseaux sociaux</li>
                        <li className="continuoustext">Le nombre de leads / contacts entrants</li>
                        <li className="continuoustext">Le nombre de ventes issues de ces contacts (le taux de conversion)...</li>
                    </ul>
                </section>
			</li>
		</ul>
        </div>

        <div className="colonne">
        <ul className="accordion accyellow">
			<li>
				<input type="checkbox" id="persona"/>
				<label htmlFor="persona">Identification des cibles<i className="icon-chevron-down"></i></label>
				<section>
					<p>Nous allons dresser un portrait-robot de vos clients idéaux - nous les appelons les "personas". En général, il existe 3 personas par entreprise. Nous allons découvrir :</p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Leur âge, secteur géographique, CSP…</li>
                        <li className="continuoustext">Leurs besoins et motivations</li>
                        <li className="continuoustext">Leurs freins et objections</li>
                        <li className="continuoustext">Les canaux de communication qu'ils préfèrent</li>
                    </ul>
                    <p>Pour créer ces personas, nous allons étudier vos statistiques de vente, et réaliser des interviews auprès de vos clients et collaborateurs.</p>
                </section>
			</li>
			<li>
				<input type="checkbox" id="message" />
				<label htmlFor="message">Choix des messages</label>
				<section>
                    <p>Maintenant que nous savons à qui nous parlons, nous allons choisir le bon axe de communication. Quelle promesse allons-nous faire ?</p>
					<p>La promesse doit répondre à un besoin ou à un désir de la cible, vous différencier de la concurrence, et permettre que l’on se souvienne de vous. Le message doit donc répondre à ces besoins fondamentaux :</p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Se sentir en sécurité</li>
                        <li className="continuoustext">Gagner ou économiser de l’argent, du temps ou des efforts</li>
                        <li className="continuoustext">Appartenir à un groupe, obtenir un statut social</li>
                        <li className="continuoustext">Impressionner les autres, être reconnu, sortir du lot</li>
                        <li className="continuoustext">Faire quelque chose de bien</li>
                        <li className="continuoustext">S'amuser, se distraire, prendre du plaisir</li>
                        <li className="continuoustext">S’améliorer, s’affranchir, s’épanouir</li>
                    </ul>
				</section>
			</li>
			<li>
				<input type="checkbox" id="Plan de communication" />
				<label htmlFor="Plan de communication">Plan de communication</label>
				<section>
					<p>Il est temps de structurer votre communicatiopn : A quel moment envoyer quel message, à quelle personne ? 
                    Pour finir, nous vous remettrons un plan de communication stratégique. Il vous servira de pilier pour construire vos actions marketing et de communication. Il détaille :
                    </p>
                    <ul className="continuoustext">
                        <li className="continuoustext">Les canaux de communication à favoriser</li>
                        <li className="continuoustext">Les actions à mettre en place</li>
                        <li className="continuoustext">Les messages pertinents selon vos cibles</li>
                    </ul>
				</section>
			</li>
		</ul>
        </div>
        </div>
        </>
        );
    }
    
    export default AccordionStrategy;