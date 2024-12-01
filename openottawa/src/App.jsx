import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Somerset from "./Pages/Somerset/Somerset.jsx";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somerset" element={<Somerset />} />
      </Routes>
    </Router>
  );
}

export default App;
