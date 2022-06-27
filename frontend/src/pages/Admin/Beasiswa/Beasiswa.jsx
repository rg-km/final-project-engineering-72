import React, { useEffect, useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Beasiswa.css";
import axios from "axios"

export default function Beasiswa() {
  const [jenis_beasiswa,setBeasiswa] = useState('')
  const [sumber_beasiswa,setSumber] = useState('')
  const [tanggal_penyaluran,setTanggal] = useState('')
  const [nominal,setNominal] = useState('')
  const [keterangan,setKeterangan] = useState('')
  // temporary dummy data
  const dataDummy = [
    {
      id : "1",
      jenis_beasiswa : "Beasiswa Penelitian",
      sumber_beasiswa : "PT. Kimia Research",
      tanggal_penyaluran : "20/07/2022",
      nominal : "3000000",
      keterangan : "diproses",
    },
    {
      id : "2",
      jenis_beasiswa : "Beasiswa Prestasi",
      sumber_beasiswa : "PT. Djarum Indonesia",
      tanggal_penyaluran : "20/07/2022",
      nominal : "2500000",
      keterangan : "diproses",
    },
    {
      id : "3",
      jenis_beasiswa : "Beasiswa Atlit",
      sumber_beasiswa : "PT Indonesia",
      tanggal_penyaluran : "20/07/2022",
      nominal : "2000000",
      keterangan : "diproses",
    },
  ];
  // 
  const [data, setData] = useState(dataDummy);
  useEffect(() => {
  }, [data]);
  const handleAdd = () => {
    let addedData = {id:data.length+1, jenis_beasiswa, sumber_beasiswa, tanggal_penyaluran, nominal, keterangan}
    setData([...data, addedData])
    setBeasiswa('');
    setSumber('');
    setTanggal('');
    setNominal('');
    setKeterangan('');
  }
  const [modalDel, setModalDel] = useState(false);
  const [idDel, setIdDel] = useState(null);
  const handleDel = () => {
    let dataTmp = data.filter((value) => value.id !== idDel)
    setData(dataTmp)
    setModalDel(false)
    }
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
                            <input type="text" className="form-control" id="inputnamabeasiswa" placeholder="Jenis Beasiswa" onChange={(e) => setBeasiswa(e.target.value)}/>
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputsumberbeasiswa">Sumber Beasiswa</label>
                            <input type="text" className="form-control" id="inputsumberbeasiswa" placeholder="Sumber Beasiswa" onChange={(e) => setSumber(e.target.value)}/>
                          </div>
                        </div>
                        <div className="form-group">
                          <label for="inputtanggal">Tanggal Penyaluran</label>
                          <input type="date" className="form-control" id="inputtanggalpenyaluran" placeholder="Tanggal Penyaluran" onChange={(e) => setTanggal(e.target.value)}/>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <label for="inputnominal">Nominal</label>
                            <input type="text" className="form-control" id="inputnominal" placeholder="Nominal" onChange={(e) => setNominal(e.target.value)}/>
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputketerangan">Keterangan</label>
                            <select id="inputketerangan" className="form-control" onChange={(e) => setKeterangan(e.target.value)}>
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
                      <button type="button" className="my-btn prim-btn"
                        onClick={() => handleAdd()}
                      >
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </div>
               
            <div className="modal fade" id="konfirmDeleteModal" tabIndex="-1" aria-labelledby="konfirmDeleteModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="konfirmDeleteModalLabel">Konfirmasi Aksi</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    Apakah anda yakin untuk menghapus data beasiswa ini?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="my-btn sec-btn" data-bs-dismiss="modal">Batal</button>
                    <button type="button" className="my-btn prim-btn" onClick={() => handleDel()}>Hapus</button>
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
                  {data.map((value) => (
                    <tr key={value.id}>
                      <td>{value.id}</td>
                      <td>{value.jenis_beasiswa}</td>
                      <td>{value.sumber_beasiswa}</td>
                      <td>{value.tanggal_penyaluran}</td>
                      <td>{value.nominal}</td>
                      <td>{value.keterangan}</td>
                      <td>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#editDataBeasiswa">
                          <i className="fa fa-edit" aria-hidden="true" ></i>
                        </button>
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#konfirmDeleteModal" 
                        onClick={() => {
                          setModalDel(true)
                          setIdDel(value.id)
                        }}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
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


