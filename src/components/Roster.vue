<template>
  <div>
    <header-banner/>
    <div class="Roster">
        <h1>{{ title }}</h1>

    </div>
  </div>
</template>

<script>
import HeaderBanner from '@/components/HeaderBanner'

export default {
  name: 'Roster',
  components: {
    HeaderBanner
  },
  data () {
    return {
      title: 'Welcome to Your Roster Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
