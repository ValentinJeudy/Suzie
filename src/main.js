// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApollo from 'vue-apollo'
import apolloClient from './graphql/apollo-client'

// import Home from './components/Home'
// import Roster from './components/Roster'
// import Login from './components/Login'
// import EventsList from './components/EventsList'

// Install the vue plugin
// Vue.use(VueApollo)

Vue.config.productionTip = false

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  template: '<App/>',
  components: { App }
})
