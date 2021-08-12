import Link from 'next/link'


const Ctatwo = () => {

    return (
        <>

        <div className="px20">
            <div className="wrapper">
                <div className="cta">
                    <div className="ctacontent bgyellow">
                        <h3>Nous sommes l’alternative aux agences généralistes</h3>
                    </div>
                    <div className="ctacontent bgpink">
                    <p className="txtwhite lineheigt2 pt2">Une petite équipe d&apos;experts, un accompagnement personnalisé, 
                    une bonne humeur contagieuse ? C’est nous.</p>
                    <Link href="#contact">
                        <a className="btn-plus right">
                        <div>&#8594; On s&apos;appelle ?</div>
                        </a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
        );
    }
    
    export default Ctatwo;