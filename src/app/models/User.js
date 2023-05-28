const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');


mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String , minlength: 1 , required: true},
    image: {type: String },
    email: {type: String , minlength: 1 , required: true},
    password : {type: String , unique: true  , maxlength: 30},
    account: {type: String, unique: true },
  }, {
    timestamps : true,
  }
  );
  
module.exports = mongoose.model('User', User);
