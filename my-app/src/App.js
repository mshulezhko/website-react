
import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer';
import Menu from './components/Menu'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/about' exact element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
