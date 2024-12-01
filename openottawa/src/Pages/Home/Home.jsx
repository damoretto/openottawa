import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
function Home() {
  const [svgContent, setSvgContent] = useState(""); // State to hold the SVG content
  const [hoveredRegion, setHoveredRegion] = useState(null); // State for hovered region
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Tooltip position
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
    const clickedElement = e.target.closest("[id]"); //getting an element with an ID
    if (clickedElement) {
      const regionId = clickedElement.id;
      console.log(`Clicked region ID: ${regionId}`); // Debugging to make sure we have the  correct ID 
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
  const handleMouseEnter = (e) => {
    const regionTitle = e.target.getAttribute("title"); // Get the title attribute for hover
    if (regionTitle) {
      setHoveredRegion(regionTitle); // Display the title on hover
    }
  };
  const handleMouseMove = (e) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY }); // Update tooltip position
  };
  const handleMouseLeave = () => {
    setHoveredRegion(null); // Clear hovered region
  };
  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <header className="header">
        <h1>SELECT A WARD</h1>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: svgContent }}
        onClick={handleRegionClick} // Attach click handler
        className="svg-container"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      />
      {/* Tooltip for hovered region */}
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