<template>
  <div class="container">
    <div class="events">
        <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsList',
  components: {
  },
  mounted () {
    console.log('this.$route ===> ', this.$route)
  },
  data () {
    return {
      title: 'Welcome to your Events Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
