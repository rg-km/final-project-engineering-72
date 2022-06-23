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
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
    {
      jenisBeasiswa: "Beasiswa Prestasi",
    },
    {
      jenisBeasiswa: "Beasiswa Atlet",
    },
    {
      jenisBeasiswa: "Beasiswa Penelitian",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="daftar-bea-wrapper container">
        <section className="daftar-bea-title  ">
          <h1 className="text-center pt-5 ">Daftar Beasiswa</h1>
        </section>
        <section className="daftar-bea-list row mb-5">
          {beasiswaList.map((item) => {
            return <FormListBeasiswa jenisBeasiswa={item.jenisBeasiswa} />;
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}
