const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Blog = new Schema({
    description: {type: String },
    image: {type: String},
    title: {type: String},
  });

module.exports = mongoose.model('Blog', Blog);
