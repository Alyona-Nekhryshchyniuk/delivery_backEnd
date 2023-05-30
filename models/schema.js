const { Schema } = require("mongoose");

const schema = new Schema({
  dishName: String,
  imageUrl: String,
  type: String,
});

module.exports = { schema };
