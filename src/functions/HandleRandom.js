const handleRandom = (random, setRandom, setRandomText) => {
  if (random === 'ON') {
    setRandom('OFF');
    setRandomText('Ordered Numbers');
  } else {
    setRandom('ON');
    setRandomText('Random Numbers');
  }
};
export default handleRandom;
