import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container my-5 flex-grow-1">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card shadow border-0 rounded-4">
                  <div className="card-body p-4">
                    <h4 className="card-title mb-4 text-custom fw-bold text-center">İletişim Formu</h4>

                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Ad Soyad</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white"><i className="bi bi-person-fill"></i></span>
                          <input type="text" className="form-control rounded-end" id="name" required />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white"><i className="bi bi-envelope-fill"></i></span>
                          <input type="email" className="form-control rounded-end" id="email" required />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="message" className="form-label">Mesajınız</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white"><i className="bi bi-chat-left-text-fill"></i></span>
                          <textarea className="form-control rounded-end" id="message" rows="4" required></textarea>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary btn-lg rounded-pill shadow-sm">
                          <i className="bi bi-send me-1"></i> Gönder
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
