const ArtistModel = require('../mongoose/artist.js')
const UserModel = require('../mongoose/user.js')
const bcrypt = require('bcrypt')

module.exports = {
  Query: {
    artists: (obj, args, context) => {
      return ArtistModel.find()
    },
    artist: (obj, args, context) => {
      const res = ArtistModel.findOne({ name: args.name })
      console.log(' ===> ', require('util').inspect(res, { colors: true, depth: 2 }))
      return res
    },
    users: (obj, args, context) => {
      return UserModel.find()
    },
    logUser: async (obj, args, context) => {
      const userBdd = await UserModel.findOne({ name: args.name })
      const response = {}

      if (!userBdd) {
        response.res = 'bad user'
        return response
      }

      const hashedPassword = userBdd.password
      const rightPsw = bcrypt.compareSync(args.password, hashedPassword)

      if (rightPsw) {
        response.res = 'logged'
        return response
      } else {
        response.res = 'bad password'
        return response
      }
    }
  },
  Mutation: {
    addUser: (obj, args) => {
      console.log('args.input.password ===> ', args.input)

      bcrypt.hash(args.input.password, 10, (err, hash) => {
        if (err) {
          return `Error during the hashing of your password : ${err}`
        }
        const newUser = { name: args.input.name, password: hash }
        return UserModel.create(newUser)
      })
    },
    addArtist: (obj, args) => {
      const newArtist = { name: args.input.name, description: args.input.description }
      return ArtistModel.create(newArtist)
    },
    deleteArtist: (obj, args) => {
      const name = args.input.name

      ArtistModel.findOneAndRemove({ name }, (err, doc) => {
        if (err) throw err
      })
      return { res: 'removed' }
    },
    updateArtist: async (obj, args) => {
      const artist = { name: args.input.artist.name }
      const newName = args.input.newArtist.name
      const newDesc = args.input.newArtist.description
      const newArtist = {}

      if (newName.length > 0) {
        newArtist['name'] = newName
      }
      if (newDesc.length > 0) {
        newArtist['description'] = newDesc
      }

      await ArtistModel.findOneAndUpdate(artist, newArtist)
      return newArtist
    }
  }
}
