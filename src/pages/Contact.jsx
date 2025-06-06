import React, { useState } from "react";
import emailjs from "emailjs-com";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");

    emailjs
      .send(
        "service_cqfmrmr",      
        "template_5xr43qo",     
        form,
        "M3kVyQREHbdmCfYL9"
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("E-posta gönderilemedi:", err);
        setError("Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
      });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container py-5 flex-grow-1">
            <h2 className="text-center fw-bold text-custom mb-4">İletişim</h2>
            <p className="text-center mb-5">
              Görüş, öneri veya hata bildirimi için bizimle iletişime geçebilirsiniz.
            </p>

            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow-sm border-0 rounded-4 p-4" style={{ backgroundColor: "var(--card-bg)" }}>
                  {submitted && (
                    <div className="alert alert-success text-center">
                      Mesajınız başarıyla gönderildi. Teşekkür ederiz!
                    </div>
                  )}

                  {error && (
                    <div className="alert alert-danger text-center">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Adınız</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">E-posta</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Mesajınız</label>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control"
                        required
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                      Gönder
                    </button>
                  </form>
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
