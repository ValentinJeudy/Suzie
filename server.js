const express = require('express')
const app = express()
const cors = require('cors')
const Mongoose = require('mongoose')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const bodyParser = require('body-parser')
const schema = require('./src/graphql/schema')
const options = require('./config')
const multer = require('multer')
const upload = multer()
const uploadService = require('./src/assets/lib/uploadService')

// const session = require('express-session')
// const MongoDBStore = require('connect-mongodb-session')(session)

Mongoose.connect(options.dev.BDD_URL, {}, () => {
  // app.use(session({
  //   secret: 'hum pk pas lol',
  //   store: new MongoDBStore({
  //     // uri: 'mongodb://localhost:27017',
  //     uri: options.dev.BDD_URL,
  //     databaseName: 'suzie',
  //     collection: 'sessions'
  //   }),
  //   resave: false,
  //   saveUninitialized: true,
  //   cookie: {
  //     maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  //   }
  // }))

  // app.use(function (req, res, next) {
  //   console.log('=============> IN MIDDLEWARE <================')
  //   console.log('req ===> ', require('util').inspect(req, { colors: true, depth: 0 }))

  //   next()
  // })

  // Restrict the client-origin for security reasons.
  app.use('*', cors({ origin: 'http://localhost:8080' }))

  app.use(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      // connect: { mongo },
      schema
    })
  )

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  )

  app.listen(options.dev.SERVER_PORT, () => {
    console.log(`GraphQL server is now running on http://localhost:${options.dev.SERVER_PORT}`)
  })

  app.use(bodyParser.json())

  app.post('/upload', upload.single('image'), (req, res) => uploadService(req, res))
})
