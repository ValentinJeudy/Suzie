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
<style src="../assets/scss/Home.scss" scoped lang='scss'></style>
