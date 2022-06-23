import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Home - Subaku";
  }, []);

  return (
    <div>
      <Navbar />
      <div className="landing-wrapper">
        <section className="landing-jumbotron">
          <div className="container jumbotron-container">
            <div className="jumbotron-text">
              <h1>Yuk, Daftar &amp; Wujudkan Mimpimu! </h1>
              <p>
                Daftarkan dirimu, dan siapkan langkah pertamamu untuk meraih
                beasiswa impian bersama Subaku.
              </p>
              <div className="jumbotron-buttons">
                <Link to="/register" className="register-btn my-btn prim-btn">
                  Daftar Sekarang
                </Link>
                <Link to="/login" className="login-btn my-btn sec-btn">
                  Masuk
                </Link>
              </div>
            </div>
            <div className="jumbotron-pic">
              <img
                src={require("../../../assets/grad-hat.png")}
                alt="jumbotron pic: gradutaion cap"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
        <section className="landing-cari">
          <div className="container cari-container">
            <h1>Cari beasiswa yang Kamu minati</h1>
            <p>
              Mulai mencari beragam beasiswa pilihan yang bisa Kamu daftarkan di
              Subaku.
            </p>
            <a href="#" className="cari-btn my-btn sec-btn">
              Cari Beasiswa
            </a>
          </div>
        </section>
        <section className="landing-menu desc-first">
          <div className="menu-container">
            <div className="menu-desc">
              <div className="containers">
                <h1>Pengumuman Seleksi</h1>
                <p>
                  Nantikan selalu kelulusan seleksi beasiswa Kamu di halaman
                  Pengumuman Seleksi.
                </p>
                <a href="#" className="menu-btn my-btn sec-btn">
                  Lihat Pengumuman
                </a>
              </div>
            </div>
            <div className="menu-pic">
              <div className="containers">
                <img
                  src={require("../../../assets/pengumuman-seleksi.png")}
                  alt="pengumuman seleksi"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="landing-menu desc-last">
          <div className="menu-container">
            <div className="menu-pic">
              <div className="containers float-end">
                <img
                  src={require("../../../assets/prosedur-pendaftaran.png")}
                  alt="pengumuman seleksi"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="menu-desc">
              <div className="containers">
                <h1>Prosedur Pendaftaran</h1>
                <p>
                  Sebelum memilih dan mendaftar beasiswa, Kamu bisa mempelajari
                  prosedurnya terlebih dahulu di halaman Prosedur Pendaftaran.
                </p>
                <a href="#" className="menu-btn my-btn sec-btn">
                  Lihat Prosedur
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-extras">
          <div className="container extras-container">
            <div className="extras-desc">
              <h1>Sudah siap untuk gabung?</h1>
              <p>Daftar akun atau cari beasiswa sekarang!</p>
            </div>
            <div className="extras-buttons">
              <a href="#" className="register-btn my-btn prim-btn">
                Daftar Akun
              </a>
              <a href="#" className="cari-btn my-btn sec-btn">
                Cari Beasiswa
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
