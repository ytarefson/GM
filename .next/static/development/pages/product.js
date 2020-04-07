(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\product.js"],{

/***/ "./components/GaleryProducts.js":
/*!**************************************!*\
  !*** ./components/GaleryProducts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GaleryProducts; });
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




var GaleryProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GaleryProducts, _Component);

  var _super = _createSuper(GaleryProducts);

  function GaleryProducts(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GaleryProducts);

    _this = _super.call(this, props);
    _this.state = {
      photoIndex: 0,
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GaleryProducts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var images = this.props.product.galery;
      var product = this.props.product;
      var _this$state = this.state,
          photoIndex = _this$state.photoIndex,
          isOpen = _this$state.isOpen;
      return __jsx("div", {
        className: "jsx-1977262990" + " " + "mycontainer section-plate galery-plate galery-products"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "galery row m-0"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "img-container"
      }, __jsx("img", {
        src: "/images/products/thumb-".concat(images[0]) // /products/
        ,
        alt: product.label,
        title: product.label,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true,
            photoIndex: 0
          });
        },
        className: "jsx-1977262990" + " " + "detail-img"
      }))), __jsx("div", {
        className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "img-container"
      }, __jsx("img", {
        src: "/images/products/thumb-".concat(images[1]) // /products/
        ,
        alt: product.label,
        title: product.label,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true,
            photoIndex: 1
          });
        },
        className: "jsx-1977262990" + " " + "detail-img"
      }))), __jsx("div", {
        className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "img-container"
      }, __jsx("img", {
        src: "/images/products/thumb-".concat(images[2]) // /products/
        ,
        alt: product.label,
        title: product.label,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true,
            photoIndex: 2
          });
        },
        className: "jsx-1977262990" + " " + "detail-img"
      }))), __jsx("div", {
        className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
      }, __jsx("div", {
        className: "jsx-1977262990" + " " + "img-container"
      }, __jsx("img", {
        src: "/images/products/thumb-".concat(images[3]) // /products/
        ,
        alt: product.label,
        title: product.label,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true,
            photoIndex: 3
          });
        },
        className: "jsx-1977262990" + " " + "detail-img"
      })))), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        mainSrc: "/images/products/".concat(images[photoIndex]) // /products/
        ,
        nextSrc: "/images/products/".concat( // /products/
        images[(photoIndex + 1) % images.length]),
        prevSrc: "/images/products/".concat( // /products/
        images[(photoIndex + images.length - 1) % images.length]),
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        },
        onMovePrevRequest: function onMovePrevRequest() {
          return _this2.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length
          });
        },
        onMoveNextRequest: function onMoveNextRequest() {
          return _this2.setState({
            photoIndex: (photoIndex + 1) % images.length
          });
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1977262990"
      }, ".galery-plate.jsx-1977262990{margin-bottom:30px;}.galery-products.jsx-1977262990{margin-bottom:0;}.galery.jsx-1977262990{padding-top:15px;padding-bottom:15px;}.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:120px 120px;grid-gap:15px;}.galery.jsx-1977262990 .img-container-plate.jsx-1977262990 .img-container.jsx-1977262990{margin:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;overflow:hidden;}.galery.jsx-1977262990 .img-container-plate.jsx-1977262990 .img-container.jsx-1977262990 .detail-img.jsx-1977262990{width:auto;height:100%;}@media (min-width:768px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:120px;grid-gap:15px;}}@media (min-width:992px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:150px;}}@media (min-width:1200px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:180px;grid-gap:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxHYWxlcnlQcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CLEFBR2dDLEFBR0gsQUFHQyxBQUlKLEFBTUYsQUFRQSxBQU1JLEFBUUEsQUFPQSxXQTVCRixBQVFELEVBZGtCLEFBb0JVLEFBUUEsQUFPQSxHQTFDMUMsQ0FHc0IsRUFOdEIsSUF5QkEsY0FsQkEsTUFJaUMsUUFvQkosQUFRQSxBQU9BLHVCQWxDYixFQW9CRSxBQVFoQixBQU9nQixTQTlCRyxHQUpyQixFQW9CRSxBQWVBLHdGQTlCdUIsbUdBQ0wsa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxHYWxlcnlQcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxlcnlQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwaG90b0luZGV4OiAwLFxyXG4gICAgICBpc09wZW46IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaW1hZ2VzID0gdGhpcy5wcm9wcy5wcm9kdWN0LmdhbGVyeTtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb3BzLnByb2R1Y3Q7XHJcbiAgICBjb25zdCB7IHBob3RvSW5kZXgsIGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXljb250YWluZXIgc2VjdGlvbi1wbGF0ZSBnYWxlcnktcGxhdGUgZ2FsZXJ5LXByb2R1Y3RzXCI+XHJcbiAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1yZWQgaGVhZGVyLXJlZC0yIHBsLTNcIj5cclxuICAgICAgICAgINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRjyAtIHtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxlcnkgcm93IG0tMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzL3RodW1iLSR7aW1hZ2VzWzBdfWB9IC8vIC9wcm9kdWN0cy9cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMCB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzL3RodW1iLSR7aW1hZ2VzWzFdfWB9IC8vIC9wcm9kdWN0cy9cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzL3RodW1iLSR7aW1hZ2VzWzJdfWB9IC8vIC9wcm9kdWN0cy9cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMiB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzL3RodW1iLSR7aW1hZ2VzWzNdfWB9IC8vIC9wcm9kdWN0cy9cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSwgcGhvdG9JbmRleDogMyB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgPExpZ2h0Ym94XHJcbiAgICAgICAgICAgIG1haW5TcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzLyR7aW1hZ2VzW3Bob3RvSW5kZXhdfWB9IC8vIC9wcm9kdWN0cy9cclxuICAgICAgICAgICAgbmV4dFNyYz17YC9pbWFnZXMvcHJvZHVjdHMvJHtcclxuICAgICAgICAgICAgICAvLyAvcHJvZHVjdHMvXHJcbiAgICAgICAgICAgICAgaW1hZ2VzWyhwaG90b0luZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoXVxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgcHJldlNyYz17YC9pbWFnZXMvcHJvZHVjdHMvJHtcclxuICAgICAgICAgICAgICAvLyAvcHJvZHVjdHMvXHJcbiAgICAgICAgICAgICAgaW1hZ2VzWyhwaG90b0luZGV4ICsgaW1hZ2VzLmxlbmd0aCAtIDEpICUgaW1hZ2VzLmxlbmd0aF1cclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgb25Nb3ZlUHJldlJlcXVlc3Q9eygpID0+XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwaG90b0luZGV4OiAocGhvdG9JbmRleCArIGltYWdlcy5sZW5ndGggLSAxKSAlIGltYWdlcy5sZW5ndGhcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uTW92ZU5leHRSZXF1ZXN0PXsoKSA9PlxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGhvdG9JbmRleDogKHBob3RvSW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGhcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmdhbGVyeS1wbGF0ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ2FsZXJ5LXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nYWxlcnkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ2FsZXJ5IC5pbWctY29udGFpbmVyLXBsYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDEyMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nYWxlcnkgLmltZy1jb250YWluZXItcGxhdGUgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5nYWxlcnkgLmltZy1jb250YWluZXItcGxhdGUgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuZ2FsZXJ5IC5pbWctY29udGFpbmVyLXBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuZ2FsZXJ5IC5pbWctY29udGFpbmVyLXBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLmdhbGVyeSAuaW1nLWNvbnRhaW5lci1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\GaleryProducts.js */"));
    }
  }]);

  return GaleryProducts;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/JumboAskForm.js":
/*!************************************!*\
  !*** ./components/JumboAskForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JumboAskForm; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function JumboAskForm() {
  return __jsx("div", {
    className: "jsx-363596924"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "container-fluid jumbo-askForm"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "container"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "row"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "col"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "wrapper"
  }, __jsx("div", {
    className: "jsx-363596924" + " " + "text-container"
  }, __jsx("span", {
    className: "jsx-363596924" + " " + "jumbo-title"
  }, "\u041D\u0443\u0436\u0435\u043D \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438?"), __jsx("span", {
    className: "jsx-363596924" + " " + "jumbo-text"
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0430\u043D\u043A\u0435\u0442\u0443 \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044F\u0442 \u0432\u0430\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.", ' ')), __jsx("div", {
    className: "jsx-363596924" + " " + "button-container"
  }, __jsx("a", {
    href: "/askForm",
    className: "jsx-363596924" + " " + "button-askForm"
  }, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "363596924"
  }, ".jumbo-askForm.jsx-363596924{background:var(--new-gradient);min-height:150px;padding-top:30px;padding-bottom:30px;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924{display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto;grid-gap:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924{display:block;width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-title.jsx-363596924{display:block;font-size:20px;font-weight:900;color:var(--accent-dark);color:white;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-text.jsx-363596924{display:block;margin-top:10px;font-size:14px;padding-right:120px;font-weight:500;color:var(--text);}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924{width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924{position:relative;display:block;margin:0 auto;width:270px;height:70px;border-radius:3px;border:3px solid white;color:white;text-align:center;font-family:var(--molot-font);line-height:66px;font-size:24px;overflow:hidden;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924::after{position:absolute;display:block;content:'';height:120px;width:35px;background-color:rgb(238,238,238);top:50%;-webkit-transform:translateY(-50%) rotate(15deg);-ms-transform:translateY(-50%) rotate(15deg);transform:translateY(-50%) rotate(15deg);left:-10px;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924:hover.jsx-363596924::after{left:240px;}@media (min-width:576px){.jumbo-askForm.jsx-363596924{min-height:150px;padding-top:30px;padding-bottom:30px;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924{padding-left:15px;padding-right:15px;}}@media (min-width:768px){.jumbo-askForm.jsx-363596924{margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924{grid-template-columns:2fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924{display:block;width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-title.jsx-363596924{display:block;font-size:20px;font-weight:900;color:var(--accent-dark);color:white;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-text.jsx-363596924{display:block;margin-top:10px;font-size:14px;padding-right:0px;font-weight:500;color:var(--text);}}@media (min-width:992px){.jumbo-askForm.jsx-363596924{min-height:150px;padding-top:30px;padding-bottom:30px;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924{display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924{display:block;width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-title.jsx-363596924{display:block;font-size:22px;font-weight:900;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-text.jsx-363596924{display:block;font-size:16px;font-weight:500;}}@media (min-width:1200px){.jumbo-askForm.jsx-363596924{background:url('/images/textures/gplaypattern_@2X.png');min-height:150px;padding-top:30px;padding-bottom:30px;margin-bottom:0px;border-top:15px solid rgb(240,240,240);border-bottom:15px solid rgb(240,240,240);}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924{display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924{display:block;width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-title.jsx-363596924{display:block;font-size:36px;margin-bottom:0px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:300;line-height:34px;color:var(--text);}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .text-container.jsx-363596924 .jumbo-text.jsx-363596924{display:block;font-size:18px;font-weight:900;color:var(--accent-grey);}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924{width:100%;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924{position:relative;display:block;margin:0 auto;width:270px;height:70px;border-radius:3px;border:3px solid var(--accent-grey);color:var(--accent-grey);text-align:center;font-family:var(--molot-font);line-height:66px;font-size:24px;overflow:hidden;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924::after{position:absolute;display:block;content:'';height:120px;width:35px;background-color:rgb(238,238,238);top:50%;-webkit-transform:translateY(-50%) rotate(15deg);-ms-transform:translateY(-50%) rotate(15deg);transform:translateY(-50%) rotate(15deg);left:-10px;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924:hover{background-color:#fff;box-shadow:var(--box-shadow);}.jumbo-askForm.jsx-363596924 .wrapper.jsx-363596924 .button-container.jsx-363596924 .button-askForm.jsx-363596924:hover.jsx-363596924::after{left:240px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxKdW1ib0Fza0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUcwQyxBQU1sQixBQU9DLEFBSUEsQUFPQSxBQVFILEFBR08sQUFnQkEsQUFZUCxBQUtRLEFBS0MsQUFNQyxBQUtXLEFBSWhCLEFBSUEsQUFPQSxBQVVHLEFBS0osQUFLQyxBQUlBLEFBS0EsQUFPMEMsQUFTM0MsQUFLQyxBQUlBLEFBU0EsQUFNSCxBQUdPLEFBZ0JBLEFBWUksQUFPWCxXQTdLZixBQStCQSxBQXlHRSxBQXNDQSxFQXhNMEIsQUE0R00sQUE4QkEsQ0FuSXJCLEFBSUksQUFPQyxBQWdFSCxBQUlJLEFBT0MsQUFvQkwsQUFJSSxBQUtBLEFBcUJKLEFBSUksQUFTQSxHQTlGRSxBQXlDQSxDQTFFTCxBQWdCQSxBQXNCTyxBQWtHTCxBQWdCQSxDQTVHRCxHQXdIZ0IsR0F6TGpDLEFBMkVFLEFBK0JBLEFBOEJBLElBcElnQixBQTJFRSxBQStCQSxBQUtBLEFBeUJFLEFBU0YsQ0ExSUgsQUEyRFUsQUFnQlIsQ0FwR0EsQ0FvQ0gsQUFnQkgsQUF3SEssQUFnQkgsRUF2SFMsQUF5Q0EsR0FwQ3RCLEVBbkU0QixJQThDZixBQThEWSxBQThCQSxBQTRDVixFQTFLVSxBQU9MLEFBb0VPLEFBT1AsQUF3QnBCLEFBS0EsQUFrQzJCLENBL0hmLEFBd0lFLENBbEJVLENBMUpQLEdBdU1qQixFQW5IQSxDQWZBLEFBeUNBLEVBekRXLEFBaUZRLEFBdUROLEVBeEpELEFBd0lFLEtBeEVJLEVBcEdFLEFBeUJKLENBeUZoQixBQThCQSxDQTFJYyxBQStDc0IsQUF3SUUsR0EzSzFCLEFBbUJNLEFBd0RKLEFBc0VkLEFBVW9CLEdBdkNELE1BakNDLEVBOUZELEFBbUJELENBUHBCLEFBMkVFLEdBN0ZGLEdBcUN5QixBQXdJZSxFQXZDaEIsR0F6REQsSUF3QnJCLEVBM0VGLEVBMkJVLEFBd0lFLFFBdkkrQixBQXdJRSxDQXZEdkIsQ0FqR1IsWUFDTSxDQXVJUyxJQXRDZ0IsYUFoR2IsUUF1SVYsR0F0QkYsZUFoQjRCLEFBdUNkLENBdEJiLEdBakhGLEdBbENuQixXQW9Kc0IsQ0E3RXBCLEVBcENlLFNBdUlJLE1BdElILEFBaUhoQixNQWxCQSxLQXdDaUIsS0F0SUcsVUF1SUYsZUE1SFAsQUF3SUUsQ0FYUyxVQTVIRixBQXdJRSxZQW5KeEIsMEJBd0lFLFVBNUhGLEFBd0lFIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxKdW1ib0Fza0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSnVtYm9Bc2tGb3JtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBqdW1iby1hc2tGb3JtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImp1bWJvLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3Rg9C20LXQvSDQtNC10YLQsNC70YzQvdGL0Lkg0YDQsNGB0YfRkdGCINGN0L3QtdGA0LPQvtGD0YHRgtCw0L3QvtCy0LrQuD9cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJqdW1iby10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNC/0L7Qu9C90Lgg0LDQvdC60LXRgtGDINC4INC90LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0L/QvtC00LPQvtGC0L7QstGP0YIg0LLQsNC8INC/0L7QtNGA0L7QsdC90YvQuVxyXG4gICAgICAgICAgICAgICAgICAgINC+0YLQstC10YIueycgJ31cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hc2tGb3JtXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWFza0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICDQntC/0YDQvtGB0L3Ri9C5INC70LjRgdGCXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW5ldy1ncmFkaWVudCk7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcbiAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAudGV4dC1jb250YWluZXIgLmp1bWJvLXRpdGxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZGFyayk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC50ZXh0LWNvbnRhaW5lciAuanVtYm8tdGV4dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAuYnV0dG9uLWNvbnRhaW5lciAuYnV0dG9uLWFza0Zvcm0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDY2cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24tYXNrRm9ybTo6YWZ0ZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAuYnV0dG9uLWNvbnRhaW5lciAuYnV0dG9uLWFza0Zvcm06aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgIGxlZnQ6IDI0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAudGV4dC1jb250YWluZXIgLmp1bWJvLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1kYXJrKTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0gLndyYXBwZXIgLnRleHQtY29udGFpbmVyIC5qdW1iby10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0gLndyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0gLndyYXBwZXIgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0gLndyYXBwZXIgLnRleHQtY29udGFpbmVyIC5qdW1iby10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAudGV4dC1jb250YWluZXIgLmp1bWJvLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2ltYWdlcy90ZXh0dXJlcy9ncGxheXBhdHRlcm5fQDJYLnBuZycpO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC50ZXh0LWNvbnRhaW5lciAuanVtYm8tdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAudGV4dC1jb250YWluZXIgLmp1bWJvLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmp1bWJvLWFza0Zvcm0gLndyYXBwZXIgLmJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24tYXNrRm9ybSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtIC53cmFwcGVyIC5idXR0b24tY29udGFpbmVyIC5idXR0b24tYXNrRm9ybTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuanVtYm8tYXNrRm9ybSAud3JhcHBlciAuYnV0dG9uLWNvbnRhaW5lciAuYnV0dG9uLWFza0Zvcm06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5qdW1iby1hc2tGb3JtXHJcbiAgICAgICAgICAgIC53cmFwcGVyXHJcbiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5idXR0b24tYXNrRm9ybTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAyNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\JumboAskForm.js */"));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_9__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import { Spring } from 'react-spring';
// import * as gtag from '../lib/gtag';


 // Router.events.on('routeChangeComplete', url => gtag.pageview(url));

var Layout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_yandex_metrika__WEBPACK_IMPORTED_MODULE_9___default()('hit', next_router__WEBPACK_IMPORTED_MODULE_6___default.a.router.asPath);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(_nav__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx("div", {
        className: "header-block"
      }), __jsx(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_9__["YMInitializer"], {
        accounts: [51052037],
        options: {
          defer: true,
          webvisor: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          trackHash: true
        },
        version: "2"
      }), this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout); // export default ({ children }) => (
//   <div>
//     <Nav />
//     <YMInitializer
//       accounts={[51052037]}
//       options={{
//         defer: true,
//         webvisor: true,
//         clickmap: true,
//         trackLinks: true,
//         accurateTrackBounce: true,
//         trackHash: true
//       }}
//       version="2"
//     />
//     {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
//       {props => <div style={props}>{children}</div>}
//     </Spring> */}
//     {children}
//     <Footer />
//   </div>
// );

/***/ }),

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\Link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  var child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/YoutubeVideo.js":
/*!************************************!*\
  !*** ./components/YoutubeVideo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var YoutubeVideo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(YoutubeVideo, _React$Component);

  var _super = _createSuper(YoutubeVideo);

  function YoutubeVideo() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, YoutubeVideo);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YoutubeVideo, [{
    key: "render",
    value: function render() {
      var opts = {
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "myVideo",
        videoId: "n4w_VCaN6C8",
        opts: opts,
        onReady: this._onReady
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4268982151"
      }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUVpRSxBQUVsQyxBQU1aLEFBSUssQUFNSSxBQUtBLE1BZGpCLEtBSWtCLEVBTWhCLEFBS0EsS0FyQm1CLFNBV3JCLFVBVmEsV0FDRSxhQUNmIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNsYXNzIFlvdXR1YmVWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cIm40d19WQ2FONkM4XCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW87XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideo.js */"));
    }
  }, {
    key: "_onReady",
    value: function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }]);

  return YoutubeVideo;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideo);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables/serviceList */ "./components/tables/serviceList.js");
var _this = undefined,
    _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Footer = function Footer() {
  return __jsx("footer", {
    className: "jsx-2510472162" + " " + "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-2510472162" + " " + "gaz-mash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "jsx-2510472162" + " " + "dots-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "jsx-2510472162" + " " + "white-stripe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "jsx-2510472162" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2510472162" + " " + "row m-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2510472162" + " " + "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "jsx-2510472162" + " " + "footer-logo-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/logo-big.png",
    alt: "\u041E\u041E\u041E \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
    title: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",
    className: "jsx-2510472162" + " " + "footer-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  })))), __jsx("div", {
    className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2510472162" + " " + "link-map-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), __jsx("ul", {
    className: "jsx-2510472162" + " " + "link-map-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        as = _ref.as;
    return __jsx("li", {
      key: key,
      className: "jsx-2510472162" + " " + "link-map-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      as: as,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "jsx-2510472162" + " " + "link-map-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, label)));
  }), __jsx("a", {
    href: "/calculator",
    className: "jsx-2510472162" + " " + "footer-button calc-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), __jsx("a", {
    href: "/askForm",
    className: "jsx-2510472162" + " " + "footer-button askForm-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), __jsx("div", {
    className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2510472162" + " " + "link-map-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438:"), __jsx("ul", {
    className: "jsx-2510472162" + " " + "link-map-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item) {
    return __jsx("li", {
      key: item.key,
      className: "jsx-2510472162" + " " + "link-map-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/uslugi/".concat(item.href),
      as: "/uslugi/".concat(item.as),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "jsx-2510472162" + " " + "link-map-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, item.label)));
  }))), __jsx("div", {
    className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2510472162" + " " + "contacts-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), __jsx("ul", {
    className: "jsx-2510472162" + " " + "adres-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-2510472162",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://yandex.ru/maps/-/CBFyIKsQPB",
    target: "_blank",
    className: "jsx-2510472162" + " " + "adres-map-link pb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", __jsx("br", {
    className: "jsx-2510472162",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), __jsx("li", {
    className: "jsx-2510472162",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2510472162" + " " + "adres-phones",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "tel:+74852260368",
    className: "jsx-2510472162" + " " + "phone-link phone-link-big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "+7 ", __jsx("b", {
    className: "jsx-2510472162" + " " + "text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 22
    }
  }, "(4852)"), " 26-03-68"), __jsx("a", {
    href: "tel:+74852267960",
    className: "jsx-2510472162" + " " + "phone-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "+7 ", __jsx("b", {
    className: "jsx-2510472162" + " " + "text-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 22
    }
  }, "(4852)"), " 26-79-60"))), __jsx("li", {
    className: "jsx-2510472162",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:market@gmenergo.ru",
    className: "jsx-2510472162" + " " + "adres-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "market@gmenergo.ru")), __jsx("li", {
    className: "jsx-2510472162",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  })), __jsx("span", {
    className: "jsx-2510472162" + " " + "link-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), __jsx("span", {
    className: "jsx-2510472162" + " " + "link-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), __jsx("div", {
    className: "jsx-2510472162" + " " + "intersell",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://intersell.su/",
    className: "jsx-2510472162" + " " + "interlink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2510472162" + " " + "text-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2510472162" + " " + "logo-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), __jsx("span", {
    className: "jsx-2510472162" + " " + "logo-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "intersell.su")), __jsx("div", {
    className: "jsx-2510472162" + " " + "logo-cont",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "jsx-2510472162" + " " + "logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "IS")))), __jsx("div", {
    className: "jsx-2510472162" + " " + "rights-reserved",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2510472162",
    __self: _this
  }, ".text-grey.jsx-2510472162{color:#e5e5e5;}.footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}.footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}.footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}.footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}.footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdnQixBQUd1QixBQUlBLEFBYUYsQUFJSSxBQVFFLEFBY0wsQUFPQyxBQU1nQixBQVdoQixBQUlDLEFBTUwsQUFHQyxBQVNBLEFBSW1CLEFBVWhCLEFBTWdCLEFBVWQsQUFNTixBQUlJLEFBUUQsQUFHRixBQVNPLEFBZVAsQUFLRCxBQUdlLEFBY2YsQUFXSSxBQVlKLEFBU0ksQUFRQSxBQVdJLEFBR0QsQUFHYyxBQUdiLEFBR0EsQUFNQSxBQUdGLEFBU0EsQUFlRyxBQUdILEFBWUksQUFVWCxBQVNPLEFBTUosQUFJTSxBQUdELEFBR2MsQUFHWixBQUtELEFBTUEsQUFHRixPQXpDTixHQXRPWixBQWdEb0IsQUE0Q3BCLEFBaUJ5QixBQXVCQSxBQWlIUCxDQWxQRixBQVNBLEFBbURFLEFBd0JMLENBbkorQixDQXdINUMsQ0F6SUEsQUFJYyxBQThDRCxBQWlCQyxBQW9DRCxBQTBCRyxBQW9FSSxBQXFCSixBQVFBLEFBZ0NFLEFBU0ksQUFrQkEsQUErQlAsQUFpQ0csQ0F0UkgsQUF5S2IsQUFvRVUsQUFxQlYsQ0FwVGdCLEFBa0dELEFBc0hmLEFBU0EsQUFHaUIsQUFNakIsQUF1RUEsQUFjaUIsQUFNakIsQ0FoRUEsQUFxRGtCLENBbFRKLEFBd0hILEFBb0pHLElBcElKLENBZ0pHLENBY2IsQ0FoUlksQUE4QkcsQUFTakIsQUFjb0IsQUFvRUosQUFpSkEsQ0F4VEYsQUErRGQsQ0F5RW9CLENBZnBCLEFBSWEsQUF5RkssQUFRQSxBQWdDSCxBQTJGQSxDQXhNSyxBQTZGbEIsQUF5RkEsQ0FwUmMsQUFxQ0EsQUFnQkEsQUE2TEMsQ0FsTEYsQUFrSUUsQUEyRkEsQ0EvVEUsQUFRUCxBQXdJWixBQWdDYSxBQXNFSSxBQWtCRixDQWtERyxDQTFCRCxHQWxRSSxBQTBRRSxDQXhURSxDQTZIUixBQTBDRyxBQXVGQSxBQTJGQSxDQTdRRixFQW5EVCxDQTBFUSxBQThGUCxBQXdGbUIsQUFZakIsQ0FsUEMsQUFxQ0csQUFnQkgsQUE4R00sQUFRUSxDQXRGYixBQStISCxFQXRIQSxBQWdLZ0IsQUEwQnpCLEVBMVRvQixBQVNaLEVBZFYsQUFzTFcsQUFvR0csQ0E5QlMsRUExSUwsQ0ExRUksQUFxREEsQUFzSkgsQUEyRkMsQ0EzU3BCLEFBOEJtQixBQXFFVCxBQXVLUixDQTlSUSxBQThHSSxBQStCRixDQS9FTSxBQVdsQixFQStGYSxDQWxNTyxBQXNOSCxBQWdGQSxHQXBKRixDQXZIWSxFQTZJZixDQWlIRSxDQXhRaUQsQUF3SHBELEFBcUZNLENBaEdFLEFBaUlDLENBNUROLEFBcUVRLEFBa0ZILEVBN1FELENBekNPLEFBcURSLEFBOE1ILENBblBPLEFBcURBLENBOEdFLENBOUNWLENBL0JDLEFBZ0pBLENBelJBLElBbU1PLENBMkJGLEFBeUU4QyxFQXhDNUMsQUEyRkEsQ0E1TnJCLENBMkNhLEFBaUhBLENBMU5XLEFBYUQsQUFZRixBQStLRixDQTlIbkIsQ0F6SXFCLEFBa0xXLEFBdUJoQixNQWlGSixFQWpIRSxFQXFESSxDQTNCZ0IsQ0E0RGhDLEFBMkZBLENBbEZjLENBeEpRLEFBMEZKLEFBd0NNLEFBeUNmLEFBa0RlLEtBNVVQLENBeUtDLENBa0hKLElBbkJLLENBMUNyQixJQTVDb0IsRUF3QlAsQ0FrRlgsR0EzUmtCLENBY0EsQUErUjJDLENBcEkvQyxJQStGQSxDQTlERixJQTNEVyxDQW1DTixJQVJDLEVBektPLEFBd1F6QixBQTRCQSxDQXRSRixBQTRMbUIsTUFuTE4sSUEySk8sS0FSVyxFQWxKaEIsQUFtTGYsSUE5SXFCLENBYkosQUFxREEsRUFwR0MsR0ErQkcsQ0FtSkwsRUExSkQsQ0EwTGYsS0E3SG1CLENBckNBLEFBcURBLEFBUW5CLEFBa0lFLEFBMkZBLEdBelVGLEFBNERBLENBK09FLENBekhlLENBMUo2QyxDQWdEOUQsU0FhZ0IsQ0FyQ0ssQUFxRE0sR0E4RVEsSUFZVixNQXpHekIsTUFyQzJCLE1BcUQzQixFQW1FQSxHQXVCQSxPQW5EeUIsT0EzRnpCLEtBekIwQixpQkFNYixPQUxiLElBTWlCLEFBb0pqQixlQW5KQSxzREE2R2MsWUFDQSxZQUNBLFlBQ1csdUJBQ0Msb0ZBQzFCIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgc2VydmljZUxpc3QgZnJvbSAnLi90YWJsZXMvc2VydmljZUxpc3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhei1tYXNoXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90cy1yaWdodFwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLXN0cmlwZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLWJpZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ29cIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwi0J7QntCeINCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCb0L7Qs9C+0YLQuNC/IC0g0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTMgbGluay1tYXBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstbWFwLWhlYWRlclwiPtCa0LDRgNGC0LAg0YHQsNC50YLQsDo8L3NwYW4+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGluay1tYXAtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rLW1hcC1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntsYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gY2FsYy1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0JrQsNC70YzQutGD0LvRj9GC0L7RgFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXNrRm9ybVwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gYXNrRm9ybS1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRglxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy01IGxpbmstbWFwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLW1hcC1oZWFkZXJcIj7Qo9GB0LvRg9Cz0Lg6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmstbWFwLWxpc3RcIj5cclxuICAgICAgICAgICAge3NlcnZpY2VMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluay1tYXAtaXRlbVwiIGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2x1Z2kvJHtpdGVtLmhyZWZ9YH0gYXM9e2AvdXNsdWdpLyR7aXRlbS5hc31gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntpdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RzLWhlYWRlclwiPtCa0L7QvdGC0LDQutGC0Ys6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFkcmVzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly95YW5kZXgucnUvbWFwcy8tL0NCRnlJS3NRUEJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRyZXMtbWFwLWxpbmsgcGItM1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDE1MDA2Miwg0KDQvtGB0YHQuNGPLCDQsy4g0K/RgNC+0YHQu9Cw0LLQu9GMLFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICDQv9GALdGCLiZuYnNwO9CQ0LLQuNCw0YLQvtGA0L7Qsi0xNTVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcmVzLXBob25lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorNzQ4NTIyNjAzNjhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG9uZS1saW5rIHBob25lLWxpbmstYmlnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgKzcgPGIgY2xhc3NOYW1lPVwidGV4dC1ncmV5XCI+KDQ4NTIpPC9iPiAyNi0wMy02OFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNzQ4NTIyNjc5NjBcIiBjbGFzc05hbWU9XCJwaG9uZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICs3IDxiIGNsYXNzTmFtZT1cInRleHQtZ3JleVwiPig0ODUyKTwvYj4gMjYtNzktNjBcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWFya2V0QGdtZW5lcmdvLnJ1XCIgY2xhc3NOYW1lPVwiYWRyZXMtZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIG1hcmtldEBnbWVuZXJnby5ydVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIC8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay0xXCI+0LPRgNCw0YTQuNC6INGA0LDQsdC+0YLRizo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLTFcIj7Qv9C9LdC/0YI6IDk6MDAtMTg6MDA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyc2VsbFwiPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cDovL2ludGVyc2VsbC5zdS9cIiBjbGFzc05hbWU9XCJpbnRlcmxpbmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWRlc2NyaXB0aW9uXCI+0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1uYW1lXCI+aW50ZXJzZWxsLnN1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+SVM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodHMtcmVzZXJ2ZWRcIj5cclxuICAgICAgMjAwNiAtIDIwMTkg0J7QntCeIFwi0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCIgJmNvcHk7INCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90YsuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXItYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXItYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjMzUzNTM1IDAlLCAjMmYyZjJmIDEwMCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvYmctZ2F6LW1hc2gucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5mb290ZXItbG9nby1jb250YWluZXIgLmZvb3Rlci1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5jb250YWN0cy1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbC1ncmV5KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAubGluay0xIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLXBob25lcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1lbWFpbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWwtZ3JleSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IC5saW5rLW1hcC1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCAubGluay1tYXAtaXRlbSAubGluay1tYXAtbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluazpob3ZlciAubG9nby1jb250IHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rOmhvdmVyIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuaW50ZXJzZWxsIC5pbnRlcmxpbmsgLmxvZ28tY29udCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NTlkOTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4gMC4ycztcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAubG9nby1jb250OjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICMyNzU5ZDk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLW1hcC1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC53aGl0ZS1zdHJpcGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgIHRvcDogNThweDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuZG90cy1yaWdodCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xyXG4gICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICByaWdodDogLTUlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvZG90cy1iaWctd2hpdGUucG5nJykgMCUgMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLWdhei1tYXNoLnBuZycpIDUlIDEwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciAuZm9vdGVyLWxvZ28ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmNvbnRhY3RzLWhlYWRlciB7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3Qge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1waG9uZXMgLnBob25lLWxpbmsge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1oZWFkZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/form.js":
/*!****************************!*\
  !*** ./components/form.js ***!
  \****************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var FormPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FormPage, _React$Component);

  var _super = _createSuper(FormPage);

  function FormPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormPage);

    _this = _super.call(this, props);
    _this.state = {
      userEmail: '',
      userPhone: '',
      isEmailEmpty: true,
      isPhoneEmpty: true,
      isFormFullfiled: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleChangeEmail = _this.handleChangeEmail.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleChangePhone = _this.handleChangePhone.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormPage, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      fetch('/api/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.userEmail,
          product: this.props.product,
          phone: this.state.userPhone
        })
      }).then(function (res) {
        return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/confirm-email');
      });
    }
  }, {
    key: "handleChangeEmail",
    value: function handleChangeEmail(e) {
      this.setState({
        userEmail: e.target.value
      });
    }
  }, {
    key: "handleChangePhone",
    value: function handleChangePhone(e) {
      this.setState({
        userPhone: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-3691667022" + " " + "container-fluid form-bg"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "container"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "row"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "col-12"
      }, __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-3691667022" + " " + "forma"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "dots-left"
      }), __jsx("div", {
        className: "jsx-3691667022" + " " + "form-group"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "form-left colform"
      }, __jsx("div", {
        className: "jsx-3691667022" + " " + "form-context"
      }, __jsx("p", {
        className: "jsx-3691667022" + " " + "text-common form-cta-title"
      }, "\u0417\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0438\u043B\u0438 \u0443\u0441\u043B\u0443\u0433\u0430?"), __jsx("p", {
        className: "jsx-3691667022" + " " + "form-cta-text-2"
      }, "C\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u043B\u044E\u0431\u044B\u043C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C"))), __jsx("div", {
        className: "jsx-3691667022" + " " + "form-mid colform"
      }, __jsx("p", {
        className: "jsx-3691667022" + " " + "text-common form-text-or"
      }, "\u0418\u041B\u0418")), __jsx("div", {
        className: "jsx-3691667022" + " " + "form-right colform"
      }, __jsx("p", {
        className: "jsx-3691667022" + " " + "text-common form-cta-text-2 form-cta-text-22 mb-3"
      }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438!"), __jsx("input", {
        onChange: this.handleChangeEmail,
        type: "email",
        id: "userEmail",
        "aria-describedby": "emailHelp",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail:",
        required: true,
        className: "jsx-3691667022" + " " + "userEmail text-common"
      }), __jsx("input", {
        onChange: this.handleChangePhone,
        type: "phone",
        id: "userPhone",
        "aria-describedby": "phoneHelp",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438:",
        required: true,
        className: "jsx-3691667022" + " " + "userEmail text-common"
      }), __jsx("button", {
        className: "jsx-3691667022" + " " + "form-button"
      }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3691667022"
      }, ".form-bg.jsx-3691667022{margin-top:30px;padding-left:15px;padding-right:15px;}.forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:30px;border-radius:var(--border-radius);background:linear-gradient( to bottom, #fafafa 0%, #fff 20%, #fff 80%, #fafafa 100% );border:1px solid #dcdcdc;}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);color:var(--accent-dark);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;text-align:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:24px;line-height:30px;color:var(--accent-dark);padding-bottom:15px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;border-radius:50px;padding-left:15px;width:100%;font-size:14px;height:40px;margin-bottom:15px;background-color:#e6e6e6;border:none;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:10px 15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow-up);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:16px;font-weight:500;line-height:20px;color:var(--sub-color);}@media (min-width:576px){.forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:60px;border-radius:var(--border-radius);}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:34px;text-align:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:34px;line-height:34px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{margin-bottom:20px;height:45px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:15px 30px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:18px;padding-right:80px;line-height:22px;font-weight:700;}}@media (min-width:768px){.forma.jsx-3691667022{padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 10fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:36px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:none;position:absolute;content:'';width:2px;height:180px;top:-120px;left:50%;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{display:none;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-weight:700;font-size:36px;line-height:40px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:15px;width:230px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .callTime.jsx-3691667022{display:block;border-radius:30px;padding-left:15px;width:230px;height:42px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:15px 20px;margin:0 auto 20px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:17px;line-height:20px;padding-right:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:20px;padding-left:20px;}}@media (min-width:992px){.forma.jsx-3691667022{overflow:hidden;padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{padding-left:30px;display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 11fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:44px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;border:4px solid white;padding:30px;border-radius:var(--border-radius);box-shadow:45px 0px 60px -30px rgba(255,255,255,0.4), -45px 0px 60px -30px rgba(255,255,255,0.4);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:block;position:absolute;content:'';width:2px;height:200px;top:-200px;left:50%;-webkit-transform:translateX(-50%) rotate(0deg);-ms-transform:translateX(-50%) rotate(0deg);transform:translateX(-50%) rotate(0deg);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';display:block;left:50%;top:100px;width:2px;height:173px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-size:44px;line-height:48px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:30px;height:60px;width:300px;margin:0 auto 20px;font-size:16px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:18px 20px;margin:15px auto 0px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:22px;line-height:27px;padding-right:100px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:50px;padding-left:50px;margin-bottom:15px;}}@media (min-width:1400px){.forma.jsx-3691667022{margin-left:15px;margin-right:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHNkIsQUFLWSxBQWFmLEFBTUcsQUFJRixBQVNJLEFBVUEsQUFVWSxBQVFoQixBQVdBLEFBY0MsQUFJQSxBQU9lLEFBS2YsQUFNRyxBQUlGLEFBUUksQUFTQSxBQVNZLEFBTVgsQUFJTCxBQWNDLEFBU0YsQUFHQSxBQU1BLEFBS0MsQUFTRCxBQVNBLEFBR0csQUFPRixBQU1BLEFBUUEsQUFTQyxBQUlBLEFBS0csQUFRRixBQUlFLEFBT0wsQUFLQyxBQWNBLEFBV0ksQUFVSCxBQU1ELEFBUUEsQUFTQyxBQUlBLEFBS0csQUFTRCxhQTFVTyxBQXdGRSxBQXFFNUIsQUFHZSxBQW9CSyxBQVNwQixDQW5MOEIsQUFxQ1gsQUFXQSxBQXdDYSxBQW9DWCxBQXFDVyxBQTRCWixBQU1DLEFBUUEsQUEwQ1csQUFjWixBQTJCQSxBQVFDLENBeE9XLEFBSWhCLEFBd0VLLEFBMEVVLEFBSVosQUFnRUEsQUF1QlksQUFJWixDQS9VRCxBQXdCQyxBQXdGRSxBQWtHSixBQStDRixDQTRGSyxDQXhUVCxBQVVBLEFBNkVFLEFBU0EsQUFvSFEsQUFZTixBQXFDRixBQTBDUSxDQWhNUCxPQStCd0IsRUE5S25CLEFBZ0dFLENBL0RYLEFBVUEsQUE2RUUsQUFTQSxBQTRIWixBQXlDZ0IsQ0FsUEEsQUFxRkUsQ0EvQ0QsQUFzRGpCLEFBa0RhLEFBWU0sQUFtREosQ0E1Q0QsQUEyQkksQUEyQ0wsQUFxQlMsQUFNUixBQXFCUSxDQTlRSixBQVdQLEFBNEVFLEFBdUVPLEFBUU4sQUEyRkEsQ0FsVUssQUFzS0EsQ0E5SXJCLEFBd0ZFLEFBNk9BLEVBcEdvQixBQTJGQSxFQWxVYyxBQW9CdEIsQUFVRCxBQTBEeUIsQUFtQnRCLEFBU0QsR0FpRUQsQ0F5RkEsQUFXRCxDQS9RYyxBQWlESyxBQXVDVCxBQXFDVyxBQW9DWCxBQTZCQSxBQXNCckIsQUFzQnNDLEFBV2pCLEFBMENQLEFBZ0JkLENBbkdvQixBQTJGQSxDQTFRTCxBQXFGRSxDQXpJa0IsQUFxRnJDLEFBV3VDLENBTmQsQUFvSEQsQUFrQ3RCLEVBcE1RLEFBc0ZFLENBaEdGLEFBMkJHLEFBNERELEFBeUNRLEFBeURKLENBeEJDLEFBb0dILEFBU1MsQUEyQnJCLENBL1VGLEFBZ1NpQixFQXZDZixBQTJGcUIsQ0F6QkEsRUExUW1CLEFBc0ZFLENBaEdGLEFBdUZFLEVBckV6QixBQXFGRSxDQTVFSixBQWdIVyxBQTBIZCxDQWxGWixBQU1jLEFBUU8sQUEyRkUsRUEzSFYsQ0F5RkEsQ0ExSGIsQ0E0Q3FCLENBdkxGLEVBbUVyQixBQXNORSxDQVJlLENBM1JDLEFBd0ZFLENBN0JpQixBQTRFRSxBQTZCYixBQW9GQSxBQTJFeEIsQ0FwSHFCLEFBMkZKLENBbkhOLENBdElDLEFBZ09ELENBek9jLEFBcUZ6QixFQXVIMEIsRUEzUHpCLEFBMEZELEFBb0lrQyxFQTJGQSxDQTFIbEMsQUFvRzZCLENBM0g3QixBQWlIMEMsQ0FoRjFDLEVBak1GLEFBaURxQixBQXVDbkIsQ0FrTkEsSUEzRkEsU0F2S29CLENBNE1wQixJQWxNeUIsQ0FTYixBQTRFRSxLQWdGUSxFQTJGQSxLQXRQSixBQTRFRSxFQS9GdEIsVUFVYyxJQThDSyxBQXlFQSxBQW9GQSxFQWpNRSxBQTRFRSxNQXJGdkIsT0E4Q3NCLEFBa0VLLEFBT0wsQUE2RUssQUFPTCxVQXJQTCxBQThNZixFQTJGQSxJQTFUeUIsRUEwR0wsQUF5RUEsQUFvRkEsT0FyUEYsQ0FpUmxCLFVBeExBLEVBckVXLEFBc0ZFLENBaEdGLEFBdUZFLEVBbEhmLEVBa0JvQixNQW9CaUIsQUFzRm5DLENBaEdtQyxBQXVGbkMsV0FoR0YsS0FxUUUsY0FwTm1CLEFBNEVFLElBekd2QixDQVZBLElBc0pzQixBQW9GQSxVQWxNUyxBQTRFRSxBQTBCL0IsQUFvRkEsUUEzRUEsQUFvRnlCLHFCQWxNVixBQTRFRSxFQXVIRixhQWxNYSxBQTRFRSxBQXVITyxtQ0FFWSw2QkFwTW5ELEFBNEVFLG9FQXlIQSIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY2xhc3MgRm9ybVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1c2VyRW1haWw6ICcnLFxyXG4gICAgICB1c2VyUGhvbmU6ICcnLFxyXG4gICAgICBpc0VtYWlsRW1wdHk6IHRydWUsXHJcbiAgICAgIGlzUGhvbmVFbXB0eTogdHJ1ZSxcclxuICAgICAgaXNGb3JtRnVsbGZpbGVkOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlRW1haWwgPSB0aGlzLmhhbmRsZUNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVBob25lID0gdGhpcy5oYW5kbGVDaGFuZ2VQaG9uZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGZldGNoKCcvYXBpL2VtYWlsJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLnVzZXJFbWFpbCxcclxuICAgICAgICBwcm9kdWN0OiB0aGlzLnByb3BzLnByb2R1Y3QsXHJcbiAgICAgICAgcGhvbmU6IHRoaXMuc3RhdGUudXNlclBob25lXHJcbiAgICAgIH0pXHJcbiAgICB9KS50aGVuKHJlcyA9PiBSb3V0ZXIucHVzaCgnL2NvbmZpcm0tZW1haWwnKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2VFbWFpbChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlckVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlUGhvbmUoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJQaG9uZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBmb3JtLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybWFcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3RzLWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1sZWZ0IGNvbGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jb21tb24gZm9ybS1jdGEtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNC40L3RgtC10YDQtdGB0L7QstCw0Lsg0L/RgNC+0LTRg9C60YIg0LjQu9C4INGD0YHQu9GD0LPQsD9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tY3RhLXRleHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBD0LLRj9C20LjRgtC10YHRjCDRgSDQvdCw0LzQuCDQu9GO0LHRi9C8INGD0LTQvtCx0L3Ri9C8INGB0L/QvtGB0L7QsdC+0LxcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1taWQgY29sZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY29tbW9uIGZvcm0tdGV4dC1vclwiPtCY0JvQmDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yaWdodCBjb2xmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jb21tb24gZm9ybS1jdGEtdGV4dC0yIGZvcm0tY3RhLXRleHQtMjIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JfQsNC/0L7Qu9C90LjRgtC1INGE0L7RgNC80YMg0Lgg0L3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdCy0Y/QttGD0YLRgdGPINGBINCy0LDQvNC4IVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJFbWFpbCB0ZXh0LWNvbW1vblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUgZS1tYWlsOlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyRW1haWwgdGV4dC1jb21tb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyUGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBob25lSGVscFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC90L7QvNC10YAg0LTQu9GPINGB0LLRj9C30Lg6XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JfQsNC60LDQt9Cw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmZvcm0tYmcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybWEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICAjZmFmYWZhIDAlLFxyXG4gICAgICAgICAgICAgICNmZmYgMjAlLFxyXG4gICAgICAgICAgICAgICNmZmYgODAlLFxyXG4gICAgICAgICAgICAgICNmYWZhZmEgMTAwJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLXRleHQtb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWRhcmspO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLXRleHQtb3I6OmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhbGwtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLXRleHQtb3I6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhbGwtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWNvbnRleHQgLmZvcm0tY3RhLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWRhcmspO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAudXNlckVtYWlsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0gLmZvcm0tYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWN0YS10ZXh0LTIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuZm9ybWEge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS10ZXh0LW9yIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0gLmZvcm0tdGV4dC1vcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAtMzBweDtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS10ZXh0LW9yOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWNvbnRleHQgLmZvcm0tY3RhLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC51c2VyRW1haWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byAwO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1jdGEtdGV4dC0yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5mb3JtYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDBweDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMWZyIDEwZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuZm9ybS1taWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmZvcm0tbWlkIC5mb3JtLXRleHQtb3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmZvcm0tbWlkIC5mb3JtLXRleHQtb3I6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAtMTIwcHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuZm9ybS1taWQgLmZvcm0tdGV4dC1vcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1jb250ZXh0IC5mb3JtLWN0YS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0gLnVzZXJFbWFpbCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuY2FsbFRpbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0gLmZvcm0tYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXVwKTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmNvbGZvcm0gLmZvcm0tYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWN0YS10ZXh0LTIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1jdGEtdGV4dC0yMiB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5mb3JtYSB7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDBweDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwZnIgMWZyIDExZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuZm9ybS1taWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybWEgLmZvcm0tZ3JvdXAgLmZvcm0tbWlkIC5mb3JtLXRleHQtb3Ige1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDQ1cHggMHB4IDYwcHggLTMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxyXG4gICAgICAgICAgICAgICAgLTQ1cHggMHB4IDYwcHggLTMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuZm9ybS1taWQgLmZvcm0tdGV4dC1vcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAtMjAwcHg7XHJcbiAgICAgICAgICAgICAgLy9ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5mb3JtLW1pZCAuZm9ybS10ZXh0LW9yOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTczcHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1jb250ZXh0IC5mb3JtLWN0YS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC51c2VyRW1haWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDE1cHggYXV0byAwcHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy11cCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtYSAuZm9ybS1ncm91cCAuY29sZm9ybSAuZm9ybS1jdGEtdGV4dC0yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm1hIC5mb3JtLWdyb3VwIC5jb2xmb3JtIC5mb3JtLWN0YS10ZXh0LTIyIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgLmZvcm1hIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZvcm1QYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9kdWN0OiAnJ1xyXG59O1xyXG5Gb3JtUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUGFnZTtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\form.js */"));
    }
  }]);

  return FormPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

