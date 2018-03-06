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
    logUser: async (obj, args, context) => {
      const userBdd = await UserModel.findOne({ name: args.name })
      const hashedPassword = userBdd.password

      console.log('hashedPassword ===> ', hashedPassword)
      bcrypt.compare(args.password, hashedPassword, (err, res) => {
        if (err) {
          return `Error during comparing passwords : ${err}`
        }
        return res
      })
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
