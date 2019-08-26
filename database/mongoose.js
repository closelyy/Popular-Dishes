var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp', {useNewUrlParser: true});
var fakeData = require('./dummy_data.js');

var yelp = mongoose.connection;
yelp.on('error', console.log.bind(console, 'connection error'));
yelp.once('open', function() {
  console.log('mongoose connected!');
});

var dishesSchema = new mongoose.Schema({
  businessId: Number,
  dishes: [{
    dishId: Number,
    imageSrc: String,
    price: Number,
    name: String,
    photosCount: Number,
    reviewsCount: Number}]
});

var Dish = mongoose.model('Dish', dishesSchema);

// allData from dummy_data.js
var docArr = fakeData.allData();
console.log(docArr);

Dish.insertMany(docArr, function(error, docs) {});
var i = 1;
docArr.forEach((eachDish) => {
  dish = new Dish(eachDish);  
  dish.save((error) => {
    console.log('All dishes have been saved', i++);
    if (error) {
      console.error(error);
    }
  });
}
);

module.exports = Dish;
