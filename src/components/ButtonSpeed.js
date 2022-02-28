import React from 'react';

const ButtonSpeed = ({ handleSpeed, setUI, ui }) => {
  return (
    <>
      <button className="btn" onClick={() => handleSpeed(setUI, ui)}>
        {ui.speedText}
      </button>
    </>
  );
};

export default ButtonSpeed;
