/* eslint-disable */
import IndexView from "../views/IndexView";
import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
import AppLayout from '../views/AppLayout.vue'
import { LoginView, RegisterView, AccountLayout, } from '../views/account'
//import { HomeView }  from '../views/basic'
import { RegisterPagesView,  AboutPageView, RoomPageView, HeroPageView, ContactPageView, ReviewPageView, MenuPageView } from "../views/client"
import { CreateTargetView, SavingsTargetView, TargetView, StartSavingView, DashboardView }  from '../views/targets'
//import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'
import alertify from "alertifyjs"

import global from "../stores/globals";
import jwt_decode from "jwt-decode"
/*
console.log(global.state)
if (global.state.loggedIn){
  console.log(jwt_decode(global.state.data.user.access_token ))
}*/
function checkTime(token){
  if (token){
    var dec = jwt_decode(token)
    console.log(dec.exp)
  }
  return "no token"
}
function guardAuth(to, from, next)
{
var isLoggedIn = global.state.data.loggedIn;
if(isLoggedIn) {
  //checkTime(global.state.data.user.access_token)
	next('/'),
	alertify.notify("Already logged in")// allow to enter route 
	} else{
    next(); // go to '/login';    
	}                                             }

function guardMyroute(to, from, next)
{
  var isLoggedIn = global.state.loggedIn;
if(isLoggedIn !== null) {
  checkTime(global.state.data.access_token)
  global.verifyToken(global.state.data.access_token)
  next(); // allow to enter route
 } else{
  ///global.refreshToken() 
  next('/account/login'); // go to '/login';
 }
}
const routes = [
  {
    path: '/account',
    name: 'account',
    component: AccountLayout,
    children: [
      { path: "login", component: LoginView},
      { path: "register", component: RegisterView},
    ]
  },/*
  {
    path: '/setup',
    name: 'Setup',
    component: LayoutView,
    beforeEnter: guardMyroute,
    children: [
      { path: "", component: RegisterPagesView},
      { path: ":pagenav", component: AboutPageView},
    ]
  },*/
  //{ path: "/page/all", component: RoomPageView, name:"page"},
  /*
      { path: "room", component: RoomPageView},
      { path: "menu", component: MenuPageView},
      { path: "review", component: ReviewPageView},
      { path: "contact", component: ContactPageView},*/
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LayoutView,
    beforeEnter: guardMyroute,
    children: [
      { path: '',  component: DashboardView, name: "dashboad-home"},
      ]

  },

  {
    path: '/',
    name: 'Home',
    component: IndexView,
//beforeEnter: guardMyroute,
  },

 {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'), 
  }
]

const router = createRouter({
  history: createWebHistory(
	  //process.env.BASE_URL
	  ),
  routes,
})

export default router