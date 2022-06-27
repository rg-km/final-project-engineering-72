import React, { Component } from "react";
import { useEffect, useState } from "react";
import FormListBeasiswa from "../../../Components/FormDaftar/FormListBeasiswa";
import "./DaftarBeasiswa.css";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function DaftarBeasiswa() {
  // const beasiswaList = [
  //   {
  //     id: 1,
  //     jenisBeasiswa: "Beasiswa Prestasi",
  //   },
  //   {
  //     id: 2,
  //     jenisBeasiswa: "Beasiswa Atlet",
  //   },
  //   {
  //     id: 3,
  //     jenisBeasiswa: "Beasiswa Penelitian",
  //   },
  //   {
  //     id: 4,
  //     jenisBeasiswa: "Beasiswa Prestasi",
  //   },
  //   {
  //     id: 5,
  //     jenisBeasiswa: "Beasiswa Atlet",
  //   },
  //   {
  //     id: 6,
  //     jenisBeasiswa: "Beasiswa Penelitian",
  //   },
  //   {
  //     id: 7,
  //     jenisBeasiswa: "Beasiswa Prestasi",
  //   },
  //   {
  //     id: 8,
  //     jenisBeasiswa: "Beasiswa Atlet",
  //   },
  //   {
  //     id: 9,
  //     jenisBeasiswa: "Beasiswa Penelitian",
  //   },
  // ];

  const [data, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/daftarBeasiswa");

        setDataList(response.data);
      } catch (error) {
        setDataList([
          {
            "id": 10203,
            "jenisBeasiswa": "Beasiswa Penelitian",
            "sumberBeasiswa": "PT Amanah Pintar",
            "descBeasiswa": "Beasiswa yang diajukan kepada siswa yang aktif di dalam penelitian.",
            "tanggalBeasiswa": "20-08-2022"
          },
          {
            "id": 10204,
            "jenisBeasiswa": "Beasiswa Prestasi",
            "sumberBeasiswa": "Cerdas Karya",
            "descBeasiswa": "Beasiswa yang diajukan kepada siswa yang aktif berprestasi.",
            "tanggalBeasiswa": "03-08-2022"
          },
          {
            "id": 10205,
            "jenisBeasiswa": "Beasiswa Atlet",
            "sumberBeasiswa": "Kakikilat ltd.",
            "descBeasiswa": "Beasiswa yang diajukan kepada siswa yang berprestasi aktif di bidang olahraga bulutangkis.",
            "tanggalBeasiswa": "20-10-2022"
          },
        ])
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  useEffect(() => {
    document.title = "Daftar Beasiswa - Subaku";
  }, []);

  return (
    <div>
      <Navbar />
      <div className="daftar-bea-wrapper container">
        <section className="daftar-bea-title mt-5 ">
          <h1 className="text-center  ">Daftar Beasiswa</h1>
        </section>
        <section className="daftar-bea-list row mb-5">
          {data.map((item) => {
            return <FormListBeasiswa 
            key={item.id} 
            idBeasiswa={item.id}
            jenisBeasiswa={item.jenisBeasiswa}
            sumberBeasiswa={item.sumberBeasiswa}
            tanggalPendaftaran={item.tanggalBeasiswa}
            keterangan={item.descBeasiswa}
            />;
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}
