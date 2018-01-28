<template>
  <div id="app">
    <header-banner/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner'
import gql from 'graphql-tag'
// import { dev } from '../config'

export default {
  name: 'app',
  components: {
    HeaderBanner
  },
  data () {
    return {
      // artists: 'loulou'
    }
  },
  apollo: {
    artists: {
      query: gql`{
        artists {
          name
          description
        }
      }`,
      result (artists) {
        // this.artists = artists.data.artists
        // console.log(this.artists)
      }
      // variables () {
      //   return {
      //     // artists
      //   }
      // }
    }
  },
  mounted: () => {
    // console.log(this.a.apollo.artists)
    // this.artists.forEach((artist) => {
    //   console.log('Artiste => ', artist)
    // })
  }
}
</script>

<style>
body {
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
ul {
  padding: 0;
}
#app {
  /* background: #000; */
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
