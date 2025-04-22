import React, { useState, useEffect } from 'react';
import '../styles/Child.css';

function Selection(props) {
  const { applyColor } = props;
  const [bgColor, setBgColor] = useState('');
  const [testId, setTestId] = useState('');

  const normalize = (c) => c.replace(/\s+/g, '');

  const getTestId = (color) => {
    const normalized = normalize(color);
    switch (normalized) {
      case 'rgb(34,193,195)': return 'blue';
      case 'rgb(221,112,18)': return 'orange';
      case 'rgb(44,209,88)': return 'green';
      default: return '';
    }
  };

  const handleClick = () => {
    applyColor((newColor) => {
      const bg = newColor.background;
      const id = getTestId(bg);
      setBgColor(bg);
      setTestId(id);
      console.log('New Color:', bg, 'Test ID:', id); // Debugging line
    });
  };

  useEffect(() => {
    if (bgColor && testId) {
      console.log('✔ BG Set:', bgColor);
      console.log('✔ Test ID Set:', testId);
    }
  }, [bgColor, testId]);

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
      data-testid={testId}
    >
      Selection
    </div>
  );
}

export default Selection;