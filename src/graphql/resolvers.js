// app/src/resolvers.js
// const artists = [{
//   id: 1,
//   name: 'soccer'
// }, {
//   id: 2,
//   name: 'baseball'
// }]

// MongoClient.connect(MONGO_URL, (err, database) => {
//   if (err) {
//     console.error(err)
//   }
//   const suzieBdd = database.db('suzie')
//   const artists = suzieBdd.collection('artists')
// })

// Import the mongoose module
const mongoose = require('mongoose')
const Artist = require('../mongoose/artist.js')

// Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/suzie'
mongoose.connect(mongoDB)

// Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise

// Get the default connection
var db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const test = Artist.find({ 'name': 'artist1' })

console.log('test ===> ', require('util').inspect(test, { colors: true, depth: 1 }))

let nextId = 3

module.exports = {
  Query: {
    artists: async (root, data, { mongo: { Artists }}) => {
      return await Artists.find({}).toArray()
    },
    artist: (root, data, { mongo: { Artists }}) => {
      return Artists.find(artist => artist.id === id)
    }
  },
  Mutation: {
    addArtist: (root, args) => {
      const newArtist = { id: nextId++, name: args.name }
      artists.push(newArtist)
      return newArtist
    }
  }
}
