<template>
  <div class="container">
    <div
      :style="bgArtist"
      class="artist-img">
      <h1>{{ artist.name }}</h1>
      <div
        class="btn-scroll"
        @click="scrollFromTop">
        <svg>
          <use xlink:href="src/assets/img/002-drag.svg#drag"/>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="artist-container">
        <p>{{ artist.description }}</p>
        <p>Lorem ipsum data stuff lol</p>
        <p>Lorem ipsum data stuff lol</p>
        <p>Lorem ipsum data stuff lol</p>
        <p>Lorem ipsum data stuff lol</p>
        <p>Lorem ipsum data stuff lol</p>
        <p>Lorem ipsum data stuff lol</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  components: {
  },
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
      bgArtist: {
        backgroundImage: 'url(' + this.artist.imgPath + ')'
      }
    }
  },
  mounted () {
    console.log('this.artist ===> ', this.artist.imgPath)
  },
  methods: {
    scrollFromTop: (event) => {
      const windowHeight = window.innerHeight
      const headerHeight = document.getElementById('header').offsetHeight

      window.scroll({
        top: windowHeight - headerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/Artist.scss" scoped lang='scss'></style>
