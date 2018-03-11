<template>
  <div class='container'>
    <ul id='slider' class='slider'>
      <li class='slide active'>
        <div class='slide-back'></div>
        <div class='slide-front'></div>
      </li>
      <li class='slide next'>
        <div class='slide-back'></div>
        <div class='slide-front'></div>
      </li>
      <li class='slide previous'>
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

      setInterval(() => {
        // Reset classes
        Array.prototype.forEach.call(slides, s => {
          s.classList.remove('previous')
          s.classList.remove('next')
        })
        if (activeSlide[0].nextElementSibling) {
          activeSlide[0].classList.add('previous')
          activeSlide[0].nextElementSibling.classList.add('active')
          activeSlide[0].classList.remove('active')
          if (activeSlide[0] === slider.lastElementChild) {
            slides[0].classList.add('next')
          } else {
            activeSlide[0].nextElementSibling.classList.add('next')
          }
        } else {
          activeSlide[0].classList.add('previous')
          activeSlide[0].classList.remove('active')
          slides[0].classList.add('active')
          slides[1].classList.add('next')
        }
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

  // .container {
  //   height: calc(100vh - 7rem);
  //   position: relative;
  //   top: 7rem;
  // }

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
    // &:nth-child(even){
    //   .slide-back {
    //     background: #FFF;
    //   }
    // }
    // &:nth-child(odd){
    //   .slide-back {
    //     background: #000;
    //   }
    // }
    // &:first-child{
    //   background: #fff;
    // }
    &:first-child{
      // .slide-back,
      .slide-front {
        background-image: url('../assets/uploads/paysage1.jpg');
      }
    }
    &:nth-child(2){
      // .slide-back,
      .slide-front {
        background-image: url('../assets/uploads/paysage2.jpg');
      }
    }
    &:last-child{
      // .slide-back,
      .slide-front {
        background-image: url('../assets/uploads/paysage3.jpg');
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
      // background-color: rgba(255,255,255,.6);
      z-index: 0;
      // filter: invert(100%);
      // filter: blur(0.1rem);
      // filter: invert(0.1rem);
      // backdrop-filter: blur(1rem);
    }
    .slide-front {
      z-index: 1;
      width: 80%;
      height: 70%;
      right: -80%;
      bottom: 15%;
    }
    &.previous {
      .slide-back {
        left: 100%;
      }
      .slide-front {
        right: 100%;
      }
    }
    &.next {
      .slide-back {
        left: -100%;
        transition: none;
      }
      .slide-front {
        right: -80%;
        transition: none;
      }
    }
    &.active{
      .slide-back {
        left: 0;
      }
      .slide-front {
        z-index: 2;
        right: 10%;
        // bottom: 15%;
      }
    }
  }

</style>
