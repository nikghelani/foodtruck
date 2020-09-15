var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trucksSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, require: false },
    category: { type: String, required: true },
    bizlocation: { type: String, required: false },
    streetlocation: { type: String, required: true },
    direction: { type: String, required: false }, //NE, NW, SE, SW
    city: { type: String, required: true}

}, { timestamps: true });

var Truck = mongoose.model('Truck', trucksSchema)