import React from 'react';

const ButtonRun = ({ handleRun, props }) => {
  const { array, setArray, speed, setTextIteration, algorithm } = props;
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          handleRun(array, setArray, speed, setTextIteration, algorithm)
        }
      >
        Run
      </button>
    </>
  );
};

export default ButtonRun;
