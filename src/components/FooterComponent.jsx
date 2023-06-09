import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";




const FooterComponent = () => {
return (
  <div className="footer">
  <footer className="bg-dark text-white">
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4">
          <h5>Notre Adresse : </h5>
          <p>191 SAADA</p>
          <p>40000 Marrakech</p>
          <p>Maroc</p>
          <h5>Téléphone</h5>
          <p>+212 6 43 10 31 94</p>
          <h5>Email</h5>
          <p>contact@geopharma.com</p>
        </div>
        <div className="col-md-4">
          <h5>Contactez-nous via :</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.facebook.com/appname" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="fa-lg mr-2" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/appname" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="fa-lg mr-2" />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/appname" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg mr-2" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="widget no-box">
              <h5 className="widget-title">Liens Rapides :</h5>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="thumbnail-widget">
                  <li className="thumb-content">
                    <Link to="/accueil" className="nav-link">
                      Accueil
                    </Link>
                  </li>
                  <li className="thumb-content">
                    <Link to="/apropos" className="nav-link">
                      A propos
                    </Link>
                  </li>
                  <li className="thumb-content">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="thumb-content">
                    <Link to="/pharmacies" className="nav-link">
                      Pharmacies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div className="spanfooter">
      <span style={{ color: 'green' }}>All Rights Reserved 2023 @GeoPharma</span>
    </div>
  </footer>
</div>
);
};

export default FooterComponent;