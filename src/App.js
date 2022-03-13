import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import ButtonSound from './components/ButtonSound';
import ButtonSpeed from './components/ButtonSpeed';
import ButtonRandom from './components/ButtonRandom';
import ButtonRun from './components/ButtonRun';
import Slider from './components/Slider';
import Dropdown from './components/Dropdown';
import Num from './components/Num';
// Functions
import handleSound from './functions/HandleSound';
import handleSpeed from './functions/HandleSpeed';
import handleRandom from './functions/HandleRandom';
import handleRun from './functions/HandleRun';
import handleDropdown from './functions/HandleDropdown';
import {
  shuffle,
  generateRandomInt,
  generateArray,
} from './functions/ArrayFunctions';
// Misc
import { BubbleSortInfo } from './components/algorithm-info';

function App() {
  // todo map text info rather than hardcode it
  // fix quicksort + mergesort
  // todo mobile version
  const [ui, setUI] = useState({
    sound: 'OFF',
    soundText: 'Sound Off',
    speed: 10,
    speedText: `Animation Speed X10`,
    random: 'ON',
    randomText: 'Random Numbers',
    info: BubbleSortInfo(),
    algorithm: 'BubbleSort',
  });
  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(50);
  const [textIteration, setTextIteration] = useState('Iteration:  0');

  useEffect(() => {
    document.title = 'Sorting Simulator';
  }, []);

  useEffect(() => {
    // change array based on random button and slider
    let newArray = generateArray(ui, arrayLength);
    setArray(newArray);
    setTextIteration('Iteration:  0');
    console.log(array);
  }, [ui.random, arrayLength]);

  const handleSlider = input => {
    setArrayLength(input.target.value);
  };

  return (
    <div className="page">
      <section className="UI">
        <div className="UI-container">
          <Dropdown handleDropdown={handleDropdown} setUI={setUI} ui={ui} />
          <Slider handleSlider={handleSlider} />
          <ButtonSound handleSound={handleSound} setUI={setUI} ui={ui} />
          <ButtonSpeed handleSpeed={handleSpeed} setUI={setUI} ui={ui} />
          <ButtonRandom handleRandom={handleRandom} setUI={setUI} ui={ui} />
          <ButtonRun
            handleRun={handleRun}
            ui={ui}
            props={{
              array,
              setArray,
              setTextIteration,
            }}
          />
        </div>
      </section>
      <section className="output">
        <Num numbers={array}></Num>
        <h1>{textIteration}</h1>
      </section>
      <section className="info">
        <div className="info-block">{ui.info}</div>
      </section>
    </div>
  );
}

export default App;
