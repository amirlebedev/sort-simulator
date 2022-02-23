const handleSpeed = (speed, setSpeed, setSpeedText) => {
  if (speed === 1) {
    setSpeed(2);
    setSpeedText(`Animation Speed X2`);
  } else if (speed === 2) {
    setSpeed(10);
    setSpeedText(`Animation Speed X10`);
  } else if (speed == 10) {
    setSpeed(1);
    setSpeedText(`Animation Speed X1`);
  }
};

export default handleSpeed;
