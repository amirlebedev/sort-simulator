const handleSound = (setUI, ui) => {
  alert('Sound is not functional yet.');
  if (ui.sound == 'ON') {
    setUI({ ...ui, sound: 'OFF', soundText: 'Sound Off' });
  } else {
    setUI({ ...ui, sound: 'ON', soundText: 'Sound On' });
  }
};

export default handleSound;
