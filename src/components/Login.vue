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
import gql from 'graphql-tag'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      userError: false,
      pswdError: false
    }
  },
  mounted () {
    // console.log('this.teub ===> ', this)
  },
  methods: {
    login (form) {
      this.$apollo.query({
        query: gql`query logUser($name: String!, $password: String!){
          logUser(name: $name, password: $password){
            res
          }
        }`,
        variables: {
          name: form.name,
          password: form.password
        }
      }).then(response => {
        console.log('response ===> ', response)
        const res = response.data.logUser.res

        if (res === 'logged') {
          this.$router.push('/admin')
        } else if (res === 'bad user') {
          this.userError = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./scss/Login.scss" scoped lang="scss"></style>
