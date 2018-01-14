const mongoose = require('mongoose')
const Schema = mongoose.Schema
// create a schema
const artist = new Schema({
  _id: Number,
  name: String,
  description: String
}, { collection: 'artists' })

// we need to create a model using it
const Artist = mongoose.model('ToDo', artist)

module.exports = Artist
