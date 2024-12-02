import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Somerset from "./Pages/Somerset/Somerset.jsx";
import ScrollToTop from './ScrollToTop';
import Kitchissippi from "./Pages/Kitchissippi/Kitchissippi.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somerset" element={<Somerset />} />
        <Route path="/kitchissippi" element={<Kitchissippi />} />
      </Routes>
    </Router>
  );
}

export default App;
