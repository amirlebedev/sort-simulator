import React from 'react';

const Slider = ({ handleSlider }) => {
  return (
    <>
      <input
        className="slider"
        type="range"
        min="5"
        max="60"
        step="5"
        defaultValue="50"
        onChange={e => handleSlider(e)}
      />
    </>
  );
};

export default Slider;
