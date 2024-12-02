import React, { useState, useEffect } from "react";
import "./Kitchissippi.css";
import { useNavigate } from "react-router-dom";

function Kitchissippi() {
  const navigate = useNavigate();
  const [transcriptVisible, setTranscriptVisible] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Load transcript from a .txt file
  useEffect(() => {
    fetch("/transcript.txt") // Replace with the actual path to the transcript file
      .then((response) => response.text())
      .then((data) => setTranscript(data))
      .catch((error) => console.error("Error loading transcript:", error));
  }, []);

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
              <em>“Coffee is a big part of Middle Eastern culture, and I wanted to share that rich tradition and sense of celebration here in Ottawa.”</em>
            </p>

            {/* Audio Player */}
            <div className="audio-container">
              <p>Hear Faisal's story:</p>
              <audio controls className="audio-player">
                <source src="NomadsCoffee.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              {/* Transcript Dropdown */}
              <button
                className="transcript-button"
                onClick={() => setTranscriptVisible(!transcriptVisible)}
              >
                {transcriptVisible ? "Hide Transcript" : "Show Transcript"}
              </button>
              {transcriptVisible && (
                <div className="transcript">
                  <p>{transcript}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="body-text">
          <p>
          Kitchissippi Ward, designated as Ward 15 in Ottawa, derives its name from the Algonquin word "Kitchissippi," meaning "Great River," a reference to the Ottawa River that forms its northern boundary. This area encompasses several historic neighborhoods, including Westboro, Hintonburg, Mechanicsville, and Wellington Village, each contributing to the ward's rich cultural tapestry.
          </p>
        </div>


        <div className="history">
  <h2>A Brief History of Kitchissippi</h2>
  <p>
    Kitchissippi Ward, designated as Ward 15 in Ottawa, derives its name from the Algonquin word "Kitchissippi," meaning "Great River," a reference to the Ottawa River that forms its northern boundary. This area encompasses several historic neighborhoods, including Westboro, Hintonburg, Mechanicsville, and Wellington Village, each contributing to the ward's rich cultural tapestry.
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



        <div className="demographics">
  <h2>Key Demographics</h2>
  <ul>
    <li><strong>Population Size:</strong> 37,035</li>
    <li><strong>Languages Spoken:</strong></li>
    <ul>
      <li>English only: 20,855 speakers (65.72%)</li>
      <li>French only: 245 speakers (0.77%)</li>
      <li>Italian: 2,150 speakers (6.77%)</li>
      <li>Arabic: 775 speakers (2.44%)</li>
      <li>Mandarin: 635 speakers (2.00%)</li>
    </ul>
    <li><strong>Median Household Income:</strong> $212,000</li>
    <li><strong>Average Dwelling Value:</strong> $892,000</li>
  </ul>

  {/* Highlight Section */}
  <div className="highlight">
    <h3>Italian Heritage in Kitchissippi</h3>
    <p>
      Kitchissippi Ward is proudly home to Ottawa’s historic Little Italy, where Italian culture thrives. With 2,150 Italian speakers (6.77%), the language is the most spoken non-official language in the ward. This cultural influence is reflected in the local community, from vibrant festivals to authentic Italian cuisine along Preston Street, the heart of Little Italy.
    </p>
  </div>
</div>





        <div className="feedback">
  <h2>Share Your Story</h2>
  <p>Do you have a story about Kitchissippi? Share it with us!</p>
  <form>
    <textarea placeholder="Your story..." rows="5" required></textarea>
    <button type="submit">Submit</button>
  </form>
</div>



      </div>
    </div>

    
  );
}

export default Kitchissippi;
