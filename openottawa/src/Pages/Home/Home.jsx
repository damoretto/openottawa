import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">

      <h1>Ward Selection</h1>
      <button className="button" onClick={() => navigate("/somerset")}>
        Somerset
      </button>

    </div>
  );
}

export default Home;
