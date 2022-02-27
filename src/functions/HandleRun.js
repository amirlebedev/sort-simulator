import BubbleSort from '../algorithms/BubbleSort';
import SelectionSort from '../algorithms/SelectionSort';
import InsertionSort from '../algorithms/InsertionSort';
import QuickSort from '../algorithms/QuickSort';

function handleRun(array, setArray, speed, setTextIteration, algorithm) {
  let newArray = [];
  if (algorithm === 'BubbleSort') {
    newArray = BubbleSort(array, speed, setTextIteration);
  } else if (algorithm === 'SelectionSort') {
    newArray = SelectionSort(array, speed, setTextIteration);
  } else if (algorithm === 'InsertionSort') {
    newArray = InsertionSort(array, speed, setTextIteration);
  } else if (algorithm === 'QuickSort') {
    alert('QuickSort not functional yet.');
    // newArray = QuickSort(array, speed, setTextIteration);
  } else if (algorithm === 'MergeSort') {
    alert('Not functional yet.');
    // newArray = BubbleSort(array, speed, setTextIteration, setArray);
  }
  setArray(newArray);
}

export default handleRun;
