import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Labs from './pages/Labs';
import Contact from './pages/Contact';
import Capabilities from './pages/Capabilities';
import Training from './pages/Training';
import Philosophy from './pages/Philosophy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/research" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
