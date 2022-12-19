/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateappuix"]("about",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/HeroSection.vue */ \"./src/components/HeroSection.vue\");\n/* harmony import */ var _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/StaffSection.vue */ \"./src/components/StaffSection.vue\");\n/* harmony import */ var _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RoomSection.vue */ \"./src/components/RoomSection.vue\");\n/* harmony import */ var _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuSection.vue */ \"./src/components/MenuSection.vue\");\n/* harmony import */ var _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ReviewSection.vue */ \"./src/components/ReviewSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable */\n\n\n\n\n\n\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  components: {\n    HeroSection: _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    RoomSection: _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    StaffSection: _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MenuSection: _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ReviewSection: _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n\n  data() {\n    return {\n      form: {\n        user: this.$route.params.user_id\n      },\n      hotel: {}\n    };\n  },\n\n  created() {\n    this.getStaffs();\n  },\n\n  methods: {\n    mapLink(x) {\n      return x.split(\" \").join(\"%20\");\n    },\n\n    chTitle(title) {\n      document.title = `${title} | ${this.hotel.user.business_name}`;\n    },\n\n    pageHeaders(x) {\n      if (this.hotel.page.length) {\n        return this.hotel.page.filter(y => y.title == x)[0];\n      } else {\n        return \"\";\n      }\n    },\n\n    async getStaffs() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`${location.origin}/v1/api/hotel/?user=${this.$route.params.user_id}`);\n        this.hotel = res.data[0];\n      } catch (e) {\n        alert(\"Welcome\"); //location.href = \"/admin/\"\n      }\n    },\n\n    async Book() {\n      try {\n        this.form.no_of_adult = parseInt(this.form.no_of_adult);\n        this.form.no_of_kids = parseInt(this.form.no_of_kids);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(`${location.origin}/v1/api/booking/`, this.form);\n        alert(\"success\");\n      } catch (e) {\n        alert(\"failed booking\");\n      }\n    }\n\n  },\n  computed: {\n    pagetitle() {\n      if (this.hotel.page) {\n        document.title = `Welcome to ${this.hotel.user.business_name}`;\n        return this.pages.map(x => x.title);\n      }\n\n      return [];\n    },\n\n    pages() {\n      return this.hotel.page;\n    },\n\n    rooms() {\n      return this.hotel.room;\n    },\n\n    staffs() {\n      return this.hotel.staff;\n    },\n\n    menus() {\n      if (this.hotel.menu) {\n        return this.hotel.menu.groupBy(\"nature\");\n      }\n\n      return [];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhDQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQXRCQTtBQTlDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcHVpeC8uL3NyYy92aWV3cy9Ib21lVmlldy52dWU/NDNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9IZXJvU2VjdGlvbi52dWVcIlxyXG5pbXBvcnQgU3RhZmZTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvU3RhZmZTZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBSb29tU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL1Jvb21TZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBNZW51U2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL01lbnVTZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBSZXZpZXdTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUmV2aWV3U2VjdGlvbi52dWVcIjtcclxuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udnVlXCI7XHJcblxyXG5BcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGtleSkge3JldHVybiB0aGlzLnJlZHVjZSgoaGFzaCwgb2JqKSA9PiB7XHJcbmlmKG9ialtrZXldID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNoO1xyXG5yZXR1cm4gT2JqZWN0LmFzc2lnbihoYXNoLCB7IFtvYmpba2V5XV06KCBoYXNoW29ialtrZXldXSB8fCBbXSApLmNvbmNhdChvYmopfSlcclxufSwge30pXHJcbn07XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSG9tZVZpZXcnLFxyXG4gIGNvbXBvbmVudHM6IHsgSGVyb1NlY3Rpb24sIFJvb21TZWN0aW9uLCBTdGFmZlNlY3Rpb24sIE1lbnVTZWN0aW9uLCBSZXZpZXdTZWN0aW9uLCBDb250YWN0U2VjdGlvbiB9LFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZvcm06IHt1c2VyOiB0aGlzLiRyb3V0ZS5wYXJhbXMudXNlcl9pZH0sXHJcbiAgICAgIGhvdGVsOiB7fSxcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmdldFN0YWZmcygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBtYXBMaW5rKHgpe1xyXG4gICAgICByZXR1cm4geC5zcGxpdChcIiBcIikuam9pbihcIiUyMFwiKVxyXG4gICAgfSxcclxuICAgIGNoVGl0bGUodGl0bGUpe1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGAke3RpdGxlfSB8ICR7dGhpcy5ob3RlbC51c2VyLmJ1c2luZXNzX25hbWV9YFxyXG4gICAgfSxcclxuICAgIHBhZ2VIZWFkZXJzKHgpe1xyXG4gICAgICBpZiAodGhpcy5ob3RlbC5wYWdlLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucGFnZS5maWx0ZXIoeSA9PiB5LnRpdGxlPT14KVswXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRTdGFmZnMoKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7bG9jYXRpb24ub3JpZ2lufS92MS9hcGkvaG90ZWwvP3VzZXI9JHt0aGlzLiRyb3V0ZS5wYXJhbXMudXNlcl9pZH1gKVxyXG4gICAgICAgIHRoaXMuaG90ZWwgPSByZXMuZGF0YVswXVxyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBhbGVydChcIldlbGNvbWVcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9cIlxyXG4gICAgICB9IFxyXG4gICAgfSxcclxuICAgIGFzeW5jIEJvb2soKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmZvcm0ubm9fb2ZfYWR1bHQgPSBwYXJzZUludCh0aGlzLmZvcm0ubm9fb2ZfYWR1bHQpO1xyXG4gICAgICAgIHRoaXMuZm9ybS5ub19vZl9raWRzID0gcGFyc2VJbnQodGhpcy5mb3JtLm5vX29mX2tpZHMpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7bG9jYXRpb24ub3JpZ2lufS92MS9hcGkvYm9va2luZy9gLCB0aGlzLmZvcm0pXHJcbiAgICAgICAgYWxlcnQoXCJzdWNjZXNzXCIpXHJcbiAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgYWxlcnQoXCJmYWlsZWQgYm9va2luZ1wiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcGFnZXRpdGxlKCl7XHJcbiAgICAgIGlmICh0aGlzLmhvdGVsLnBhZ2UpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgV2VsY29tZSB0byAke3RoaXMuaG90ZWwudXNlci5idXNpbmVzc19uYW1lfWBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMubWFwKHg9PngudGl0bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfSxcclxuICAgIHBhZ2VzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmhvdGVsLnBhZ2VcclxuICAgIH0sXHJcbiAgICByb29tcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3RlbC5yb29tXHJcbiAgICB9LFxyXG4gICAgc3RhZmZzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmhvdGVsLnN0YWZmXHJcbiAgICB9LFxyXG4gICAgbWVudXMoKXtcclxuICAgICAgaWYgKHRoaXMuaG90ZWwubWVudSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ob3RlbC5tZW51Lmdyb3VwQnkoXCJuYXR1cmVcIilcclxuICAgICAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48dGVtcGxhdGU+XHJcblxyXG4gIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBwYl9uYXZiYXIgcGJfc2Nyb2xsZWQtbGlnaHRcIiBpZD1cInRlbXBsYXRldXgtbmF2YmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIDpocmVmPVwiYC9ob3RlbC91c2VyLyR7JHJvdXRlLnBhcmFtcy51c2VyX2lkfWBcIj48c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgaG90ZWwudXNlci5idXNpbmVzc19uYW1lLnNwbGl0KCcgJylbMF0gfX0gPC9zcGFuPnt7IGhvdGVsLnVzZXIuYnVzaW5lc3NfbmFtZS5zcGxpdCgnICcpWzE6XSB9fTwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tZW51LXRvZ2dsZSBqcy1zaXRlLW1lbnUtdG9nZ2xlICBtbC1hdXRvXCIgIGRhdGEtYW9zPVwiZmFkZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiN0ZW1wbGF0ZXV4LW5hdmJhci1uYXZcIiBhcmlhLWNvbnRyb2xzPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIEVORCBtZW51LXRvZ2dsZSAtLT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiB2LWZvcj1cInBhZ2UgaW4gcGFnZXRpdGxlXCIgdi1iaW5kOmtleT1cInBhZ2VcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayB0ZXh0LWNhcGl0YWxpemVcIiA6aHJlZj1cImAjc2VjdGlvbi0ke3BhZ2V9YFwiIEBjbGljaz1cImNoVGl0bGUoYCR7cGFnZX1gKVwiID57eyBwYWdlIH19PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGN0YS1idG4gbWwteGwtMiBtbC1sZy0yIG1sLW1kLTAgbWwtc20tMCBtbC0wXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Jlc2VydmF0aW9uLWZvcm1cIiA+PHNwYW4gY2xhc3M9XCJwYl9yb3VuZGVkLTQgcHgtNCByb3VuZGVkXCI+Qm9va2luZyAmIFJlc2VydmF0aW9uPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICAgIDwhLS0gRU5EIG5hdiAtLT5cclxuICA8SGVyb1NlY3Rpb24gOm1zZz1cImhvdGVsLnVzZXIuYnVzaW5lc3NfbmFtZVwiIDpoZXJvX2ltYWdlPVwiaG90ZWwuaGVyb19pbWFnZVwiIHYtaWY9XCJwYWdldGl0bGUuaW5jbHVkZXMoJ2hvbWUnKVwiIDpoZWFkZXI9XCJwYWdlSGVhZGVycygnaG9tZScpXCIgLz5cclxuICA8U3RhZmZTZWN0aW9uIDpzdGFmZnM9XCJzdGFmZnNcIiA6YWJvdXQ9XCJob3RlbC5hYm91dFwiIHYtaWY9XCJwYWdldGl0bGUuaW5jbHVkZXMoJ3N0YWZmJylcIiA6aGVhZGVyPVwicGFnZUhlYWRlcnMoJ3N0YWZmJylcIiAvPlxyXG4gIDxSb29tU2VjdGlvbiA6cm9vbXM9XCJyb29tc1wiIHYtaWY9XCJwYWdldGl0bGUuaW5jbHVkZXMoJ3Jvb20nKVwiIDpoZWFkZXI9XCJwYWdlSGVhZGVycygncm9vbScpXCIgLz5cclxuICA8TWVudVNlY3Rpb24gIDptZW51cz1cIm1lbnVzXCIgdi1pZj1cInBhZ2V0aXRsZS5pbmNsdWRlcygnbWVudScpXCIgOmhlYWRlcj1cInBhZ2VIZWFkZXJzKCdtZW51JylcIiAvPlxyXG4gIDxSZXZpZXdTZWN0aW9uIHYtaWY9XCJwYWdldGl0bGUuaW5jbHVkZXMoJ3JldmlldycpXCIgOmhlYWRlcj1cInBhZ2VIZWFkZXJzKCdyZXZpZXcnKVwiIC8+XHJcbiAgPENvbnRhY3RTZWN0aW9uIDpnbWFwPVwiaG90ZWwudXNlci5nbWFwXCIgOmFkZHJlc3M9XCJob3RlbC51c2VyLmFkZHJlc3NcIiA6ZW1haWw9XCJob3RlbC51c2VyLmVtYWlsXCIgOnBob25lcz1cImhvdGVsLmNvbnRhY3RcIiB2LWlmPVwicGFnZXRpdGxlLmluY2x1ZGVzKCdjb250YWN0JylcIiA6aGVhZGVyPVwicGFnZUhlYWRlcnMoJ2NvbnRhY3QnKVwiIC8+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGJnLWltYWdlIG92ZXJsYXlcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3NyYy9kaXN0L2ltYWdlcy9oZXJvXzQuanBnKTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlciBtYi00IG1iLW1kLTAgdGV4dC1tZC1sZWZ0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkXCI+QSBCZXN0IFBsYWNlIFRvIFN0YXkuIFJlc2VydmUgTm93ITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC02IHRleHQtY2VudGVyIHRleHQtbWQtcmlnaHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gRXh0cmEgbGFyZ2UgbW9kYWwgLS0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13aGl0ZS1wcmltYXJ5IHB5LTMgdGV4dC13aGl0ZSBweC01XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Jlc2VydmF0aW9uLWZvcm1cIj5SZXNlcnZlIE5vdzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPCEtLSBNb2RhbCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgXCIgaWQ9XCJyZXNlcnZhdGlvbi1mb3JtXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZXNlcnZhdGlvbkZvcm1UaXRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3sgZm9ybSB9fVxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJCb29rKClcIiAgY2xhc3M9XCJiZy13aGl0ZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTRcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGgyPlJlc2VydmF0aW9uPC9oMj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIFwiIHYtbW9kZWw9XCJmb3JtLmZ1bGxfbmFtZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1ibGFjayBmb250LXdlaWdodC1ib2xkXCIgZm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBcIiB2LW1vZGVsPVwiZm9ybS5waG9uZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtYmxhY2sgZm9udC13ZWlnaHQtYm9sZFwiIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1ibGFjayBmb250LXdlaWdodC1ib2xkXCIgZm9yPVwiY2hlY2tpbl9kYXRlXCI+RGF0ZSBDaGVjayBJbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiY2hlY2tpbl9kYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5jaGVja19pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJjaGVja291dF9kYXRlXCI+RGF0ZSBDaGVjayBPdXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImNoZWNrb3V0X2RhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmNoZWNrX291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZHVsdHNcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFja1wiPkFkdWx0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pY29uLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjxzcGFuIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1kb3duXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiYWR1bHRzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5ub19vZl9hZHVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoaWxkcmVuXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtYmxhY2tcIj5DaGlsZHJlbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pY29uLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjxzcGFuIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1kb3duXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiY2hpbGRyZW5cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLm5vX29mX2tpZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NCs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJtZXNzYWdlXCI+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbCBcIiBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIHYtbW9kZWw9XCJmb3JtLm5vdGVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlc2VydmUgTm93XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdGV4dC13aGl0ZSBweS0zIHB4LTUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\src\\views\\HomeView.vue: Unexpected token, expected \"]\" (164:81)\n\n\u001b[0m \u001b[90m 162 |\u001b[39m         }\u001b[33m,\u001b[39m [\u001b[0m\n\u001b[0m \u001b[90m 163 |\u001b[39m           _createElementVNode(\u001b[32m\"span\"\u001b[39m\u001b[33m,\u001b[39m _hoisted_4\u001b[33m,\u001b[39m _toDisplayString($data\u001b[33m.\u001b[39mhotel\u001b[33m.\u001b[39muser\u001b[33m.\u001b[39mbusiness_name\u001b[33m.\u001b[39msplit(\u001b[32m' '\u001b[39m)[\u001b[35m0\u001b[39m])\u001b[33m,\u001b[39m \u001b[35m1\u001b[39m \u001b[90m/* TEXT */\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 164 |\u001b[39m           _createTextVNode(_toDisplayString(hotel\u001b[33m.\u001b[39muser\u001b[33m.\u001b[39mbusiness_name\u001b[33m.\u001b[39msplit(\u001b[32m' '\u001b[39m)[\u001b[35m1\u001b[39m\u001b[33m:\u001b[39m])\u001b[33m,\u001b[39m \u001b[35m1\u001b[39m \u001b[90m/* TEXT */\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                                                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 165 |\u001b[39m         ]\u001b[33m,\u001b[39m \u001b[35m8\u001b[39m \u001b[90m/* PROPS */\u001b[39m\u001b[33m,\u001b[39m _hoisted_3)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 166 |\u001b[39m         _hoisted_5\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 167 |\u001b[39m         _createCommentVNode(\u001b[32m\" END menu-toggle \"\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:359:12)\n    at Object.raise (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:3339:19)\n    at Object.unexpected (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:3377:16)\n    at Object.expect (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:4006:28)\n    at Object.parseMember (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12716:12)\n    at Object.parseSubscript (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12701:21)\n    at Object.parseSubscripts (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12665:19)\n    at Object.parseExprSubscripts (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12654:17)\n    at Object.parseUpdate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12627:21)");

/***/ }),

/***/ "./src/views/HomeView.vue?vue&type=template&id=9ea40744":
/*!**************************************************************!*\
  !*** ./src/views/HomeView.vue?vue&type=template&id=9ea40744 ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_9ea40744__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=template&id=9ea40744 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=9ea40744");


/***/ })

});