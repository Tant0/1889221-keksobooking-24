const getRandomNumberInc = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (0 <= min && min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    alert('Ошибка!');
    getRandomNumberInc = null;
  }
};
getRandomNumberInc(0, 9);
const getRandomFractionNumb = (min, max, count) => {
  if (min===max) {
    return min;
  }
  if (0 <= min && min <= max) {
    const num = Math.random() * (max - min + 1) + min;
    return num.toFixed(count);
  } else {
    alert('Ошибка!');
    // eslint-disable-next-line no-const-assign
    getRandomFractionNumb = null;
  }
};
getRandomFractionNumb(4, 7);
// Очень странная история. Объявлю еще переменную, потом снесу ее.
const newLetter = 0;

