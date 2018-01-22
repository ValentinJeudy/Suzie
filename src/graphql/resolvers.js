const ArtistModel = require('../mongoose/artist.js')

module.exports = {
  Query: {
    artists: async (obj, args, context) => {
      return await ArtistModel.find()
    },
    artist: (obj, args, context) => {
      return ArtistModel.findOne({ name: args.name })
    }
  },
  Mutation: {
    addArtist: (obj, args) => {
      const newArtist = { name: args.name, description: args.description }
      return ArtistModel.create(newArtist)
    }
  }
}
