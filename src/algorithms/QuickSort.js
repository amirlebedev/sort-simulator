function QuickSort(array, speed, setTextIteration) {
  let arr = array.slice();
  let n = arr.length;
  let iterationCount = 0;
  // let i = 0;
  let stack = [];

  stack.push(0);
  stack.push(n - 1);

  // switch (speed) {
  //   case 1:
  //     outerLoopDelay = 3500;
  //     innerLoopDelay = 50;
  //     break;
  //   case 2:
  //     outerLoopDelay = 1400;
  //     innerLoopDelay = 20;
  //     break;
  //   case 10:
  //     outerLoopDelay = 650;
  //     innerLoopDelay = 1;
  //     break;
  //   default:
  //     outerLoopDelay = 1;
  //     innerLoopDelay = 1;
  // }

  function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    let i = start;

    loop();
    function loop() {
      setTimeout(() => {
        console.log('inside');
        iterationCount++;
        setTextIteration(`Iteration: ${iterationCount}`);
        if (arr[i] < pivotValue) {
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          pivotIndex++;
        }
        i++;
        if (i < end) {
          loop();
        }
      }, 20);
    }
    [arr[(pivotIndex, arr[end])]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
  }

  outside(arr, 0, n - 1);
  function outside(arr, start, end) {
    setTimeout(() => {
      console.log('outside');

      let index = partition(arr, start, end);
      if (start <= end) {
        outside(arr, start, index - 1);
        outside(arr, index + 1, end);
        console.log(arr);
      }
    }, 2000);
  }

  return arr;
}
export default QuickSort;

// outside();
// function outside() {
//   setTimeout(() => {
//     min = i;
//     //inner loop
//     j = i + 1;
//     inside();
//     function inside() {
//       setTimeout(() => {
//         setTextIteration(`Iteration: ${iterationCount}`);
//         if (newArray[j] < newArray[min]) {
//           min = j;
//         }
//         //looping element
//         iterationCount += 1;
//         j++;

//         if (j < n) {
//           inside();
//         } else {
//           //this technically in the inside loop
//           //but this works in the "outside" loop
//           if (min != i) {
//             console.log('INSIDE');
//             let tmp = newArray[i];
//             newArray[i] = newArray[min];
//             newArray[min] = tmp;
//           }
//           i++;
//         }
//       }, innerLoopDelay);
//     }
//     //outer loop

//     if (i < n) {
//       outside();
//     }
//   }, outerLoopDelay);
// }
// return newArray;
