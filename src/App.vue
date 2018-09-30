<template>
  <div id="app">
    <header-banner />
    <router-view />
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner'
// import gql from 'graphql-tag'
// import { dev } from '../config'

export default {
  name: 'App',
  components: {
    HeaderBanner
  },
  data () {
    return {
      // artists: 'loulou'
    }
  }
}
</script>

<style src="./assets/scss/App.scss" lang='scss'></style>
