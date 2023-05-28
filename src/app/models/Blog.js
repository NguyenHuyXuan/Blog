const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');


mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Blog = new Schema({
    description: {type: String , minlength: 1 , required: true},
    image: {type: String },
    title: {type: String , minlength: 1 , required: true},
    slug : {type: String ,  slug: 'title' , unique: true},
  }, {
    timestamps : true,
  }
  );

module.exports = mongoose.model('Blog', Blog);
