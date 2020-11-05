import React from 'react';

import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-11">
          <div className="row justify-content justify-content-between align-items-center">
            <div className="col-12 col-md-6 info-container text-center text-md-left">
              <p>San Salvador 1510 (Casa en el Aire)</p>
              <p>
                <a
                  href="mailto:hola@subte.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hola@subte.uy
                </a>
              </p>
            </div>

            <div className="col-12 col-md-3 social-networks-container align-self-center mt-2 mt-md-0 mb-4 mb-md-0">
              <a
                href="https://www.facebook.com/subteuy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/subte_uy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/subteuy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
