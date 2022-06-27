import React, { Component } from "react";
import { useEffect, useState } from "react";
import FormListBeasiswa from "../../../Components/FormDaftar/FormListBeasiswa";
import "./DaftarBeasiswa.css";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";
import { Link } from "react-router-dom";

export default function DaftarBeasiswa() {
  const beasiswaList = [
    {
      id: 1,
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      id: 2,
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      id: 3,
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      id: 4,
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      id: 5,
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      id: 6,
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      id: 7,
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      id: 8,
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      id: 9,
      jenisBeasiswa: "Beasiswa Penelitian",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="daftar-bea-wrapper container">
        <section className="daftar-bea-title mt-5 ">
          <h1 className="text-center  ">Daftar Beasiswa</h1>
        </section>
        <section className="daftar-bea-list row mb-5">
          {beasiswaList.map((item) => {
            return <FormListBeasiswa 
            key={item.id} 
            jenisBeasiswa={item.jenisBeasiswa} 
            />;
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}
