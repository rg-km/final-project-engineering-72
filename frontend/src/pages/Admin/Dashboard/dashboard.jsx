import React, { useEffect,useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./dashboard.css";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard - Subaku";
      }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebar" className="sidebar">
                    <Sidebar />
                </nav>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Home</li>
                        </ol>
                    </nav>
                    <div className="main-content">
                        <img src={require("../../../assets/logo-subaku.png")} alt="logo-app"/>
                    </div>
                </main>
            </div>
        </div>
    );
}