<template>
  <div class="container">
    <!-- <div class="background-container">

    </div> -->
    <ul>
      <li v-for="artist in artists">
        <a v-on:mouseover="itemHover" href="">{{ artist.name }}</a>
        <div class="background">
          <img :src="artist.imgPath" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Roster',
  data () {
    return {
      // artists: []
    }
  },
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
        this.artists = artists.data.artists
        // console.log(this.artists)
      }
      // variables () {
      //   return {
      //     // artists
      //   }
      // }
    }
  },
  mounted () {
    console.log('this ===> ', this)
    const listItems = document.querySelectorAll('.container ul li a')
    // const winHeight = window.innerHeight
    // const firstItem = listItems[4]

    window.onscroll = () => {
      // const itemToBottom = firstItem.getBoundingClientRect().top
      // console.log(winHeight - itemToBottom)
      // for (let i = 0; i <= (winHeight / 10); i++) {
      //   console.log(winHeight/10)
      // }
      const windowheight = window.innerHeight

      listItems.forEach((item) => {
        const itemToTop = item.getBoundingClientRect().top
        console.log(itemToTop)
        const getItemPosition = (distanceMin, distanceMax) => {
          return itemToTop < (windowheight - distanceMin) && itemToTop > (windowheight - distanceMax)
        }
        switch (true) {
          default:
          // item.style.transform = 'translateZ(100px)'
            item.style.opacity = '1'
            break
          case getItemPosition(250, 300):
            item.style.opacity = '0.9'
            // item.style.transform = 'translateZ(80px)'
            break
          case getItemPosition(200, 250):
            item.style.opacity = '0.8'
            // item.style.transform = 'translateZ(60px)'
            break
          case getItemPosition(150, 200):
            item.style.opacity = '0.7'
            // item.style.transform = 'translateZ(40px)'
            break
          case getItemPosition(100, 150):
            item.style.opacity = '0.6'
            // item.style.transform = 'translateZ(20px)'
            break
          case getItemPosition(50, 100):
            item.style.opacity = '0.5'
            // item.style.transform = 'translateZ(0px)'
            break
          case getItemPosition(0, 50):
            item.style.opacity = '0.4'
            // item.style.transform = 'translateZ(-20px)'
            break
        }
      })
    }
  },
  methods: {
    itemHover: (event) => {
      const listItems = document.querySelectorAll('.container ul li')
      listItems.forEach((item) => {
        // console.log('item.classList => ', item)
        item.classList.remove('active')
      })
      event.target.parentElement.classList.add('active')
      // this.addClass('active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./scss/Roster.scss" scoped lang="scss"></style>
