"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bubbles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bubbles */ \"./src/Bubbles.vue\");\n/* harmony import */ var _views_IndexView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/IndexView */ \"./src/views/IndexView.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/LayoutView.vue */ \"./src/views/LayoutView.vue\");\n/* harmony import */ var _views_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/account */ \"./src/views/account/index.js\");\n/* harmony import */ var _views_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/client */ \"./src/views/client/index.js\");\n/* harmony import */ var _views_targets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/targets */ \"./src/views/targets/index.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stores_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/globals */ \"./src/stores/globals.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* eslint-disable */\n\n\n\n\n //import { HomeView }  from '../views/basic'\n\n\n //import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'\n\n\n\n\n/*\r\nconsole.log(global.state)\r\nif (global.state.loggedIn){\r\n  console.log(jwt_decode(global.state.data.user.access_token ))\r\n}*/\n\nfunction checkTime(token) {\n  if (token) {\n    var dec = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n    console.log(dec.exp);\n  }\n\n  return \"no token\";\n}\n\nfunction guardAuth(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.loggedIn;\n\n  if (isLoggedIn) {\n    //checkTime(global.state.data.user.access_token)\n    next('/'), alertifyjs__WEBPACK_IMPORTED_MODULE_6___default().notify(\"Already logged in\"); // allow to enter route \n  } else {\n    next(); // go to '/login';    \n  }\n}\n\nfunction guardMyroute(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.loggedIn;\n\n  if (isLoggedIn !== null) {\n    checkTime(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].verifyToken(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    next(); // allow to enter route\n  } else {\n    ///global.refreshToken() \n    next('/account/login'); // go to '/login';\n  }\n}\n\nconst routes = [{\n  path: '/account',\n  name: 'account',\n  component: _views_account__WEBPACK_IMPORTED_MODULE_3__.AccountLayout,\n  children: [{\n    path: \"login\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.LoginView\n  }, {\n    path: \"register\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.RegisterView\n  }]\n}, {\n  path: '/setup',\n  name: 'Setup',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  beforeEnter: guardMyroute,\n  children: [{\n    path: \"\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.RegisterPagesView\n  }, {\n    path: \":pagenav\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.AboutPageView\n  }, {\n    path: \"home\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.HeroPageView\n  }, {\n    path: \"menu\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.MenuPageView\n  }, {\n    path: \"review\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.ReviewPageView\n  }, {\n    path: \"contact\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.ContactPageView\n  }\n  /*\r\n  { path: \"edit/:id\", component: EditClientView},\r\n  { path: \"dashboard\", component: DashboardView},\r\n  { path: \"attendance\", component: AttendanceView},\r\n  { path: \"user/:id\", component: UserView},*/\n  ]\n}, {\n  path: '/dashboard',\n  name: 'Dashboard',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  beforeEnter: guardMyroute,\n  children: [{\n    path: '',\n    component: _views_targets__WEBPACK_IMPORTED_MODULE_5__.DashboardView,\n    name: \"dashboad-home\"\n  }\n  /*\r\n  { path: 'create',  component: CreateTargetView },\r\n  { path: 'savings',  component: SavingsTargetView},\r\n  { path: 'savings/:id',  component: SingleSavingsView},\r\n  { path: 'start',  component:  StartSavingView },\r\n  */\n  ]\n}, {\n  path: '/',\n  name: 'Home',\n  component: _views_IndexView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] //beforeEnter: guardMyroute,\n\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUxBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBTEE7QUFpQkE7QUFDQTtBQUNBOztBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBR0E7QUFKQTtBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyL2luZGV4LmpzPzVhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IEJ1YmJsZXMgZnJvbSBcIi4uL0J1YmJsZXNcIlxyXG5pbXBvcnQgSW5kZXhWaWV3IGZyb20gXCIuLi92aWV3cy9JbmRleFZpZXdcIjtcclxuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcclxuaW1wb3J0IExheW91dFZpZXcgZnJvbSAnLi4vdmlld3MvTGF5b3V0Vmlldy52dWUnXHJcbmltcG9ydCB7IExvZ2luVmlldywgUmVnaXN0ZXJWaWV3LCBBY2NvdW50TGF5b3V0LCB9IGZyb20gJy4uL3ZpZXdzL2FjY291bnQnXHJcbi8vaW1wb3J0IHsgSG9tZVZpZXcgfSAgZnJvbSAnLi4vdmlld3MvYmFzaWMnXHJcbmltcG9ydCB7IFJlZ2lzdGVyUGFnZXNWaWV3LCAgQWJvdXRQYWdlVmlldywgSGVyb1BhZ2VWaWV3LCBDb250YWN0UGFnZVZpZXcsIFJldmlld1BhZ2VWaWV3LCBNZW51UGFnZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvY2xpZW50XCJcclxuaW1wb3J0IHsgQ3JlYXRlVGFyZ2V0VmlldywgU2F2aW5nc1RhcmdldFZpZXcsIFRhcmdldFZpZXcsIFN0YXJ0U2F2aW5nVmlldywgRGFzaGJvYXJkVmlldyB9ICBmcm9tICcuLi92aWV3cy90YXJnZXRzJ1xyXG4vL2ltcG9ydCB7IENyZWF0ZUNvbnRhY3RWaWV3LCBFZGl0VXNlckluZm9WaWV3LCBDcmVhdGVJbWdWaWV3LCBUYXJnZXRWaWV3LCBTdGFydFNhdmluZ1ZpZXcsIFNpbmdsZVNhdmluZ3NWaWV3IH0gIGZyb20gJy4uL3ZpZXdzL2Zvcm1zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSBcImFsZXJ0aWZ5anNcIlxyXG5cclxuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vc3RvcmVzL2dsb2JhbHNcIjtcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG4vKlxyXG5jb25zb2xlLmxvZyhnbG9iYWwuc3RhdGUpXHJcbmlmIChnbG9iYWwuc3RhdGUubG9nZ2VkSW4pe1xyXG4gIGNvbnNvbGUubG9nKGp3dF9kZWNvZGUoZ2xvYmFsLnN0YXRlLmRhdGEudXNlci5hY2Nlc3NfdG9rZW4gKSlcclxufSovXHJcbmZ1bmN0aW9uIGNoZWNrVGltZSh0b2tlbil7XHJcbiAgaWYgKHRva2VuKXtcclxuICAgIHZhciBkZWMgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgY29uc29sZS5sb2coZGVjLmV4cClcclxuICB9XHJcbiAgcmV0dXJuIFwibm8gdG9rZW5cIlxyXG59XHJcbmZ1bmN0aW9uIGd1YXJkQXV0aCh0bywgZnJvbSwgbmV4dClcclxue1xyXG52YXIgaXNMb2dnZWRJbiA9IGdsb2JhbC5zdGF0ZS5kYXRhLmxvZ2dlZEluO1xyXG5pZihpc0xvZ2dlZEluKSB7XHJcbiAgLy9jaGVja1RpbWUoZ2xvYmFsLnN0YXRlLmRhdGEudXNlci5hY2Nlc3NfdG9rZW4pXHJcblx0bmV4dCgnLycpLFxyXG5cdGFsZXJ0aWZ5Lm5vdGlmeShcIkFscmVhZHkgbG9nZ2VkIGluXCIpLy8gYWxsb3cgdG8gZW50ZXIgcm91dGUgXHJcblx0fSBlbHNle1xyXG4gICAgbmV4dCgpOyAvLyBnbyB0byAnL2xvZ2luJzsgICAgXHJcblx0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbmZ1bmN0aW9uIGd1YXJkTXlyb3V0ZSh0bywgZnJvbSwgbmV4dClcclxue1xyXG4gIHZhciBpc0xvZ2dlZEluID0gZ2xvYmFsLnN0YXRlLmxvZ2dlZEluO1xyXG5pZihpc0xvZ2dlZEluICE9PSBudWxsKSB7XHJcbiAgY2hlY2tUaW1lKGdsb2JhbC5zdGF0ZS5kYXRhLmFjY2Vzc190b2tlbilcclxuICBnbG9iYWwudmVyaWZ5VG9rZW4oZ2xvYmFsLnN0YXRlLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gIG5leHQoKTsgLy8gYWxsb3cgdG8gZW50ZXIgcm91dGVcclxuIH0gZWxzZXtcclxuICAvLy9nbG9iYWwucmVmcmVzaFRva2VuKCkgXHJcbiAgbmV4dCgnL2FjY291bnQvbG9naW4nKTsgLy8gZ28gdG8gJy9sb2dpbic7XHJcbiB9XHJcbn1cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvYWNjb3VudCcsXHJcbiAgICBuYW1lOiAnYWNjb3VudCcsXHJcbiAgICBjb21wb25lbnQ6IEFjY291bnRMYXlvdXQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpblZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlclZpZXd9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zZXR1cCcsXHJcbiAgICBuYW1lOiAnU2V0dXAnLFxyXG4gICAgY29tcG9uZW50OiBMYXlvdXRWaWV3LFxyXG4gICAgYmVmb3JlRW50ZXI6IGd1YXJkTXlyb3V0ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBSZWdpc3RlclBhZ2VzVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCI6cGFnZW5hdlwiLCBjb21wb25lbnQ6IEFib3V0UGFnZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiaG9tZVwiLCBjb21wb25lbnQ6IEhlcm9QYWdlVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCJtZW51XCIsIGNvbXBvbmVudDogTWVudVBhZ2VWaWV3fSxcclxuICAgICAgeyBwYXRoOiBcInJldmlld1wiLCBjb21wb25lbnQ6IFJldmlld1BhZ2VWaWV3fSxcclxuICAgICAgeyBwYXRoOiBcImNvbnRhY3RcIiwgY29tcG9uZW50OiBDb250YWN0UGFnZVZpZXd9LFxyXG4gICAgICAvKlxyXG4gICAgICB7IHBhdGg6IFwiZWRpdC86aWRcIiwgY29tcG9uZW50OiBFZGl0Q2xpZW50Vmlld30sXHJcbiAgICAgIHsgcGF0aDogXCJkYXNoYm9hcmRcIiwgY29tcG9uZW50OiBEYXNoYm9hcmRWaWV3fSxcclxuICAgICAgeyBwYXRoOiBcImF0dGVuZGFuY2VcIiwgY29tcG9uZW50OiBBdHRlbmRhbmNlVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCJ1c2VyLzppZFwiLCBjb21wb25lbnQ6IFVzZXJWaWV3fSwqL1xyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9kYXNoYm9hcmQnLFxyXG4gICAgbmFtZTogJ0Rhc2hib2FyZCcsXHJcbiAgICBjb21wb25lbnQ6IExheW91dFZpZXcsXHJcbiAgICBiZWZvcmVFbnRlcjogZ3VhcmRNeXJvdXRlLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiAnJywgIGNvbXBvbmVudDogRGFzaGJvYXJkVmlldywgbmFtZTogXCJkYXNoYm9hZC1ob21lXCJ9LFxyXG4gICAgICAvKlxyXG4gICAgICB7IHBhdGg6ICdjcmVhdGUnLCAgY29tcG9uZW50OiBDcmVhdGVUYXJnZXRWaWV3IH0sXHJcbiAgICAgIHsgcGF0aDogJ3NhdmluZ3MnLCAgY29tcG9uZW50OiBTYXZpbmdzVGFyZ2V0Vmlld30sXHJcbiAgICAgIHsgcGF0aDogJ3NhdmluZ3MvOmlkJywgIGNvbXBvbmVudDogU2luZ2xlU2F2aW5nc1ZpZXd9LFxyXG4gICAgICB7IHBhdGg6ICdzdGFydCcsICBjb21wb25lbnQ6ICBTdGFydFNhdmluZ1ZpZXcgfSxcclxuICAgICAgKi9cclxuICAgIF1cclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBuYW1lOiAnSG9tZScsXHJcbiAgICBjb21wb25lbnQ6IEluZGV4VmlldyxcclxuLy9iZWZvcmVFbnRlcjogZ3VhcmRNeXJvdXRlLFxyXG4gIH0sXHJcblxyXG4ge1xyXG4gICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICBuYW1lOiAnQWJvdXQnLFxyXG4gICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcclxuICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4uL3ZpZXdzL0Fib3V0Vmlldy52dWUnKSwgXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoXHJcblx0ICAvL3Byb2Nlc3MuZW52LkJBU0VfVVJMXHJcblx0ICApLFxyXG4gIHJvdXRlcyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c37486beb4873cf4"; }
/******/ }();
/******/ 
/******/ }
);