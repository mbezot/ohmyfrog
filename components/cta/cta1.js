import Link from 'next/link'


const Cta1 = () => {

    return (
        <>

        <div className="px20">
            <div className="wrapper">
                <div className="cta">
                    <div className="ctacontent bgyellow">
                        <h3>Nous ne sommes pas des voyageurs intergalactiques...</h3>
                    </div>
                    <div className="ctacontent bgpink">
                    <p className="txtwhite lineheigt2 pt2">Mais nous n’hésiterons pas à faire le 
                    petit pas supplémentaire qui vous permettra de décrocher la lune.</p>
                    <Link href="#contact">
                        <a className="btn-plus right">
                        <div>&#8594; Vous avez un projet ?</div>
                        </a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        </>
        );
    }
    
    export default Cta1;