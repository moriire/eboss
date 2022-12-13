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

/***/ "./src/stores/graph.js":
/*!*****************************!*\
  !*** ./src/stores/graph.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n//<script>\n\n\nconst BASE = \"https://rotana.pythonanywhere.com\"; //const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}\n\nconst byGrades = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({\n  data: {}\n});\nconst byGenders = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({\n  data: {}\n});\n\nconst getAllGrade = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE}/api/stats/student/class/?grade=all`);\n    byGrades.data = res.data;\n  } catch (errors) {\n    alert(errors.response);\n  }\n};\n\nconst getAllGender = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE}/api/stats/student/class/?gender=all`);\n    byGenders.data = res.data;\n    alert(\"got\");\n  } catch (errors) {\n    alert(errors.response);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  byGrades,\n  byGenders,\n  getAllGender,\n  getAllGrade\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL2dyYXBoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmVzL2dyYXBoLmpzP2U0MTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy88c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHJlYWN0aXZlIH0gZnJvbSBcInZ1ZVwiO1xyXG5jb25zdCBCQVNFID0gXCJodHRwczovL3JvdGFuYS5weXRob25hbnl3aGVyZS5jb21cIlxyXG4vL2NvbnN0IGNvbmZpZyA9IHsgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbicgOiAgYEJlYXJlciAke3N0YXRlLnVzZXIuYWNjZXNzX3Rva2VufWAgfX1cclxuY29uc3QgYnlHcmFkZXMgPSByZWFjdGl2ZSh7ZGF0YToge319KTtcclxuY29uc3QgYnlHZW5kZXJzID0gcmVhY3RpdmUoe2RhdGE6IHt9fSk7XHJcblxyXG5jb25zdCBnZXRBbGxHcmFkZSA9IGFzeW5jIGZ1bmN0aW9uKCl7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtCQVNFfS9hcGkvc3RhdHMvc3R1ZGVudC9jbGFzcy8/Z3JhZGU9YWxsYClcclxuXHRcdGJ5R3JhZGVzLmRhdGEgPSAgcmVzLmRhdGFcclxuXHR9IGNhdGNoKGVycm9ycykge1xyXG5cdFx0XHRhbGVydChlcnJvcnMucmVzcG9uc2UpXHJcblx0fVxyXG59O1xyXG5jb25zdCAgZ2V0QWxsR2VuZGVyID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0V9L2FwaS9zdGF0cy9zdHVkZW50L2NsYXNzLz9nZW5kZXI9YWxsYClcclxuICAgICAgICBieUdlbmRlcnMuZGF0YSA9IHJlcy5kYXRhXHJcblx0YWxlcnQoXCJnb3RcIik7XHJcbiAgICAgIH0gY2F0Y2goZXJyb3JzKSB7XHJcbiAgICAgICAgICBhbGVydChlcnJvcnMucmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5leHBvcnQgZGVmYXVsdCB7IGJ5R3JhZGVzLCBieUdlbmRlcnMsIGdldEFsbEdlbmRlciwgZ2V0QWxsR3JhZGUgfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stores/graph.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "134ef7ffb0de8359"; }
/******/ }();
/******/ 
/******/ }
);