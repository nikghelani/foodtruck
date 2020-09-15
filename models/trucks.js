var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trucksSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String },
    category: { type: String, required: true },
    bizlocation: { type: String },
    streetlocation: { type: String, required: true },
    direction: { type: String }, //NE, NW, SE, SW
  },
  { 
    timestamps: true 
  });

var Truck = mongoose.model('Truck', trucksSchema)

module.exports = Truck;