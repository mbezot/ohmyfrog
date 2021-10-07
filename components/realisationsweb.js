import Image from 'next/image'
import Link from 'next/link'

const RealisationsWeb = () => {
    return (
        <>
        <div className="grid px10">
            <div className="colonne">
                <h2>Nos dernières réalisations</h2>
            </div>
        </div>

    <div className="px10">
        <div className="wrapper">
            
       <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-design-maviela-charleval.jpg" 
            alt="MA VIE LA" 
            width={600} height={450} />
        <div className="card2__content">
            <h3>Ma Vie Là</h3>
            <p>Gîte de grande capacité en Provence</p>       
            <div className="right bottom">
            <a href="https://maviela-charleval.fr/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
        </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-design-svd-studio.jpg" 
            alt="MA VIE LA" 
            width={600} height={450} />
            <div className="card2__content">
            <h3>SVD Studio</h3>
            <p>Agence de communication digitale &amp; studio de motion design</p>
            <div className="right bottom">
            <a href="https://svd-studio.fr/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-design-stores-habitalp.jpg" 
            alt="Stores Habit'Alp" 
            width={600} height={450} />
            <div className="card2__content">
            <h3>Stores Habit&apos;Alp</h3>
            <p>Spécialiste pergolas, stores, volets</p>
            <div className="right bottom">
            <a href="https://www.storeshabitalp.fr/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-design-tennis-club-de-lyon.jpg" 
            alt="MA VIE LA" 
            width={600} height={450} />
        <div className="card2__content">
            <h3>Tennis Club de Lyon</h3>
            <p>Club de tennis</p>       
            <div className="right bottom">
            <a href="https://www.tennisclublyon.com/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
        </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-frogposters.jpg" 
            alt="Frog Posters" 
            width={600} height={450} />
            <div className="card2__content">
            <h3>Frog Posters</h3>
            <p>Boutique en ligne d&apos;affiches et posters</p>
            <div className="right bottom">
            <a href="https://frogposters.com/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-projimmo.jpg" 
            alt="Proj'Immo" 
            width={600} height={450} />
            <div className="card2__content">
            <h3>Proj&apos;Immo</h3>
            <p>Conseil en investissement locatif</p>
            <div className="right bottom">
            <a href="https://www.proj-immo.com/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
            </div>
        </article>

        <article className="card2 bgyellow">
            <Image src="/images/portfolioweb/web-maxime-ferrandin.jpg" 
            alt="Maxime Ferrandin" 
            width={600} height={450} />
            <div className="card2__content">
            <h3>Maxime Ferrandin</h3>
            <p>Architecture d&apos;intérieur</p>
            <div className="right bottom">
            <a href="https://maxime-ferrandin.fr/" rel="noreferrer" target="_blank"  className="btn-plus">
              <div>Voir le site</div>
                <div className="plus">+</div>
            </a>
            </div>
            </div>
        </article>

        </div>
    </div>

        </>
        );
}

export default RealisationsWeb;