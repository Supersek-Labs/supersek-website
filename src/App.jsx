import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Labs from './pages/Labs';
import Contact from './pages/Contact';
import Capabilities from './pages/Capabilities';
import Academy from './pages/Academy';
import Philosophy from './pages/Philosophy';
import SupersekNetrxReport from './pages/SupersekNetrxReport';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/research" element={<Labs />} />
          <Route path="/research/supersek-netrx-agentic-penetration-testing" element={<SupersekNetrxReport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/academy" element={<Academy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
