const COUNT = 10;

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

const latRan = getRandomPositiveFloat(35.65000, 35.70000);
const lngRan = getRandomPositiveFloat(139.70000, 139.80000);
const adressLoc = `${latRan  }; ${  lngRan}`;

const avaArray = ['img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user08.png',
  'img/avatars/user10.png',
];
const avaRand = Math.floor(Math.random() * avaArray.length);

const photoArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const photoRand = Math.floor(Math.random() * photoArray.length);

const featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// eslint-disable-next-line no-shadow
function getArray(featuresArray) {
  const maxLength = featuresArray.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];
  for (let i = 0; i < lengthOfArray; i++) {
    const indexOfEl = getRandomPositiveInteger(0, 5);
    const el = featuresArray[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

const typeArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const typeRand = Math.floor(Math.random() * typeArray.length);

const inArray = ['12:00', '13:00', '14:00'];
const inRand = Math.floor(Math.random() * inArray.length);

const outArray = ['12:00', '13:00', '14:00'];
const outRand = Math.floor(Math.random() * outArray.length);
// eslint-disable-next-line no-unused-vars
const newAdv = (el, i) => ({
  autor: {
    avatar: avaArray[avaRand],
  },
  offer: {
    title: 'Сдам помещение',
    address: adressLoc,
    price: getRandomPositiveInteger(1, 10000),
    type: typeArray[typeRand],
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 50),
    checkin: inArray[inRand],
    checkout: outArray[outRand],
    features: getArray(featuresArray),
    description: 'Прекрасное место, лучше за эти деньги не найдете',
    photos: photoArray[photoRand],
  },
  location: {
    lat: latRan,
    lng: lngRan,
  },
});

const newAdvCreate = Array.from({
  length: COUNT,
}, newAdv);
newAdvCreate();
