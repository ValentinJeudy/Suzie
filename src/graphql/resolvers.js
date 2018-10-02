const ArtistModel = require('../mongoose/artist.js')
const UserModel = require('../mongoose/user.js')
const EventModel = require('../mongoose/event.js')
const bcrypt = require('bcrypt')
const session = require('express-session')
const express = require('express')
const app = express()
const MongoDBStore = require('connect-mongodb-session')(session)
const options = require('../../config')

// const store = new MongoDBStore({
//   uri: options.dev.BDD_URL,
//   databaseName: 'suzie',
//   collection: 'sessions'
// })

module.exports = {
  Query: {
    artists: (obj, args, context) => {
      return ArtistModel.find()
    },
    events: (obj, args, context) => {
      return EventModel.find()
    },
    artist: (obj, args, context) => {
      const res = ArtistModel.findOne({ name: args.name })
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
        console.log('=============> BEFORE APP USE <================')

        console.log('=============> YOU ARE LOGGED <================')
        app.use(
          session({
            secret: 'hum pk pas lol',
            store: new MongoDBStore({
              uri: options.dev.BDD_URL,
              databaseName: 'suzie',
              collection: 'sessions'
            }),
            resave: false,
            saveUninitialized: true,
            cookie: {
              maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
            }
          })
        )
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
      const { name, description, imgPath } = args.input
      const newArtist = {
        name,
        description,
        imgPath
      }
      console.log('newArtist ===> ', require('util').inspect(newArtist, { colors: true, depth: 2 }))

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
      console.log('args.input ===> ', require('util').inspect(args.input, { colors: true, depth: 2 }))
      const { name, description, imgPath } = args.input.newArtist
      const newArtist = {}

      if (name.length > 0) { newArtist.name = name }
      if (description.length > 0) { newArtist.description = description }
      if (imgPath.length > 0) { newArtist.imgPath = imgPath }

      console.log('newArtist ===> ', newArtist)

      await ArtistModel.findOneAndUpdate(args.input.artist, newArtist)
      return newArtist
    }
  }
}
