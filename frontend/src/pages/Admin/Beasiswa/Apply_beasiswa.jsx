import React, { useEffect,useState } from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./Beasiswa.css";

export default function Apply_beasiswa() {
    const [jenis_beasiswa,setBeasiswa] = useState('')
  const [nisn,setSumber] = useState('')
  const [pendaftar,setPendaftar] = useState('')
  const [nominal,setNominal] = useState('')
  const [keterangan,setKeterangan] = useState('')
  // temporary dummy data
  const dataDummy = [
    {
      id : "1",
      jenis_beasiswa : "Beasiswa Penelitian",
      nisn : "123456789",
      pendaftar : "Ana Faradisa",
      nominal : "3000000",
      keterangan : "diproses",
    },
    {
      id : "2",
      jenis_beasiswa : "Beasiswa Prestasi",
      nisn : "32654987",
      pendaftar : "Mahfud Emejing",
      nominal : "2500000",
      keterangan : "diproses",
    },
    {
      id : "3",
      jenis_beasiswa : "Beasiswa Atlit",
      nisn : "20152369874",
      pendaftar : "Weka Sauna",
      nominal : "2000000",
      keterangan : "diproses",
    },
  ];
  // 
  const [data, setData] = useState(dataDummy);
  const handleAdd = () => {
    let addedData = {id:data.length+1, jenis_beasiswa, nisn, pendaftar, nominal, keterangan}
    setData([...data, addedData])
    setBeasiswa('');
    setSumber('');
    setPendaftar('');
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
    useEffect(() => {
        document.title = "Dashboard - Subaku";
      }, [data]);

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
                                {data.map((value) => (
                                    <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.jenis_beasiswa}</td>
                                    <td>{value.nisn}</td>
                                    <td>{value.pendaftar}</td>
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

