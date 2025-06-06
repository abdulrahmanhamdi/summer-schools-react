import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />

        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container py-5 flex-grow-1">
            {/* مقدمة ترحيبية */}
            <section className="text-center mb-5">
              <h1 className="display-5 fw-bold text-custom">Türkiye Yaz Okulları 2025</h1>
              <p className="lead mt-3">
                Bu platform, Türkiye'deki üniversitelerin yaz okulu duyurularını bir araya getirerek,
                öğrencilerin bilgiye hızlı ve kolay ulaşmasını sağlamayı hedefler.
              </p>

              <NavLink to="/universiteler" className="btn btn-success btn-lg mt-4 shadow px-4 py-2">
                Tüm Üniversiteleri Gör
              </NavLink>
            </section>

            {/* ✅ نصائح للطلاب */}
            <section className="mb-5" id="tavsiyeler">
              <h3 className="fw-bold text-custom mb-4 text-center">Öğrenciler İçin Tavsiyeler</h3>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        <i className="bi bi-lightbulb-fill me-2"></i> Dikkatlice Karşılaştır
                      </h5>
                      <p className="card-text">
                        Yaz okulları arasında ders içerikleri, tarihler ve ücretler değişebilir.
                        Karar vermeden önce üniversitelerin duyurularını dikkatle karşılaştır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        <i className="bi bi-journal-check me-2"></i> AKTS Sınırını Unutma
                      </h5>
                      <p className="card-text">
                        Yaz okulunda genellikle maksimum 10 AKTS ders alınabilir. Kendi okulunun kurallarına dikkat et.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-success">
                        <i className="bi bi-people-fill me-2"></i> Misafir Öğrenci Şartları
                      </h5>
                      <p className="card-text">
                        Farklı üniversitelerden ders almak isteyen öğrenciler için "misafir öğrenci" başvuru şartlarını mutlaka kontrol et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 📆 (اختياري) عدّ تنازلي رمزي */}
            <section className="text-center mt-5">
              <h5 className="text-secondary">Yaz okullarının başlamasına kalan süre:</h5>
              <div className="display-6 fw-bold text-success">15 Gün</div>
            </section>

  <section className="mt-5" id="hakkimizda">
  <h3 className="fw-bold text-custom mb-3 text-center">Hakkımızda</h3>
  <div className="card shadow-sm border-0 rounded-4 mx-auto" style={{ maxWidth: "900px" }}>
    <div className="card-body p-4">
      <p className="fs-5">
        Bu platform, Türkiye'deki <strong>2025 Yaz Okulu</strong> duyurularını merkezi bir yerde toplayarak,
        öğrencilerin bilgiye daha hızlı ve doğru şekilde ulaşmasını sağlamak amacıyla gönüllü olarak geliştirilmiştir.
      </p>
      <p className="fs-5">
        Proje tamamen <strong>resmî olmayan</strong> bireysel bir girişimdir ve üniversitelerle doğrudan bir bağlantısı bulunmamaktadır.
        Tüm bilgiler üniversitelerin <strong>resmî web sitelerinden</strong> manuel olarak derlenmektedir.
      </p>
      <p className="fs-5">
        <strong>Proje Sahibi:</strong> Abdulrahman Hamdi<br />
        <strong>Misyondan:</strong> Bilgiye erişimi demokratikleştirmek ve öğrencilere katkı sağlamak
      </p>
    </div>
  </div>
</section>
<section className="my-5" id="sss">
  <h3 className="fw-bold text-custom mb-4 text-center">Sıkça Sorulan Sorular (SSS)</h3>
  <div className="accordion accordion-flush" id="faqAccordion" style={{ maxWidth: "900px", margin: "0 auto" }}>

    <div className="accordion-item">
      <h2 className="accordion-header" id="q1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a1">
          Yaz okuluna kimler başvurabilir?
        </button>
      </h2>
      <div id="a1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Hem kayıtlı öğrenciler hem de farklı üniversitelerden misafir öğrenciler başvurabilir.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="q2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2">
          Yaz okulunda kaç AKTS alınabilir?
        </button>
      </h2>
      <div id="a2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Yaz okulunda maksimum 10 AKTS kredilik ders alınabilir.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="q3">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3">
          Alınan notlar ortalamaya etkili mi?
        </button>
      </h2>
      <div id="a3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          Evet, yaz okulunda alınan dersler genel not ortalamasına dahil edilir.
        </div>
      </div>
    </div>

  </div>
</section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
