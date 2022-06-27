import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";
import useStore from "../../../store/loginStore";

export default function LandingPage() {
  const {usernameLogin, isLogin} = useStore()

  useEffect(() => {
    document.title = "Home - Subaku";
  }, []);

  // if (!localStorage.getItem("isAuthenticated")) {
  //   return <Navigate replace to="/login" />;
  // }

  // if (localStorage.getItem("role") !== "ADMIN") {
  //   alert("USER");
  //   <Navigate replace to="/login" />;
  // }
<<<<<<< HEAD
=======

  const JumbotronDesc = () => {
    if (isLogin === true) {
      return (
        <>
          <h1>Halo, {usernameLogin}! Selamat datang kembali di Subaku </h1>
          <p>
            Semoga hari Kamu menyenangkan, ya! Jangan lupa scroll di halaman Daftar Beasiswa untuk menemukan beasiswa impianmu.
          </p>
        </>
      )
    }
    return (
      <>
        <h1>Yuk, Daftar &amp; Wujudkan Mimpimu! </h1>
        <p>
          Daftarkan dirimu, dan siapkan langkah pertamamu untuk meraih
          beasiswa impian bersama Subaku.
        </p>
      </>
    )
  }
>>>>>>> 9be35ebdedc51dbb025fbb73473ff17a96e01b48

  return (
    <div>
      <Navbar />
      <div className="landing-wrapper">
        <section className="landing-jumbotron">
          <div className="container jumbotron-container">
            <div className="jumbotron-text">              
              <JumbotronDesc/>
              <div className="jumbotron-buttons">
                {isLogin ? 
                  <Link to="/DaftarBeasiswa" className="register-btn my-btn prim-btn">
                    Daftar Beasiswa
                  </Link>                  
                  :
                  <>
                    <Link to="/register" className="register-btn my-btn prim-btn">
                      Daftar Sekarang
                    </Link>
                    <Link to="/login" className="login-btn my-btn sec-btn">
                      Masuk
                    </Link>
                  </>
                }
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
            <Link to="/DaftarBeasiswa" className="cari-btn my-btn sec-btn">
              Cari Beasiswa
            </Link>
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
                <Link
                  to="/PengumumanBeasiswa"
                  className="menu-btn my-btn sec-btn"
                >
                  Lihat Pengumuman
                </Link>
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
                <Link
                  to="/ProsedurBeasiswa"
                  className="menu-btn my-btn sec-btn"
                >
                  Lihat Prosedur
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="landing-extras">
          <div className="container extras-container">
            <div className="extras-desc">
              <h1>Sudah siap untuk {isLogin ? "daftar beasiswa" : "gabung"}?</h1>
              <p>{isLogin ? "Ayo cari beasiswanya sekarang!" : "Daftar akun atau cari beasiswa sekarang!"}</p>
            </div>
            <div className="extras-buttons" style={{flexDirection: "row-reverse"}}>
              {
                isLogin ? 
                <Link to="/DaftarBeasiswa" className="cari-btn my-btn prim-btn">
                  Cari Beasiswa
                </Link> 
                :
                <>
                <Link to="/register" className="register-btn my-btn prim-btn">
                  Daftar Akun
                </Link>
                <Link to="/DaftarBeasiswa" className="cari-btn my-btn sec-btn">
                  Cari Beasiswa
                </Link>            
                </>
              }
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