FormPage.defaultProps = {
  product: ''
};
FormPage.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FormPage);

/***/ }),

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var defaultDescription = 'Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.';
var defaultOGURL = 'https://gmenergo.ru';
var defaultOGImage = '/images/favicon.ico';

var Head = function Head(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, props.title || 'Производство газопоршневых электростанций - Газовые Машины'), __jsx("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/images/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/images/apple-touch-icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/images/favicon-32x32.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/images/favicon-16x16.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/images/site.webmanifest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/images/safari-pinned-tab.svg",
    color: "#5bbad5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:title",
    content: props.title || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menu = [{
  label: "Главная",
  href: "/",
  as: "/"
}, {
  label: "Аренда и лизинг",
  href: "/arenda",
  as: "/arenda-i-lizing"
}, // {
//   label: "Распределенная генерация",
//   href: "/rasGen",
//   as: "/raspredelennaya-generaciya"
// },
{
  label: "Новости",
  href: "/news",
  as: "/novosti"
}, {
  label: "Проекты",
  href: "/projects",
  as: "/proekti"
}, {
  label: "Каталог",
  href: "/products",
  as: "/products"
}, {
  label: "Услуги",
  href: "/services",
  as: "/uslugi"
}, {
  label: "Проектировщикам",
  href: "/page-documents",
  as: "/page-documents"
}, {
  label: "О компании",
  href: "/about",
  as: "/about"
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
var _this = undefined,
    _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Nav = function Nav() {
  return __jsx("nav", {
    className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "jsx-2809465157" + " " + "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo-grey.png",
    title: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
    className: "jsx-2809465157",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }))), __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-2809465157" + " " + "navbar-toggler",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "jsx-2809465157" + " " + "navbar-toggler-icon-mine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  })), __jsx("div", {
    id: "navbarNav",
    className: "jsx-2809465157" + " " + "collapse navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-2809465157" + " " + "navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label,
        as = _ref.as;
    return __jsx("li", {
      key: key,
      className: "jsx-2809465157" + " " + "nav-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: href,
      as: as,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-2809465157" + " " + "nav-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, label)));
  }), __jsx("li", {
    className: "jsx-2809465157" + " " + "nav-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2809465157" + " " + "contacts-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-2809465157" + " " + "lorem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), __jsx("span", {
    className: "jsx-2809465157" + " " + "tel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "+7 (4852) 26\xB703\xB768, 26\xB779\xB760"), __jsx("span", {
    className: "jsx-2809465157" + " " + "pochta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "market@gmenergo.ru"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2809465157",
    __self: _this
  }, "body{margin:0;}.navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUdrQixBQUlpQixBQVlaLEFBSUksQUFHTCxBQU9LLEFBWUYsQUFHQSxBQUdFLEFBUUosQUFNQSxBQUtHLEFBT0YsQUFNUyxBQUdOLEFBaUJQLEFBR3dCLEFBSXZCLEFBSUssQUFRTixBQVNGLEFBS1UsQUFJRixBQUdBLEFBR1UsQUFNUixBQVFILEFBS0csQUFPSixBQU9lLEFBSWQsQUFJTCxBQUdNLEFBS0UsQUFJSCxBQUdDLEFBSUcsQUFNRCxBQVFILEFBUUcsQUFPRixTQXZPbkIsQUFnSUEsQUF3REUsRUFwRkYsQUFtQm9CLENBWk4sRUEzRkEsQUF3Q0csQUFNQyxBQStGRSxBQXVCSixBQWdCZCxBQXFCaUIsQ0EvSUQsQUErRGhCLEFBR0EsQUErQ0EsQUFZa0IsQUFpQ0UsQ0E5THRCLEFBR0EsQ0FzQmlCLEFBNENKLEFBc0JXLEFBZ0JOLEFBYUMsQUE4QmpCLEFBaUJnQixBQWdCQyxDQTdNbkIsQUFVb0IsQUFrQkEsQUFtQ1AsQUF3SFEsTUEzSHJCLEFBNEJBLENBbUNzQixDQTNJZCxBQWFSLEFBb0tFLEVBckVXLEFBZ0VzQixDQXZIZCxBQTJCTCxBQW9DSCxBQWtHUSxDQTNKUCxBQStGVyxDQW5GVCxBQTJFSSxBQWtEbEIsQUFVa0IsQ0E3TVgsQUErRE8sQUErRkUsQUErREEsQ0FPaEIsRUFsSTJCLEFBcUdQLENBN0tJLEFBa0JELENBcUZ2QixFQWhJUSxBQTJHTSxDQVFILEVBekRiLENBcUJXLEFBMkRVLEVBcEVELENBUE0sQUErRk4sQUF1REEsQUFRQSxDQTVOUCxBQWdKTSxBQTREQSxJQXpGQSxDQXBDTixDQTRCTyxBQTJGQyxLQXJNSCxDQTBDQyxBQStIakIsQ0FqSlMsQUFpSFUsRUF6Q3JCLEFBZ0R1QixBQWFBLEFBK0NFLEFBUUMsQUFRSCxDQXZKdkIsQUFVVyxLQW9DRixDQTFGRSxDQXFDVSxBQXdJbkIsQ0EzRkYsQ0EzQlcsRUEvRVUsQUFjRyxBQWtKRCxDQTdDYixDQXpFWSxDQStGcEIsQ0FoSDJCLEdBdURBLEVBb0M3QixVQW5IaUMsR0EwQ2Isa0JBQ3BCLFFBS2dCLEVBL0NFLE9Bb0poQixLQXBHRixJQS9DbUQsR0E4SnRCLFNBbEpKLEdBaUlQLEFBYWhCLEFBK0RBLFFBOUpGLEFBOElrQixJQVFBLEVBbkVoQixFQXZIZSxHQTREZCxHQXVIRCxJQVFBLEtBak5GLEFBdUJrQixnQkFDNEIsc0NBc0k1QyxHQXJJcUIsUUFiWCxVQUNRLGNBc0VFLElBckV0Qiw0Q0FzRUEscUJBMURBIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tZ3JleS5wbmdcIlxyXG4gICAgICAgICAgdGl0bGU9XCLQn9C10YDQtdC50YLQuCDQvdCwINCz0LvQsNCy0L3Rg9GOXCJcclxuICAgICAgICAgIGFsdD1cItCb0L7Qs9C+0YLQuNC/INCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcclxuICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXHJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb24tbWluZVwiIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtocmVmfSBhcz17YXN9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvcmVtXCI+0K3QvdC10YDQs9C10YLQuNGH0LXRgdC60L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbFwiPlxyXG4gICAgICAgICAgICAgICs3ICg0ODUyKSAyNiZtaWRkb3Q7MDMmbWlkZG90OzY4LCAyNiZtaWRkb3Q7NzkmbWlkZG90OzYwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9jaHRhXCI+bWFya2V0QGdtZW5lcmdvLnJ1PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzNXB4IDMwcHggLTMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICfQvdC+0LLQuNC90LrQsCc7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjJweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLmxvcmVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC50ZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLnBvY2h0YSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICM1MjUyNTI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDApIDAlLFxyXG4gICAgICAgICAgcmdiKDIxMSwgMjAsIDIwKSA1MCUsXHJcbiAgICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMCkgMTAwJVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICB3aWR0aDogMjFweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YmVmb3JlLFxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLmxvcmVtIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLnRlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIucG9jaHRhIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI25hdmJhck5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAubG9yZW0ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2EzYTNhMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAudGVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC5wb2NodGEge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtY2FsYy1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/news/OtherNews.js":
/*!**************************************!*\
  !*** ./components/news/OtherNews.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var OtherNews = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OtherNews, _Component);

  var _super = _createSuper(OtherNews);

  function OtherNews(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OtherNews);

    _this = _super.call(this, props);
    _this.state = {
      otherNews: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OtherNews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var news = this.props.news;
      var max = news.length - 1;
      var min = 1;
      var array = [];

      for (array.length; array.length < 4; false) {
        var index = Math.floor(Math.random() * (max - min + 1)) + min;
        var newItem = news[index];

        if (!array.includes(newItem)) {
          array.push(newItem);
        }
      }

      this.setState({
        otherNews: array
      });
    }
  }, {
    key: "render",
    value: function render() {
      var otherNews = this.state.otherNews;
      var otherNewsContent = 'Загрузка...';
      otherNewsContent = otherNews.map(function (item) {
        return __jsx("div", {
          className: "  ",
          key: "other-".concat(item.id)
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/novosti?id=".concat(item.id),
          as: "/novosti/".concat(item.id),
          key: "other-".concat(item.id)
        }, __jsx("a", {
          className: "other-new"
        }, __jsx("div", {
          className: "img-container"
        }, __jsx("img", {
          className: "detail-img",
          src: "/images/".concat(item.img),
          alt: item.label,
          title: item.label
        })), __jsx("span", {
          className: "other-new-title"
        }, item.label))));
      });
      return __jsx("div", {
        className: "jsx-4011291110" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4011291110" + " " + "col-12"
      }, __jsx("span", {
        className: "jsx-4011291110" + " " + "subheading-common"
      }, "\u041B\u0435\u043D\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439:")), __jsx("div", {
        className: "jsx-4011291110" + " " + "col-12 other-new-plate"
      }, otherNewsContent), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4011291110"
      }, ".other-new-plate{display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:30px;}.other-new-plate .other-new{display:block;}.other-new-plate .other-new .img-container{border-radius:var(--border-radius);overflow:hidden;margin-bottom:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{color:var(--accent-dark);-webkit-text-decoration:none;text-decoration:none;display:block;margin-top:2px;font-size:14px;line-height:17px;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}@media (min-width:576px){.other-new-plate{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;margin-bottom:15px;}.other-new-plate .other-new .img-container{height:150px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}}@media (min-width:768px){.other-new .img-container{height:230px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.other-new .img-container .detail-img{max-width:100%;}}@media (min-width:992px){.other-new-plate{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:30px;margin-bottom:30px;}.other-new-plate .other-new .img-container{height:155px;overflow:hidden;border-radius:var(--border-radius);}.other-new-plate .other-new .img-container .detail-img{display:block;min-width:105%;height:105%;}}@media (min-width:1200px){.subheading-common{display:block;margin-top:30px;}.other-new-plate{padding-top:15px;}.other-new-plate .other-new .img-container{height:160px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{margin-top:7px;font-size:15px;line-height:20px;font-weight:300;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuZXdzXFxPdGhlck5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEQyQixBQUcwQixBQUtDLEFBR3FCLEFBTXBCLEFBR1UsQUFRQyxBQUtYLEFBTUEsQUFJRSxBQUtGLEFBT0UsQUFLRixBQU1BLEFBS0MsQUFPQSxBQUlHLEFBR0osQUFJRSxBQUdBLEFBTVcsYUE5RlEsQUE4QkYsQUFNaEIsQUFTQSxBQVlvQixBQU1wQixBQW1CQSxDQTdFcEIsQUErRG1CLEFBT0MsQ0E3RHBCLEFBMEJFLEFBWUEsQUFrQ0EsQUFHaUIsRUFWakIsUUE5RHFCLElBb0JyQixBQVNlLEFBa0JzQixBQUt2QixBQWNkLENBUEEsQUFjbUIsS0FsRkgsTUE4RGhCLElBdkNnQixFQTRERSxFQTFGSixBQXlERSxFQWpERyxRQXVCRSxDQVB2QixBQXNFRSxHQTdGRixBQXlEdUIsQUFpQ3JCLENBM0JBLE1BdkQyQyxLQVE3QixHQWVkLElBMkJBLE9BekNlLGNBNEJVLENBM0JWLE1BVGpCLFNBVW1CLGlCQUNuQixrRUEwQnVCLDZGQUNyQiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcbmV3c1xcT3RoZXJOZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIE90aGVyTmV3cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG90aGVyTmV3czogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG5ld3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbWF4ID0gbmV3cy5sZW5ndGggLSAxO1xyXG4gICAgbGV0IG1pbiA9IDE7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAoYXJyYXkubGVuZ3RoOyBhcnJheS5sZW5ndGggPCA0OyBmYWxzZSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgICBsZXQgbmV3SXRlbSA9IG5ld3NbaW5kZXhdO1xyXG4gICAgICBpZiAoIWFycmF5LmluY2x1ZGVzKG5ld0l0ZW0pKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG90aGVyTmV3czogYXJyYXkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG90aGVyTmV3cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBvdGhlck5ld3NDb250ZW50ID0gJ9CX0LDQs9GA0YPQt9C60LAuLi4nO1xyXG4gICAgb3RoZXJOZXdzQ29udGVudCA9IG90aGVyTmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIFwiIGtleT17YG90aGVyLSR7aXRlbS5pZH1gfT5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17YC9ub3Zvc3RpP2lkPSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgYXM9e2Avbm92b3N0aS8ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgIGtleT17YG90aGVyLSR7aXRlbS5pZH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm90aGVyLW5ld1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtaW1nXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm90aGVyLW5ldy10aXRsZVwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZy1jb21tb25cIj7Qm9C10L3RgtCwINC90L7QstC+0YHRgtC10Lk6PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG90aGVyLW5ldy1wbGF0ZVwiPntvdGhlck5ld3NDb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLm90aGVyLW5ldy10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZGFyayk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTA1JTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5vdGhlci1uZXctdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5PdGhlck5ld3MucHJvcFR5cGVzID0ge1xyXG4gIG5ld3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3RoZXJOZXdzO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\news\\\\OtherNews.js */"));
    }
  }]);

  return OtherNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

OtherNews.propTypes = {
  news: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OtherNews);

/***/ }),

/***/ "./components/products/ProductUnitPlate.js":
/*!*************************************************!*\
  !*** ./components/products/ProductUnitPlate.js ***!
  \*************************************************/
