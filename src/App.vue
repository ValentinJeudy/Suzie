<template>
  <div id="app">
    <header-banner/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner'

export default {
  name: 'app',
  components: {
    HeaderBanner
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
