export function BubbleSortInfo() {
  const string = [
    'for(var i = 0; i < arr.length; i++)⠀{',
    '⠀⠀// Last i elements are already in place  ',
    '⠀⠀for(var j = 0; j < ( arr.length - i -1 ); j++)⠀{',
    '⠀⠀⠀⠀// Checking if the item at present iteration ',
    '⠀⠀⠀⠀// is greater than the next iteration',
    '⠀⠀⠀⠀if(arr[j] > arr[j+1])⠀{',
    '⠀⠀⠀⠀⠀⠀// If the condition is true then swap them',
    '⠀⠀⠀⠀⠀⠀var temp = arr[j]',
    '⠀⠀⠀⠀⠀⠀arr[j] = arr[j + 1]',
    '⠀⠀⠀⠀⠀⠀arr[j+1] = temp',
    '⠀⠀}',
    '}',
    'Best-case: O(n) Average-case:	O(n^2) Worst-case:	O(n^2)',
  ];
  return (
    <>
      <p className="info-text">
        {string[0]} <br /> <br />
        {string[1]}
        <br />
        {string[2]} <br /> <br />
        {string[3]} <br />
        {string[4]} <br />
        {string[5]}
        <br />
        <br />
        {string[6]}
        <br />
        {string[7]}
        <br />
        {string[8]}
        <br />
        {string[9]}
        <br />
        {string[10]} <br />
        {string[11]} <br />
        {string[12]}
        <br />
      </p>
    </>
  );
}

export function SelectionSortInfo() {
  const string = [
    'for(let i = 0; i < arr.length; i++)⠀{',
    '⠀⠀// Finding the smallest number in the subarray',
    '⠀⠀let min = i;',
    '⠀⠀for(let j = i+1; j < arr.length; j++)⠀{',
    '⠀⠀⠀⠀if(arr[j] < arr[min])⠀ {',
    '⠀⠀⠀⠀⠀⠀ min=j; ',
    '⠀⠀⠀⠀}',
    '⠀⠀}',
    '⠀⠀if (min != i)⠀ {',
    '⠀⠀⠀⠀// Swapping the elements',
    '⠀⠀⠀⠀let tmp = arr[i];',
    '⠀⠀⠀⠀arr[i] = arr[min];',
    '⠀⠀⠀⠀arr[min] = tmp;',
    '⠀⠀⠀⠀}',
    '}',
    'Best-case: O(n^2) Average-case:	O(n^2) Worst-case:	O(n^2)',
  ];
  return (
    <>
      <p className="info-text">
        {string[0]} <br /> <br />
        {string[1]}
        <br />
        {string[2]} <br /> <br />
        {string[3]} <br />
        {string[4]} <br />
        {string[5]}
        <br />
        {string[6]}
        <br />
        {string[7]}
        <br />
        {string[8]}
        <br />
        {string[9]}
        <br />
        {string[10]} <br />
        {string[11]} <br />
        {string[12]}
        <br />
        {string[13]}
        <br />
        {string[14]}
        <br />
        {string[15]}
        <br />
        {string[16]}
        <br />
      </p>
    </>
  );
}

export function InsertionSortInfo() {
  const string = [
    'for (let i = 1; i < arr.length; i++)⠀{',
    '⠀⠀// Choosing the first element in our unsorted subarray',
    '⠀⠀let current = arr[i];',
    '⠀⠀// The last element of our sorted subarray',
    '⠀⠀let j = i-1;',
    '⠀⠀while ((j > -1) && (current < arr[j]))⠀{',
    '⠀⠀⠀⠀arr[j+1] = arr[j];',
    '⠀⠀⠀⠀j--;',
    '⠀⠀}',
    '⠀⠀arr[j+1] = current;',
    '}',
    'Best-case: O(n) Average-case: O(n^2) Worst-case: O(n^2)',
  ];
  return (
    <>
      <p className="info-text">
        {string[0]} <br /> <br />
        {string[1]}
        <br />
        {string[2]} <br /> <br />
        {string[3]} <br />
        {string[4]} <br />
        {string[5]}
        <br />
        {string[6]}
        <br />
        {string[7]}
        <br />
        {string[8]}
        <br />
        {string[9]}
        <br />
        {string[10]} <br />
        {string[11]} <br />
        {string[12]}
        <br />
      </p>
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
      <p className="info-text">
        {string[0]} <br /> <br />
        {string[1]}
        <br />
        {string[2]} <br /> <br />
        {string[3]} <br />
        {string[4]} <br />
        {string[5]}
        <br />
        <br />
        {string[6]} <br />
        {string[7]}
        <br />
        {string[8]} <br />
        {string[9]}
        <br />
        {string[10]} <br />
        {string[11]} <br />
        {string[12]}
        <br />
        {string[13]}
        <br />
        {string[14]}
        <br />
        {string[15]}
        <br /> <br />
        {string[16]}
        <br />
        {string[17]} <br /> <br />
        {string[18]} <br />
        {string[19]} <br /> <br />
        {string[20]}
        <br />
        {string[21]}
        <br />
        {string[22]}
        <br />
        {string[23]}
        <br />
        {string[24]}
        <br />
      </p>
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
      <p className="info-text">
        {string[0]} <br />
        {string[1]}
        <br />
        <br />
        {string[2]} <br />
        {string[3]} <br />
        {string[4]} <br />
        {string[5]}
        <br />
        {string[6]} <br />
        {string[7]}
        <br />
        {string[8]} <br />
        {string[9]}
        <br />
        {string[10]} <br />
        {string[11]} <br />
        {string[12]}
        <br />
        {string[13]}
        <br />
        {string[14]}
        <br /> <br />
        {string[15]}
        <br />
        {string[16]}
        <br />
        {string[17]} <br />
        {string[18]} <br />
        {string[19]} <br />
        {string[20]}
        <br />
        {string[21]}
        <br />
        {string[22]}
        <br />
        {string[23]}
        <br />
        {string[24]}
        <br />
      </p>
    </>
  );
}
