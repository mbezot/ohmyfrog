import Link from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const AccordionWeb = () => {

    return (
        <>
        <div className="grid bggreen px10 py5">
            <div className="colonne">
        <ul className="accordion accblue">
			<li>
				<input type="checkbox" id="Référencement"/>
				<label htmlFor="Référencement">Référencement<i className="icon-chevron-down"></i></label>
				<section>
					<p><strong>Vous attirez les bons visiteurs et vendez mieux</strong></p>
					<p>Aujourd’hui, vos clients passent par Google dès qu’ils 
						recherchent un produit ou un service.</p>
					<p>Nous optimisons votre site pour les moteurs de recherche 
						comme Google, pour qu’il attire les personnes que vous 
						souhaitez atteindre. Nous présentons vos produits et 
						services pour mettre en avant leur valeur ajoutée.</p>
				</section>
			</li>
			<li>
				<input type="checkbox" id="design" />
				<label htmlFor="design">Design</label>
				<section>
                    <p><strong>Vous faites bonne impression, dès les premières secondes</strong></p>
					<p>Le design de votre site, c’est 95% de la première impression des 
						visiteurs. Nous ne prenons pas cela à la légère !</p>
					<p>Chez Oh My Frog nous ne faisons pas que de jolis sites web. 
						Nous allons plus loin : votre site restitue la personnalité 
						de votre marque, et nous l&apos;optimisons pour que la navigation
						soit la plus fluide pour vos visiteurs.</p>
				</section>
			</li>
		</ul>
        </div>

        <div className="colonne">
        <ul className="accordion accblue">
			<li>
				<input type="checkbox" id="leads"/>
				<label htmlFor="leads">Leads<i className="icon-chevron-down"></i></label>
				<section>
                    <p><strong>Vous recevez des contacts qualifiés</strong></p>
                    <p>Nous optimisons votre site pour que les visiteurs vous contactent,
						vous demandent un devis ou achètent vos produits en ligne.</p>
                </section>
			</li>
			<li>
				<input type="checkbox" id="ecommerce" />
				<label htmlFor="ecommerce">E-Commerce</label>
				<section>
                    <p><strong>Vous ouvrez de nouveaux horizons à votre entreprise</strong></p>
					<p>Nous développons des boutiques en ligne qui vous ouvrent de nouveaux 
						canaux de vente et améliorent la rétention de vos clients</p>
					<p>L’achat en ligne est de plus en plus recherché par vos clients, 
						et d&apos;autant plus depuis les derniers confinements. 
						Ouvez votre boutique 7j/7j, 24h/24 !</p>
				</section>
			</li>
		</ul>
        </div>
        </div>
        </>
        );
    }
    
    export default AccordionWeb;