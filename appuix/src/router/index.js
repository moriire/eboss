/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
   { path: "/:user_id", name: "user_id", component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue')},
  { path: "/:user_id/all", name:"all_user_id", component: () => import(/* webpackChunkName: "about" */ '@/views/EditPageView.vue')},
]

const router = createRouter({
  history: createWebHistory(
	  //process.env.BASE_URL
	  ),
  routes,
});

export default router