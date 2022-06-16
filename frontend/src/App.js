import logo from './logo.svg';
import './App.css';
import Navbar from './Components/UserNavbar/Navbar';
import LandingPage from './pages/User/LandingPage/LandingPage';
import Footer from './Components/UserFooter/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
