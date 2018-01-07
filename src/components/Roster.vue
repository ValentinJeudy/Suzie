<template>
  <div>
    <div class="container">
      <div class="background-container">

      </div>
      <ul>
        <li>
          <a v-on:mouseover="itemHover" href="">Youri</a>
        </li>
        <li>
          <a href="">Pollux</a>
        </li>
        <li>
          <a href="">Ori</a>
        </li>
        <li>
          <a href="">Elinass</a>
        </li>
        <li>
          <a href="">James Marron</a>
        </li>
        <li>
          <a href="">José</a>
        </li>
        <li>
          <a href="">James Luis</a>
        </li>
        <li>
          <a href="">Sauron</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roster',
  components: {

  },
  data () {
    return {
      title: 'Roster'
    }
  },
  mounted () {
    const listItems = document.querySelectorAll('.container ul li a')
    window.onscroll = () => {
      const windowheight = window.innerHeight

      listItems.forEach((item) => {
        const itemToTop = item.getBoundingClientRect().top
        const getItemPosition = (distanceMin, distanceMax) => {
          return itemToTop < (windowheight - distanceMin) && itemToTop > (windowheight - distanceMax)
        }
        switch (true) {
          default:
            item.style.opacity = '1'
            break
          case getItemPosition(200, 300):
            console.log('ITTEM PALIER 1')
            item.style.opacity = '0.8'
            break
          case getItemPosition(100, 200):
            console.log('ITTEM PALIER 2')
            item.style.opacity = '0.6'
            break
          case getItemPosition(0, 100):
            console.log('ITTEM PALIER FINAL')
            item.style.opacity = '0.4'
            break
        }
      })
    }
  },
  methods: {
    itemHover: () => {
      console.log(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  // background: #000;
  // height: calc(100vh - 7rem);
  .background-container {
    position: fixed;
    z-index: -5;
    height: calc(100% - 7rem);
    width: 100%;
    left: 0;
    right: 0;
    top: 7rem;
    bottom: 0;
    background: url('../assets/paysage1.jpg');
  }
  h1 {
    margin: 0;
    color: #fff;
    font-weight: normal;
  }
  ul {
    padding: 15rem 0 10rem 0;
    margin: 0;
    // height: calc(100% - 7rem);
    // overflow: scroll;
    // transform-origin: 50% 100%;
    // transform: perspective(300px) rotateX(-10deg);
    li {
      height: 7rem;
      transform: perspective(500px) translateZ(0);
      a {
        display: block;
        line-height: 7rem;
        text-transform: uppercase;
        font-size: 2.5rem;
        color: yellow;
        font-weight: bold;
        transition: all .3s linear;
      }
    }
  }
}

</style>
