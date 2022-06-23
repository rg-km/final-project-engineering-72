import React from "react";
import "./login.css";
import gambar from "../../../assets/Login/subaku-logo.png";
import { Link } from "react-router-dom";

export default function login() {
  return (
    <div>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto ">
              <div className="card">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-md-6 mx-auto my-auto ">
                      <form>
                        <div className="Masuk text-center ">Masuk</div>
                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <Link to="/">
                          <button
                            type="submit"
                            className="btn btn-primary btn-masuk "
                          >
                            Masuk
                          </button>
                        </Link>
                      </center>
                      <div className="teks-bawah text-center ">
                        <label className="form-label-bawah ">
                          Belum punya akun?
                          <a href="#" className="teks-bawah1 ">
                            Daftar disini
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
