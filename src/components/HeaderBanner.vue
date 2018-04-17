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
        <li>
          <router-link to="/login">Login</router-link>
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
<style src="./scss/HeaderBanner.scss" scoped lang="scss"></style>
