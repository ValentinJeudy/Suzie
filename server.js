const express = require('express')
const server = express()
const cors = require('cors')
const Mongoose = require('mongoose')
const {
  graphqlExpress,
  graphiqlExpress
} = require('graphql-server-express')
const bodyParser = require('body-parser')
const schema = require('./src/graphql/schema')
const options = require('./config')

// const session = require('express-session')
// const MongoDBStore = require('connect-mongodb-session')(session)

Mongoose.connect(options.dev.BDD_URL, {}, () => {
  // server.use(session({
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

  // server.use(function (req, res, next) {
  //   console.log('=============> IN MIDDLEWARE <================')
  //   console.log('req ===> ', require('util').inspect(req, { colors: true, depth: 0 }))

  //   next()
  // })

  // Restrict the client-origin for security reasons.
  server.use('*', cors({ origin: 'http://localhost:8080' }))

  server.use('/graphql', bodyParser.json(), graphqlExpress({
    // connect: { mongo },
    schema
  }))

  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))

  server.listen(options.dev.SERVER_PORT, () =>
    console.log(`GraphQL Server is now running on http://localhost:${options.dev.SERVER_PORT}`)
  )
})

server.use((req, res, next) => {
  console.log('=============> IN APP USE <================')
  next()
})