/*! exports provided: ProductsUnitPlate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsUnitPlate", function() { return ProductsUnitPlate; });
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");
/* harmony import */ var _products_SimilarProducts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/SimilarProducts */ "./components/products/SimilarProducts.js");
/* harmony import */ var _products_ProductsBenefits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../products/ProductsBenefits */ "./components/products/ProductsBenefits.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form */ "./components/form.js");
/* harmony import */ var _JumboAskForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../JumboAskForm */ "./components/JumboAskForm.js");
/* harmony import */ var _components_GaleryProducts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/GaleryProducts */ "./components/GaleryProducts.js");
/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../YoutubeVideo */ "./components/YoutubeVideo.js");
/* harmony import */ var _tables_newsList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tables/newsList */ "./components/tables/newsList.js");
/* harmony import */ var _components_news_OtherNews__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/news/OtherNews */ "./components/news/OtherNews.js");
/* harmony import */ var _PromoProjects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PromoProjects */ "./components/products/PromoProjects.js");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-image-lightbox */ "./node_modules/react-image-lightbox/dist/index.es.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var ProductsUnitPlate = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductsUnitPlate, _Component);

  var _super = _createSuper(ProductsUnitPlate);

  function ProductsUnitPlate(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductsUnitPlate);

    _this = _super.call(this, props);
    _this.state = {
      photoIndex: 0,
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductsUnitPlate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          photoIndex = _this$state.photoIndex,
          isOpen = _this$state.isOpen;
      var _this$props$data = this.props.data,
          id = _this$props$data.id,
          category = _this$props$data.category;
      var data = _tables_productsList__WEBPACK_IMPORTED_MODULE_10__["default"];
      var products = [];
      var product = [];
      var isVideo = false;
      data.map(function (item) {
        if (item.category === category) {
          products = item.products;
          products.map(function (item) {
            if (item.id === Number(id)) {
              product = item;
            }
          });
        }
      });

      if (product.id == 7) {
        isVideo = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("isVideo"), true);
      }

      var similar = [];
      products.map(function (item) {
        if (item.id !== Number(id)) {
          if (similar.length < 4) {
            similar.push(item);
          }
        }
      });
      return __jsx("div", {
        itemScope: true,
        itemType: "http://schema.org/Product",
        className: "jsx-3895916260"
      }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F ".concat(product.label),
        description: "".concat(product.descriptionTwo)
      }), __jsx("div", {
        className: "jsx-3895916260" + " " + "container"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "row"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "breadcrumbs"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "jsx-3895916260" + " " + "crambs"
      }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F > ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/products"
      }, __jsx("a", {
        className: "jsx-3895916260" + " " + "crambs"
      }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B > ")), __jsx("span", {
        className: "jsx-3895916260" + " " + "crambs cramb-main"
      }, product.label))))), __jsx("div", {
        className: "jsx-3895916260" + " " + "container-fluid product-unit color-section"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "border-left"
      }), __jsx("div", {
        className: "jsx-3895916260" + " " + "border-right"
      }), __jsx("div", {
        className: "jsx-3895916260" + " " + "container section-plate"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "row m-0 pt-4 pb-4"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12 col-md-7 col-lg-7 col-xl-6 order-md-1 order-2"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "flex-container"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "flex-top"
      }, __jsx("h1", {
        itemProp: "name",
        className: "jsx-3895916260" + " " + "header-red"
      }, "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F ", product.label), __jsx("div", {
        className: "jsx-3895916260" + " " + "product-energy-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "product-energy"
      }, product.electricPower, " \u043A\u0412\u0442")), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.generator)), product.gazLline !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0413\u0430\u0437\u043E\u0432\u0430\u044F \u043B\u0438\u043D\u0435\u0439\u043A\u0430:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.gazLline)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0413\u0440\u0443\u043F\u043F\u0430 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.freezGroup)), product.nasos !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u041D\u0430\u0441\u043E\u0441\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.nasos)), product.powerSup !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0421\u0438\u043B\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.powerSup)), product.controlSystem !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value"
      }, product.controlSystem)), product.price !== '' ? __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container-2"
      }, __jsx("p", {
        className: "jsx-3895916260" + " " + "text-min"
      }, "\u0426\u0435\u043D\u0430:"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-min-value text-min-value-price"
      }, product.price, " \u0440\u0443\u0431.")) : ''), __jsx("div", {
        className: "jsx-3895916260" + " " + "flex-bottom"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "button-group"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "cta-button-container"
      }, __jsx("a", {
        href: "https://gmenergo.bitrix24.ru/pub/form/4_uznayte_vse_podrobnosti_i_usloviya_sotrudnichestva/c1mwzy/",
        className: "jsx-3895916260" + " " + "cta-button"
      }, "\u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438")), __jsx("p", {
        className: "jsx-3895916260" + " " + "arenda-text-min"
      }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443\u0442 \u043E\u0431 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430."))))), __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12 col-md-5 col-lg-5 col-xl-5 offset-xl-1 order-md-2 order-1"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "product-img-container"
      }, __jsx("img", {
        itemProp: "image",
        src: "/images/products/thumb-".concat(product.img),
        alt: product.label,
        title: product.label,
        onClick: function onClick() {
          return _this2.setState({
            isOpen: true
          });
        },
        className: "jsx-3895916260" + " " + "product-img"
      }), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
        mainSrc: "/images/products/".concat(product.img),
        onCloseRequest: function onCloseRequest() {
          return _this2.setState({
            isOpen: false
          });
        }
      })))))), __jsx("div", {
        className: "jsx-3895916260" + " " + "container-fluid description product-unit pt-4 pb-5"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "mycontainer section-plate"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12"
      }, __jsx(_products_ProductsBenefits__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx("h4", {
        className: "jsx-3895916260" + " " + "header-min-colored pb-1"
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ", __jsx("span", {
        className: "jsx-3895916260" + " " + "dark-color"
      }, product.label)), __jsx("p", {
        itemProp: "description",
        className: "jsx-3895916260" + " " + "text text-black"
      }, product.descriptionTwo)))), __jsx("div", {
        className: "jsx-3895916260" + " " + "container-fluid product-unit pt-4 pb-2 white-section"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "mycontainer section-plate"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12"
      }, __jsx("h3", {
        className: "jsx-3895916260" + " " + "header-min-colored pb-1"
      }, "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438", ' ', __jsx("span", {
        className: "jsx-3895916260" + " " + "dark-color"
      }, product.label, ":"), ' '), __jsx("p", {
        className: "jsx-3895916260" + " " + "text text-black"
      }, product.descriptionOne)), __jsx("div", {
        className: "jsx-3895916260" + " " + "row m-0  parametrs-container"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12 col-xl-8 text-col"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container mt-3 mt-xl-5"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041C\u0430\u0440\u043A\u0430 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.motorMark)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C, \u043A\u0412\u0442:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.electricPower)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0422\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C, \u043A\u0412\u0442: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.thermalPower)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041A\u041F\u0414 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439, %: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.electricEfficiency)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041A\u041F\u0414 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439, %: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.thermalEfficiency)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041A\u041F\u0414 \u043E\u0431\u0449\u0438\u0439, %: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.overallEfficiency)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0422\u0438\u043F \u0442\u043E\u043F\u043B\u0438\u0432\u0430: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.fuelType)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041C\u0435\u0442\u0430\u043D\u043E\u0432\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.methaneNumber)), product.gasPressure !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u0430, \u043A\u0433\u0441/\u0441\u043C2:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.gasPressure)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0420\u0430\u0441\u0445\u043E\u0434 \u0433\u0430\u0437\u0430 \u0432 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435, \u043D\u043C3/\u0447\u0430\u0441:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.nominalGazConsumption)), product.oilconsumption && product.oilconsumption !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0420\u0430\u0441\u0445\u043E\u0434 \u043C\u0430\u0441\u043B\u0430, \u043A\u0433/\u0447\u0430\u0441: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.oilconsumption)), product.airconsumption && product.airconsumption !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0420\u0430\u0441\u0445\u043E\u0434 \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u043A\u0433/\u0447\u0430\u0441:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.airconsumption)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0448\u0443\u043C\u0430, \u0414\u0431: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.noiseLevel)), product.serviceInterval !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0421\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.serviceInterval)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041E\u0431\u0449\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.totalPowerPlant)), product.gasMixer !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0413\u0430\u0437\u043E\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0441\u043C\u0435\u0441\u0438\u0442\u0435\u043B\u044C:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.gasMixer)), product.controlBlock !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0411\u043B\u043E\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.controlBlock)), product.ignitionSystem !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0430\u0436\u0438\u0433\u0430\u043D\u0438\u044F: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.ignitionSystem)), product.throttleValve !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u0414\u0440\u043E\u0441\u0441\u0435\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0441\u043B\u043E\u043D\u043A\u0430: "), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.throttleValve)), product.excessAirRatio !== '' && __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u0438\u0437\u0431\u044B\u0442\u043A\u0430 \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u03BB:", ' '), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.excessAirRatio)), __jsx("div", {
        className: "jsx-3895916260" + " " + "text-container"
      }, __jsx("span", {
        className: "jsx-3895916260" + " " + "text-common"
      }, "\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435, \u0412"), __jsx("span", {
        className: "jsx-3895916260" + " " + "text-bold"
      }, product.voltage))), __jsx("div", {
        className: "jsx-3895916260" + " " + "col-12 col-xl-4 promo-projects"
      }, __jsx(_PromoProjects__WEBPACK_IMPORTED_MODULE_19__["default"], {
        itemsCount: 4
      }))))), __jsx(_JumboAskForm__WEBPACK_IMPORTED_MODULE_14__["default"], null), __jsx("div", {
        className: "jsx-3895916260" + " " + "container-fluid bg-gradient-white pt-2"
      }, product.id == 12 && __jsx("div", {
        className: "jsx-3895916260" + " " + "mycontainer"
      }, __jsx(_YoutubeVideo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "myVideo"
      })), __jsx(_products_SimilarProducts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        similar: similar,
        category: category
      })), __jsx(_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        product: product.label
      }), __jsx("div", {
        className: "jsx-3895916260" + " " + "container-fluid"
      }, __jsx("div", {
        className: "jsx-3895916260" + " " + "container pl-xl-4 pr-xl-4"
      }, __jsx(_components_news_OtherNews__WEBPACK_IMPORTED_MODULE_18__["default"], {
        news: _tables_newsList__WEBPACK_IMPORTED_MODULE_17__["default"]
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3895916260"
      }, ".react-fancybox .box{position:fixed;background-color:rgba(0,0,0,0.4);top:0;right:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1;}.react-fancybox .thumbnail img{max-width:600px;}.react-fancybox .box .image-box{padding:10px;background-color:white;border-radius:4px;position:relative;}.react-fancybox .box .image-box .caption{text-align:center;font-size:14px;margin-top:7px;}.react-fancybox .fade-enter{-webkit-animation:fadein 600ms;animation:fadein 600ms;}.react-fancybox .fade-leave{-webkit-animation:fadeout 600ms;animation:fadeout 600ms;}.react-fancybox .close-btn{background-color:white;width:25px;border-radius:50%;height:25px;position:absolute;right:-13px;top:-13px;}@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadeout{from{opacity:1;}to{opacity:0;}}@keyframes fadeout{from{opacity:1;}to{opacity:0;}}.product-unit{overflow:hidden;padding:0;}.description{background-color:#fafafa;}.description .benefits-plate{margin-bottom:30px;display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:15px;}.description .benefits-plate .benefit-card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:var(--border-radius);padding:15px;background-color:#fff;box-shadow:0 0 15px rgba(0,0,0,0.05);}.description .benefits-plate .benefit-card .icon-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:45px;height:45px;margin-right:15px;background-color:var(--accent-red);border-radius:30px;}.description .benefits-plate .benefit-card .icon-container .bene-icon{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);-webkit-filter:invert(100%);filter:invert(100%);}.description .benefits-plate .benefit-card .text-container .bene-title{display:block;font-size:14px;line-height:18px;font-weight:300;color:#636363;}.description .benefits-plate .benefit-card .text-container .bene-text{display:block;color:#4c4c4c;text-transform:uppercase;font-size:16px;font-weight:700;}.section-plate .product-img-container{max-width:100%;}.section-plate .product-img-container .product-img{width:100%;}.section-plate .header-red{display:block;color:var(--text);margin-top:15px;margin-bottom:0px;}.section-plate .text-container-2{margin-top:5px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.section-plate .text-container-2 .text-min{color:var(--text);}.section-plate .text-container-2 .text-min-value{font-size:13px;color:#2e2e2e;}.section-plate .text-container-2 .text-min-value-price{font-size:16px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:900;}.section-plate .text-black{color:#353535;}.section-plate .product-energy-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:100%;}.section-plate .product-energy-container::after{display:block;position:absolute;content:'';width:100%;height:1px;background-color:var(--sub-color);top:50%;z-index:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.section-plate .product-energy-container .product-energy{font-weight:900;font-size:13px;border-radius:var(--border-radius);border:1px solid var(--sub-color);top:50%;display:inline-block;z-index:1;color:var(--accent-red);margin:15px 0 15px auto;background-color:#fff;display:block;padding:4px 15px;}.section-plate .button-group .cta-button-container{margin-top:30px;margin-bottom:30px;}.section-plate .button-group .cta-button-container .cta-button{display:block;margin:0 auto;width:210px;height:50px;border-radius:2px;border:3px solid var(--accent-red);text-align:center;color:var(--accent-red);font-size:15px;font-weight:700;line-height:45px;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}.section-plate .button-group .cta-button-container .cta-button:hover{box-shadow:var(--box-shadow);}.section-plate .button-group .arenda-text-min{display:block;margin-bottom:15px;font-size:12px;color:#9b9b9b;}.section-plate .product-img-container{border-radius:var(--border-radius);box-shadow:3px 3px 2px rgba(0,0,0,0.25);overflow:hidden;}.section-plate .parametrs-container{padding-bottom:40px;}.section-plate .parametrs-container .calc-link{display:block;width:100%;height:400px;background:var(--red-gradient);}.section-plate .parametrs-container .text-container{min-height:40px;height:auto;padding-top:10px;padding-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid lightgrey;}.section-plate .parametrs-container .text-container .text-common{line-height:20px;display:block;}.section-plate .parametrs-container .text-container .text-bold{display:block;font-size:15px;line-height:20px;text-align:right;}.form-bg{position:relative;padding:0;}@media (min-width:576px){.section-plate .button-group{margin-top:30px;display:grid;grid-template-columns:1fr 2fr;grid-template-rows:auto;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section-plate .button-group .cta-button-container{margin-top:0px;margin-bottom:0px;}.section-plate .button-group .cta-button-container .cta-button{display:block;margin:0;}.section-plate .button-group .arenda-text-min{display:block;margin-bottom:0;margin-left:15px;}}@media (min-width:768px){.color-section .section-plate .header-red{margin-top:0px;}.color-section .section-plate .product-energy-container{margin-top:8px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:100%;}.color-section .section-plate .product-energy-container::after{display:block;position:absolute;content:'';width:100%;height:1px;top:50%;z-index:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.color-section .section-plate .product-energy-container .product-energy{margin:0px 0 0px auto;}.color-section .section-plate .text-container-2{margin-top:5px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.color-section .section-plate .text-container-2 .text-min{color:var(--text);}.color-section .section-plate .text-container-2 .text-min-value{font-size:16px;color:#2e2e2e;font-weight:700;}.color-section .section-plate .text-container-2 .text-min-value-price{font-size:18px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:900;color:var(--sub-color);}.color-section .section-plate .product-img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.description .benefits-plate{margin-top:-15px;grid-template:1fr 1fr / 1fr 1fr;}}@media (min-width:992px){.color-section .section-plate .header-red{padding-bottom:3px;}.color-section .section-plate .text{line-height:24px;font-size:17px;font-weight:300;}.color-section .section-plate .product-energy-container .product-energy{font-size:18px;padding:5px 15px;}.section-plate .parametrs-container .text-container{padding-top:15px;padding-bottom:15px;}.section-plate .parametrs-container .text-container .text-bold{font-size:18px;}}@media (min-width:1200px){.color-section{position:relative;}.color-section .border-left{display:block;position:absolute;z-index:1;top:50%;left:-60px;width:100px;height:90%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,0.3);border-radius:3px;}.color-section .border-right{display:block;position:absolute;z-index:1;top:50%;right:-60px;width:100px;height:90%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,0.3);border-radius:3px;}.product-unit{height:100%;}.product-unit .parametrs-container .text-container{margin-right:30px;}.product-unit .flex-container{height:auto;min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-unit .flex-container .flex-top .header-red{padding-bottom:15px;}.product-unit .flex-container .flex-top .text-container-2{margin-top:4px;margin-bottom:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-unit .flex-container .flex-top .text-container-2 .text-min{color:var(--accent-grey);font-weight:500;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:14px;}.product-unit .flex-container .flex-top .text-container-2 .text-min-value{font-size:16px;color:#2e2e2e;font-weight:700;}.product-unit .flex-container .flex-top .text-container-2 .text-min-value-price{font-size:18px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:700;color:var(--sub-color);}.product-unit .flex-container .flex-top .product-energy-container{margin-top:0px;margin-bottom:15px;}.product-unit .flex-container .flex-top .product-energy-container .product-energy{padding:5px 20px 3px;font-weight:500;font-size:18px;}.product-unit .flex-container .flex-bottom .button-group{margin-top:30px;}.product-unit .flex-container .flex-bottom .button-group .cta-button-container{margin-top:0;margin-bottom:0;}.description .benefits-plate{margin-bottom:45px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.description .benefits-plate .benefit-card{height:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;padding-right:5px;box-shadow:none;background-color:#fff;box-shadow:0 0 15px rgba(0,0,0,0.05);border-radius:var(--border-radius);}.description .benefits-plate .benefit-card .icon-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:45px;height:45px;margin-right:15px;background-color:var(--accent-red);border-radius:30px;}.description .benefits-plate .benefit-card .icon-container .bene-icon{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);-webkit-filter:invert(100%);filter:invert(100%);}.description .benefits-plate .benefit-card .text-container .bene-title{display:block;font-size:13px;line-height:16px;font-weight:300;color:#838383;}.description .benefits-plate .benefit-card .text-container .bene-text{margin-top:3px;display:block;color:#242424;text-transform:uppercase;font-size:16px;font-weight:700;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvZHVjdFVuaXRQbGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvVzJCLEFBRzRCLEFBY0MsQUFJSCxBQU9LLEFBTUssQUFJQyxBQUlELEFBV1gsQUFHQSxBQU1BLEFBR0EsQUFLSSxBQUlTLEFBR04sQUFNTixBQVFBLEFBY1MsQUFRUixBQVdBLEFBUUMsQUFHSixBQUdHLEFBTUMsQUFPRyxBQUdILEFBSUEsQUFLRCxBQUdELEFBTUMsQUFXRSxBQWNBLEFBSUYsQUFjZSxBQUdmLEFBTXFCLEFBS2YsQUFHTixBQU1FLEFBVUMsQUFJSCxBQU9JLEFBTUEsQUFRRCxBQUlELEFBSUEsQUFRQyxBQUdBLEFBUUQsQUFhUSxBQUdQLEFBT0csQUFHSCxBQVFBLEFBTUYsQUFJSSxBQU9FLEFBR0YsQUFRRixBQUtFLEFBSUYsQUFNRyxBQUdKLEFBWUEsQUFZRixBQUlNLEFBR04sQUFPUSxBQUdMLEFBV1UsQUFVVixBQVNBLEFBTUEsQUFRTSxBQUtMLEFBT0gsQUFJTSxBQU1QLEFBV0MsQUFjUyxBQVFSLEFBV0MsVUE3ZGpCLEFBR0EsQUFNQSxBQUdBLENBc0VGLENBNlFFLEFBT2tCLEFBNEVILENBbGRRLEFBd2NMLENBNVdILEFBV0QsQUFjSSxBQXlCcEIsQUFTb0IsQUE2QkosQUFpQkssQUFjUixBQW9CSSxBQXlCSixBQUlPLEFBbUJFLEFBZ0ZBLEFBWUEsQUFnSUgsQ0FyZ0JtQixBQWlJdEMsQUFZb0IsQUFVSixBQUlRLEFBbUhGLEFBZ0JwQixBQUdvQixBQXdCQSxBQVVKLEFBUVEsQUE0QkwsQUFTbkIsQUFrRG9CLEFBcUJKLEFBU1EsQUFNSCxBQTBFTCxDQWxnQmxCLEFBcURZLEFBaUhLLEFBY0ksQUF5Q1AsQUEyQkcsQUE2TWYsQ0E5TmMsQUFnR29CLEFBVWpCLEFBYUssQ0FuVlAsQUEySGpCLEFBNEdZLEFBZ0VWLEFBc0RBLEFBK0JBLENBM1VhLEFBa1JiLEFBa0llLENBNVBqQixBQTZMRSxDQStDa0IsQ0F4SmxCLENBL1FXLEFBNE9YLEVBNU1GLEFBK0plLEFBdU1LLENBeldwQixFQXNEMkIsQUE2RWIsQUFxQ0ssQUFxQm5CLEFBd0ppQixDQTFTRSxBQXlDbkIsQUE0REEsQUFzQ21CLEFBYWUsQUE2RGQsQUFvSEEsQUFtQ2xCLEFBMkNtQixBQVdILENBMVBHLENBbEdnQixBQWlFckMsQ0EzS3NDLEFBNkRwQixBQWtDTCxBQWdJRSxBQXNESyxBQVFsQixBQWtCWSxBQVlBLEFBeUYwQixDQXJjdkIsQUFvSEYsQUEwRUUsQUF1RGYsQUFtQmUsQUF3QkEsQUF5R0EsQ0EzWEcsQUErWmxCLENBcFFGLEFBMEI2QyxDQTFNekIsQ0EwVmxCLEFBa0dpQixDQXhPYyxFQS9CbkIsQ0FzT1ksQ0FuRGQsQUFZQSxDQTVOQyxBQWdJRSxBQXVPYyxFQXJTUCxBQXdGcEIsQUFvSEEsQ0F6VWdCLEFBMklDLEFBNFFDLENBL09sQixDQXZSTSxBQTBCUixBQThHb0IsQUFnRkosQUF3SWQsQ0FYQSxDQXNDYSxBQVlDLEVBL1ZGLEFBZ0tNLEFBdVFsQixDQXJWZSxDQXpIUCxBQWtCVSxBQVdwQixBQTZJYSxBQWdJRSxFQXpRZixHQXFPNEIsRUFxSFosQ0ExWEgsQUE4R0csQUF5R2hCLEFBK0tnQixBQStIRSxDQTVRbEIsQ0FsTm9CLENBbUlnQixBQWlFckIsQUErREgsQ0FuS1osQUE0Q29DLEVBMUdwQixBQWdERSxBQW9XQSxBQW1EQyxDQTNTbkIsQ0E5QnFDLEVBckxyQyxDQWpCYyxBQTBTQSxBQWdGQyxDQTlTTSxBQVFJLEFBMkVMLEFBOEtHLEFBeURSLEFBcUdZLENBalJULENBNUdsQixBQXVaRSxFQW5hb0IsQUF1WkUsSUFsZFYsQUFrQ2QsQUFvWkUsQ0F4TmdCLEFBc0NhLEFBcU9YLENBdlpwQixBQWtRK0IsQ0ExWGhCLEFBc1lnQixDQTBGUixLQXRRdkIsQ0EzRDZCLEVBeEhqQixHQThOVyxFQTVGYixBQXVXUixDQTlWUSxFQW1PZ0IsRUE3VzFCLENBOEpvQixFQTVEQyxBQWdDVCxBQW9IVSxBQXdCQyxBQXlHQSxDQTVPQSxTQVJNLEdBcEJYLEFBZ0xFLEFBcUhBLEdBclBNLEVBd0ZLLENBN0wvQixBQXVaRSxHQXJVVSxPQTVCWixBQWdMMkIsQUFxSEEsR0F4UUQsQUFxREwsT0FnTUYsQ0FsT0YsWUF2TVEsQUF3VXZCLEFBcUhBLEVBbkJBLENBbE9nQixDQW5CUSxJQTFHVyxBQWlRbkMsTUF6UG1CLEFBdVpFLEdBaFdTLEFBZ0s5QixBQVlnQyxBQXlHQSxDQXJDYSxDQWpMNUIsQUE2TDRCLENBMEY5QixDQTNFaUIsS0F0UHJCLEVBdUJXLEdBK0V0QixFQTROb0IsR0F2UlMsQ0ExQy9CLE1BcEZlLE9BMkdDLENBWmhCLEFBdVRvQixLQXJaSSxFQThTRixDQTVGUCxBQXdHTyxLQS9NSCxHQTJTTyxHQW5NeEIsR0F0RDhCLEdBa0o5QixDQVlBLENBMVR3QyxHQTJHMUMsUUEyUzRDLFVBbmV2QixHQTBNckIsS0F2SGEsQUF1WkUsUUE1WmYsR0FNYyxBQXVaRSxRQVB1QixJQS9ZbkIsQUF1WkUsRUFsV3RCLEFBNEtFLEFBeUdBLElBVkEsWUEvVG1DLEFBdVpFLGFBUnJDLHNCQTlZbUIsQUF1WkUsS0FwUWEsSUF6T1osVUF1RnhCLEFBdVpFLG9CQXBRRixnREF6T1ksVUFDWiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xccHJvZHVjdHNcXFByb2R1Y3RVbml0UGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWQnO1xyXG5pbXBvcnQgcHJvZHVjdHNMaXN0IGZyb20gJy4uL3RhYmxlcy9wcm9kdWN0c0xpc3QnO1xyXG5pbXBvcnQgU2ltaWxhclByb2R1Y3RzIGZyb20gJy4uL3Byb2R1Y3RzL1NpbWlsYXJQcm9kdWN0cyc7XHJcbmltcG9ydCBQcm9kdWN0c0JlbmVmaXRzIGZyb20gJy4uL3Byb2R1Y3RzL1Byb2R1Y3RzQmVuZWZpdHMnO1xyXG5pbXBvcnQgRm9ybVBhZ2UgZnJvbSAnLi4vZm9ybSc7XHJcbmltcG9ydCBKdW1ib0Fza0Zvcm0gZnJvbSAnLi4vSnVtYm9Bc2tGb3JtJztcclxuaW1wb3J0IEdhbGVyeVByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2FsZXJ5UHJvZHVjdHMnO1xyXG5pbXBvcnQgWW91dHViZVZpZGVvIGZyb20gJy4uL1lvdXR1YmVWaWRlbyc7XHJcbmltcG9ydCBuZXdzIGZyb20gJy4uL3RhYmxlcy9uZXdzTGlzdCc7XHJcbmltcG9ydCBPdGhlck5ld3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uZXdzL090aGVyTmV3cyc7XHJcbmltcG9ydCBQcm9tb1Byb2plY3RzIGZyb20gJy4vUHJvbW9Qcm9qZWN0cyc7XHJcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZS1saWdodGJveCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdHNVbml0UGxhdGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcGhvdG9JbmRleDogMCxcclxuICAgICAgaXNPcGVuOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHBob3RvSW5kZXgsIGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgaWQsIGNhdGVnb3J5IH0gPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICBjb25zdCBkYXRhID0gcHJvZHVjdHNMaXN0O1xyXG4gICAgbGV0IHByb2R1Y3RzID0gW107XHJcbiAgICBsZXQgcHJvZHVjdCA9IFtdO1xyXG4gICAgY29uc3QgaXNWaWRlbyA9IGZhbHNlO1xyXG4gICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgcHJvZHVjdHMgPSBpdGVtLnByb2R1Y3RzO1xyXG4gICAgICAgIHByb2R1Y3RzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IE51bWJlcihpZCkpIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGl0ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHByb2R1Y3QuaWQgPT0gNykge1xyXG4gICAgICBpc1ZpZGVvID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCBzaW1pbGFyID0gW107XHJcbiAgICBwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgIT09IE51bWJlcihpZCkpIHtcclxuICAgICAgICBpZiAoc2ltaWxhci5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICBzaW1pbGFyLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiPlxyXG4gICAgICAgIDxIZWFkXHJcbiAgICAgICAgICB0aXRsZT17YNCT0LDQt9C+0L/QvtGA0YjQvdC10LLQsNGPINGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40Y8gJHtwcm9kdWN0LmxhYmVsfWB9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17YCR7cHJvZHVjdC5kZXNjcmlwdGlvblR3b31gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1ic1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3JhbWJzXCI+0JPQu9Cw0LLQvdCw0Y8gPiA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNyYW1ic1wiPtCf0YDQvtC00YPQutGC0YsgPiA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmFtYnMgY3JhbWItbWFpblwiPntwcm9kdWN0LmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcm9kdWN0LXVuaXQgY29sb3Itc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItbGVmdFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1yaWdodFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzZWN0aW9uLXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBwdC00IHBiLTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNyBjb2wtbGctNyBjb2wteGwtNiBvcmRlci1tZC0xIG9yZGVyLTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBpdGVtUHJvcD1cIm5hbWVcIiBjbGFzc05hbWU9XCJoZWFkZXItcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQk9Cw0LfQvtC/0L7RgNGI0L3QtdCy0LDRjyDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNGPIHtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWVuZXJneS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtZW5lcmd5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmVsZWN0cmljUG93ZXJ9INC60JLRglxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1taW5cIj7QodC40L3RhdGA0L7QvdC90YvQuSDQs9C10L3QtdGA0LDRgtC+0YA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1taW4tdmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZ2VuZXJhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmdhekxsaW5lICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1taW5cIj7Qk9Cw0LfQvtCy0LDRjyDQu9C40L3QtdC50LrQsDo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWluLXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZ2F6TGxpbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1pblwiPtCT0YDRg9C/0L/QsCDQvtGF0LvQsNC20LTQtdC90LjRjzo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1pbi12YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5mcmVlekdyb3VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYXNvcyAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWluXCI+0J3QsNGB0L7RgdC90L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1pbi12YWx1ZVwiPntwcm9kdWN0Lm5hc29zfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnBvd2VyU3VwICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1taW5cIj7QodC40LvQvtCy0L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LU6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1pbi12YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnBvd2VyU3VwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250cm9sU3lzdGVtICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1taW5cIj7QodC40YHRgtC10LzQsCDRg9C/0YDQsNCy0LvQtdC90LjRjzo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWluLXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29udHJvbFN5c3RlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2UgIT09ICcnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWluXCI+0KbQtdC90LA6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1pbi12YWx1ZSB0ZXh0LW1pbi12YWx1ZS1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfSDRgNGD0LEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9nbWVuZXJnby5iaXRyaXgyNC5ydS9wdWIvZm9ybS80X3V6bmF5dGVfdnNlX3BvZHJvYm5vc3RpX2lfdXNsb3ZpeWFfc290cnVkbmljaGVzdHZhL2MxbXd6eS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN0YS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQt9C90LDQudGC0LUg0L/QvtC00YDQvtCx0L3QvtGB0YLQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFyZW5kYS10ZXh0LW1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQntGB0YLQsNCy0YzRgtC1INC60L7QvdGC0LDQutGC0L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC4INC90LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0YtcclxuICAgICAgICAgICAgICAgICAgICAgICAg0L/QvtC00YDQvtCx0L3QviDRgNCw0YHRgdC60LDQttGD0YIg0L7QsSDRg9GB0LvQvtCy0LjRj9GFINGB0L7RgtGA0YPQtNC90LjRh9C10YHRgtCy0LAuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTUgY29sLWxnLTUgY29sLXhsLTUgb2Zmc2V0LXhsLTEgb3JkZXItbWQtMiBvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVByb3A9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9wcm9kdWN0cy90aHVtYi0ke3Byb2R1Y3QuaW1nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlnaHRib3hcclxuICAgICAgICAgICAgICAgICAgICAgIG1haW5TcmM9e2AvaW1hZ2VzL3Byb2R1Y3RzLyR7cHJvZHVjdC5pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2VSZXF1ZXN0PXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZGVzY3JpcHRpb24gcHJvZHVjdC11bml0IHB0LTQgcGItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhaW5lciBzZWN0aW9uLXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgPFByb2R1Y3RzQmVuZWZpdHMgLz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLW1pbi1jb2xvcmVkIHBiLTFcIj5cclxuICAgICAgICAgICAgICAgINCe0L/QuNGB0LDQvdC40LUgPHNwYW4gY2xhc3NOYW1lPVwiZGFyay1jb2xvclwiPntwcm9kdWN0LmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGl0ZW1Qcm9wPVwiZGVzY3JpcHRpb25cIiBjbGFzc05hbWU9XCJ0ZXh0IHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9uVHdvfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcm9kdWN0LXVuaXQgcHQtNCBwYi0yIHdoaXRlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXljb250YWluZXIgc2VjdGlvbi1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXItbWluLWNvbG9yZWQgcGItMVwiPlxyXG4gICAgICAgICAgICAgICAg0KXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQuHsnICd9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXJrLWNvbG9yXCI+e3Byb2R1Y3QubGFiZWx9Ojwvc3Bhbj57JyAnfVxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dCB0ZXh0LWJsYWNrXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb25PbmV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wICBwYXJhbWV0cnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTggdGV4dC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXIgbXQtMyBtdC14bC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0JzQsNGA0LrQsCDQtNCy0LjQs9Cw0YLQtdC70Y86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QubW90b3JNYXJrfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCt0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC80L7RidC90L7RgdGC0YwsINC60JLRgjp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntwcm9kdWN0LmVsZWN0cmljUG93ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0KLQtdC/0LvQvtCy0LDRjyDQvNC+0YnQvdC+0YHRgtGMLCDQutCS0YI6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QudGhlcm1hbFBvd2VyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPtCa0J/QlCDRjdC70LXQutGC0YDQuNGH0LXRgdC60LjQuSwgJTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5lbGVjdHJpY0VmZmljaWVuY3l9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPtCa0J/QlCDRgtC10L/Qu9C+0LLQvtC5LCAlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntwcm9kdWN0LnRoZXJtYWxFZmZpY2llbmN5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPtCa0J/QlCDQvtCx0YnQuNC5LCAlOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntwcm9kdWN0Lm92ZXJhbGxFZmZpY2llbmN5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPtCi0LjQvyDRgtC+0L/Qu9C40LLQsDogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC5mdWVsVHlwZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb21tb25cIj7QnNC10YLQsNC90L7QstC+0LUg0YfQuNGB0LvQvjogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC5tZXRoYW5lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lmdhc1ByZXNzdXJlICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JTQsNCy0LvQtdC90LjQtSDQs9Cw0LfQsCwg0LrQs9GBL9GB0LwyOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntwcm9kdWN0Lmdhc1ByZXNzdXJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCg0LDRgdGF0L7QtCDQs9Cw0LfQsCDQsiDQvdC+0LzQuNC90LDQu9GM0L3QvtC8INGA0LXQttC40LzQtSwg0L3QvDMv0YfQsNGBOnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Qubm9taW5hbEdhekNvbnN1bXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm9pbGNvbnN1bXB0aW9uICYmIHByb2R1Y3Qub2lsY29uc3VtcHRpb24gIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0KDQsNGB0YXQvtC0INC80LDRgdC70LAsINC60LMv0YfQsNGBOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3Qub2lsY29uc3VtcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5haXJjb25zdW1wdGlvbiAmJiBwcm9kdWN0LmFpcmNvbnN1bXB0aW9uICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0KDQsNGB0YXQvtC0INCy0L7Qt9C00YPRhdCwLCDQutCzL9GH0LDRgTp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC5haXJjb25zdW1wdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0KPRgNC+0LLQtdC90Ywg0YjRg9C80LAsINCU0LE6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3Qubm9pc2VMZXZlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnNlcnZpY2VJbnRlcnZhbCAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb21tb25cIj7QodC10YDQstC40YHQvdGL0Lkg0LjQvdGC0LXRgNCy0LDQuzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZFwiPntwcm9kdWN0LnNlcnZpY2VJbnRlcnZhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb21tb25cIj5cclxuICAgICAgICAgICAgICAgICAgICDQntCx0YnQuNC5INGA0LXRgdGD0YDRgSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC4OnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QudG90YWxQb3dlclBsYW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZ2FzTWl4ZXIgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDQk9Cw0LfQvtCy0L7Qt9C00YPRiNC90YvQuSDRgdC80LXRgdC40YLQtdC70Yw6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QuZ2FzTWl4ZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250cm9sQmxvY2sgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0JHQu9C+0Log0YPQv9GA0LDQstC70LXQvdC40Y86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC5jb250cm9sQmxvY2t9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5pZ25pdGlvblN5c3RlbSAhPT0gJycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb21tb25cIj7QodC40YHRgtC10LzQsCDQt9Cw0LbQuNCz0LDQvdC40Y86IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC5pZ25pdGlvblN5c3RlbX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRocm90dGxlVmFsdmUgIT09ICcnICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0JTRgNC+0YHRgdC10LvRjNC90LDRjyDQt9Cw0YHQu9C+0L3QutCwOiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QudGhyb3R0bGVWYWx2ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmV4Y2Vzc0FpclJhdGlvICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbW1vblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JrQvtGN0YTRhNC40YbQuNC10L3RgiDQuNC30LHRi9GC0LrQsCDQstC+0LfQtNGD0YXQsCwgzrs6eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkXCI+e3Byb2R1Y3QuZXhjZXNzQWlyUmF0aW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+0J3QsNC/0YDRj9C20LXQvdC40LUsINCSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGRcIj57cHJvZHVjdC52b2x0YWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC00IHByb21vLXByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvbW9Qcm9qZWN0cyBpdGVtc0NvdW50PXs0fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxKdW1ib0Fza0Zvcm0gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgYmctZ3JhZGllbnQtd2hpdGUgcHQtMlwiPlxyXG4gICAgICAgICAge3Byb2R1Y3QuaWQgPT0gMTIgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15Y29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPFlvdXR1YmVWaWRlbyBjbGFzc05hbWU9XCJteVZpZGVvXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPFNpbWlsYXJQcm9kdWN0cyBzaW1pbGFyPXtzaW1pbGFyfSBjYXRlZ29yeT17Y2F0ZWdvcnl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxGb3JtUGFnZSBwcm9kdWN0PXtwcm9kdWN0LmxhYmVsfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwbC14bC00IHByLXhsLTRcIj5cclxuICAgICAgICAgICAgPE90aGVyTmV3cyBuZXdzPXtuZXdzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgIC5yZWFjdC1mYW5jeWJveCAuYm94IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZWFjdC1mYW5jeWJveCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlYWN0LWZhbmN5Ym94IC5ib3ggLmltYWdlLWJveCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVhY3QtZmFuY3lib3ggLmJveCAuaW1hZ2UtYm94IC5jYXB0aW9uIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVhY3QtZmFuY3lib3ggLmZhZGUtZW50ZXIge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVpbiA2MDBtcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVhY3QtZmFuY3lib3ggLmZhZGUtbGVhdmUge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVvdXQgNjAwbXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnJlYWN0LWZhbmN5Ym94IC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMTNweDtcclxuICAgICAgICAgICAgdG9wOiAtMTNweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2R1Y3QtdW5pdCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIC5iZW5lZml0cy1wbGF0ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAvIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24gLmJlbmVmaXRzLXBsYXRlIC5iZW5lZml0LWNhcmQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiAuYmVuZWZpdHMtcGxhdGUgLmJlbmVmaXQtY2FyZCAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAuYmVuZWZpdHMtcGxhdGVcclxuICAgICAgICAgICAgLmJlbmVmaXQtY2FyZFxyXG4gICAgICAgICAgICAuaWNvbi1jb250YWluZXJcclxuICAgICAgICAgICAgLmJlbmUtaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIC5iZW5lZml0cy1wbGF0ZVxyXG4gICAgICAgICAgICAuYmVuZWZpdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuYmVuZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzYzNjM2MztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAuYmVuZWZpdHMtcGxhdGVcclxuICAgICAgICAgICAgLmJlbmVmaXQtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmJlbmUtdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAucHJvZHVjdC1pbWctY29udGFpbmVyIC5wcm9kdWN0LWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLmhlYWRlci1yZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAudGV4dC1jb250YWluZXItMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAudGV4dC1jb250YWluZXItMiAudGV4dC1taW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAudGV4dC1jb250YWluZXItMiAudGV4dC1taW4tdmFsdWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmUyZTJlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLnRleHQtY29udGFpbmVyLTIgLnRleHQtbWluLXZhbHVlLXByaWNlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLnRleHQtYmxhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wcm9kdWN0LWVuZXJneS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAucHJvZHVjdC1lbmVyZ3ktY29udGFpbmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAucHJvZHVjdC1lbmVyZ3ktY29udGFpbmVyIC5wcm9kdWN0LWVuZXJneSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMTVweCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAuYnV0dG9uLWdyb3VwIC5jdGEtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAuYnV0dG9uLWdyb3VwIC5jdGEtYnV0dG9uLWNvbnRhaW5lciAuY3RhLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5idXR0b24tZ3JvdXAgLmN0YS1idXR0b24tY29udGFpbmVyIC5jdGEtYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAuYnV0dG9uLWdyb3VwIC5hcmVuZGEtdGV4dC1taW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wcm9kdWN0LWltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wYXJhbWV0cnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAucGFyYW1ldHJzLWNvbnRhaW5lciAuY2FsYy1saW5rIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtZ3JhZGllbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLnBhcmFtZXRycy1jb250YWluZXIgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wYXJhbWV0cnMtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAudGV4dC1jb21tb24ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAucGFyYW1ldHJzLWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZm9ybS1iZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLmJ1dHRvbi1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAuYnV0dG9uLWdyb3VwIC5jdGEtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VjdGlvbi1wbGF0ZSAuYnV0dG9uLWdyb3VwIC5jdGEtYnV0dG9uLWNvbnRhaW5lciAuY3RhLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5idXR0b24tZ3JvdXAgLmFyZW5kYS10ZXh0LW1pbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuY29sb3Itc2VjdGlvbiAuc2VjdGlvbi1wbGF0ZSAuaGVhZGVyLXJlZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2xvci1zZWN0aW9uIC5zZWN0aW9uLXBsYXRlIC5wcm9kdWN0LWVuZXJneS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2xvci1zZWN0aW9uIC5zZWN0aW9uLXBsYXRlIC5wcm9kdWN0LWVuZXJneS1jb250YWluZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb25cclxuICAgICAgICAgICAgICAuc2VjdGlvbi1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWVuZXJneS1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1lbmVyZ3kge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDAgMHB4IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb24gLnNlY3Rpb24tcGxhdGUgLnRleHQtY29udGFpbmVyLTIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sb3Itc2VjdGlvbiAuc2VjdGlvbi1wbGF0ZSAudGV4dC1jb250YWluZXItMiAudGV4dC1taW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sb3Itc2VjdGlvbiAuc2VjdGlvbi1wbGF0ZSAudGV4dC1jb250YWluZXItMiAudGV4dC1taW4tdmFsdWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzJlMmUyZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2xvci1zZWN0aW9uXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tcGxhdGVcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXItMlxyXG4gICAgICAgICAgICAgIC50ZXh0LW1pbi12YWx1ZS1wcmljZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sb3Itc2VjdGlvbiAuc2VjdGlvbi1wbGF0ZSAucHJvZHVjdC1pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIC5iZW5lZml0cy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb24gLnNlY3Rpb24tcGxhdGUgLmhlYWRlci1yZWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb24gLnNlY3Rpb24tcGxhdGUgLnRleHQge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2xvci1zZWN0aW9uXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tcGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1lbmVyZ3ktY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtZW5lcmd5IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXBsYXRlIC5wYXJhbWV0cnMtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3Rpb24tcGxhdGUgLnBhcmFtZXRycy1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29sb3Itc2VjdGlvbiAuYm9yZGVyLWxlZnQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbG9yLXNlY3Rpb24gLmJvcmRlci1yaWdodCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC02MHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdC11bml0IC5wYXJhbWV0cnMtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXVuaXQgLmZsZXgtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXVuaXQgLmZsZXgtY29udGFpbmVyIC5mbGV4LXRvcCAuaGVhZGVyLXJlZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdCAuZmxleC1jb250YWluZXIgLmZsZXgtdG9wIC50ZXh0LWNvbnRhaW5lci0yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdFxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lci0yXHJcbiAgICAgICAgICAgICAgLnRleHQtbWluIHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdFxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lci0yXHJcbiAgICAgICAgICAgICAgLnRleHQtbWluLXZhbHVlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyZTJlMmU7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdC11bml0XHJcbiAgICAgICAgICAgICAgLmZsZXgtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyLTJcclxuICAgICAgICAgICAgICAudGV4dC1taW4tdmFsdWUtcHJpY2Uge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdCAuZmxleC1jb250YWluZXIgLmZsZXgtdG9wIC5wcm9kdWN0LWVuZXJneS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXVuaXRcclxuICAgICAgICAgICAgICAuZmxleC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1lbmVyZ3ktY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtZW5lcmd5IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCAzcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdCAuZmxleC1jb250YWluZXIgLmZsZXgtYm90dG9tIC5idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3QtdW5pdFxyXG4gICAgICAgICAgICAgIC5mbGV4LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdHRvbVxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAuY3RhLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24gLmJlbmVmaXRzLXBsYXRlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiAuYmVuZWZpdHMtcGxhdGUgLmJlbmVmaXQtY2FyZCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24gLmJlbmVmaXRzLXBsYXRlIC5iZW5lZml0LWNhcmQgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIC5iZW5lZml0cy1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5iZW5lZml0LWNhcmRcclxuICAgICAgICAgICAgICAuaWNvbi1jb250YWluZXJcclxuICAgICAgICAgICAgICAuYmVuZS1pY29uIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG4gICAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIC5iZW5lZml0cy1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5iZW5lZml0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuYmVuZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4MzgzODM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgLmJlbmVmaXRzLXBsYXRlXHJcbiAgICAgICAgICAgICAgLmJlbmVmaXQtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5iZW5lLXRleHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBjb2xvcjogIzI0MjQyNDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzVW5pdFBsYXRlO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\ProductUnitPlate.js */"));
    }
  }]);

  return ProductsUnitPlate;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ProductsUnitPlate);

/***/ }),

