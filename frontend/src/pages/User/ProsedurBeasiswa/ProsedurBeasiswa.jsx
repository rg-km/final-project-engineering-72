import React from "react";
import "./ProsedurBeasiswa.css";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ProsedurBeasiswa() {
  useEffect(() => {
    document.title = "Prosedur Beasiswa - Subaku";
  }, []);
  return (
    <div>
      <Navbar />
      <div className="Prosedur-beasiswa">
        <div className="container">
          <div className="card pt-5 mt-5 border-0">
            <div className="card-header bg-transparent border-0">
              <h1 className="judul text-center">
                Prosedur Pendaftaran Beasiswa
              </h1>
            </div>
            <div className="card-body " id="card-body-prosedur">
              <h5>1. Lengkapi Data Profil</h5>
              <p>
                Isi data diri, informasi sekolah, daftar perlombaan dan daftar
                organisasi.
              </p>
              <p></p>
              <h5>2. Cari Beasiswa Yang Sesuai</h5>
              <p>
                Ada banyak beasiswa dari luar dan dalam negeri yang bisa kamu
                pilih. Temukan universitas/sekolah impian kamu. Lalu klik
                Daftar.
              </p>
              <p></p>
              <h5>3. Seleksi Beasiswa</h5>
              <p>
                Tim dari Subaku akan melakukan penyeleksian terhadap beasiswa
                yang kamu pilih.
              </p>
              <p></p>
              <h5>4. Pengumuman Beasiswa</h5>
              <p>
                Setelah melakukan penyeleksian, Tim akan mengumumkan hasil siswa
                terpilih yang mendapatkan beasiswa
              </p>
              <p></p>
              <img
                className="img-prosedur float-right"
                src={require("../../../assets/grad-hat.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
