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

/***/ "./src/stores/globals.js":
/*!*******************************!*\
  !*** ./src/stores/globals.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ \"./src/router/index.js\");\n//<script>\n\n/* eslint-disable */\n\n\n\n\nconst BASE = \"http://127.0.0.1:8000\"; //const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}\n\nalertifyjs__WEBPACK_IMPORTED_MODULE_1___default().set('notifier', 'position', 'top-right');\nconst state = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({\n  data: JSON.parse(localStorage.getItem(\"user\")),\n  loggedIn: localStorage.getItem(\"loggedin\")\n});\nconst $errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({});\n\nconst login = async function (email, password) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/api/auth/login/`, {\n      email,\n      password\n    });\n    const resp = res.data;\n    localStorage.setItem(\"user\", JSON.stringify(resp)); //updateStore(resp);\n\n    localStorage.setItem(\"loggedin\", true), alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().success(\"loggedin\"); //router.push(\"/\")\n\n    location.href = \"/setup/${resp.user.pk}\";\n  } catch (errors) {\n    $errors.code = errors.response.status;\n    $errors.message = \"Username or password error\";\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().error(\"username or password incorrect\");\n  }\n};\n\nconst logout = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/auth/logout/`);\n    const resp = res.data;\n    localStorage.removeItem(\"user\");\n    localStorage.removeItem(\"loggedin\");\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify(\"loggedout\"); //router.push(\"/account/login\")\n\n    location.href = \"/\";\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify(\"errors\");\n  }\n\n  localStorage.removeItem(\"user\");\n};\n\nconst register = async function (kw) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/auth/signup/`, kw);\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify(res.data);\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify(JSON.stringify(errors.response));\n  }\n};\n\nconst isAuthenticated = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(() => Boolean(state.data));\nconst auth = (0,vue__WEBPACK_IMPORTED_MODULE_2__.computed)(() => state.data);\n\nconst authRequired = function () {\n  if (!isAuthenticated) {\n    $router.push(`${BASE}/account/login`);\n  }\n};\n\nalertifyjs__WEBPACK_IMPORTED_MODULE_1___default().notify(\"gggh hhhg hhh\");\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state,\n  //: readonly(state),\n  login,\n  register,\n  isAuthenticated,\n  authRequired,\n  logout,\n  auth,\n  $errors: (0,vue__WEBPACK_IMPORTED_MODULE_2__.readonly)($errors),\n  BASE\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmVzL2dsb2JhbHMuanM/YjVjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLzxzY3JpcHQ+XHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gXCJhbGVydGlmeWpzXCI7XHJcbmltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCwgcmVhZG9ubHkgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkAvcm91dGVyXCI7XHJcbmNvbnN0IEJBU0UgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMFwiXHJcbi8vY29uc3QgY29uZmlnID0geyBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJyA6ICBgQmVhcmVyICR7c3RhdGUudXNlci5hY2Nlc3NfdG9rZW59YCB9fVxyXG5hbGVydGlmeS5zZXQoJ25vdGlmaWVyJywncG9zaXRpb24nLCAndG9wLXJpZ2h0Jyk7XHJcblx0Y29uc3Qgc3RhdGUgPSByZWFjdGl2ZShcclxuXHR7XHJcblx0XHRkYXRhIDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxyXG5cdFx0bG9nZ2VkSW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nZ2VkaW5cIiksXHJcblx0fVxyXG5cdCk7XHJcblx0Y29uc3QgJGVycm9ycz1yZWFjdGl2ZSh7fSk7XHJcblxyXG5cdFxyXG5cdGNvbnN0IGxvZ2luID0gYXN5bmMgZnVuY3Rpb24oZW1haWwsIHBhc3N3b3JkKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0V9L3YxL2FwaS9hdXRoL2xvZ2luL2AsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG5cdFx0XHRjb25zdCByZXNwID0gcmVzLmRhdGFcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcclxuXHRcdFx0Ly91cGRhdGVTdG9yZShyZXNwKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dnZWRpblwiLCB0cnVlKSxcclxuXHRcdFx0YWxlcnRpZnkuc3VjY2VzcyhcImxvZ2dlZGluXCIpXHJcblx0XHRcdC8vcm91dGVyLnB1c2goXCIvXCIpXHJcblx0XHRcdGxvY2F0aW9uLmhyZWY9XCIvc2V0dXAvJHtyZXNwLnVzZXIucGt9XCJcclxuXHRcdH0gY2F0Y2goZXJyb3JzKSB7XHJcblx0XHRcdFx0JGVycm9ycy5jb2RlID0gZXJyb3JzLnJlc3BvbnNlLnN0YXR1cztcclxuXHRcdFx0XHQkZXJyb3JzLm1lc3NhZ2U9IFwiVXNlcm5hbWUgb3IgcGFzc3dvcmQgZXJyb3JcIlxyXG5cdFx0XHRcdGFsZXJ0aWZ5LmVycm9yKFwidXNlcm5hbWUgb3IgcGFzc3dvcmQgaW5jb3JyZWN0XCIpXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbG9nb3V0ID0gYXN5bmMgZnVuY3Rpb24oKXtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vYXV0aC9sb2dvdXQvYClcclxuXHRcdFx0Y29uc3QgcmVzcCA9IHJlcy5kYXRhXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dnZWRpblwiKTtcclxuXHRcdFx0YWxlcnRpZnkubm90aWZ5KFwibG9nZ2Vkb3V0XCIpXHJcblx0XHRcdC8vcm91dGVyLnB1c2goXCIvYWNjb3VudC9sb2dpblwiKVxyXG5cdFx0XHRsb2NhdGlvbi5ocmVmPVwiL1wiO1xyXG5cdFx0fSBjYXRjaChlcnJvcnMpIHtcclxuXHRcdFx0XHRhbGVydGlmeS5ub3RpZnkoXCJlcnJvcnNcIik7XHJcblx0XHR9XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcblxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgZnVuY3Rpb24oa3cpe1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFfS9hdXRoL3NpZ251cC9gLCBrdyApXHJcblx0XHRcdGFsZXJ0aWZ5Lm5vdGlmeShyZXMuZGF0YSk7XHJcblx0XHR9IGNhdGNoKGVycm9ycyl7XHJcblx0XHRcdGFsZXJ0aWZ5Lm5vdGlmeSggSlNPTi5zdHJpbmdpZnkoZXJyb3JzLnJlc3BvbnNlKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaXNBdXRoZW50aWNhdGVkID0gY29tcHV0ZWQoKCkgPT4gQm9vbGVhbihzdGF0ZS5kYXRhKSk7XHJcblx0XHJcblx0Y29uc3QgYXV0aCA9IGNvbXB1dGVkKCgpID0+IHN0YXRlLmRhdGEpO1xyXG5cclxuXHJcblx0Y29uc3QgYXV0aFJlcXVpcmVkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoISBpc0F1dGhlbnRpY2F0ZWQpIHtcclxuXHRcdFx0JHJvdXRlci5wdXNoKGAke0JBU0V9L2FjY291bnQvbG9naW5gKVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5hbGVydGlmeS5ub3RpZnkoXCJnZ2doIGhoaGcgaGhoXCIpXHJcbiBleHBvcnQgZGVmYXVsdCB7IHN0YXRlLFxyXG5cdCAvLzogcmVhZG9ubHkoc3RhdGUpLFxyXG5cdFx0XHRcdCBsb2dpbiwgXHJcblx0XHRcdFx0IHJlZ2lzdGVyLFxyXG5cdFx0XHRcdCBpc0F1dGhlbnRpY2F0ZWQsXHJcblx0XHRcdFx0IGF1dGhSZXF1aXJlZCxcclxuXHQgXHRcdFx0IGxvZ291dCxcclxuXHQgXHRcdFx0IGF1dGgsXHJcblx0IFx0XHRcdCAkZXJyb3JzOiByZWFkb25seSgkZXJyb3JzKSxcclxuXHQgXHRcdFx0IEJBU0UsXHJcblx0XHRcdFx0fVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stores/globals.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "654e9181dce5f23b"; }
/******/ }();
/******/ 
/******/ }
);