import Link from 'next/link'
import Contact from '../contact/contact'
import Image from 'next/image'

const Footer = () => {

    return (

<footer id="contact">
    <div className="grid footer px10 pt7">
        <div className="colonne txtwhite">

            <h2 className="leadXXL txtyellow">On fait équipe ?</h2>
            
        </div>
    </div>

    <div className="grid footer px10">
        <div className="colonne">
            <Contact/>
        </div>
        <div className="colonne txtwhite">
            <h3>Oh My FroG</h3>
            <p>Oh My Frog est une agence marketing pour les PME perfusée au digital, agile, honnête, 
                qui bosse dur, qui aime s’éclater et qui pétille d’idées fraîches pour votre business.<br />
            Chez nous pas de jargon. On vous propose plutôt un vrai accompagnement et on vous 
                    explique tout : vous savez exactement ce qui fonctionne et pourquoi.<br />
            Nos spécialités : la création de sites web et e-commerce, 
                    le référencement dans les moteurs de recherche et les campagnes de pub en ligne. 
                    On fait équipe ?</p>
            <h3>Le QG</h3>
            <div className="footericontext">
                <svg width="20" height="20" fill="#86bf58" 
                viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            <span>2 rue des Aires, 13350 Charleval, France</span>
            </div>

            <div className="footericontext">
                <svg width="20" height="20" fill="#86bf58" 
                viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            <span>+33 (0)6 65 37 44 63</span>
            </div>

            <div className="footericontext">
                <svg width="20" height="20" fill="#86bf58" 
                viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
            <span ><a href="mailto:melanie@ohmyfrog.fr">melanie &#91;@&#93; ohmyfrog.fr</a></span>
            </div>
            
            <p>&nbsp;</p>
            <h3>Suivre la grenouille</h3>
                <div className="footericontext">
                    <a href="https://fr.linkedin.com/in/melaniebezottrottet" rel="noreferrer" target="_blank">
                        <svg width="20" height="20" fill="#ff6161" 
                        viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/frogposters/" rel="noreferrer" target="_blank">
                        <svg width="20" height="20" fill="#ff6161" 
                        className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/frogposters" rel="noreferrer" target="_blank">
                        <svg width="20" height="20" fill="#ff6161" 
                        viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                    </div>
        </div>
    </div>
    <div className="grid footer footerbgimage pt5 pb5">
        <div className="colonne txtwhite center">
        <p className="menu">
                <Link href="/a_propos"><a> A propos</a></Link> |
                <Link href="/mentions_legales"><a> Mentions Légales</a></Link> |
                <Link href="/confidentialite"><a> Politique de confidentialité</a></Link>
             </p>
            Copyright {new Date().getFullYear()} &copy; Oh My Frog. 
            Tous droits réservés.
            <p>&nbsp;</p>
            <p className="smalltext">This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy" rel="noreferrer" target="_blank">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" rel="noreferrer" target="_blank">Terms of Service</a> apply.</p>
        
                    <div className="sp7"></div>
        </div>
        
    </div>
</footer>

    );
}

export default Footer;