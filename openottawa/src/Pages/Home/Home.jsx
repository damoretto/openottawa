import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [svgContent, setSvgContent] = useState(""); // State to hold the SVG content
  const [hoveredRegion, setHoveredRegion] = useState(null); // State for hovered region
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Tooltip position
  const navigate = useNavigate();

  // Fetch the SVG content
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

  // Handle region click
  const handleRegionClick = (e) => {
    const clickedElement = e.target.closest("[id]"); // Getting an element with an ID
    if (clickedElement) {
      const regionId = clickedElement.id;
      console.log(`Clicked region ID: ${regionId}`); // Debugging to ensure we get the correct ID
      switch (regionId) {
        case "orleans-south-navan":
          navigate("/orleans-south-navan");
          break;
        case "somerset":
          navigate("/somerset");
          break;
        default:
          console.log(`Clicked on an unrecognized region: ${regionId}`);
      }
    }
  };

  // Handle hover on SVG paths only
  const handleMouseEnter = (e) => {
    // Ensure the target is an SVG path
    if (e.target.tagName === "path") {
      const regionTitle = e.target.getAttribute("title"); // Get the title attribute for hover
      if (regionTitle) {
        setHoveredRegion(regionTitle); // Display the title on hover
      }
    }
  };

  // Update tooltip position on mouse move
  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  // Clear hover state on mouse leave
  const handleMouseLeave = (e) => {
    if (e.target.tagName === "path") {
      setHoveredRegion(null); // Clear hovered region
    }
  };

  // Handle hover on buttons
  const handleButtonHover = (regionTitle) => {
    const regionPath = document.querySelector(`svg path[title="${regionTitle}"]`);
    if (regionPath) {
      regionPath.classList.add("hovered-region"); // Add hover class to region
    }
  };

  // Handle button hover leave
  const handleButtonLeave = (regionTitle) => {
    const regionPath = document.querySelector(`svg path[title="${regionTitle}"]`);
    if (regionPath) {
      regionPath.classList.remove("hovered-region"); // Remove hover class
    }
  };

  // List of buttons for the scrollable panel
  const wardNames = [
    "Orléans South-Navan",
    "Somerset",
    "Orléans East-Cumberland",
    "Orléans West-Innes",
    "Kanata North",
    "West Carleton-March",
    "Stittsville",
    "Bay",
    "College",
    "Knoxdale-Merivale",
    "Gloucester-Southgate",
    "Beacon Hill-Cyrville",
    "Rideau-Vanier",
    "Rideau-Rockcliffe",
    "Kitchissippi",
    "River",
    "Capital",
    "Alta Vista",
    "Osgoode",
    "Rideau-Jock",
    "Riverside South-Findlay Creek",
    "Kanata South",
    "Barrhaven East",
    "Barrhaven West",
  ];

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <header className="header">
        <h1>SELECT A WARD</h1>
      </header>

      <div className="main-content">
        {/* SVG Map */}
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          onClick={handleRegionClick} 
          className="svg-container"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        ></div>

        {/* Scrollable Button Panel */}
        <div className="scrollable-panel">
          {wardNames.map((ward, index) => (
            <button
              key={index}
              className="ward-button"
              onMouseEnter={() => handleButtonHover(ward)} 
              onMouseLeave={() => handleButtonLeave(ward)}
              onClick={() => navigate(`/${ward.toLowerCase().replace(/ /g, "-")}`)} 
            >
              {ward}
            </button>
          ))}
        </div>
      </div>

      {/* Tooltip for hovered region (only for SVG) */}
      {hoveredRegion && (
        <div
          className="tooltip"
          style={{
            top: `${tooltipPosition.y + 10}px`,
            left: `${tooltipPosition.x + 10}px`,
          }}
        >
          {hoveredRegion}
        </div>
      )}
    </div>
  );
}

export default Home;
