import React, { useEffect,useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Beasiswa.css";

export default function Apply_beasiswa() {
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
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data Pendaftaran Beasiswa</li>
                        </ol>
                    </nav>
                    <div className="main-content-beasiswa">
                        <nav className="navbar">
                            <div className="container-fluid">
                                <p>
                                    <i className="fa fa-table" aria-hidden="true"></i>
                                    <span className="navbar-brand">Tabel Pendaftaran Beasiswa</span>
                                </p>
                            </div>
                        </nav>
                        <div className="user-setting">
                            <nav class="navbar">
                                <div class="container-fluid">
                                    <p className="view-data-table mt-3">
                                        <span>Lihat</span>
                                        <div className="btn-group">
                                            <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                10
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">10</a></li>
                                                <li><a className="dropdown-item" href="#">50</a></li>
                                                <li><a className="dropdown-item" href="#">100</a></li>
                                            </ul>
                                        </div>
                                        <span>Data</span>
                                    </p>
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                        <button className="btn btn-outline-primary" type="submit">Cari</button>
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
                                        <th>NISN</th>
                                        <th>Nama Pendaftar</th>
                                        <th>Nominal</th>
                                        <th>Keterangan</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <tr>
                                        <td>1</td>
                                        <td>Beasiswa Pintar</td>
                                        <td>1234567890</td>
                                        <td>Anne Rose</td>
                                        <td>1200000</td>
                                        <td>Lolos</td>
                                        <td>
                                            <button  type="button" className="btn"><i class="fa fa-edit" aria-hidden="true"></i></button>
                                            <button type="button" className="btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
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