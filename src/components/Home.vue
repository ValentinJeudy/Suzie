<template>
  <div>
    <!-- <header-banner/> -->
    <ul id="slider" class="slider">
      <li class="slide active">
        <div class="slide-left"></div>
        <div class="slide-right"></div>
      </li>
      <li class="slide">
        <div class="slide-left"></div>
        <div class="slide-right"></div>
      </li>
      <li class="slide">
        <div class="slide-left"></div>
        <div class="slide-right"></div>
      </li>
    </ul>
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
    const slider = document.getElementById('slider')
    const slides = slider.getElementsByClassName('slide')
    const activeSlide = slider.getElementsByClassName('active')
    setInterval(() => {
      if (activeSlide[0].nextElementSibling) {
        activeSlide[0].nextElementSibling.classList.add('active')
        activeSlide[0].classList.remove('active')
      } else {
        activeSlide[0].classList.remove('active')
        slides[0].classList.add('active')
      }

      // if (activeSlide.nextElementSibling) {
      // activeSlide[0].classList.remove('active').nextElementSibling[0].classList.add('active')
      // }
    }, 4000)
  }

  // data () {
  //   return {
  //     msg: 'Welcome to Your Homepage'
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
    color: red;
  }

  @keyframes slideOutLeft {
    from {
      top: 0;
    }
    75% {
      top: 100%
    }
    to {
      top: -100%
    }
  }
  @keyframes slideInLeft {
    from {
      top: -100%;
    }
    to {
      top: 0;
    }
  }
  @keyframes slideOutRight {
    from {
      bottom: 0;
    }
    75% {
      bottom: 100%
    }
    to {
      bottom: -100%
    }
  }
  @keyframes slideInRight {
    from {
      bottom: -100%;
    }
    to {
      bottom: 0;
    }
  }

  .slide {
    &:first-child{
      .slide-left,
      .slide-right {
        background: red;
      }
    }
    &:nth-child(2){
      .slide-left,
      .slide-right {
        background: green;
      }
    }
    &:last-child{
      .slide-left,
      .slide-right {
        background: purple;
      }
    }
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    .slide-left,
    .slide-right {
      // z-index: 0;
      position: absolute;
      height: 100%;
      width: 50%;
      // border: solid 2px purple;
      // transition: all 1s linear;
    }
    .slide-left {
      left: 0;
      top: -100%;
      animation: slideInLeft 1s linear;
    }
    .slide-right {
      right: 0;
      bottom: -100%;
      animation: slideInRight 1s linear;
    }
    &.active{
      // .slide-left,
      // .slide-right {
      // }
      .slide-left {
        z-index: 5;
        top: 0;
        animation: slideOutLeft 1.5s linear;
      }
      .slide-right {
        z-index: 5;
        bottom: 0;
        animation: slideOutRight 1.5s linear;
      }
    }
  }

</style>
