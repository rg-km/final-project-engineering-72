import React, { useEffect,useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Dashboard.css";

export default function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard - Subaku";
      }, []);

    return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="container">
            <img src={require("../../../assets/logo-subaku.png")} alt="logo-app"/>
            </div>
        </div>
    );
}