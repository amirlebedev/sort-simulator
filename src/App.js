import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import ButtonSound from './components/ButtonSound';
import ButtonSpeed from './components/ButtonSpeed';
import ButtonRandom from './components/ButtonRandom';
import ButtonRun from './components/ButtonRun';
import Slider from './components/Slider';
import Dropdown from './components/Dropdown';
// Functions
import handleSound from './functions/HandleSound';
import handleSpeed from './functions/HandleSpeed';
import handleRandom from './functions/HandleRandom';
import handleRun from './functions/HandleRun';
import handleDropdown from './functions/HandleDropdown';
import { shuffle, generateRandomInt } from './functions/ArrayFunctions';
// Misc
import { BubbleSortInfo } from './algorithm-info';

function App() {
  // todo state object
  // todo map text info rather than hardcode it
  // fix quicksort
  // todo implement mergesort
  // todo mobile virsion
  const [sound, setSound] = useState('ON');
  const [soundText, setSoundText] = useState('Sound Off');
  const [speed, setSpeed] = useState(10);
  const [speedText, setSpeedText] = useState(`Animation Speed X${speed}`);
  const [random, setRandom] = useState('ON');
  const [randomText, setRandomText] = useState('Random Numbers');
  const [info, setInfo] = useState(BubbleSortInfo);
  const [algorithm, setAlgorithm] = useState('BubbleSort');

  const [array, setArray] = useState([]);
  const [arrayLength, setArrayLength] = useState(50);
  const [textIteration, setTextIteration] = useState('Iteration:  0');

  useEffect(() => {
    document.title = 'Sorting Simulator';
  }, []);

  useEffect(() => {
    // change array based on random button and slider
    let array = [];
    if (random == 'ON') {
      for (let i = 1; i <= arrayLength; i++) {
        let num = generateRandomInt();
        if (array.includes(num)) {
          i--;
        } else {
          array.push(num);
        }
      }
    } else {
      for (let i = 1; i <= arrayLength; i++) {
        array.push(i);
        array = shuffle(array);
      }
    }
    setArray(array);
    console.log(array);
  }, [random, arrayLength]);

  const handleSlider = input => {
    setArrayLength(input.target.value);
  };

  return (
    <div className="page">
      <section className="UI">
        <div className="UI-container">
          <Dropdown
            handleDropdown={handleDropdown}
            setInfo={setInfo}
            setAlgorithm={setAlgorithm}
          />
          <Slider handleSlider={handleSlider} />
          <ButtonSound
            soundText={soundText}
            handleSound={handleSound}
            props={{ sound, setSound, setSoundText }}
          />
          <ButtonSpeed
            speedText={speedText}
            handleSpeed={handleSpeed}
            props={{ speed, setSpeed, setSpeedText }}
          />
          <ButtonRandom
            randomText={randomText}
            handleRandom={handleRandom}
            props={{ random, setRandom, setRandomText }}
          />
          <ButtonRun
            handleRun={handleRun}
            props={{ array, setArray, speed, setTextIteration, algorithm }}
          />
        </div>
      </section>
      <section className="output">
        <Num numbers={array}></Num>
        <h1>{textIteration}</h1>
      </section>
      <section className="info">
        <div className="info-block">{info}</div>
      </section>
    </div>
  );
}

function Num(array) {
  const numbers = array.numbers;
  const listItems = numbers.map((number, index) => (
    <div key={index} className="num" style={{ height: `${5 * number}px` }}>
      {number}
    </div>
  ));
  return <div>{listItems}</div>;
}
export default App;
