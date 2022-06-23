import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <i class="fa fa-dashboard" aria-hidden="true"></i> Dashboard
          </a>
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
              <a className="nav-link" href="#">
                Lihat Users{" "}
              </a>
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
              <a className="nav-link" href="#">
                {" "}
                Data Master Beasiswa{" "}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                {" "}
                Data Pendaftaran Beasiswa{" "}
              </a>
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