/***/ "./components/products/ProductsBenefits.js":
/*!*************************************************!*\
  !*** ./components/products/ProductsBenefits.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsBenefits; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProductsBenefits() {
  return __jsx("div", {
    className: "benefits-plate"
  }, __jsx("div", {
    className: "benefit-card"
  }, __jsx("div", {
    className: "icon-container"
  }, __jsx("img", {
    src: "/images/icons/debit-card.png",
    title: "\u0412\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B",
    alt: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B",
    className: "bene-icon"
  })), __jsx("div", {
    className: "text-container"
  }, __jsx("span", {
    className: "bene-title"
  }, "\u0413\u0438\u0431\u043A\u0438\u0435 \u0444\u043E\u0440\u043C\u044B \u043E\u043F\u043B\u0430\u0442\u044B:"), __jsx("span", {
    className: "bene-text"
  }, "\u041B\u0438\u0437\u0438\u043D\u0433 \u0438 \u0430\u0440\u0435\u043D\u0434\u0430"))), __jsx("div", {
    className: "benefit-card"
  }, __jsx("div", {
    className: "icon-container"
  }, __jsx("img", {
    src: "/images/icons/bar-chart.png",
    title: "\u041E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u044C 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
    alt: "\u0421\u0440\u043E\u043A \u043E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
    className: "bene-icon"
  })), __jsx("div", {
    className: "text-container"
  }, __jsx("span", {
    className: "bene-title"
  }, "\u0421\u0440\u043E\u043A \u043E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u0438:"), __jsx("span", {
    className: "bene-text"
  }, "12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432"))), __jsx("div", {
    className: "benefit-card"
  }, __jsx("div", {
    className: "icon-container"
  }, __jsx("img", {
    src: "/images/icons/location.png",
    title: "\u0412\u0441\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u044B \u0420\u0424",
    alt: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435",
    className: "bene-icon"
  })), __jsx("div", {
    className: "text-container"
  }, __jsx("span", {
    className: "bene-title"
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435:"), __jsx("span", {
    className: "bene-text"
  }, "\u0412\u0441\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u044B \u0420\u0424"))), __jsx("div", {
    className: "benefit-card"
  }, __jsx("div", {
    className: "icon-container"
  }, __jsx("img", {
    src: "/images/icons/customer-support.png",
    title: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 24 \u043C\u0435\u0441\u044F\u0446\u0430",
    alt: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435",
    className: "bene-icon"
  })), __jsx("div", {
    className: "text-container"
  }, __jsx("span", {
    className: "bene-title"
  }, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F:"), __jsx("span", {
    className: "bene-text"
  }, "24 \u043C\u0435\u0441\u044F\u0446\u0430"))));
}

/***/ }),

/***/ "./components/products/PromoProjects.js":
/*!**********************************************!*\
  !*** ./components/products/PromoProjects.js ***!
  \**********************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tables_projectList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tables/projectList */ "./components/tables/projectList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var PromoProjects = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PromoProjects, _Component);

  var _super = _createSuper(PromoProjects);

  function PromoProjects(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PromoProjects);

    _this = _super.call(this, props);
    _this.randomArray = _this.randomArray.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PromoProjects, [{
    key: "randomArray",
    value: function randomArray(arr, count) {
      var shuffled = arr.slice(0);
      var i = arr.length;
      var min = i - count;
      var temp;
      var index;

      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }

      return shuffled.slice(min);
    }
  }, {
    key: "render",
    value: function render() {
      var itemsCount = this.props.itemsCount;
      var projectsZero = [];
      var promoprojects = [];
      var content = '';
      _tables_projectList__WEBPACK_IMPORTED_MODULE_9__["default"].map(function (item) {
        if (item.id !== 0) {
          projectsZero.push(item);
        }
      });
      promoprojects = this.randomArray(projectsZero, itemsCount);
      content = promoprojects.map(function (item, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          key: "".concat(index, "-promoproj"),
          href: "/proekti/".concat(item.id)
        }, __jsx("a", {
          key: "".concat(index, "-promoproj"),
          className: "d-block promoproj-card"
        }, __jsx("div", {
          className: "proj-img"
        }, __jsx("img", {
          src: "/images/projects/".concat(item.img),
          alt: item.label,
          title: item.label,
          className: "w-100"
        })), __jsx("span", {
          className: "text-common"
        }, item.label)));
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("h4", {
        className: "jsx-2158328390" + " " + "header-min-colored"
      }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B:"), __jsx("div", {
        className: "jsx-2158328390" + " " + "proj-feed"
      }, content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2158328390"
      }, ".promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:15px;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}@media (min-width:576px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:30px;display:grid;grid-template:auto auto / 1fr 1fr;grid-gap:15px;}}@media (min-width:768px){.promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{grid-gap:30px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:12px;padding-left:0px;padding-right:35px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:18px;}}@media (min-width:992px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;}}@media (min-width:1200px){.promo-projects.jsx-2158328390{padding:0;padding-left:40px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-top:31px;margin-bottom:15px;font-size:19px;text-align:right;border-bottom:1px solid rgba(0,0,0,0.125);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding:0px;display:grid;grid-template:1fr / 1fr;grid-auto-flow:row;grid-gap:30px;grid-gap:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;cursor:pointer;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:10px;overflow:hidden;box-shadow:3px 3px 2px rgba(0,0,0,0.2);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;margin-top:0px;text-align:right;padding-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvbW9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBRzZCLEFBS0UsQUFHRCxBQVNELEFBR0UsQUFJRixBQVlHLEFBVUQsQUFLRSxBQUdKLEFBR0UsQUFHRSxBQUlELEFBYUEsQUFRRCxBQUdFLEFBSUgsQUFNTCxBQUlNLEFBT0osQUFVSSxBQUlHLEFBS0osVUE3QkcsRUFXTCxFQXZEZixDQXNDQSxBQW9DaUIsQ0FoSUEsQUFpQm5CLEFBT21CLEFBc0JFLEFBV25CLEFBNEJBLEFBaUJxQixBQWlCSixDQS9HRyxBQTRCRSxBQTRCSCxBQWFKLENBeEVqQixBQWVrQixBQStCaEIsQUFTa0IsQUE0QkEsQ0FtQ0EsTUFiUSxHQVgxQixFQXJCc0MsQUFtRG5CLENBVG5CLEVBdkhrQixBQXdCQyxBQXNCQyxDQTFCdEIsQUF3Q0UsQUFJcUIsQUF3QnJCLENBY2lCLEFBcUIyQixFQW5IL0IsQUE0QkUsVUE2RkcsRUFuQkcsQ0FyR1csQUE0QkksQUFrRWpCLENBdEdyQixBQThDRSxDQXRCYyxDQXdDRSxVQWlFaEIsR0F4R2UsQUFvREMsQ0FaQyxBQXNDOEIsQ0FPL0IsTUFhaEIsTUE3Q3lCLENBcERULENBakJGLEFBeURJLEFBNkNGLEVBMUVBLFlBM0JPLEFBc0dFLENBckZULENBV2hCLEFBNkJrQixXQXFDbEIsSUE1RWlCLENBd0NFLGdCQXZDckIsQ0F3Q0UsZ0RBVXVCLGdCQXBFRixBQXNHRSxLQWpDdkIsZ0JBcEVGLEFBc0dFIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvbW9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi90YWJsZXMvcHJvamVjdExpc3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgUHJvbW9Qcm9qZWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucmFuZG9tQXJyYXkgPSB0aGlzLnJhbmRvbUFycmF5LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByYW5kb21BcnJheShhcnIsIGNvdW50KSB7XHJcbiAgICBsZXQgc2h1ZmZsZWQgPSBhcnIuc2xpY2UoMCk7XHJcbiAgICBsZXQgaSA9IGFyci5sZW5ndGg7XHJcbiAgICBsZXQgbWluID0gaSAtIGNvdW50O1xyXG4gICAgbGV0IHRlbXA7XHJcbiAgICBsZXQgaW5kZXg7XHJcblxyXG4gICAgd2hpbGUgKGktLSA+IG1pbikge1xyXG4gICAgICBpbmRleCA9IE1hdGguZmxvb3IoKGkgKyAxKSAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICB0ZW1wID0gc2h1ZmZsZWRbaW5kZXhdO1xyXG4gICAgICBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtpXTtcclxuICAgICAgc2h1ZmZsZWRbaV0gPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNodWZmbGVkLnNsaWNlKG1pbik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zQ291bnQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgcHJvamVjdHNaZXJvID0gW107XHJcbiAgICBsZXQgcHJvbW9wcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgIHByb2plY3RzLm1hcChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgIT09IDApIHtcclxuICAgICAgICBwcm9qZWN0c1plcm8ucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwcm9tb3Byb2plY3RzID0gdGhpcy5yYW5kb21BcnJheShwcm9qZWN0c1plcm8sIGl0ZW1zQ291bnQpO1xyXG4gICAgY29udGVudCA9IHByb21vcHJvamVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICA8TGluayBrZXk9e2Ake2luZGV4fS1wcm9tb3Byb2pgfSBocmVmPXtgL3Byb2VrdGkvJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgIDxhIGtleT17YCR7aW5kZXh9LXByb21vcHJvamB9IGNsYXNzTmFtZT1cImQtYmxvY2sgcHJvbW9wcm9qLWNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvai1pbWdcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvcHJvamVjdHMvJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLW1pbi1jb2xvcmVkXCI+0JLRi9C/0L7Qu9C90LXQvdC90YvQtSDQv9GA0L7QtdC60YLRizo8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvai1mZWVkXCI+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblByb21vUHJvamVjdHMucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW9Qcm9qZWN0cztcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\PromoProjects.js */"));
    }
  }]);

  return PromoProjects;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

PromoProjects.propTypes = {
  itemsCount: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PromoProjects);

/***/ }),

/***/ "./components/products/SimilarProducts.js":
/*!************************************************!*\
  !*** ./components/products/SimilarProducts.js ***!
  \************************************************/
/*! exports provided: SimilarProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProducts", function() { return SimilarProducts; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SimilarProducts = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SimilarProducts, _Component);

  var _super = _createSuper(SimilarProducts);

  function SimilarProducts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SimilarProducts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SimilarProducts, [{
    key: "render",
    value: function render() {
      var similar = this.props.similar;
      var category = this.props.category;
      return __jsx("div", {
        className: "jsx-4001456038" + " " + "mycontainer section-plate"
      }, __jsx("div", {
        className: "jsx-4001456038" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4001456038" + " " + "col-12 border-simprod"
      }, __jsx("h4", {
        id: "power-header",
        className: "jsx-4001456038" + " " + "header-min-colored pt-2 pb-1"
      }, "\u0421\u0438\u043B\u043E\u0432\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438", ' ', __jsx("span", {
        className: "jsx-4001456038" + " " + "dark-color"
      }, "\u043D\u0430 \u0431\u0430\u0437\u0435 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u0435\u0439 ", category)), __jsx("div", {
        className: "jsx-4001456038" + " " + "similar-products"
      }, similar.map(function (_ref) {
        var label = _ref.label,
            key = _ref.key,
            id = _ref.id,
            img = _ref.img;
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/products/".concat(category, "/").concat(id),
          key: "".concat(key, "+").concat(id)
        }, __jsx("div", {
          className: "jsx-4001456038" + " " + "similar-card-container"
        }, __jsx("a", {
          className: "jsx-4001456038" + " " + "d-block similar-card"
        }, __jsx("div", {
          className: "jsx-4001456038" + " " + "img-container"
        }, __jsx("img", {
          src: "/images/products/".concat(img),
          alt: label,
          title: label,
          className: "jsx-4001456038" + " " + "similar-card-img"
        })), __jsx("span", {
          className: "jsx-4001456038" + " " + "similar-card-title"
        }, "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u044F ".concat(label)))));
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4001456038"
      }, ".header-red-2.jsx-4001456038{padding-top:15px;margin-left:0;}.similar-products.jsx-4001456038{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;margin:0;margin-bottom:20px;border-radius:3px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{width:100%;height:100%;max-width:270px;max-height:auto;cursor:pointer;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{border-radius:var(--border-radius);overflow:hidden;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:5px;padding-left:5px;padding-right:5px;display:block;font-size:12px;font-weight:700;text-align:center;line-height:16px;}@media (min-width:576px){.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{cursor:pointer;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}}@media (min-width:768px){.similar-products.jsx-4001456038{margin-bottom:20px;grid-gap:30px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038{height:auto;max-height:auto;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{height:auto;max-height:auto;max-width:360px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:12px;padding-left:0px;padding-right:65px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:24px;}}@media (min-width:992px){.similar-products.jsx-4001456038{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;margin:0;margin-bottom:20px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{max-width:360px;cursor:pointer;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{border-radius:3px;max-height:154px;overflow:hidden;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{font-size:18px;}}@media (min-width:1200px){.jsx-4001456038{.similar-products .similar-card-container .similar-card:hover;}#power-header.jsx-4001456038{margin-top:30px;padding-left:15px;}.bg-gradient-white.jsx-4001456038{background:linear-gradient(to bottom,#fff 0%,#fafafa 100%);}.similar-products.jsx-4001456038{margin:0 15px;margin-bottom:60px;grid-gap:30px;}.img-container.jsx-4001456038{box-shadow:5px 25px 25px -15px rgba(0,0,0,0.35);}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{height:180px;border-radius:var(--border-radius);overflow:hidden;box-shadow:3px 3px 4px rgba(0,0,0,0.2);-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{display:block;font-size:17px;padding-right:0;font-weight:300;line-height:22px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcU2ltaWxhclByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHOEIsQUFJSixBQVdGLEFBVXdCLEFBUXhCLEFBUUssQUFXQyxBQU1DLEFBYUcsQUFJUCxBQUlBLEFBU0QsQUFRTSxBQWFKLEFBT0csQUFPRSxBQVFILEFBTUMsQUFJNkMsQUFHL0MsQUFPZCxBQUNtRCxBQU10QyxBQVdGLEFBU0csV0FsS0osQUFrQkssQUF1REUsQUFpRkEsQ0E5RkQsQUFJQSxDQThCb0IsQUFpREQsQ0FkaEIsQUFrQ0osQ0E5SGpCLEFBK0VBLENBMUZpQixBQWlCRSxBQTBERixBQXFCRyxDQXpJTixBQWdHSyxDQTJCQSxDQXBESCxJQXZEQSxLQWtCSixBQTBDWixBQUlrQixBQVNKLEFBaUZBLENBU0ksRUFsTHBCLEFBb0hFLEVBM0VrQixBQWlCRyxBQWFyQixBQXlFZ0IsQ0FoREssQUF5Q3JCLENBakhnQixBQW1HRSxJQTNHRixDQWtCbEIsQUF1REUsQUFpRjhCLElBMUY5QixDQW1Ha0IsRUFsQ2xCLENBTUEsQUFPa0IsQ0FqREYsRUFwRmxCLEFBaUJnQixBQWtGZCxDQWpFZ0IsQ0FzQ0EsRUFoRkQsSUEySGYsRUF3Q21CLENBRXJCLENBeEVhLENBaURpQyxDQXBIN0IsQ0FpQkUsQ0FzQ0EsR0FoRm5CLEVBNkZ1QixFQTVHRixJQWtMbkIsRUF6SWdCLENBaUJFLENBc0NBLFNBYWxCLEtBbkVrQixDQWlCQSxDQXNDQSxLQTREWSxDQVc5QixTQTVHbUIsQ0FqQkYsQUF1REUsZ0JBckNuQixDQWpCRixBQXVERSxZQWxHZSx3QkE2SmYsaUNBNUphLGFBQ21CLGdDQUNsQixjQUNMLFNBQ1UsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcU2ltaWxhclByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHByb2R1Y3RzTGlzdCBmcm9tICcuLi90YWJsZXMvcHJvZHVjdHNMaXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1pbGFyUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHNpbWlsYXIgPSB0aGlzLnByb3BzLnNpbWlsYXI7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuY2F0ZWdvcnk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWNvbnRhaW5lciBzZWN0aW9uLXBsYXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGJvcmRlci1zaW1wcm9kXCI+XHJcbiAgICAgICAgICAgIDxoNCBpZD1cInBvd2VyLWhlYWRlclwiIGNsYXNzTmFtZT1cImhlYWRlci1taW4tY29sb3JlZCBwdC0yIHBiLTFcIj5cclxuICAgICAgICAgICAgICDQodC40LvQvtCy0YvQtSDRg9GB0YLQsNC90L7QstC60Lh7JyAnfVxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhcmstY29sb3JcIj7QvdCwINCx0LDQt9C1INC00LLQuNCz0LDRgtC10LvQtdC5IHtjYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltaWxhci1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgIHtzaW1pbGFyLm1hcCgoeyBsYWJlbCwga2V5LCBpZCwgaW1nIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtjYXRlZ29yeX0vJHtpZH1gfSBrZXk9e2Ake2tleX0rJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW1pbGFyLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1ibG9jayBzaW1pbGFyLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9wcm9kdWN0cy8ke2ltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbWlsYXItY2FyZC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaW1pbGFyLWNhcmQtdGl0bGVcIj57YNCT0LDQt9C+0L/QvtGA0YjQvdC10LLQsNGPINGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40Y8gJHtsYWJlbH1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5oZWFkZXItcmVkLTIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyIC5zaW1pbGFyLWNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuc2ltaWxhci1jYXJkXHJcbiAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyIC5zaW1pbGFyLWNhcmQge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZFxyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0cyAuc2ltaWxhci1jYXJkLWNvbnRhaW5lciAuc2ltaWxhci1jYXJkIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuc2ltaWxhci1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAuc2ltaWxhci1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuc2ltaWxhci1jYXJkXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0cyAuc2ltaWxhci1jYXJkLWNvbnRhaW5lciAuc2ltaWxhci1jYXJkIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTU0cHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZFxyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgI3Bvd2VyLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJnLWdyYWRpZW50LXdoaXRlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmIDAlLCAjZmFmYWZhIDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaW1pbGFyLXByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuc2ltaWxhci1jYXJkOmhvdmVyXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAyNXB4IDI1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpbWlsYXItcHJvZHVjdHNcclxuICAgICAgICAgICAgICAuc2ltaWxhci1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2ltaWxhci1wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNpbWlsYXItY2FyZFxyXG4gICAgICAgICAgICAgIC5zaW1pbGFyLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2ltaWxhclByb2R1Y3RzO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\SimilarProducts.js */"));
    }
  }]);

  return SimilarProducts;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (SimilarProducts);

/***/ }),

