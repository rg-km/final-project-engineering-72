import React from "react";
import ".//DataProfil.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function () {
  const toastPosition = {
    position: "top-center",
    autoClose: 5000,
  };

  const successToast = () => {
    toast.success("Data berhasil di submit!", {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
    });

    const errorToast = (msg, err) => {
      toast.error(msg, toastPosition);
      console.log(err);
    };
  };
  //data dummy using json-server
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [nisn, setNisn] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pendidikanTerakhir, setPendidikanTerakhir] = useState("");
  const [asalSekolah, setAsalSekolah] = useState("");
  const [email, setEmail] = useState("");
  const [noTelepon, setNoTelepon] = useState("");
  const [namaOrangTua, setNamaOrangTua] = useState("");
  const [pekerjaanOrangTua, setPekerjaanOrangTua] = useState("");
  const [penghasilanOrangTua, setPenghasilanOrangTua] = useState("");
  const [daftarLombaDiikuti, setDaftarLombaDiikuti] = useState("");
  const [daftarOrganisasi, setDaftarOrganisasi] = useState("");

  const setNamaLengkapHandler = (e) => {
    setNamaLengkap(e.target.value);
  };
  const setTanggalLahirHandler = (e) => {
    setTanggalLahir(e.target.value);
  };
  const setJenisKelaminHandler = (e) => {
    setJenisKelamin(e.target.value);
  };
  const setNisnHandler = (e) => {
    setNisn(e.target.value);
  };
  const setAlamatHandler = (e) => {
    setAlamat(e.target.value);
  };
  const setPendidikanTerakhirHandler = (e) => {
    setPendidikanTerakhir(e.target.value);
  };
  const setAsalSekolahHandler = (e) => {
    setAsalSekolah(e.target.value);
  };
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setNoTeleponHandler = (e) => {
    setNoTelepon(e.target.value);
  };
  const setNamaOrangTuaHandler = (e) => {
    setNamaOrangTua(e.target.value);
  };
  const setPekerjaanOrangTuaHandler = (e) => {
    setPekerjaanOrangTua(e.target.value);
  };
  const setPenghasilanOrangTuaHandler = (e) => {
    setPenghasilanOrangTua(e.target.value);
  };
  const setDaftarLombaDiikutiHandler = (e) => {
    setDaftarLombaDiikuti(e.target.value);
  };
  const setDaftarOrganisasiHandler = (e) => {
    setDaftarOrganisasi(e.target.value);
  };

  //data dummy using json-server
  const submitHandler = (e) => {
    e.preventDefault();
    const dataBeasiswa = {
      namaLengkap: namaLengkap,
      tanggalLahir: tanggalLahir,
      jenisKelamin: jenisKelamin,
      nisn: nisn,
      alamat: alamat,
      pendidikanTerakhir: pendidikanTerakhir,
      asalSekolah: asalSekolah,
      email: email,
      noTelepon: noTelepon,
      namaOrangTua: namaOrangTua,
      pekerjaanOrangTua: pekerjaanOrangTua,
      penghasilanOrangTua: penghasilanOrangTua,
      daftarLombaDiikuti: daftarLombaDiikuti,
      daftarOrganisasi: daftarOrganisasi,
    };
    console.log(dataBeasiswa);

    //data dummy using json-server
    axios
      .post(" http://localhost:5000/databeasiswa", dataBeasiswa)
      .then((response) => {
        console.log(response);
        successToast();
      })
      .catch(function (error) {
        console.log(error);
        alert("gagal");
      });
  };

  return (
    <div className="data-profil">
      <div className="card ">
        <div className="card-body">
          <p className="text-center">Data Profil</p>
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledTextInput" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Nama Lengkap"
                    onChange={setNamaLengkapHandler}
                    value={namaLengkap}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto">
                <div className="mb-5">
                  <label for="disabledTextInput" className="form-label">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Tanggal Lahir"
                    onChange={setTanggalLahirHandler}
                    value={tanggalLahir}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    NISN
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="NISN"
                    onChange={setNisnHandler}
                    value={nisn}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Jenis Kelamin
                  </label>
                  <select
                    id="disabledSelect"
                    className="form-select"
                    onChange={setJenisKelaminHandler}
                    value={jenisKelamin}
                  >
                    <option></option>
                    <option>Laki - laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Alamat"
                    onChange={setAlamatHandler}
                    value={alamat}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Pendidikan Terakhir
                  </label>
                  <select
                    id=""
                    className="form-select"
                    onChange={setPendidikanTerakhirHandler}
                    value={pendidikanTerakhir}
                  >
                    <option></option>
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA</option>
                  </select>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Asal Sekolah
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Asal Sekolah"
                    onChange={setAsalSekolahHandler}
                    value={asalSekolah}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Email"
                    onChange={setEmailHandler}
                    value={email}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    No Telepon
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="NoTelepon"
                    onChange={setNoTeleponHandler}
                    value={noTelepon}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Nama Orang Tua (Ayah/ibu)
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Nama Orang Tua"
                    onChange={setNamaOrangTuaHandler}
                    value={namaOrangTua}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Pekerjaan Orang Tua
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Pekerjaan Orang Tua"
                    onChange={setPekerjaanOrangTuaHandler}
                    value={pekerjaanOrangTua}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Penghasilan Orang Tua
                  </label>
                  <input
                    type="text"
                    id="disabledTextInput"
                    className="form-control"
                    placeholder="Penghasilan Orang Tua"
                    onChange={setPenghasilanOrangTuaHandler}
                    value={penghasilanOrangTua}
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Daftar Lomba Diikuti*
                  </label>
                  <textarea
                    className="form-control"
                    placeholder=""
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    onChange={setDaftarLombaDiikutiHandler}
                    value={daftarLombaDiikuti}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Daftar Organisasi*
                  </label>
                  <textarea
                    className="form-control"
                    placeholder=""
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    onChange={setDaftarOrganisasiHandler}
                    value={daftarOrganisasi}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label-kecil">
                    *Kosongkan jika tidak ada
                  </label>
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label-kecil">
                    *Kosongkan jika tidak ada
                  </label>
                </div>
              </div>
              <div className="col-md-11 mx-auto">
                <button type="submit" className="btn btn-primary btn-submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
