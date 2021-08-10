import Link from 'next/link'
import Image from 'next/image'


const Services = () => {

    return (
        <>

<div className="px10">
        <div className="wrapper">
            
       <article className="card2 bggreen">
            <div className="card2__content">
                <div className="left">
                    <Image src="/images/icons/icon-sablier.svg" 
                    alt="Audit marketing" 
                    width={80} height={80} />
                </div>
                <h3>Audit marketing</h3>
                <p>Faites le point sur vos points forts et points faibles.
                    Nous établissons plan d’action stratégique pour vendre à la bonne personne, au bon moment.</p>       
                <div className="right bottom">
                    <Link href="/strategie_digitale">
                        <a className="btn-plus">
                        <div>&nbsp;</div>
                        <div className="plus">+</div>
                        </a>
                    </Link>
                </div>
            </div>
        </article>

        <article className="card2 bggreen">
            <div className="card2__content">
                <div className="left">
                    <Image src="/images/icons/icon-double-rond.svg" 
                    alt="Web Design" 
                    width={80} height={80} />
                </div>
                <h3>Web Design</h3>
                <p>Vous êtes fier de votre entreprise, vous allez être fier de votre site.
                    Nous faisons de votre site web votre vendeur numéro 1.</p>       
                <div className="right bottom">
                    <Link href="/web_design">
                        <a className="btn-plus">
                        <div>&nbsp;</div>
                        <div className="plus">+</div>
                        </a>
                    </Link>
                </div>
            </div>
        </article>

        <article className="card2 bggreen">
            <div className="card2__content">
                <div className="left">
                    <Image src="/images/icons/icon-bols.svg" 
                    alt="Marketing digital" 
                    width={80} height={80} />
                </div>
                <h3>Marketing digital</h3>
                <p>Référencement, réseaux sociaux, landing pages, inbound marketing...
                Vous allez enchaîner les leads comme Nadal enchaîne les coups droits.</p>       
                <div className="right bottom">
                    <Link href="/marketing_digital">
                        <a className="btn-plus">
                        <div>&nbsp;</div>
                        <div className="plus">+</div>
                        </a>
                    </Link>
                </div>
            </div>
        </article>

      </div>
    </div>

        </>
        );
    }
    
    export default Services;