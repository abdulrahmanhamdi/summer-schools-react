import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function About() {
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
                    <h2 className="text-custom fw-bold text-center mb-4">Hakkında</h2>

                    <p className="fs-5 mb-3">
                      Bu web sitesi, Türkiye'deki üniversitelerin <strong>2025 Yaz Okulu</strong> duyurularını bir araya getirmek amacıyla hazırlanmıştır. Öğrencilerin güncel bilgilere daha hızlı ve kolay ulaşmasını sağlamak hedeflenmiştir.
                    </p>
                    <p className="fs-5 mb-3">
                      Site, bireysel gönüllü çabalarla geliştirilmiştir ve üniversitelerle <strong>resmî bir bağlantısı yoktur</strong>. Tüm bilgiler üniversitelerin kendi resmi kaynaklarından manuel olarak derlenmektedir.
                    </p>
                    <p className="fs-5 mb-3">
                      <strong>Proje Sahibi:</strong> Abdulrahman Hamdi <br />
                      <strong>Amacı:</strong> Bilgiye erişimi demokratikleştirmek ve öğrencilere katkı sağlamak
                    </p>

                    <div className="alert alert-info border-0 rounded-3 mt-4" style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)", borderLeft: "5px solid var(--secondary-color)" }}>
                      <i className="bi bi-info-circle-fill me-2"></i>
                      Yaz okulu tarihleri ve detayları değişebilir. Lütfen üniversitenizin resmi web sitesini takip ediniz.
                    </div>

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

export default About;
