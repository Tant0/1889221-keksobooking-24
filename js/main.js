/* eslint-disable no-console */
let getRandomNumberInc = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (0 <= min && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    console.log('Ошибка!');
    getRandomNumberInc = null;
  }
};
getRandomNumberInc(0, 9);

