function SelectionSort(array, speed, setTextIteration) {
  let newArray = array.slice();
  let iterationCount = 0;
  let i = 0;
  let j = 0;
  let min = 0;
  let outerLoopDelay = 1;
  let innerLoopDelay = 1;
  let n = newArray.length;
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
      min = i;
      //inner loop
      j = i + 1;
      inside();
      function inside() {
        setTimeout(() => {
          setTextIteration(`Iteration: ${iterationCount}`);
          if (newArray[j] < newArray[min]) {
            min = j;
          }
          //looping element
          iterationCount += 1;
          j++;
          if (j < n) {
            document.getElementById(newArray[j]).style.backgroundColor =
              'white';
            inside();
          } else {
            //this technically in the inside loop
            //but this works in the "outside" loop
            if (min != i) {
              document.getElementById(newArray[i]).style.backgroundColor =
                'red';

              let tmp = newArray[i];
              newArray[i] = newArray[min];
              newArray[min] = tmp;
            }
            i++;
          }
        }, innerLoopDelay);
      }
      //outer loop

      if (i < n) {
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
export default SelectionSort;
