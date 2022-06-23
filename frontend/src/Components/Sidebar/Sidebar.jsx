import React, { useState, useEffect } from 'react'
import "./Sidebar.css";

function Sidebar() {
	const [active, setActive] = useState(0);
  return (
		<nav className="sidebar card py-2 mb-4">
			<ul className="nav flex-column" id="nav_accordion">
				<li className="header">
				<img className='logo' src={require("../../assets/icon-subaku.png")} alt="logo subaku" />
					<h6 className='namepage'><span>Subaku</span></h6>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						<i className="fa fa-dashboard" aria-hidden="true"></i> Dashboard 
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" data-bs-toggle="collapse" data-bs-target="#user" href="#"> 
						<i className="fa fa-users icon-left" aria-hidden="true"></i> Users <i className="fa fa-chevron-left icon-right" aria-hidden="true"></i>
					</a>
					<ul id="user" className="submenu collapse" data-bs-parent="#nav_accordion">
						<li><a className="nav-link" href="#">Lihat Users </a></li>
					</ul>
				</li>
				<li className="nav-item">
					<a className="nav-link" data-bs-toggle="collapse" data-bs-target="#beasiswa" href="#">
						<i className="fa fa-graduation-cap icon-left" aria-hidden="true"></i> Beasiswa <i className="fa fa-chevron-left icon-right" aria-hidden="true"></i>
					</a>
					<ul id="beasiswa" className="submenu collapse" data-bs-parent="#nav_accordion">
						<li><a className="nav-link" href="#"> Data Master Beasiswa </a></li>
						<li><a className="nav-link" href="#"> Data Pendaftaran Beasiswa </a></li>
					</ul>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#"><i className="fa fa-sign-out icon-left" aria-hidden="true"></i> Keluar </a>
				</li>
				<li className='footer'>
					<p><span>Subaku &copy; 2022</span></p>
				</li>
			</ul>
		</nav>
  )
}

export default Sidebar