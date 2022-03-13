export function BubbleSortInfo() {
  const string = [
    'for(var i = 0; i < arr.length; i++)⠀{',
    <br />,
    <br />,
    '⠀⠀// Last i elements are already in place  ',
    <br />,
    '⠀⠀for(var j = 0; j < ( arr.length - i -1 ); j++)⠀{',
    <br />,
    <br />,
    '⠀⠀⠀⠀// Checking if the item at present iteration ',
    <br />,
    '⠀⠀⠀⠀// is greater than the next iteration',
    <br />,
    '⠀⠀⠀⠀if(arr[j] > arr[j+1])⠀{',
    <br />,
    <br />,
    '⠀⠀⠀⠀⠀⠀// If the condition is true then swap them',
    <br />,
    '⠀⠀⠀⠀⠀⠀var temp = arr[j]',
    <br />,
    '⠀⠀⠀⠀⠀⠀arr[j] = arr[j + 1]',
    <br />,
    '⠀⠀⠀⠀⠀⠀arr[j+1] = temp',
    <br />,
    '⠀⠀}',
    <br />,
    '}',
    <br />,
    'Best-case: O(n) Average-case:	O(n^2) Worst-case:	O(n^2)',
  ];

  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}

export function SelectionSortInfo() {
  const string = [
    'for(let i = 0; i < arr.length; i++)⠀{',
    <br />,
    <br />,
    '⠀⠀// Finding the smallest number in the subarray',
    <br />,
    '⠀⠀let min = i;',
    <br />,
    <br />,
    '⠀⠀for(let j = i+1; j < arr.length; j++)⠀{',
    <br />,
    '⠀⠀⠀⠀if(arr[j] < arr[min])⠀ {',
    <br />,
    '⠀⠀⠀⠀⠀⠀ min=j; ',
    <br />,
    '⠀⠀⠀⠀}',
    <br />,
    '⠀⠀}',
    <br />,
    '⠀⠀if (min != i)⠀ {',
    <br />,
    '⠀⠀⠀⠀// Swapping the elements',
    <br />,
    '⠀⠀⠀⠀let tmp = arr[i];',
    <br />,
    '⠀⠀⠀⠀arr[i] = arr[min];',
    <br />,
    '⠀⠀⠀⠀arr[min] = tmp;',
    <br />,
    '⠀⠀⠀⠀}',
    <br />,
    '}',
    <br />,
    'Best-case: O(n^2) Average-case:	O(n^2) Worst-case:	O(n^2)',
  ];
  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}

export function InsertionSortInfo() {
  const string = [
    'for (let i = 1; i < arr.length; i++)⠀{',
    <br />,
    <br />,
    '⠀⠀// Choosing the first element in our unsorted subarray',
    <br />,
    '⠀⠀let current = arr[i];',
    <br />,
    <br />,
    '⠀⠀// The last element of our sorted subarray',
    <br />,
    '⠀⠀let j = i-1;',
    <br />,
    '⠀⠀while ((j > -1) && (current < arr[j]))⠀{',
    <br />,
    '⠀⠀⠀⠀arr[j+1] = arr[j];',
    <br />,
    '⠀⠀⠀⠀j--;',
    <br />,
    '⠀⠀}',
    <br />,
    '⠀⠀arr[j+1] = current;',
    <br />,
    '}',
    <br />,
    'Best-case: O(n) Average-case: O(n^2) Worst-case: O(n^2)',
  ];
  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}

export function QuickSortInfo() {
  const string = [
    'function partition(arr, start, end)⠀{',
    '⠀⠀// Taking the last element as the pivot',
    '⠀⠀const pivotValue = arr[end];',
    '⠀⠀let pivotIndex = start; ',
    '⠀⠀for (let i = start; i < end; i++)⠀{',
    '⠀⠀⠀⠀if (arr[i] < pivotValue) {',
    '⠀⠀⠀⠀// Swapping elements',
    '⠀⠀⠀⠀[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];',
    '⠀⠀⠀⠀// Moving to next element',
    '⠀⠀⠀⠀pivotIndex++;',
    '⠀⠀⠀⠀}',
    '⠀⠀}',
    '⠀⠀// Putting the pivot value in the middle',
    '⠀⠀[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] ',
    '⠀⠀return pivotIndex;',
    '};',
    'function quickSortRecursive(arr, start, end)⠀{',
    '⠀⠀if (start >= end)⠀{return;}',
    '⠀⠀// Returns pivotIndex',
    '⠀⠀let index = partition(arr, start, end);',
    '⠀⠀// Recursively apply logic to the left and right subarrays',
    '⠀⠀quickSort(arr, start, index - 1);',
    '⠀⠀quickSort(arr, index + 1, end);',
    '}',
    'Best-case: O(nlog(n)) Average: O(nlog(n)) Worst: O(n^2)',
  ];
  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}

export function MergeSortInfo() {
  const string = [
    'function merge(left, right)⠀{',
    '⠀⠀let arr = []',
    '⠀⠀// Break out of loop if any one of the array gets empty',
    '⠀⠀while (left.length && right.length)⠀{',
    '⠀⠀⠀⠀// Pick the smallest element of left and right sub arrays ',
    '⠀⠀⠀⠀if (left[0] < right[0])⠀{',
    '⠀⠀⠀⠀⠀⠀arr.push(left.shift())  ',
    '⠀⠀⠀⠀} else⠀{',
    '⠀⠀⠀⠀⠀⠀arr.push(right.shift()) ',
    '⠀⠀⠀⠀}',
    '⠀⠀}',
    '⠀⠀// Concatenating the leftover elements',
    '⠀⠀// (in case we didn`t go through the entire left or right array)',
    '⠀⠀return [ ...arr, ...left, ...right ]',
    '}',
    'function mergeSort(array)⠀{',
    '⠀⠀const half = array.length / 2',
    '⠀⠀// Base case or terminating case',
    '⠀⠀if(array.length < 2)⠀{',
    '⠀⠀⠀⠀return array ',
    '⠀⠀}',
    '⠀⠀const left = array.splice(0, half)',
    '⠀⠀return merge(mergeSort(left),mergeSort(array))',
    '}',
    'Best-case: O(nlog(n)) Average: O(nlog(n)) Worst: O(nlog(n))',
  ];
  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}
