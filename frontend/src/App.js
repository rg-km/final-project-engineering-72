import Login from "./pages/User/Login/Login";
import Profil from "./pages/User/Profil/Profil";
import Register from "./pages/User/Register/Register";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/UserNavbar/Navbar";
import LandingPage from "./pages/User/LandingPage/LandingPage";
import Footer from "./Components/UserFooter/Footer";
import DaftarBeasiswa from "./pages/User/DaftarBeasiswa/DaftarBeasiswa";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <Profil />
      {/* <Navbar />
      <LandingPage />
      <Footer /> */}
      {/* <Navbar/>
      <DaftarBeasiswa/> */}
    </div>
  );
}

export default App;
