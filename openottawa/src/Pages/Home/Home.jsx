import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [svgContent, setSvgContent] = useState(""); // State to hold the SVG content
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/wardmap.svg")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load SVG");
        }
        return response.text();
      })
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  const handleRegionClick = (e) => {
    const regionId = e.target.id;
    switch (regionId) {
      case "somerset":
        navigate("/somerset");
        break;
      default:
        console.log(`Clicked on an unrecognized region: ${regionId}`);
    }
  };

  return (
    <div className="home-container">
      <h1>Select a Ward</h1>
      <p>Explore the map below. Click on a ward to learn more about it.</p>

      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        onClick={handleRegionClick}
        className={"svg-container"}
      />
    </div>
  );
}

export default Home;