/***/ "./components/tables/newsList.js":
/*!***************************************!*\
  !*** ./components/tables/newsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var newsList = [{
  label: 'Льготный лизинг энергетического оборудования',
  id: 0,
  img: 'news/lizing.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Информируем Вас о новом формате поддержки производственных предприятий - льготном лизинге энергетического оборудования.',
  description: '<p>Информируем Вас о новом формате поддержки производственных предприятий - льготном лизинге энергетического оборудования.</p><br><p>При участии АО «Федеральная корпорация по развитию малого и среднего предпринимательства» в Российской Федерации созданы 4 региональные лизинговые компании.</p><br><p>АО «Региональная лизинговая компания Ярославской области» находиться в г. Ярославль и преимущественно работает по центральному и северо-западному федеральному округу. Руководитель компании - Филиппов Илья Олегович .</p><br><p>АО «Региональная лизинговая компания Ярославской области» предлагает  Вам  воспользоваться программой льготного лизинга на приобретение нового оборудования для субъектов индивидуального и малого предпринимательства.</p><br><p><b>Условия предоставления льготного лизинга:</b></p><br><table class="tg"><tr><th class="tg-0lax"><span>процентная ставка</span></th><th class="tg-0lax"><span>6% годовых - для российского оборудования</span><br><span>8% годовых - для иностранного оборудования</span></th></tr><tr><td class="tg-0lax"><span>авансовый платеж</span></td><td class="tg-0lax"><span>от 15% стоимости предмета лизинга</span></td></tr><tr><td class="tg-0lax"><span>сумма финансирования</span></td><td class="tg-0lax"><span>от 5 млн. рублей до 200 млн. рублей</span></td></tr><tr><td class="tg-0lax"><span>срок финансирования</span></td><td class="tg-0lax"><span>от 13 месяцев до 5 лет</span></td></tr></table><br><p><b>Предмет лизинга:</b></p><br><ul class="news-ul"><li>Высокотехнологичное и инновационное оборудование</li><li>Промышленное оборудование</li><li>Оборудование в сфере переработки и хранения с/х продукции</li></ul><br><p>С более детальной информацией о нашей компании и предоставляемых услугах Вы можете ознакомиться в ООО «Газовые машины», либо позвонить по телефону: <b>8 (4852) 58-80-84.</b></p>'
}, {
  label: 'Расширение гарантии и Увеличение межсервисных интервалов на газопоршневые электростанции MAN',
  id: 1,
  img: 'news/interval.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'В результате совместной работы с инженерами концерна MAN, направленной на  реализацию комплекса мероприятий по улучшению качества выпускаемых газопоршневых электростанций с двигателями MAN...',
  description: '<p>В результате совместной работы с инженерами концерна MAN, направленной на  реализацию комплекса мероприятий по улучшению качества выпускаемых газопоршневых электростанций с двигателями MAN, увеличен гарантийный срок на электростанции нашего производства до 24 месяцев.</p><br><p>Кроме того, согласовано расширение межсервисных интервалов на электростанции MAN 200 - 250 с 1 000 до 1500 моточасов, MAN 300-500 c 900 до 1000 моточасов, что позволяет нашим заказчикам существенно экономить на эксплуатационных расходах.</p>'
}, {
  label: 'Изготовлен первый образец газопоршневой электростанции с двигателем ЯМЗ 530 CNG',
  id: 2,
  img: 'news/first-maid.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ООО «Газовые машины» совместно с ПАО «Автодизель» изготовлен первый серийный образец газовой электростанции',
  description: '<p>ООО «Газовые машины» совместно с ПАО «Автодизель» изготовлен первый серийный образец газовой электростанции мощностью 150 кВт на базе нового перспективного семейства газопоршневых рядных двигателей ЯМЗ 530 CNG.</p><br><p>На базе этого семейства двигателей «Газовые машины» совместно с «Группой ГАЗ» планируют выпускать модельный ряд газопоршневых электростанций мощностью от 30 до 150 кВт экологического класса 5. </p><br><p>4-х и 6-цилиндровые модели ЯМЗ-530 CNG разработаны совместно с компанией Westport – мировым лидером в создании газовых двигателей для коммерческого транспорта (изделия компаний Cummins, Caterpillar, GM, Kenworth, Hyundai, Volvo, Weichai).</p><br><p>ЯМЗ-530 CNG по техническим характеристикам и потребительским качествам не уступают лучшим мировым аналогам, обеспечивает выполнение экологических параметров euro-5 и ресурс до капитального ремонта на уровне лучших мировых образцов (не менее 50 000 моточасов).</p><br><p>Изготовление газовых двигателей ЯМЗ-530 CNG осуществляется на современном производстве средних рядных двигателей в едином потоке с дизельными моделями с обеспечением мирового уровня качества. Компоненты CNG крупнейших мировых производителей Federal Mogul, Bosch, Nikki, MotorTech, KarlDungs</p><br><p>Семейство двигателей представлено 4-х и 6-ти цилиндровыми газовыми двигателями (CNG) семейства ЯМЗ-530, 4-тактные, с рядным расположением цилиндров, жидкостной системой охлаждения, турбонаддувом и охлаждением наддувочного воздуха. Степень сжатия 12. По выбросам вредных веществ соответствуют экологическому классу 5 – ТР ТС 018/2011, Правила ООН № 49-05В2 (G) - Euro 5.</p><br><p>Инженерами ООО «Газовые машины», совместно с компанией Motortech (Германия) проведены работы по адаптации транспортной версии газового двигателя для применения в составе стационарных электростанций. </p><br><p>17 августа 2017 г. электростанции были презентованы Президентом Группы ГАЗ Вадимом Сорокиным Генеральному директору ПАО «Россети» Олегу Бударину.<br>Первые единицы электростанций уже отгружены потребителям.</p>'
}, {
  label: 'Проведен аудит производства концерном MAN',
  id: 3,
  img: 'news/audit-man.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Завершен ежегодный технический аудит производства ООО «Газовые машины» техническими специалистами концерна MAN.',
  description: '<p>Завершен ежегодный технический аудит производства ООО «Газовые машины» техническими специалистами концерна MAN. В ходе аудита поставлена высокая оценка качеству выпускаемых нашей компанией газопоршневых электростанций с применением двигателей MAN. По результатам аудита действие сертификата производителя техники с двигателями MAN для нашей компании продлено на год, до 06 сентября 2019 г.</p>'
}, {
  label: 'Прошли обучение в концерне Liebherr',
  id: 4,
  img: 'news/libherr-study.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Бюль (Швейцария) в учебном центре концерна Liebherr.',
  description: '<p>Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Бюль (Швейцария) в учебном центре концерна Liebherr. Полученные знания значительно расширили возможности нашей компании по производству электростанций с применением двигателей Liebherr, а также по сервисному обслуживанию и ремонту техники Liebherr.</p>'
}, {
  label: 'Прошли обучение в концерне MAN',
  id: 5,
  img: 'news/man-study.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Нюрнберг в учебном центре концерна MAN. ',
  description: '<p>Ведущие инженеры ООО «Газовые Машины» успешно  прошли курс обучения в г. Нюрнберг в учебном центре концерна MAN. Полученные знания значительно расширили возможности нашей компании по производству электростанций с применением двигателей MAN, а также по сервисному обслуживанию и ремонту техники MAN.</p>'
}, {
  label: 'Генеральный директор ООО «Газовые машины» В.Г. Жуков избран в состав Общественного Совета Ярославской области.',
  id: 6,
  img: 'news/zhukov.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Приказом департамента инвестиций и промышленности Ярославской области от 18 декабря 2017 года № 313-ОД утвержден состав Общественного совета при департаменте департамента инвестиций и промышленности Ярославской области.',
  description: '<p>Приказом департамента инвестиций и промышленности Ярославской области от 18 декабря 2017 года № 313-ОД утвержден состав Общественного совета при департаменте департамента инвестиций и промышленности Ярославской области. Число членов Общественного совета – 9 человек.</p><br><p>В состав совета включены: Бердичевская Виктория Олеговна, Брюханов Дмитрий Юрьевич, Галагаев ВладА.В.Хухаревич, Жуков Владимир Геннадьевич, Можейко Леонид Чеславович, Николаев Валерий Юрьевич, Поляков Сергей Валерьевич, Симонов ВладА.В.Хухаревич, Шелкошвейн Петр Алексеевич</p><br><p> Срок полномочий – до декабря 2020 года.</p><br><p>Общественный совет является постоянно действующим консультативно-согласовательным органом, образованным в целях обеспечения участия граждан в выработке и реализации государственной политики в сфере, относящейся к полномочиям департамента инвестиций и промышленности Ярославской области.</p>'
}, {
  label: 'Введен в эксплуатацию энергоцентр ПАО «Автодизель» (ПСРД)',
  id: 7,
  img: 'news/avtodisel.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ООО «Газовые машины» по договору генерального подряда завершило работы по внедрению «под ключ» автономного энергоцентра для ПАО «Автодизель».',
  description: '<p>ООО «Газовые машины» по договору генерального подряда завершило работы по внедрению «под ключ» автономного энергоцентра для ПАО «Автодизель». В ходе выполнения EPC контракта нашими специалистами проведен сбор технических условий, комплекс инженерных изысканий, выполнены работы по проектированию, изготовлено основное оборудование для генерации. Проведен комплекс строительно-монтажных работ: строительство фундаментов, монтаж металлоконструкций и эстакад, монтаж теплотрассы и газопровода, монтаж узлов учета тепловой электрической энергии, газа. Выполнены прокладка кабельных линий и сетей связи и автоматики. Проведены пуско-наладочные работы.</p><br><p>Энергоцентр создан на базе пяти энергоблоков 300 кВт производства ООО «Газовые машины». В основе газопоршневых установок используются двигатели Э8502.10 производства ЯМЗ электрической мощностью 300 кВт., тепловой мощностью  470 кВт.</p><br><p>Тепловая энергия станции будет использоваться для производства горячей воды. Оборудование размещается на открытой площадке, в непосредственной близости от котельной. Станция работает в режиме   синхронизации с сетью. Топливо – природный газ. </p><br><p>В составе станции смонтированы ГРПШ и КТП. Действуют системы АСКУЭ,- локальной и удаленной диспетчеризации технологического оборудования. <i>«ЯМЗ» – одно из крупнейших российских предприятий по производству дизельных двигателей многоцелевого назначения, сцеплений, коробок передач, запасных частей к ним, а также стационарных агрегатов на их базе. Ярославскими двигателями оснащаются несколько сотен моделей транспортных средств, изделий специального назначения, ДГУ и ГПУ производимых в России и Белоруссии.</i></p>'
}, {
  label: 'Генеральный директор ООО «Газовые машины» В.Г. Жуков в составе делегации Ярославской области посетил респ. Крым',
  id: 8,
  img: 'news/visit-krim.jpg',
  category: 'Наука и техника',
  created_at: '12.10.2018',
  updated_at: '12.10.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'Делегация Ярославской области во главе с губернатором Дмитрием Мироновым прибыла с рабочим визитом в Республику Крым. Регион также представляют председатель Правительства Дмитрий Степаненко, его заместители, руководители промышленных и сельскохозяйственных предприятий, ректоры вузов.',
  description: '<p>Делегация Ярославской области во главе с губернатором Дмитрием Мироновым прибыла с рабочим визитом в Республику Крым. Регион также представляют председатель Правительства Дмитрий Степаненко, его заместители, руководители промышленных и сельскохозяйственных предприятий, ректоры вузов.</p><br><p>В Министерстве промышленной политики республики прошел круглый стол по межрегиональному торгово-экономическому взаимодействию, где представители правительства Ярославского региона и руководители промышленных предприятий вместе с крымскими коллегами обсудили вопросы расширения поставок в Крым ярославской продукции. На круглом столе в Министерстве промышленности республики Крым продукцию ярославской компании «Ангстрем» представил генеральный директор предприятия Евгений Завитухин.</p><br><p>«Задача наших электролабораторий в том, чтобы электроэнергия, которая передается потребителю, была качественной, – пояснил Евгений Завитухин. – У нас есть в том числе и уникальные системы, которые в России и странах СНГ раньше не производились. Продукцию мы уже поставляли на несколько предприятий Крыма и сейчас продолжаем искать партнеров, которые смогли бы обслуживать наши лаборатории».</p><br><p>На сегодняшний день в Крыму функционируют энергокомплексы на базе газопоршневых установок ЯМЗ производства ООО «Газовые машины» на объектах в г. Алушта. Кроме того, газопоршневые электростанции ООО «Газовые машины» обеспечивают электроэнергией добычу природного газа на шельфе Черного моря. </p><br><p>В тот же день в Симферополе состоялась встреча членов официальной делегации Ярославской области с и. о. ректора Крымского федерального университета имени В.И. Вернадского Андреем Фалалеевым. Регион представляли руководитель аппарата губернатора Кирилл Сорокин и руководители трех вузов: ЯрГУ – Александр Русаков, ЯГСХА – Светлана Гусар и ЯГТУ – Елена Степанова.</p><br><p>Ярославцы представили крымским коллегам опыт создания регионального Агентства технологического развития: в него вошли три вуза в рамках работы по созданию научно-технологической платформы. Заведующие основными кафедрами Крымского университета рассказали о своей работе, показали, как функционируют лаборатории.</p><br><p>Итогом мероприятия стало подписание двусторонних соглашений о сотрудничестве между тремя ярославскими вузами и Крымским федеральным университетом. Документами предусмотрена реализация совместных образовательных программ, содействие организации практического обучения студентов на предприятиях регионов, совместная научная работа, стажировки, научные и молодежные проекты.</p><br><p>О перспективах сотрудничества Ярославской области и Крыма в сфере агропромышленного комплекса и потребительского рынка говорили также на круглом столе, прошедшем в  Министерстве сельского хозяйства республики.</p><br><p>«Наблюдается положительная динамика увеличения поставок ярославской продукции в Республику Крым, – отметил заместитель председателя Правительства Ярославской области Валерий Холодов. – Объем товарооборота продукции АПК в 2016 году составлял почти 35 миллионов рублей, в конце 2017-го был увеличен до 101 миллиона».</p><br><p>В 2018 году планируется, что объем товарооборота по сравнению с 2016 годом будет увеличен в 5 раз и достигнет 181 миллиона рублей.</p>'
}, {
  label: 'ООО «Газовые машины» участвовало в выставке «Собственная генерация-Юг» (Краснодар)',
  id: 9,
  img: 'news/sobsvennaya-generaciya.jpg',
  category: 'Наука и техника',
  created_at: '01.07.2014',
  updated_at: '12.12.2018:14.58',
  author: 'А.В. Хухарев',
  preview_text: 'ВЦ «КубаньЭкспоцентр», г. Краснодар, состоялся I Форум-выставка Юга России «Собственная генерация на предприятии',
  description: '<p>1-2 июля 2014 г. в ВЦ «КубаньЭкспоцентр», г. Краснодар, состоялся I Форум-выставка Юга России «Собственная генерация на предприятии: ставка на энергоэффективность, бесперебойность и снижение затрат». Организатором Форума является компания Redenex – профессиональный организатор деловых мероприятий международного уровня.</p><br><p>Собственная выработка электричества позволяет предприятиям не только серьезно сократить расходы на электроэнергию, но и обеспечить ее бесперебойность, удовлетворить растущие потребности в новых мощностях, а в ряде отраслей – утилизировать отходы производства.</p><br><p>Целью Форума-выставки послужило содействие внедрению и эксплуатации объектов малой и средней генерации на предприятиях Юга России, а также продвижение технологических решений в сфере распределенной энергетики. </p><br><p>Программа мероприятия включала в себя двухдневный форум, выставку энергооборудования, мастер-классы и опыт предприятий, работу центра Business Connect, консультации юристов и ежедневные экскурсии на действующие энергообъекты. Мы надеемся, что знакомство с последними тенденциями в области распределенной энергетики и примерами успешной реализации проектов по созданию и использованию собственной генерации будет способствовать повышению эффективности и развитию вашего бизнеса, а также и экономики региона в целом». </p><br><p>Первая дискуссия была посвящена перспективам развития распределенной энергетики на Юге России. «Собственная генерация – насущная тема для многих предприятий России. В то время, когда растут тарифы на электроэнергию, предприятия, у которых электроэнергия занимает большую долю в себестоимости, это очень сильно ощущают.</p><br><p>Кроме того, в первый день обсуждались такие вопросы как взаимодействие субъектов энергетической отрасли и юридические аспекты внедрения собственной генерации. Достойным завершением первого дня стал визит на уникальную ГГЭС предприятия ООО «Центр Соя», функционирующую на биомассе из лузги в сплоченном виде.</p><br><p>Второй день Форума был посвящен вопросам финансирования и сокращению издержек проектов по внедрению собственной генерации. Также участники сравнили эффективность проектов с использованием отечественных дизельных и газопоршневых генераторов и электрических агрегатов для малой энергетики. Особый интерес аудитории вызвали мастер-классы и выступления экспертов, поделившихся практическим опытом внедрения собственной генерации на производстве.</p><br><p>В завершение Форума участники смогли посетить действующий энергоцентр компании ЗАО «Тандер» (сеть магазинов «Магнит»). Энергоцентр мощностью 17.2 МВт с когенерацией и выработкой СО2 из выхлопных газов обеспечивает энергоснабжение крупнейшего на юге России тепличного комплекса «Зеленая линия» и административных помещений компании Магнит. </p><br><p>Параллельно с деловой программой работала выставка, где все посетители могли ознакомиться с различными видами оборудования: генерирующим, энергосберегающим, оборудованием, работающим на органических видах топлива, системами бесперебойного электроснабжения, сервисным оборудованием для малой генерации и др. </p><br><p>За два дня работы Форум посетили более 200 делегатов, среди которых руководители и главные энергетики таких компаний, как: Лукойл, Роснефть, РЖД, Нипигазпереработка, Сибур, Евроцемент, Тандер (сеть магазинов Магнит), Еврохим, Сад Гигант, Юг Руси, Макс Моторс, Ростовтеплоэлектропроект и многие другие. </p><br><p>На площадке Форума работала система Business Connect, которая в очередной раз доказала свою эффективность в организации деловых переговоров, – было проведено более 150 встреч, которые безусловно стали основой для длительного и взаимовыгодного сотрудничества.'
}, {
  label: 'Выработка электрической энергии из свалочного газа',
  id: 10,
  img: 'news/bio-energy.jpg',
  category: 'Наука и техника',
  created_at: '21.01.2019',
  updated_at: '21.01.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'Мусор при гниении выделяет свалочный газ, 50% которого составляет метан –  горючий газ. Для извлечения метана используется расположенная в теле полигона газосборная система...',
  description: 'Газа, вырабатываемого из содержимого одной городской мусорной свалки среднего размера, достаточно для обеспечения электроэнергией целого городского микрорайона. Европейские компании осуществляют утилизацию свалочного газа по этой технологии уже много лет. Свободное распространение свалочного газа приводит к загрязнению атмосферы токсичными и дурно пахнущими соединениями, кроме того, в определенных концентрациях свалочный газ может представлять опасность для человека. Для устранения этой угрозы свалочный газ необходимо утилизировать.<br><br>Суть технологии состоит в том, чтобы исключить проникновение продуктов распада отходов глубоко в грунт и, затем в груновые воды, путем укладки на дно котлована геомембраны. Для исключения массового выхода свалочных газов, по всей поверхности полигона устраивается экран из глины, который дополнительно перекрывает доступ кислорода вглубь полигона. Мусор при гниении выделяет свалочный газ, 50% которого составляет метан –  горючий газ. Для извлечения метана используется расположенная в теле полигона газосборная система,  состоящая из разветвлённой сети трубопроводов и колодцев-накопителей в местах скопления.<br><br>По системе трубопроводов свалочный газ поступает в накопители и далее сжигается в газопоршневых двигателях,  генераторы вырабатывают электроэнергию. Давление газа в системе поддерживается комплексом компрессорных установок. Новые технологии не только позволяют получать электроэнергию из свалочного газа, но и существенно улучшают экологическую обстановку в районе.<br><br>Следует отметить, что поступление свалочного газа не стабильно, и для обеспечения полной его утилизации целесообразно на полигоне смонтировать установку для подмешивания в свалочный газ природного, либо сжиженного газа. Это обеспечит утилизацию свалочного газа в полном объеме даже в периоды, когда его будет недостаточно для стабильной работы газопоршневого двигателя.<br>Компания «Газовые машины» предлагает полностью комплектные решения для утилизации свалочных газов, основанные на применение модульных газопоршневых электростанций собственного производства 100% заводской готовности.<br><br>Двигатели электростанций полностью адаптированы для работы на свалочном газе в заводских условиях.'
}, {
  label: 'Лизинг газопоршневых установок',
  id: 11,
  img: 'news/lizing-rlk.jpg',
  category: 'Наука и техника',
  created_at: '13.03.2019',
  updated_at: '13.03.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'РЛК ЯО будет осуществлять финансирование проектов, направленных на внедрение автономных энергоцентров на базе модульного энергетического оборудования производства компании «Газовые машины».',
  description: '13 марта 2019 года подписано соглашение о сотрудничестве Региональной лизинговой компании Ярославской области (РЛК ЯО) и ООО «Газовые машины».<br><br>Согласно подписанного документа РЛК ЯО будет осуществлять финансирование проектов, направленных на внедрение автономных энергоцентров на базе модульного энергетического оборудования производства компании «Газовые машины».<br><br>Первый контракт заключен с сельхозпредприятием из Ростовского района. Благодаря специальной программе финансирования Заказчик получил возможность приобрести оборудование в лизинг под 6% годовых.<br><br>«Газовые машины» не только изготовят для Заказчика когенерационную установку MAN мощностью 260 кВт, но и осуществят доставку оборудования, монтаж и пуско-наладочные работы. Когенерационная установка MAN будет обеспечивать электроэнергией и теплом животноводческий комплекс.<br><br>Решение о финансировании этого проекта нами уже принято - сообщил генеральный директор РЛК ЯО Илья Филиппов.<br><br>Сотрудничество между РЛК ЯО и «Газовыми машинами» открывает для малого и среднего бизнеса возможность для существенного сокращения производственных затрат за счет снижения стоимости энергоресурсов. Так в настоящее время, средняя стоимость 1 кВт.ч электрической энергии для малого бизнеса составляет более 6 рублей, стоимость 1 Гкал тепловой энергии более 2 000 рублей.<br><br>Применение высокоэффективных когенерационных установок производства «Газовые машины» позволяет заказчикам получить себестоимость электрической энергии на уровне 2 рублей за 1 кВт.ч, при этом тепловая энергия получается без дополнительных затрат.<br><br>Доступные цены на выпускаемое нами оборудование, в совокупности с выгодным финансированием проектов со стороны РЛК ЯО, позволяют сформировать уникальное предложение для организаций малого и среднего бизнеса, нуждающихся в оптимизации энергозатрат, - отметил генеральный директор ООО «Газовые машины» Владимир Жуков.'
}, {
  label: 'Запасные части и комплектующие компании Motortech',
  id: 12,
  img: 'news/parts-motortech.jpg',
  category: 'Наука и техника',
  created_at: '22.03.2019',
  updated_at: '22.03.2019:09.30',
  author: 'А.В. Хухарев',
  preview_text: 'Прямые поставки от производителя любых комплектующих компании Motortech со склада в г. Ярославле',
  description: 'Уважаемые потребители, с текущего года, наша компания имеет возможность предложить Вам оригинальные комплектующие и запасные части к газопоршневых двигателям MAN, Jenbacher, MTU, MWM, Liebherr, Cummins, Caterpillar, Waukesha, Perkins, производства компании Motortech GMBH (Мотортех, Германия).<br><br>Прямые поставки от производителя позволяют нам в оперативные сроки и по низкой цене осуществить поставку любых комплектующих компании Motortech со склада в г.Ярославле.<br><br>В номенклатуре:<br>- Свечи зажигания и свечные наконечники (высоковольтные провода) Motortech GE 2-3, GI 3-4, GK 3-7, GL 3-4, MHP, MBP, MPC, IPC, XT, XTL;<br>- Масляные фильтра;<br>- Катушки зажигания Motortech и Altronic;<br>- Блоки управления зажиганием и комплектные системы MIC 3, MIC 4, MIC 5, MIC 6, PowerView 3, Alpharail,  триггерные диски;<br>- Системы контроля детонации Detcon20, Alpharail;<br>- Модули температурного контроля TempScan20;<br>- Дроссельные заслонки ITB Throttle Body, дроссельные заслонки для газовых двигателей;<br>- Газовоздушные смесители VariFuel 2 и блоки управления VariStep 3;<br>- Системы контроля эмиссии EmCon 5;<br>- Системы управления генераторными установками All In One;<br><br>Наши специалисты, подберут для Вас необходимые комплектующие и проведут работы по их монтажу на Вашем объекте.'
}, {
  label: 'Газовые двигатели MAN для применения в составе когенерационных установок',
  id: 13,
  img: 'news/MAN-E-3268-LE-242.jpg',
  category: 'Наука и техника',
  created_at: '31.03.2019',
  updated_at: '31.03.2019:13.34',
  author: 'А.В. Хухарев',
  preview_text: 'MAN Engines производит малозагрязненные газовые двигатели для когенерационных установок мощностью от...',
  description: 'MAN Engines производит малозагрязненные газовые двигатели для когенерационных установок мощностью от 37 кВт до 500 кВт на природном газе и от 68 кВт до 500 кВт на специальном газом (биогаз, свалочный газ, канализационный газ). Двигатели МАН, разработанные специально для работы на  природном и специальных газах, обладают высочайшей надежностью и самым  высоким КПД. Оптимальный процесс сгорания позволяет достигать общей эффективности свыше 90 процентов. Благодаря широкому ассортименту атмосферных двигателей с невысокой стоимостью технического обслуживания самые низкие уровни выбросов могут быть достигнуты за счет использования 3-ходового каталитического нейтрализатора.<br><br>Газовые двигатели МАН положительно зарекомендовали себя благодаря своей надежности в сочетании с устойчивой работой в период пиковых нагрузок и непрерывной работой, в сельском хозяйстве, муниципальной сфере, в гостиницах и больницах, а также во многих других отраслях. Длинные интервалы обслуживания и высокий срок службы газовых двигателей МАН обеспечивают низкую общую стоимость владения.<br><br><b>Технические характеристики двигателей полностью подтверждены ресурсными испытаниями</b><br><br>Двигатели MAN для работы природного газа и специального газа (биогаз, свалочный газ, канализационный газ) гарантируют безопасность применения. Испытанные и оптимизированные по результатам в полевых испытаний, они доказывают свою надежность при эксплуатации в самых неблагоприятных условиях окружающей среды. Выбирая двигатель МАН Вы можете быть уверены в использовании полностью разработанного продукта, на который вы можете рассчитывать. Портфолио двигателей покрывает ряд мощности от 37 до 500 kW. Это делает двигатели МАН идеальным поставщиком энергии для самого широкого спектра операций в когенерации – для коммунальных предприятий, сельскохозяйственных и промышленных предприятий.<br><br><b>Гибкость и индивидуальность</b><br><br>МАН знает: каждое решение должно быть индивидуальным, так как задачи разные. Компетенция компании «Газовые машины» дает Вам возможность применения различных систем управления или дополнительных компонент, что позволяет выбрать наилучший вариант компоновки энергоустановки для Вашего объекта с учетом любых индивидуальных особенностей.<br><br><b>Прочная и одновременно компактная конструкция</b><br><br>Компактность с высокой производительностью: специальные газовые двигатели МАН объединяют оба эти преимущества. При работе в непрерывном режиме, они гарантированно поставляют энергию, в течение всего длительного срока службы. При выполнения регламента обслуживания гарантированный срок службы двигателей МАН до капитального ремонта составляет 50 000 моточасов. Общий ресурс двигателей МАН составляет не менее 100 000 моточасов. Конструкция двигателей МАН позволяет легко поддерживать их в исправном состоянии, оперативно, эффективно, и по низким ценам.<br><br><b>Эффективность благодаря длинным межсервисным интервалам</b><br><br>Двигатели МАН обладают простотой и надежностью конструкции, что позволяет в значительной мере сократить эксплуатационные расходы. Компактная и легко доступная конструкция облегчает и ускоряет операции обслуживания.<br><br><b>Низкие уровни выбросов</b><br><br>Газовые двигатели МАН имеют низкий уровень загрязнения окружающей среды. В соответствии со строгими директивами по выбросам TA-Luft и TA-Luft½, очистка выхлопных газов зачастую даже не требуется. На специальных газовых двигателях, предназначенных для работы на биогазе, может потребоваться применение каталитического нейтрализатора. 3 - полюсный каталитический нейтрализатор достаточен для атмосферных двигателей, работающих на природном газе. Таким образом, вы можете рассчитать низкие затраты на покупку.<br><br>Низкий уровень загрязняющих веществ и оснащенные современной технологией сжигания, газовые и специальные двигатели MAN прокладывают путь к будущему когенерации. Энергоснабжение является важным компонентом экономического успеха. Поэтому, конечно, вы всегда можете рассчитывать на нашу корпорацию после покупки, если вы нуждаетесь в помощи.<br><br>МАН и «Газовые машины» предлагают вам, индивидуальную концепцию обслуживания. Наши компании регулярно проводят учебные курсы для обучения персонала обслуживанию когенерационных установок с применением двигателей МАН, используя глубокие и проверенные знания МАН: надежные и эффективные – так же, как газовый двигатель МАН. '
}, {
  label: 'Паровые турбины MAN для выработки энергии из отходов',
  id: 14,
  img: 'news/turbina.jpg',
  category: 'Наука и техника',
  created_at: '07.04.2019',
  updated_at: '08.04.2019:10.21',
  author: 'А.В. Хухарев',
  preview_text: 'Производство электроэнергии основанное на переработке отходов является классическим примером применения паровых турбин МАН',
  description: 'Отходы в энергию (WtE) - это переработка и преобразование отходов в электричество или тепло. На комплексах WtE цель состоит в том, чтобы генерировать энергию путем сжигания отходов.<br><br>Тепло, выделяемое в результате этого процесса обязательств, используется для производства электроэнергии, что приводит к дополнительной прибыли для оператора. Деятельность WtE в Европе значительно активизировалась после принятия в 2005 году Директивы ЕС, запрещающей захоронение неочищенных отходов.<br><br><b>Паровые турбины для WtE</b><br><br>В зависимости от требований заказчика, компания "Газовые машины» подберет паротурбинные генераторы «МАН Энерджи Солюшнс" для установок WtE. Объем поставки также может включать оборудование водо-парового цикла, такого как, отопительные конденсаторы, конденсаторы воздушного охлаждения, предпусковые подогреватели, обходные станции и соединительные трубы.<br><br><b>Классическое применение турбин МАН</b><br><br>Производство электроэнергии основанное на переработке отходов является классическим примером применения паровых турбин МАН. Недавно компания ONE Energy Solutions поставила самую большую паротурбинную генераторную установку для завода WtE в Великобритании мощностью 80 МВт.<br><br>'
}, {
  label: 'Газопоршневые электростанции Liebherr на страже энергетической эффективности.',
  id: 15,
  img: 'news/liebherr-gaz.jpg',
  category: 'Наука и техника',
  created_at: '15.04.2019',
  updated_at: '16.04.2019:15.44',
  author: 'А.В. Хухарев',
  preview_text: 'Газовые электростанции совместного производства Liebherr и Газовых машин используются в построении децентрализованных систем выработки тепловой и электроэнергии...',
  description: 'С увеличением численности населения стремительно растет мировой спрос на энергоносители. Вместе с тем увеличивается потребность в использовании возобновляемых энергоресурсов и экологически безопасных технологий. Перспективной видится идея выработки энергии там, где она фактически используется. Это позволит не только сократить потери при транспортировке, но и уменьшить затраты на инфраструктуру.<br><br>Компания Liebherr вносит свой вклад в развитие данного направления, создавая газовые электростанции для экологически безопасной выработки энергии на автономных блочных тепловых электростанциях и генераторных установках. Двигатель может работать на разных видах газа, обеспечивая эффективную утилизацию отходов — например, на биогазовых или очистных установках.<br><br>Газовые электростанции совместного производства Liebherr и Газовых машин используются в построении децентрализованных систем выработки тепловой и электроэнергии, и применяются в различных сферах деятельности:<br><br>⦁	Использование в жилищной сфере (многоквартирных домах, жилых постройках и т.п.)<br><br>⦁	Использование в сфере обслуживания и производства (отелях, ресторанах, крупных предприятиях, центрах электронной обработки данных и т.п.)<br><br>⦁	Использование в социальной сфере (вокзалы, бассейны, больницы)<br><br>⦁	Биогазовые установки<br><br>⦁	Очистные установки<br><br>⦁	Сельскохозяйственные предприятия<br><br>⦁	Насосные станции<br><br>Газовые электростанции Liebherr отличаются безотказной работой, высоким КПД и простотой установки. Для обеспечения этих преимуществ они поставляются полностью укомплектованными.<br><br><b>Высокая производительность благодаря оптимизированной системной интеграции</b><br><br>Механический КПД газовых двигателей Liebherr составляет более 43%. Это лучший показатель для двигателей данного класса мощности. Такой эффективности удалось достичь благодаря многолетнему опыту, интенсивным проектно-конструкторским работам, тщательному подбору компонентов и высокой степени системной интеграции аппаратного и программного обеспечения.<br><br>Модульные газовые электростанции Liebherr поставляются в собранном виде и сразу готовы к установке.<br><br><b>Оптимизированное оборудование</b><br><br>Все компоненты оборудования тщательно подобраны и оптимизированы для этих электростанций. Они проходят длительные испытания и строгую проверку качества. Систему можно без особых усилий и с высокой точностью откалибровать для конкретных условий использования.<br><br><b>Электронные компоненты</b><br><br>Наши газовые электростанции оснащены полностью автоматической системой управления, легко интегрируемой в общие системы управления предприятием. Программное обеспечение уже настроено должным образом<br><br><b>ПО и настройка параметров электростанции</b><br><br>В поставляемом программном обеспечении уже настроены все необходимые параметры. Тщательная проверка на соответствие и регулировка значений параметров позволяет обеспечить гарантированно высокую производительность двигателей Liebherr. Кроме того, существует достаточно возможностей выполнить точную настройку в условиях эксплуатации.<br><br>Производственная линейка газовых двигателей Liebherr охватывает широкий спектр моделей от 4-цилиндровых рядных двигателей до 20-цилиндровых V-образных двигателей. Помимо полностью оборудованных и готовых к установке комплектов, мы также поставляем базовые модели повышенной прочности, которые могут использоваться в биогазовых установках.<br><br>Мощностной ряд электростанции Liebherr составляет от 50 до  1 000 кВт.'
}, {
  label: 'Как выбрать электростанцию? Энергоснабжение обособленных и удаленных объектов.',
  id: 16,
  img: 'news/energy-choise.jpg',
  category: 'Наука и техника',
  created_at: '21.04.2019',
  updated_at: '22.04.2019:12.24',
  author: 'А.В. Хухарев',
  preview_text: 'Что выбрать: дизельная или газовая электростанция, работающая на сжиженном газе? Аспекты выбора электростанций.',
  description: '<b>Энергоснабжение обособленных и удаленных объектов, аспекты выбора, дизельная электростанция или газовая электростанция, работающая на сжиженном газе.</b><br><br>В настоящее время энергоснабжение многих небольших вахтовых поселков, строительных городков и т.п., производится от дизельных электростанций. В условиях роста цен на дизельное топливо электроснабжение таких объектов влетает в копеечку.<br><br>Например, максимальная потребность в электрической энергии городка на 500 человек (при условии применения электрического отопления) составляет порядка 1 300 кВт.час. При стоимости дизельного топлива 50 руб. за 1 литр, затраты на выработку 1 кВт.час. электрической энергии составят  11,5 руб. или 14 950 руб. в час. (без учета затрат на сервисное обслуживание оборудования). Кроме того, не секрет, что легкий доступ к дизельному топливу создает предпосылки для несанкционированной заправки транспортных средств за счет топлива, предназначенного для работы дизельной электростанции. В результате, на практике, затраты на выработку 1 кВт.часа электрической энергии дизельной электростанцией достигает 15 руб. После чего, многие руководители вахтовых поселков и городков, задумываются об альтернативных вариантах организации электроснабжения.<br><br>Наиболее надежным из них, является генерация с применением газопоршневой электростанции. При цене природного газа 6 руб. за 1 куб.м. себестоимость 1 кВт.час. электрической энергии при выработке электростанцией 500 кВт. составит 2,12 руб. (включая стоимость сервисного обслуживания и затраты на текущий и капитальный ремонты).<br><br><b>В разрезе месяца экономия от применения ГПУ на объекте с постоянным потреблением электроэнергии 500 кВт составит 4 636 800 руб. Срок окупаемости инвестиций в приобретение ГПУ составляет менее 1 года.</b><br><br>Положительный опыт применения ГПУ в качестве источника энергоснабжения получен нами совместно с компанией «СтройТрансГаз». Электроснабжение вахтового поселка Сывьдарьма уже более года осуществляется газовой электростанцией MAN 500 кВт производства компании «Газовые машины». До запуска газовой электростанции поселок обеспечивался электрической энергией от дизельных электростанций. Ежемесячные расходы на покупку дизельного топлива составляли 4,5 млн. рублей. После запуска газовой электростанции расходы на выработку электрической энергии были снижены до 650 тыс. руб. в месяц.<br><br>Вместе с тем, при проработке такого варианта, наши клиенты сталкиваются со следующими задачами. Зачастую объекты, требующие электроснабжения носят временный характер, и прокладка магистрального газопровода к ним экономически не оправдана. В таких условиях, возможно применение газопоршневых установок, работающие на пропан-бутановой смеси, которую можно доставлять на объект по мере необходимости. Здесь возникает следующий вопрос, большинство европейских производителей газопоршневых электростанций не согласовывает применение своего оборудования при работе на пропан-бутановой смеси. А опыт применения электростанций на базе ДВС российского или китайского производства, свидетельствует о крайне низкой надежности и нестабильной работе этого оборудования на пропан-бутановой смеси.<br><br>Для решения этой ситуации инженеры концерна «МАН» (Германия) совместно со специалистами компании «Газовые машины», разработали модульную газопоршневую электростанцию, адаптированную для работы на пропан-бутановой смеси. Газопоршневой двигатель, выпускается с завода в Германии, предварительно настроенный для работы на пропан-бутановой смеси. Программное обеспечение, разработанное специалистами компании «Газовые машины» позволяет электростанции работать стабильно и устойчиво, не зависимо от меняющегося состава топливной смеси, без ухода в режимы детонации.<br><br>В настоящее время для поставки доступны две модели модульных электростанций, мощностью 250 и 500 кВт. Модуля поставляются полной заводской готовности.'
}, {
  label: 'Используем аэрационный газ для газопоршневых установок',
  id: 17,
  img: 'news/utilizaciya.jpg',
  category: 'Наука и техника',
  created_at: '12.05.2019',
  updated_at: '13.05.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'Существует эффективный способ утилизации газа от очистных сооружений путем использования его в качестве топлива для когенерационных установок...',
  description: 'В процессе очистки сточных вод путем анаэробного брожения на очистных сооружения крупных городов вырабатывается в большом количестве аэрационный (канализационный) биогаз. При этом, в большинстве случаев он не используется и выбрасывается в атмосферу, загрязняя окружающую среду.<br><br>Вместе с тем, по своему составу этот газ пригоден для утилизации (содержание метана до 70 %), которая осуществляется в основном путем сжигания в котлах и использования тепла на нужды отопления. Но в летний период времени утилизация биогаза этим способом не востребована не в полном объеме, так как превышает потребности очистных сооружений в тепловой энергии.<br><br>Компания «Газовые машины» предлагает более эффективный способ утилизации газа от очистных сооружений путем использования его в качестве топлива для когенерационной установки, вырабатывающей электрическую и тепловую энергию.<br><br>Высокий КПД газопоршневой мини-тэц (до 90 %) позволяет эффективно использовать биогаз  от очистных сооружений и частично обеспечивать их работу даже при аварии централизованного электроснабжения. Тепло вырабатываемое от мини-тэс используется для поддержания рабочих процессов в метантенках.<br><br>Таким образом, применение когенерационной установки для утилизации биогаза от очистных сооружений позволяет решить следующие задачи:<br><br>⦁	снизить энергозатраты на очистку сточных вод;<br><br>⦁	снизить нагрузку на электрические сети в населенном пункте;<br><br>⦁	улучшить экологическую ситуацию в населенном пункте.<br><br>Компания «Газовые машины» предлагает к поставке модельный ряд модульных когенерационных установок, адаптированных для работы на биогазе от очистных сооружений, мощностью от 250 до 2 000 кВт, на базе двигателей MAN, Liebherr, Jenbacher.<br><br><b>Срок окупаемости инвестиций в биогазовую мини-тэц (с  учетом приобретения оборудования по подготовке топливного газа) составляет не более 5 лет.</b>'
}, {
  label: 'Новый газопоршневый двигатель MAN E3268. Электрическая эффективность 41,7%!',
  id: 18,
  img: 'news/MAN-E3268.jpg',
  category: 'Наука и техника',
  created_at: '15.07.2019',
  updated_at: '15.07.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'Новая модель двигателя E3268 LE242 разработана как усиленная 4-х тактная версия газового двигателя с 8 цилиндрами , расположенными в форме V-образной версии.',
  description: '40% электрической эффективности в деятельности природного газа-смешение природного газа с 250 мг оксида азота  с соблюдением  требований технических инструкций по качеству контроля воздуха только с катализатором окисления.<br><br><b>Концерн МАН будет презентовать  модель газового двигателя MAN E3268 мощностью 320kw на выставке EnergyDecentral.</b><br><br>На выставке EnergyDecentral 2018 Концерн МАН впервые будет представлен газовый двигатель MAN E3268 мощностью 320kw и частотой в 50 Гц. Двигатель MAN E3268 LE242 разработан на базе двигателя E3268 with 370 kW, который был представлен в 2013 г. и впоследствии доработан и протестирован. 8-ми цилиндровый двигатель является оптимизированным вариантом для работы на природном газе с коэффициентом сжатия в ε 12 : 1 и может быть также использован для биогаза с коэффициентом сжатия ε 13.6 : 1.<br><br>Использование отрегулированной версии тока (в сочетании тепла и энергии) может применяться,  начиная с промышленных и коммерческих областей  до  муниципальных и развлекательных секторов.<br><br><b>Новая модель двигателя E3268 LE242 разработана как усиленная 4-х тактная версия газового двигателя с 8 цилиндрами , расположенными в форме V-образной версии.<br><br>Благодаря цилиндрическому отверстию в 132мм и удару в 157 мм двигатель E3268 LE242 предлагает 17,2 л цилиндрическую способность.</b><br><br>Для достижения выходной мощности  в 320 Kw c частотой вращения 1500 мин -1  перезарядка была значительно оптимизирована. Это оказало полезное воздействие на электрическую эффективность, которая возрасла до 41.7 % для природного газа.<br><br>«Эта отличный механический показатель эффективности   позволяет достичь волшебного значения в 40 % преобразования энергетической эффективности. В некоторых странах это достигается тяжело из-за сокращения субсидий», говорит Гюнтер Зайбс, глава концерна MAN.<br><br>Двигатель E3268 LE242 мощностью 320 kw вытеснит двигатель E2848 LE322 предыдущей серии и cокращает мощностной разрыв  с 220 до 370 kw среди турбированных двигателей MAN. Испытанная система регистрации данных со стандартными сенсорами и кабелем дает дополнительную выгоду для покупателей. Через СAN монитор важные параметры такие как охлаждение, потребление масла и температура исходящих газов также как и уровень заряда и масляного давления обеспечивается системой контроля с минимальными усилиями.<br><br>Двигатель E3268 LE242 прекрасно оснащен под будущие требования по выбросам благодаря разработке варианта с уровнем оксида азота в 250 mg/Nm3 NOx (5% O2).<br><br>В тоже время выходная мощность в 320 kw двигателя MAN,оснащенная оксидным катализатором отвечает требованиями технических инструкций воздушного контроля качества (TA Luft)½<br><br>Для потребителей с частотой в 60 Гц двигатели MAN также предлагает эксплуатационный вариант двигателя E3268 LE242 для природного газ с частотой вращения 1800 мин-1<br><br>Этот двигатель имеет выходную мощность в 340 kw  и достигает механической степени эффективности в 40,3 % и термической эффективности в 48,2%, в сумме 88,5%.<br><br>Двигатель E3268 LE242 будет доступен начиная с первого квартала 2019 и представлен впервые на выставке EnergyDecentral - Международная выставка по инновациям в энергетической сфере в Ганновере.'
}, {
  label: 'Касательно применения двухопорных генераторов в газовых электростанциях MAN',
  id: 19,
  img: 'news/man-generator.png',
  category: 'Важно',
  created_at: '13.09.2019',
  updated_at: '13.09.2019:08.05',
  author: 'А.В. Хухарев',
  preview_text: 'По данному вопросу получен однозначный ответ от Руководителя инженерной поддержки продаж и сервисного обслуживания MAN Engines г-на Бенджамина Круга.',
  description: 'В связи с регулярно поступающими обращениями от наших Заказчиков, в отношении применения двухопорных синхронных генераторов в газовых электростанциях MAN сообщаем следующую информацию.<br><br>По данному вопросу получен однозначный ответ от Руководителя инженерной поддержки продаж и сервисного обслуживания MAN Engines г-на Бенджамина Круга.<br><br>В своем письме Б. Круг допускает применение как однопоорных, так и двухопорных генераторов в газопоршневых электростанциях  MAN, без каких либо ограничений по ресурсу двигателя и генератора.<br><br>При этом, для сохранения гарантии на двигатель MAN производитель электростанции должен соблюдать следующие условия:<br><br>- при применении одноопорного генератора вес его ротора не должен превышать 630 кг и момент инерции 11 кг. (что позволяет применять без ограничения синхронные генераторы мощностью до 530 кВт);<br><br>- при применении двухопорного генератора, производитель должен произвести расчет размеров муфты, а также выполнить расчет крутильных колебаний и согласовать все эти расчеты с компанией MAN.'
}, {
  label: 'Приглашаем всех на выставку Heat&Power 2019.',
  id: 20,
  img: 'news/expo.jpg',
  category: 'Наука и техника',
  created_at: '16.09.2019',
  updated_at: '16.09.2019:06.31',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» приглашает всех заинтересованных во внедрении объектов автономной энергетики, а также организации, эксплуатирующие объекты распределенной малой генерации, посетить наш стенд.',
  description: 'Компания «Газовые машины» приглашает всех заинтересованных во внедрении объектов автономной энергетики, а также организации эксплуатирующие объекты распределенной малой генерации посетить наш стенд C 201 в период с 22 по 24 октября в «Крокус-Экспо» (Москва) в рамках 4-ой международной выставки промышленного котельного, теплообменного, электрогенерирующего оборудования и трубопроводных систем для тепловых сетей «Heat&Power 2019».<br><br>В ходе выставки Вы можете получить бесплатную консультацию специалистов нашей компании по вопросам, связанным с оценкой вариантов создания на Вашем объекте, автономного источника энергии. Подготовить предпроектные решения для Вашего объекта. Подобрать оптимальное энергетическое оборудование. Получить информацию о актуальных ценах на оборудование для собственной генерации. Договорится о поставке материалов и запасных частей для сервисного обслуживания энергетического оборудования.<br><br>Также на выставке Вы сможете задать свои вопросы непосредственно техническим руководителям концерна MAN, отвечающим за производство промышленных газовых двигателей.<br><br><b>Ждем Вас на выставке!</b>'
}, {
  label: 'Газовые машины – сервисный партнер «Карл Дунгс»',
  id: 21,
  img: 'news/dungs.jpg',
  category: 'Наука и техника',
  created_at: '07.10.2019',
  updated_at: '07.10.2019:10.45',
  author: 'А.В. Хухарев',
  preview_text: 'Компания «Газовые машины» получила статус официального сервисного партнера известной немецкой компании – производителя газорегулирующего оборудования «Карл Дунгс» (Урбах, Германия).',
  description: 'Компания «Газовые машины» получила статус официального сервисного партнера известной немецкой компании – производителя газорегулирующего оборудования «Карл Дунгс» (Урбах, Германия).<br><br>Компания «Карл Дунгс» основана в 1945 г., численность сотрудников 670 человек, годовой оборот компании 129 млн. Евро.<br><br>«Карл Дунгс» является заводом-изготовителем атмосферных и вентиляторных теплогенераторов, конденсационных установок, паяльных горелок, газорегулирующего оборудования газовых двигателей и промышленных тепловых топочных установок.<br><br>«Газовые машины» и «Карл Дунгс» сотрудничают с 2012 г. В текущем году статус сотрудничества обновлен. Это дает нашим клиентам ряд дополнительных преимуществ, таких как:<br><br><ul><li>расширение линейки оборудования «Карл Дунгс» на нашем складе;</li><li>оперативный доступ к складу сервисных запасных частей;</li><li>оперативное сервисное обслуживание оборудования «Карл Дунгс»;</li><li>услуги по модернизации газорегулирующего оборудования на действующих объектах;</li></ul>   <br><br>По вопросам связанным, с оборудованием «Карл Дунгс» Вы можете обращаться в наш отдел продаж по тел.: <b>+7 (4852) 26–79–60.</b>'
}, {
  label: 'Электроэнергия для сельского хозяйства',
  id: 22,
  img: 'news/village.png',
  category: 'Наука и техника',
  created_at: '05.03.2020',
  updated_at: '16.03.2020:10.45',
  author: 'А.В. Хухарев',
  preview_text: 'Модульная газовая мини-ТЭЦ мощностью 260 кВт обеспечивает электрической энергией и теплом животноводческий комплекс на 2 000 голов крупного рогатого скота.',
  description: 'Компания «Газовые машины», при партнерстве с Региональной лизинговой компанией Ярославской области запустила газовую мини-ТЭЦ на животноводческом комплексе сельхозпредприятия «Красный Маяк» (д. Марково, Ярославской области). Сотрудничество с региональной лизинговой компанией Ярославской области позволяет нашим клиентам приобретать оборудование в лизинг по рекордно низким ставкам от 6,5 % годовых.<br><br>Модульная газовая мини-ТЭЦ мощностью 260 кВт обеспечивает электрической энергией и теплом животноводческий комплекс на 2 000 голов крупного рогатого скота.<br><br>Линейка премиальных Мини-ТЭЦ базе индустриальных газовых двигателей MAN разработана компанией «Газовые машины» в 2012 г. Все мини-ТЭЦ выпускаются в унифицированных заводских модулях полной готовности, что обеспечивает быстрый запуск в эксплуатацию в течении 2-3 дней с даты поставки оборудования на объект<br><br>В настоящее время компания «Газовые машины» предлагает услуги по внедрению автономных энергокомплексов на природном газе мощностью до 24 МВт на условиях «под ключ». На нашем производстве в г. Ярославле Вы можете ознакомиться с образцами продукции в удобное для Вас время. При посещении вы также можете получить квалифицированные консультации специалистов по проектированию и эксплуатации газовых мини-ТЭЦ. Ждем Вас.'
}].map(function (link) {
  link.key = "nav-link-".concat(link.id, "-").concat(link.id);
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (newsList);

/***/ }),

