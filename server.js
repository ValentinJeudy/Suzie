const express = require('express')
const cors = require('cors')
const {
  graphqlExpress,
  graphiqlExpress
} = require('graphql-server-express')
const bodyParser = require('body-parser')
const schema = require('./src/graphql/schema')

const {MongoClient, ObjectId} = require('mongodb')
const MONGO_URL = 'mongodb://localhost:27017/blog'
const db = await MongoClient.connect(MONGO_URL)
const Posts = db.collection('posts')
const Comments = db.collection('comments')

const PORT = 7700
const server = express()

// Restrict the client-origin for security reasons.
server.use('*', cors({ origin: 'http://localhost:8000' }))

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
)

// const express = require('express')
// const graphqlHTTP = require('express-graphql')
// const { buildSchema } = require('graphql')
// const mongoose = require('mongoose')

// // import {MongoClient, ObjectId} from 'mongodb'
// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// // The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return 'Hello world!'
//   }
// }

// const app = express()
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }))
// app.listen(4000)
// console.log('Running a GraphQL API server at localhost:4000/graphql')

// mongoose.connect('mongodb://localhost:27017/suzie')

// const db = mongoose.connection
// db.on('error', () => {
//   console.error('Error trying to connect Database')
// })
// db.once('open', () => {
//   console.log('You\'re now connected to your Database')
// })
// // const Posts = db.collection('posts')
// // const Comments = db.collection('comments')
