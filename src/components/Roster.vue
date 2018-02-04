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
  components: {

  },
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
    // const listItems = document.querySelectorAll('.container ul li a')
    // const winHeight = window.innerHeight
    // const firstItem = listItems[4]

    // window.onscroll = () => {
    //   // const itemToBottom = firstItem.getBoundingClientRect().top
    //   // console.log(winHeight - itemToBottom)
    //   // for (let i = 0; i <= (winHeight / 10); i++) {
    //   //   console.log(winHeight/10)
    //   // }
    //   const windowheight = window.innerHeight

    //   listItems.forEach((item) => {
    //     const itemToTop = item.getBoundingClientRect().top
    //     console.log(itemToTop)
    //     const getItemPosition = (distanceMin, distanceMax) => {
    //       return itemToTop < (windowheight - distanceMin) && itemToTop > (windowheight - distanceMax)
    //     }
    //     switch (true) {
    //       default:
    //       // item.style.transform = 'translateZ(100px)'
    //         item.style.opacity = '1'
    //         break
    //       case getItemPosition(250, 300):
    //         item.style.opacity = '0.9'
    //         // item.style.transform = 'translateZ(80px)'
    //         break
    //       case getItemPosition(200, 250):
    //         item.style.opacity = '0.8'
    //         // item.style.transform = 'translateZ(60px)'
    //         break
    //       case getItemPosition(150, 200):
    //         item.style.opacity = '0.7'
    //         // item.style.transform = 'translateZ(40px)'
    //         break
    //       case getItemPosition(100, 150):
    //         item.style.opacity = '0.6'
    //         // item.style.transform = 'translateZ(20px)'
    //         break
    //       case getItemPosition(50, 100):
    //         item.style.opacity = '0.5'
    //         // item.style.transform = 'translateZ(0px)'
    //         break
    //       case getItemPosition(0, 50):
    //         item.style.opacity = '0.4'
    //         // item.style.transform = 'translateZ(-20px)'
    //         break
    //     }
    //   })
    // }
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
<style scoped lang="scss">
@keyframes slideout {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
@keyframes slidein {
  0% {
    left: -100%;
  }
  100% {
    left: 0;
  }
}
.container {
  // background: #000;
  padding-top: 7rem;
  height: calc(100vh - 7rem);
  width: 100%;
  overflow: hidden;
  // .background-container {
    // position: fixed;
  //   z-index: -5;
  //   height: calc(100% - 7rem);
  //   width: 100%;
  //   left: 0;
  //   right: 0;
  //   top: 7rem;
  //   bottom: 0;
  //   background: url('../assets/uploads/paysage1.jpg');
  // }
  h1 {
    margin: 0;
    color: #fff;
    font-weight: normal;
  }
  ul {
    position: fixed;
    margin-top: 7.5rem;
    // padding: 15rem 0 0 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow: scroll;
    // transform-origin: 50% 100%;
    // transform: perspective(300px) rotateX(-10deg);
    li {
      height: 7rem;
      z-index: 1;
      .background {
        animation: slideout 1s ease;
        // animation-timing-function: ease;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        left: -100%;
        z-index: -1;
        overflow: hidden;
        img {
          min-width: 100%;
          min-height: 100%;
        }
      }
      a {
        display: block;
        line-height: 7rem;
        text-transform: uppercase;
        font-size: 2.5rem;
        color: yellow;
        font-weight: bold;
        transition: all .3s linear;
      }
      &.active {
        .background {
          // transition: all .5s ease;
          animation: slidein .5s ease;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          // z-index: -1;
        }
      }
    }
  }
}

</style>
