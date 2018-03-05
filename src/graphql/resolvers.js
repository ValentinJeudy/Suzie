const ArtistModel = require('../mongoose/artist.js')
const UserModel = require('../mongoose/user.js')
const bcrypt = require('bcrypt')

module.exports = {
  Query: {
    artists: async (obj, args, context) => {
      return await ArtistModel.find()
    },
    artist: (obj, args, context) => {
      return ArtistModel.findOne({ name: args.name })
    },
    users: (obj, args, context) => {
      return UserModel.find()
    },
    user: (obj, args, context) => {
      return UserModel.findOne({ name: args.name })
    }
  },
  Mutation: {
    addArtist: (obj, args) => {
      const newArtist = { name: args.input.name, description: args.input.description }
      return ArtistModel.create(newArtist)
    },
    addUser: (obj, args) => {
      console.log('args.input.password ===> ', args.input)

      bcrypt.hash(args.input.password, 10, (err, hash) => {
        if (err) {
          return `Error during the hashing of your password : ${err}`
        }
        const newUser = { name: args.input.name, password: hash }
        return UserModel.create(newUser)
      })
    }
  }
}
