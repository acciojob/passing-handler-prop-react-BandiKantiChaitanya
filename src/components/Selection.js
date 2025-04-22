import React from 'react'
import '../styles/Child.css'
import { useState } from 'react';

function Selection(props) {
    const { applyColor } = props;
    const [bgColor, setBgColor] = useState('');

    const handleClick = () => {
      applyColor((newColor) => {
        setBgColor(newColor.background);
      });
    };
    return (
        <div className="fix-box" style={{ backgroundColor: bgColor }} onClick={handleClick}>
          Selection
        </div>
      );
}

export default Selection

