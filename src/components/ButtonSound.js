import React from 'react';

const ButtonSound = ({ soundText, handleSound, props }) => {
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          handleSound(props.sound, props.setSound, props.setSoundText)
        }
      >
        {soundText}
      </button>
    </>
  );
};

export default ButtonSound;
