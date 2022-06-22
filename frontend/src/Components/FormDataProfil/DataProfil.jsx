import React from "react";
import ".//DataProfil.css";

export default function () {
  return (
    <div className="data-profil">
      <div className="card ">
        <div className="card-body">
          <p className="text-center">Data Profil</p>
          <form>
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
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Jenis Kelamin
                  </label>
                  <select id="disabledSelect" className="form-select">
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
                  />
                </div>
              </div>
              <div className="col-md-5 mx-auto ">
                <div className="mb-5">
                  <label for="disabledSelect" className="form-label">
                    Pendidikan Terakhir
                  </label>
                  <select id="" className="form-select">
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
                    placeholder="No Telepon"
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
