import React, { useState, useEffect } from 'react';
import '../styles/Child.css';

function Selection(props) {
  const { applyColor } = props;
  const [bgColor, setBgColor] = useState('');
  const [testId, setTestId] = useState('');

  // Function to normalize color values for comparison
  const normalize = (c) => c.replace(/\s+/g, '');
  
  // Function to map background color to the corresponding test ID
  const getTestId = (color) => {
    const normalized = normalize(color);
    switch (normalized) {
      case 'rgb(34,193,195)': return 'blue';
      case 'rgb(221,112,18)': return 'orange';
      case 'rgb(44,209,88)': return 'green';
      default: return '';  // Default case if no match
    }
  };

  // Apply the new color and update states
  const handleClick = () => {
    applyColor((newColor) => {
      const bg = newColor.background;
      const id = getTestId(bg);
      setBgColor(bg);       // Set the background color
      setTestId(id);        // Set the test ID for data-testid
    });
  };

  // Log state changes using useEffect after the render is complete
  useEffect(() => {
    if (bgColor && testId) {
      console.log('✔ BG Set:', bgColor);
      console.log('✔ Test ID Set:', testId);
    }
  }, [bgColor, testId]);  // Trigger the effect when either bgColor or testId changes

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}  // Dynamically set background color
      onClick={handleClick}
      data-testid={testId}  // Dynamically set the test ID
    >
      Selection
    </div>
  );
}

export default Selection;
