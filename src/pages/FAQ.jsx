import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function FAQ() {
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
                    <h2 className="mb-4 text-primary fw-bold text-center">Sıkça Sorulan Sorular (SSS)</h2>

                    <div className="accordion accordion-flush" id="faqAccordion">

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
                            Kredi limiti ne kadardır?
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

                      {/* ➕ يمكنك إضافة المزيد بسهولة */}

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

export default FAQ;
