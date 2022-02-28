function MergeSort(array, speed, setTextIteration) {
  let iterationCount = 0;
  let newArray = array.slice();
  let n = newArray.length;
  let buffer = new Array(n);

  let size = 1;
  let leftStart = 0;

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
      outerLoopDelay = 650;
      innerLoopDelay = 1;
      break;
    default:
      outerLoopDelay = 1;
      innerLoopDelay = 1;
  }

  let test = sort(newArray);
  function sort(arr) {
    const half = arr.length / 2;

    if (arr.length <= 1) return arr;

    const left = arr.splice(0, half);
    const right = arr;
    return merge(sort(left), sort(right));
    function merge(left, right) {
      let sortedArr = [];
      while (left.length && right.length) {
        iterationCount++;
        setTextIteration(`Iteration: ${iterationCount}`);
        if (left[0] < right[0]) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
      return [...sortedArr, ...left, ...right];
    }
  }
  console.log(test);

  //   outside();
  //   function outside() {
  //     setTimeout(() => {
  //       //inner loop
  //       inside();
  //       function inside() {
  //         setTimeout(() => {
  //           setTextIteration(`Iteration: ${iterationCount}`);
  //           let left = leftStart;
  //           let right = Math.min(left + size, n);
  //           let leftLimit = right;
  //           let rightLimit = Math.min(right + size, n);

  //           merge(left, right, leftLimit, rightLimit, newArray, buffer);
  //           function merge(left, right, leftLimit, rightLimit, newArray, buffer) {
  //             let i = left;

  //             while (left < leftLimit && right < rightLimit) {
  //               if (newArray[left] <= newArray[right]) {
  //                 buffer[i++] = newArray[left++];
  //               } else {
  //                 buffer[i++] = newArray[right++];
  //               }
  //             }
  //             while (left < leftLimit) {
  //               buffer[i++] = newArray[left++];
  //             }
  //             while (right < rightLimit) {
  //               buffer[i++] = newArray[right++];
  //             }
  //           }

  //           //looping element
  //           iterationCount += 1;
  //           leftStart += 2 * size;
  //           if (leftStart < n) {
  //             console.log(newArray);
  //             console.log(buffer);
  //             inside();
  //           } else {
  //             //this technically in the inside loop
  //             //but this works in the "outside" loop
  //             let temp = newArray;
  //             newArray = buffer;
  //             buffer = temp;
  //             size *= 2;
  //           }
  //         }, innerLoopDelay);
  //       }
  //       //outer loop

  //       if (size < n) {
  //         outside();
  //       }
  //     }, outerLoopDelay);
  //   }
  return newArray;
}
export default MergeSort;
