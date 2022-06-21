import React, { useEffect,useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Users.css";

export default function Users() {
    useEffect(() => {
        document.title = "Dashboard - Subaku";
      }, []);

    return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="container">
                <h1>Daftar User</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>
            </div>
        </div>
    );
}