/***/ "./components/tables/productsList.js":
/*!*******************************************!*\
  !*** ./components/tables/productsList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var productsList = [{
  category: 'MTU',
  products: [{
    label: 'MTU 700',
    price: '',
    category: 'MTU',
    id: 24,
    img: 'mtu700.jpg',
    galery: ['mtu700.jpg', 'mtu700.jpg', 'mtu700.jpg', 'mtu700.jpg'],
    as: '/mtu-700',
    motorMark: 'MTU 8V4000 GS L32',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 776,
    thermalPower: '886',
    electricEfficiency: '41,9',
    thermalEfficiency: '46,7',
    overallEfficiency: '88,6',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '175',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.',
    descriptionThree: 'Области использования: буровые платформы и скважины, шахты, очистные сооружения, в качестве резервного, вспомогательного или основного источника электроэнергии на предприятиях, в строительстве, административных и медицинских учреждениях, аэропортах, гостиницах, узлах связи, системах жизнеобеспечения и т. п. в автономном режиме или совместно с централизованными системами электроснабжения и тепла.\nПо сравнению с микротурбинами у газопоршневых электростанций высокие показатели КПД, отсутствие влияние на КПД температуры окружающего воздуха, меньшее потребление газа по сравнении с микротурбинами, соответственно меньше выхлопа в окружающую среду. Стоимость газопоршневой электростанции обходится более чем в 2 раза дешевле чем у микротурбин.'
  }, {
    label: 'MTU 800',
    price: '',
    category: 'MTU',
    id: 25,
    img: 'mtu800.jpg',
    galery: ['mtu800.jpg', 'mtu800.jpg', 'mtu800.jpg', 'mtu800.jpg'],
    as: '/mtu-800',
    motorMark: 'MTU 8V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 854,
    thermalPower: '891',
    electricEfficiency: '42,8',
    thermalEfficiency: '44,8',
    overallEfficiency: '87,6',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '199',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.',
    descriptionThree: 'Области использования: буровые платформы и скважины, шахты, очистные сооружения, в качестве резервного, вспомогательного или основного источника электроэнергии на предприятиях, в строительстве, административных и медицинских учреждениях, аэропортах, гостиницах, узлах связи, системах жизнеобеспечения и т. п. в автономном режиме или совместно с централизованными системами электроснабжения и тепла.\nПо сравнению с микротурбинами у газопоршневых электростанций высокие показатели КПД, отсутствие влияние на КПД температуры окружающего воздуха, меньшее потребление газа по сравнении с микротурбинами, соответственно меньше выхлопа в окружающую среду. Стоимость газопоршневой электростанции обходится более чем в 2 раза дешевле чем у микротурбин.'
  }, {
    label: 'MTU 1000',
    price: '',
    category: 'MTU',
    id: 26,
    img: 'mtu1000.jpg',
    galery: ['mtu1000.jpg', 'mtu1000.jpg', 'mtu1000.jpg', 'mtu1000.jpg'],
    as: '/mtu-1000',
    motorMark: 'MTU 8V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 1013,
    thermalPower: '969',
    electricEfficiency: '43,4',
    thermalEfficiency: '42,6',
    overallEfficiency: '86',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '273',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1100',
    price: '',
    category: 'MTU',
    id: 27,
    img: 'mtu1100.jpg',
    galery: ['mtu1100.jpg', 'mtu1100.jpg', 'mtu1100.jpg', 'mtu1100.jpg'],
    as: '/mtu-1100',
    motorMark: 'MTU 12V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1169,
    thermalPower: '1228',
    electricEfficiency: '42,8',
    thermalEfficiency: '45,0',
    overallEfficiency: '87,8',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '273',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1200',
    price: '',
    category: 'MTU',
    id: 28,
    img: 'mtu1200.jpg',
    galery: ['mtu1200.jpg', 'mtu1200.jpg', 'mtu1200.jpg', 'mtu1200.jpg'],
    as: '/mtu-1200',
    motorMark: 'MTU 12V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1286,
    thermalPower: '1323',
    electricEfficiency: '43,2',
    thermalEfficiency: '44,5',
    overallEfficiency: '87,7',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '298',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1500',
    price: '',
    category: 'MTU',
    id: 29,
    img: 'mtu1500.jpg',
    galery: ['mtu1500.jpg', 'mtu1500.jpg', 'mtu1500.jpg', 'mtu1500.jpg'],
    as: '/mtu-1500',
    motorMark: 'MTU 12V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1521,
    thermalPower: '1403',
    electricEfficiency: '44,3',
    thermalEfficiency: '40,8',
    overallEfficiency: '85,1',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '344',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1600',
    price: '',
    category: 'MTU',
    id: 30,
    img: 'mtu1600.jpg',
    galery: ['mtu1600.jpg', 'mtu1600.jpg', 'mtu1600.jpg', 'mtu1600.jpg'],
    as: '/mtu-1600',
    motorMark: 'MTU 16V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1560,
    thermalPower: '1662',
    electricEfficiency: '42,8',
    thermalEfficiency: '45,6',
    overallEfficiency: '88,4',
    fuelType: 'Природный газ ГОСТ 5542-87',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '365',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 1700',
    price: '',
    category: 'MTU',
    id: 31,
    img: 'mtu1700.jpg',
    galery: ['mtu1700.jpg', 'mtu1700.jpg', 'mtu1700.jpg', 'mtu1700.jpg'],
    as: '/mtu-1700',
    motorMark: 'MTU 16V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 1718,
    thermalPower: '1795',
    electricEfficiency: '43',
    thermalEfficiency: '45',
    overallEfficiency: '88',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '399',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 2000',
    price: '',
    category: 'MTU',
    id: 32,
    img: 'mtu2000.jpg',
    galery: ['mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg'],
    as: '/mtu-2000',
    motorMark: 'MTU 16V4000 GS L64',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 2028,
    thermalPower: '1901',
    electricEfficiency: '44,3',
    thermalEfficiency: '41,6',
    overallEfficiency: '85,9',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '457',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MTU 2145',
    price: '',
    category: 'MTU',
    id: 33,
    img: 'mtu2000.jpg',
    galery: ['mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg', 'mtu2000.jpg'],
    as: '/mtu-2000',
    motorMark: 'MTU 20V4000 GS L33',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6300, 10500',
    electricPower: 2145,
    thermalPower: '2239',
    electricEfficiency: '43',
    thermalEfficiency: '44,9',
    overallEfficiency: '87,9',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '',
    nominalGazConsumption: '499',
    noiseLevel: '80',
    serviceInterval: '2000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'MAN',
  products: [{
    label: 'MAN 200',
    price: '9 000 000',
    category: 'MAN',
    id: 0,
    img: 'MAN200.jpg',
    galery: ['MAN200.jpg', 'MAN200.jpg', 'MAN200.jpg', 'MAN200.jpg'],
    as: '/man-200',
    motorMark: 'MAN E 3262 E 302',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1',
    voltage: '400',
    electricPower: 200,
    thermalPower: '316',
    electricEfficiency: '36,7',
    thermalEfficiency: '56,3',
    overallEfficiency: '93',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '59.6',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 250',
    price: '9 500 000',
    category: 'MAN',
    id: 1,
    img: 'MAN250.jpg',
    galery: ['MAN250.jpg', 'MAN250.jpg', 'MAN250.jpg', 'MAN250.jpg'],
    as: '/man-250',
    motorMark: 'MAN E 3262 E 302',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1',
    voltage: '400',
    electricPower: 250,
    thermalPower: '380',
    electricEfficiency: '38',
    thermalEfficiency: '54,8',
    overallEfficiency: '92,8',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '67',
    noiseLevel: '80',
    serviceInterval: '1 500 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 300',
    price: '11 600 000',
    category: 'MAN',
    id: 2,
    img: 'MAN300.jpg',
    galery: ['MAN300.jpg', 'MAN300.jpg', 'MAN300.jpg', 'MAN300.jpg'],
    as: '/man-300',
    motorMark: 'MAN E 3268 LE 242',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,7',
    voltage: '400',
    electricPower: 300,
    thermalPower: '350',
    electricEfficiency: '41,7',
    thermalEfficiency: '47,5',
    overallEfficiency: '89,2',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '78',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 350',
    price: '12 000 000',
    category: 'MAN',
    id: 3,
    img: 'MAN350.jpg',
    galery: ['MAN350.jpg', 'MAN350.jpg', 'MAN350.jpg', 'MAN350.jpg'],
    as: '/man-350',
    motorMark: 'MAN E 3268 LE 202',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,69',
    voltage: '400',
    electricPower: 350,
    thermalPower: '445',
    electricEfficiency: '40,2',
    thermalEfficiency: '50,1',
    overallEfficiency: '90,3',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '91',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 430',
    price: '',
    category: 'MAN',
    id: 4,
    img: 'MAN500.jpg',
    galery: ['MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg'],
    as: '/man-430',
    motorMark: 'MAN E3262 LE232',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,6',
    voltage: '400',
    electricPower: 430,
    thermalPower: '505',
    electricEfficiency: '39,7',
    thermalEfficiency: '50,6',
    overallEfficiency: '90,3',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '107',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'MAN 530',
    price: '',
    category: 'MAN',
    id: 5,
    img: 'MAN500.jpg',
    galery: ['MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg', 'MAN500.jpg'],
    as: '/man-500',
    motorMark: 'MAN E3262 LE 202',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,63',
    voltage: '400, 6 300, 10 500',
    electricPower: 500,
    thermalPower: '652',
    electricEfficiency: '40,6',
    thermalEfficiency: '49,8',
    overallEfficiency: '90,4',
    fuelType: 'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '135',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'LIEBHERR',
  products: [{
    label: 'LIEBHERR 230',
    price: '',
    category: 'LIEBHERR',
    id: 10,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-230',
    motorMark: 'Liebherr G946',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,74',
    voltage: '400',
    electricPower: 230,
    thermalPower: '262',
    electricEfficiency: '41,5',
    thermalEfficiency: '44,2',
    overallEfficiency: '85,7',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '59.2',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 300',
    price: '',
    category: 'LIEBHERR',
    id: 11,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-300',
    motorMark: 'Liebherr G9508',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1,7',
    voltage: '400',
    electricPower: 300,
    thermalPower: '340',
    electricEfficiency: '40',
    thermalEfficiency: '42',
    overallEfficiency: '82',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '78',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 500',
    price: '',
    category: 'LIEBHERR',
    id: 12,
    img: 'liebherr-230.jpg',
    galery: ['liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg', 'liebherr-230.jpg'],
    as: '/LIEBHERR-500',
    motorMark: 'Liebherr G9512',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.7',
    voltage: '400, 6 300, 10 500',
    electricPower: 500,
    thermalPower: '652',
    electricEfficiency: '40,6',
    thermalEfficiency: '49,8',
    overallEfficiency: '90,4',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '135',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'LIEBHERR 1000',
    price: '',
    category: 'LIEBHERR',
    id: 13,
    img: 'liebherr-1000.jpg',
    galery: ['liebherr-1000-1.jpg', 'liebherr-1000-2.jpg', 'liebherr-1000-1.jpg', 'liebherr-1000-2.jpg'],
    as: '/LIEBHERR-1000',
    motorMark: 'Liebherr G9620',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.7',
    voltage: '400, 6 300, 10 500',
    electricPower: 1000,
    thermalPower: '1 100',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '20-200',
    nominalGazConsumption: '265',
    noiseLevel: '80',
    serviceInterval: '1 000 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'YAMZ',
  products: [{
    label: 'ЯМЗ 100',
    price: '3 500 000',
    category: 'YAMZ',
    id: 20,
    img: 'YAMZ100.jpg',
    galery: ['YAMZ100.jpg', 'yamz-100-1.jpg', 'YAMZ100.jpg', 'yamz-100-1.jpg'],
    as: '/yamz-100',
    motorMark: 'ЯМЗ 536 CNG',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 100,
    thermalPower: '100',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '31.9',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 140',
    price: '4 000 000',
    category: 'YAMZ',
    id: 21,
    img: 'YAMZ140.jpg',
    galery: ['YAMZ140.jpg', 'YAMZ140.jpg', 'YAMZ140.jpg', 'YAMZ140.jpg'],
    as: '/yamz-140',
    motorMark: 'ЯМЗ 536 CNG',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 140,
    thermalPower: '190',
    electricEfficiency: '44',
    thermalEfficiency: '43,5',
    overallEfficiency: '87,5',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '40',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 200',
    price: '4 500 000',
    category: 'YAMZ',
    id: 22,
    img: 'YAMZ200.jpg',
    galery: ['YAMZ200.jpg', 'YAMZ200.jpg', 'YAMZ200.jpg', 'YAMZ200.jpg'],
    as: '/yamz-200',
    motorMark: 'ТМЗ 8425',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 200,
    thermalPower: '280',
    electricEfficiency: '29',
    thermalEfficiency: '40,6',
    overallEfficiency: '69,6',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '66',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'ЯМЗ 300',
    price: '',
    category: 'YAMZ',
    id: 23,
    img: 'YAMZ300.jpg',
    galery: ['YAMZ300.jpg', 'YAMZ300.jpg', 'YAMZ300.jpg', 'YAMZ300.jpg'],
    as: '/yamz-300',
    motorMark: 'ЯМЗ 850.10',
    gasMixer: 'Motortech VariFuel2',
    controlBlock: 'Motortech VariStep3',
    ignitionSystem: 'Motortech MIC4',
    throttleValve: 'Motortech ITB',
    excessAirRatio: '1.6',
    voltage: '400',
    electricPower: 280,
    thermalPower: '450',
    electricEfficiency: '30',
    thermalEfficiency: '47',
    overallEfficiency: '77',
    fuelType: 'Природный газ',
    methaneNumber: 'Более 80',
    gasPressure: '0,05',
    nominalGazConsumption: '90',
    noiseLevel: '80',
    serviceInterval: '800 моточасов',
    totalPowerPlant: 'Не менее 15 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: 'Karl Dungs',
    freezGroup: 'Alfa Laval',
    nasos: 'Grundfos',
    powerSup: 'ABB',
    controlSystem: 'Motortech AIO',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}, {
  category: 'JENBACHER',
  products: [{
    label: 'JENBACHER 630',
    price: '',
    category: 'JENBACHER',
    id: 40,
    img: 'jenbacher-630.jpg',
    galery: ['jenbacher630.jpg', 'jenbacher630.jpg', 'jenbacher630.jpg', 'jenbacher630.jpg'],
    as: '/jenbacher-630',
    motorMark: 'GE JENBACHER J312 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400',
    electricPower: 635,
    thermalPower: '739',
    electricEfficiency: '40.8',
    thermalEfficiency: '47.4',
    overallEfficiency: '88.2',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '2-4',
    nominalGazConsumption: '164',
    oilconsumption: '0.2',
    airconsumption: '3279',
    noiseLevel: '123',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 1000',
    price: '',
    category: 'JENBACHER',
    id: 41,
    img: 'jenbacher-1000.jpg',
    galery: ['jenbacher-1000.jpg', 'jenbacher-1000.jpg', 'jenbacher-1000.jpg', 'jenbacher-1000.jpg'],
    as: '/jenbacher-1000',
    motorMark: 'GE JENBACHER J320 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 1067,
    thermalPower: '1241',
    electricEfficiency: '40.9',
    thermalEfficiency: '47.6',
    overallEfficiency: '88.5',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '2-4',
    nominalGazConsumption: '274',
    oilconsumption: '0.33',
    airconsumption: '5 485',
    noiseLevel: '130',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 1500',
    price: '',
    category: 'JENBACHER',
    id: 42,
    img: 'jenbacher-1500.jpg',
    galery: ['jenbacher-1500.jpg', 'jenbacher-1500.jpg', 'jenbacher-1500.jpg', 'jenbacher-1500.jpg'],
    as: '/jenbacher-1500',
    motorMark: 'GE JENBACHER J420 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 1497,
    thermalPower: '1546',
    electricEfficiency: '43.3',
    thermalEfficiency: '44.7',
    overallEfficiency: '88.0',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '0,12-0,2',
    nominalGazConsumption: '364',
    oilconsumption: '0.31',
    airconsumption: '7 831',
    noiseLevel: '123',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 2000',
    price: '',
    category: 'JENBACHER',
    id: 43,
    img: 'jenbacher-2000.jpg',
    galery: ['jenbacher-2000.jpg', 'jenbacher-2000.jpg', 'jenbacher-2000.jpg', 'jenbacher-2000.jpg'],
    as: '/jenbacher-2000',
    motorMark: 'GE JENBACHER J612 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 2004,
    thermalPower: '1 883',
    electricEfficiency: '45.5',
    thermalEfficiency: '42.8',
    overallEfficiency: '88.3',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '4-8',
    nominalGazConsumption: '464',
    oilconsumption: '0.41',
    airconsumption: '10 906',
    noiseLevel: '80',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'Leroy Somer, Stamford',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }, {
    label: 'JENBACHER 4000',
    price: '',
    category: 'JENBACHER',
    id: 44,
    img: 'jenbacher-4000.jpg',
    galery: ['jenbacher-4000.jpg', 'jenbacher-4000.jpg', 'jenbacher-4000.jpg', 'jenbacher-4000.jpg'],
    as: '/jenbacher-4000',
    motorMark: 'GE JENBACHER J624 GS',
    gasMixer: '',
    controlBlock: '',
    ignitionSystem: '',
    throttleValve: '',
    excessAirRatio: '',
    voltage: '400, 6 300, 10 500',
    electricPower: 4404,
    thermalPower: '4 050 ',
    electricEfficiency: '46.6',
    thermalEfficiency: '42.9',
    overallEfficiency: '89.5',
    fuelType: 'Природный газ',
    methaneNumber: '80',
    gasPressure: '6-8',
    nominalGazConsumption: '994',
    oilconsumption: '0.9',
    airconsumption: '994',
    noiseLevel: '131',
    serviceInterval: '',
    totalPowerPlant: 'Не менее 20 лет',
    generator: 'TDPS',
    gazLline: '',
    freezGroup: 'Alfa Laval',
    nasos: '',
    powerSup: 'ABB',
    controlSystem: 'DIA.NE',
    descriptionOne: 'Газопоршневая электростанция предназначена для комбинированной автономной выработки электрической и тепловой энергии в островном режиме работы либо в режиме синхронизации с электрическими сетями.',
    descriptionTwo: 'Электростанция предназначена для круглосуточной непрерывной эксплуатации на номинальной нагрузке. В качестве привода генератора применяется газопоршневой двигатель с внешним смесеобразованием и искровым зажиганием горючей смеси в камере сгорания, использующий в качестве топлива газ и работающий по циклу Отто. В качестве топлива используются различные виды газа: природный, газы с низкой теплотворной способностью, невысоким содержанием метана и низкой степенью детонации или газы с высокой теплотворной способностью - факельный, пропан, бутан.'
  }]
}].map(function (link) {
  link.key = "nav-link-".concat(link.id, "-").concat(link.electricPower);
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (productsList);

/***/ }),

/***/ "./components/tables/projectList.js":
/*!******************************************!*\
  !*** ./components/tables/projectList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var projectList = [{
  label: "«Энергоцентр ЯМЗ»",
  id: 0,
  img: "project-avtodisel.jpg",
  galery: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg"],
  as: "/yamz",
  energy: "1500 кВт",
  tenergy: "1825 кВт",
  "class": "Энергоцентр",
  city: "Ярославль",
  client: "ЕвросибЭнерго",
  year: "2018",
  description: "Электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производства средних рядных двигателей ЯМЗ электрической и тепловой энергией в режиме паралелльной работы с электрическими сетями. Электрическая энергия передается на объект с напряжением 10,5 кВ. Проект реализован «под ключ». Нашими специалистами выполнены предпроектные работы, инженерные изыскания, строительно-монтажные работы, производство генерирующего оборудования, пуско-наладочные работы, сдача объекта в эксплуатацию. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Невская ратуша",
  id: 1,
  img: "project-nevskaya.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/nevskaya-ratusha",
  energy: "1200 кВт",
  tenergy: "",
  "class": "Энергоцентр",
  city: "Санкт-Петербург",
  client: "Банк «ВТБ»",
  year: "2016",
  description: "Надежность электроснабжения комплекса обеспечивается четырьмя газовыми электростанциями производства компании «Газовые машины» суммарной мощностью 1 200 кВт. Электростанции, на базе газовых двигателей Doosan DDP 222 в капотированном исполнении, размещены на крыше административного корпуса и в полном объеме резервируют электроснабжение комплекса зданий на случай отказа централизованной системы электроснабжения."
}, {
  label: "Кирпичный завод",
  id: 2,
  img: "project-smolensk.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/cmolenskiy-kirpichniy-zavod",
  energy: "500 кВт",
  tenergy: "650 кВт",
  "class": "Энергоцентр",
  city: "Смоленск",
  client: "Смоленский кирпичный завод",
  year: "2017",
  description: "Первый проект с газовым двигателем Liebherr G 9512 на территории РФ. Электростанция на базе двигателя Liebherr G 9512  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнен проект энергоцентра, производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Аккус Актобе",
  id: 3,
  img: "project-akkus.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/akkus-aktobe",
  energy: "840 кВт",
  tenergy: "",
  "class": "Энергоцентр",
  city: "Актобэ, Казахстан",
  client: "Птицефабрика «Аккус»",
  year: "2015",
  description: "Электростанции на базе двигателей MAN E 2842  предназначены для обеспечения птицефабрики электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы."
}, {
  label: "Ледовая арена",
  id: 4,
  img: "project-arena.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/ledovaya-arena",
  energy: "240 кВт",
  tenergy: "360 кВт",
  "class": "Энергоцентр",
  city: "Казань",
  client: "Ледовый дворец «Пестрецы-Арена»",
  year: "2014",
  description: "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения спортивного объекта электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "Фос-Агро",
  id: 5,
  img: "project-fosagro.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/fos-agro",
  energy: "800 кВт",
  tenergy: "",
  "class": "Энергоцентр",
  city: "Череповец",
  client: "Производственная компания",
  year: "2013",
  description: "Три электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производственного корпуса на территории комбината «Фос-Агро» электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство трех энергоблоков, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, // {
//   label: "Водоканал",
//   id: 2,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/vodokanal",
//   energy: "1500 кВт",
//   tenergy: "",
//   class: "Энергоцентр",
//   city: "Череповец",
//   client: "МУП «Водоканал» Череповец",
//   year: "2018",
//   description:
//     "Пять электростанций на базе двигателей ЯМЗ  предназначены для обеспечения работы объектов инфраструктуры (очистные сооружения, насосные станции) МУП «Водоканал» Череповец электрической энергией. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// },
// {
//   label: "Артак Обувь",
//   id: 4,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/artak-obuv",
//   energy: "400 кВт",
//   tenergy: "460 кВт",
//   class: "Энергоцентр",
//   city: "Кострома",
//   client: "ООО «Артак обувь»",
//   year: "2017",
//   description:
//     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// },
{
  label: "Животноводческий комплекс",
  id: 6,
  img: "project-agro.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/mersi-agro",
  energy: "2000 кВт",
  tenergy: "2600 кВт",
  "class": "Энергоцентр",
  city: "Таранай, Сахалин",
  client: "Мерси-Агро",
  year: "2017",
  description: "Первый проект на территории РФ с применением газовых двигателей MAN E 3262. Электростанции на базе двигателей MAN E3262  предназначены для обеспечения комплексов репродукции и откорма  электрической и тепловой энергией в островном режиме. Резервирование электроснабжения осуществляется с применением дизельных электростанций. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
}, {
  label: "СтройГазМонтаж",
  id: 7,
  img: "project-sgm.jpg",
  galery: ["project-locked.jpg", "project-locked.jpg", "project-locked.jpg", "project-locked.jpg"],
  as: "/stroy-gaz-montazh",
  energy: "500 кВт",
  tenergy: "",
  "class": "Энергоцентр",
  city: "Новый Уренгой",
  client: "«СтройГазМонтаж»",
  year: "2017",
  description: "Электростанция на базе двигателя MAN E3262 предназначена для обеспечения вахтового жилого поселка электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
} // ,
// {
//   label: "Ростов-арена",
//   id: 10,
//   img: "project-locked.jpg",
//   galery: [
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg",
//     "project-locked.jpg"
//   ],
//   as: "/rostov-arena",
//   energy: "240 кВт",
//   tenergy: "112 кВт",
//   class: "Энергоцентр",
//   city: "Ростов-на-Дону",
//   client: "«Ростов-арена»",
//   year: "2014",
//   description:
//     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения  объекта чемпионата мира по футболу 2018 электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
// }
].map(function (link) {
  link.key = "nav-link-".concat(link.id, "-").concat(link.label);
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (projectList);

/***/ }),

