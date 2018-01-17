import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { dev } from '../../config'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: dev.GRAPHQL_URL
})

console.log(dev.GRAPHQL_URL)

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default apolloClient
