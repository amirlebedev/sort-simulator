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
    'Best-case: O(n) Average-case:	O(n^2) Average-case:	O(n^2)',
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
    'for(let i = 0; i < arr.length; i++) {',
    '// Finding the smallest number in the subarray',
    'let min = arr[i];',
    'for(let j = i+1; j < arr.length; j++){',
    'if(arr[j] < arr[min]) {',
    ' min=arr[j]; ',
    '}',
    '}',
    'if (min != arr[i]) {',
    '// Swapping the elements',
    'let tmp = arr[i];',
    'arr[i] = arr[min];',
    'arr[min] = tmp;',
    '}',
    '}',
    'Best-case: O(n) Average-case:	O(n^2) Average-case:	O(n^2)',
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

export function InsertionSortInfo() {
  const string = [
    'for (let i = 1; i < n; i++) {',
    '// Choosing the first element in our unsorted subarray',
    'let current = inputArr[i];',
    '// The last element of our sorted subarray',
    ' let j = i-1;',
    ' while ((j > -1) && (current < inputArr[j])) {',
    'inputArr[j+1] = inputArr[j];',
    'j--;',
    '}',
    'inputArr[j+1] = current;',
    '}',
    'Best-case: O(n) Average-case:	O(n^2) Average-case:	O(n^2)',
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

export function QuickSortInfo() {
  const string = [
    'for (let i = 1; i < n; i++) {',
    '// Choosing the first element in our unsorted subarray',
    'let current = inputArr[i];',
    '// The last element of our sorted subarray',
    ' let j = i-1;',
    ' while ((j > -1) && (current < inputArr[j])) {',
    'inputArr[j+1] = inputArr[j];',
    'j--;',
    '}',
    'inputArr[j+1] = current;',
    '}',
    'Best-case: O(n) Average-case:	O(n^2) Average-case:	O(n^2)',
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

export function MergeSortInfo() {
  const string = `for(var i = 0; i < arr.length; i++){
     
   // Last i elements are already in place  
   for(var j = 0; j < ( arr.length - i -1 ); j++){
       
     // Checking if the item at present iteration 
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
         
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }`;
  return (
    <>
      <p className="info-text">{string}</p>
    </>
  );
}
