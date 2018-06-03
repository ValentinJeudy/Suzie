<template>
  <div class="container">
    <ul>
      <li v-for="event in events">
        <img v-if="event.imgPath" :src="event.imgPath" alt="">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'EventsList',
  components: {
  },
  // mounted () {
  //   console.log('this.$route ===> ', this.$route)
  // },
  data () {
    return {
      events: []
    }
  },
  apollo: {
    events: {
      query: gql`{
        events {
          title
          description
          imgPath
        }
      }`,
      result (res) {
        this.events = res.data.events
        // console.log(this.events)
      }
      // variables () {
      //   return {
      //     // artists
      //   }
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
