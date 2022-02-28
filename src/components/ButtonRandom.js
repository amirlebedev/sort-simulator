import React from 'react';

const ButtonRandom = ({ handleRandom, setUI, ui }) => {
  return (
    <>
      <button className="btn" onClick={() => handleRandom(setUI, ui)}>
        {ui.randomText}
      </button>
    </>
  );
};

export default ButtonRandom;
