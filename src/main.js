// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueApollo from 'vue-apollo'
// import apolloClient from 'vue-apollo'

// Install the vue plugin
// Vue.use(VueApollo)

Vue.config.productionTip = false

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // apolloProvider,
  router,
  template: '<App/>',
  components: { App }
})
