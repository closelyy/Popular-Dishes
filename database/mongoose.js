const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp', {useNewUrlParser: true});
const fakeData = require('./dummy_data.js');

const yelp = mongoose.connection;
yelp.on('error', console.log.bind(console, 'connection error'));
yelp.once('open', () => {
  console.log('mongoose connected!');
});

const dishesSchema = new mongoose.Schema({
  businessId: Number,
  dishes: [{
    dishId: Number,
    imageSrc: String,
    price: Number,
    name: String,
    photosCount: Number,
    reviewsCount: Number}]
});

const Dish = mongoose.model('Dish', dishesSchema);

// allData from dummy_data.js
const docArr = fakeData.allData();

Dish.insertMany(docArr, (err, docs) => {
  // saves the input array to DB
});

module.exports = Dish;
