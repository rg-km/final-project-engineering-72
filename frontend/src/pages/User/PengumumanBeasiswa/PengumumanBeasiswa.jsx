import React from "react";
import "./Pengumumanbeasiswa.css";
import Navbar from "../../../Components/UserNavbar/Navbar";
import Footer from "../../../Components/UserFooter/Footer";

export default function PengumumanBeasiswa() {
  return (
    <>
      <Navbar />
      <div className="container my-5 pb-5 pt-5">
        <h1 align="center">PENGUMUMAN HASIL SELEKSI BEASISWA </h1>
        <h5 align="center">Pilih Beasiswa</h5>
        <select className="form-select" aria-label="Default select example" defaultValue={"default"}>
          <option value={"default"}>Pilih Jenis Beasiswa</option>
          <option value="1">Beasiswa Prestasi</option>
          <option value="2">Beasiswa Atlet</option>
          <option value="3">Beasiswa Penelitian</option>
        </select>
        <div className="px-5 my-5 text-center">
          <button className="btn btn-primary px-5" type="button">
            LIHAT
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">NISN</th>
                <th scope="col">NAMA</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>13082000</td>
                <td>Nana Cantika</td>
                <td>Diterima</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>27111992</td>
                <td>Loey Niagara</td>
                <td>Diterima</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>14021997</td>
                <td>Jeremmy</td>
                <td>Diterima</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
