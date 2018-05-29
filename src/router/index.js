import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Roster from '@/components/Roster'
import Artist from '@/components/Artist'
import EventsList from '@/components/EventsList'
import Contact from '@/components/Contact'
import Login from '@/components/Login'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/roster/:name',
      name: 'Artist',
      component: Artist,
      props: true
    },
    {
      path: '/events',
      name: 'EventsList',
      component: EventsList
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
