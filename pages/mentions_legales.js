import Head from 'next/head'

export default function MentionsLegales() {
    return (
        <>
        <Head>
        <title>Mentions légales</title>
        <meta name="description" content="Pour consulter les données très très légales de Oh My Frog." />
        <meta property="og:title" content="Mentions légales" />
        <meta property="og:description" content="Pour consulter les données très très légales de Oh My Frog." />
        <meta property="og:url" content="https://ohmyfrog.fr/mentions_legales" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid-wrap">

            <div className="grid bggreen px10 py5">
                <div className="colonne">
                    <h1 className="display-1 pb-4 pt7">Mentions Légales</h1>
                </div>
            </div>

            <div className="grid px10 py5">
                <div className="colonne">
                <p>Responsable de la publication &amp; 
                    développement du site : Mélanie Bezot-Trottet<br />
                    </p>
                    <p>&nbsp;</p>
                    <h2>Propriétaire du site</h2>
                        <p><strong>Oh My Frog EURL</strong>,<br /> 
                        Capital social : 3000 €<br />
                        SIRET : 894 979 913 00015<br />
                        SIREN : 894 979 913<br />
                        TVA : FR24894979913</p>
                        <p>&nbsp;</p>
                    <h2>Siège social</h2>
                        <p>2 rue des Aires, 13350 Charleval, France<br />
                        Tel : +33 (0)6 65 37 44 63<br />
                        Mail : frogposters [a] ohmyfrog.fr
                        </p>
                        <p>&nbsp;</p>
                    <h2>Hébergeur</h2>
                        <p>Infomaniak<br />
                        Rue Eugène-Marziano 25, 1227 Genève, Suisse<br />
                        Tel : +41 22 820 35 44</p>
                </div>
                <div className="colonne">
                <p>L’ensemble des informations contenues sur ce site sont fournies “en l’état”, 
                        sans aucune garantie. L’utilisateur devra s’assurer de l’exactitude des informations 
                        contenues sur ce site auprès du propriétaire du site, notamment celles relatives aux produits, 
                        services et tarifs. Le propriétaire du site ne pourra pas être tenu responsable de toute
                         utilisation qui pourrait en être faite et de tout préjudice direct ou indirect pouvant en découler.</p>
                <p>Le propriétaire de ce site se réserve le droit de modifier ce site et les informations qu’il 
                             contient et ce à tout moment sans avis préalable.</p>
                </div>
            </div>

        </main>
        </>
    )
}