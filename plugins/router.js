import VueRouter from 'vue-router';
import Vue from 'vue';
import { routerOptions } from '~/.nuxt/router';

const router = new VueRouter({
  routes: routerOptions.routes,
  mode: 'history'
})

Vue.use(router)