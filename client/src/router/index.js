import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../views/Home.vue'
import { CurrentUser } from '../models/Users';






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/Heart',
    name: 'Heart',
    component:()=>import('../views/Heart.vue'),
    meta:{isSecret:false}
  },
  {                     
    path: '/Nutrition',
    name: 'Nutrition',
    component:()=>import('../views/Nutrition.vue'),
    meta:{isSecret:false}
  },
  
  {
    path: '/Hydrate',
    name: 'Hydrate',
    component:() =>import('../views/Hydrate.vue'),
    meta:{isSecret:false}
  },
  {
    path: '/Excercise',
    name: 'Excercise',
    component:()=>import('../views/Excercise.vue')
  
  },
  
  {
    path: '/login',
    name: 'Login',
    component:()=> import('../views/Login.vue')
    
  },
  {
    path: '/sign',
    name: 'sign',
    component:() =>import('../views/sign.vue')
    
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
});
router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});


export default router
