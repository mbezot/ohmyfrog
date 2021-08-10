import Head from 'next/head'

export default function Portfolio() {
    return (
        <>
        <Head>
        <title>Portfolio</title>
        <meta name="description" content="La galerie des réalisations Oh My Frog : sites web, flyers, logos, brochures, catalogues et bien plus encore." />
        <meta property="og:title" content="Oh My Frog | Portfolio" />
        <meta property="og:description" content="La galerie des réalisations Oh My Frog : sites web, flyers, logos, brochures, catalogues et bien plus encore." />
        <meta property="og:url" content="https://ohmyfrog.fr/portfolio" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid-wrap">
            <div className="grid bgdarkblue txtwhite py7 px10">
                <div className="colonne">
                    <h1 className="txtwhite">Besoin de preuves ?</h1>
                    <p>Aucun problème.</p>
                </div>
            </div>
        </main>
        </>
    )
}