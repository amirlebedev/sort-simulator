import React from 'react';

const ButtonSpeed = ({ speedText, handleSpeed, props }) => {
  const { speed, setSpeed, setSpeedText } = props;
  return (
    <>
      <button
        className="btn"
        onClick={() => handleSpeed(speed, setSpeed, setSpeedText)}
      >
        {speedText}
      </button>
    </>
  );
};

export default ButtonSpeed;
