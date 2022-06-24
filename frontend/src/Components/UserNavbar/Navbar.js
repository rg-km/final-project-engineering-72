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
    <nav
      className={`user-navbar navbar navbar-expand-lg fixed-top ${scrollPos}`}
    >
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
            </li>
            <li className="nav-item">
              <Link to="/ProsedurBeasiswa" className="nav-link">
                Prosedur
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/PengumumanBeasiswa" className="nav-link">
                Pengumuman
              </Link>
            </li>
          </ul>
          <span className="nav-right navbar-text">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-username nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nama User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                    <Link to="/profil" className="user-nav-dropdown-item dropdown-item">
                      <i className="fa-solid fa-user"></i> Data Profil
                    </Link>
                  </li>
                  <li>
                    <a className="user-nav-dropdown-item dropdown-item" href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i> Keluar</a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Masuk
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Register" className="nav-link register">
                  Daftar Akun
                </Link>
              </li>
            </ul> */}
          </span>
        </div>
      </div>
    </nav>
  );
}
