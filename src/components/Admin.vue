<template>
  <div class="container flex">
    <div class="bloc">
        <h1>YOU'RE LOGGED MOFO !!!</h1>
        <div class="artists">
          <ul>
            <li
              is="artist-item"
              v-for="artist in artists"
              :artist="artist"
              class="artist">
            </li>
          </ul>
        </div>
    </div>
    <div class="bloc events">
      <h2>My events</h2>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ArtistItem from './ArtistItem'

export default {
  name: 'Admin',
  components: {
    ArtistItem
  },
  data () {
    return {
      title: 'Welcome to your Artist Page'
    }
  },
  props: ['artist'],
  apollo: {
    artists: {
      query: gql`{
        artists {
          name
          description
          imgPath
        }
      }`,
      result (artists) {
        // const artists = artists.data.artists
        // artists.forEach((artist) => {
        //   console.log('artist ===> ', artist)
        //   artist.showForm = false
        // })
        this.artists = artists.data.artists
      }
      // variables () {
      //   return {
      //     // artists
      //   }
      // }
    }
  },
  methods: {
    deleteArtist (name) {
      this.$apollo.mutate({
        mutation: gql`mutation deleteArtist($input: deleteArtist!){
          deleteArtist(input: $input){
            res
          }
        }`,
        variables: {
          input: {
            name: name
          }
        }
      }).then(response => {
        console.log('response ===> ', response)

        // if (res === 'logged') {
        //   this.$router.push('/admin')
        // } else if (res === 'bad user') {
        //   this.userError = true
        // }
      })
    },
    modify () {
      console.log('this ===> ', this)
    },
    updateArtist (form) {
      console.log('form ==> ', form)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .flex {
    display: flex;
    flex-direction: row;
  }
  .bloc {
    // flex: auto;
    width: 40%;
    margin: 0 5%;
  }
  .artist {
    position: relative;
    list-style: none;
    p, h3 {
      text-decoration: none;
    }
    h3 {
      margin: 0 0 1.5rem 0;
    }
  }
</style>
