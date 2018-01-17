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

console.log('options.BDD_URL ===> ', require('util').inspect(options.dev.BDD_URL, {colors: true, depth: 2}))
Mongoose.connect(options.dev.BDD_URL, {}, () => {
  // Restrict the client-origin for security reasons.
  server.use('*', cors({ origin: 'http://localhost:8000' }))

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
