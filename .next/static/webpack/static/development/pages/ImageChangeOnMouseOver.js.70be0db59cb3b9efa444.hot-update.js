webpackHotUpdate("static\\development\\pages\\ImageChangeOnMouseOver.js",{

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

/***/ })

})
//# sourceMappingURL=ImageChangeOnMouseOver.js.70be0db59cb3b9efa444.hot-update.js.map