<template>
  <li class="artist">
    <span @click="deleteArtist(artist.name)" class="cross"></span>
    <h3>{{ artist.name }}</h3>
    <p>{{ artist.description }}</p>
    <!-- <span @click="modify()">modify</span> -->
    <form v-on:submit.prevent="updateArtist(form)">
      <label for="">name :</label>
      <input type="text">
      <label for="">Description</label>
      <textarea name=""></textarea>
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
      artist: {
        name: '',
        description: ''
      },
      form: {
        name: '',
        description: ''
      }
    }
  },
  props: ['artist'],
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
        console.log('name deleted => ', name)
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
  .cross {
    position: absolute;
    cursor: pointer;
    display: block;
    top: 0.5rem;
    right: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: url('../assets/cross.svg') no-repeat;
    background-position: center;
    background-size: 100%;
  }
  form {
    padding: 0 4rem;
    text-align: left;
    label {
      display: inline-block;
    }
    input, textarea {
      display: block;
      width: 100%;
      margin: 1.5rem auto;
    }
    input {
      height: 2rem;
    }
    textarea {
      min-height: 4rem;
    }
  }

</style>
