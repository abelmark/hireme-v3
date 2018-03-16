const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  login: String,
  github_id: String,
  html_url: String,
  blog: String,
  location: String,
  bio: String
})

mongoose.model('users', userSchema);