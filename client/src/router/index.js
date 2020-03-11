import Vue from 'vue'
import VueRouter from 'vue-router'
import Excercise  from '../views/Excercise.vue'
import Heart from '../views/Heart.vue'
import Nutrition from '../views/Nutrition.vue'
import contact from '../views/contact.vue'
import report from '../views/report.vue'

import Home from '../views/Home.vue'






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Excercise',
    name:  'Excercise',
    component:Excercise
  },
  {
    path: '/Heart',
    name: 'Heart',
    component:Heart
  },
  {                     
    path: '/Nutrition',
    name: 'Nutrition',
    component:Nutrition
  },
  {
    path: '/contact',
    name: 'contact' ,
    component:contact
  },
  {
    path: '/report',
    name: 'report',
    component:report
  },
  {
    path: '/Activity',
    name: 'Activity',
    component:Activity
  },
  {
    path: '/Log',
    name: 'Log',
    component:Log
    
  },
  

  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
