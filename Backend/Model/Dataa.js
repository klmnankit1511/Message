const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  date: String,
  type: String,
  name: String,
  insert: String,
});

module.exports = new mongoose.model("Datas", DataSchema);