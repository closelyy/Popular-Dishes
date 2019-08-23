var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/db', {useNewUrlParser: true});
const faker = require('faker');

var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function() {
  // we're connected!
});

var dishesSchema = new mongoose.Schema({
  businessId: {type: number, unique: true, dropDups: true, required: true},
  dishes: [{
    dishId: Number,
    imageSrc: String,
    price: Number,
    name: String,
    photosCount: Number,
    reviewsCount: Number}]
});

var Dish = mongoose.model('Dish', dishesSchema);



