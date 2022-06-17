import React from 'react'
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="nav-side-menu">
        <div className="brand d-flex">
            <img src={require("../../assets/logo-subaku.png")} alt="logo-app" className='logo'/>
            <h4><span>Subaku</span></h4>
        </div>
        <i classNameName="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
                <li className='active'>
                  <a href="#" className='menu-link'>
                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
                  </a>
                </li>

                <li  data-toggle="collapse" data-target="#users" className="collapsed">
                  <a href="#" className='menu-link'><i className="fa fa-users fa-lg"></i> Users <span className="arrow"></span></a>
                </li>
                <ul className="sub-menu collapse" id="user">
                    <li><a href="#" className='menu-link'>Data Master User</a></li>
                </ul>

                <li data-toggle="collapse" data-target="#beasiswa" className="collapsed">
                  <a href="#" className='menu-link'><i class="fa fa-graduation-cap" aria-hidden="true"></i> Beasiswa <span className="arrow"></span></a>
                </li> 
                <ul className="sub-menu collapse" id="service">
                  <li><a href="#" className='menu-link'>Data Master Beasiswa</a></li>
                  <li><a href="#" className='menu-link'>Data Pendaftaran</a></li>
                </ul>
            </ul>
        </div>
        <div className="footer">
            <p className='copyright'><span>Copyright © 2022 Subaku</span></p>
        </div>
    </div>
  )
}

export default Sidebar
