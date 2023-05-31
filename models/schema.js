const { Schema } = require("mongoose");

const schema = new Schema({
  dishName: String,
  imageUrl: String,
  type: String,
  price: Number,
});

module.exports = { schema };
