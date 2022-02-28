import React from 'react';

const ButtonRun = ({ handleRun, ui, props }) => {
  return (
    <>
      <button className="btn" onClick={() => handleRun(ui, props)}>
        Run
      </button>
    </>
  );
};

export default ButtonRun;
