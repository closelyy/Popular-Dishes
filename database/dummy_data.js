const faker = require('faker');

const priceGenerator = (min, max) => {
  const res = Math.random() * (max - min) + min;
  return res.toFixed(2); 
};
const randomCount = (min, max) => {
  const res = Math.random() * (max - min) + min;
  return Math.floor(res); 
};

const allData = () => {
  const allDataSet = [];
  for (let i = 0; i < 100; i += 1) {
    const oneDataSet = {
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
