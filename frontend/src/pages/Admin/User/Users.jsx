import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Users.css";
import axios from "axios";
export default function Users() {
  const [data, setDataList] = useState([]);
  useEffect(() => {
    document.title = "Dashboard - Subaku";
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/databeasiswa");
        setDataList(response.data);
      } catch (error) {
        console.log(error.data);
      }
    };

    fetchData();
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
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Lihat Users
              </li>
            </ol>
          </nav>
          <div className="main-content-users">
            <nav className="navbar">
              <div className="container-fluid">
                <p>
                  <i className="fa fa-table" aria-hidden="true"></i>
                  <span className="navbar-brand">Tabel User</span>
                </p>
              </div>
            </nav>
            <div className="user-setting">
              <nav class="navbar">
                <div class="container-fluid">
                  <p className="view-data-table mt-3">
                    <span>Lihat</span>
                    <div class="btn-group">
                      <button
                        class="btn btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        10
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            10
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            50
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            100
                          </a>
                        </li>
                      </ul>
                    </div>
                    <span>User</span>
                  </p>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>
                    <button class="btn btn-outline-primary" type="submit">
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
                    <th>Nama Lengkap</th>
                    <th>NISN</th>
                    <th>Tanggal Lahir</th>
                    <th>Alamat</th>
                    <th>Pendidikan Terakhir</th>
                    <th>Asal Sekolah</th>
                    <th>Email</th>
                    <th>No Telepon</th>
                    <th>Nama Orang Tua</th>
                    <th>Pekerjaan Orang Tua</th>
                    <th>Penghasilan Orang Tua</th>
                    <th>Daftar Lomba</th>
                    <th>Daftar Organisasi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {data.map((value) => (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.namaLengkap}</td>
                      <td>{value.nisn}</td>
                      <td>{value.tanggalLahir}</td>
                      <td>{value.alamat}</td>
                      <td>{value.pendidikanTerakhir}</td>
                      <td>{value.asalSekolah}</td>
                      <td>{value.email}</td>
                      <td>{value.noTelepon}</td>
                      <td>{value.namaOrangTua}</td>
                      <td>{value.pekerjaanOrangTua}</td>
                      <td>{value.penghasilanOrangTua}</td>
                      <td>{value.daftarLombaDiikuti}</td>
                      <td>{value.daftarOrganisasi}</td>
                      <tr>
                        <td>
                          <button type="button" className="btn">
                            <i class="fa fa-edit" aria-hidden="true"></i>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    </tr>
                  ))}
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
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
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
