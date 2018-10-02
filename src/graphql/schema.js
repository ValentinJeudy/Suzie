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

    type Event {
      title: String!
      description: String
      imgPath: String
    }

    type User {
      name: String!
      password: String!
    }

    type LogRes {
      res: String!
    }

    # Input types
    input AddArtistInput {
      name: String
      description: String
      imgPath: String
    }

    input AddUserInput {
      name: String!
      password: String!
    }

    input FindArtistInput {
      name: String!
    }

    input UpdateArtistInput {
      artist: FindArtistInput!
      newArtist: AddArtistInput!
    }

    input deleteArtist {
      name: String!
    }

    # This type specifies the entry points into our API.
    type Query {
      artists: [Artist]    # "[]" means this is a list of artists
      artist(name: String!): Artist
      events: [Event]
      event(title: String!): Event
      users: [User]
      logUser(name: String!, password: String!): LogRes
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new artist to the list of artists
      addArtist(input: AddArtistInput!): Artist
      addUser(input: AddUserInput!): User
      deleteArtist(input: FindArtistInput!): LogRes
      updateArtist(input: UpdateArtistInput!): Artist
    }
    `
module.exports = makeExecutableSchema({ typeDefs, resolvers })
