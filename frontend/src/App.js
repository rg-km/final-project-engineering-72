import logo from './logo.svg';
import './App.css';
import Navbar from './components/UserNavbar/Navbar';
import LandingPage from './pages/User/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
