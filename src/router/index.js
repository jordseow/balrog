import Vue from 'vue';
import VueRouter from 'vue-router';

//import Chat from '../Chat.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard/Layout')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../Chat.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Landing/loginuser.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Landing/Register.vue')
  },
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/Landing/Landing.vue')
  },
  {
    path: '/razescanner',
    name: 'razescanner',
    component: () => import('../views/RazeScanner.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile/Profile.vue')
  },
  {
    path: '/mambu',
    name: 'mambu',
    component: () => import('../views/Mambu.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
