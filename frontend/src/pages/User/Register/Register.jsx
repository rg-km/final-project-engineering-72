import React from "react";
import "./Register.css";
import gambar from "..//..//..//assets//Login//subaku-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  useEffect(() => {
    document.title = "Subaku";
  }, []);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8080/api/register",
        {
          email: email,
          username: username,
          password: password,
        },
        {
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
                      <form onSubmit={handleSubmit}>
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
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
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
                            id="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
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
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </form>
                      <center>
                        {/* <Link to="/login"> */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-daftar "
                        >
                          Daftar
                        </button>
                        {/* </Link> */}
                      </center>
                      <div className="teks-bawah text-center ">
                        <label className="form-label-bawah ">
                          Sudah punya akun?
                          <a href="/login" className="teks-bawah1 ">
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
