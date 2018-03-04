// app/src/schema.js
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const resolvers = require('./resolvers') // Will be implemented at a later stage.

const typeDefs = `
    # Normal types
    type Artist {
      name: String!          # "!" denotes a required field
      description: String
      imgPath: String
    }

    type User {
      name: String!
      password: String!
    }

    # Input types
    input AddArtistInput {
      name: String
      description: String
    }

    input AddUserInput {
      name: String!
      password: String!
    }

    # This type specifies the entry points into our API.
    type Query {
      artists: [Artist]    # "[]" means this is a list of artists
      artist(name: String!): Artist
      users: [User]
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new artist to the list of artists
      addArtist(input: AddArtistInput!): Artist
      addUser(input: AddUserInput!): User
    }
    `
module.exports = makeExecutableSchema({ typeDefs, resolvers })
