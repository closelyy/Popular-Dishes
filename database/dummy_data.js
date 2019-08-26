const faker = require('faker');

var priceGenerator = (min, max) => {
  var res = Math.random() * (max - min) + min;
  return res.toFixed(2); 
};
var randomCount = (min, max) => {
  var res = Math.random() * (max - min) + min;
  return Math.floor(res); 
};

var allData = function () {
  var allDataSet = [];
  for (var i = 0; i < 100; i++) {
    var oneDataSet = {
      businessId: i + 1,
      dishes: [{
        dishId: 1,
        imageSrc: faker.image.imageUrl(null, null, 'food', true, false),
        price: priceGenerator(10, 40),
        name: faker.lorem.word(),
        photosCount: randomCount(200, 5000),
        reviewsCount: randomCount(200, 5000)},
      {
        dishId: 2,
        imageSrc: faker.image.imageUrl(null, null, 'food', true, false),
        price: priceGenerator(10, 40),
        name: faker.lorem.word(),
        photosCount: randomCount(200, 5000),
        reviewsCount: randomCount(200, 5000)},
      {
        dishId: 3,
        imageSrc: faker.image.imageUrl(null, null, 'food', true, false),
        price: priceGenerator(10, 40),
        name: faker.lorem.word(),
        photosCount: randomCount(200, 5000),
        reviewsCount: randomCount(200, 5000)},
      {
        dishId: 4,
        imageSrc: faker.image.imageUrl(null, null, 'food', true, false),
        price: priceGenerator(10, 40),
        name: faker.lorem.word(),
        photosCount: randomCount(200, 5000),
        reviewsCount: randomCount(200, 5000)},
      {
        dishId: 5,
        imageSrc: faker.image.imageUrl(null, null, 'food', true, false),
        price: priceGenerator(10, 40),
        name: faker.lorem.word(),
        photosCount: randomCount(200, 5000),
        reviewsCount: randomCount(200, 5000)}
      ]
    };
    allDataSet.push(oneDataSet);
  }
  return allDataSet;
};

module.exports.allData = allData;
