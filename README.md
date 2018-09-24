# suzie

> suzie booking website

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Graphql

The graphiql interface is accessible locally from this url : `http://localhost:7000/graphiql`

### Queries

Here we request all artists, then only one by name :
```graphql
// all artists
query {
  artists {
    name
    description
    imgPath
  }
}


query {
  artist(name: "artist1") {
    name
    description
    imgPath
  }
}
```


### Mutations

To add a new user for example you can write something like this :

```graphql
mutation addUser {
  addUser(input: {name: "name", password: "psw"}) {
    name
    password
  }
}
```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
