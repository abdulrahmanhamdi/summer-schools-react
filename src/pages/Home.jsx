import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import UniversityList from "../components/UniversityList";
import Footer from "../components/Footer";
import "../assets/css/style.css"; 

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1" id="wrapper">

        <Sidebar />


        <div id="page-content-wrapper" className="flex-grow-1 d-flex flex-column">
          <Topbar />

          <div className="container-fluid p-4 flex-grow-1">

            <h1 className="mb-3">Türkiye Yaz Okulları 2025</h1>

            <div id="countdown" className="mb-4 text-center text-success fw-bold fs-5"></div>


            <div id="universiteler" className="my-5">
              <UniversityList />
            </div>
          </div>
        </div>
      </div>

      {}
      <Footer />
    </div>
  );
}

export default Home;