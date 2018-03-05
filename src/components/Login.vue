<template>
  <div class="container">
    <div class="Artist">
        <h1>Log to your Backoffice !!</h1>
        <form v-on:submit.prevent="login(form)">
          <label for="">ID :</label>
          <input v-model="form.name" type="text">
          <label for="">Password :</label>
          <input v-model="form.password" type="text">
          <button Submit>Go on ==></button>
        </form>
    </div>
  </div>
</template>

<script>
// import gql from 'graphql-tag'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
    console.log('this.teub ===> ', this.form)
  },
  methods: {
    login: (form) => {
      console.log('this ===> ', this.form)
      // const user = gql`
      // user(name: &{form.name})
      // `
      // console.log('this ===> ', this)
      // console.log('MY DATA => ', data)
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
