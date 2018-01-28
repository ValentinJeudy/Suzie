<template>
  <div class='container'>
    <ul id='slider' class='slider'>
      <li class='slide active'>
        <div class='slide-back'></div>
        <div class='slide-front'></div>
      </li>
      <li class='slide'>
        <div class='slide-back'></div>
        <div class='slide-front'></div>
      </li>
      <li class='slide'>
        <div class='slide-back'></div>
        <div class='slide-front'></div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Header from './Header'

export default {
  name: 'Home',
  components: {
  },
  mounted: () => {
    const homeSlide = () => {
      const slider = document.getElementById('slider')
      const slides = slider.getElementsByClassName('slide')
      const activeSlide = slider.getElementsByClassName('active')
      const activeBackSlide = activeSlide[0].children[0]
      const activeFrontSlide = activeSlide[0].children[1]
      console.log(slider.lastElementChild.style)
      setInterval(() => {
        if (activeSlide[0].nextElementSibling) {

          // Actives slides leaving the window
          activeBackSlide.style.left = '100%'
          activeFrontSlide.style.right = '110%'
          // New slides commin
          activeSlide[0].nextElementSibling.children[0].style.left = '0'
          activeSlide[0].nextElementSibling.children[1].style.right = '10%'

          if (activeSlide[0].previousElementSibling) {
            activeSlide[0].previousElementSibling.children[0].style.left = '-100%'
            activeSlide[0].previousElementSibling.children[1].style.right = '-80%'
          } else {
            // slider.lastElementChild.style
            slider.lastElementChild.children[0].style.left = '-100%'
            slider.lastElementChild.children[1].style.right = '-80%'
          }
          activeSlide[0].nextElementSibling.classList.add('active')
          activeSlide[0].classList.remove('active')
        } else {

          activeBackSlide.style.left = '100%'
          activeFrontSlide.style.right = '110%'

          slides[0].children[0].style.left = '0'
          slides[0].children[1].style.right = '10%'

          slides[1].children[0].style.left = '-100%'
          slides[1].children[1].style.right = '-80%'

          activeSlide[0].classList.remove('active')
          slides[0].classList.add('active')
        }
        // console.log(activeSlide.nextElementSibling)
        // if (activeSlide.nextElementSibling) {
        //   activeSlide[0].classList.remove('active').nextElementSibling[0].classList.add('active')
        // }
      }, 4000)
    }
    homeSlide()
  },

  data () {
    return {
      msg: 'Welcome to Your Homepage'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  h1, h2 {
    font-weight: normal;
    color: red;
  }
  html {
    background: #000;
  }

  .container {
    height: calc(100vh - 7rem);
    position: relative;
    top: 7rem;
  }

  .slider {
    // position: relative;
    // height: calc(100vh - 5rem);
    height: 100%;
    margin: 0;
    background: #000;
  }

  .slide {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    &:first-child{
      .slide-back,
      .slide-front {
        background-image: url('../assets/paysage1.jpg');
      }
    }
    &:nth-child(2){
      .slide-back,
      .slide-front {
        background-image: url('../assets/paysage2.jpg');
      }
    }
    &:last-child{
      .slide-back,
      .slide-front {
        background-image: url('../assets/paysage3.jpg');
      }
    }
    .slide-back,
    .slide-front {
      position: absolute;
      transition: 1.5s ease;
    }
    .slide-back {
      width: 100%;
      height: 100%;
      left: -100%;
      right: 0;
      top: 0;
      background-color: rgba(255,255,255,.6);
      // filter: invert(100%);
      filter: blur(0.1rem);
      // backdrop-filter: blur(1rem);
    }
    .slide-front {
      z-index: 0;
      width: 80%;
      height: 70%;
      right: -80%;
      bottom: 15%;
    }
    // &.active{
      // .slide-back,
      // .slide-front {
      // }
      // .slide-back {
      //   left: 0;
      // }
      // .slide-front {
      //   z-index: 2;
      //   right: 10%;
      //   // bottom: 15%;
      // }
    // }
  }

</style>
