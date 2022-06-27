import { useEffect, useState } from "react";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="footer-logo">
          <h2>Subaku</h2>
          <p>
            © 2022 Subaku Team. <br /> All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <div className="link layanan">
            <h4>Layanan</h4>
            <ul>
              <li>
                <a href="#">Cari Beasiswa</a>
              </li>
              <li>
                <a href="#">Pengumuman Seleksi</a>
              </li>
              <li>
                <a href="#">Prosedur Pendaftaran</a>
              </li>
            </ul>
          </div>
          <div className="link contacts">
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
