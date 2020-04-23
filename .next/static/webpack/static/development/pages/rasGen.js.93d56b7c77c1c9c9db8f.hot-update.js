webpackHotUpdate("static\\development\\pages\\rasGen.js",{

/***/ "./components/rasgen/aboutTechnology2.js":
/*!***********************************************!*\
  !*** ./components/rasgen/aboutTechnology2.js ***!
  \***********************************************/
/*! exports provided: AboutTechnology2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTechnology2", function() { return AboutTechnology2; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AboutTechnology2 = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutTechnology2, _Component);

  var _super = _createSuper(AboutTechnology2);

  function AboutTechnology2(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutTechnology2);

    _this = _super.call(this, props);
    _this.state = {
      photoIndex: 0,
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutTechnology2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          photoIndex = _this$state.photoIndex,
          isOpen = _this$state.isOpen;
      return __jsx("div", {
        className: "jsx-3576745420" + " " + "container-fluid aboutTechnology"
      }, __jsx("div", {
        className: "jsx-3576745420" + " " + "mycontainer"
      }, __jsx("div", {
        className: "jsx-3576745420" + " " + "row m-0"
      }, __jsx("div", {
        className: "jsx-3576745420" + " " + "col-12 col-md-6"
      }, __jsx("div", {
        className: "jsx-3576745420" + " " + "img-container"
      }, __jsx("img", {
        src: "/images/about-tech-2.jpg",
        alt: "\u041C\u0430\u043B\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430",
        title: "\u041C\u0430\u043B\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430",
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true
          });
        },
        className: "jsx-3576745420" + " " + "about-tech-pic"
      }), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        mainSrc: "/images/about-tech-2.jpg",
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        }
      }))), __jsx("div", {
        className: "jsx-3576745420" + " " + "col-12 col-md-6 tm-cont"
      }, __jsx("p", {
        className: "jsx-3576745420" + " " + "text-min"
      }, "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u043E\u0432\u044B\u0441\u0438\u043B\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0442\u0440\u0443\u0434\u0430 \u0438 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u0443\u044E \u043F\u0440\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. \u0412 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043C\u0430\u043B\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u043A\u0440\u0443\u043F\u043D\u043E\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0441\u0442\u0430\u043B\u043E \u043D\u0435\u0446\u0435\u043B\u0435\u0441\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0432\u0432\u0438\u0434\u0443 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u043A\u043E\u043B\u0435\u0431\u0430\u043D\u0438\u044F\u0445 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F. \u041F\u0440\u043E\u0449\u0435 \u0433\u043E\u0432\u043E\u0440\u044F, \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0433\u0438\u0431\u043A\u043E\u0441\u0442\u044C ,\u0447\u0442\u043E \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u0432 \u043A\u043E\u043D\u0435\u0447\u043D\u043E\u043C \u0438\u0442\u043E\u0433\u0435 \u043A \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u044B\u0445 \u043D\u0430 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F.")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3576745420"
      }, [".about-tech-pic.jsx-3576745420{max-width:100%;}"]));
    }
  }]);

  return AboutTechnology2;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AboutTechnology2);

/***/ })

})
//# sourceMappingURL=rasGen.js.93d56b7c77c1c9c9db8f.hot-update.js.map