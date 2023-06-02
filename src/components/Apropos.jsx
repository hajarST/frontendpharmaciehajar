import React from 'react'
import FooterComponent from './FooterComponent';
function Apropos() {
    return (
      <div  style={{ width: "100%" }}>
        <div className='container' >
          <h1 className="mt-4 mb-4 text-center" style={{color: "blue"}}>À Propos</h1>
          
              <h5 >Bienvenue sur GeoPharma, notre application de localisation des pharmacies au Maroc !</h5>
              <p >
              GeoPharma vous permet de trouver facilement les pharmacies les plus proches de chez vous, que vous soyez dans une grande ville ou une zone rurale.</p>
              <p >
              Vous pouvez effectuer des recherches de pharmacies par ville et zone, facilitant ainsi la recherche de pharmacies dans des régions spécifiques du Maroc.</p>
              <p >
              Nous mettons constamment à jour notre base de données pour garantir que les informations sur les pharmacies sont précises et à jour.</p>
              <p >
                N'hésitez pas à explorer notre application GeoPharma et à utiliser les fonctionnalités de recherche pour trouver la pharmacie la plus proche de chez vous en cas de besoin.
              </p>
              <p >
                Merci d'utiliser GeoPharma et nous espérons qu'elle vous sera utile !
              </p>
              </div>
          
        
      <div style={{ width: "100%" }}>
        <FooterComponent />
      </div>
      </div>
   
      );
    };
export default Apropos;