webpackHotUpdate("static\\development\\pages\\page-documents.js",{

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
          className: "",
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
      }, ".other-new-plate.jsx-4011291110{display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:30px;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110{display:block;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110{border-radius:var(--border-radius);overflow:hidden;margin-bottom:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110 .detail-img.jsx-4011291110{max-width:100%;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .other-new-title.jsx-4011291110{color:var(--accent-dark);-webkit-text-decoration:none;text-decoration:none;display:block;margin-top:2px;font-size:14px;line-height:17px;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .other-new-title.jsx-4011291110:hover{-webkit-text-decoration:underline;text-decoration:underline;}@media (min-width:576px){.other-new-plate.jsx-4011291110{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;margin-bottom:15px;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110{height:150px;overflow:hidden;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110 .detail-img.jsx-4011291110{max-width:100%;}}@media (min-width:768px){.other-new.jsx-4011291110 .img-container.jsx-4011291110{height:230px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.other-new.jsx-4011291110 .img-container.jsx-4011291110 .detail-img.jsx-4011291110{max-width:100%;}}@media (min-width:992px){.other-new-plate.jsx-4011291110{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:30px;margin-bottom:30px;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110{height:155px;overflow:hidden;border-radius:var(--border-radius);}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110 .detail-img.jsx-4011291110{display:block;min-width:105%;height:105%;}}@media (min-width:1200px){.subheading-common.jsx-4011291110{display:block;margin-top:30px;}.other-new-plate.jsx-4011291110{padding-top:15px;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110{height:160px;overflow:hidden;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .img-container.jsx-4011291110 .detail-img.jsx-4011291110{max-width:100%;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .other-new-title.jsx-4011291110{margin-top:7px;font-size:15px;line-height:20px;font-weight:300;}.other-new-plate.jsx-4011291110 .other-new.jsx-4011291110 .other-new-title.jsx-4011291110:hover{-webkit-text-decoration:underline;text-decoration:underline;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuZXdzXFxPdGhlck5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERvQixBQUcwQixBQUtDLEFBR3FCLEFBTXBCLEFBR1UsQUFRQyxBQUtYLEFBTUEsQUFJRSxBQUtGLEFBT0UsQUFLRixBQU1BLEFBS0MsQUFPQSxBQUlHLEFBR0osQUFJRSxBQUdBLEFBTVcsYUE5RlEsQUE4QkYsQUFNaEIsQUFTQSxBQVlvQixBQU1wQixBQW1CQSxDQTdFcEIsQUErRG1CLEFBT0MsQ0E3RHBCLEFBMEJFLEFBWUEsQUFrQ0EsQUFHaUIsRUFWakIsUUE5RHFCLElBb0JyQixBQVNlLEFBa0JzQixBQUt2QixBQWNkLENBUEEsQUFjbUIsS0FsRkgsTUE4RGhCLElBdkNnQixFQTRERSxFQTFGSixBQXlERSxFQWpERyxRQXVCRSxDQVB2QixBQXNFRSxHQTdGRixBQXlEdUIsQUFpQ3JCLENBM0JBLE1BdkQyQyxLQVE3QixHQWVkLElBMkJBLE9BekNlLGNBNEJVLENBM0JWLE1BVGpCLFNBVW1CLGlCQUNuQixrRUEwQnVCLDZGQUNyQiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcbmV3c1xcT3RoZXJOZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIE90aGVyTmV3cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG90aGVyTmV3czogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG5ld3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbWF4ID0gbmV3cy5sZW5ndGggLSAxO1xyXG4gICAgbGV0IG1pbiA9IDE7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAoYXJyYXkubGVuZ3RoOyBhcnJheS5sZW5ndGggPCA0OyBmYWxzZSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgICBsZXQgbmV3SXRlbSA9IG5ld3NbaW5kZXhdO1xyXG4gICAgICBpZiAoIWFycmF5LmluY2x1ZGVzKG5ld0l0ZW0pKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG90aGVyTmV3czogYXJyYXkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG90aGVyTmV3cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBvdGhlck5ld3NDb250ZW50ID0gJ9CX0LDQs9GA0YPQt9C60LAuLi4nO1xyXG4gICAgb3RoZXJOZXdzQ29udGVudCA9IG90aGVyTmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXk9e2BvdGhlci0ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9e2Avbm92b3N0aT9pZD0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgIGFzPXtgL25vdm9zdGkvJHtpdGVtLmlkfWB9XHJcbiAgICAgICAgICBrZXk9e2BvdGhlci0ke2l0ZW0uaWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvdGhlci1uZXdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsLWltZ1wiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7aXRlbS5pbWd9YH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdGhlci1uZXctdGl0bGVcIj57aXRlbS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmhlYWRpbmctY29tbW9uXCI+0JvQtdC90YLQsCDQvdC+0LLQvtGB0YLQtdC5Ojwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBvdGhlci1uZXctcGxhdGVcIj57b3RoZXJOZXdzQ29udGVudH08L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLm90aGVyLW5ldy10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZGFyayk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTA1JTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5vdGhlci1uZXctdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5PdGhlck5ld3MucHJvcFR5cGVzID0ge1xyXG4gIG5ld3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3RoZXJOZXdzO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\news\\\\OtherNews.js */"));
    }
  }]);

  return OtherNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

OtherNews.propTypes = {
  news: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OtherNews);

/***/ })

})
//# sourceMappingURL=page-documents.js.a9cb553108275b4b2d23.hot-update.js.map