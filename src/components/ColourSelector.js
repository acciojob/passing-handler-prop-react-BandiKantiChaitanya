import React from 'react';
import '../styles/Child.css'

const ColourSelector = (props) => {
  
  const { config, selectNextBackground } = props
  const { background } = config;

  // const getTestId = (color) => {
  //   const normalized = color.replace(/\s/g, '');
  //   switch (normalized) {
  //     case 'rgb(34,193,195)': return 'blue';
  //     case 'rgb(221,112,18)': return 'orange';
  //     case 'rgb(44,209,88)': return 'green';
  //     default: return '';
  //   }
  // };
  // const testId = getTestId(bgColor);
  return (
    <button className='selectorBtn'style={{backgroundColor:config.background}} onClick={() => selectNextBackground({background: background})} data-testid={config.key} >
      
      {config.label}
    </button>
  )
}
export default ColourSelector;
