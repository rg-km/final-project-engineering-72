import Login from "./pages/User/Login/Login";
import Profil from "./pages/User/Profil/Profil";
import Register from "./pages/User/Register/Register";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/UserNavbar/Navbar";
import LandingPage from "./pages/User/LandingPage/LandingPage";
import Footer from "./Components/UserFooter/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Admin/Dashboard/dashboard";
import PengumumanBeasiswa from "./pages/User/PengumumanBeasiswa/PengumumanBeasiswa";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route
          path="/PengumumanBeasiswa"
          element={<PengumumanBeasiswa />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
