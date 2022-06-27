import React from "react";
import "./AdminLogin.css";

export default function AdminLogin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-admin p-4 p-sm-5">
              <h5 className="title card-title text-center mb-5 fw-light fs-5">
                <img
                  src={require("../../../assets/logo-subaku.png")}
                  alt="logo subaku"
                />
                Login Administrator
              </h5>
              <form>
                <div className="field-email form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  ></input>
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="field-password form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  ></input>
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <h5 className="footer-admin text-center mb-5 fw-light fs-5">
            <span>2022 &copy; Subaku</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
