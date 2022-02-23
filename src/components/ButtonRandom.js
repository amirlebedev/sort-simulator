import React from 'react';

const ButtonRandom = ({ randomText, handleRandom, props }) => {
  const { random, setRandom, setRandomText } = props;
  return (
    <>
      <button
        className="btn"
        onClick={() => handleRandom(random, setRandom, setRandomText)}
      >
        {randomText}
      </button>
    </>
  );
};

export default ButtonRandom;
