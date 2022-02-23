function BubbleSort(array, speed, setTextIteration, setArray) {
  let newArray = array.slice();
  let iterationCount = 0;
  let i = 0;
  let j = 1;
  let outerLoopDelay = 1;
  let innerLoopDelay = 1;

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
      outerLoopDelay = 500;
      innerLoopDelay = 1;
      break;
    default:
      outerLoopDelay = 1;
      innerLoopDelay = 1;
  }

  outside();
  function outside() {
    setTimeout(() => {
      //inner loop
      j = 0;
      inside();
      function inside() {
        setTimeout(() => {
          setTextIteration(`Iteration: ${iterationCount}`);
          if (newArray[j] > newArray[j + 1]) {
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
          iterationCount += 1;
          j++;
          if (j < newArray.length) {
            inside();
          }
        }, innerLoopDelay);
      }
      //outer loop
      i++;
      if (i < newArray.length) {
        outside();
      }
    }, outerLoopDelay);
  }
  return newArray;
}
export default BubbleSort;
