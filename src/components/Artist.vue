<template>
  <div class="container">
    <div class="artist">
        <h2>{{ artist.name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  components: {
  },
  props: ['artist'],
  // data () {
  //   return {
  //   }
  // },
  mounted () {
    console.log('this.artist ===> ', this.artist)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Artist.scss" scoped lang='scss'></style>