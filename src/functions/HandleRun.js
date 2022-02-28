import BubbleSort from '../algorithms/BubbleSort';
import SelectionSort from '../algorithms/SelectionSort';
import InsertionSort from '../algorithms/InsertionSort';
import QuickSort from '../algorithms/QuickSort';
import MergeSort from '../algorithms/MergeSort';

function handleRun(ui, props) {
  const { speed, algorithm } = ui;
  const { array, setArray, setTextIteration } = props;
  let newArray = [];

  if (algorithm === 'BubbleSort') {
    newArray = BubbleSort(array, speed, setTextIteration);
  } else if (algorithm === 'SelectionSort') {
    newArray = SelectionSort(array, speed, setTextIteration);
  } else if (algorithm === 'InsertionSort') {
    newArray = InsertionSort(array, speed, setTextIteration);
  } else if (algorithm === 'QuickSort') {
    newArray = BubbleSort(array, speed, setTextIteration);
  } else if (algorithm === 'MergeSort') {
    newArray = BubbleSort(array, speed, setTextIteration, setArray);
  }

  setArray(newArray);
}

export default handleRun;
