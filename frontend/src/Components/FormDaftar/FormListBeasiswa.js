import { useEffect, useState } from "react"
import React from "react"
import "./FormListBeasiswa.css"

export default function FormListBeasiswa({idBeasiswa, sumberBeasiswa, jenisBeasiswa, tanggalPendaftaran, keterangan}) {

  return (
    <div className="col-md-6">
      <div className="daftar-item card">
        <div className={`card-header 
        ${(jenisBeasiswa === "Beasiswa Atlet") ? "red" : 
          (jenisBeasiswa === "Beasiswa Penelitian") ? "green" :
          (jenisBeasiswa === "Beasiswa Prestasi") ? "orange" : ""}`}>
          <h3>{jenisBeasiswa}</h3>
          <h5>Nama Instansi </h5>
        </div>
        <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="card-body daftar-item-footer">
          <div className="tanggal-bea">
            <p>Disalurkan pada: <time>17-07-2022</time></p>
          </div>
          <button className="my-btn prim-btn daftar-item-btn" data-bs-toggle="modal" data-bs-target="#konfirmDaftarModal">Daftar</button>        
        </div>
        <div className="modal fade" id="konfirmDaftarModal" tabIndex="-1" aria-labelledby="konfirmDaftarModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="konfirmDaftarModalLabel">Konfirmasi pendaftaran</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Apakah anda yakin untuk mendaftar ke beasiswa ini?
              </div>
              <div className="modal-footer">
                <button type="button" className="my-btn sec-btn" data-bs-dismiss="modal">Batal</button>
                <button type="button" className="my-btn prim-btn">Daftar sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}