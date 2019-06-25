/**Importing mongoose */
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var restaurantSchema = new Schema({
    id: { type: String },
    name: { type: String, trim: true, required: true },
    restaurant: { type: String },
    availableMeals: [{ type: String }],
})

//Export restaurant module
module.exports = mongoose.model('restaurant', restaurantSchema)