<template>
  <div class="container">
    <h1>Welcome to your admin space !!</h1>
    <div class="bloc artists">
        <ul>
          <li
            is="artist-item"
            v-for="artist in artists"
            :artist="artist"
            class="artist">
          </li>
          <div class="add-artist">
          <a @click="openFormArtist" class="btn">Add a new Artist</a>
            <form v-if="artistFormOpened" v-on:submit.prevent="addNewArtist(newArtistForm)">
              <label for="name">name :</label>
              <input v-model="newArtistForm.name" name="name" type="text">
              <label for="description">Description</label>
              <textarea v-model="newArtistForm.description" name="description"></textarea>
              <button Submit>Update</button>
            </form>
          </div>
        </ul>
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
      newArtistForm: {
        name: '',
        description: ''
      },
      artistFormOpened: false
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
    modify () {
      console.log('this ===> ', this)
    },
    addNewArtist (form) {
      console.log(form)
      this.$apollo.mutate({
        mutation: gql`mutation addArtist($input: AddArtistInput!){
          deleteArtist(input: $input){
            name
            description
          }
        }`,
        variables: {
          input: {
            name: form.name
          }
        }
      }).then(response => {
        console.log('response ===> ', response)
      })
    },
    openFormArtist () {
      if (this.artistFormOpened) {
        this.artistFormOpened = false
      } else {
        this.artistFormOpened = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Admin.scss" scoped lang='scss'></style>
