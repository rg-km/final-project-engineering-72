import { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import useStore from "../../store/loginStore";
import { ToastContainer, toast } from "react-toastify";


export default function Navbar() {
  const [scrollPos, setScrollPos] = useState("no-shadow");
  const {usernameLogin, isLogin, setLogout} = useStore()

  const successToastLogout = () => {
    toast.success("Sukses keluar dari akun!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  };

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

  const handleLogout = () => {
    setLogout();  
    successToastLogout();
    setInterval(() => {
      return window.location = "/"
    }, 1500);
  }


  return (
    <nav
      className={`user-navbar navbar navbar-expand-lg fixed-top ${scrollPos}`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../../assets/logo-subaku.png")}
            alt="logo subaku"
          />
        </Link>
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
            {isLogin ? 
              <>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-username nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {usernameLogin}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li>
                        <Link to="/profil" className="user-nav-dropdown-item dropdown-item">
                          <i className="fa-solid fa-user"></i> Data Profil
                        </Link>
                      </li>
                      <li>
                        {/* <Link to="/"> */}
                          <button
                            className="user-nav-dropdown-item dropdown-item"
                            onClick={handleLogout}
                          >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i> Keluar
                          </button>
                        {/* </Link> */}
                      </li>
                    </ul>
                  </li>
                </ul>
              </> :
              <>            
                <ul className="navbar-nav">
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
                </ul>
              </>
              }            
          </span>
        </div>
      </div>
    </nav>
  );
}
