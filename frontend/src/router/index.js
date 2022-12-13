/* eslint-disable */
import IndexView from "../views/IndexView";
import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
import { LoginView, RegisterView, AccountLayout, } from '../views/account'
import { HomeView }  from '../views/basic'
//import { RegisterClientView, ListClientView, EditClientView, AttendanceView, UserView, ClientLayout} from '../views/client'
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
    name: 'client',
    component: ClientLayout,
    beforeEnter: guardMyroute,
    children: [
      { path: ":user", component: RegisterClientView},
      { path: "list", component: ListClientView},
      { path: "edit/:id", component: EditClientView},
      //{ path: "dashboard", component: DashboardView},
      { path: "attendance", component: AttendanceView},
      { path: "user/:id", component: UserView},
    ]
  },
  */
  {
    path: '/user',
    name: 'Basic',
    component: LayoutView,
//beforeEnter: guardMyroute,
    children: [
      { path:':user', component: HomeView },
      //{ path:'setup/:user', component: IndexView },
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