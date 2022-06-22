import React, { useEffect, useState } from "react"
import "./PengumumanBeasiswa.css"

export default function PengumumanBeasiswa(){
    return (
<html>
<head>
    <title> Pengumuman Hasil Beasiswa</title>
</head>
<body>
  <h1 align="center">PENGUMUMAN HASIL SELEKSI BEASISWA </h1>
  <h5 align="center">Pilih Beasiswa</h5>
  <select className="form-select" aria-label="Default select example">
    <option selected>Pilih Jenis Beasiswa</option>
    <option value="1">Beasiswa Prestasi</option>
    <option value="2">Beasiswa Atlet</option>
    <option value="3">Beasiswa Penelitian</option>
  </select>
  <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">LIHAT</button>
 </div>
 <table class="table table-bordered">
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
 <div className="d-grid gap-2 col-6 mx-auto">
  <button className="btn btn-primary" type="button">CETAK</button>
 </div>
 </body>
 </html>
    )
}