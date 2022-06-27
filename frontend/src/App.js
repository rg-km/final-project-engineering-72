import React from "react";
import Login from "./pages/User/Login/Login";
import Profil from "./pages/User/Profil/Profil";
import Register from "./pages/User/Register/Register";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/UserNavbar/Navbar";
import LandingPage from "./pages/User/LandingPage/LandingPage";
import Footer from "./Components/UserFooter/Footer";
import DaftarBeasiswa from "./pages/User/DaftarBeasiswa/DaftarBeasiswa";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Admin/Dashboard/dashboard";
import PengumumanBeasiswa from "./pages/User/PengumumanBeasiswa/PengumumanBeasiswa";
import ProsedurBeasiswa from "./pages/User/ProsedurBeasiswa/ProsedurBeasiswa";
import ScrollTop from "./utils/ScrollTop";
import Apply_beasiswa from "./pages/Admin/Beasiswa/Apply_beasiswa";
import Beasiswa from "./pages/Admin/Beasiswa/Beasiswa";
import Users from "./pages/Admin/User/Users";
import AdminLogin from "./pages/Admin/Login/AdminLogin";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        {/* <Route path="/Dashboard" element={<Dashboard />}></Route> */}
        <Route
          path="/PengumumanBeasiswa"
          element={<PengumumanBeasiswa />}
        ></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/DaftarBeasiswa" element={<DaftarBeasiswa />}></Route>
        <Route path="/ProsedurBeasiswa" element={<ProsedurBeasiswa />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        {/* <Route path="/Apply_beasiswa" element={<Apply_beasiswa />}></Route>
        <Route path="/Beasiswa" element={<Beasiswa />}></Route> */}
        <Route path="/Users" element={<Users />}></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
