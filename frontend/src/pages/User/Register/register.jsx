import React from "react";
import "./register.css";
import gambar from "..//..//..//Assets//Login//subaku-logo.png";

export default function register() {
  return (
    <div>
      <section id="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto ">
              <div className="card">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-md-6 mx-auto my-auto ">
                      <form>
                        <div className="daftar text-center ">Daftar</div>
                        <div className="mb-2">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Nama Pengguna
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            for="exampleInputPassword1"
                            className="form-label"
                          >
                            Kata Sandi
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                      </form>
                      <center>
                        <button
                          type="submit"
                          className="btn btn-primary btn-daftar "
                        >
                          Daftar
                        </button>
                      </center>
                      <div className="teks-bawah text-center ">
                        <label className="form-label-bawah ">
                          Sudah punya akun?
                          <a href="#" className="teks-bawah1 ">
                            Masuk disini
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mx-auto  my-auto ">
                      <img
                        src={gambar}
                        className="img-fluid d-none d-lg-block"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="watermark text-center">
                <label className="watermark-kiri">SUBAKU </label>
                <label className="watermark-kanan m-2">
                  ©2022 SUBAKU Team.All rights reserved.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
