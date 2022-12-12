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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/LayoutView.vue */ \"./src/views/LayoutView.vue\");\n/* harmony import */ var _views_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/account */ \"./src/views/account/index.js\");\n/* harmony import */ var _views_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/basic */ \"./src/views/basic/index.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable */\n\n\n\n //import { CreateContactView, EditUserInfoView, CreateImgView, TargetView, StartSavingView, SingleSavingsView }  from '../views/forms'\n\n //import globals from \"../stores/globals\";\n\nfunction guardAuth(to, from, next) {\n  var isLoggedIn = globals.state.loggedIn;\n\n  if (isLoggedIn) {\n    next('/'), alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().notify(\"Already logged in\"); // allow to enter route \n  } else {\n    next(); // go to '/login';    \n  }\n}\n\nfunction guardMyroute(to, from, next) {\n  var isLoggedIn = globals.state.loggedIn;\n\n  if (isLoggedIn) {\n    globals.verifyToken();\n    next(); // allow to enter route\n  } else {\n    next(); //'/account/login'); // go to '/login';\n  }\n}\n\nconst routes = [{\n  path: '/account',\n  name: 'account',\n  component: _views_account__WEBPACK_IMPORTED_MODULE_1__.AccountLayout,\n  children: [{\n    path: \"login\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_1__.LoginView\n  }, {\n    path: \"register\",\n    component: _views_account__WEBPACK_IMPORTED_MODULE_1__.RegisterView\n  }]\n}, {\n  path: '/user',\n  name: 'Basic',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  //beforeEnter: guardMyroute,\n  children: [{\n    path: ':user',\n    component: _views_basic__WEBPACK_IMPORTED_MODULE_2__.HomeView\n  } //{ path:':user', component: HomeView },\n  ]\n}, {\n  path: '/',\n  name: 'Basic',\n  component: _views_LayoutView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"] //beforeEnter: guardMyroute,\n\n}, {\n  path: '/about',\n  name: 'About',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBOztBQUlBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFZQTtBQUNBO0FBQ0E7O0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFHQTtBQUpBO0FBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIvaW5kZXguanM/NWFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xyXG5pbXBvcnQgTGF5b3V0VmlldyBmcm9tICcuLi92aWV3cy9MYXlvdXRWaWV3LnZ1ZSdcclxuaW1wb3J0IHsgTG9naW5WaWV3LCBSZWdpc3RlclZpZXcsIEFjY291bnRMYXlvdXQsIH0gZnJvbSAnLi4vdmlld3MvYWNjb3VudCdcclxuaW1wb3J0IHsgSG9tZVZpZXcgfSAgZnJvbSAnLi4vdmlld3MvYmFzaWMnXHJcblxyXG4vL2ltcG9ydCB7IENyZWF0ZUNvbnRhY3RWaWV3LCBFZGl0VXNlckluZm9WaWV3LCBDcmVhdGVJbWdWaWV3LCBUYXJnZXRWaWV3LCBTdGFydFNhdmluZ1ZpZXcsIFNpbmdsZVNhdmluZ3NWaWV3IH0gIGZyb20gJy4uL3ZpZXdzL2Zvcm1zJ1xyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSBcImFsZXJ0aWZ5anNcIlxyXG5cclxuLy9pbXBvcnQgZ2xvYmFscyBmcm9tIFwiLi4vc3RvcmVzL2dsb2JhbHNcIjtcclxuXHJcbmZ1bmN0aW9uIGd1YXJkQXV0aCh0bywgZnJvbSwgbmV4dClcclxue1xyXG52YXIgaXNMb2dnZWRJbiA9IGdsb2JhbHMuc3RhdGUubG9nZ2VkSW47XHJcbmlmKGlzTG9nZ2VkSW4pIHtcclxuXHRuZXh0KCcvJyksXHJcblx0YWxlcnRpZnkubm90aWZ5KFwiQWxyZWFkeSBsb2dnZWQgaW5cIikvLyBhbGxvdyB0byBlbnRlciByb3V0ZSBcclxuXHR9IGVsc2V7XHJcbiAgICBuZXh0KCk7IC8vIGdvIHRvICcvbG9naW4nOyAgICBcclxuXHR9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuZnVuY3Rpb24gZ3VhcmRNeXJvdXRlKHRvLCBmcm9tLCBuZXh0KVxyXG57XHJcblx0dmFyIGlzTG9nZ2VkSW4gPSBnbG9iYWxzLnN0YXRlLmxvZ2dlZEluO1xyXG5pZihpc0xvZ2dlZEluKSB7XHJcbiAgZ2xvYmFscy52ZXJpZnlUb2tlbigpXHJcbiAgbmV4dCgpOyAvLyBhbGxvdyB0byBlbnRlciByb3V0ZVxyXG4gfSBlbHNle1xyXG4gIG5leHQoKS8vJy9hY2NvdW50L2xvZ2luJyk7IC8vIGdvIHRvICcvbG9naW4nO1xyXG4gfVxyXG59XHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnL2FjY291bnQnLFxyXG4gICAgbmFtZTogJ2FjY291bnQnLFxyXG4gICAgY29tcG9uZW50OiBBY2NvdW50TGF5b3V0LFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5WaWV3fSxcclxuICAgICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJWaWV3fSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvdXNlcicsXHJcbiAgICBuYW1lOiAnQmFzaWMnLFxyXG4gICAgY29tcG9uZW50OiBMYXlvdXRWaWV3LFxyXG4vL2JlZm9yZUVudGVyOiBndWFyZE15cm91dGUsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6Jzp1c2VyJywgY29tcG9uZW50OiBIb21lVmlldyB9LFxyXG4gICAgICAvL3sgcGF0aDonOnVzZXInLCBjb21wb25lbnQ6IEhvbWVWaWV3IH0sXHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbmFtZTogJ0Jhc2ljJyxcclxuICAgIGNvbXBvbmVudDogTGF5b3V0VmlldyxcclxuLy9iZWZvcmVFbnRlcjogZ3VhcmRNeXJvdXRlLFxyXG4gIH0sXHJcblxyXG4ge1xyXG4gICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICBuYW1lOiAnQWJvdXQnLFxyXG4gICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcclxuICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4uL3ZpZXdzL0Fib3V0Vmlldy52dWUnKSwgXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xyXG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoXHJcblx0ICAvL3Byb2Nlc3MuZW52LkJBU0VfVVJMXHJcblx0ICApLFxyXG4gIHJvdXRlcyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f01fbca59c40e69b"; }
/******/ }();
/******/ 
/******/ }
);