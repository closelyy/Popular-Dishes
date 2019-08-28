const fakeData = require('../database/dummy_data.js');

const allData = fakeData.allData();

test('allData should return an array of objects for 100 businesses', () => {
  expect(allData.length).toBe(100);
});

test('Each business should have an ID number between 1 and 100', () => {
  const businessId = [];
  allData.forEach((id) => {
    businessId.push(id.businessId);
  });
  for (let i = 0; i < businessId.length; i++) {
    expect(businessId[i]).toBeGreaterThanOrEqual(1);
    expect(businessId[i]).toBeLessThanOrEqual(100);
  }
});

test('Each business should have an array of five dishes', () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i].dishes.length).toBe(5);
  }
});

test('Each dish object should have these keys: dishId, imageSrc, price, photosCount, reviewsCount', () => {
  for (let i = 0; i < allData.length; i++) {
    for (let j = 0; j < 5; j++) {
      const obj = allData[i].dishes[j];
      for (let key in obj) {
        expect(obj).toHaveProperty('dishId');
        expect(obj).toHaveProperty('imageSrc');
        expect(obj).toHaveProperty('price');
        expect(obj).toHaveProperty('photosCount');
        expect(obj).toHaveProperty('reviewsCount');
      }
    }
  }
});

