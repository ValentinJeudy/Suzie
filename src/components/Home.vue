<template>
  <div>
    <!-- <header-banner/> -->
    <ul class="slider">
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
  created: () => {
    console.log('Home created !!')
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
  // .slide {
  //   height: 100%;
  //   background: blue;
  // }
  .slide {
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    .slide-left,
    .slide-right {
      position: absolute;
      height: 100%;
      width: 50%;
    }
    .slide-left {
      background: blue;
      left: 0;
      top: -100%;
    }
    .slide-right {
      background: green;
      right: 0;
      bottom: -100%;
    }
    &.active{
      .slide-left,
      .slide-right {
        top: 0;
        bottom: 0;
      }
    }
  }

</style>
