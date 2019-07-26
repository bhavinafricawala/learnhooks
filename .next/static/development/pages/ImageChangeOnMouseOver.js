(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\ImageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=D%3A%5CMy-Projects%5CReact-App%5Clearnhooks%5Cpages%5CImageChangeOnMouseOver.js!./":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=D%3A%5CMy-Projects%5CReact-App%5Clearnhooks%5Cpages%5CImageChangeOnMouseOver.js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChangeOnMouseOver", function() {
      var page = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js", function() {
          if(!next.router.components["/ImageChangeOnMouseOver"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChangeOnMouseOver.js */ "./pages/ImageChangeOnMouseOver.js")
          next.router.update("/ImageChangeOnMouseOver", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseHover */ "./src/ImageToggleOnMouseHover.js");
var _jsxFileName = "D:\\My-Projects\\React-App\\learnhooks\\pages\\ImageChangeOnMouseOver.js";



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseHover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), "\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_ImageToggleOnMouseHover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseHover.js":
/*!****************************************!*\
  !*** ./src/ImageToggleOnMouseHover.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\My-Projects\\React-App\\learnhooks\\src\\ImageToggleOnMouseHover.js";


var ImageToggleOnMouseHover = function ImageToggleOnMouseHover(prop) {
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onMouseOver: function onMouseOver() {
      imageRef.current.src = prop.secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = prop.primaryImg;
    },
    src: prop.primaryImg,
    alt: "",
    ref: imageRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseHover);

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=D%3A%5CMy-Projects%5CReact-App%5Clearnhooks%5Cpages%5CImageChangeOnMouseOver.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChangeOnMouseOver&absolutePagePath=D%3A%5CMy-Projects%5CReact-App%5Clearnhooks%5Cpages%5CImageChangeOnMouseOver.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChangeOnMouseOver&absolutePagePath=D%3A%5CMy-Projects%5CReact-App%5Clearnhooks%5Cpages%5CImageChangeOnMouseOver.js!./");


/***/ }),

/***/ "dll-reference dll_829b10deddf10e1653a8":
/*!*******************************************!*\
  !*** external "dll_829b10deddf10e1653a8" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_829b10deddf10e1653a8;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChangeOnMouseOver.js.map