function InsertionSort(array, speed, setTextIteration) {
  let newArray = array.slice();
  let iterationCount = 0;
  let i = 1;
  let j = 0;
  let current;
  let outerLoopDelay = 1;
  let innerLoopDelay = 1;
  let n = newArray.length;

  current = newArray[i];
  j = i - 1;

  switch (speed) {
    case 1:
      outerLoopDelay = 3500;
      innerLoopDelay = 50;
      break;
    case 2:
      outerLoopDelay = 1400;
      innerLoopDelay = 20;
      break;
    case 10:
      outerLoopDelay = 650;
      innerLoopDelay = 1;
      break;
    default:
      outerLoopDelay = 1;
      innerLoopDelay = 1;
  }
  // THIS IS THE CHANGE
  outside();
  function outside() {
    setTimeout(() => {
      inside();
      function inside() {
        setTimeout(() => {
          setTextIteration(`Iteration: ${iterationCount}`);
          if (j > -1 && current < newArray[j]) {
            newArray[j + 1] = newArray[j];
            j--;
          }
          //looping element
          iterationCount += 1;

          if (j > -1 && current < newArray[j]) {
            inside();
          } else {
            //this technically in the inside loop
            //but this works in the "outside" loop
            i++;
            newArray[j + 1] = current;
          }
        }, innerLoopDelay);
      }
      //outer loop
      current = newArray[i];
      j = i - 1;
      if (i < n) {
        outside();
      }
    }, outerLoopDelay);
  }
  return newArray;
}
export default InsertionSort;
