import React from 'react';
import '../styles/Child.css'

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className='selectorBtn'style={{backgroundColor:config.background}} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
