const Mongoose = require('mongoose')

// create a schema
const ArtistSchema = Mongoose.Schema({
  name: String,
  description: String,
  imgPath: String
}, { collection: 'artists' })

module.exports = Mongoose.model('Artist', ArtistSchema)
