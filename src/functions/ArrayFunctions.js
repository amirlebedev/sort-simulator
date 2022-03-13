export function generateRandomInt(min = 1, max = 70) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function shuffle(array) {
  // Fisher-Yates Shuffle
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function generateArray(ui, arrayLength) {
  let newArray = [];
  if (ui.random == 'ON') {
    for (let i = 1; i <= arrayLength; i++) {
      let num = generateRandomInt();
      if (newArray.includes(num)) {
        i--;
      } else {
        newArray.push(num);
      }
    }
  } else {
    for (let i = 1; i <= arrayLength; i++) {
      newArray.push(i);
      newArray = shuffle(newArray);
    }
  }
  return newArray;
}
