import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { universityData } from "../data/universities";

function Details() {
  const { uni } = useParams();
  const data = universityData[uni];
  const detailRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔍 بحث داخل النص + تمييز
  useEffect(() => {
    if (!searchTerm || !data) return;

    const content = data.detail;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    const highlighted = content.replace(regex, "<mark>$1</mark>");
    detailRef.current.innerHTML = highlighted;

    const found = Array.from(detailRef.current.querySelectorAll("mark"));
    setMatches(found);
    setCurrentIndex(0);
  }, [searchTerm, data]);

  // 📍 تمييز العنصر الحالي
  useEffect(() => {
    if (matches.length > 0) {
      matches.forEach((m) => m.classList.remove("bg-warning"));
      const current = matches[currentIndex];
      if (current) {
        current.classList.add("bg-warning");
        current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [matches, currentIndex]);

  // ⬅️➡️ تنقل بين النتائج
  const nextMatch = () => {
    setCurrentIndex((prev) => (prev + 1) % matches.length);
  };

  const prevMatch = () => {
    setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
  };

  if (!data) {
    return (
      <div className="container mt-5">
        <h2>Üniversite Bulunamadı</h2>
        <p>Lütfen geçerli bir üniversite bağlantısı kullanın.</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container my-4 flex-grow-1" id="detailContent">
            {/* ➤ المسار */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Ana Sayfa</a></li>
                <li className="breadcrumb-item">Üniversiteler</li>
                <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
              </ol>
            </nav>

            {/* ➤ عنوان الجامعة */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <img
                src="https://via.placeholder.com/80x80?text=UNI"
                alt="Üniversite"
                className="university-image"
              />
              <div>
                <h2 className="fw-bold mb-1" style={{ color: "var(--primary-color)" }}>{data.name}</h2>
                <p className="text-muted fs-6">Şehir: {data.city}</p>
                <small className="update-date">Son Güncelleme: 5 Haziran 2025</small>
              </div>
            </div>

            {/* ➤ البحث داخل التفاصيل */}
            <div className="input-group mb-3">
              <span className="input-group-text bg-white">
                <i className="bi bi-search text-success"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Detaylarda ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.trim())}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setSearchTerm(searchTerm)}
              >
                Ara
              </button>
            </div>

            {/* ➤ تنقل بين النتائج */}
            {matches.length > 0 && (
              <div className="d-flex align-items-center gap-2 mb-4">
                <button onClick={prevMatch} className="btn btn-sm btn-outline-dark">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <span className="fw-bold">{currentIndex + 1} / {matches.length}</span>
                <button onClick={nextMatch} className="btn btn-sm btn-outline-dark">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            )}

            {/* ➤ محتوى التفاصيل */}
            <div className="accordion" id="detailAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDetail"
                    aria-expanded="true"
                  >
                    Üniversite Bilgisi
                  </button>
                </h2>
                <div id="collapseDetail" className="accordion-collapse collapse show">
                  <div
                    className="accordion-body fs-5"
                    ref={detailRef}
                    style={{ lineHeight: "1.8" }}
                  >
                    {data.detail}
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

export default Details;
