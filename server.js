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
const PORT = 7000
const MONGO_URL = 'mongodb://localhost:27017/suzie'

Mongoose.connect(MONGO_URL, {}, () => {
  // Restrict the client-origin for security reasons.
  server.use('*', cors({ origin: 'http://localhost:8000' }))

  server.use('/graphql', bodyParser.json(), graphqlExpress({
    // connect: { mongo },
    schema
  }))

  server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
  }))

  server.listen(PORT, () =>
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
  )
})
