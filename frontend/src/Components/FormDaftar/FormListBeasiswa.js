import { useEffect, useState } from "react"
import React from "react"
import "./FormListBeasiswa.css"

export default function FormListBeasiswa({idBeasiswa, sumberBeasiswa, jenisBeasiswa, tanggalPendaftaran, keterangan}) {

  return (
    <div className="col-md-6">
      <div className="daftar-item card">
        <h5 class={`card-header 
        ${(jenisBeasiswa === "Beasiswa Atlet") ? "red" : 
          (jenisBeasiswa === "Beasiswa Penelitian") ? "green" :
          (jenisBeasiswa === "Beasiswa Prestasi") ? "orange" : ""}`}>
          <h3>{jenisBeasiswa}</h3>
          <h5>Nama Instansi </h5>
        </h5>
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="card-body daftar-item-footer">
          <div className="tanggal-bea">
            <p>Disalurkan pada: <time>17-07-2022</time></p>
          </div>
          <button className="my-btn prim-btn daftar-item-btn" data-bs-toggle="modal" data-bs-target="#konfirmDaftarModal">Daftar</button>        
        </div>
        <div class="modal fade" id="konfirmDaftarModal" tabindex="-1" aria-labelledby="konfirmDaftarModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="konfirmDaftarModalLabel">Konfirmasi pendaftaran</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Apakah anda yakin untuk mendaftar ke beasiswa ini?
              </div>
              <div class="modal-footer">
                <button type="button" class="my-btn sec-btn" data-bs-dismiss="modal">Batal</button>
                <button type="button" class="my-btn prim-btn">Daftar sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}