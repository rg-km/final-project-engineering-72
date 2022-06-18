import React from "react";
import "./register.css";
import gambarlogo from "..//..//..//Assets//Login//Subaku-Item.png";

export default function () {
  return (
    <div>
      <section id="register">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto" id="kolom-utama">
              <div className="card">
                <div className="card-body">
                  <div className="daftar text-center">Daftar</div>
                  <form>
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        Nama Pengguna
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
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
                      Daftar
                    </button>
                    <div className="teks-bawah">
                      <label className="form-label-bawah">
                        Sudah punya akun?
                      </label>
                      <a href="#" className="teks-bawah1">
                        Masuk disini
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block " id="kolom-kedua">
              <img src={gambarlogo} className="img-fluid " alt="" />
            </div>
            <div className="watermark text-center">
              <label className="watermark-kiri">SUBAKU </label>
              <label className="watermark-kanan">
                ©2022 SUBAKU Team.All rights reserved.
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
