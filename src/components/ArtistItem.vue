<template>
  <li class="artist">
    <span
      class="cross"
      @click="deleteArtist(artist.name)"/>
    <div class="artist-content">
      <h3>{{ artist.name }}</h3>
      <p>{{ artist.description }}</p>
    </div>
    <span
      class="open-form"
      @click="modify">modify</span>
    <form
      v-if="formOpened"
      @submit.prevent="updateArtist(form)">
      <label for="name">New name :</label>
      <input
        v-model="form.name"
        name="name"
        type="text">
      <label for="description">New description</label>
      <textarea
        v-model="form.description"
        name="description"/>
      <div class="upload-file">
        <label for="upload">Upload image :</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          class="input-file"
          @change="fileChange($event.target.name, $event.target.files)">
        <p>Here to upload image !</p>
      </div>
      <button Submit>Update</button>
    </form>
  </li>
</template>

<script>
import gql from 'graphql-tag'
// import uploadService from '../assets/lib/uploadService'
import axios from 'axios'

export default {
  name: 'ArtistItem',
  components: {},
  props: {
    artist: {
      type: Object,
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imgPath: String,
      required: true
    }
  },
  data () {
    return {
      form: {
        name: '',
        Path: '',
        image: '',
        fileToUpload: {}
      },
      formOpened: false
    }
  },
  mounted () {},
  methods: {
    modify () {
      this.formOpened = !this.formOpened
    },
    deleteArtist (name) {
      this.$apollo
        .mutate({
          mutation: gql`
            mutation deleteArtist($input: FindArtistInput!) {
              deleteArtist(input: $input) {
                res
              }
            }
          `,
          variables: {
            input: {
              name: name
            }
          }
        })
        .then((response) => {
          console.log('response ===> ', response)
          console.log('name deleted => ', name)
          // if (res === 'logged') {
          //   this.$router.push('/admin')
          // } else if (res === 'bad user') {
          //   this.userError = true
          // }
        })
    },
    updateArtist (form) {
      console.log('form ===> ', form)

      if (!isEmpty(form.fileToUpload)) {
        axios({
          url: 'http://localhost:7000/upload',
          method: 'post',
          data
        }).then((res) => {
          if (res.status === 200) {
            this.form.image = res.data
          }
        }).catch((err) => {
          console.error('Error when uploading file : ', err)
        })
      }

      // this.$apollo.mutate({
      //   mutation: gql`mutation updateArtist($input: UpdateArtistInput!){
      //     updateArtist(input: $input){
      //       name
      //       description
      //     }
      //   }`,
      //   variables: {
      //     input: {
      //       artist: {
      //         name: this.artist.name
      //       },
      //       newArtist: {
      //         name: form.name,
      //         description: form.description
      //       }
      //     }
      //   },
      //   update: (store) => {
      //     console.log('store ===> ', form)
      //     const data = store.data.data
      //     for (const artist in data) {
      //       if (artist.includes('ROOT_QUERY.artists')) {
      //         console.log('artist ===> ', data[artist])
      //         data[artist].name = form.name
      //         data[artist].description = form.description
      //         console.log('newArtist ===> ', data[artist])
      //       }
      //     }
      //     // // console.log('store ===> ', store.data.data['ROOT_QUERY.artists'])
      //   }
      // }).then(data => {
      //   console.log('data ===> ', data)
      // }).catch((err) => {
      //   console.error(err)
      // })
    },
    fileChange (name, files) {
      if (!files.length) {
        this.form.fileToUpload = {}
        return
      }

      const data = new FormData()
      data.append('image', ...files)

      this.form.fileToUpload = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/ArtistItem.scss" scoped lang='scss'></style>
