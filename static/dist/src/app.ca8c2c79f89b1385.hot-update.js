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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bubbles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bubbles */ \"./src/Bubbles.vue\");\n/* harmony import */ var _views_IndexView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/IndexView */ \"./src/views/IndexView.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/LayoutView.vue */ \"./src/views/LayoutView.vue\");\n/* harmony import */ var _views_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/account */ \"./src/views/account/index.js\");\n/* harmony import */ var _views_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/client */ \"./src/views/client/index.js\");\n/* harmony import */ var _views_targets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/targets */ \"./src/views/targets/index.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stores_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/globals */ \"./src/stores/globals.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* eslint-disable */\n\n\n\n\n //import { HomeView }  from '../views/basic'\n\n\n //import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'\n\n\n\n\n/*\r\nconsole.log(global.state)\r\nif (global.state.loggedIn){\r\n  console.log(jwt_decode(global.state.data.user.access_token ))\r\n}*/\n\nfunction checkTime(token) {\n  if (token) {\n    var dec = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n    console.log(dec.exp);\n  }\n\n  return \"no token\";\n}\n\nfunction guardAuth(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.loggedIn;\n\n  if (isLoggedIn) {\n    //checkTime(global.state.data.user.access_token)\n    next('/'), alertifyjs__WEBPACK_IMPORTED_MODULE_6___default().notify(\"Already logged in\"); // allow to enter route \n  } else {\n    next(); // go to '/login';    \n  }\n}\n\nfunction guardMyroute(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.loggedIn;\n\n  if (isLoggedIn !== null) {\n    checkTime(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].verifyToken(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    next(); // allow to enter route\n  } else {\n    ///global.refreshToken() \n    next('/account/login'); // go to '/login';\n  }\n}\n\nconst routes = [{\n  path: '/account',\n  name: 'account',\n  component: _views_account__WEBPACK_IMPORTED_MODULE_3__.AccountLayout,\n  children: [{\n    path: \"login\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.LoginView\n  }, {\n    path: \"register\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.RegisterView\n  }]\n}, {\n  path: '/setup',\n  name: 'Setup',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  beforeEnter: guardMyroute,\n  children: [{\n    path: \"add/:section\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.RegisterPagesView\n  }, {\n    path: \"add/:section\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.RegisterPagesView\n  }, {\n    path: \"add/:section\",\n    component: HomePageView\n  }, {\n    path: \"\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.ListClientView\n  }\n  /*\r\n  { path: \"edit/:id\", component: EditClientView},\r\n  { path: \"dashboard\", component: DashboardView},\r\n  { path: \"attendance\", component: AttendanceView},\r\n  { path: \"user/:id\", component: UserView},*/\n  ]\n}, {\n  path: '/dashboard',\n  name: 'Dashboard',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  children: [{\n    path: '',\n    component: _views_targets__WEBPACK_IMPORTED_MODULE_5__.DashboardView,\n    name: \"dashboad-home\"\n  }\n  /*\r\n  { path: 'create',  component: CreateTargetView },\r\n  { path: 'savings',  component: SavingsTargetView},\r\n  { path: 'savings/:id',  component: SingleSavingsView},\r\n  { path: 'start',  component:  StartSavingView },\r\n  */\n  ]\n}, {\n  path: '/',\n  name: 'Home',\n  component: _views_IndexView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] //beforeEnter: guardMyroute,\n\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUxBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUpBO0FBZ0JBO0FBQ0E7QUFDQTs7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUdBO0FBSkE7QUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRlci9pbmRleC5qcz81YWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBCdWJibGVzIGZyb20gXCIuLi9CdWJibGVzXCJcclxuaW1wb3J0IEluZGV4VmlldyBmcm9tIFwiLi4vdmlld3MvSW5kZXhWaWV3XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGlzdG9yeSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXRWaWV3IGZyb20gJy4uL3ZpZXdzL0xheW91dFZpZXcudnVlJ1xyXG5pbXBvcnQgeyBMb2dpblZpZXcsIFJlZ2lzdGVyVmlldywgQWNjb3VudExheW91dCwgfSBmcm9tICcuLi92aWV3cy9hY2NvdW50J1xyXG4vL2ltcG9ydCB7IEhvbWVWaWV3IH0gIGZyb20gJy4uL3ZpZXdzL2Jhc2ljJ1xyXG5pbXBvcnQgeyBSZWdpc3RlclBhZ2VzVmlldywgTGlzdENsaWVudFZpZXcsIENsaWVudExheW91dH0gZnJvbSBcIi4uL3ZpZXdzL2NsaWVudFwiXHJcbmltcG9ydCB7IENyZWF0ZVRhcmdldFZpZXcsIFNhdmluZ3NUYXJnZXRWaWV3LCBUYXJnZXRWaWV3LCBTdGFydFNhdmluZ1ZpZXcsIERhc2hib2FyZFZpZXcgfSAgZnJvbSAnLi4vdmlld3MvdGFyZ2V0cydcclxuLy9pbXBvcnQgeyBDcmVhdGVDb250YWN0VmlldywgRWRpdFVzZXJJbmZvVmlldywgQ3JlYXRlSW1nVmlldywgVGFyZ2V0VmlldywgU3RhcnRTYXZpbmdWaWV3LCBTaW5nbGVTYXZpbmdzVmlldyB9ICBmcm9tICcuLi92aWV3cy9mb3JtcydcclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gXCJhbGVydGlmeWpzXCJcclxuXHJcbmltcG9ydCBnbG9iYWwgZnJvbSBcIi4uL3N0b3Jlcy9nbG9iYWxzXCI7XHJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCJcclxuLypcclxuY29uc29sZS5sb2coZ2xvYmFsLnN0YXRlKVxyXG5pZiAoZ2xvYmFsLnN0YXRlLmxvZ2dlZEluKXtcclxuICBjb25zb2xlLmxvZyhqd3RfZGVjb2RlKGdsb2JhbC5zdGF0ZS5kYXRhLnVzZXIuYWNjZXNzX3Rva2VuICkpXHJcbn0qL1xyXG5mdW5jdGlvbiBjaGVja1RpbWUodG9rZW4pe1xyXG4gIGlmICh0b2tlbil7XHJcbiAgICB2YXIgZGVjID0gand0X2RlY29kZSh0b2tlbilcclxuICAgIGNvbnNvbGUubG9nKGRlYy5leHApXHJcbiAgfVxyXG4gIHJldHVybiBcIm5vIHRva2VuXCJcclxufVxyXG5mdW5jdGlvbiBndWFyZEF1dGgodG8sIGZyb20sIG5leHQpXHJcbntcclxudmFyIGlzTG9nZ2VkSW4gPSBnbG9iYWwuc3RhdGUuZGF0YS5sb2dnZWRJbjtcclxuaWYoaXNMb2dnZWRJbikge1xyXG4gIC8vY2hlY2tUaW1lKGdsb2JhbC5zdGF0ZS5kYXRhLnVzZXIuYWNjZXNzX3Rva2VuKVxyXG5cdG5leHQoJy8nKSxcclxuXHRhbGVydGlmeS5ub3RpZnkoXCJBbHJlYWR5IGxvZ2dlZCBpblwiKS8vIGFsbG93IHRvIGVudGVyIHJvdXRlIFxyXG5cdH0gZWxzZXtcclxuICAgIG5leHQoKTsgLy8gZ28gdG8gJy9sb2dpbic7ICAgIFxyXG5cdH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5mdW5jdGlvbiBndWFyZE15cm91dGUodG8sIGZyb20sIG5leHQpXHJcbntcclxuICB2YXIgaXNMb2dnZWRJbiA9IGdsb2JhbC5zdGF0ZS5sb2dnZWRJbjtcclxuaWYoaXNMb2dnZWRJbiAhPT0gbnVsbCkge1xyXG4gIGNoZWNrVGltZShnbG9iYWwuc3RhdGUuZGF0YS5hY2Nlc3NfdG9rZW4pXHJcbiAgZ2xvYmFsLnZlcmlmeVRva2VuKGdsb2JhbC5zdGF0ZS5kYXRhLmFjY2Vzc190b2tlbilcclxuICBuZXh0KCk7IC8vIGFsbG93IHRvIGVudGVyIHJvdXRlXHJcbiB9IGVsc2V7XHJcbiAgLy8vZ2xvYmFsLnJlZnJlc2hUb2tlbigpIFxyXG4gIG5leHQoJy9hY2NvdW50L2xvZ2luJyk7IC8vIGdvIHRvICcvbG9naW4nO1xyXG4gfVxyXG59XHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnL2FjY291bnQnLFxyXG4gICAgbmFtZTogJ2FjY291bnQnLFxyXG4gICAgY29tcG9uZW50OiBBY2NvdW50TGF5b3V0LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5WaWV3fSxcclxuICAgICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJWaWV3fSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvc2V0dXAnLFxyXG4gICAgbmFtZTogJ1NldHVwJyxcclxuICAgIGNvbXBvbmVudDogTGF5b3V0VmlldyxcclxuICAgIGJlZm9yZUVudGVyOiBndWFyZE15cm91dGUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6IFwiYWRkLzpzZWN0aW9uXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlc1ZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiYWRkLzpzZWN0aW9uXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJQYWdlc1ZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiYWRkLzpzZWN0aW9uXCIsIGNvbXBvbmVudDogSG9tZVBhZ2VWaWV3fSxcclxuICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExpc3RDbGllbnRWaWV3fSxcclxuICAgICAgLypcclxuICAgICAgeyBwYXRoOiBcImVkaXQvOmlkXCIsIGNvbXBvbmVudDogRWRpdENsaWVudFZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCJhdHRlbmRhbmNlXCIsIGNvbXBvbmVudDogQXR0ZW5kYW5jZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwidXNlci86aWRcIiwgY29tcG9uZW50OiBVc2VyVmlld30sKi9cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gICAgY29tcG9uZW50OiBMYXlvdXRWaWV3LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiAnJywgIGNvbXBvbmVudDogRGFzaGJvYXJkVmlldywgbmFtZTogXCJkYXNoYm9hZC1ob21lXCJ9LFxyXG4gICAgICAvKlxyXG4gICAgICB7IHBhdGg6ICdjcmVhdGUnLCAgY29tcG9uZW50OiBDcmVhdGVUYXJnZXRWaWV3IH0sXHJcbiAgICAgIHsgcGF0aDogJ3NhdmluZ3MnLCAgY29tcG9uZW50OiBTYXZpbmdzVGFyZ2V0Vmlld30sXHJcbiAgICAgIHsgcGF0aDogJ3NhdmluZ3MvOmlkJywgIGNvbXBvbmVudDogU2luZ2xlU2F2aW5nc1ZpZXd9LFxyXG4gICAgICB7IHBhdGg6ICdzdGFydCcsICBjb21wb25lbnQ6ICBTdGFydFNhdmluZ1ZpZXcgfSxcclxuICAgICAgKi9cclxuICAgIF1cclxuXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBuYW1lOiAnSG9tZScsXHJcbiAgICBjb21wb25lbnQ6IEluZGV4VmlldyxcclxuLy9iZWZvcmVFbnRlcjogZ3VhcmRNeXJvdXRlLFxyXG4gIH0sXHJcblxyXG4ge1xyXG4gICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICBuYW1lOiAnQWJvdXQnLFxyXG4gICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcclxuICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4uL3ZpZXdzL0Fib3V0Vmlldy52dWUnKSwgXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoXHJcblx0ICAvL3Byb2Nlc3MuZW52LkJBU0VfVVJMXHJcblx0ICApLFxyXG4gIHJvdXRlcyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f8100983d4806ab7"; }
/******/ }();
/******/ 
/******/ }
);