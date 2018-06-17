<template>
  <div class="container">
    <div class="content">
      <ul>
        <li class="event" v-for="event in events">
          <div class="img" v-bind:style="{backgroundImage: `url(${event.imgPath})`}">
            <!-- <img v-if="event.imgPath" :src="event.imgPath" alt=""> -->
          </div>
          <h3>{{ event.title }}</h3>
          <p>{{ event.description }}</p>
          <div class="link">
            <span>See more</span>
          </div>
          <div class="link">
            <a href="">Buy tickets</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Events',
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
<style src="../assets/scss/Events.scss" scoped lang="scss"></style>
