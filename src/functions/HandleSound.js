const handleSound = (sound, setSound, setSoundText) => {
  alert('Sound is not functional yet.');
  if (sound === 'ON') {
    setSound('OFF');
    setSoundText('Sound Off');
  } else {
    setSound('ON');
    setSoundText('Sound On');
  }
};

export default handleSound;
