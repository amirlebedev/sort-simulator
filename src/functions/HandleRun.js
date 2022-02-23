import BubbleSort from '../algorithms/BubbleSort';

function handleRun(array, setArray, speed, setTextIteration, algorithm) {
  let newArray = [];
  if (algorithm === 'BubbleSort') {
    newArray = BubbleSort(array, speed, setTextIteration, setArray);
  } else if (algorithm === 'SelectionSort') {
    alert('Not functional yet.');
    // newArray = BubbleSort(array, speed, setTextIteration, setArray);
  } else if (algorithm === 'InsertionSort') {
    alert('Not functional yet.');
    // newArray = BubbleSort(array, speed, setTextIteration, setArray);
  } else if (algorithm === 'QuickSort') {
    alert('Not functional yet.');
    // newArray = BubbleSort(array, speed, setTextIteration, setArray);
  } else if (algorithm === 'MergeSort') {
    alert('Not functional yet.');
    // newArray = BubbleSort(array, speed, setTextIteration, setArray);
  }
  setArray(newArray);
}

export default handleRun;
