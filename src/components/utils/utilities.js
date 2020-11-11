export default (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const verificaciones = [
  { label: '4 + 3', value: '7' },
  { label: '9 + 5', value: '14' },
  { label: '8 x 2', value: '16' },
  { label: '10 - 7 ', value: '3' },
  { label: '11 + 4', value: '15' },
  { label: '7 x 3', value: '21' },
  { label: '7 + 9', value: '16' },
  { label: '5 + 4', value: '9' },
  { label: '9 + 3', value: '12' },
  { label: '13 - 5', value: '8' },
  { label: '15 x 2', value: '30' },
  { label: '4 x 3', value: '12' },
  { label: '6 + 6', value: '12' },
  { label: '7 + 7', value: '14' },
  { label: '9 + 9', value: '18' },
];
