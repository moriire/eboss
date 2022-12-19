/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _Bubbles_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bubbles.vue */ \"./src/Bubbles.vue\");\n/* harmony import */ var _Bubbles_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Bubbles_vue__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n //import alertify from \"alertifyjs\"\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)((_Bubbles_vue__WEBPACK_IMPORTED_MODULE_1___default())).use(_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount('#bubbles');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL21haW4uanM/ZmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXHJcbmltcG9ydCBCdWJibGVzIGZyb20gJy4vQnViYmxlcy52dWUnXHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXHJcblxyXG4vL2ltcG9ydCBhbGVydGlmeSBmcm9tIFwiYWxlcnRpZnlqc1wiXHJcblxyXG5jcmVhdGVBcHAoQnViYmxlcykudXNlKHJvdXRlcikubW91bnQoJyNidWJibGVzJykiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Bubbles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bubbles */ \"./src/Bubbles.vue\");\n/* harmony import */ var _Bubbles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Bubbles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_IndexView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/IndexView */ \"./src/views/IndexView.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/LayoutView.vue */ \"./src/views/LayoutView.vue\");\n/* harmony import */ var _views_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/account */ \"./src/views/account/index.js\");\n/* harmony import */ var _views_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/client */ \"./src/views/client/index.js\");\n/* harmony import */ var _views_targets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/targets */ \"./src/views/targets/index.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _stores_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/globals */ \"./src/stores/globals.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* eslint-disable */\n\n\n\n\n //import { HomeView }  from '../views/basic'\n\n\n //import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'\n\n\n\n\n/*\r\nconsole.log(global.state)\r\nif (global.state.loggedIn){\r\n  console.log(jwt_decode(global.state.data.user.access_token ))\r\n}*/\n\nfunction checkTime(token) {\n  if (token) {\n    var dec = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(token);\n    console.log(dec.exp);\n  }\n\n  return \"no token\";\n}\n\nfunction guardAuth(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.loggedIn;\n\n  if (isLoggedIn) {\n    //checkTime(global.state.data.user.access_token)\n    next('/'), alertifyjs__WEBPACK_IMPORTED_MODULE_6___default().notify(\"Already logged in\"); // allow to enter route \n  } else {\n    next(); // go to '/login';    \n  }\n}\n\nfunction guardMyroute(to, from, next) {\n  var isLoggedIn = _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.loggedIn;\n\n  if (isLoggedIn !== null) {\n    checkTime(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    _stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].verifyToken(_stores_globals__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.data.access_token);\n    next(); // allow to enter route\n  } else {\n    ///global.refreshToken() \n    next('/account/login'); // go to '/login';\n  }\n}\n\nconst routes = [{\n  path: '/account',\n  name: 'account',\n  component: _views_account__WEBPACK_IMPORTED_MODULE_3__.AccountLayout,\n  children: [{\n    path: \"login\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.LoginView\n  }, {\n    path: \"register\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_3__.RegisterView\n  }]\n}, {\n  path: '/setup',\n  name: 'Setup',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  beforeEnter: guardMyroute,\n  children: [{\n    path: \"\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.RegisterPagesView\n  }, {\n    path: \":pagenav\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.AboutPageView\n  }, {\n    path: \"add/room\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.RoomPageView\n  }, {\n    path: \"add/menu\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.MenuPageView\n  }, {\n    path: \"add/review\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.ReviewPageView\n  }, {\n    path: \"add/contact\",\n    component: _views_client__WEBPACK_IMPORTED_MODULE_4__.ContactPageView\n  }\n  /*\r\n  { path: \"edit/:id\", component: EditClientView},\r\n  { path: \"dashboard\", component: DashboardView},\r\n  { path: \"attendance\", component: AttendanceView},\r\n  { path: \"user/:id\", component: UserView},*/\n  ]\n}, {\n  path: '/dashboard',\n  name: 'Dashboard',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  beforeEnter: guardMyroute,\n  children: [{\n    path: '',\n    component: _views_targets__WEBPACK_IMPORTED_MODULE_5__.DashboardView,\n    name: \"dashboad-home\"\n  }\n  /*\r\n  { path: 'create',  component: CreateTargetView },\r\n  { path: 'savings',  component: SavingsTargetView},\r\n  { path: 'savings/:id',  component: SingleSavingsView},\r\n  { path: 'start',  component:  StartSavingView },\r\n  */\n  ]\n}, {\n  path: '/',\n  name: 'Home',\n  component: _views_IndexView__WEBPACK_IMPORTED_MODULE_1__[\"default\"] //beforeEnter: guardMyroute,\n\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_9__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFMQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUxBO0FBaUJBO0FBQ0E7QUFDQTs7QUFIQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUdBO0FBSkE7QUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3JvdXRlci9pbmRleC5qcz81YWE0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBCdWJibGVzIGZyb20gXCIuLi9CdWJibGVzXCJcclxuaW1wb3J0IEluZGV4VmlldyBmcm9tIFwiLi4vdmlld3MvSW5kZXhWaWV3XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlV2ViSGlzdG9yeSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXRWaWV3IGZyb20gJy4uL3ZpZXdzL0xheW91dFZpZXcudnVlJ1xyXG5pbXBvcnQgeyBMb2dpblZpZXcsIFJlZ2lzdGVyVmlldywgQWNjb3VudExheW91dCwgfSBmcm9tICcuLi92aWV3cy9hY2NvdW50J1xyXG4vL2ltcG9ydCB7IEhvbWVWaWV3IH0gIGZyb20gJy4uL3ZpZXdzL2Jhc2ljJ1xyXG5pbXBvcnQgeyBSZWdpc3RlclBhZ2VzVmlldywgIEFib3V0UGFnZVZpZXcsIFJvb21QYWdlVmlldywgSGVyb1BhZ2VWaWV3LCBDb250YWN0UGFnZVZpZXcsIFJldmlld1BhZ2VWaWV3LCBNZW51UGFnZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvY2xpZW50XCJcclxuaW1wb3J0IHsgQ3JlYXRlVGFyZ2V0VmlldywgU2F2aW5nc1RhcmdldFZpZXcsIFRhcmdldFZpZXcsIFN0YXJ0U2F2aW5nVmlldywgRGFzaGJvYXJkVmlldyB9ICBmcm9tICcuLi92aWV3cy90YXJnZXRzJ1xyXG4vL2ltcG9ydCB7IENyZWF0ZUNvbnRhY3RWaWV3LCBFZGl0VXNlckluZm9WaWV3LCBDcmVhdGVJbWdWaWV3LCBUYXJnZXRWaWV3LCBTdGFydFNhdmluZ1ZpZXcsIFNpbmdsZVNhdmluZ3NWaWV3IH0gIGZyb20gJy4uL3ZpZXdzL2Zvcm1zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSBcImFsZXJ0aWZ5anNcIlxyXG5cclxuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi4vc3RvcmVzL2dsb2JhbHNcIjtcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG4vKlxyXG5jb25zb2xlLmxvZyhnbG9iYWwuc3RhdGUpXHJcbmlmIChnbG9iYWwuc3RhdGUubG9nZ2VkSW4pe1xyXG4gIGNvbnNvbGUubG9nKGp3dF9kZWNvZGUoZ2xvYmFsLnN0YXRlLmRhdGEudXNlci5hY2Nlc3NfdG9rZW4gKSlcclxufSovXHJcbmZ1bmN0aW9uIGNoZWNrVGltZSh0b2tlbil7XHJcbiAgaWYgKHRva2VuKXtcclxuICAgIHZhciBkZWMgPSBqd3RfZGVjb2RlKHRva2VuKVxyXG4gICAgY29uc29sZS5sb2coZGVjLmV4cClcclxuICB9XHJcbiAgcmV0dXJuIFwibm8gdG9rZW5cIlxyXG59XHJcbmZ1bmN0aW9uIGd1YXJkQXV0aCh0bywgZnJvbSwgbmV4dClcclxue1xyXG52YXIgaXNMb2dnZWRJbiA9IGdsb2JhbC5zdGF0ZS5kYXRhLmxvZ2dlZEluO1xyXG5pZihpc0xvZ2dlZEluKSB7XHJcbiAgLy9jaGVja1RpbWUoZ2xvYmFsLnN0YXRlLmRhdGEudXNlci5hY2Nlc3NfdG9rZW4pXHJcblx0bmV4dCgnLycpLFxyXG5cdGFsZXJ0aWZ5Lm5vdGlmeShcIkFscmVhZHkgbG9nZ2VkIGluXCIpLy8gYWxsb3cgdG8gZW50ZXIgcm91dGUgXHJcblx0fSBlbHNle1xyXG4gICAgbmV4dCgpOyAvLyBnbyB0byAnL2xvZ2luJzsgICAgXHJcblx0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbmZ1bmN0aW9uIGd1YXJkTXlyb3V0ZSh0bywgZnJvbSwgbmV4dClcclxue1xyXG4gIHZhciBpc0xvZ2dlZEluID0gZ2xvYmFsLnN0YXRlLmxvZ2dlZEluO1xyXG5pZihpc0xvZ2dlZEluICE9PSBudWxsKSB7XHJcbiAgY2hlY2tUaW1lKGdsb2JhbC5zdGF0ZS5kYXRhLmFjY2Vzc190b2tlbilcclxuICBnbG9iYWwudmVyaWZ5VG9rZW4oZ2xvYmFsLnN0YXRlLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gIG5leHQoKTsgLy8gYWxsb3cgdG8gZW50ZXIgcm91dGVcclxuIH0gZWxzZXtcclxuICAvLy9nbG9iYWwucmVmcmVzaFRva2VuKCkgXHJcbiAgbmV4dCgnL2FjY291bnQvbG9naW4nKTsgLy8gZ28gdG8gJy9sb2dpbic7XHJcbiB9XHJcbn1cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvYWNjb3VudCcsXHJcbiAgICBuYW1lOiAnYWNjb3VudCcsXHJcbiAgICBjb21wb25lbnQ6IEFjY291bnRMYXlvdXQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpblZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgY29tcG9uZW50OiBSZWdpc3RlclZpZXd9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zZXR1cCcsXHJcbiAgICBuYW1lOiAnU2V0dXAnLFxyXG4gICAgY29tcG9uZW50OiBMYXlvdXRWaWV3LFxyXG4gICAgYmVmb3JlRW50ZXI6IGd1YXJkTXlyb3V0ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBSZWdpc3RlclBhZ2VzVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCI6cGFnZW5hdlwiLCBjb21wb25lbnQ6IEFib3V0UGFnZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiYWRkL3Jvb21cIiwgY29tcG9uZW50OiBSb29tUGFnZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiYWRkL21lbnVcIiwgY29tcG9uZW50OiBNZW51UGFnZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiYWRkL3Jldmlld1wiLCBjb21wb25lbnQ6IFJldmlld1BhZ2VWaWV3fSxcclxuICAgICAgeyBwYXRoOiBcImFkZC9jb250YWN0XCIsIGNvbXBvbmVudDogQ29udGFjdFBhZ2VWaWV3fSxcclxuICAgICAgLypcclxuICAgICAgeyBwYXRoOiBcImVkaXQvOmlkXCIsIGNvbXBvbmVudDogRWRpdENsaWVudFZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwiZGFzaGJvYXJkXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkVmlld30sXHJcbiAgICAgIHsgcGF0aDogXCJhdHRlbmRhbmNlXCIsIGNvbXBvbmVudDogQXR0ZW5kYW5jZVZpZXd9LFxyXG4gICAgICB7IHBhdGg6IFwidXNlci86aWRcIiwgY29tcG9uZW50OiBVc2VyVmlld30sKi9cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvZGFzaGJvYXJkJyxcclxuICAgIG5hbWU6ICdEYXNoYm9hcmQnLFxyXG4gICAgY29tcG9uZW50OiBMYXlvdXRWaWV3LFxyXG4gICAgYmVmb3JlRW50ZXI6IGd1YXJkTXlyb3V0ZSxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogJycsICBjb21wb25lbnQ6IERhc2hib2FyZFZpZXcsIG5hbWU6IFwiZGFzaGJvYWQtaG9tZVwifSxcclxuICAgICAgLypcclxuICAgICAgeyBwYXRoOiAnY3JlYXRlJywgIGNvbXBvbmVudDogQ3JlYXRlVGFyZ2V0VmlldyB9LFxyXG4gICAgICB7IHBhdGg6ICdzYXZpbmdzJywgIGNvbXBvbmVudDogU2F2aW5nc1RhcmdldFZpZXd9LFxyXG4gICAgICB7IHBhdGg6ICdzYXZpbmdzLzppZCcsICBjb21wb25lbnQ6IFNpbmdsZVNhdmluZ3NWaWV3fSxcclxuICAgICAgeyBwYXRoOiAnc3RhcnQnLCAgY29tcG9uZW50OiAgU3RhcnRTYXZpbmdWaWV3IH0sXHJcbiAgICAgICovXHJcbiAgICBdXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbmFtZTogJ0hvbWUnLFxyXG4gICAgY29tcG9uZW50OiBJbmRleFZpZXcsXHJcbi8vYmVmb3JlRW50ZXI6IGd1YXJkTXlyb3V0ZSxcclxuICB9LFxyXG5cclxuIHtcclxuICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgbmFtZTogJ0Fib3V0JyxcclxuICAgIC8vIHJvdXRlIGxldmVsIGNvZGUtc3BsaXR0aW5nXHJcbiAgICAvLyB0aGlzIGdlbmVyYXRlcyBhIHNlcGFyYXRlIGNodW5rIChhYm91dC5baGFzaF0uanMpIGZvciB0aGlzIHJvdXRlXHJcbiAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxyXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhYm91dFwiICovICcuLi92aWV3cy9BYm91dFZpZXcudnVlJyksIFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcclxuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KFxyXG5cdCAgLy9wcm9jZXNzLmVudi5CQVNFX1VSTFxyXG5cdCAgKSxcclxuICByb3V0ZXMsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ }),

/***/ "./src/Bubbles.vue":
/*!*************************!*\
  !*** ./src/Bubbles.vue ***!
  \*************************/
/***/ (function() {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "159e7eee2756a96e"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ !function() {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"app": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = function(chunkId, promises) {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = function(event) {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = function(event) {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"] = function(chunkId, moreModules, runtime) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = function() {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var runtime = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		return __webpack_require__.O(result);
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkfrontend"] = (typeof self !== 'undefined' ? self : this)["webpackChunkfrontend"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ }();
/******/ 
/******/ }
);