/***/ "./components/tables/serviceList.js":
/*!******************************************!*\
  !*** ./components/tables/serviceList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var serviceList = [{
  label: 'Поставка вспомогательного оборудования',
  title: 'Оборудование для газовых электростанций',
  imgDetail: '/images/servises-detail/oborud.jpg',
  text: 'Оборудование для газопоршневых и дизельных установок от лучших европейских производителей.',
  img: '/images/service-image-1.jpg',
  href: '/postavka-vspomogatelnogo-oborudovaniya',
  as: 'postavka-vspomogatelnogo-oborudovaniya'
}, {
  label: 'Проектирование автономных энергоцентров',
  title: 'Работы по проектированию автономных энергоцентров',
  imgDetail: '/images/servises-detail/proekt.jpg',
  text: 'Полный спектр работ по подготовке разрешительной и эксплуатационной документации.',
  img: '/images/service-image-2.jpg',
  href: '/proektirovanie-avtonomnih-energocentrov',
  as: 'proektirovanie-avtonomnih-energocentrov'
}, {
  label: 'Изготовление и поставка мини-ТЭС',
  title: 'Изготовление газовых электростанций под технические условия заказчика',
  imgDetail: '/images/servises-detail/izgotov.jpg',
  text: 'Изготовление и поставка газопоршневых электростанций единичной мощностью от 250 до 2000 кВт.',
  img: '/images/service-image-3.jpg',
  href: '/izgotovlenie-i-postavka-mini-tec',
  as: 'izgotovlenie-i-postavka-mini-tec'
}, {
  label: 'Расчёт экономической эффективности',
  title: 'Расчёт экономической эффективности при переходе на оборудование собственной генерации.',
  imgDetail: '/images/servises-detail/raschet.jpg',
  text: 'А так же срока окупаемости мини-электростанций для каждого конкретного объекта.',
  img: '/images/service-image-4.jpg',
  href: '/racshet-ekonomicheskoi-effektivnosti',
  as: 'racshet-ekonomicheskoi-effektivnosti'
}, {
  label: 'Подбор оптимальных агрегатов',
  title: 'Помощ при подборе оптимальных комплектующих при проектировании или замене износившихся агрегатов.',
  imgDetail: '/images/servises-detail/help.jpg',
  text: 'для мини-электростанций из имеющегося у нас модельного ряда для их наиболее эффективного использования.',
  img: '/images/service-image-5.jpg',
  href: '/podbor-optimalnih-agregatov',
  as: 'podbor-optimalnih-agregatov'
}, {
  label: 'Поставка запасных частей',
  title: 'Поставки оборудования для ремонта и обслуживания газовых электростанций',
  imgDetail: '/images/servises-detail/zapchasti.jpg',
  text: 'Весь необходимый спектр качественных запасных частей и расходных материалов.',
  img: '/images/service-image-6.jpg',
  href: '/postavka-zapasnih-chastei',
  as: 'postavka-zapasnih-chastei',
  doc: 'motortech-catalog.pdf',
  docname: 'Каталог продукции Motortech (11Мб)'
}, {
  label: 'Работы пуско-наладочные',
  title: 'Настройка и ввод в эксплуатацию газопоршневых электростанций',
  imgDetail: '/images/servises-detail/nastroika.jpg',
  text: 'Работы по пуско-наладке газопоршневых и дизельных установок.',
  img: '/images/service-image-7.jpg',
  href: '/pusko-naladochnie-raboti',
  as: 'pusko-naladochnie-raboti'
}, {
  label: 'Шеф-монтаж',
  h1: 'Техническое сопровождение монтажа газопоршневых и дизельных установок',
  imgDetail: '/images/servises-detail/montaj.jpg',
  text: 'Проверка качества монтажа и сборки энергоустановки',
  img: '/images/service-image-8.jpg',
  href: '/chef-montazh',
  as: 'chef-montazh'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (serviceList);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct&absolutePagePath=G%3A%5COSPanel%5Cdomains%5Cgmnext9%5Cpages%5Cproduct.js!./":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct&absolutePagePath=G%3A%5COSPanel%5Cdomains%5Cgmnext9%5Cpages%5Cproduct.js ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/product", function() {
      var mod = __webpack_require__(/*! ./pages/product.js */ "./pages/product.js")
      if(true) {
        module.hot.accept(/*! ./pages/product.js */ "./pages/product.js", function() {
          if(!next.router.components["/product"]) return
          var updatedPage = __webpack_require__(/*! ./pages/product.js */ "./pages/product.js")
          next.router.update("/product", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-image-lightbox/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/react-image-lightbox/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Placeholder for future translate functionality
 */
function translate(str) {
  var replaceStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!str) {
    return '';
  }

  var translated = str;

  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(function (placeholder) {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}
function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}
function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
} // Get the highest window context that isn't cross-origin
// (When in an iframe)

function getHighestSafeWindowContext() {
  var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global.window.self;
  var referrer = self.document.referrer; // If we reached the top level, return self

  if (self === global.window.top || !referrer) {
    return self;
  }

  var getOrigin = function getOrigin(href) {
    return href.match(/(.*\/\/.*?)(\/|$)/)[1];
  }; // If parent is the same origin, we can move up one context
  // Reference: https://stackoverflow.com/a/21965342/1601953


  if (getOrigin(self.location.href) === getOrigin(referrer)) {
    return getHighestSafeWindowContext(self.parent);
  } // If a different origin, we consider the current level
  // as the top reachable one


  return self;
}

// Min image zoom level
var MIN_ZOOM_LEVEL = 0; // Max image zoom level

var MAX_ZOOM_LEVEL = 300; // Size ratio between previous and next zoom levels

var ZOOM_RATIO = 1.007; // How much to increase/decrease the zoom level when the zoom buttons are clicked

var ZOOM_BUTTON_INCREMENT_SIZE = 100; // Used to judge the amount of horizontal scroll needed to initiate a image move

var WHEEL_MOVE_X_THRESHOLD = 200; // Used to judge the amount of vertical scroll needed to initiate a zoom action

var WHEEL_MOVE_Y_THRESHOLD = 1;
var KEYS = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
}; // Actions

var ACTION_NONE = 0;
var ACTION_MOVE = 1;
var ACTION_SWIPE = 2;
var ACTION_PINCH = 3;

var SOURCE_ANY = 0;
var SOURCE_MOUSE = 1;
var SOURCE_TOUCH = 2;
var SOURCE_POINTER = 3; // Minimal swipe distance

var MIN_SWIPE_DISTANCE = 200;

var ReactImageLightbox =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactImageLightbox, _Component);

  _createClass(ReactImageLightbox, null, [{
    key: "isTargetMatchImage",
    value: function isTargetMatchImage(target) {
      return target && /ril-image-current/.test(target.className);
    }
  }, {
    key: "parseMouseEvent",
    value: function parseMouseEvent(mouseEvent) {
      return {
        id: 'mouse',
        source: SOURCE_MOUSE,
        x: parseInt(mouseEvent.clientX, 10),
        y: parseInt(mouseEvent.clientY, 10)
      };
    }
  }, {
    key: "parseTouchPointer",
    value: function parseTouchPointer(touchPointer) {
      return {
        id: touchPointer.identifier,
        source: SOURCE_TOUCH,
        x: parseInt(touchPointer.clientX, 10),
        y: parseInt(touchPointer.clientY, 10)
      };
    }
  }, {
    key: "parsePointerEvent",
    value: function parsePointerEvent(pointerEvent) {
      return {
        id: pointerEvent.pointerId,
        source: SOURCE_POINTER,
        x: parseInt(pointerEvent.clientX, 10),
        y: parseInt(pointerEvent.clientY, 10)
      };
    } // Request to transition to the previous image

  }, {
    key: "getTransform",
    value: function getTransform(_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === void 0 ? 0 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
          width = _ref.width,
          targetWidth = _ref.targetWidth;
      var nextX = x;
      var windowWidth = getWindowWidth();

      if (width > windowWidth) {
        nextX += (windowWidth - width) / 2;
      }

      var scaleFactor = zoom * (targetWidth / width);
      return {
        transform: "translate3d(".concat(nextX, "px,").concat(y, "px,0) scale3d(").concat(scaleFactor, ",").concat(scaleFactor, ",1)")
      };
    }
  }]);

  function ReactImageLightbox(props) {
    var _this;

    _classCallCheck(this, ReactImageLightbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactImageLightbox).call(this, props));
    _this.state = {
      //-----------------------------
      // Animation
      //-----------------------------
      // Lightbox is closing
      // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
      isClosing: !props.animationDisabled,
      // Component parts should animate (e.g., when images are moving, or image is being zoomed)
      shouldAnimate: false,
      //-----------------------------
      // Zoom settings
      //-----------------------------
      // Zoom level of image
      zoomLevel: MIN_ZOOM_LEVEL,
      //-----------------------------
      // Image position settings
      //-----------------------------
      // Horizontal offset from center
      offsetX: 0,
      // Vertical offset from center
      offsetY: 0,
      // image load error for srcType
      loadErrorStatus: {}
    }; // Refs

    _this.outerEl = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.zoomInBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.zoomOutBtn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.caption = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.closeIfClickInner = _this.closeIfClickInner.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleKeyInput = _this.handleKeyInput.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseUp = _this.handleMouseUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePointerEvent = _this.handlePointerEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleWindowResize = _this.handleWindowResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestClose = _this.requestClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestMoveNext = _this.requestMoveNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.requestMovePrev = _this.requestMovePrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ReactImageLightbox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Timeouts - always clear it before umount
      this.timeouts = []; // Current action

      this.currentAction = ACTION_NONE; // Events source

      this.eventsSource = SOURCE_ANY; // Empty pointers list

      this.pointerList = []; // Prevent inner close

      this.preventInnerClose = false;
      this.preventInnerCloseTimeout = null; // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc

      this.keyPressed = false; // Used to store load state / dimensions of images

      this.imageCache = {}; // Time the last keydown event was called (used in keyboard action rate limiting)

      this.lastKeyDownTime = 0; // Used for debouncing window resize event

      this.resizeTimeout = null; // Used to determine when actions are triggered by the scroll wheel

      this.wheelActionTimeout = null;
      this.resetScrollTimeout = null;
      this.scrollX = 0;
      this.scrollY = 0; // Used in panning zoomed images

      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Used to swipe

      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0; // Used to pinch

      this.pinchTouchList = null;
      this.pinchDistance = 0; // Used to differentiate between images with identical src

      this.keyCounter = 0; // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)

      this.moveRequested = false;

      if (!this.props.animationDisabled) {
        // Make opening animation play
        this.setState({
          isClosing: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Prevents cross-origin errors when using a cross-origin iframe
      this.windowContext = getHighestSafeWindowContext();
      this.listeners = {
        resize: this.handleWindowResize,
        mouseup: this.handleMouseUp,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        pointerdown: this.handlePointerEvent,
        pointermove: this.handlePointerEvent,
        pointerup: this.handlePointerEvent,
        pointercancel: this.handlePointerEvent
      };
      Object.keys(this.listeners).forEach(function (type) {
        _this2.windowContext.addEventListener(type, _this2.listeners[type]);
      });
      this.loadAllImages();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      // Iterate through the source types for prevProps and nextProps to
      //  determine if any of the sources changed
      var sourcesChanged = false;
      var prevSrcDict = {};
      var nextSrcDict = {};
      this.getSrcTypes().forEach(function (srcType) {
        if (_this3.props[srcType.name] !== nextProps[srcType.name]) {
          sourcesChanged = true;
          prevSrcDict[_this3.props[srcType.name]] = true;
          nextSrcDict[nextProps[srcType.name]] = true;
        }
      });

      if (sourcesChanged || this.moveRequested) {
        // Reset the loaded state for images not rendered next
        Object.keys(prevSrcDict).forEach(function (prevSrc) {
          if (!(prevSrc in nextSrcDict) && prevSrc in _this3.imageCache) {
            _this3.imageCache[prevSrc].loaded = false;
          }
        });
        this.moveRequested = false; // Load any new images

        this.loadAllImages(nextProps);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // Wait for move...
      return !this.moveRequested;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this4 = this;

      this.didUnmount = true;
      Object.keys(this.listeners).forEach(function (type) {
        _this4.windowContext.removeEventListener(type, _this4.listeners[type]);
      });
      this.timeouts.forEach(function (tid) {
        return clearTimeout(tid);
      });
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout(_x, _x2) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (func, time) {
      var _this5 = this;

      var id = setTimeout(function () {
        _this5.timeouts = _this5.timeouts.filter(function (tid) {
          return tid !== id;
        });
        func();
      }, time);
      this.timeouts.push(id);
      return id;
    })
  }, {
    key: "setPreventInnerClose",
    value: function setPreventInnerClose() {
      var _this6 = this;

      if (this.preventInnerCloseTimeout) {
        this.clearTimeout(this.preventInnerCloseTimeout);
      }

      this.preventInnerClose = true;
      this.preventInnerCloseTimeout = this.setTimeout(function () {
        _this6.preventInnerClose = false;
        _this6.preventInnerCloseTimeout = null;
      }, 100);
    } // Get info for the best suited image to display with the given srcType

  }, {
    key: "getBestImageForType",
    value: function getBestImageForType(srcType) {
      var imageSrc = this.props[srcType];
      var fitSizes = {};

      if (this.isImageLoaded(imageSrc)) {
        // Use full-size image if available
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height);
      } else if (this.isImageLoaded(this.props["".concat(srcType, "Thumbnail")])) {
        // Fall back to using thumbnail if the image has not been loaded
        imageSrc = this.props["".concat(srcType, "Thumbnail")];
        fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, true);
      } else {
        return null;
      }

      return {
        src: imageSrc,
        height: this.imageCache[imageSrc].height,
        width: this.imageCache[imageSrc].width,
        targetHeight: fitSizes.height,
        targetWidth: fitSizes.width
      };
    } // Get sizing for when an image is larger than the window

  }, {
    key: "getFitSizes",
    value: function getFitSizes(width, height, stretch) {
      var boxSize = this.getLightboxRect();
      var maxHeight = boxSize.height - this.props.imagePadding * 2;
      var maxWidth = boxSize.width - this.props.imagePadding * 2;

      if (!stretch) {
        maxHeight = Math.min(maxHeight, height);
        maxWidth = Math.min(maxWidth, width);
      }

      var maxRatio = maxWidth / maxHeight;
      var srcRatio = width / height;

      if (maxRatio > srcRatio) {
        // height is the constraining dimension of the photo
        return {
          width: width * maxHeight / height,
          height: maxHeight
        };
      }

      return {
        width: maxWidth,
        height: height * maxWidth / width
      };
    }
  }, {
    key: "getMaxOffsets",
    value: function getMaxOffsets() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      var currentImageInfo = this.getBestImageForType('mainSrc');

      if (currentImageInfo === null) {
        return {
          maxX: 0,
          minX: 0,
          maxY: 0,
          minY: 0
        };
      }

      var boxSize = this.getLightboxRect();
      var zoomMultiplier = this.getZoomMultiplier(zoomLevel);
      var maxX = 0;

      if (zoomMultiplier * currentImageInfo.width - boxSize.width < 0) {
        // if there is still blank space in the X dimension, don't limit except to the opposite edge
        maxX = (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2;
      } else {
        maxX = (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
      }

      var maxY = 0;

      if (zoomMultiplier * currentImageInfo.height - boxSize.height < 0) {
        // if there is still blank space in the Y dimension, don't limit except to the opposite edge
        maxY = (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2;
      } else {
        maxY = (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2;
      }

      return {
        maxX: maxX,
        maxY: maxY,
        minX: -1 * maxX,
        minY: -1 * maxY
      };
    } // Get image src types

  }, {
    key: "getSrcTypes",
    value: function getSrcTypes() {
      return [{
        name: 'mainSrc',
        keyEnding: "i".concat(this.keyCounter)
      }, {
        name: 'mainSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter)
      }, {
        name: 'nextSrc',
        keyEnding: "i".concat(this.keyCounter + 1)
      }, {
        name: 'nextSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter + 1)
      }, {
        name: 'prevSrc',
        keyEnding: "i".concat(this.keyCounter - 1)
      }, {
        name: 'prevSrcThumbnail',
        keyEnding: "t".concat(this.keyCounter - 1)
      }];
    }
    /**
     * Get sizing when the image is scaled
     */

  }, {
    key: "getZoomMultiplier",
    value: function getZoomMultiplier() {
      var zoomLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.zoomLevel;
      return Math.pow(ZOOM_RATIO, zoomLevel);
    }
    /**
     * Get the size of the lightbox in pixels
     */

  }, {
    key: "getLightboxRect",
    value: function getLightboxRect() {
      if (this.outerEl.current) {
        return this.outerEl.current.getBoundingClientRect();
      }

      return {
        width: getWindowWidth(),
        height: getWindowHeight(),
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      this.timeouts = this.timeouts.filter(function (tid) {
        return tid !== id;
      });
      clearTimeout(id);
    }) // Change zoom level

  }, {
    key: "changeZoom",
    value: function changeZoom(zoomLevel, clientX, clientY) {
      // Ignore if zoom disabled
      if (!this.props.enableZoom) {
        return;
      } // Constrain zoom level to the set bounds


      var nextZoomLevel = Math.max(MIN_ZOOM_LEVEL, Math.min(MAX_ZOOM_LEVEL, zoomLevel)); // Ignore requests that don't change the zoom level

      if (nextZoomLevel === this.state.zoomLevel) {
        return;
      }

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        // Snap back to center if zoomed all the way out
        this.setState({
          zoomLevel: nextZoomLevel,
          offsetX: 0,
          offsetY: 0
        });
        return;
      }

      var imageBaseSize = this.getBestImageForType('mainSrc');

      if (imageBaseSize === null) {
        return;
      }

      var currentZoomMultiplier = this.getZoomMultiplier();
      var nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel); // Default to the center of the image to zoom when no mouse position specified

      var boxRect = this.getLightboxRect();
      var pointerX = typeof clientX !== 'undefined' ? clientX - boxRect.left : boxRect.width / 2;
      var pointerY = typeof clientY !== 'undefined' ? clientY - boxRect.top : boxRect.height / 2;
      var currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2;
      var currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2;
      var currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX;
      var currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY;
      var currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier;
      var currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier;
      var nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier;
      var nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier;
      var nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2;
      var nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2;
      var nextOffsetX = nextImageOffsetX - nextImageRealOffsetX;
      var nextOffsetY = nextImageOffsetY - nextImageRealOffsetY; // When zooming out, limit the offset so things don't get left askew

      if (this.currentAction !== ACTION_PINCH) {
        var maxOffsets = this.getMaxOffsets();

        if (this.state.zoomLevel > nextZoomLevel) {
          nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX));
          nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY));
        }
      }

      this.setState({
        zoomLevel: nextZoomLevel,
        offsetX: nextOffsetX,
        offsetY: nextOffsetY
      });
    }
  }, {
    key: "closeIfClickInner",
    value: function closeIfClickInner(event) {
      if (!this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1) {
        this.requestClose(event);
      }
    }
    /**
     * Handle user keyboard actions
     */

  }, {
    key: "handleKeyInput",
    value: function handleKeyInput(event) {
      event.stopPropagation(); // Ignore key input during animations

      if (this.isAnimating()) {
        return;
      } // Allow slightly faster navigation through the images when user presses keys repeatedly


      if (event.type === 'keyup') {
        this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus;
        return;
      }

      var keyCode = event.which || event.keyCode; // Ignore key presses that happen too close to each other (when rapid fire key pressing or holding down the key)
      // But allow it if it's a lightbox closing action

      var currentTime = new Date();

      if (currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== KEYS.ESC) {
        return;
      }

      this.lastKeyDownTime = currentTime.getTime();

      switch (keyCode) {
        // ESC key closes the lightbox
        case KEYS.ESC:
          event.preventDefault();
          this.requestClose(event);
          break;
        // Left arrow key moves to previous image

        case KEYS.LEFT_ARROW:
          if (!this.props.prevSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMovePrev(event);
          break;
        // Right arrow key moves to next image

        case KEYS.RIGHT_ARROW:
          if (!this.props.nextSrc) {
            return;
          }

          event.preventDefault();
          this.keyPressed = true;
          this.requestMoveNext(event);
          break;
      }
    }
    /**
     * Handle a mouse wheel event over the lightbox container
     */

  }, {
    key: "handleOuterMousewheel",
    value: function handleOuterMousewheel(event) {
      var _this7 = this;

      // Prevent scrolling of the background
      event.stopPropagation();
      var xThreshold = WHEEL_MOVE_X_THRESHOLD;
      var actionDelay = 0;
      var imageMoveDelay = 500;
      this.clearTimeout(this.resetScrollTimeout);
      this.resetScrollTimeout = this.setTimeout(function () {
        _this7.scrollX = 0;
        _this7.scrollY = 0;
      }, 300); // Prevent rapid-fire zoom behavior

      if (this.wheelActionTimeout !== null || this.isAnimating()) {
        return;
      }

      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
        // handle horizontal scrolls with image moves
        this.scrollY = 0;
        this.scrollX += event.deltaX;
        var bigLeapX = xThreshold / 2; // If the scroll amount has accumulated sufficiently, or a large leap was taken

        if (this.scrollX >= xThreshold || event.deltaX >= bigLeapX) {
          // Scroll right moves to next
          this.requestMoveNext(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        } else if (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) {
          // Scroll left moves to previous
          this.requestMovePrev(event);
          actionDelay = imageMoveDelay;
          this.scrollX = 0;
        }
      } // Allow successive actions after the set delay


      if (actionDelay !== 0) {
        this.wheelActionTimeout = this.setTimeout(function () {
          _this7.wheelActionTimeout = null;
        }, actionDelay);
      }
    }
  }, {
    key: "handleImageMouseWheel",
    value: function handleImageMouseWheel(event) {
      var yThreshold = WHEEL_MOVE_Y_THRESHOLD;

      if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
        event.stopPropagation(); // If the vertical scroll amount was large enough, perform a zoom

        if (Math.abs(event.deltaY) < yThreshold) {
          return;
        }

        this.scrollX = 0;
        this.scrollY += event.deltaY;
        this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
      }
    }
    /**
     * Handle a double click on the current image
     */

  }, {
    key: "handleImageDoubleClick",
    value: function handleImageDoubleClick(event) {
      if (this.state.zoomLevel > MIN_ZOOM_LEVEL) {
        // A double click when zoomed in zooms all the way out
        this.changeZoom(MIN_ZOOM_LEVEL, event.clientX, event.clientY);
      } else {
        // A double click when zoomed all the way out zooms in
        this.changeZoom(this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
      }
    }
  }, {
    key: "shouldHandleEvent",
    value: function shouldHandleEvent(source) {
      if (this.eventsSource === source) {
        return true;
      }

      if (this.eventsSource === SOURCE_ANY) {
        this.eventsSource = source;
        return true;
      }

      switch (source) {
        case SOURCE_MOUSE:
          return false;

        case SOURCE_TOUCH:
          this.eventsSource = SOURCE_TOUCH;
          this.filterPointersBySource();
          return true;

        case SOURCE_POINTER:
          if (this.eventsSource === SOURCE_MOUSE) {
            this.eventsSource = SOURCE_POINTER;
            this.filterPointersBySource();
            return true;
          }

          return false;

        default:
          return false;
      }
    }
  }, {
    key: "addPointer",
    value: function addPointer(pointer) {
      this.pointerList.push(pointer);
    }
  }, {
    key: "removePointer",
    value: function removePointer(pointer) {
      this.pointerList = this.pointerList.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== pointer.id;
      });
    }
  }, {
    key: "filterPointersBySource",
    value: function filterPointersBySource() {
      var _this8 = this;

      this.pointerList = this.pointerList.filter(function (_ref3) {
        var source = _ref3.source;
        return source === _this8.eventsSource;
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        this.addPointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.multiPointerMove(event, [ReactImageLightbox.parseMouseEvent(event)]);
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      if (this.shouldHandleEvent(SOURCE_MOUSE)) {
        this.removePointer(ReactImageLightbox.parseMouseEvent(event));
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "handlePointerEvent",
    value: function handlePointerEvent(event) {
      if (this.shouldHandleEvent(SOURCE_POINTER)) {
        switch (event.type) {
          case 'pointerdown':
            if (ReactImageLightbox.isTargetMatchImage(event.target)) {
              this.addPointer(ReactImageLightbox.parsePointerEvent(event));
              this.multiPointerStart(event);
            }

            break;

          case 'pointermove':
            this.multiPointerMove(event, [ReactImageLightbox.parsePointerEvent(event)]);
            break;

          case 'pointerup':
          case 'pointercancel':
            this.removePointer(ReactImageLightbox.parsePointerEvent(event));
            this.multiPointerEnd(event);
            break;
        }
      }
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      var _this9 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target)) {
        [].forEach.call(event.changedTouches, function (eventTouch) {
          return _this9.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
        });
        this.multiPointerStart(event);
      }
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        this.multiPointerMove(event, [].map.call(event.changedTouches, function (eventTouch) {
          return ReactImageLightbox.parseTouchPointer(eventTouch);
        }));
      }
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      var _this10 = this;

      if (this.shouldHandleEvent(SOURCE_TOUCH)) {
        [].map.call(event.changedTouches, function (touch) {
          return _this10.removePointer(ReactImageLightbox.parseTouchPointer(touch));
        });
        this.multiPointerEnd(event);
      }
    }
  }, {
    key: "decideMoveOrSwipe",
    value: function decideMoveOrSwipe(pointer) {
      if (this.state.zoomLevel <= MIN_ZOOM_LEVEL) {
        this.handleSwipeStart(pointer);
      } else {
        this.handleMoveStart(pointer);
      }
    }
  }, {
    key: "multiPointerStart",
    value: function multiPointerStart(event) {
      this.handleEnd(null);

      switch (this.pointerList.length) {
        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerMove",
    value: function multiPointerMove(event, pointerList) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          {
            event.preventDefault();
            this.handleMove(pointerList[0]);
            break;
          }

        case ACTION_SWIPE:
          {
            event.preventDefault();
            this.handleSwipe(pointerList[0]);
            break;
          }

        case ACTION_PINCH:
          {
            event.preventDefault();
            this.handlePinch(pointerList);
            break;
          }
      }
    }
  }, {
    key: "multiPointerEnd",
    value: function multiPointerEnd(event) {
      if (this.currentAction !== ACTION_NONE) {
        this.setPreventInnerClose();
        this.handleEnd(event);
      }

      switch (this.pointerList.length) {
        case 0:
          {
            this.eventsSource = SOURCE_ANY;
            break;
          }

        case 1:
          {
            event.preventDefault();
            this.decideMoveOrSwipe(this.pointerList[0]);
            break;
          }

        case 2:
          {
            event.preventDefault();
            this.handlePinchStart(this.pointerList);
            break;
          }
      }
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(event) {
      switch (this.currentAction) {
        case ACTION_MOVE:
          this.handleMoveEnd(event);
          break;

        case ACTION_SWIPE:
          this.handleSwipeEnd(event);
          break;

        case ACTION_PINCH:
          this.handlePinchEnd(event);
          break;
      }
    } // Handle move start over the lightbox container
    // This happens:
    // - On a mouseDown event
    // - On a touchstart event

  }, {
    key: "handleMoveStart",
    value: function handleMoveStart(_ref4) {
      var clientX = _ref4.x,
          clientY = _ref4.y;

      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_MOVE;
      this.moveStartX = clientX;
      this.moveStartY = clientY;
      this.moveStartOffsetX = this.state.offsetX;
      this.moveStartOffsetY = this.state.offsetY;
    } // Handle dragging over the lightbox container
    // This happens:
    // - After a mouseDown and before a mouseUp event
    // - After a touchstart and before a touchend event

  }, {
    key: "handleMove",
    value: function handleMove(_ref5) {
      var clientX = _ref5.x,
          clientY = _ref5.y;
      var newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX;
      var newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;

      if (this.state.offsetX !== newOffsetX || this.state.offsetY !== newOffsetY) {
        this.setState({
          offsetX: newOffsetX,
          offsetY: newOffsetY
        });
      }
    }
  }, {
    key: "handleMoveEnd",
    value: function handleMoveEnd() {
      var _this11 = this;

      this.currentAction = ACTION_NONE;
      this.moveStartX = 0;
      this.moveStartY = 0;
      this.moveStartOffsetX = 0;
      this.moveStartOffsetY = 0; // Snap image back into frame if outside max offset range

      var maxOffsets = this.getMaxOffsets();
      var nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX));
      var nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));

      if (nextOffsetX !== this.state.offsetX || nextOffsetY !== this.state.offsetY) {
        this.setState({
          offsetX: nextOffsetX,
          offsetY: nextOffsetY,
          shouldAnimate: true
        });
        this.setTimeout(function () {
          _this11.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(_ref6) {
      var clientX = _ref6.x,
          clientY = _ref6.y;
      this.currentAction = ACTION_SWIPE;
      this.swipeStartX = clientX;
      this.swipeStartY = clientY;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe(_ref7) {
      var clientX = _ref7.x,
          clientY = _ref7.y;
      this.swipeEndX = clientX;
      this.swipeEndY = clientY;
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(event) {
      var xDiff = this.swipeEndX - this.swipeStartX;
      var xDiffAbs = Math.abs(xDiff);
      var yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
      this.currentAction = ACTION_NONE;
      this.swipeStartX = 0;
      this.swipeStartY = 0;
      this.swipeEndX = 0;
      this.swipeEndY = 0;

      if (!event || this.isAnimating() || xDiffAbs < yDiffAbs * 1.5) {
        return;
      }

      if (xDiffAbs < MIN_SWIPE_DISTANCE) {
        var boxRect = this.getLightboxRect();

        if (xDiffAbs < boxRect.width / 4) {
          return;
        }
      }

      if (xDiff > 0 && this.props.prevSrc) {
        event.preventDefault();
        this.requestMovePrev();
      } else if (xDiff < 0 && this.props.nextSrc) {
        event.preventDefault();
        this.requestMoveNext();
      }
    }
  }, {
    key: "calculatePinchDistance",
    value: function calculatePinchDistance() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref9 = _slicedToArray(_ref8, 2),
          a = _ref9[0],
          b = _ref9[1];

      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
  }, {
    key: "calculatePinchCenter",
    value: function calculatePinchCenter() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pinchTouchList,
          _ref11 = _slicedToArray(_ref10, 2),
          a = _ref11[0],
          b = _ref11[1];

      return {
        x: a.x - (a.x - b.x) / 2,
        y: a.y - (a.y - b.y) / 2
      };
    }
  }, {
    key: "handlePinchStart",
    value: function handlePinchStart(pointerList) {
      if (!this.props.enableZoom) {
        return;
      }

      this.currentAction = ACTION_PINCH;
      this.pinchTouchList = pointerList.map(function (_ref12) {
        var id = _ref12.id,
            x = _ref12.x,
            y = _ref12.y;
        return {
          id: id,
          x: x,
          y: y
        };
      });
      this.pinchDistance = this.calculatePinchDistance();
    }
  }, {
    key: "handlePinch",
    value: function handlePinch(pointerList) {
      this.pinchTouchList = this.pinchTouchList.map(function (oldPointer) {
        for (var i = 0; i < pointerList.length; i += 1) {
          if (pointerList[i].id === oldPointer.id) {
            return pointerList[i];
          }
        }

        return oldPointer;
      });
      var newDistance = this.calculatePinchDistance();
      var zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
      this.pinchDistance = newDistance;

      var _this$calculatePinchC = this.calculatePinchCenter(this.pinchTouchList),
          clientX = _this$calculatePinchC.x,
          clientY = _this$calculatePinchC.y;

      this.changeZoom(zoomLevel, clientX, clientY);
    }
  }, {
    key: "handlePinchEnd",
    value: function handlePinchEnd() {
      this.currentAction = ACTION_NONE;
      this.pinchTouchList = null;
      this.pinchDistance = 0;
    } // Handle the window resize event

  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.clearTimeout(this.resizeTimeout);
      this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
    }
  }, {
    key: "handleZoomInButtonClick",
    value: function handleZoomInButtonClick() {
      var nextZoomLevel = this.state.zoomLevel + ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MAX_ZOOM_LEVEL) {
        this.zoomOutBtn.current.focus();
      }
    }
  }, {
    key: "handleZoomOutButtonClick",
    value: function handleZoomOutButtonClick() {
      var nextZoomLevel = this.state.zoomLevel - ZOOM_BUTTON_INCREMENT_SIZE;
      this.changeZoom(nextZoomLevel);

      if (nextZoomLevel === MIN_ZOOM_LEVEL) {
        this.zoomInBtn.current.focus();
      }
    }
  }, {
    key: "handleCaptionMousewheel",
    value: function handleCaptionMousewheel(event) {
      event.stopPropagation();

      if (!this.caption.current) {
        return;
      }

      var _this$caption$current = this.caption.current.getBoundingClientRect(),
          height = _this$caption$current.height;

      var _this$caption$current2 = this.caption.current,
          scrollHeight = _this$caption$current2.scrollHeight,
          scrollTop = _this$caption$current2.scrollTop;

      if (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) {
        event.preventDefault();
      }
    } // Detach key and mouse input events

  }, {
    key: "isAnimating",
    value: function isAnimating() {
      return this.state.shouldAnimate || this.state.isClosing;
    } // Check if image is loaded

  }, {
    key: "isImageLoaded",
    value: function isImageLoaded(imageSrc) {
      return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
    } // Load image from src and call callback with image width and height on load

  }, {
    key: "loadImage",
    value: function loadImage(srcType, imageSrc, done) {
      var _this12 = this;

      // Return the image info if it is already cached
      if (this.isImageLoaded(imageSrc)) {
        this.setTimeout(function () {
          done();
        }, 1);
        return;
      }

      var inMemoryImage = new global.Image();

      if (this.props.imageCrossOrigin) {
        inMemoryImage.crossOrigin = this.props.imageCrossOrigin;
      }

      inMemoryImage.onerror = function (errorEvent) {
        _this12.props.onImageLoadError(imageSrc, srcType, errorEvent); // failed to load so set the state loadErrorStatus


        _this12.setState(function (prevState) {
          return {
            loadErrorStatus: _objectSpread({}, prevState.loadErrorStatus, _defineProperty({}, srcType, true))
          };
        });

        done(errorEvent);
      };

      inMemoryImage.onload = function () {
        _this12.props.onImageLoad(imageSrc, srcType, inMemoryImage);

        _this12.imageCache[imageSrc] = {
          loaded: true,
          width: inMemoryImage.width,
          height: inMemoryImage.height
        };
        done();
      };

      inMemoryImage.src = imageSrc;
    } // Load all images and their thumbnails

  }, {
    key: "loadAllImages",
    value: function loadAllImages() {
      var _this13 = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var generateLoadDoneCallback = function generateLoadDoneCallback(srcType, imageSrc) {
        return function (err) {
          // Give up showing image on error
          if (err) {
            return;
          } // Don't rerender if the src is not the same as when the load started
          // or if the component has unmounted


          if (_this13.props[srcType] !== imageSrc || _this13.didUnmount) {
            return;
          } // Force rerender with the new image


          _this13.forceUpdate();
        };
      }; // Load the images


      this.getSrcTypes().forEach(function (srcType) {
        var type = srcType.name; // there is no error when we try to load it initially

        if (props[type] && _this13.state.loadErrorStatus[type]) {
          _this13.setState(function (prevState) {
            return {
              loadErrorStatus: _objectSpread({}, prevState.loadErrorStatus, _defineProperty({}, type, false))
            };
          });
        } // Load unloaded images


        if (props[type] && !_this13.isImageLoaded(props[type])) {
          _this13.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
        }
      });
    } // Request that the lightbox be closed

  }, {
    key: "requestClose",
    value: function requestClose(event) {
      var _this14 = this;

      // Call the parent close request
      var closeLightbox = function closeLightbox() {
        return _this14.props.onCloseRequest(event);
      };

      if (this.props.animationDisabled || event.type === 'keydown' && !this.props.animationOnKeyInput) {
        // No animation
        closeLightbox();
        return;
      } // With animation
      // Start closing animation


      this.setState({
        isClosing: true
      }); // Perform the actual closing at the end of the animation

      this.setTimeout(closeLightbox, this.props.animationDuration);
    }
  }, {
    key: "requestMove",
    value: function requestMove(direction, event) {
      var _this15 = this;

      // Reset the zoom level on image move
      var nextState = {
        zoomLevel: MIN_ZOOM_LEVEL,
        offsetX: 0,
        offsetY: 0
      }; // Enable animated states

      if (!this.props.animationDisabled && (!this.keyPressed || this.props.animationOnKeyInput)) {
        nextState.shouldAnimate = true;
        this.setTimeout(function () {
          return _this15.setState({
            shouldAnimate: false
          });
        }, this.props.animationDuration);
      }

      this.keyPressed = false;
      this.moveRequested = true;

      if (direction === 'prev') {
        this.keyCounter -= 1;
        this.setState(nextState);
        this.props.onMovePrevRequest(event);
      } else {
        this.keyCounter += 1;
        this.setState(nextState);
        this.props.onMoveNextRequest(event);
      }
    } // Request to transition to the next image

  }, {
    key: "requestMoveNext",
    value: function requestMoveNext(event) {
      this.requestMove('next', event);
    } // Request to transition to the previous image

  }, {
    key: "requestMovePrev",
    value: function requestMovePrev(event) {
      this.requestMove('prev', event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this16 = this;

      var _this$props = this.props,
          animationDisabled = _this$props.animationDisabled,
          animationDuration = _this$props.animationDuration,
          clickOutsideToClose = _this$props.clickOutsideToClose,
          discourageDownloads = _this$props.discourageDownloads,
          enableZoom = _this$props.enableZoom,
          imageTitle = _this$props.imageTitle,
          nextSrc = _this$props.nextSrc,
          prevSrc = _this$props.prevSrc,
          toolbarButtons = _this$props.toolbarButtons,
          reactModalStyle = _this$props.reactModalStyle,
          _onAfterOpen = _this$props.onAfterOpen,
          imageCrossOrigin = _this$props.imageCrossOrigin,
          reactModalProps = _this$props.reactModalProps;
      var _this$state = this.state,
          zoomLevel = _this$state.zoomLevel,
          offsetX = _this$state.offsetX,
          offsetY = _this$state.offsetY,
          isClosing = _this$state.isClosing,
          loadErrorStatus = _this$state.loadErrorStatus;
      var boxSize = this.getLightboxRect();
      var transitionStyle = {}; // Transition settings for sliding animations

      if (!animationDisabled && this.isAnimating()) {
        transitionStyle = _objectSpread({}, transitionStyle, {
          transition: "transform ".concat(animationDuration, "ms")
        });
      } // Key endings to differentiate between images with the same src


      var keyEndings = {};
      this.getSrcTypes().forEach(function (_ref13) {
        var name = _ref13.name,
            keyEnding = _ref13.keyEnding;
        keyEndings[name] = keyEnding;
      }); // Images to be displayed

      var images = [];

      var addImage = function addImage(srcType, imageClass, transforms) {
        // Ignore types that have no source defined for their full size image
        if (!_this16.props[srcType]) {
          return;
        }

        var bestImageInfo = _this16.getBestImageForType(srcType);

        var imageStyle = _objectSpread({}, transitionStyle, ReactImageLightbox.getTransform(_objectSpread({}, transforms, bestImageInfo)));

        if (zoomLevel > MIN_ZOOM_LEVEL) {
          imageStyle.cursor = 'move';
        } // support IE 9 and 11


        var hasTrueValue = function hasTrueValue(object) {
          return Object.keys(object).some(function (key) {
            return object[key];
          });
        }; // when error on one of the loads then push custom error stuff


        if (bestImageInfo === null && hasTrueValue(loadErrorStatus)) {
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-errored"),
            style: imageStyle,
            key: _this16.props[srcType] + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril__errorContainer"
          }, _this16.props.imageLoadErrorMessage)));
          return;
        }

        if (bestImageInfo === null) {
          var loadingIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"
          }, _toConsumableArray(new Array(12)).map(function (_, index) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              // eslint-disable-next-line react/no-array-index-key
              key: index,
              className: "ril-loading-circle-point ril__loadingCirclePoint"
            });
          })); // Fall back to loading icon if the thumbnail has not been loaded

          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril-not-loaded"),
            style: imageStyle,
            key: _this16.props[srcType] + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril__loadingContainer"
          }, loadingIcon)));
          return;
        }

        var imageSrc = bestImageInfo.src;

        if (discourageDownloads) {
          imageStyle.backgroundImage = "url('".concat(imageSrc, "')");
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "".concat(imageClass, " ril__image ril__imageDiscourager"),
            onDoubleClick: _this16.handleImageDoubleClick,
            onWheel: _this16.handleImageMouseWheel,
            style: imageStyle,
            key: imageSrc + keyEndings[srcType]
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ril-download-blocker ril__downloadBlocker"
          })));
        } else {
          images.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, imageCrossOrigin ? {
            crossOrigin: imageCrossOrigin
          } : {}, {
            className: "".concat(imageClass, " ril__image"),
            onDoubleClick: _this16.handleImageDoubleClick,
            onWheel: _this16.handleImageMouseWheel,
            onDragStart: function onDragStart(e) {
              return e.preventDefault();
            },
            style: imageStyle,
            src: imageSrc,
            key: imageSrc + keyEndings[srcType],
            alt: typeof imageTitle === 'string' ? imageTitle : translate('Image'),
            draggable: false
          })));
        }
      };

      var zoomMultiplier = this.getZoomMultiplier(); // Next Image (displayed on the right)

      addImage('nextSrc', 'ril-image-next ril__imageNext', {
        x: boxSize.width
      }); // Main Image

      addImage('mainSrc', 'ril-image-current', {
        x: -1 * offsetX,
        y: -1 * offsetY,
        zoom: zoomMultiplier
      }); // Previous Image (displayed on the left)

      addImage('prevSrc', 'ril-image-prev ril__imagePrev', {
        x: -1 * boxSize.width
      });
      var modalStyle = {
        overlay: _objectSpread({
          zIndex: 1000,
          backgroundColor: 'transparent'
        }, reactModalStyle.overlay),
        content: _objectSpread({
          backgroundColor: 'transparent',
          overflow: 'hidden',
          // Needed, otherwise keyboard shortcuts scroll the page
          border: 'none',
          borderRadius: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }, reactModalStyle.content)
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        isOpen: true,
        onRequestClose: clickOutsideToClose ? this.requestClose : undefined,
        onAfterOpen: function onAfterOpen() {
          // Focus on the div with key handlers
          if (_this16.outerEl.current) {
            _this16.outerEl.current.focus();
          }

          _onAfterOpen();
        },
        style: modalStyle,
        contentLabel: translate('Lightbox'),
        appElement: typeof global.window !== 'undefined' ? global.window.document.body : undefined
      }, reactModalProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions
        // Floating modal with closing animations
        className: "ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName, " ").concat(isClosing ? 'ril-closing ril__outerClosing' : ''),
        style: {
          transition: "opacity ".concat(animationDuration, "ms"),
          animationDuration: "".concat(animationDuration, "ms"),
          animationDirection: isClosing ? 'normal' : 'reverse'
        },
        ref: this.outerEl,
        onWheel: this.handleOuterMousewheel,
        onMouseMove: this.handleMouseMove,
        onMouseDown: this.handleMouseDown,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        tabIndex: "-1" // Enables key handlers on div
        ,
        onKeyDown: this.handleKeyInput,
        onKeyUp: this.handleKeyInput
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        // Image holder
        className: "ril-inner ril__inner",
        onClick: clickOutsideToClose ? this.closeIfClickInner : undefined
      }, images), prevSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Move to previous image button
        type: "button",
        className: "ril-prev-button ril__navButtons ril__navButtonPrev",
        key: "prev",
        "aria-label": this.props.prevLabel,
        onClick: !this.isAnimating() ? this.requestMovePrev : undefined // Ignore clicks during animation

      }), nextSrc && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Move to next image button
        type: "button",
        className: "ril-next-button ril__navButtons ril__navButtonNext",
        key: "next",
        "aria-label": this.props.nextLabel,
        onClick: !this.isAnimating() ? this.requestMoveNext : undefined // Ignore clicks during animation

      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // Lightbox toolbar
        className: "ril-toolbar ril__toolbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ril-toolbar__item__child ril__toolbarItemChild"
      }, imageTitle))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"
      }, toolbarButtons && toolbarButtons.map(function (button, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: "button_".concat(i + 1),
          className: "ril-toolbar__item ril__toolbarItem"
        }, button);
      }), enableZoom && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox zoom in button
        type: "button",
        key: "zoom-in",
        "aria-label": this.props.zoomInLabel,
        className: ['ril-zoom-in', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomInButton'].concat(_toConsumableArray(zoomLevel === MAX_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomInBtn,
        disabled: this.isAnimating() || zoomLevel === MAX_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MAX_ZOOM_LEVEL ? this.handleZoomInButtonClick : undefined
      })), enableZoom && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox zoom out button
        type: "button",
        key: "zoom-out",
        "aria-label": this.props.zoomOutLabel,
        className: ['ril-zoom-out', 'ril__toolbarItemChild', 'ril__builtinButton', 'ril__zoomOutButton'].concat(_toConsumableArray(zoomLevel === MIN_ZOOM_LEVEL ? ['ril__builtinButtonDisabled'] : [])).join(' '),
        ref: this.zoomOutBtn,
        disabled: this.isAnimating() || zoomLevel === MIN_ZOOM_LEVEL,
        onClick: !this.isAnimating() && zoomLevel !== MIN_ZOOM_LEVEL ? this.handleZoomOutButtonClick : undefined
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "ril-toolbar__item ril__toolbarItem"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        // Lightbox close button
        type: "button",
        key: "close",
        "aria-label": this.props.closeLabel,
        className: "ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",
        onClick: !this.isAnimating() ? this.requestClose : undefined // Ignore clicks during animation

      })))), this.props.imageCaption && // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        // Image caption
        onWheel: this.handleCaptionMousewheel,
        onMouseDown: function onMouseDown(event) {
          return event.stopPropagation();
        },
        className: "ril-caption ril__caption",
        ref: this.caption
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ril-caption-content ril__captionContent"
      }, this.props.imageCaption))));
    }
  }]);

  return ReactImageLightbox;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

ReactImageLightbox.propTypes = {
  //-----------------------------
  // Image sources
  //-----------------------------
  // Main display image url
  mainSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  // Previous display image url (displayed to the left)
  // If left undefined, movePrev actions will not be performed, and the button not displayed
  prevSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // Next display image url (displayed to the right)
  // If left undefined, moveNext actions will not be performed, and the button not displayed
  nextSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Image thumbnail sources
  //-----------------------------
  // Thumbnail image url corresponding to props.mainSrc
  mainSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.prevSrc
  prevSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  // Thumbnail image url corresponding to props.nextSrc
  nextSrcThumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // eslint-disable-line react/no-unused-prop-types
  //-----------------------------
  // Event Handlers
  //-----------------------------
  // Close window event
  // Should change the parent state such that the lightbox is not rendered
  onCloseRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // Move to previous image event
  // Should change the parent state such that props.prevSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.nextSrc, etc.
  onMovePrevRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Move to next image event
  // Should change the parent state such that props.nextSrc becomes props.mainSrc,
  //  props.mainSrc becomes props.prevSrc, etc.
  onMoveNextRequest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Called when an image fails to load
  // (imageSrc: string, srcType: string, errorEvent: object): void
  onImageLoadError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Called when image successfully loads
  onImageLoad: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // Open window event
  onAfterOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  //-----------------------------
  // Download discouragement settings
  //-----------------------------
  // Enable download discouragement (prevents [right-click -> Save Image As...])
  discourageDownloads: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  //-----------------------------
  // Animation settings
  //-----------------------------
  // Disable all animation
  animationDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Disable animation on actions performed with keyboard shortcuts
  animationOnKeyInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Animation duration (ms)
  animationDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  //-----------------------------
  // Keyboard shortcut settings
  //-----------------------------
  // Required interval of time (ms) between key actions
  // (prevents excessively fast navigation of images)
  keyRepeatLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  // Amount of time (ms) restored after each keyup
  // (makes rapid key presses slightly faster than holding down the key to navigate images)
  keyRepeatKeyupBonus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  //-----------------------------
  // Image info
  //-----------------------------
  // Image title
  imageTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  // Image caption
  imageCaption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  // Optional crossOrigin attribute
  imageCrossOrigin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Lightbox style
  //-----------------------------
  // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
  reactModalStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  // Padding (px) between the edge of the window and the lightbox
  imagePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  //-----------------------------
  // Other
  //-----------------------------
  // Array of custom toolbar buttons
  toolbarButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node),
  // When true, clicks outside of the image close the lightbox
  clickOutsideToClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Set to false to disable zoom functionality and hide zoom buttons
  enableZoom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Override props set on react-modal (https://github.com/reactjs/react-modal)
  reactModalProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}),
  // Aria-labels
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  zoomInLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  zoomOutLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imageLoadErrorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ReactImageLightbox.defaultProps = {
  imageTitle: null,
  imageCaption: null,
  toolbarButtons: null,
  reactModalProps: {},
  animationDisabled: false,
  animationDuration: 300,
  animationOnKeyInput: false,
  clickOutsideToClose: true,
  closeLabel: 'Close lightbox',
  discourageDownloads: false,
  enableZoom: true,
  imagePadding: 10,
  imageCrossOrigin: null,
  keyRepeatKeyupBonus: 40,
  keyRepeatLimit: 180,
  mainSrcThumbnail: null,
  nextLabel: 'Next image',
  nextSrc: null,
  nextSrcThumbnail: null,
  onAfterOpen: function onAfterOpen() {},
  onImageLoadError: function onImageLoadError() {},
  onImageLoad: function onImageLoad() {},
  onMoveNextRequest: function onMoveNextRequest() {},
  onMovePrevRequest: function onMovePrevRequest() {},
  prevLabel: 'Previous image',
  prevSrc: null,
  prevSrcThumbnail: null,
  reactModalStyle: {},
  wrapperClassName: '',
  zoomInLabel: 'Zoom in',
  zoomOutLabel: 'Zoom out',
  imageLoadErrorMessage: 'This image failed to load'
};

/* harmony default export */ __webpack_exports__["default"] = (ReactImageLightbox);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-modal/lib/components/Modal.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/components/Modal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "./node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      if (parent) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return { prevParent: prevParent, nextParent: nextParent };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;


      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      }

      // Stop unnecessary renders if modal is remaining closed
      if (!prevProps.isOpen && !isOpen) return;

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};


(0, _reactLifecyclesCompat.polyfill)(Modal);

exports.default = Modal;

/***/ }),

/***/ "./node_modules/react-modal/lib/components/ModalPortal.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-modal/lib/components/ModalPortal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "./node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "./node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "./node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "./node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "./node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName;

      // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2.default.deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      }

      // Focus only needs to be set once when the modal is being opened
      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName;

      // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);

      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2.default.register(this);
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        },
        _react2.default.createElement(
          "div",
          _extends({
            id: id,
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  htmlOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onAfterClose: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  data: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool,
  overlayRef: _propTypes2.default.func,
  contentRef: _propTypes2.default.func,
  id: _propTypes2.default.string,
  testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Body focus trap see Issue #742

var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }
    return;
  }
  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }
    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }
    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/classList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/classList.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";

    buffer += "<html /> (" + classes + "):\n";
    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className;

    // eslint-disable-next-line max-len
    buffer += "\n\ndoc.body (" + classes + "):\n";
    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n";

    // eslint-disable-next-line no-console
    console.log(buffer);
  }
}

/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }
  poll[className] += 1;
  return className;
};

/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */
var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }
  return className;
};

/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */
var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};

/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */
var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};

/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */
var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/focusManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/focusManager.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Tracks portals that are open and emits events to subscribers

var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }
      return;
    }
    _this.openInstances.push(openInstance);
    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);
    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }
      return;
    }
    _this.openInstances.splice(index, 1);
    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType,
      // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();

exports.default = portalOpenInstances;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "./node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/scopeTab.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "./node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.
  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x];

  // If the tabbable element does not exist,
  // focus head/tail based on shiftKey
  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();

  target.focus();
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/helpers/tabbable.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-modal/lib/helpers/tabbable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
  // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-modal/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-modal/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "./node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-yandex-metrika/lib/component.js":
/*!************************************************************!*\
  !*** ./node_modules/react-yandex-metrika/lib/component.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YMInitializer = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _init = _interopRequireDefault(__webpack_require__(/*! ./init */ "./node_modules/react-yandex-metrika/lib/init.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-yandex-metrika/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var YMInitializer =
