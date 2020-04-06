webpackHotUpdate("static\\development\\pages\\products.js",{

/***/ "./components/products/Filter.js":
/*!***************************************!*\
  !*** ./components/products/Filter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Filter = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Filter, _Component);

  var _super = _createSuper(Filter);

  function Filter(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filter);

    _this = _super.call(this, props);
    _this.state = {
      value: {
        min: 100,
        max: 4000
      }
    };
    _this.onChangeHandle = _this.onChangeHandle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filter, [{
    key: "onChangeHandle",
    value: function onChangeHandle(value) {
      this.props.onFilterChange(this.state.value.min, this.state.value.max);
      this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var foundItems = this.props.foundItems;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "jsx-3784398479" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3784398479" + " " + "filter-text"
      }, "\u0412\u044B\u0431\u043E\u0440 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438")), __jsx("div", {
        className: "jsx-3784398479" + " " + "filter-block"
      }, __jsx("div", {
        className: "jsx-3784398479" + " " + "input-block"
      }, __jsx(react_input_range__WEBPACK_IMPORTED_MODULE_8___default.a, {
        maxValue: 5000,
        minValue: 100,
        step: 100,
        value: this.state.value,
        onChange: function onChange(value) {
          return _this2.onChangeHandle(value);
        },
        draggableTrack: true
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3784398479"
      }, ".input-range .input-range__track{position:relative;height:22px;}.input-range .input-range__track--active{background:grey;margin-left:11px;}.input-range .input-range__track--background{background:red;}.input-range .input-range__slider{background:white;width:22px;height:22px;border-radius:50%;}.input-range .input-range__slider-container{top:-22px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDMkIsQUFHK0IsQUFJRixBQUlELEFBR0UsQUFNUCxVQUNaLEtBVEEsQ0FKbUIsQ0FPTixDQVhDLFVBWUEsRUFYZCxHQUlBLE9BUW9CLGtCQUNwQiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xccHJvZHVjdHNcXEZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTogeyBtaW46IDEwMCwgbWF4OiA0MDAwIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgb25DaGFuZ2VIYW5kbGUodmFsdWUpIHtcclxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZS5taW4sIHRoaXMuc3RhdGUudmFsdWUubWF4KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmb3VuZEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItdGV4dFwiPtCS0YvQsdC+0YAg0LTQuNCw0L/QsNC30L7QvdCwINC80L7RidC90L7RgdGC0Lg8L3NwYW4+XHJcbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXRleHRcIj7QndCw0LnQtNC10L3QvjogPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXRleHQtdmFsdWVcIj57Zm91bmRJdGVtc308L3NwYW4+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFJhbmdlXHJcbiAgICAgICAgICAgICAgbWF4VmFsdWU9ezUwMDB9XHJcbiAgICAgICAgICAgICAgbWluVmFsdWU9ezEwMH1cclxuICAgICAgICAgICAgICBzdGVwPXsxMDB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlVHJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgLmlucHV0LXJhbmdlIC5pbnB1dC1yYW5nZV9fdHJhY2sge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlucHV0LXJhbmdlIC5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRmlsdGVyLnByb3BUeXBlcyA9IHtcclxuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBmb3VuZEl0ZW1zOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\Filter.js */"));
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Filter.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  foundItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ })

})
//# sourceMappingURL=products.js.70fa547def9250d6d3fc.hot-update.js.map