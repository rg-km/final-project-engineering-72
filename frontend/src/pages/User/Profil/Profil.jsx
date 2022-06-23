import React from "react";
import DataProfil from "../../../Components/FormDataProfil/DataProfil";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";

export default function Profil() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <DataProfil />
        </div>
      </div>
    </div>
  );
}
