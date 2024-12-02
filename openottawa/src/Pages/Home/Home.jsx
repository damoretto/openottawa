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
        case "kitchissippi":
          navigate("/kitchissippi");
          break;
        case "somerset":
          navigate("/somerset"); // add other wards
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

  const handleMouseMove = (e) => {
    const tooltipX = e.clientX + 10; // Offset tooltip position to avoid overlap
    const tooltipY = e.clientY + 10;
  
    // Ensure tooltip stays within viewport bounds
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = 150; // Estimated tooltip width
    const tooltipHeight = 50; // Estimated tooltip height
  
    setTooltipPosition({
      x: Math.min(tooltipX + window.scrollX, viewportWidth - tooltipWidth + window.scrollX),
      y: Math.min(tooltipY + window.scrollY, viewportHeight - tooltipHeight + window.scrollY),
    });
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
      "Alta Vista",
      "Barrhaven East",
      "Barrhaven West",
      "Bay",
      "Beacon Hill-Cyrville",
      "Capital",
      "College",
      "Gloucester-Southgate",
      "Kanata North",
      "Kanata South",
      "Kitchissippi",
      "Knoxdale-Merivale",
      "Orléans East-Cumberland",
      "Orléans South-Navan",
      "Orléans West-Innes",
      "Osgoode",
      "Rideau-Jock",
      "Rideau-Rockcliffe",
      "Rideau-Vanier",
      "River",
      "Riverside South-Findlay Creek",
      "Somerset",
      "Stittsville",
      "West Carleton-March"    
  ];

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <header className="header">
        <h1>SELECT A WARD:</h1>
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
            top: `${tooltipPosition.y}px`,
            left: `${tooltipPosition.x}px`,
          }}
        >
          {hoveredRegion}
        </div>
      )}
    </div>
  );
}

export default Home;
