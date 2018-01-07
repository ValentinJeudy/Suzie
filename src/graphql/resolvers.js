// app/src/resolvers.js
const artists = [{
  id: 1,
  name: 'soccer'
}, {
  id: 2,
  name: 'baseball'
}]

let nextId = 3

module.exports = {
  Query: {
    artists: () => {
      return artists
    },
    artist: (root, { id }) => {
      return artists.find(artist => artist.id === id)
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
