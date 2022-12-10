/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
//import { LoginView, RegisterView, AccountView,  ResetPasswordView }  from '../views/account'

import { HomeView }  from '../views/basic'

//import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'
import alertify from "alertifyjs"

//import globals from "../stores/globals";

function guardAuth(to, from, next)
{
var isLoggedIn = globals.state.loggedIn;
if(isLoggedIn) {
	next('/'),
	alertify.notify("Already logged in")// allow to enter route 
	} else{
    next(); // go to '/login';    
	}                                             }

function guardMyroute(to, from, next)
{
	var isLoggedIn = globals.state.loggedIn;
if(isLoggedIn) {
  globals.verifyToken()
  next(); // allow to enter route
 } else{
  next()//'/account/login'); // go to '/login';
 }
}
const routes = [
  {
    path: '/',
    name: 'Basic',
    component: LayoutView,
//beforeEnter: guardMyroute,
    children: [
	    { path:':user', component: HomeView },
	  ]
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