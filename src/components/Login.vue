<template>
  <div class="container">
    <div class="Artist">
        <h1>Log to your Backoffice !!</h1>
        <form action="">
          <label for="">ID :</label>
          <input type="text">
          <label for="">Password :</label>
          <input type="text">
          <button>Go on ==></button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  components: {
  },
  data () {
    return {
      title: 'Welcome to your Login Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  padding-top: 7rem;
  height: calc(100vh - 7rem);
  width: 100%;
}
form {
  width: 30rem;
  margin: 0 auto;
  text-align: left;
  label {
  display: inline-block;
  width: 100%;
  padding-left: .5rem;
  margin: .4rem 0;
  }
  input {
    width: 100%;
    height: 1.5rem;
    margin-bottom: 1rem;
    padding-left: .4rem;
    outline: red 2px;
  }
}


</style>
