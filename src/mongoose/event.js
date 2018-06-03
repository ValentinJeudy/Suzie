const Mongoose = require('mongoose')

// create a schema
const EventSchema = Mongoose.Schema({
  title: String,
  description: String,
  imgPath: String
}, { collection: 'events' })

module.exports = Mongoose.model('Event', EventSchema)
