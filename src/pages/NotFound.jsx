import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />
          <div className="container text-center my-5 flex-grow-1 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 text-danger fw-bold mb-4">404</h1>
            <p className="lead mb-4">Aradığınız sayfa bulunamadı.</p>
            <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
              Ana Sayfa'ya Dön
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
