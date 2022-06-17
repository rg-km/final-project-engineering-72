import React from "react";
import "./login.css";
import gambar from "..//..//..//Assets//Login//Subaku-Item.png";

export default function login() {
  return (
    <div>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto" id="kolom-kiri">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="masuk text-center">Masuk</div>
                    <div className="mb-3">
                      <label for="exampleInputNama" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputNama" className="form-label">
                        Nama Pengguna
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        Kata Sandi
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-daftar "
                    >
                      Masuk
                    </button>
                    <div className="teks-bawah">
                      <label className="form-label-bawah">
                        Belum punya akun?
                      </label>
                      <a href="Register" className="teks-bawah1">
                        Daftar disini
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-xl-block " id="kolom-kanan">
              <img src={gambar} className="img-fluid " alt="" />
            </div>
            <div className="watermark text-center">
              <label className="watermark-kiri">SUBAKU</label>
              <label className="watermark-kanan">
                © 2022 SUBAKU Team.All rights reserved.
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