/*#__PURE__*/
function (_Component) {
  _inherits(YMInitializer, _Component);

  function YMInitializer() {
    _classCallCheck(this, YMInitializer);

    return _possibleConstructorReturn(this, _getPrototypeOf(YMInitializer).apply(this, arguments));
  }

  _createClass(YMInitializer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _init["default"])(this.props.accounts, this.props.options, this.props.version);
      var el = document.createElement('script');
      var attrs = this.props.attrs;
      el.type = 'text/javascript';
      el.async = true;
      el.src = (0, _constants.scriptPath)(this.props.version);
      Object.keys(attrs).map(function (i) {
        if (el.__proto__.hasOwnProperty(i)) {
          el.setAttribute(i, attrs[i]);
        }
      });
      this.insertPoint.insertBefore(el, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var setInsertPoint = function setInsertPoint(element) {
        _this.insertPoint = element;
      };

      return _react["default"].createElement(this.props.containerElement, {
        ref: setInsertPoint
      }, this.props.children);
    }
  }]);

  return YMInitializer;
}(_react.Component);

exports.YMInitializer = YMInitializer;
YMInitializer.displayName = 'YMInitializer';
YMInitializer.propTypes = {
  accounts: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  containerElement: _propTypes["default"].string,
  options: _propTypes["default"].object,
  attrs: _propTypes["default"].object,
  version: _propTypes["default"].oneOf(['1', '2'])
};
YMInitializer.defaultProps = {
  containerElement: 'div',
  options: {},
  attrs: {},
  version: '1'
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGE7Ozs7Ozs7Ozs7Ozs7d0NBRWtCO0FBQ2hCLDRCQUFLLEtBQUssS0FBTCxDQUFXLFFBQWhCLEVBQTBCLEtBQUssS0FBTCxDQUFXLE9BQXJDLEVBQThDLEtBQUssS0FBTCxDQUFXLE9BQXpEO0FBQ0EsVUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVDtBQUNBLFVBQUksS0FBSyxHQUFHLEtBQUssS0FBTCxDQUFXLEtBQXZCO0FBQ0EsTUFBQSxFQUFFLENBQUMsSUFBSCxHQUFVLGlCQUFWO0FBQ0EsTUFBQSxFQUFFLENBQUMsS0FBSCxHQUFXLElBQVg7QUFDQSxNQUFBLEVBQUUsQ0FBQyxHQUFILEdBQVMsMkJBQVcsS0FBSyxLQUFMLENBQVcsT0FBdEIsQ0FBVDtBQUNBLE1BQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLEVBQW1CLEdBQW5CLENBQXVCLFVBQUEsQ0FBQyxFQUFJO0FBQ3hCLFlBQUksRUFBRSxDQUFDLFNBQUgsQ0FBYSxjQUFiLENBQTRCLENBQTVCLENBQUosRUFBb0M7QUFDaEMsVUFBQSxFQUFFLENBQUMsWUFBSCxDQUFnQixDQUFoQixFQUFtQixLQUFLLENBQUMsQ0FBRCxDQUF4QjtBQUNIO0FBQ0osT0FKRDtBQUtBLFdBQUssV0FBTCxDQUFpQixZQUFqQixDQUE4QixFQUE5QixFQUFrQyxJQUFsQztBQUNIOzs7NkJBRVE7QUFBQTs7QUFDTCxVQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFDLE9BQUQsRUFBYTtBQUM5QixRQUFBLEtBQUksQ0FBQyxXQUFMLEdBQW1CLE9BQW5CO0FBQ0gsT0FGRDs7QUFHQSxhQUFPLGtCQUFNLGFBQU4sQ0FDSCxLQUFLLEtBQUwsQ0FBVyxnQkFEUixFQUVIO0FBQUMsUUFBQSxHQUFHLEVBQUU7QUFBTixPQUZHLEVBR0gsS0FBSyxLQUFMLENBQVcsUUFIUixDQUFQO0FBS0g7Ozs7RUExQnVCLGdCOzs7QUE4QjVCLGFBQWEsQ0FBQyxXQUFkLEdBQTRCLGVBQTVCO0FBRUEsYUFBYSxDQUFDLFNBQWQsR0FBMEI7QUFDdEIsRUFBQSxRQUFRLEVBQUUsc0JBQVUsT0FBVixDQUFrQixzQkFBVSxNQUE1QixFQUFvQyxVQUR4QjtBQUV0QixFQUFBLGdCQUFnQixFQUFFLHNCQUFVLE1BRk47QUFHdEIsRUFBQSxPQUFPLEVBQUUsc0JBQVUsTUFIRztBQUl0QixFQUFBLEtBQUssRUFBRSxzQkFBVSxNQUpLO0FBS3RCLEVBQUEsT0FBTyxFQUFFLHNCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFoQjtBQUxhLENBQTFCO0FBUUEsYUFBYSxDQUFDLFlBQWQsR0FBNkI7QUFDekIsRUFBQSxnQkFBZ0IsRUFBRSxLQURPO0FBRXpCLEVBQUEsT0FBTyxFQUFFLEVBRmdCO0FBR3pCLEVBQUEsS0FBSyxFQUFFLEVBSGtCO0FBSXpCLEVBQUEsT0FBTyxFQUFFO0FBSmdCLENBQTdCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgeyBzY3JpcHRQYXRoIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBZTUluaXRpYWxpemVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpbml0KHRoaXMucHJvcHMuYWNjb3VudHMsIHRoaXMucHJvcHMub3B0aW9ucywgdGhpcy5wcm9wcy52ZXJzaW9uKTtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGxldCBhdHRycyA9IHRoaXMucHJvcHMuYXR0cnM7XG4gICAgICAgIGVsLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgZWwuYXN5bmMgPSB0cnVlO1xuICAgICAgICBlbC5zcmMgPSBzY3JpcHRQYXRoKHRoaXMucHJvcHMudmVyc2lvbik7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoaSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwuX19wcm90b19fLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGksIGF0dHJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5zZXJ0UG9pbnQuaW5zZXJ0QmVmb3JlKGVsLCBudWxsKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBzZXRJbnNlcnRQb2ludCA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluc2VydFBvaW50ID0gZWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgICAgICB7cmVmOiBzZXRJbnNlcnRQb2ludH0sXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbllNSW5pdGlhbGl6ZXIuZGlzcGxheU5hbWUgPSAnWU1Jbml0aWFsaXplcic7XG5cbllNSW5pdGlhbGl6ZXIucHJvcFR5cGVzID0ge1xuICAgIGFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhdHRyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2ZXJzaW9uOiBQcm9wVHlwZXMub25lT2YoWycxJywgJzInXSlcbn07XG5cbllNSW5pdGlhbGl6ZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbnRhaW5lckVsZW1lbnQ6ICdkaXYnLFxuICAgIG9wdGlvbnM6IHt9LFxuICAgIGF0dHJzOiB7fSxcbiAgICB2ZXJzaW9uOiAnMSdcbn07XG5cbmV4cG9ydCB7IFlNSW5pdGlhbGl6ZXIgfTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/react-yandex-metrika/lib/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/react-yandex-metrika/lib/constants.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackQueueName = callbackQueueName;
exports.scriptPath = scriptPath;
exports.trackerConstructorName = trackerConstructorName;
exports.trackerInstanceName = trackerInstanceName;
exports.trackerVersionName = trackerVersionName;
exports.accountListName = void 0;

/* eslint-disable curly */
var accountListName = 'yandex_metrika_accounts';
exports.accountListName = accountListName;

function invalidVersion() {
  throw new Error('invalid Ya.Metrika version');
}

function callbackQueueName(version) {
  if (version === '1') return 'yandex_metrika_callbacks';
  if (version === '2') return 'yandex_metrika_callbacks2';
  invalidVersion();
}

function scriptPath(version) {
  if (version === '1') return 'https://mc.yandex.ru/metrika/watch.js';
  if (version === '2') return 'https://mc.yandex.ru/metrika/tag.js';
  invalidVersion();
}

function trackerConstructorName(version) {
  if (version === '1') return 'Metrika';
  if (version === '2') return 'Metrika2';
  invalidVersion();
}

function trackerInstanceName(id) {
  return "yaCounter".concat(id);
}

function trackerVersionName(id) {
  return "yaCounterVersion".concat(id);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJLGVBQWUsR0FBRyx5QkFBdEI7OztBQUVBLFNBQVMsY0FBVCxHQUEwQjtBQUN0QixRQUFNLElBQUksS0FBSixDQUFVLDRCQUFWLENBQU47QUFDSDs7QUFFRCxTQUFTLGlCQUFULENBQTJCLE9BQTNCLEVBQW9DO0FBQ2hDLE1BQUksT0FBTyxLQUFLLEdBQWhCLEVBQXFCLE9BQU8sMEJBQVA7QUFDckIsTUFBSSxPQUFPLEtBQUssR0FBaEIsRUFBcUIsT0FBTywyQkFBUDtBQUNyQixFQUFBLGNBQWM7QUFDakI7O0FBRUQsU0FBUyxVQUFULENBQW9CLE9BQXBCLEVBQTZCO0FBQ3pCLE1BQUksT0FBTyxLQUFLLEdBQWhCLEVBQXFCLE9BQU8sdUNBQVA7QUFDckIsTUFBSSxPQUFPLEtBQUssR0FBaEIsRUFBcUIsT0FBTyxxQ0FBUDtBQUNyQixFQUFBLGNBQWM7QUFDakI7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxPQUFoQyxFQUF5QztBQUNyQyxNQUFJLE9BQU8sS0FBSyxHQUFoQixFQUFxQixPQUFPLFNBQVA7QUFDckIsTUFBSSxPQUFPLEtBQUssR0FBaEIsRUFBcUIsT0FBTyxVQUFQO0FBQ3JCLEVBQUEsY0FBYztBQUNqQjs7QUFFRCxTQUFTLG1CQUFULENBQTZCLEVBQTdCLEVBQWlDO0FBQzdCLDRCQUFtQixFQUFuQjtBQUNIOztBQUVELFNBQVMsa0JBQVQsQ0FBNEIsRUFBNUIsRUFBZ0M7QUFDNUIsbUNBQTBCLEVBQTFCO0FBQ0giLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY3VybHkgKi9cblxubGV0IGFjY291bnRMaXN0TmFtZSA9ICd5YW5kZXhfbWV0cmlrYV9hY2NvdW50cyc7XG5cbmZ1bmN0aW9uIGludmFsaWRWZXJzaW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBZYS5NZXRyaWthIHZlcnNpb24nKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tRdWV1ZU5hbWUodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSAnMScpIHJldHVybiAneWFuZGV4X21ldHJpa2FfY2FsbGJhY2tzJztcbiAgICBpZiAodmVyc2lvbiA9PT0gJzInKSByZXR1cm4gJ3lhbmRleF9tZXRyaWthX2NhbGxiYWNrczInO1xuICAgIGludmFsaWRWZXJzaW9uKCk7XG59XG5cbmZ1bmN0aW9uIHNjcmlwdFBhdGgodmVyc2lvbikge1xuICAgIGlmICh2ZXJzaW9uID09PSAnMScpIHJldHVybiAnaHR0cHM6Ly9tYy55YW5kZXgucnUvbWV0cmlrYS93YXRjaC5qcyc7XG4gICAgaWYgKHZlcnNpb24gPT09ICcyJykgcmV0dXJuICdodHRwczovL21jLnlhbmRleC5ydS9tZXRyaWthL3RhZy5qcyc7XG4gICAgaW52YWxpZFZlcnNpb24oKTtcbn1cblxuZnVuY3Rpb24gdHJhY2tlckNvbnN0cnVjdG9yTmFtZSh2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09ICcxJykgcmV0dXJuICdNZXRyaWthJztcbiAgICBpZiAodmVyc2lvbiA9PT0gJzInKSByZXR1cm4gJ01ldHJpa2EyJztcbiAgICBpbnZhbGlkVmVyc2lvbigpO1xufVxuXG5mdW5jdGlvbiB0cmFja2VySW5zdGFuY2VOYW1lKGlkKSB7XG4gICAgcmV0dXJuIGB5YUNvdW50ZXIke2lkfWA7XG59XG5cbmZ1bmN0aW9uIHRyYWNrZXJWZXJzaW9uTmFtZShpZCkge1xuICAgIHJldHVybiBgeWFDb3VudGVyVmVyc2lvbiR7aWR9YDtcbn1cblxuZXhwb3J0IHtcbiAgICBhY2NvdW50TGlzdE5hbWUsXG4gICAgY2FsbGJhY2tRdWV1ZU5hbWUsXG4gICAgc2NyaXB0UGF0aCxcbiAgICB0cmFja2VyQ29uc3RydWN0b3JOYW1lLFxuICAgIHRyYWNrZXJJbnN0YW5jZU5hbWUsXG4gICAgdHJhY2tlclZlcnNpb25OYW1lXG59O1xuIl19

/***/ }),

/***/ "./node_modules/react-yandex-metrika/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-yandex-metrika/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-env browser */


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withId = withId;
exports.withFilter = withFilter;
Object.defineProperty(exports, "YMInitializer", {
  enumerable: true,
  get: function get() {
    return _component.YMInitializer;
  }
});
exports["default"] = void 0;

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-yandex-metrika/lib/constants.js");

var _component = __webpack_require__(/*! ./component */ "./node_modules/react-yandex-metrika/lib/component.js");

function ymProxy(id, methodName) {
  try {
    var _window$trackerInstan;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    (_window$trackerInstan = window[(0, _constants.trackerInstanceName)(id)])[methodName].apply(_window$trackerInstan, args);
  } catch (ex) {
    console.warn(ex);
  }
}

function accountIdList() {
  return typeof window !== 'undefined' ? window[_constants.accountListName] : [];
}

function ymAsyncProxy(ids) {
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    ids.forEach(function (id) {
      var trackerVersion = window[(0, _constants.trackerVersionName)(id)];
      var callbackQueue = window[(0, _constants.callbackQueueName)(trackerVersion)];

      if (callbackQueue) {
        callbackQueue.push(function () {
          return ymProxy.apply(void 0, [id].concat(args));
        });
      } else {
        ymProxy.apply(void 0, [id].concat(args));
      }
    });
  };
}

function ym() {
  return ymAsyncProxy(accountIdList()).apply(void 0, arguments);
}

function withId(counterId) {
  return withFilter(function (id) {
    return counterId === id;
  });
}

function withFilter(f) {
  return ymAsyncProxy(accountIdList().filter(f));
}

var _default = ym;
exports["default"] = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUE4Q0E7O0FBdkNBLFNBQVMsT0FBVCxDQUFpQixFQUFqQixFQUFxQixVQUFyQixFQUEwQztBQUN0QyxNQUFJO0FBQUE7O0FBQUEsc0NBRDRCLElBQzVCO0FBRDRCLE1BQUEsSUFDNUI7QUFBQTs7QUFDQSw2QkFBQSxNQUFNLENBQUMsb0NBQW9CLEVBQXBCLENBQUQsQ0FBTixFQUFnQyxVQUFoQywrQkFBK0MsSUFBL0M7QUFDSCxHQUZELENBRUUsT0FBTyxFQUFQLEVBQVc7QUFDVCxJQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsRUFBYjtBQUNIO0FBQ0o7O0FBRUQsU0FBUyxhQUFULEdBQXlCO0FBQ3JCLFNBQU8sT0FBTyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDLE1BQU0sQ0FBQywwQkFBRCxDQUF0QyxHQUEwRCxFQUFqRTtBQUNIOztBQUVELFNBQVMsWUFBVCxDQUFzQixHQUF0QixFQUEyQjtBQUN2QixTQUFPLFlBQW1CO0FBQUEsdUNBQU4sSUFBTTtBQUFOLE1BQUEsSUFBTTtBQUFBOztBQUN0QixJQUFBLEdBQUcsQ0FBQyxPQUFKLENBQVksVUFBQSxFQUFFLEVBQUk7QUFDZCxVQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsbUNBQW1CLEVBQW5CLENBQUQsQ0FBM0I7QUFDQSxVQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsa0NBQWtCLGNBQWxCLENBQUQsQ0FBMUI7O0FBQ0EsVUFBSSxhQUFKLEVBQW1CO0FBQ2YsUUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQjtBQUFBLGlCQUFNLE9BQU8sTUFBUCxVQUFRLEVBQVIsU0FBZSxJQUFmLEVBQU47QUFBQSxTQUFuQjtBQUNILE9BRkQsTUFFTztBQUNILFFBQUEsT0FBTyxNQUFQLFVBQVEsRUFBUixTQUFlLElBQWY7QUFDSDtBQUNKLEtBUkQ7QUFTSCxHQVZEO0FBV0g7O0FBRUQsU0FBUyxFQUFULEdBQXFCO0FBQ2pCLFNBQU8sWUFBWSxDQUFDLGFBQWEsRUFBZCxDQUFaLHlCQUFQO0FBQ0g7O0FBRU0sU0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCO0FBQzlCLFNBQU8sVUFBVSxDQUFDLFVBQUEsRUFBRTtBQUFBLFdBQUksU0FBUyxLQUFLLEVBQWxCO0FBQUEsR0FBSCxDQUFqQjtBQUNIOztBQUVNLFNBQVMsVUFBVCxDQUFvQixDQUFwQixFQUF1QjtBQUMxQixTQUFPLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBaEIsQ0FBdUIsQ0FBdkIsQ0FBRCxDQUFuQjtBQUNIOztlQUVjLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtcbiAgICBhY2NvdW50TGlzdE5hbWUsXG4gICAgY2FsbGJhY2tRdWV1ZU5hbWUsXG4gICAgdHJhY2tlckluc3RhbmNlTmFtZSxcbiAgICB0cmFja2VyVmVyc2lvbk5hbWVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiB5bVByb3h5KGlkLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgd2luZG93W3RyYWNrZXJJbnN0YW5jZU5hbWUoaWQpXVttZXRob2ROYW1lXSguLi5hcmdzKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLndhcm4oZXgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWNjb3VudElkTGlzdCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3dbYWNjb3VudExpc3ROYW1lXSA6IFtdO1xufVxuXG5mdW5jdGlvbiB5bUFzeW5jUHJveHkoaWRzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgIGxldCB0cmFja2VyVmVyc2lvbiA9IHdpbmRvd1t0cmFja2VyVmVyc2lvbk5hbWUoaWQpXTtcbiAgICAgICAgICAgIGxldCBjYWxsYmFja1F1ZXVlID0gd2luZG93W2NhbGxiYWNrUXVldWVOYW1lKHRyYWNrZXJWZXJzaW9uKV07XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrUXVldWUucHVzaCgoKSA9PiB5bVByb3h5KGlkLCAuLi5hcmdzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHltUHJveHkoaWQsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB5bSguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHltQXN5bmNQcm94eShhY2NvdW50SWRMaXN0KCkpKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aElkKGNvdW50ZXJJZCkge1xuICAgIHJldHVybiB3aXRoRmlsdGVyKGlkID0+IGNvdW50ZXJJZCA9PT0gaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEZpbHRlcihmKSB7XG4gICAgcmV0dXJuIHltQXN5bmNQcm94eShhY2NvdW50SWRMaXN0KCkuZmlsdGVyKGYpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgeW07XG5leHBvcnQgeyBZTUluaXRpYWxpemVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuIl19

/***/ }),

/***/ "./node_modules/react-yandex-metrika/lib/init.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-yandex-metrika/lib/init.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = init;

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-yandex-metrika/lib/constants.js");

/* eslint-env browser */

/* global Ya */
function init(accounts) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';
  var callbackQueue = (0, _constants.callbackQueueName)(version);
  window[_constants.accountListName] = window[_constants.accountListName] || [];
  window[_constants.accountListName] = window[_constants.accountListName].concat(accounts);
  window[callbackQueue] = window[callbackQueue] || [];
  window[callbackQueue].push(function () {
    accounts.forEach(function (id) {
      var defaultOptions = {
        id: id
      };

      try {
        window[(0, _constants.trackerInstanceName)(id)] = new Ya[(0, _constants.trackerConstructorName)(version)](Object.assign(defaultOptions, options));
      } catch (ex) {
        console.warn(ex);
      }
    });
  });
  accounts.forEach(function (id) {
    window[(0, _constants.trackerVersionName)(id)] = version;
  });
}

;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFIQTs7QUFDQTtBQVVlLFNBQVMsSUFBVCxDQUFjLFFBQWQsRUFBcUQ7QUFBQSxNQUE3QixPQUE2Qix1RUFBbkIsRUFBbUI7QUFBQSxNQUFmLE9BQWUsdUVBQUwsR0FBSztBQUNoRSxNQUFJLGFBQWEsR0FBRyxrQ0FBa0IsT0FBbEIsQ0FBcEI7QUFDQSxFQUFBLE1BQU0sQ0FBQywwQkFBRCxDQUFOLEdBQTBCLE1BQU0sQ0FBQywwQkFBRCxDQUFOLElBQTJCLEVBQXJEO0FBQ0EsRUFBQSxNQUFNLENBQUMsMEJBQUQsQ0FBTixHQUEwQixNQUFNLENBQUMsMEJBQUQsQ0FBTixDQUF3QixNQUF4QixDQUErQixRQUEvQixDQUExQjtBQUNBLEVBQUEsTUFBTSxDQUFDLGFBQUQsQ0FBTixHQUF3QixNQUFNLENBQUMsYUFBRCxDQUFOLElBQXlCLEVBQWpEO0FBQ0EsRUFBQSxNQUFNLENBQUMsYUFBRCxDQUFOLENBQXNCLElBQXRCLENBQTJCLFlBQU07QUFDN0IsSUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFBLEVBQUUsRUFBSTtBQUNuQixVQUFJLGNBQWMsR0FBRztBQUFDLFFBQUEsRUFBRSxFQUFGO0FBQUQsT0FBckI7O0FBRUEsVUFBSTtBQUNBLFFBQUEsTUFBTSxDQUFDLG9DQUFvQixFQUFwQixDQUFELENBQU4sR0FBa0MsSUFBSSxFQUFFLENBQUMsdUNBQXVCLE9BQXZCLENBQUQsQ0FBTixDQUM5QixNQUFNLENBQUMsTUFBUCxDQUFjLGNBQWQsRUFBOEIsT0FBOUIsQ0FEOEIsQ0FBbEM7QUFHSCxPQUpELENBSUUsT0FBTyxFQUFQLEVBQVc7QUFDVCxRQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsRUFBYjtBQUNIO0FBQ0osS0FWRDtBQVdILEdBWkQ7QUFhQSxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsRUFBRSxFQUFJO0FBQ25CLElBQUEsTUFBTSxDQUFDLG1DQUFtQixFQUFuQixDQUFELENBQU4sR0FBaUMsT0FBakM7QUFDSCxHQUZEO0FBR0g7O0FBQUEiLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLyogZ2xvYmFsIFlhICovXG5cbmltcG9ydCB7XG4gICAgYWNjb3VudExpc3ROYW1lLFxuICAgIGNhbGxiYWNrUXVldWVOYW1lLFxuICAgIHRyYWNrZXJDb25zdHJ1Y3Rvck5hbWUsXG4gICAgdHJhY2tlckluc3RhbmNlTmFtZSxcbiAgICB0cmFja2VyVmVyc2lvbk5hbWVcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KGFjY291bnRzLCBvcHRpb25zID0ge30sIHZlcnNpb24gPSAnMScpIHtcbiAgICBsZXQgY2FsbGJhY2tRdWV1ZSA9IGNhbGxiYWNrUXVldWVOYW1lKHZlcnNpb24pO1xuICAgIHdpbmRvd1thY2NvdW50TGlzdE5hbWVdID0gd2luZG93W2FjY291bnRMaXN0TmFtZV0gfHwgW107XG4gICAgd2luZG93W2FjY291bnRMaXN0TmFtZV0gPSB3aW5kb3dbYWNjb3VudExpc3ROYW1lXS5jb25jYXQoYWNjb3VudHMpO1xuICAgIHdpbmRvd1tjYWxsYmFja1F1ZXVlXSA9IHdpbmRvd1tjYWxsYmFja1F1ZXVlXSB8fCBbXTtcbiAgICB3aW5kb3dbY2FsbGJhY2tRdWV1ZV0ucHVzaCgoKSA9PiB7XG4gICAgICAgIGFjY291bnRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0ge2lkfTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbdHJhY2tlckluc3RhbmNlTmFtZShpZCldID0gbmV3IFlhW3RyYWNrZXJDb25zdHJ1Y3Rvck5hbWUodmVyc2lvbildKFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGFjY291bnRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICB3aW5kb3dbdHJhY2tlclZlcnNpb25OYW1lKGlkKV0gPSB2ZXJzaW9uO1xuICAgIH0pO1xufTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/react-youtube/es/YouTube.js":
/*!**************************************************!*\
  !*** ./node_modules/react-youtube/es/YouTube.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/react-youtube/node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! youtube-player */ "./node_modules/youtube-player/dist/index.js");
/* harmony import */ var youtube_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(youtube_player__WEBPACK_IMPORTED_MODULE_3__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Check whether a `props` change should result in the video being updated.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdateVideo(prevProps, props) {
  // A changing video should always trigger an update
  if (prevProps.videoId !== props.videoId) {
    return true;
  }

  // Otherwise, a change in the start/end time playerVars also requires a player
  // update.
  var prevVars = prevProps.opts.playerVars || {};
  var vars = props.opts.playerVars || {};

  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}

/**
 * Neutralise API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} opts
 */
function filterResetOptions(opts) {
  return _extends({}, opts, {
    playerVars: _extends({}, opts.playerVars, {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}

/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.opts` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldResetPlayer(prevProps, props) {
  return !fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}

/**
 * Check whether a props change should result in an id or className update.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdatePlayer(prevProps, props) {
  return prevProps.id !== props.id || prevProps.className !== props.className;
}

var YouTube = function (_React$Component) {
  _inherits(YouTube, _React$Component);

  function YouTube(props) {
    _classCallCheck(this, YouTube);

    var _this = _possibleConstructorReturn(this, (YouTube.__proto__ || Object.getPrototypeOf(YouTube)).call(this, props));

    _this.onPlayerReady = function (event) {
      return _this.props.onReady(event);
    };

    _this.onPlayerError = function (event) {
      return _this.props.onError(event);
    };

    _this.onPlayerStateChange = function (event) {
      _this.props.onStateChange(event);
      switch (event.data) {

        case YouTube.PlayerState.ENDED:
          _this.props.onEnd(event);
          break;

        case YouTube.PlayerState.PLAYING:
          _this.props.onPlay(event);
          break;

        case YouTube.PlayerState.PAUSED:
          _this.props.onPause(event);
          break;

        default:
      }
    };

    _this.onPlayerPlaybackRateChange = function (event) {
      return _this.props.onPlaybackRateChange(event);
    };

    _this.onPlayerPlaybackQualityChange = function (event) {
      return _this.props.onPlaybackQualityChange(event);
    };

    _this.createPlayer = function () {
      // do not attempt to create a player server-side, it won't work
      if (typeof document === 'undefined') return;
      // create player
      var playerOpts = _extends({}, _this.props.opts, {
        // preload the `videoId` video if one is already given
        videoId: _this.props.videoId
      });
      _this.internalPlayer = youtube_player__WEBPACK_IMPORTED_MODULE_3___default()(_this.container, playerOpts);
      // attach event handlers
      _this.internalPlayer.on('ready', _this.onPlayerReady);
      _this.internalPlayer.on('error', _this.onPlayerError);
      _this.internalPlayer.on('stateChange', _this.onPlayerStateChange);
      _this.internalPlayer.on('playbackRateChange', _this.onPlayerPlaybackRateChange);
      _this.internalPlayer.on('playbackQualityChange', _this.onPlayerPlaybackQualityChange);
    };

    _this.resetPlayer = function () {
      return _this.internalPlayer.destroy().then(_this.createPlayer);
    };

    _this.updatePlayer = function () {
      _this.internalPlayer.getIframe().then(function (iframe) {
        if (_this.props.id) iframe.setAttribute('id', _this.props.id);else iframe.removeAttribute('id');
        if (_this.props.className) iframe.setAttribute('class', _this.props.className);else iframe.removeAttribute('class');
      });
    };

    _this.updateVideo = function () {
      if (typeof _this.props.videoId === 'undefined' || _this.props.videoId === null) {
        _this.internalPlayer.stopVideo();
        return;
      }

      // set queueing options
      var autoplay = false;
      var opts = {
        videoId: _this.props.videoId
      };
      if ('playerVars' in _this.props.opts) {
        autoplay = _this.props.opts.playerVars.autoplay === 1;
        if ('start' in _this.props.opts.playerVars) {
          opts.startSeconds = _this.props.opts.playerVars.start;
        }
        if ('end' in _this.props.opts.playerVars) {
          opts.endSeconds = _this.props.opts.playerVars.end;
        }
      }

      // if autoplay is enabled loadVideoById
      if (autoplay) {
        _this.internalPlayer.loadVideoById(opts);
        return;
      }
      // default behaviour just cues the video
      _this.internalPlayer.cueVideoById(opts);
    };

    _this.refContainer = function (container) {
      _this.container = container;
    };

    _this.container = null;
    _this.internalPlayer = null;
    return _this;
  }

  /**
    * Expose PlayerState constants for convenience. These constants can also be
    * accessed through the global YT object after the YouTube IFrame API is instantiated.
    * https://developers.google.com/youtube/iframe_api_reference#onStateChange
    */


  _createClass(YouTube, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createPlayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }

      if (shouldResetPlayer(prevProps, this.props)) {
        this.resetPlayer();
      }

      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      /**
       * Note: The `youtube-player` package that is used promisifies all Youtube
       * Player API calls, which introduces a delay of a tick before it actually
       * gets destroyed. Since React attempts to remove the element instantly
       * this method isn't quick enough to reset the container element.
       */
      this.internalPlayer.destroy();
    }

    /**
     * https://developers.google.com/youtube/iframe_api_reference#onReady
     *
     * @param {Object} event
     *   @param {Object} target - player object
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onError
     *
     * @param {Object} event
     *   @param {Integer} data  - error type
     *   @param {Object} target - player object
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onStateChange
     *
     * @param {Object} event
     *   @param {Integer} data  - status change type
     *   @param {Object} target - actual YT player
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
     *
     * @param {Object} event
     *   @param {Float} data    - playback rate
     *   @param {Object} target - actual YT player
     */


    /**
     * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
     *
     * @param {Object} event
     *   @param {String} data   - playback quality
     *   @param {Object} target - actual YT player
     */


    /**
     * Initialize the Youtube Player API on the container and attach event handlers
     */


    /**
     * Shorthand for destroying and then re-creating the Youtube Player
     */


    /**
     * Method to update the id and class of the Youtube Player iframe.
     * React should update this automatically but since the Youtube Player API
     * replaced the DIV that is mounted by React we need to do this manually.
     */


    /**
     * Call Youtube Player API methods to update the currently playing video.
     * Depeding on the `opts.playerVars.autoplay` this function uses one of two
     * Youtube Player API methods to update the video.
     */

  }, {
    key: 'render',
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        { className: this.props.containerClassName },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', { id: this.props.id, className: this.props.className, ref: this.refContainer })
      );
    }
  }]);

  return YouTube;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

YouTube.propTypes = {
  videoId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  // custom ID for player element
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  // custom class name for player element
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // custom class name for player container element
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  // https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
  opts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any),

  // event subscriptions
  onReady: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPlay: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPause: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPlaybackRateChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPlaybackQualityChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
YouTube.defaultProps = {
  id: null,
  className: null,
  opts: {},
  containerClassName: '',
  onReady: function onReady() {},
  onError: function onError() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onEnd: function onEnd() {},
  onStateChange: function onStateChange() {},
  onPlaybackRateChange: function onPlaybackRateChange() {},
  onPlaybackQualityChange: function onPlaybackQualityChange() {}
};
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};


/* harmony default export */ __webpack_exports__["default"] = (YouTube);

/***/ }),

/***/ "./node_modules/react-youtube/node_modules/fast-deep-equal/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-youtube/node_modules/fast-deep-equal/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/sister/src/sister.js":
/*!*******************************************!*\
  !*** ./node_modules/sister/src/sister.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

module.exports = Sister;


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/youtube-player/dist/FunctionStateMap.js":
/*!**************************************************************!*\
  !*** ./node_modules/youtube-player/dist/FunctionStateMap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(/*! ./constants/PlayerStates */ "./node_modules/youtube-player/dist/constants/PlayerStates.js");

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/youtube-player/dist/YouTubePlayer.js":
/*!***********************************************************!*\
  !*** ./node_modules/youtube-player/dist/YouTubePlayer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(/*! ./functionNames */ "./node_modules/youtube-player/dist/functionNames.js");

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(/*! ./eventNames */ "./node_modules/youtube-player/dist/eventNames.js");

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(/*! ./FunctionStateMap */ "./node_modules/youtube-player/dist/FunctionStateMap.js");

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/prefer-await-to-then */

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports.default = YouTubePlayer;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/youtube-player/dist/constants/PlayerStates.js":
/*!********************************************************************!*\
  !*** ./node_modules/youtube-player/dist/constants/PlayerStates.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/youtube-player/dist/eventNames.js":
/*!********************************************************!*\
  !*** ./node_modules/youtube-player/dist/eventNames.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/youtube-player/dist/functionNames.js":
/*!***********************************************************!*\
  !*** ./node_modules/youtube-player/dist/functionNames.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/youtube-player/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/youtube-player/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(/*! sister */ "./node_modules/sister/src/sister.js");

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(/*! ./loadYouTubeIframeApi */ "./node_modules/youtube-player/dist/loadYouTubeIframeApi.js");

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(/*! ./YouTubePlayer */ "./node_modules/youtube-player/dist/YouTubePlayer.js");

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports.default = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        // eslint-disable-line promise/prefer-await-to-then
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/youtube-player/dist/loadYouTubeIframeApi.js":
/*!******************************************************************!*\
  !*** ./node_modules/youtube-player/dist/loadYouTubeIframeApi.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(/*! load-script */ "./node_modules/load-script/index.js");

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (emitter) {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    } else {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
        if (error) {
          emitter.trigger('error', error);
        }
      });
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_products_ProductUnitPlate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/products/ProductUnitPlate */ "./components/products/ProductUnitPlate.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import NextHead from 'next/head';



var Product = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Product, _Component);

  var _super = _createSuper(Product);

  function Product() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Product);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Product, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return __jsx("div", {
        className: "jsx-1516201080"
      }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("div", {
        className: "jsx-1516201080" + " " + "container-fluid product-unit-wrapper pb-5"
      }, __jsx(_components_products_ProductUnitPlate__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: data
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1516201080"
      }, ".product-unit-wrapper.jsx-1516201080{position:relative;padding-bottom:80px;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxwYWdlc1xccHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBRytCLGtCQUNFLG9CQUNWLFVBQ1oiLCJmaWxlIjoiRzpcXE9TUGFuZWxcXGRvbWFpbnNcXGdtbmV4dDlcXHBhZ2VzXFxwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbi8vIGltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvZHVjdFVuaXRQbGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RVbml0UGxhdGUnO1xyXG5cclxuY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByb2R1Y3QtdW5pdC13cmFwcGVyIHBiLTVcIj5cclxuICAgICAgICAgICAgPFByb2R1Y3RVbml0UGxhdGUgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5wcm9kdWN0LXVuaXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qcm9kdWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICBjb25zdCBkYXRhID0geyBpZDogJycsIGNhdGVnb3J5OiAnJyB9O1xyXG4gIGRhdGEuaWQgPSBjb250ZXh0LnF1ZXJ5LmlkO1xyXG4gIGRhdGEuY2F0ZWdvcnkgPSBjb250ZXh0LnF1ZXJ5LmNhdGVnb3J5O1xyXG4gIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\pages\\\\product.js */"));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Product.getInitialProps = function _callee(context) {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = {
            id: '',
            category: ''
          };
          data.id = context.query.id;
          data.category = context.query.category;
          return _context.abrupt("return", {
            data: data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ 5:
/*!*******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fproduct&absolutePagePath=G%3A%5COSPanel%5Cdomains%5Cgmnext9%5Cpages%5Cproduct.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fproduct&absolutePagePath=G%3A%5COSPanel%5Cdomains%5Cgmnext9%5Cpages%5Cproduct.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fproduct&absolutePagePath=G%3A%5COSPanel%5Cdomains%5Cgmnext9%5Cpages%5Cproduct.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[5,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=product.js.map