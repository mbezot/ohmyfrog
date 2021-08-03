import Link from 'next/link'
import Image from 'next/image'


const Services = () => {

    return (
        <>

            <div className="grid px10">

            <div className="colonne">
            <div className="iconcard bggreen">
                <div className="left">
                    <Image src="/images/icons/icon-sablier.svg" 
                    alt="Audit marketing"
                    width={80} height={80} />
                </div>
                <span>&nbsp;</span>
                <h3>Audit marketing</h3>
                <p>Faites le point sur vos points forts et points faibles.
                Nous établissons plan d’action stratégique pour vendre à la bonne personne, au bon moment.</p>
                <Link href="/strategie_digitale"><a className="plus bottom right">+</a></Link>
            </div>
            </div>

            <div className="colonne">
            <div className="iconcard bggreen">
                <div className="left">
                    <Image src="/images/icons/icon-double-rond.svg" 
                    alt="Création de sites web"
                    width={80} height={80} />
                    </div>
                    <span>&nbsp;</span>
                    <h3>Web Design</h3>
                    <p>Vous êtes fier de votre entreprise, vous allez être fier de votre site
                    Nous faisons de votre site web votre vendeur numéro 1.</p>
                    <Link href="/web-design"><a className="plus bottom right">+</a></Link>
            </div>
            </div>

            <div className="colonne">
            <div className="iconcard bggreen">
                <div className="left">
                    <Image src="/images/icons/icon-bols.svg" 
                    alt="Marketing digital"
                    width={80} height={80} />
                </div>
                <span>&nbsp;</span>
                <h3>Marketing digital</h3>
                <p>Référencement, réseaux sociaux, landing pages, inbound marketing...
                Vous allez enchaîner les leads comme Nadal enchaîne les coups droits.</p>
                <Link href="/marketing-digital"><a className="plus bottom right">+</a></Link>
                
            </div>
            </div>

            </div>
        </>
        );
    }
    
    export default Services;