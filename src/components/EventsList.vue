<template>
  <div>
    <header-banner/>
    <div class="events">
        <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import HeaderBanner from '@/components/HeaderBanner'

export default {
  name: 'EventsList',
  components: {
    HeaderBanner
  },
  mounted: () => {

  },
  data () {
    return {
      title: 'Welcome to your Events Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
