import './App.css';
import HeaderLogin from './components/HeaderLogin';
import Header from './components/Header';
import About from './pages/About';
import QrReader from './pages/QrReader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderLogin />} />
        <Route path="/header" element={<Header />} />
        <Route path="/qrreder" element={<QrReader />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
