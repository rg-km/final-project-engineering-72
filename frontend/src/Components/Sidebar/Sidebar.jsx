import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    <nav className="sidebar card py-2 mb-4">
      <ul className="nav flex-column" id="nav_accordion">
        <li className="header">
          <img
            className="logo"
            src={require("../../assets/icon-subaku.png")}
            alt="logo subaku"
          />
          <h6 className="namepage">
            <span>Subaku</span>
          </h6>
        </li>
        <li className="nav-item {active}">
          <Link to="/Dashboard" className="nav-link">
          <i class="fa fa-dashboard" aria-hidden="true"></i> Dashboard{" "}
              </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu_item1"
            href="#"
          >
            <i class="fa fa-users" aria-hidden="true"></i> Users{" "}
            <i className="bi small bi-caret-down-fill"></i>
          </a>
          <ul
            id="menu_item1"
            className="submenu collapse"
            data-bs-parent="#nav_accordion"
          >
            <li>
              <Link to="/Users" className="nav-link">
                Lihat Users{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu_item2"
            href="#"
          >
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Beasiswa{" "}
            <i className="bi small bi-caret-down-fill"></i>
          </a>
          <ul
            id="menu_item2"
            className="submenu collapse"
            data-bs-parent="#nav_accordion"
          >
            <li>
              <Link to="/Beasiswa" className="nav-link">
                {" "}
                Data Master Beasiswa{" "}
              </Link>
            </li>
            <li>
              <Link to="/Apply_beasiswa" className="nav-link">
                {" "}
                Data Pendaftaran Beasiswa{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {" "}
            Keluar{" "}
          </a>
        </li>
        <li className="footer__sidebar">
          <p>
            <span>Subaku &copy; 2022</span>
          </p>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
