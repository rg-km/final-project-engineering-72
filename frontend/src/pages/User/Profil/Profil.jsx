import React from "react";
import DataProfil from "../../../Components/FormDataProfil/DataProfil";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";
import "./Profil.css";

export default function Profil() {
  return (
    <div>
      <Navbar />
      <div className="kolom-data-profil">
        <div className="container mt-5" id="kolom-profil">
          <div className="row">
            <DataProfil />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
