import './App.css';
import Cto from './components/Cto/Cto';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ShortenURL from './components/ShortenURL/ShortenURL';
import Statistics from './components/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Navbar/>
        <Header/>
        <ShortenURL/>
        <Statistics/>
        <Cto/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
