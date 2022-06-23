import { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState("no-shadow");

  const scrollHandler = () => {
    if (window.scrollY > 2) {
      setScrollPos("shadow navbar-glass");
    } else {
      setScrollPos("no-shadow");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => scrollHandler());
  }, []);

  return (
    <nav className={`user-navbar navbar navbar-expand-lg fixed-top ${scrollPos}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={require("../../assets/logo-subaku.png")}
            alt="logo subaku"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/DaftarBeasiswa" className="nav-link">
                Daftar Beasiswa
              </Link>
              {/* <a className="nav-link" href="#">
                List Beasiswa
              </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Prosedur
              </a>
            </li>
            <li className="nav-item ">
              <Link to="/PengumumanBeasiswa" className="nav-link">
                Pengumuman
              </Link>
              {/* <a className="nav-link" href="/PengumumanBeasiswa">
                Pengumuman
              </a> */}
            </li>
          </ul>
          <span className="nav-right navbar-text">
            {/* <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nama User
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a class="dropdown-item" href="#"><i class="fa-solid fa-user"></i> Data Profil</a></li>
                  <li><a class="dropdown-item" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Keluar</a></li>
                </ul>
              </li>
            </ul>
          </div> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link login">
                  Masuk
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link register">
                  Daftar Akun
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
