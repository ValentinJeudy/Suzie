<template>
  <div>
    <div class="Artist">
        <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  components: {
  },
  data () {
    return {
      title: 'Welcome to your Artist Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Artist.scss" scoped lang='scss'></style>