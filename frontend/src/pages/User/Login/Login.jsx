import React from "react";
import "./login.css";
import gambar from "../../../assets/Login/subaku-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStore from "../../../store/loginStore";

export default function Login() {
  const { usernameLogin, isLogin, setUsernameLogin, setIsLogin, tokenLogin, setTokenLogin, roleLogin, setRoleLogin } = useStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toastPosition = {
    position: "top-center",
    autoClose: 5000,
  };

  const successToastLogin = () => {
    toast.success("Sukses login!", {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
    });
  };

  const errorToastLogin = (msg, err) => {
    toast.error(msg, toastPosition);
    console.log(err);
  };

  useEffect(() => {
    document.title = "Subaku";
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "/api/login",
        {
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
      const loginResult = response.data.data.user;
      successToastLogin();
      console.log(response);

      setUsernameLogin(loginResult.UserName);
      setTokenLogin(response.data.data.token_jwt);
      setRoleLogin(loginResult.Role);
      setIsLogin(true);
      
      setInterval(() => {
        return (window.location = "/");
      }, 1500);
    } catch (error) {
      if (username === "" && password === "") {
        errorToastLogin("Username dan Password Anda masih kosong!");
      } else {
        if (username === "") {
          errorToastLogin("Username Anda masih kosong!");
        } else if (password === "") {
          errorToastLogin("Password Anda masih kosong!");
        }
      }
      errorToastLogin("Username atau Password Anda salah!");
      console.log(error);
    }
  };

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
                      <form onSubmit={handleSubmit}>
                        <div className="Masuk text-center ">Masuk</div>
                        <div className="mb-4">
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
                            aria-describedby="emailHelp"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
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
                          />
                        </div>
                        <center>
                          <Link to="/profile">
                            <button
                              type="submit"
                              className="btn btn-primary btn-masuk "
                              onClick={handleSubmit}
                            >
                              Masuk
                            </button>
                          </Link>
                        </center>
                      </form>

                      <div className="teks-bawah text-center ">
                        <label className="form-label-bawah ">
                          Belum punya akun?
                          <a href="/register" className="teks-bawah1 ">
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
                  ??2022 SUBAKU Team.All rights reserved.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
