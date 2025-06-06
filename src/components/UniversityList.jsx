import React, { useState } from "react";
import { Link } from "react-router-dom";
import { universityData } from "../data/universities";

function UniversityList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");


  const universities = Object.entries(universityData).map(([id, uni]) => ({
    id,
    ...uni,
  }));


  const filtered = universities.filter((uni) => {
    const nameMatch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch = typeFilter ? uni.type === typeFilter : true;
    const statusMatch = statusFilter
      ? (statusFilter === "yok"
          ? uni.detail.includes("yapılmamaktadır")
          : !uni.detail.includes("yapılmamaktadır"))
      : true;

    return nameMatch && typeMatch && statusMatch;
  });

  return (
    <>
      {/* 🔍 البحث والفلاتر */}
      <div className="row mb-3 g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Üniversite Ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Tüm Türler</option>
            <option value="Devlet">Devlet Üniversitesi</option>
            <option value="Vakıf">Vakıf Üniversitesi</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Tüm Durumlar</option>
            <option value="var">Açık Olanlar</option>
            <option value="yok">Yaz Okulu Yok</option>
          </select>
        </div>
      </div>

      {/* 💻 جدول في الديسكتوب */}
      <div className="d-none d-md-block">
        <table className="table table-bordered table-hover table-striped text-center align-middle">
          <thead className="custom-dark">
            <tr>
              <th>Üniversite</th>
              <th>Şehir</th>
              <th>Türü</th>
              <th>Durum</th>
              <th>Detay</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((uni) => (
              <tr key={uni.id}>
                <td>{uni.name}</td>
                <td>{uni.city}</td>
                <td>
                  <span
                    className={`badge ${
                      uni.type === "Devlet"
                        ? "bg-success"
                        : "bg-info text-dark"
                    }`}
                  >
                    {uni.type}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      uni.detail.includes("yapılmamaktadır")
                        ? "highlight-warning"
                        : "text-danger fw-semibold"
                    }
                  >
                    {uni.detail}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/details/${uni.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    Detay
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 بطاقات في الهاتف */}
      <div className="d-block d-md-none">
        {filtered.map((uni) => (
          <div className="card mb-3 shadow-sm border-0" key={uni.id}>
            <div className="card-body">
              <h5 className="card-title fw-bold">
                <i
                  className={`bi bi-mortarboard-fill me-2 ${
                    uni.type === "Devlet" ? "text-success" : "text-info"
                  }`}
                ></i>
                {uni.name}
                <span className="badge bg-light text-dark border ms-2">{uni.type}</span>
              </h5>
              <p className="card-text">
                <span
                  className={
                    uni.detail.includes("yapılmamaktadır")
                      ? "highlight-warning"
                      : "text-danger fw-semibold"
                  }
                >
                  {uni.detail}
                </span>
              </p>
              <Link
                to={`/details/${uni.id}`}
                className="btn btn-sm btn-outline-primary"
              >
                Detay
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UniversityList;
