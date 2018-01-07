<template>
  <header>
    <router-link to="/">
      <img src="../assets/suzie-logo.svg" alt="">
    </router-link>
    <menu type="context">
      <ul>
        <li>
          <router-link to="/events">Events</router-link>
        </li>
        <li>
          <router-link to="/roster">Roster</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </menu>
  </header>
</template>

<script>
export default {
  name: 'HeaderBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    padding: 1rem 0;
    background: #000;
    z-index: 10;
  }
  menu {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0 2rem 0 0;
    line-height: 5rem;
    a {
      color: #fff;
    }
    ul {
      list-style-type: none;
      padding: 0;
    li {
      display: inline-block;
      margin: 0 1.5rem;
    }
  }
  }
</style>
