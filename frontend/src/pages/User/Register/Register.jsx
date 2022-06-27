import React from "react";
import "./Register.css";
import gambar from "..//..//..//assets//Login//subaku-logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const toastPosition = {
    position: "top-center",
    autoClose: 5000,
  };

  const errorToastRegister = (msg, err) => {
    toast.error(msg, toastPosition);
    console.log(err);
  };

  useEffect(() => {
    document.title = "Subaku";
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const successToastRegister = () => {
    toast.success("Sukses mendaftar!", {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const REGISTER_API = "/api/register";
      const postRegister = await axios.post(REGISTER_API, {
        email: email,
        username: username,
        password: password,
      });
      if (postRegister.status === 200) {
        successToastRegister();
      }
      console.log(postRegister);
    } catch (error) {
      if (email === "" && username === "" && password === "") {
        errorToastRegister("Semua data masih kosong. Gagal mendaftar.", error);
      } else if (email === "") {
        errorToastRegister("Email Anda masih kosong!", error);
      } else if (username === "") {
        errorToastRegister("Nama pengguna Anda masih kosong!", error);
      } else if (password === "") {
        errorToastRegister("Password Anda masih kosong!", error);
      } else if (password.length < 6) {
        toast.warn("Password Anda harus lebih dari 6 kata!", toastPosition);
        console.log(error);
      } else {
        errorToastRegister("Gagal mendaftar.", error);
      }
    }
  };
  //   axios
  //     .post("http://localhost:5000/account", {
  //       email: email,
  //       username: username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       alert(response);
  //       console.log("DAftar Sukses");
  //       navigate("/");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       alert("gagal");
  //     });
  // };

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
                            htmlFor="exampleInputEmail1"
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
                            value={email}
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Nama Pengguna
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            aria-describedby="emailHelp"
                            value={username}
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            htmlFor="exampleInputPassword1"
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
                            value={password}
                          />
                        </div>
                        <center>
                          {/* <Link to="/login"> */}
                          <button
                            type="submit"
                            className="btn btn-primary btn-daftar "
                            // onClick={diffToast}

                            onClick={handleSubmit}

                            // onClick={diffToast}

                            // onClick={handleSubmit}
                          >
                            Daftar
                          </button>
                          {/* </Link> */}
                        </center>
                      </form>

                      <center>
                        {/* <Link to="/login"> */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-daftar "
                          onClick={handleSubmit}
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
