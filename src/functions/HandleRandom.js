const handleRandom = (setUI, ui) => {
  if (ui.random === 'ON') {
    setUI({ ...ui, random: 'OFF', randomText: 'Ordered Numbers' });
  } else {
    setUI({ ...ui, random: 'ON', randomText: 'Random Numbers' });
  }
};
export default handleRandom;
