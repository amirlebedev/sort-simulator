import {
  BubbleSortInfo,
  SelectionSortInfo,
  InsertionSortInfo,
  QuickSortInfo,
  MergeSortInfo,
} from '../components/algorithm-info';

const handleDropdown = (event, setUI, ui) => {
  const selection = event.target.value;
  // setUI({ ...ui, algorithm: selection });
  if (selection === 'BubbleSort') {
    setUI({ ...ui, algorithm: selection, info: BubbleSortInfo() });
  } else if (selection === 'SelectionSort') {
    setUI({ ...ui, algorithm: selection, info: SelectionSortInfo() });
  } else if (selection === 'InsertionSort') {
    setUI({ ...ui, algorithm: selection, info: InsertionSortInfo() });
  } else if (selection === 'QuickSort') {
    alert('QuickSort not functional yet.');
    setUI({ ...ui, algorithm: selection, info: QuickSortInfo() });
  } else if (selection === 'MergeSort') {
    alert('MergeSort not functional yet.');
    setUI({ ...ui, algorithm: selection, info: MergeSortInfo() });
  }
};

export default handleDropdown;
