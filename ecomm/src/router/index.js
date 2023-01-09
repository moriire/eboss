/* eslint-disable */
import globals from "../stores/globals";
import { createRouter, createWebHistory } from 'vue-router'
//import jwt_decode from "jwt-decode"
/*
function checkTime(token){
  if (token){
    //var dec = jwt_decode(token)
    console.log(dec.exp)
  }
  return "no token"
}
*/
function guardMyroute(to, from, next)
{
  var isLoggedIn = globals.state.loggedIn;
  if(isLoggedIn== "true" && !to.path.startsWith('/account')) {
  //checkTime(globals.state.data.access_token)
  globals.verifyToken(globals.state.data.access_token)
  next(); // allow to enter route
 } else if(isLoggedIn=="true" && to.path.startsWith('/account')) {
    next({path: "/dashboard"})
    alertify.alert("already loggedIn")
 }else{
  ///global.refreshToken() 
  next({ path: `/account/login?redirect=${from.path}` }); // go to '/login';
 }
}


const routes = [
   { path: "/shop/:user_id", name: "user_id", component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')},
   { path: "/edit?user=:user_id", name:"all_user_id", beforeEnter: guardMyroute, component: () => import(/* webpackChunkName: "cms" */ '@/views/EditPageView.vue')},
   { path: '/not-found', name: 'not-found', component: () => import(/* webpackChunkName: "error404" */ '@/views/NotFound.vue')},
  ]

const router = createRouter({
  history: createWebHistory(
	  //process.env.BASE_URL
	  ),
  routes,
});

export default router