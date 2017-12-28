<template>
  <div>
    <header-banner/>
    <h1>{{ msg }}</h1>
    <!-- <ul id="slider" class="slider">
      <li class="slide active">
        <div class="slide-back"></div>
        <div class="slide-front"></div>
      </li>
      <li class="slide">
        <div class="slide-back"></div>
        <div class="slide-front"></div>
      </li>
      <li class="slide">
        <div class="slide-back"></div>
        <div class="slide-front"></div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import Header from './Header'
import HeaderBanner from '@/components/HeaderBanner'

export default {
  name: 'Home',
  components: {
    HeaderBanner
  },
  mounted: () => {
    // const homeSlide = () => {
    //   const slider = document.getElementById('slider')
    //   const slides = slider.getElementsByClassName('slide')
    //   const activeSlide = slider.getElementsByClassName('active')
    //   setInterval(() => {
    //     if (activeSlide[0].nextElementSibling) {
    //       activeSlide[0].nextElementSibling.classList.add('active')
    //       activeSlide[0].classList.remove('active')
    //     } else {
    //       activeSlide[0].classList.remove('active')
    //       slides[0].classList.add('active')
    //     }

    //     if (activeSlide.nextElementSibling) {
    //       activeSlide[0].classList.remove('active').nextElementSibling[0].classList.add('active')
    //     }
    //   }, 4000)
    // }
  },

  data () {
    return {
      msg: 'Welcome to Your Homepage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
    color: red;
  }
  html {
    background: #000;
  }
  // .slider {
  //   height: 100vh;
  //   background: #000;
  // }

  // .slide {
  //   &:first-child{
  //     .slide-back,
  //     .slide-front {
  //       background-image: url('../assets/paysage1.jpg');
  //     }
  //   }
  //   &:nth-child(2){
  //     .slide-back,
  //     .slide-front {
  //       background-image: url('../assets/paysage2.jpg');
  //     }
  //   }
  //   &:last-child{
  //     .slide-back,
  //     .slide-front {
  //       background-image: url('../assets/paysage3.jpg');
  //     }
  //   }
  //   height: 100vh;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   overflow: hidden;
  //   .slide-back,
  //   .slide-front {
  //     position: absolute;
  //     transition: 1.5s ease;
  //   }
  //   .slide-back {
  //     width: 100%;
  //     height: 100%;
  //     left: 0;
  //     right: 0;
  //     top: -100%;
  //     background-color: rgba(255,255,255,.6);
  //     filter: invert(100%);
  //     // backdrop-filter: blur(2px);
  //   }
  //   .slide-front {
  //     z-index: 0;
  //     width: 80%;
  //     height: 0;
  //     left: 10%;
  //     bottom: 15%;
  //   }
  //   &.active{
  //     // .slide-back,
  //     // .slide-front {
  //     // }
  //     .slide-back {
  //       top: 0;
  //     }
  //     .slide-front {
  //       z-index: 2;
  //       height: 70%;
  //       // bottom: 15%;
  //     }
  //   }
  // }

</style>
