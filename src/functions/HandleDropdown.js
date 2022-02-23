import {
  BubbleSortInfo,
  SelectionSortInfo,
  InsertionSortInfo,
  QuickSortInfo,
  MergeSortInfo,
} from '../algorithm-info';

const handleDropdown = (event, setInfo, setAlgorithm) => {
  const selection = event.target.value;

  setAlgorithm(selection);
  if (selection === 'BubbleSort') {
    setInfo(BubbleSortInfo);
  } else if (selection === 'SelectionSort') {
    setInfo(SelectionSortInfo);
  } else if (selection === 'InsertionSort') {
    setInfo(InsertionSortInfo);
  } else if (selection === 'QuickSort') {
    setInfo(QuickSortInfo);
  } else if (selection === 'MergeSort') {
    setInfo(MergeSortInfo);
  }
};

export default handleDropdown;
