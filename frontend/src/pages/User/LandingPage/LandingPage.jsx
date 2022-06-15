import React, { useEffect, useState } from "react"
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <section className="landing-jumbotron">
        <div className="container jumbotron-container">
          <div className="jumbotron-text">
            <h1>Yuk, Daftar &amp; Wujudkan Mimpimu! </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="jumbotron-buttons">
              <a href="#" className="register-btn my-btn prim-btn">Daftar Sekarang</a>
              <a href="#" className="login-btn my-btn sec-btn">Masuk</a>
            </div>
          </div>
          <div className="jumbotron-pic">
            <img src={require("../../../assets/grad-hat.png")} alt="jumbotron pic: gradutaion cap" className="img-fluid"/>
          </div>
        </div>
      </section>
      <section className="landing-cari">
        <div className="container cari-container">
          <h1>Cari beasiswa yang Kamu minati</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="cari-btn my-btn sec-btn">Cari Beasiswa</a>
        </div>
      </section>
      <section className="landing-menu desc-first">
        <div className="menu-container">
          <div className="menu-desc">
            <div className="containers">
              <h1>Pengumuman Seleksi</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="menu-btn my-btn sec-btn">Lihat Pengumuman</a>
            </div>  
          </div>
          <div className="menu-pic">
            <div className="containers">
              <img src={require("../../../assets/pengumuman-seleksi.png")} alt="pengumuman seleksi" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="landing-menu desc-last">
        <div className="menu-container">
          <div className="menu-pic">
            <div className="containers float-end">
              <img src={require("../../../assets/prosedur-pendaftaran.png")} alt="pengumuman seleksi" className="img-fluid" />
            </div>
          </div>
          <div className="menu-desc">
            <div className="containers">
              <h1>Prosedur Pendaftaran</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="menu-btn my-btn sec-btn">Lihat Prosedur</a>
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
            <a href="#" className="register-btn my-btn prim-btn">Daftar Akun</a>
            <a href="#" className="cari-btn my-btn sec-btn">Cari Beasiswa</a>
          </div>
        </div>
      </section>
    </div>
  )
}
