<template>
  <div>
    <header></header>
    <h1>my Home</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Home',
  components: {
    'Header': Header
  },
  data () {
    return {
      msg: 'Welcome to Your Homepage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
