import { useEffect, useState } from "react"
import React from "react"
import "./Navbar.css"

export default function Navbar() {

  return (
  <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={require("../../assets/logo-subaku.png")} alt="logo subaku" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">      
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
          <li className="nav-item">
            <a className="nav-link" href="#">List Beasiswa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Prosedur</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tentang Kami</a>
          </li>
        </ul>      
        <span className="nav-right navbar-text">
          <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link login">Masuk</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link register">Daftar Akun</a>
              </li>
            </ul>
        </span>
      </div>
    </div>
  </nav>
  )
}