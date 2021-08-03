import Image from 'next/image'

const Clients = () => {
    return (
      <>
        <div className="grid px10">
          <div>
            <h2 className="center">Les amis que nous nous sommes faits en cours de route</h2>
            <div className="clients">

            <div className="clientlogo"><a href="https://www.esf-chaillol.com/" target="_blank"><Image className="client" 
                src="/images/clients/ESF-CHAILLOL-SKI.png" alt= "ESF Chaillol" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.tennisclublyon.com/" target="_blank"><Image className="client" 
                src="/images/clients/TENNIS-CLUB-DE-LYON.png" alt= "Tennis Club de Lyon" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.rainbird.fr/" target="_blank"><Image className="client" 
                src="/images/clients/RAIN-BIRD-IRRIGATION.png" alt= "Rain Bird" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.chabanel-montelimar.fr/" target="_blank"><Image className="client" 
                src="/images/clients/CHABANEL-PERGOLAS.png" alt= "Chabanel" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://svd-studio.fr/" target="_blank"><Image className="client" 
                src="/images/clients/SVD-STUDIO-AFFICHAGE-DYNAMIQUE.png" alt= "SVD Studio" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.proj-immo.com/" target="_blank"><Image className="client" 
                src="/images/clients/PROJIMMO-IMMOBILIER.png" alt= "Proj'Immo" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://sofram-valence.fr/" target="_blank"><Image className="client" 
                src="/images/clients/SOFRAM-CUISINE-PROFESSIONNELLE.png" alt= "Sofram" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.hohokam-bikeshop.fr/" target="_blank"><Image className="client" 
                src="/images/clients/HOHOKAM-BIKESHOP.png" alt= "Hohokam Bikeshop" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.beta-tools.com/fr/" target="_blank"><Image className="client" 
                src="/images/clients/BETA-TOOLS.png" alt= "Beta Tools" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.evidencecoiffure.fr/" target="_blank"><Image className="client" 
                src="/images/clients/EVIDENCE.png" alt= "Evidence" width={90} height={60} /></a>{' '}
              </div>
              <div className="clientlogo">
                <a href="https://www.traceparts.com/fr/" target="_blank"><Image className="client" 
                src="/images/clients/TRACE-PARTS.png" alt= "Trace Parts" width={90} height={60} /></a>{' '}
              </div>

            </div>
            </div>
        </div>
          </>
);
}

export default Clients;