function BubbleSort(array, speed, setTextIteration) {
  let newArray = array.slice();
  let iterationCount = 0;
  let i = 0;
  let j = 1;
  let outerLoopDelay = 1;
  let innerLoopDelay = 1;
  let p = 0;

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

  outside();
  function outside() {
    setTimeout(() => {
      //inner loop
      j = 0;
      inside();
      function inside() {
        setTimeout(() => {
          document.getElementById(newArray[j]).style.backgroundColor = 'red';
          setTextIteration(`Iteration: ${iterationCount}`);
          if (newArray[j] > newArray[j + 1]) {
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
          iterationCount += 1;
          document.getElementById(newArray[j]).style.backgroundColor = 'white';
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
      } else {
        colorGreen();
        function colorGreen() {
          setTimeout(() => {
            document.getElementById(newArray[p]).style.backgroundColor = 'lime';
            if (p < newArray.length - 1) {
              p++;
              colorGreen();
            }
          }, 20);
        }
      }
    }, outerLoopDelay);
  }
  return newArray;
}
export default BubbleSort;
