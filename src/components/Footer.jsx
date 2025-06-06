import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer id="footer" className="mt-5 pt-4 pb-2 border-top">
      <div className="container">
        <div className="row text-center text-md-start">
          
          <div className="col-md-4 mb-4">
            <img src={logo} alt="Logo" width="80" className="mb-2 footer-logo" />
            <p className="fw-semibold mb-1">Yaz Okulu Platformu</p>
            <p className="small text-muted">2025 yaz okulları hakkında gönüllü bilgi platformu.</p>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-custom mb-3">Hızlı Erişim</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Ana Sayfa</a></li>
              <li><a href="/universiteler" className="footer-link">Üniversiteler</a></li>
              <li><a href="/contact" className="footer-link">İletişim</a></li>
              <li><a href="/about" className="footer-link">Hakkında</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-custom mb-3">İletişim</h6>
            <p><i className="bi bi-envelope-fill me-2"></i> abdulrahmanh524@gmail.com</p>
            <p><i className="bi bi-telephone-fill me-2"></i> +90 531 455 1282</p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">
              <a href="#" className="footer-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-icon"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-center small mb-0">&copy; 2025 Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
}

export default Footer;
