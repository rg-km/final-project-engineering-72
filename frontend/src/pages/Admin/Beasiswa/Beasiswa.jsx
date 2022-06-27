import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Beasiswa.css";
import axios from "axios"

export default function Beasiswa() {
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
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data Master Beasiswa
              </li>
            </ol>
          </nav>
          <div className="main-content-beasiswa">
            <nav className="navbar">
              <div className="container-fluid">
                <p>
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <span className="navbar-brand">Tabel Beasiswa</span>
                </p>
                <button className="btn btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#tambahDataBeasiswa">
                  Tambah Data
                </button>
              </div>
            </nav>
              <div className="modal fade" id="tambahDataBeasiswa" tabindex="-1" aria-labelledby="konfirmTambahModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="konfirmTambahModalLabel">Tambah Data Beasiswa</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="inputnamabeasiswa">Jenis Beasiswa</label>
                            <input type="text" className="form-control" id="inputnamabeasiswa" placeholder="Jenis Beasiswa"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputsumberbeasiswa">Sumber Beasiswa</label>
                            <input type="text" className="form-control" id="inputsumberbeasiswa" placeholder="Sumber Beasiswa"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="inputtanggal">Tanggal Penyaluran</label>
                          <input type="date" className="form-control" id="inputtanggalpenyaluran" placeholder="Tanggal Penyaluran"/>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="inputnominal">Nominal</label>
                            <input type="text" className="form-control" id="inputnominal" placeholder="Nominal"/>
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputketerangan">Keterangan</label>
                            <select id="inputketerangan" className="form-control">
                              <option selected>Choose...</option>
                              <option>Diproses</option>
                              <option>Selesai</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="my-btn sec-btn" data-bs-dismiss="modal">Batal</button>
                      <button type="button" className="my-btn prim-btn">Tambah</button>
                    </div>
                  </div>
                </div>
              </div>
            <div className="user-setting">
              <nav className="navbar">
                <div className="container-fluid">
                  <p className="view-data-table mt-3">
                    <span>Lihat</span>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        10
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            10
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            50
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            100
                          </a>
                        </li>
                      </ul>
                    </div>
                    <span>Data</span>
                  </p>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button className="btn btn-outline-primary" type="submit">
                      Cari
                    </button>
                  </form>
                </div>
              </nav>
            </div>
            <div className="data-table table-responsive table-hover table-bordered">
              <table className="table ">
                <thead className="table-head">
                  <tr>
                    <th>No</th>
                    <th>Jenis Beasiswa</th>
                    <th>Sumber Beasiswa</th>
                    <th>Tanggal Penyaluran</th>
                    <th>Nominal</th>
                    <th>Keterangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <td>1</td>
                    <td>Beasiswa Pintar</td>
                    <td>PT Gono Gini</td>
                    <td>10 januari 2023</td>
                    <td>1200000</td>
                    <td>Proses</td>
                    <td>
                      <button type="button" className="btn">
                        <i className="fa fa-edit" aria-hidden="true"></i>
                      </button>
                      <button type="button" className="btn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav className="pagenav" aria-label="Page navigation">
              <p className="show-data-table mt-2">
                <span>Showing </span>
                <span>1 </span>
                <span>to </span>
                <span>10 </span>
                <span>from 100 entries</span>
              </p>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}