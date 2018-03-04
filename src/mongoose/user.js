var Mongoose = require('mongoose')

// create a schema
const UserSchema = Mongoose.Schema({
  name: String,
  password: String
}, { collection: 'users' })

module.exports = Mongoose.model('User', UserSchema)
