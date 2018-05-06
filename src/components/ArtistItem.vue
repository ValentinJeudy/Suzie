<template>
  <li class="artist">
    <span @click="deleteArtist(artist.name)" class="cross"></span>
    <div class="artist-content">
      <h3>{{ artist.name }}</h3>
      <p>{{ artist.description }}</p>
    </div>
    <span class="open-form" @click="modify()">modify</span>
    <form v-if="formOpened" v-on:submit.prevent="updateArtist(form)">
      <label for="name">name :</label>
      <input v-model="form.name" name="name" type="text">
      <label for="description">Description</label>
      <textarea v-model="form.description" name="description"></textarea>
      <button Submit>Update</button>
    </form>
  </li>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'ArtistItem',
  components: {
  },
  data () {
    return {
      form: {
        name: '',
        description: ''
      },
      formOpened: false
    }
  },
  props: ['artist'],
  methods: {
    deleteArtist (name) {
      this.$apollo.mutate({
        mutation: gql`mutation deleteArtist($input: FindArtistInput!){
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
        console.log('name deleted => ', name)
        // if (res === 'logged') {
        //   this.$router.push('/admin')
        // } else if (res === 'bad user') {
        //   this.userError = true
        // }
      })
    },
    modify () {
      this.formOpened ? this.formOpened = false : this.formOpened = true
    },
    updateArtist (form) {
      this.$apollo.mutate({
        mutation: gql`mutation updateArtist($input: UpdateArtistInput!){
          updateArtist(input: $input){
            name
            description
          }
        }`,
        variables: {
          input: {
            artist: {
              name: this.artist.name
            },
            newArtist: {
              name: form.name,
              description: form.description
            }
          }
        },
        update: (store) => {
          console.log('store ===> ', form)
          const data = store.data.data
          for (const artist in data) {
            if (artist.includes('ROOT_QUERY.artists')) {
              console.log('artist ===> ', data[artist])
              data[artist].name = form.name
              data[artist].description = form.description
              console.log('newArtist ===> ', data[artist])
            }
          }
          // // console.log('store ===> ', store.data.data['ROOT_QUERY.artists'])
        }
      }).then(data => {
        console.log('data ===> ', data)
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/ArtistItem.scss" scoped lang='scss'></style>
