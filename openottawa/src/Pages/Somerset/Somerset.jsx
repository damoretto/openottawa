import React from "react";
import "./Somerset.css";
import { useNavigate } from "react-router-dom";

function Somerset() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>SOMERSET - WARD 14</h1>
        <button className="button" onClick={() => navigate("/")}>
          Back to Ward Select
        </button>
      </header>

      {/* Power BI iframe */}
      <div className="dashboard-container">
        <iframe
          title="Power BI Dashboard"
          src="https://app.powerbi.com/" // Replace with Power BI link
          className="dashboard"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="content">
        <h2><em>Welcome to Somerset</em></h2>
        <p>Home of : <strong>Firstname Lastname</strong></p>

        <div className="image-container">
          <img
            className="storyteller-image"
            src="/guy.jpg"
            alt="person"
          />
          <div className="details">
            <p><strong>Owner of “restaurant”</strong></p>
            <p>Born in:</p>
            <p>
              <em>“Quote about how they used Open Ottawa data to do something”</em>
            </p>
            {/* Audio Player */}
            <div className="audio-container">
              <p>Hear's story</p>
              <audio controls className="audio-player">
                <source src="your-audio-file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="body-text">
          <p>
            Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text.
          </p>
        </div>

        {/* Data Visualizations */}
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
            Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text Add a little bit of body text.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Somerset;