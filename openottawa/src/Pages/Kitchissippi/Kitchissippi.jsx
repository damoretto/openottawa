import React from "react";
import "./Kitchissippi.css";
import { useNavigate } from "react-router-dom";

function Kitchissippi() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Ward Select
        </button>
        <h1>KITCHISSIPPI - WARD 15</h1>
      </header>

      {/* Power BI iframe */}
      <div className="dashboard-container">
        <img
          src="./dashboardks.png" // Replace with actual Power BI link
          className="dashboard"
          frameBorder="0"
          />
      </div>

      {/* Main Content */}
      <div className="content">
        <h2><em>Welcome to Kitchissippi</em></h2>
        <p>Home of : <strong>Faisal Ghali</strong></p>

        {/* Storyteller Section */}
        <div className="image-container">
          <img
            className="storyteller-image"
            src="/Faisal.jpg" // Replace with actual image path
            alt="Storyteller"
          />
          <div className="details">
            <p><strong>Owner of "Nomads Coffee"</strong></p>
            <p>Born in: Ottawa, ON</p>
            <p>
              <em>“Quote about how they used Open Ottawa data to do something”</em>
            </p>

            {/* Audio Player */}
            <div className="audio-container">
              <p>Hear Faisal's story:</p>
              <audio controls className="audio-player">
                <source src="NomadsCoffee.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="body-text">
          <p>
            Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="image-gallery">
          <img
            className="image-placeholder"
            src="https://via.placeholder.com/150"
            alt="Gallery 1"
          />
          <img
            className="image-placeholder"
            src="https://via.placeholder.com/150"
            alt="Gallery 2"
          />
          <img
            className="image-placeholder"
            src="https://via.placeholder.com/150"
            alt="Gallery 3"
          />
        </div>

        {/* Body Text */}
        <div className="body-text">
          <p>
            Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text. Add a little bit of body text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kitchissippi;
