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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'RegisterPagesView',\n  inject: [\"globals\", \"pages\"],\n\n  data() {\n    return {\n      form: []\n    };\n  },\n\n  methods: {\n    async switchPage(title) {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${globals.BASE}/v1/api/page/`, {\n          title: title,\n          subtitle: `My new ${title} page. Please edit this subtitle`,\n          enable: true\n        });\n        alert(\"page added\");\n      } catch (e) {\n        console.log(e);\n        alert(e.response);\n      }\n    },\n\n    async pageForm() {\n      await this.pages.addPage(this.form), this.form = {\n        user: this.globals.state.data.user.pk\n      };\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9jbGllbnQvUmVnaXN0ZXJQYWdlc1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7OztBQW1FQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFHQTs7QUFmQTtBQVJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvY2xpZW50L1JlZ2lzdGVyUGFnZXNWaWV3LnZ1ZT9jZWRkIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8IS0tIFNpZ24gdXAgU3RhcnQgLS0+e3sgZm9ybSB9fVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBoLTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAxMDB2aDtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY29sLXhsLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXNlY29uZGFyeSAgcm91bmRlZCBwLTQgcC1zbS01IG15LTQgbXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmxvYXRpbmcgbWItMyByb3VuZGVkIGgtMTAwIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWItNFwiPlNlbGVjdCBQYWdlczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTAgY29sLXhsLTYgbWItMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT1cIndpZHRoOjkwcHg7IGhlaWdodDozMHB4O1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIiB2LW1vZGVsPVwiZm9ybVwiIHZhbHVlPVwiaG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJob21lXCIgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJob21lXCI+PGg2PkhvbWUgU2VjdGlvbjwvaDY+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTAgY29sLXhsLTYgbWItMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT1cIndpZHRoOjkwcHg7IGhlaWdodDo0MHB4O1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWJvdXRcIiBAY2hhbmdlPVwic3dpdGNoUGFnZSgnYWJvdXQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImFib3V0XCI+QWJvdXQgU2VjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwIGNvbC14bC02IG1iLTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9XCJ3aWR0aDo5MHB4OyBoZWlnaHQ6NDBweDtcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJldmlld1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJyZXZpZXdcIj5SZXZpZXcgU2VjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwIGNvbC14bC02IG1iLTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9XCJ3aWR0aDo5MHB4OyBoZWlnaHQ6NDBweDtcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhvbWVcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImhvbWVcIj5Ib21lIFNlY3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMCBjb2wteGwtNiBtYi0yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPVwid2lkdGg6OTBweDsgaGVpZ2h0OjQwcHg7XCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJob21lXCIgY2hlY2tlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJob21lXCI+SG9tZSBTZWN0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIFNpZ24gSW4gRW5kIC0tPlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ1JlZ2lzdGVyUGFnZXNWaWV3JyxcclxuICBpbmplY3Q6IFtcImdsb2JhbHNcIiwgXCJwYWdlc1wiXSwgXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZm9ybTogW10sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBzd2l0Y2hQYWdlKHRpdGxlKXtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7Z2xvYmFscy5CQVNFfS92MS9hcGkvcGFnZS9gLCB7dGl0bGU6IHRpdGxlLCBzdWJ0aXRsZTogYE15IG5ldyAke3RpdGxlfSBwYWdlLiBQbGVhc2UgZWRpdCB0aGlzIHN1YnRpdGxlYCwgZW5hYmxlOiB0cnVlfSlcclxuICAgICAgICBhbGVydChcInBhZ2UgYWRkZWRcIilcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgYWxlcnQoZS5yZXNwb25zZSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIHBhZ2VGb3JtKCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnBhZ2VzLmFkZFBhZ2UodGhpcy5mb3JtKSxcclxuICAgICAgdGhpcy5mb3JtID0ge1xyXG4gICAgICAgIHVzZXI6IHRoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIucGssXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=template&id=b412ce48":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=template&id=b412ce48 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"container-fluid\"\n};\nconst _hoisted_2 = {\n  class: \"row h-100 justify-content-center\",\n  style: {\n    \"min-height\": \"100vh\"\n  }\n};\nconst _hoisted_3 = {\n  class: \"col-sm-12 col-xl-10\"\n};\nconst _hoisted_4 = {\n  class: \"bg-secondary rounded p-4 p-sm-5 my-4 mx-3\"\n};\nconst _hoisted_5 = {\n  class: \"form-floating mb-3 rounded h-100 p-4\"\n};\n\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  class: \"mb-4\"\n}, \"Select Pages\", -1\n/* HOISTED */\n);\n\nconst _hoisted_7 = {\n  class: \"btn-group\",\n  role: \"group\"\n};\nconst _hoisted_8 = {\n  class: \"row\"\n};\nconst _hoisted_9 = {\n  class: \"col-sm-10 col-xl-6 mb-2\"\n};\nconst _hoisted_10 = {\n  class: \"form-check form-switch\"\n};\n\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"form-check-label\",\n  for: \"home\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h6\", null, \"Home Section\")], -1\n/* HOISTED */\n);\n\nconst _hoisted_12 = {\n  class: \"col-sm-10 col-xl-6 mb-2\"\n};\nconst _hoisted_13 = {\n  class: \"form-check form-switch\"\n};\n\nconst _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"form-check-label\",\n  for: \"about\"\n}, \"About Section\", -1\n/* HOISTED */\n);\n\nconst _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-sm-10 col-xl-6 mb-2\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"form-check form-switch\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  class: \"form-check-input\",\n  style: {\n    \"width\": \"90px\",\n    \"height\": \"40px\"\n  },\n  type: \"checkbox\",\n  role: \"switch\",\n  id: \"review\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"form-check-label\",\n  for: \"review\"\n}, \"Review Section\")])], -1\n/* HOISTED */\n);\n\nconst _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-sm-10 col-xl-6 mb-2\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"form-check form-switch\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  class: \"form-check-input\",\n  style: {\n    \"width\": \"90px\",\n    \"height\": \"40px\"\n  },\n  type: \"checkbox\",\n  role: \"switch\",\n  id: \"home\",\n  checked: \"\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"form-check-label\",\n  for: \"home\"\n}, \"Home Section\")])], -1\n/* HOISTED */\n);\n\nconst _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"col-sm-10 col-xl-6 mb-2\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"form-check form-switch\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  class: \"form-check-input\",\n  style: {\n    \"width\": \"90px\",\n    \"height\": \"40px\"\n  },\n  type: \"checkbox\",\n  role: \"switch\",\n  id: \"home\",\n  checked: \"\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n  class: \"form-check-label\",\n  for: \"home\"\n}, \"Home Section\")])], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sign up Start \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form) + \" \", 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    class: \"form-check-input\",\n    style: {\n      \"width\": \"90px\",\n      \"height\": \"30px\"\n    },\n    type: \"checkbox\",\n    role: \"switch\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.form = $event),\n    value: \"home\",\n    id: \"home\",\n    checked: \"\"\n  }, null, 512\n  /* NEED_PATCH */\n  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form]]), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    class: \"form-check-input\",\n    style: {\n      \"width\": \"90px\",\n      \"height\": \"40px\"\n    },\n    type: \"checkbox\",\n    role: \"switch\",\n    id: \"about\",\n    onChange: _cache[1] || (_cache[1] = $event => $options.switchPage('about'))\n  }, null, 32\n  /* HYDRATE_EVENTS */\n  ), _hoisted_14])]), _hoisted_15, _hoisted_16, _hoisted_17])])])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sign In End \")], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvdmlld3MvY2xpZW50L1JlZ2lzdGVyUGFnZXNWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNDEyY2U0OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTs7O0FBQ0E7OztBQUVBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUFBOzs7QUFDQTs7O0FBQ0E7OztBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7O0FBSUE7OztBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQU9BO0FBTkE7QUFJQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFKQTs7QUFRQTtBQUFBO0FBT0E7QUFOQTtBQUlBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSkE7O0FBUUE7QUFBQTtBQU9BO0FBTkE7QUFJQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUpBOzs7QUE1Q0E7QUFDQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQURBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9jbGllbnQvUmVnaXN0ZXJQYWdlc1ZpZXcudnVlP2NlZGQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDwhLS0gU2lnbiB1cCBTdGFydCAtLT57eyBmb3JtIH19XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGgtMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6IDEwMHZoO1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctc2Vjb25kYXJ5ICByb3VuZGVkIHAtNCBwLXNtLTUgbXktNCBteC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1mbG9hdGluZyBtYi0zIHJvdW5kZWQgaC0xMDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtYi00XCI+U2VsZWN0IFBhZ2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiByb2xlPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMCBjb2wteGwtNiBtYi0yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPVwid2lkdGg6OTBweDsgaGVpZ2h0OjMwcHg7XCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiIHYtbW9kZWw9XCJmb3JtXCIgdmFsdWU9XCJob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhvbWVcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImhvbWVcIj48aDY+SG9tZSBTZWN0aW9uPC9oNj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMCBjb2wteGwtNiBtYi0yXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHN0eWxlPVwid2lkdGg6OTBweDsgaGVpZ2h0OjQwcHg7XCIgdHlwZT1cImNoZWNrYm94XCIgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhYm91dFwiIEBjaGFuZ2U9XCJzd2l0Y2hQYWdlKCdhYm91dCcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYWJvdXRcIj5BYm91dCBTZWN0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTAgY29sLXhsLTYgbWItMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT1cIndpZHRoOjkwcHg7IGhlaWdodDo0MHB4O1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV2aWV3XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJldmlld1wiPlJldmlldyBTZWN0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTAgY29sLXhsLTYgbWItMlwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLXN3aXRjaFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBzdHlsZT1cIndpZHRoOjkwcHg7IGhlaWdodDo0MHB4O1wiIHR5cGU9XCJjaGVja2JveFwiIHJvbGU9XCJzd2l0Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaG9tZVwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiaG9tZVwiPkhvbWUgU2VjdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwIGNvbC14bC02IG1iLTJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgc3R5bGU9XCJ3aWR0aDo5MHB4OyBoZWlnaHQ6NDBweDtcIiB0eXBlPVwiY2hlY2tib3hcIiByb2xlPVwic3dpdGNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhvbWVcIiBjaGVja2VkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImhvbWVcIj5Ib21lIFNlY3Rpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gU2lnbiBJbiBFbmQgLS0+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUmVnaXN0ZXJQYWdlc1ZpZXcnLFxyXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiLCBcInBhZ2VzXCJdLCBcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmb3JtOiBbXSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIHN3aXRjaFBhZ2UodGl0bGUpe1xyXG4gICAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtnbG9iYWxzLkJBU0V9L3YxL2FwaS9wYWdlL2AsIHt0aXRsZTogdGl0bGUsIHN1YnRpdGxlOiBgTXkgbmV3ICR7dGl0bGV9IHBhZ2UuIFBsZWFzZSBlZGl0IHRoaXMgc3VidGl0bGVgLCBlbmFibGU6IHRydWV9KVxyXG4gICAgICAgIGFsZXJ0KFwicGFnZSBhZGRlZFwiKVxyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICBhbGVydChlLnJlc3BvbnNlKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcGFnZUZvcm0oKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMucGFnZXMuYWRkUGFnZSh0aGlzLmZvcm0pLFxyXG4gICAgICB0aGlzLmZvcm0gPSB7XHJcbiAgICAgICAgdXNlcjogdGhpcy5nbG9iYWxzLnN0YXRlLmRhdGEudXNlci5wayxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/RegisterPagesView.vue?vue&type=template&id=b412ce48\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d781f18f79f0126c"; }
/******/ }();
/******/ 
/******/ }
);