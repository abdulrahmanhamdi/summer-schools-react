import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Dashboard() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    city: "",
    type: "Devlet",
    detail: "",
    logo: "",
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [universities, setUniversities] = useState([]);
  const [authChecked, setAuthChecked] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = ekleme modu

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      window.location.href = "/login";
    } else {
      setAuthChecked(true);
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchUniversities = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/universities");
      const data = await res.json();
      setUniversities(Object.values(data));
    } catch (error) {
      console.error("Veriler alınamadı", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/universities/${editingId}`
      : "http://localhost:5000/api/universities";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: editingId ? "Üniversite güncellendi!" : "Üniversite başarıyla eklendi!",
        });
        setForm({ id: "", name: "", city: "", type: "Devlet", detail: "", logo: "" });
        setEditingId(null);
        fetchUniversities();
      } else {
        setMessage({ type: "error", text: data.error || "Bir hata oluştu." });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Sunucuya bağlanılamadı." });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const onay = window.confirm("Bu üniversiteyi silmek istediğinizden emin misiniz?");
    if (!onay) return;

    try {
      const res = await fetch(`http://localhost:5000/api/universities/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Üniversite silindi." });
        fetchUniversities();
      } else {
        const data = await res.json();
        setMessage({ type: "error", text: data.error || "Silme işlemi başarısız oldu." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Sunucuya ulaşılamadı." });
    }
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  if (!authChecked) return null;

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container my-4 flex-grow-1">
            <h3 className="text-custom fw-bold mb-4">
              {editingId ? "Üniversiteyi Düzenle" : "Yeni Üniversite Ekle"}
            </h3>

            {message && (
              <div className={`alert alert-${message.type === "success" ? "success" : "danger"}`} role="alert">
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="card p-4 shadow rounded-4" style={{ maxWidth: "700px" }}>
              <div className="mb-3">
                <label className="form-label">Üniversite ID</label>
                <input
                  type="text"
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  className="form-control"
                  required
                  disabled={editingId !== null} // لا يسمح بتغيير ID أثناء التعديل
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Üniversite Adı</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Şehir</label>
                <input type="text" name="city" value={form.city} onChange={handleChange} className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Üniversite Türü</label>
                <select name="type" value={form.type} onChange={handleChange} className="form-select">
                  <option value="Devlet">Devlet</option>
                  <option value="Vakıf">Vakıf</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Detay</label>
                <textarea name="detail" value={form.detail} onChange={handleChange} rows="4" className="form-control" required></textarea>
              </div>

              <div className="mb-4">
                <label className="form-label">Logo Linki (opsiyonel)</label>
                <input type="text" name="logo" value={form.logo} onChange={handleChange} className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading
                  ? editingId
                    ? "Güncelleniyor..."
                    : "Ekleniyor..."
                  : editingId
                  ? "Güncelle"
                  : "Üniversiteyi Ekle"}
              </button>
            </form>

            <hr className="my-5" />
            <h4 className="fw-bold text-custom mb-3">Ekli Üniversiteler</h4>

            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Logo</th>
                    <th>Adı</th>
                    <th>Şehir</th>
                    <th>Türü</th>
                    <th>Durum</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((uni) => (
                    <tr key={uni.id}>
                      <td>
                        {uni.logo ? (
                          <img src={uni.logo} alt="logo" width="50" height="50" style={{ objectFit: "cover", borderRadius: "50%" }} />
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>{uni.name}</td>
                      <td>{uni.city}</td>
                      <td>
                        <span className={`badge ${uni.type === "Devlet" ? "bg-success" : "bg-info text-dark"}`}>
                          {uni.type}
                        </span>
                      </td>
                      <td>
                        <span className={uni.detail.includes("yapılmamaktadır") ? "text-warning" : "text-danger fw-bold"}>
                          {uni.detail}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            setForm({
                              id: uni.id,
                              name: uni.name,
                              city: uni.city,
                              type: uni.type,
                              detail: uni.detail,
                              logo: uni.logo || "",
                            });
                            setEditingId(uni.id);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="btn btn-sm btn-warning me-2"
                        >
                          Düzenle
                        </button>
                        <button
                          onClick={() => handleDelete(uni.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Sil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
