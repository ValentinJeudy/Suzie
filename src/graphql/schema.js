// app/src/schema.js
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const resolvers = require('./resolvers') // Will be implemented at a later stage.

const typeDefs = `
    type Artist {
      _id: ID!                # "!" denotes a required field
      name: String
      description: String
    }

    # This type specifies the entry points into our API.
    type Query {
      artists: [Artist]    # "[]" means this is a list of artists
      artist(name: String!): Artist
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new artist to the list of artists
      addArtist(name: String!, description: String!): Artist
    }
    `
module.exports = makeExecutableSchema({ typeDefs, resolvers })
