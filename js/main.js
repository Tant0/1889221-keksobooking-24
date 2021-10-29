/* eslint-disable id-length */
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const avaArray = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user08.png', 'img/avatars/user10.png'];
const avaRand = Math.floor(Math.random() * avaArray.length);

const photoArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const photoRand = Math.floor(Math.random() * photoArray.length);

const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const featRand = Math.floor(Math.random() * featuresArray.length);

const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const typeRand = Math.floor(Math.random() * typeArray.length);

const inArray = ['12:00', '13:00', '14:00'];
const inRand = Math.floor(Math.random() * inArray.length);

const outArray = ['12:00', '13:00', '14:00'];
const outRand = Math.floor(Math.random() * outArray.length);

const newAdv0 = {
  autor: {
    avatar: avaArray[avaRand],
  },
  offer: {
    title: 'string',
    address: `${this.location.lat}, ${this.location.lng}`,
    price: getRandomPositiveInteger(1, 100),
    type: typeArray[typeRand],
    rooms: getRandomPositiveInteger(1, 100),
    guests: getRandomPositiveInteger(1, 100),
    checkin: inArray[inRand],
    checkout: outArray[outRand],
    features: featuresArray[featRand],
    description: 'string',
    photos: photoArray[photoRand],
  },
  location: {
    lat: getRandomPositiveFloat(35.65000, 35.70000),
    lng: getRandomPositiveFloat(139.70000, 139.80000),
  },
};
// eslint-disable-next-line no-console
console.log(newAdv0);
