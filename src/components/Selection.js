import React from 'react'
import '../styles/Child.css'
import { useState } from 'react';

function Selection(props) {
    const { applyColor } = props;
    const [bgColor, setBgColor] = useState('');

    const getTestId = (color) => {
        switch (color) {
          case 'rgb(34, 193, 195)': return 'blue';
          case 'rgb(221, 112, 18)': return 'orange';
          case 'rgb(44, 209, 88)': return 'green';
          default: return '';
        }
      };
      

    const handleClick = () => {
      applyColor((newColor) => {
        setBgColor(newColor.background);
      });
    };
    return (
        <div className="fix-box" style={{ backgroundColor: bgColor }} onClick={handleClick} data-testid={getTestId(bgColor)} >
          Selection
        </div>
      );
}

export default Selection

