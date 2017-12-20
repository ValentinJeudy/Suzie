<template>
  <header>
    <a href="/">
      <img src="../assets/suzie-logo.svg" alt="">
    </a>
    <menu type="context">
      <ul>
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="">Roster</a>
        </li>
        <li>
          <a href="">Contact</a>
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
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 10px;
    }
  }
  header {
    height: 5rem;
    padding: 1rem 0;
    background: #fff;
  }
  menu {
    padding: 0;
  }
</style>
