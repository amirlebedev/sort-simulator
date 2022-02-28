import React from 'react';

const ButtonSound = ({ handleSound, setUI, ui }) => {
  return (
    <>
      <button className="btn" onClick={() => handleSound(setUI, ui)}>
        {ui.soundText}
      </button>
    </>
  );
};

export default ButtonSound;
