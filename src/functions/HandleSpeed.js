const handleSpeed = (setUI, ui) => {
  if (ui.speed === 1) {
    setUI({ ...ui, speed: 2, speedText: `Animation Speed X2` });
  } else if (ui.speed === 2) {
    setUI({ ...ui, speed: 10, speedText: `Animation Speed X10` });
  } else if (ui.speed == 10) {
    setUI({ ...ui, speed: 1, speedText: `Animation Speed X1` });
  }
};

export default handleSpeed;
