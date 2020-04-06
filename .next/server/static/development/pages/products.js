module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./components/nav.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-yandex-metrika */ "react-yandex-metrika");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { Spring } from 'react-spring';
// import * as gtag from '../lib/gtag';


 // Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4___default()('hit', next_router__WEBPACK_IMPORTED_MODULE_1___default.a.router.asPath);
  }

  render() {
    return __jsx("div", null, __jsx(_nav__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
      className: "header-block"
    }), __jsx(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_4__["YMInitializer"], {
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
    }), this.props.children, __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\Link.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/YoutubeVideo.js":
/*!************************************!*\
  !*** ./components/YoutubeVideo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "n4w_VCaN6C8",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUVpRSxBQUVsQyxBQU1aLEFBSUssQUFNSSxBQUtBLE1BZGpCLEtBSWtCLEVBTWhCLEFBS0EsS0FyQm1CLFNBV3JCLFVBVmEsV0FDRSxhQUNmIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNsYXNzIFlvdXR1YmVWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cIm40d19WQ2FONkM4XCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW87XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideo.js */"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideo);

/***/ }),

/***/ "./components/YoutubeVideo1.js":
/*!*************************************!*\
  !*** ./components/YoutubeVideo1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideo1 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "Fx49gM4Hubo",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW8xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFFaUUsQUFFbEMsQUFNWixBQUlLLEFBTUksQUFLQSxNQWRqQixLQUlrQixFQU1oQixBQUtBLEtBckJtQixTQVdyQixVQVZhLFdBQ0UsYUFDZiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcWW91dHViZVZpZGVvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5cclxuY2xhc3MgWW91dHViZVZpZGVvMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cIkZ4NDlnTTRIdWJvXCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW8xO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideo1.js */"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideo1);

/***/ }),

/***/ "./components/YoutubeVideoLiebherr2.js":
/*!*********************************************!*\
  !*** ./components/YoutubeVideoLiebherr2.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideoLiebherr2 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "90qHCKkm7s0",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW9MaWViaGVycjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUVpRSxBQUVsQyxBQU1aLEFBSUssQUFNSSxBQUtBLE1BZGpCLEtBSWtCLEVBTWhCLEFBS0EsS0FyQm1CLFNBV3JCLFVBVmEsV0FDRSxhQUNmIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW9MaWViaGVycjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNsYXNzIFlvdXR1YmVWaWRlb0xpZWJoZXJyMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cIjkwcUhDS2ttN3MwXCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW9MaWViaGVycjI7XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideoLiebherr2.js */"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideoLiebherr2);

/***/ }),

/***/ "./components/YoutubeVideoMan.js":
/*!***************************************!*\
  !*** ./components/YoutubeVideoMan.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideoMan extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "aySXIrHSjHY",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW9NYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUVpRSxBQUVsQyxBQU1aLEFBSUssQUFNSSxBQUtBLE1BZGpCLEtBSWtCLEVBTWhCLEFBS0EsS0FyQm1CLFNBV3JCLFVBVmEsV0FDRSxhQUNmIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW9NYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcclxuXHJcbmNsYXNzIFlvdXR1YmVWaWRlb01hbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cImF5U1hJckhTakhZXCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW9NYW47XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideoMan.js */"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideoMan);

/***/ }),

/***/ "./components/YoutubeVideoMan2.js":
/*!****************************************!*\
  !*** ./components/YoutubeVideoMan2.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class YoutubeVideoMan2 extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "myVideo",
      videoId: "iELYVfffzHQ",
      opts: opts,
      onReady: this._onReady
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxZb3V0dWJlVmlkZW9NYW4yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IsQUFFaUUsQUFFbEMsQUFNWixBQUlLLEFBTUksQUFLQSxNQWRqQixLQUlrQixFQU1oQixBQUtBLEtBckJtQixTQVdyQixVQVZhLFdBQ0UsYUFDZiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcWW91dHViZVZpZGVvTWFuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xyXG5cclxuY2xhc3MgWW91dHViZVZpZGVvTWFuMiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgcGxheWVyVmFyczoge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcclxuICAgICAgICBhdXRvcGxheTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFlvdVR1YmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgdmlkZW9JZD1cImlFTFlWZmZmekhRXCJcclxuICAgICAgICAgIG9wdHM9e29wdHN9XHJcbiAgICAgICAgICBvblJlYWR5PXt0aGlzLl9vblJlYWR5fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vblJlYWR5KGV2ZW50KSB7XHJcbiAgICAvLyBhY2Nlc3MgdG8gcGxheWVyIGluIGFsbCBldmVudCBoYW5kbGVycyB2aWEgZXZlbnQudGFyZ2V0XHJcbiAgICBldmVudC50YXJnZXQucGF1c2VWaWRlbygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBZb3V0dWJlVmlkZW9NYW4yO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\YoutubeVideoMan2.js */"));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeVideoMan2);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables/serviceList */ "./components/tables/serviceList.js");
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("footer", {
  className: "jsx-2510472162" + " " + "footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "gaz-mash",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "dots-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "white-stripe",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "row m-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "footer-logo-container",
  __self: undefined,
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 15
  }
})))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 11
  }
}, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 11
  }
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2510472162" + " " + "link-map-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: as,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 19
  }
}, label)))), __jsx("a", {
  href: "/calculator",
  className: "jsx-2510472162" + " " + "footer-button calc-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 13
  }
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), __jsx("a", {
  href: "/askForm",
  className: "jsx-2510472162" + " " + "footer-button askForm-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }
}, "\u0423\u0441\u043B\u0443\u0433\u0438:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 11
  }
}, _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => __jsx("li", {
  key: item.key,
  className: "jsx-2510472162" + " " + "link-map-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 15
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/uslugi/${item.href}`,
  as: `/uslugi/${item.as}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 19
  }
}, item.label)))))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "contacts-header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 11
  }
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "adres-list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 11
  }
}, __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "https://yandex.ru/maps/-/CBFyIKsQPB",
  target: "_blank",
  className: "jsx-2510472162" + " " + "adres-map-link pb-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 15
  }
}, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", __jsx("br", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 17
  }
}), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "adres-phones",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 15
  }
}, __jsx("a", {
  href: "tel:+74852260368",
  className: "jsx-2510472162" + " " + "phone-link phone-link-big",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 17
  }
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 22
  }
}, "(4852)"), " 26-03-68"), __jsx("a", {
  href: "tel:+74852267960",
  className: "jsx-2510472162" + " " + "phone-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 17
  }
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 22
  }
}, "(4852)"), " 26-79-60"))), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }
}, __jsx("a", {
  href: "mailto:market@gmenergo.ru",
  className: "jsx-2510472162" + " " + "adres-email",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 15
  }
}, "market@gmenergo.ru")), __jsx("li", {
  className: "jsx-2510472162",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 13
  }
})), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 11
  }
}, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 11
  }
}, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "intersell",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }
}, __jsx("a", {
  href: "http://intersell.su/",
  className: "jsx-2510472162" + " " + "interlink",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 11
  }
}, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 11
  }
}, "intersell.su")), __jsx("div", {
  className: "jsx-2510472162" + " " + "logo-cont",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 9
  }
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 11
  }
}, "IS")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "rights-reserved",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2510472162",
  __self: undefined
}, ".text-grey.jsx-2510472162{color:#e5e5e5;}.footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}.footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}.footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}.footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}.footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}.footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdnQixBQUd1QixBQUlBLEFBYUYsQUFJSSxBQVFFLEFBY0wsQUFPQyxBQU1nQixBQVdoQixBQUlDLEFBTUwsQUFHQyxBQVNBLEFBSW1CLEFBVWhCLEFBTWdCLEFBVWQsQUFNTixBQUlJLEFBUUQsQUFHRixBQVNPLEFBZVAsQUFLRCxBQUdlLEFBY2YsQUFXSSxBQVlKLEFBU0ksQUFRQSxBQVdJLEFBR0QsQUFHYyxBQUdiLEFBR0EsQUFNQSxBQUdGLEFBU0EsQUFlRyxBQUdILEFBWUksQUFVWCxBQVNPLEFBTUosQUFJTSxBQUdELEFBR2MsQUFHWixBQUtELEFBTUEsQUFHRixPQXpDTixHQXRPWixBQWdEb0IsQUE0Q3BCLEFBaUJ5QixBQXVCQSxBQWlIUCxDQWxQRixBQVNBLEFBbURFLEFBd0JMLENBbkorQixDQXdINUMsQ0F6SUEsQUFJYyxBQThDRCxBQWlCQyxBQW9DRCxBQTBCRyxBQW9FSSxBQXFCSixBQVFBLEFBZ0NFLEFBU0ksQUFrQkEsQUErQlAsQUFpQ0csQ0F0UkgsQUF5S2IsQUFvRVUsQUFxQlYsQ0FwVGdCLEFBa0dELEFBc0hmLEFBU0EsQUFHaUIsQUFNakIsQUF1RUEsQUFjaUIsQUFNakIsQ0FoRUEsQUFxRGtCLENBbFRKLEFBd0hILEFBb0pHLElBcElKLENBZ0pHLENBY2IsQ0FoUlksQUE4QkcsQUFTakIsQUFjb0IsQUFvRUosQUFpSkEsQ0F4VEYsQUErRGQsQ0F5RW9CLENBZnBCLEFBSWEsQUF5RkssQUFRQSxBQWdDSCxBQTJGQSxDQXhNSyxBQTZGbEIsQUF5RkEsQ0FwUmMsQUFxQ0EsQUFnQkEsQUE2TEMsQ0FsTEYsQUFrSUUsQUEyRkEsQ0EvVEUsQUFRUCxBQXdJWixBQWdDYSxBQXNFSSxBQWtCRixDQWtERyxDQTFCRCxHQWxRSSxBQTBRRSxDQXhURSxDQTZIUixBQTBDRyxBQXVGQSxBQTJGQSxDQTdRRixFQW5EVCxDQTBFUSxBQThGUCxBQXdGbUIsQUFZakIsQ0FsUEMsQUFxQ0csQUFnQkgsQUE4R00sQUFRUSxDQXRGYixBQStISCxFQXRIQSxBQWdLZ0IsQUEwQnpCLEVBMVRvQixBQVNaLEVBZFYsQUFzTFcsQUFvR0csQ0E5QlMsRUExSUwsQ0ExRUksQUFxREEsQUFzSkgsQUEyRkMsQ0EzU3BCLEFBOEJtQixBQXFFVCxBQXVLUixDQTlSUSxBQThHSSxBQStCRixDQS9FTSxBQVdsQixFQStGYSxDQWxNTyxBQXNOSCxBQWdGQSxHQXBKRixDQXZIWSxFQTZJZixDQWlIRSxDQXhRaUQsQUF3SHBELEFBcUZNLENBaEdFLEFBaUlDLENBNUROLEFBcUVRLEFBa0ZILEVBN1FELENBekNPLEFBcURSLEFBOE1ILENBblBPLEFBcURBLENBOEdFLENBOUNWLENBL0JDLEFBZ0pBLENBelJBLElBbU1PLENBMkJGLEFBeUU4QyxFQXhDNUMsQUEyRkEsQ0E1TnJCLENBMkNhLEFBaUhBLENBMU5XLEFBYUQsQUFZRixBQStLRixDQTlIbkIsQ0F6SXFCLEFBa0xXLEFBdUJoQixNQWlGSixFQWpIRSxFQXFESSxDQTNCZ0IsQ0E0RGhDLEFBMkZBLENBbEZjLENBeEpRLEFBMEZKLEFBd0NNLEFBeUNmLEFBa0RlLEtBNVVQLENBeUtDLENBa0hKLElBbkJLLENBMUNyQixJQTVDb0IsRUF3QlAsQ0FrRlgsR0EzUmtCLENBY0EsQUErUjJDLENBcEkvQyxJQStGQSxDQTlERixJQTNEVyxDQW1DTixJQVJDLEVBektPLEFBd1F6QixBQTRCQSxDQXRSRixBQTRMbUIsTUFuTE4sSUEySk8sS0FSVyxFQWxKaEIsQUFtTGYsSUE5SXFCLENBYkosQUFxREEsRUFwR0MsR0ErQkcsQ0FtSkwsRUExSkQsQ0EwTGYsS0E3SG1CLENBckNBLEFBcURBLEFBUW5CLEFBa0lFLEFBMkZBLEdBelVGLEFBNERBLENBK09FLENBekhlLENBMUo2QyxDQWdEOUQsU0FhZ0IsQ0FyQ0ssQUFxRE0sR0E4RVEsSUFZVixNQXpHekIsTUFyQzJCLE1BcUQzQixFQW1FQSxHQXVCQSxPQW5EeUIsT0EzRnpCLEtBekIwQixpQkFNYixPQUxiLElBTWlCLEFBb0pqQixlQW5KQSxzREE2R2MsWUFDQSxZQUNBLFlBQ1csdUJBQ0Msb0ZBQzFCIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgc2VydmljZUxpc3QgZnJvbSAnLi90YWJsZXMvc2VydmljZUxpc3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhei1tYXNoXCIgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90cy1yaWdodFwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlLXN0cmlwZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLWJpZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ29cIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwi0J7QntCeINCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cItCb0L7Qs9C+0YLQuNC/IC0g0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLWxnLTMgbGluay1tYXBcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmstbWFwLWhlYWRlclwiPtCa0LDRgNGC0LAg0YHQsNC50YLQsDo8L3NwYW4+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGluay1tYXAtbGlzdFwiPlxyXG4gICAgICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rLW1hcC1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntsYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvY2FsY3VsYXRvclwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gY2FsYy1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0JrQsNC70YzQutGD0LvRj9GC0L7RgFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXNrRm9ybVwiIGNsYXNzTmFtZT1cImZvb3Rlci1idXR0b24gYXNrRm9ybS1saW5rXCI+XHJcbiAgICAgICAgICAgICAg0J7Qv9GA0L7RgdC90YvQuSDQu9C40YHRglxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1sZy01IGxpbmstbWFwXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLW1hcC1oZWFkZXJcIj7Qo9GB0LvRg9Cz0Lg6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmstbWFwLWxpc3RcIj5cclxuICAgICAgICAgICAge3NlcnZpY2VMaXN0Lm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluay1tYXAtaXRlbVwiIGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2x1Z2kvJHtpdGVtLmhyZWZ9YH0gYXM9e2AvdXNsdWdpLyR7aXRlbS5hc31gfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluay1tYXAtbGlua1wiPntpdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRhY3RzLWhlYWRlclwiPtCa0L7QvdGC0LDQutGC0Ys6PC9zcGFuPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFkcmVzLWxpc3RcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly95YW5kZXgucnUvbWFwcy8tL0NCRnlJS3NRUEJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRyZXMtbWFwLWxpbmsgcGItM1wiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDE1MDA2Miwg0KDQvtGB0YHQuNGPLCDQsy4g0K/RgNC+0YHQu9Cw0LLQu9GMLFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICDQv9GALdGCLiZuYnNwO9CQ0LLQuNCw0YLQvtGA0L7Qsi0xNTVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkcmVzLXBob25lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cInRlbDorNzQ4NTIyNjAzNjhcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwaG9uZS1saW5rIHBob25lLWxpbmstYmlnXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgKzcgPGIgY2xhc3NOYW1lPVwidGV4dC1ncmV5XCI+KDQ4NTIpPC9iPiAyNi0wMy02OFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNzQ4NTIyNjc5NjBcIiBjbGFzc05hbWU9XCJwaG9uZS1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICs3IDxiIGNsYXNzTmFtZT1cInRleHQtZ3JleVwiPig0ODUyKTwvYj4gMjYtNzktNjBcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bWFya2V0QGdtZW5lcmdvLnJ1XCIgY2xhc3NOYW1lPVwiYWRyZXMtZW1haWxcIj5cclxuICAgICAgICAgICAgICAgIG1hcmtldEBnbWVuZXJnby5ydVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIC8+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay0xXCI+0LPRgNCw0YTQuNC6INGA0LDQsdC+0YLRizo8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLTFcIj7Qv9C9LdC/0YI6IDk6MDAtMTg6MDA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyc2VsbFwiPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cDovL2ludGVyc2VsbC5zdS9cIiBjbGFzc05hbWU9XCJpbnRlcmxpbmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWRlc2NyaXB0aW9uXCI+0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1uYW1lXCI+aW50ZXJzZWxsLnN1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+SVM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodHMtcmVzZXJ2ZWRcIj5cclxuICAgICAgMjAwNiAtIDIwMTkg0J7QntCeIFwi0JPQsNC30L7QstGL0LUg0LzQsNGI0LjQvdGLXCIgJmNvcHk7INCS0YHQtSDQv9GA0LDQstCwINC30LDRidC40YnQtdC90YsuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb290ZXItYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXItYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCAjMzUzNTM1IDAlLCAjMmYyZjJmIDEwMCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvYmctZ2F6LW1hc2gucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5mb290ZXItbG9nby1jb250YWluZXIgLmZvb3Rlci1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5jb250YWN0cy1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbC1ncmV5KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAubGluay0xIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLXBob25lcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1lbWFpbCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWwtZ3JleSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IC5saW5rLW1hcC1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtbGlzdCAubGluay1tYXAtaXRlbSAubGluay1tYXAtbGluayB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCBhdXRvO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluazpob3ZlciAubG9nby1jb250IHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rOmhvdmVyIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3RlciAuaW50ZXJzZWxsIC5pbnRlcmxpbmsgLmxvZ28tY29udCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NTlkOTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXIgLmludGVyc2VsbCAuaW50ZXJsaW5rIC5sb2dvLWNvbnQgLmxvZ28ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4gMC4ycztcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAubG9nby1jb250OjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgxMGRlZyk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9vdGVyIC5pbnRlcnNlbGwgLmludGVybGluayAudGV4dC1jb250YWluZXIgLmxvZ28tbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICMyNzU5ZDk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3QgLmFkcmVzLW1hcC1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtcGhvbmVzIC5waG9uZS1saW5rIHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5saW5rLW1hcCAubGluay1tYXAtaGVhZGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAucmlnaHRzLXJlc2VydmVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC53aGl0ZS1zdHJpcGUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgIHRvcDogNThweDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuZG90cy1yaWdodCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogNDYwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2MHB4O1xyXG4gICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICByaWdodDogLTUlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4wNTtcclxuICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvZG90cy1iaWctd2hpdGUucG5nJykgMCUgMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5nYXotbWFzaCB7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL2JnLWdhei1tYXNoLnBuZycpIDUlIDEwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmZvb3Rlci1sb2dvLWNvbnRhaW5lciAuZm9vdGVyLWxvZ28ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmNvbnRhY3RzLWhlYWRlciB7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmFkcmVzLWxpc3Qge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAuYWRyZXMtbGlzdCAuYWRyZXMtbWFwLWxpbmsge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIC5hZHJlcy1saXN0IC5hZHJlcy1waG9uZXMgLnBob25lLWxpbmsge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1oZWFkZXIge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIgLmxpbmstbWFwIC5saW5rLW1hcC1saXN0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0ge1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3RlciAubGluay1tYXAgLmxpbmstbWFwLWxpc3QgLmxpbmstbWFwLWl0ZW0gLmxpbmstbWFwLWxpbmsge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = [{
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
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
var _jsxFileName = "G:\\OSPanel\\domains\\gmnext9\\components\\nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = () => __jsx("nav", {
  className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "navbar-brand",
  __self: undefined,
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
  __self: undefined,
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "navbar-toggler-icon-mine",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
})), __jsx("div", {
  id: "navbarNav",
  className: "jsx-2809465157" + " " + "collapse navbar-collapse",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx("ul", {
  className: "jsx-2809465157" + " " + "navbar-nav",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2809465157" + " " + "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  activeClassName: "active",
  href: href,
  as: as,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "nav-link",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 15
  }
}, label)))), __jsx("li", {
  className: "jsx-2809465157" + " " + "nav-item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-2809465157" + " " + "contacts-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 11
  }
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "lorem",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), __jsx("span", {
  className: "jsx-2809465157" + " " + "tel",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}, "+7 (4852) 26\xB703\xB768, 26\xB779\xB760"), __jsx("span", {
  className: "jsx-2809465157" + " " + "pochta",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}, "market@gmenergo.ru"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2809465157",
  __self: undefined
}, "body{margin:0;}.navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUdrQixBQUlpQixBQVlaLEFBSUksQUFHTCxBQU9LLEFBWUYsQUFHQSxBQUdFLEFBUUosQUFNQSxBQUtHLEFBT0YsQUFNUyxBQUdOLEFBaUJQLEFBR3dCLEFBSXZCLEFBSUssQUFRTixBQVNGLEFBS1UsQUFJRixBQUdBLEFBR1UsQUFNUixBQVFILEFBS0csQUFPSixBQU9lLEFBSWQsQUFJTCxBQUdNLEFBS0UsQUFJSCxBQUdDLEFBSUcsQUFNRCxBQVFILEFBUUcsQUFPRixTQXZPbkIsQUFnSUEsQUF3REUsRUFwRkYsQUFtQm9CLENBWk4sRUEzRkEsQUF3Q0csQUFNQyxBQStGRSxBQXVCSixBQWdCZCxBQXFCaUIsQ0EvSUQsQUErRGhCLEFBR0EsQUErQ0EsQUFZa0IsQUFpQ0UsQ0E5THRCLEFBR0EsQ0FzQmlCLEFBNENKLEFBc0JXLEFBZ0JOLEFBYUMsQUE4QmpCLEFBaUJnQixBQWdCQyxDQTdNbkIsQUFVb0IsQUFrQkEsQUFtQ1AsQUF3SFEsTUEzSHJCLEFBNEJBLENBbUNzQixDQTNJZCxBQWFSLEFBb0tFLEVBckVXLEFBZ0VzQixDQXZIZCxBQTJCTCxBQW9DSCxBQWtHUSxDQTNKUCxBQStGVyxDQW5GVCxBQTJFSSxBQWtEbEIsQUFVa0IsQ0E3TVgsQUErRE8sQUErRkUsQUErREEsQ0FPaEIsRUFsSTJCLEFBcUdQLENBN0tJLEFBa0JELENBcUZ2QixFQWhJUSxBQTJHTSxDQVFILEVBekRiLENBcUJXLEFBMkRVLEVBcEVELENBUE0sQUErRk4sQUF1REEsQUFRQSxDQTVOUCxBQWdKTSxBQTREQSxJQXpGQSxDQXBDTixDQTRCTyxBQTJGQyxLQXJNSCxDQTBDQyxBQStIakIsQ0FqSlMsQUFpSFUsRUF6Q3JCLEFBZ0R1QixBQWFBLEFBK0NFLEFBUUMsQUFRSCxDQXZKdkIsQUFVVyxLQW9DRixDQTFGRSxDQXFDVSxBQXdJbkIsQ0EzRkYsQ0EzQlcsRUEvRVUsQUFjRyxBQWtKRCxDQTdDYixDQXpFWSxDQStGcEIsQ0FoSDJCLEdBdURBLEVBb0M3QixVQW5IaUMsR0EwQ2Isa0JBQ3BCLFFBS2dCLEVBL0NFLE9Bb0poQixLQXBHRixJQS9DbUQsR0E4SnRCLFNBbEpKLEdBaUlQLEFBYWhCLEFBK0RBLFFBOUpGLEFBOElrQixJQVFBLEVBbkVoQixFQXZIZSxHQTREZCxHQXVIRCxJQVFBLEtBak5GLEFBdUJrQixnQkFDNEIsc0NBc0k1QyxHQXJJcUIsUUFiWCxVQUNRLGNBc0VFLElBckV0Qiw0Q0FzRUEscUJBMURBIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28tZ3JleS5wbmdcIlxyXG4gICAgICAgICAgdGl0bGU9XCLQn9C10YDQtdC50YLQuCDQvdCwINCz0LvQsNCy0L3Rg9GOXCJcclxuICAgICAgICAgIGFsdD1cItCb0L7Qs9C+0YLQuNC/INCT0LDQt9C+0LLRi9C1INCc0LDRiNC40L3Ri1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2XCJcclxuICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXHJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb24tbWluZVwiIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICB7bWVudS5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgYXMgfSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtocmVmfSBhcz17YXN9PlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvcmVtXCI+0K3QvdC10YDQs9C10YLQuNGH0LXRgdC60L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbFwiPlxyXG4gICAgICAgICAgICAgICs3ICg0ODUyKSAyNiZtaWRkb3Q7MDMmbWlkZG90OzY4LCAyNiZtaWRkb3Q7NzkmbWlkZG90OzYwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9jaHRhXCI+bWFya2V0QGdtZW5lcmdvLnJ1PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICA6Z2xvYmFsKGJvZHkpIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzNXB4IDMwcHggLTMwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW06bnRoLWNoaWxkKDIpOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6ICfQvdC+0LLQuNC90LrQsCc7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgIGxlZnQ6IDcwJTtcclxuICAgICAgICB0b3A6IC02cHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjJweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLmxvcmVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBjb2xvcjogIzI3MjcyNztcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC50ZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIgLnBvY2h0YSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICM1MjUyNTI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazo6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgcmdiYSgyNTUsIDAsIDAsIDApIDAlLFxyXG4gICAgICAgICAgcmdiKDIxMSwgMjAsIDIwKSA1MCUsXHJcbiAgICAgICAgICByZ2JhKDI1NSwgMCwgMCwgMCkgMTAwJVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICB3aWR0aDogMjFweDtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YmVmb3JlLFxyXG4gICAgICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbi1taW5lOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMXB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdmJhciAubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24tbWluZTo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLmxvcmVtIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyLnRlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIucG9jaHRhIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI25hdmJhck5hdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItYnJhbmQgaW1nIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbTpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5jb250YWN0cy1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAubG9yZW0ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2EzYTNhMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLmNvbnRhY3RzLWNvbnRhaW5lciAudGVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1MjUyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAuY29udGFjdHMtY29udGFpbmVyIC5wb2NodGEge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtY2FsYy1saW5rIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\nav.js */"));

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class OtherNews extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      otherNews: []
    };
  }

  componentDidMount() {
    const {
      news
    } = this.props;
    let max = news.length - 1;
    let min = 1;
    let array = [];

    for (array.length; array.length < 4; false) {
      let index = Math.floor(Math.random() * (max - min + 1)) + min;
      let newItem = news[index];

      if (!array.includes(newItem)) {
        array.push(newItem);
      }
    }

    this.setState({
      otherNews: array
    });
  }

  render() {
    const {
      otherNews
    } = this.state;
    let otherNewsContent = 'Загрузка...';
    otherNewsContent = otherNews.map(item => __jsx("div", {
      className: "  ",
      key: `other-${item.id}`
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: `/novosti?id=${item.id}`,
      as: `/novosti/${item.id}`,
      key: `other-${item.id}`
    }, __jsx("a", {
      className: "other-new"
    }, __jsx("div", {
      className: "img-container"
    }, __jsx("img", {
      className: "detail-img",
      src: `/images/${item.img}`,
      alt: item.label,
      title: item.label
    })), __jsx("span", {
      className: "other-new-title"
    }, item.label)))));
    return __jsx("div", {
      className: "jsx-4011291110" + " " + "row"
    }, __jsx("div", {
      className: "jsx-4011291110" + " " + "col-12"
    }, __jsx("span", {
      className: "jsx-4011291110" + " " + "subheading-common"
    }, "\u041B\u0435\u043D\u0442\u0430 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439:")), __jsx("div", {
      className: "jsx-4011291110" + " " + "col-12 other-new-plate"
    }, otherNewsContent), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4011291110"
    }, ".other-new-plate{display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:30px;}.other-new-plate .other-new{display:block;}.other-new-plate .other-new .img-container{border-radius:var(--border-radius);overflow:hidden;margin-bottom:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{color:var(--accent-dark);-webkit-text-decoration:none;text-decoration:none;display:block;margin-top:2px;font-size:14px;line-height:17px;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}@media (min-width:576px){.other-new-plate{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;margin-bottom:15px;}.other-new-plate .other-new .img-container{height:150px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}}@media (min-width:768px){.other-new .img-container{height:230px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.other-new .img-container .detail-img{max-width:100%;}}@media (min-width:992px){.other-new-plate{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:30px;margin-bottom:30px;}.other-new-plate .other-new .img-container{height:155px;overflow:hidden;border-radius:var(--border-radius);}.other-new-plate .other-new .img-container .detail-img{display:block;min-width:105%;height:105%;}}@media (min-width:1200px){.subheading-common{display:block;margin-top:30px;}.other-new-plate{padding-top:15px;}.other-new-plate .other-new .img-container{height:160px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{margin-top:7px;font-size:15px;line-height:20px;font-weight:300;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxuZXdzXFxPdGhlck5ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEQyQixBQUcwQixBQUtDLEFBR3FCLEFBTXBCLEFBR1UsQUFRQyxBQUtYLEFBTUEsQUFJRSxBQUtGLEFBT0UsQUFLRixBQU1BLEFBS0MsQUFPQSxBQUlHLEFBR0osQUFJRSxBQUdBLEFBTVcsYUE5RlEsQUE4QkYsQUFNaEIsQUFTQSxBQVlvQixBQU1wQixBQW1CQSxDQTdFcEIsQUErRG1CLEFBT0MsQ0E3RHBCLEFBMEJFLEFBWUEsQUFrQ0EsQUFHaUIsRUFWakIsUUE5RHFCLElBb0JyQixBQVNlLEFBa0JzQixBQUt2QixBQWNkLENBUEEsQUFjbUIsS0FsRkgsTUE4RGhCLElBdkNnQixFQTRERSxFQTFGSixBQXlERSxFQWpERyxRQXVCRSxDQVB2QixBQXNFRSxHQTdGRixBQXlEdUIsQUFpQ3JCLENBM0JBLE1BdkQyQyxLQVE3QixHQWVkLElBMkJBLE9BekNlLGNBNEJVLENBM0JWLE1BVGpCLFNBVW1CLGlCQUNuQixrRUEwQnVCLDZGQUNyQiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xcbmV3c1xcT3RoZXJOZXdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNsYXNzIE90aGVyTmV3cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG90aGVyTmV3czogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG5ld3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgbWF4ID0gbmV3cy5sZW5ndGggLSAxO1xyXG4gICAgbGV0IG1pbiA9IDE7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAoYXJyYXkubGVuZ3RoOyBhcnJheS5sZW5ndGggPCA0OyBmYWxzZSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gICAgICBsZXQgbmV3SXRlbSA9IG5ld3NbaW5kZXhdO1xyXG4gICAgICBpZiAoIWFycmF5LmluY2x1ZGVzKG5ld0l0ZW0pKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChuZXdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG90aGVyTmV3czogYXJyYXkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG90aGVyTmV3cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBvdGhlck5ld3NDb250ZW50ID0gJ9CX0LDQs9GA0YPQt9C60LAuLi4nO1xyXG4gICAgb3RoZXJOZXdzQ29udGVudCA9IG90aGVyTmV3cy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIFwiIGtleT17YG90aGVyLSR7aXRlbS5pZH1gfT5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17YC9ub3Zvc3RpP2lkPSR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgYXM9e2Avbm92b3N0aS8ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgIGtleT17YG90aGVyLSR7aXRlbS5pZH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm90aGVyLW5ld1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXRhaWwtaW1nXCJcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm90aGVyLW5ldy10aXRsZVwiPntpdGVtLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZy1jb21tb25cIj7Qm9C10L3RgtCwINC90L7QstC+0YHRgtC10Lk6PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIG90aGVyLW5ldy1wbGF0ZVwiPntvdGhlck5ld3NDb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgMWZyIC8gMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLm90aGVyLW5ldy10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZGFyayk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3RoZXItbmV3LXBsYXRlIC5vdGhlci1uZXcgLmltZy1jb250YWluZXIgLmRldGFpbC1pbWcge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTA1JTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAuaW1nLWNvbnRhaW5lciAuZGV0YWlsLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vdGhlci1uZXctcGxhdGUgLm90aGVyLW5ldyAub3RoZXItbmV3LXRpdGxlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm90aGVyLW5ldy1wbGF0ZSAub3RoZXItbmV3IC5vdGhlci1uZXctdGl0bGU6aG92ZXIge1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5PdGhlck5ld3MucHJvcFR5cGVzID0ge1xyXG4gIG5ld3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3RoZXJOZXdzO1xyXG4iXX0= */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\news\\\\OtherNews.js */"));
  }

}

OtherNews.propTypes = {
  news: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OtherNews);

/***/ }),

/***/ "./components/products/Catalog.js":
/*!****************************************!*\
  !*** ./components/products/Catalog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! video-react */ "video-react");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../YoutubeVideo */ "./components/YoutubeVideo.js");
/* harmony import */ var _YoutubeVideoMan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../YoutubeVideoMan */ "./components/YoutubeVideoMan.js");
/* harmony import */ var _YoutubeVideoMan2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../YoutubeVideoMan2 */ "./components/YoutubeVideoMan2.js");
/* harmony import */ var _YoutubeVideo1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../YoutubeVideo1 */ "./components/YoutubeVideo1.js");
/* harmony import */ var _YoutubeVideoLiebherr2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../YoutubeVideoLiebherr2 */ "./components/YoutubeVideoLiebherr2.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Filter */ "./components/products/Filter.js");
/* harmony import */ var _ProductPlate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProductPlate */ "./components/products/ProductPlate.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














class Catalog extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: _tables_productsList__WEBPACK_IMPORTED_MODULE_2__["default"],
      itemsSelected: [],
      minValue: 100,
      maxValue: 4000,
      view: 'list',
      foundItems: 0
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onViewTypeChange = this.onViewTypeChange.bind(this);
  }

  componentDidMount() {
    const brand = this.props.brand;
    let itemsSelected = [];

    if (brand == 'ALL') {
      this.state.items.map(category => {
        itemsSelected.push(category.products);
      });
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];

          if (products.category == brand) {
            itemsSelected = products.products;
          }
        }
      }
    }

    this.setState({
      itemsSelected: itemsSelected
    });
  }

  onFilterChange(minValue, maxValue) {
    this.setState({
      minValue,
      maxValue
    });
  }

  onViewTypeChange(view) {
    this.setState({
      view
    });
  }

  render() {
    // const data = this.state.itemsSelected;
    const category = this.props.brand;
    const brand = this.props.brand;
    const {
      minValue,
      maxValue,
      foundItems
    } = this.state;
    let data = [];

    if (brand == 'ALL') {
      this.state.items.map(category => {
        data.push(category.products);
      });
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];

          if (products.category == brand) {
            data = products.products;
          }
        }
      }
    }

    let view = true;

    if (this.state.view == 'list') {
      view = true;
    } else {
      view = false;
    }

    let buttonListClass = classnames__WEBPACK_IMPORTED_MODULE_13___default()('view-item list-icon ', {
      active: view
    });
    let buttonPlateClass = classnames__WEBPACK_IMPORTED_MODULE_13___default()('view-item plate-icon ', {
      active: !view
    });
    return __jsx("div", {
      className: "jsx-4268982151" + " " + "container-fluid products"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "container"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "row filter"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "filter-component"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "filter-group"
    }, __jsx(_Filter__WEBPACK_IMPORTED_MODULE_11__["default"], {
      foundItems: foundItems,
      onFilterChange: this.onFilterChange
    })), __jsx("div", {
      className: "jsx-4268982151" + " " + "button-group"
    }, __jsx("button", {
      onClick: () => this.onViewTypeChange('plate'),
      className: "jsx-4268982151" + " " + (buttonPlateClass || "")
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-1"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-2"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-3"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-4"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-5"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-6"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-7"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-8"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block block-9"
    })), __jsx("button", {
      onClick: () => this.onViewTypeChange('list'),
      className: "jsx-4268982151" + " " + (buttonListClass || "")
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-1"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-2"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block-min block-3"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-4"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-5"
    }), __jsx("div", {
      className: "jsx-4268982151" + " " + "block-max block-6"
    })))))), __jsx("div", {
      className: "jsx-4268982151" + " " + "row"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-3 col-lg-2"
    }, __jsx("span", {
      className: "jsx-4268982151" + " " + "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), __jsx("ul", {
      className: "jsx-4268982151" + " " + "category-list"
    }, __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'ALL' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=ALL",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "\u0412\u0441\u0435"))), __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'MTU' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=MTU",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "MTU"))), __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'MAN' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=MAN",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "MAN"))), __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'LIEBHERR' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=LIEBHERR",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "Liebherr"))), __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'YAMZ' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=YAMZ",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "\u042F\u041C\u0417"))), __jsx("li", {
      className: "jsx-4268982151" + " " + ((category == 'JENBACHER' ? 'category-li active' : 'category-li') || "")
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
      href: "/products?brand=JENBACHER",
      scroll: false
    }, __jsx("a", {
      className: "jsx-4268982151" + " " + "category-link"
    }, "Jenbacher"))))), __jsx(_ProductPlate__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: data,
      brand: brand,
      minValue: minValue,
      maxValue: maxValue,
      view: this.state.view,
      onFoundChange: this.onFoundChange
    })), category == 'LIEBHERR' && __jsx("div", {
      className: "jsx-4268982151" + " " + "row mt-5 m-0 d-flex flex-column"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 offset-md-2"
    }, __jsx(_YoutubeVideo1__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "myVideo"
    })), __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 offset-md-2"
    }, __jsx(_YoutubeVideoLiebherr2__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "myVideo"
    }))), category == 'MAN' && __jsx("div", {
      className: "jsx-4268982151" + " " + "row mt-5 m-0"
    }, __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 col-xl-6"
    }, __jsx(_YoutubeVideoMan__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "myVideo"
    })), __jsx("div", {
      className: "jsx-4268982151" + " " + "col-12 col-md-10 col-xl-6"
    }, __jsx(_YoutubeVideoMan2__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "myVideo"
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4268982151"
    }, "@import '../node_modules/video-react/dist/video-react';.myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}.video-react-poster.jsx-4268982151{top:0;}.myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcQ2F0YWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwT29CLEFBRWlFLEFBRWxDLEFBTVosQUFJSyxBQU1JLEFBS0EsTUFkakIsS0FJa0IsRUFNaEIsQUFLQSxLQXJCbUIsU0FXckIsVUFWYSxXQUNFLGFBQ2YiLCJmaWxlIjoiRzpcXE9TUGFuZWxcXGRvbWFpbnNcXGdtbmV4dDlcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxDYXRhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb2R1Y3RzTGlzdCBmcm9tICcuLi90YWJsZXMvcHJvZHVjdHNMaXN0JztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAndmlkZW8tcmVhY3QnO1xyXG5pbXBvcnQgWW91dHViZVZpZGVvIGZyb20gJy4uL1lvdXR1YmVWaWRlbyc7XHJcbmltcG9ydCBZb3V0dWJlVmlkZW9NYW4gZnJvbSAnLi4vWW91dHViZVZpZGVvTWFuJztcclxuaW1wb3J0IFlvdXR1YmVWaWRlb01hbjIgZnJvbSAnLi4vWW91dHViZVZpZGVvTWFuMic7XHJcbmltcG9ydCBZb3V0dWJlVmlkZW8xIGZyb20gJy4uL1lvdXR1YmVWaWRlbzEnO1xyXG5pbXBvcnQgWW91dHViZVZpZGVvTGllYmhlcnIyIGZyb20gJy4uL1lvdXR1YmVWaWRlb0xpZWJoZXJyMic7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcclxuaW1wb3J0IFByb2R1Y3RQbGF0ZSBmcm9tICcuL1Byb2R1Y3RQbGF0ZSc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgQ2F0YWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGl0ZW1zOiBwcm9kdWN0c0xpc3QsXHJcbiAgICAgIGl0ZW1zU2VsZWN0ZWQ6IFtdLFxyXG4gICAgICBtaW5WYWx1ZTogMTAwLFxyXG4gICAgICBtYXhWYWx1ZTogNDAwMCxcclxuICAgICAgdmlldzogJ2xpc3QnLFxyXG4gICAgICBmb3VuZEl0ZW1zOiAwXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkZpbHRlckNoYW5nZSA9IHRoaXMub25GaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25WaWV3VHlwZUNoYW5nZSA9IHRoaXMub25WaWV3VHlwZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBicmFuZCA9IHRoaXMucHJvcHMuYnJhbmQ7XHJcblxyXG4gICAgbGV0IGl0ZW1zU2VsZWN0ZWQgPSBbXTtcclxuXHJcbiAgICBpZiAoYnJhbmQgPT0gJ0FMTCcpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5pdGVtcy5tYXAoY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgIGl0ZW1zU2VsZWN0ZWQucHVzaChjYXRlZ29yeS5wcm9kdWN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9kdWN0c0NhdGVnb3J5IGluIHRoaXMuc3RhdGUuaXRlbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pdGVtcy5oYXNPd25Qcm9wZXJ0eShwcm9kdWN0c0NhdGVnb3J5KSkge1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnN0YXRlLml0ZW1zW3Byb2R1Y3RzQ2F0ZWdvcnldO1xyXG4gICAgICAgICAgaWYgKHByb2R1Y3RzLmNhdGVnb3J5ID09IGJyYW5kKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zU2VsZWN0ZWQgPSBwcm9kdWN0cy5wcm9kdWN0cztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXRlbXNTZWxlY3RlZDogaXRlbXNTZWxlY3RlZCB9KTtcclxuICB9XHJcblxyXG4gIG9uRmlsdGVyQ2hhbmdlKG1pblZhbHVlLCBtYXhWYWx1ZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pblZhbHVlLCBtYXhWYWx1ZSB9KTtcclxuICB9XHJcbiAgb25WaWV3VHlwZUNoYW5nZSh2aWV3KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlldyB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlLml0ZW1zU2VsZWN0ZWQ7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuYnJhbmQ7XHJcbiAgICBjb25zdCBicmFuZCA9IHRoaXMucHJvcHMuYnJhbmQ7XHJcbiAgICBjb25zdCB7IG1pblZhbHVlLCBtYXhWYWx1ZSwgZm91bmRJdGVtcyB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgaWYgKGJyYW5kID09ICdBTEwnKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuaXRlbXMubWFwKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goY2F0ZWdvcnkucHJvZHVjdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvZHVjdHNDYXRlZ29yeSBpbiB0aGlzLnN0YXRlLml0ZW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvZHVjdHNDYXRlZ29yeSkpIHtcclxuICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5zdGF0ZS5pdGVtc1twcm9kdWN0c0NhdGVnb3J5XTtcclxuICAgICAgICAgIGlmIChwcm9kdWN0cy5jYXRlZ29yeSA9PSBicmFuZCkge1xyXG4gICAgICAgICAgICBkYXRhID0gcHJvZHVjdHMucHJvZHVjdHM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgdmlldyA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52aWV3ID09ICdsaXN0Jykge1xyXG4gICAgICB2aWV3ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCBidXR0b25MaXN0Q2xhc3MgPSBjbGFzc05hbWVzKCd2aWV3LWl0ZW0gbGlzdC1pY29uICcsIHtcclxuICAgICAgYWN0aXZlOiB2aWV3XHJcbiAgICB9KTtcclxuICAgIGxldCBidXR0b25QbGF0ZUNsYXNzID0gY2xhc3NOYW1lcygndmlldy1pdGVtIHBsYXRlLWljb24gJywge1xyXG4gICAgICBhY3RpdmU6ICF2aWV3XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcm9kdWN0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmaWx0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEl0ZW1zPXtmb3VuZEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXt0aGlzLm9uRmlsdGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblZpZXdUeXBlQ2hhbmdlKCdwbGF0ZScpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uUGxhdGVDbGFzc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmxvY2stMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBibG9jay0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJsb2NrLTNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmxvY2stNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBibG9jay01XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJsb2NrLTZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmxvY2stN1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBibG9jay04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJsb2NrLTlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25WaWV3VHlwZUNoYW5nZSgnbGlzdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YnV0dG9uTGlzdENsYXNzfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1taW4gYmxvY2stMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1taW4gYmxvY2stMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1taW4gYmxvY2stM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1tYXggYmxvY2stNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1tYXggYmxvY2stNVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1tYXggYmxvY2stNlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMyBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5LWhlYWRlclwiPtCR0YDQtdC90LTRizo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09ICdBTEwnID8gJ2NhdGVnb3J5LWxpIGFjdGl2ZScgOiAnY2F0ZWdvcnktbGknXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz9icmFuZD1BTExcIiBzY3JvbGw9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeS1saW5rXCI+0JLRgdC1PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT0gJ01UVScgPyAnY2F0ZWdvcnktbGkgYWN0aXZlJyA6ICdjYXRlZ29yeS1saSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP2JyYW5kPU1UVVwiIHNjcm9sbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5NVFU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT0gJ01BTicgPyAnY2F0ZWdvcnktbGkgYWN0aXZlJyA6ICdjYXRlZ29yeS1saSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP2JyYW5kPU1BTlwiIHNjcm9sbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5NQU48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT0gJ0xJRUJIRVJSJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyAnY2F0ZWdvcnktbGkgYWN0aXZlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnY2F0ZWdvcnktbGknXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cz9icmFuZD1MSUVCSEVSUlwiIHNjcm9sbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5MaWViaGVycjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PSAnWUFNWicgPyAnY2F0ZWdvcnktbGkgYWN0aXZlJyA6ICdjYXRlZ29yeS1saSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP2JyYW5kPVlBTVpcIiBzY3JvbGw9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeS1saW5rXCI+0K/QnNCXPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09ICdKRU5CQUNIRVInXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICdjYXRlZ29yeS1saSBhY3RpdmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICA6ICdjYXRlZ29yeS1saSdcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzP2JyYW5kPUpFTkJBQ0hFUlwiIHNjcm9sbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5KZW5iYWNoZXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UHJvZHVjdFBsYXRlXHJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICBicmFuZD17YnJhbmR9XHJcbiAgICAgICAgICAgICAgbWluVmFsdWU9e21pblZhbHVlfVxyXG4gICAgICAgICAgICAgIG1heFZhbHVlPXttYXhWYWx1ZX1cclxuICAgICAgICAgICAgICB2aWV3PXt0aGlzLnN0YXRlLnZpZXd9XHJcbiAgICAgICAgICAgICAgb25Gb3VuZENoYW5nZT17dGhpcy5vbkZvdW5kQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkgPT0gJ0xJRUJIRVJSJyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTUgbS0wIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBvZmZzZXQtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPFlvdXR1YmVWaWRlbzEgY2xhc3NOYW1lPVwibXlWaWRlb1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTEwIG9mZnNldC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8WW91dHViZVZpZGVvTGllYmhlcnIyIGNsYXNzTmFtZT1cIm15VmlkZW9cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y2F0ZWdvcnkgPT0gJ01BTicgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC01IG0tMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgPFlvdXR1YmVWaWRlb01hbiBjbGFzc05hbWU9XCJteVZpZGVvXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtMTAgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgIDxZb3V0dWJlVmlkZW9NYW4yIGNsYXNzTmFtZT1cIm15VmlkZW9cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgQGltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3ZpZGVvLXJlYWN0L2Rpc3QvdmlkZW8tcmVhY3QnO1xyXG4gICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZGVvLXJlYWN0LXBvc3RlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXlWaWRlb0tvbXBsZWtzLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLm15VmlkZW8ge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNhdGFsb2cucHJvcFR5cGVzID0ge1xyXG4gIGJyYW5kOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcbkNhdGFsb2cuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJyYW5kOiAnQUxMJ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0YWxvZztcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\Catalog.js */"));
  }

}

Catalog.propTypes = {
  brand: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};
Catalog.defaultProps = {
  brand: 'ALL'
};
/* harmony default export */ __webpack_exports__["default"] = (Catalog);

/***/ }),

/***/ "./components/products/Filter.js":
/*!***************************************!*\
  !*** ./components/products/Filter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-range */ "react-input-range");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Filter extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        min: 100,
        max: 4000
      }
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(value) {
    this.props.onFilterChange(this.state.value.min, this.state.value.max);
    this.setState({
      value
    });
  }

  render() {
    const {
      foundItems
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3784398479" + " " + "text-container"
    }, __jsx("span", {
      className: "jsx-3784398479" + " " + "filter-text"
    }, "\u0412\u044B\u0431\u043E\u0440 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438")), __jsx("div", {
      className: "jsx-3784398479" + " " + "filter-block"
    }, __jsx("div", {
      className: "jsx-3784398479" + " " + "input-block"
    }, __jsx(react_input_range__WEBPACK_IMPORTED_MODULE_2___default.a, {
      maxValue: 5000,
      minValue: 100,
      step: 100,
      value: this.state.value,
      onChange: value => this.onChangeHandle(value),
      draggableTrack: true
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3784398479"
    }, ".input-range .input-range__track{position:relative;height:22px;}.input-range .input-range__track--active{background:grey;margin-left:11px;}.input-range .input-range__track--background{background:red;}.input-range .input-range__slider{background:white;width:22px;height:22px;border-radius:50%;}.input-range .input-range__slider-container{top:-22px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDMkIsQUFHK0IsQUFJRixBQUlELEFBR0UsQUFNUCxVQUNaLEtBVEEsQ0FKbUIsQ0FPTixDQVhDLFVBWUEsRUFYZCxHQUlBLE9BUW9CLGtCQUNwQiIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xccHJvZHVjdHNcXEZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gJ3JlYWN0LWlucHV0LXJhbmdlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB2YWx1ZTogeyBtaW46IDEwMCwgbWF4OiA0MDAwIH0sXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkNoYW5nZUhhbmRsZSA9IHRoaXMub25DaGFuZ2VIYW5kbGUuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgb25DaGFuZ2VIYW5kbGUodmFsdWUpIHtcclxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZS5taW4sIHRoaXMuc3RhdGUudmFsdWUubWF4KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmb3VuZEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItdGV4dFwiPtCS0YvQsdC+0YAg0LTQuNCw0L/QsNC30L7QvdCwINC80L7RidC90L7RgdGC0Lg8L3NwYW4+XHJcbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXRleHRcIj7QndCw0LnQtNC10L3QvjogPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoLXRleHQtdmFsdWVcIj57Zm91bmRJdGVtc308L3NwYW4+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dFJhbmdlXHJcbiAgICAgICAgICAgICAgbWF4VmFsdWU9ezUwMDB9XHJcbiAgICAgICAgICAgICAgbWluVmFsdWU9ezEwMH1cclxuICAgICAgICAgICAgICBzdGVwPXsxMDB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vbkNoYW5nZUhhbmRsZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlVHJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgLmlucHV0LXJhbmdlIC5pbnB1dC1yYW5nZV9fdHJhY2sge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlucHV0LXJhbmdlIC5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1yYW5nZSAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRmlsdGVyLnByb3BUeXBlcyA9IHtcclxuICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBmb3VuZEl0ZW1zOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\Filter.js */"));
  }

}

Filter.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  foundItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./components/products/ProductItems.js":
/*!*********************************************!*\
  !*** ./components/products/ProductItems.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ProductItems(props) {
  const {
    0: result,
    1: setResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setResult(props.data);
  }, [props]);
  let plateClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()('col-12 col-md-9 col-lg-10 product-card-plate ', props.view);
  return __jsx("div", {
    className: plateClass
  }, result ? result.map(item => __jsx("div", {
    key: item.id,
    className: "product-card-container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/products/${item.category}/${item.id}`,
    key: `key0-${item.id}`
  }, __jsx("a", {
    className: "product-card"
  }, __jsx("div", {
    className: "img-container"
  }, __jsx("img", {
    src: `/images/products/thumb-${item.img}`,
    alt: item.label,
    className: "product-card-img"
  })), __jsx("div", {
    className: "text-container"
  }, __jsx("div", {
    className: "flex-top"
  }, __jsx("span", {
    className: "product-name"
  }, item.label)), __jsx("div", {
    className: "flex-bot"
  }, __jsx("div", {
    className: "flex-row"
  }, __jsx("span", {
    className: "product-card-motor-title"
  }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), __jsx("span", {
    className: "product-card-motor"
  }, item.motorMark)), __jsx("div", {
    className: "flex-row"
  }, __jsx("span", {
    className: "product-card-power-title"
  }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), __jsx("span", {
    className: "product-card-power"
  }, item.electricPower, " \u043A\u0412\u0442")), __jsx("span", {
    className: "product-card-details"
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))))) : '');
}

/***/ }),

/***/ "./components/products/ProductPlate.js":
/*!*********************************************!*\
  !*** ./components/products/ProductPlate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItems */ "./components/products/ProductItems.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ProductsPlate extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      brand,
      minValue,
      maxValue,
      data,
      view
    } = this.props; // Формирование начального массива продуктов по бренду

    let productItems = []; // Если все - то добавляем все продукты в массив

    if (brand == "ALL") {
      data.map(category => {
        category.map(item => {
          productItems.push(item);
        });
      });
    } else {
      // Иначе копируем продукты из пропсов
      productItems = data;
    } // Работа с фильтром


    const result = productItems.filter(item => item.electricPower <= maxValue && item.electricPower >= minValue);
    result.sort(function (a, b) {
      return a.electricPower - b.electricPower;
    });
    return __jsx(_ProductItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: result,
      view: view
    });
  }

}

ProductsPlate.propTypes = {
  brand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  minValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  maxValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ProductsPlate.defaultProps = {
  minValue: 100,
  maxValue: 4000,
  view: "list"
};
/* harmony default export */ __webpack_exports__["default"] = (ProductsPlate);

/***/ }),

/***/ "./components/products/ProductsListPlate.js":
/*!**************************************************!*\
  !*** ./components/products/ProductsListPlate.js ***!
  \**************************************************/
/*! exports provided: ProductsListPlate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListPlate", function() { return ProductsListPlate; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Link */ "./components/Link.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class ProductsListPlate extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const data = this.props.data.data[0];
    const category = this.props.data.data[1];
    return __jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-2"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), __jsx("ul", {
      className: "jsx-1400608521" + " " + "category-list"
    }, __jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: "/products?category=mtu"
    }, __jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "MTU"))), __jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: "/products?category=man"
    }, __jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "MAN"))), __jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: "/products?category=liebherr"
    }, __jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "Liebherr"))), __jsx("li", {
      className: "jsx-1400608521" + " " + "category-li"
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeClassName: "active",
      href: "/products?category=yamz"
    }, __jsx("a", {
      className: "jsx-1400608521" + " " + "category-link"
    }, "\u042F\u041C\u0417"))))), __jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-10 product-card-plate"
    }, data.map(item => __jsx("div", {
      key: item.key,
      className: "jsx-1400608521" + " " + "product-card-container"
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: {
        pathname: '/product',
        query: {
          category: category,
          id: item.id
        }
      },
      as: `/products/${category}/${item.id}`,
      key: item.key
    }, __jsx("a", {
      className: "jsx-1400608521" + " " + "product-card"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${item.img}`,
      alt: item.label,
      title: item.label,
      className: "jsx-1400608521" + " " + "product-card-img"
    })), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "flex-top"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "product-name"
    }, item.label)), __jsx("div", {
      className: "jsx-1400608521" + " " + "flex-bot"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "flex-row"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-motor-title"
    }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), __jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-motor pb-1"
    }, item.motorMark)), __jsx("div", {
      className: "jsx-1400608521" + " " + "flex-row"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-power-title"
    }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), __jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-power"
    }, item.electricPower, " \u043A\u0412\u0442"), __jsx("span", {
      className: "jsx-1400608521" + " " + "product-card-details"
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435...")))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1400608521"
    }, ".enter{opacity:0;}.enter-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:1;}.enter-done{opacity:1;}.exit{opacity:1;}.exit-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:0;}.products-promo{background:linear-gradient(to right,#e1e1e1 0%,#b1b1b1 100%);padding-top:30px;padding-bottom:30px;box-shadow:inset 0 10px 15px -5px rgba(0,0,0,0.2);}.products-promo .text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:27px;line-height:32px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products-promo .text-container .text-min{display:block;margin-bottom:15px;line-height:18px;}.products-promo .cards-plate{display:none;}.products{padding-top:30px;}.products .category-header{font-family:var(--molot-font);font-size:20px;color:grey;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}.products .filter .filter-component{margin-bottom:40px;margin-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .text-container{display:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;font-size:12px;bottom:-35px;left:0;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;font-size:12px;bottom:-35px;right:0;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;height:15px;border-radius:15px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:15px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(35%);-ms-transform:translateY(35%);transform:translateY(35%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:22px;height:24px;background-color:transparent;border:none;margin-left:8px;cursor:pointer;outline:none;}.products .filter .filter-component .button-group .active{background-color:var(--accent-red);border-radius:3px;}.products .filter .filter-component .button-group .active .block{background-color:#fff !important;}.products .filter .filter-component .button-group .active .block-min,.block-max{background-color:#fff !important;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:2px;left:2px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:2px;right:2px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:2px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:2px;left:2px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:2px;right:2px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;background-color:#bababa;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:2px;left:2px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:2px;left:2px;}.products .filter .filter-component .button-group .list-icon .block-4{top:2px;right:2px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:2px;right:2px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;}.products .category-list .category-li{border-radius:30px;border:1px solid grey;cursor:pointer;margin:5px;}.products .category-list .category-li .category-link{display:block;width:100%;height:100%;font-weight:300;font-size:14px;text-transform:uppercase;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;color:grey;}.products .category-list .active{background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .plate .product-card-container{width:100%;height:100%;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:var(--border-radius);display:block;margin:0 auto;background:#fff;max-width:230px;width:100%;height:245px;box-shadow:var(--box-shadow);box-shadow:3px 3px 4px rgba(0,0,0,0.25);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;width:100%;overflow:hidden;border-radius:7px 7px 0 0;}.products .plate .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .plate .product-card-container .product-card .text-container{height:120px;padding:15px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:10px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:#313131;display:block;padding-bottom:2px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:#313131;display:block;padding-bottom:2px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:0;display:grid;grid-template-columns:2fr 3fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 15px;display:block;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:20px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:13px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:black;display:block;line-height:14px;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:13px;font-weight:700;color:black;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:9px;text-align:right;display:none;color:var(--accent-red);}.products-text{display:block;margin-top:15px;margin-bottom:15px;overflow:hidden;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:15px;margin-bottom:15px;line-height:20px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:5px;font-size:13px;line-height:15px;}@media (min-width:576px){.products-promo{padding-top:60px;padding-bottom:60px;}.products-promo .promo-text-container .header-min-colored{font-size:36px;line-height:42px;margin-bottom:30px;}.products-promo .promo-text-container .text-min-container .text-min{font-size:20px;line-height:24px;padding-bottom:15px;}.products .plate{grid-row-gap:0;}.products .plate .product-card-container{padding:25px 15px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;height:380px;}.products .plate .product-card-container .product-card .img-container{height:160px;overflow:hidden;}.products .plate .product-card-container .product-card .img-container .product-card-img{width:100%;height:auto;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:35px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:25px;line-height:22px;margin-bottom:20px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:grey;display:block;line-height:14px;margin-bottom:10px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:12px;text-align:right;display:block;}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:grid;grid-template-columns:1fr 2fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:13px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products-text{display:block;margin-top:30px;margin-bottom:30px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{font-size:16px;line-height:21px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{box-shadow:3px 3px 4px rgba(0,0,0,0.25);border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:22px;}}@media (min-width:768px){.products-promo{padding-bottom:30px;}.products-promo .promo-text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .cards-plate{margin-top:30px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.products-promo .cards-plate .card-container .card{border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;}.products-promo .cards-plate .card-container .card .icon-container{margin-bottom:15px;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:17px;color:white;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:none;font-size:12px;line-height:15px;margin-bottom:0;}.products .filter{margin-bottom:30px;}.products .category-header{display:block;position:absolute;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;top:475px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);left:-72px;color:#d5d5d5;font-size:48px;line-height:26px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;position:relative;}.products .category-list .category-li{height:50px;cursor:pointer;margin-top:5px;margin-bottom:5px;}.products .category-list .category-li:first-child{margin-top:0;}.products .category-list .category-li .category-link{text-align:center;line-height:40px;font-weight:700;font-size:16px;color:#313131;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .active .category-link{color:white;}.products .plate{padding-left:30px;padding-right:15px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .plate .product-card-container .product-card{z-index:0;border-radius:var(--border-radius);height:100%;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:120px;width:100%;overflow:hidden;}.products .plate .product-card-container .product-card .text-container{height:auto;padding:20px 10px 15px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:15px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:11px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:11px;font-size:10px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 3fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:10px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:12px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:12px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:14px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products-text .text-wrapper .text{font-size:19px;line-height:25px;color:var(--accent-grey);}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:17px;line-height:22px;}}@media (min-width:992px){.products-promo{padding-bottom:30px;}.products{padding-bottom:30px;}.products .category-header{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:48px;}.products .filter .filter-component{box-shadow:none;border-radius:10px;padding:30px 15px 25px;margin-bottom:0px;margin-top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fafafa;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .filter-block{margin-left:90px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{font-size:16px;position:absolute;bottom:-2px;left:-74px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{font-size:16px;position:absolute;bottom:-2px;right:-90px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:26px;height:28px;border:none;margin-left:15px;cursor:pointer;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:4px;right:4px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:4px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:4px;right:4px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-4{top:4px;right:4px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:4px;right:4px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;}.products .category-list .category-li{height:50px;cursor:pointer;margin:5px 0px;border-radius:10px;border:1px solid #7b7b7b;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li .category-link{text-align:center;background-color:rgba(255,255,255,0.05);line-height:40px;font-weight:500;font-size:16px;color:var(--accent-grey);-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li:hover{border:1px solid transparent;box-shadow:3px 3px 2px rgba(0,0,0,0.2);background-color:rgba(255,255,255,0.9);}.products .category-list .category-li:hover .category-link{color:var(--accent-grey);}.products .category-list .active{box-shadow:5px 10px 15px rgba(210,74,67,0.45);background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{display:grid;padding-left:25px;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 5fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 2fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:23px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:12px;text-align:right;display:none;color:var(--accent-red);}.products-text{padding-bottom:60px;padding-top:60px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:19px;margin-bottom:15px;line-height:24px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') -60px 0 no-repeat;background-size:cover;content:'';top:0;right:-100px;height:95%;width:50%;border-radius:15px;box-shadow:-15px 25px 0px rgba(0,0,0,0.125);background-color:#fff;}.products-text .text-wrapper .text{font-size:18px;line-height:24px;color:var(--accent-grey);}}@media (min-width:1200px){{.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card:hover;}.products-promo{background:url('/images/products/bg-products.jpg') 50% 0% no-repeat;background-size:cover;padding:30px;border-bottom:15px solid white;}.products-promo .promo-text-container{display:block;height:100%;position:relative;}.products-promo .promo-text-container .header-min-colored{position:absolute;display:block;width:770px;top:30px;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .promo-text-container .text-min-container{top:150px;position:absolute;}.products-promo .promo-text-container .text-min-container .text-min{color:rgb(41,41,41);line-height:20px;font-size:16px;margin-top:20px;}.products-promo .cards-plate{margin-top:0px;display:grid;grid-template:125px 125px 125px / 330px 330px;grid-gap:15px;}.products-promo .cards-plate .card-container{-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;border-radius:var(--border-radius);}.products-promo .cards-plate .card-container:hover{box-shadow:10px 10px 15px rgba(0,0,0,0.2);}.products-promo .cards-plate .card-container:hover .card{background:rgba(255,255,255,0.25);}.products-promo .cards-plate .card-container:active{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.products-promo .cards-plate .card-container .card{background:rgba(255,255,255,0.05);border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .icon-container{width:120px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .text-container{margin-left:15px;padding-left:15px;border-left:1px solid white;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:19px;color:#fafafa;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:19px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:block;font-size:14px;line-height:17px;margin-bottom:0;}.products-promo .cards-plate .container-1{grid-column:2 / 3;grid-row:1 / 2;}.products-promo .cards-plate .container-2{grid-column:2 / 3;grid-row:2 / 3;}.products-promo .cards-plate .container-3{grid-column:2 / 3;grid-row:3 / 4;}.products-promo .cards-plate .container-4{grid-column:1 / 2;grid-row:3 / 4;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.products-promo .cards-plate .container-4 .card{background:rgba(255,255,255,0.15);}.products{padding-top:18px;}.products .filter .filter-component{box-shadow:1px 1px 2px rgba(0,0,0,0.2);border-radius:10px;padding:20px 15px 17px 25px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;}.products .filter .filter-component .filter-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.products .filter .filter-component .filter-group .text-container{display:block;padding-right:25px;border-right:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .filter-group .text-container .filter-text{display:block;color:var(--sub-color);font-weight:700;font-size:15px;line-height:18px;margin-bottom:0px;}.products .filter .filter-component .filter-group .text-container .search-text{font-size:12px;color:var(--sub-color);}.products .filter .filter-component .filter-group .text-container .search-text-value{font-size:12px;color:var(--accent-red);}.products .filter .filter-component .filter-group .filter-block{width:45%;margin-left:110px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;bottom:-2px;left:-78px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;bottom:-2px;right:-85px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border:none;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.2);border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(231,172,117);opacity:1;height:22px;box-shadow:inset 1px 1px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(0,0,0,0.15), 1px 1px 1px rgba(0,0,0,0.2);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-7px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);text-shadow:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .category-list .category-li{height:50px;cursor:pointer;}.products .category-list .category-li .category-link{font-size:18px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-transform:uppercase;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.products .plate{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-auto-rows:auto;grid-gap:25px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;}.products .plate .product-card-container .product-card .img-container{height:197px;}.products .plate .product-card-container .product-card .img-container .product-card-img{max-width:100%;width:auto;height:100%;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:25px 20px 25px 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:21px;line-height:22px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#c4c4c4;display:block;font-weight:300;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:var(--accent-grey);display:block;line-height:14px;margin-bottom:12px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#c4c4c4;font-weight:300;display:block;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:var(--accent-grey);-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .product-card-details{color:var(--accent-red);width:100%;font-size:12px;text-align:right;display:block;font-weight:700;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:10px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 7fr;width:100%;height:100px;min-height:100px;padding-bottom:0px;border-radius:var(--border-radius);box-shadow:var(--card-shadow);border:none;-webkit-transition:box-shadow 0.15s ease-out;transition:box-shadow 0.15s ease-out;background-color:#fff;}.products .list .product-card-container .product-card:hover{box-shadow:0px 10px 20px rgba(0,0,0,0.15);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;height:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 3fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--noto-font);font-size:18px;font-weight:900;line-height:24px;color:var(--accent-grey);margin-bottom:0px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot{display:grid;grid-template-columns:2fr 1fr 1fr;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:300;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:900;color:var(--text);-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{padding:10px 15px;font-size:12px;line-height:14px;text-align:center;display:inline-block;color:white;background-color:var(--accent-red);border-radius:3px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') 0 0 no-repeat;background-size:cover;content:'';top:auto;bottom:15px;right:-100px;height:80%;width:40%;border-radius:15px;box-shadow:-15px 15px 0px rgba(0,0,0,0.125);box-shadow:-3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.products-text .text-wrapper .text{font-size:17px;line-height:25px;color:#313131;}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-gap:30px;}.proj-img{box-shadow:0 10px 15px rgba(0,0,0,0.225);}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:10px;overflow:hidden;-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:23px;}}@media (min-width:1500px){.products-text::before{display:block;position:absolute;background:url('/images/IMG_2.jpg') 25% 0 no-repeat;background-size:cover;content:'';top:0px;left:-100px;height:80%;width:18%;border-radius:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.promo-projects-product-page{margin-top:60px;margin-bottom:30px;padding-bottom:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvZHVjdHNMaXN0UGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEYyQixBQUd1QixBQUd1QixBQUl2QixBQUdBLEFBR3VCLEFBSzhCLEFBTWpELEFBU0EsQUFLRCxBQUlJLEFBR2EsQUFNWCxBQVFULEFBR0csQUFTSyxBQVVBLEFBZUgsQUFXRyxBQWVILEFBV1UsQUFjSSxBQWFYLEFBWUEsQUFrQkEsQUFVUCxBQVNELEFBWXlCLEFBSUYsQUFJQSxBQUdmLEFBR1IsQUFhRixBQVNBLEFBVUEsQUFTQSxBQVVBLEFBVUEsQUFVRyxBQVNBLEFBVUEsQUFJTyxBQVFSLEFBYUEsQUFhRixBQVNBLEFBVUcsQUFTSCxBQVNBLEFBVUcsQUFJRCxBQVFTLEFBTUwsQUFVcUIsQUFJdkIsQUFHRixBQVVDLEFBSUksQUFlaUIsQUFPbkIsQUFjRCxBQVFDLEFBYUMsQUFnQkEsQUFTRixBQVVHLEFBY0EsQUFlRSxBQWNGLEFBZ0JELEFBTUUsQUFXTCxBQU1JLEFBYUYsQUFZRCxBQVFLLEFBVUgsQUFnQkEsQUFTRixBQVVHLEFBY0EsQUFnQkUsQUFjRixBQWNELEFBTUEsQUFNTCxBQUdBLEFBSU8sQUFLQSxBQUtILEFBU3NCLEFBUXBCLEFBT0ksQUFJRixBQVFBLEFBTUEsQUFHRyxBQUdILEFBY0YsQUFTRixBQVFFLEFBYUUsQUFXSCxBQVVHLEFBY0EsQUFlRSxBQWNGLEFBZ0JBLEFBS0MsQUFXTCxBQU1JLEFBWWlCLEFBT25CLEFBWUQsQUFRSyxBQVlILEFBZUEsQUFTRCxBQWVFLEFBY0EsQUFlRSxBQWNGLEFBU0QsQUFLTCxBQUdBLEFBSU0sQUFJQyxBQUtILEFBUzhCLEFBUzNCLEFBUUksQUFHTixBQVFFLEFBTW1CLEFBUWhCLEFBUUosQUFjRixBQU9NLEFBR0wsQUFXSixBQVNFLEFBTUMsQUFHSyxBQVVOLEFBR00sQUFTUCxBQUtELEFBS3NCLEFBT25CLEFBWUQsQUFhRSxBQWVBLEFBU0YsQUFVRyxBQWVBLEFBZUUsQUFlRixBQWdCRCxBQU1DLEFBV0osQUFNSSxBQWNpQixBQU9uQixBQVlELEFBUU0sQUFZSixBQWVBLEFBU0QsQUFlRSxBQWNBLEFBZUUsQUFjRixBQVVBLEFBTUMsQUFLRyxBQUdpQixBQVFELEFBUW5CLEFBUUksQUFHQSxBQUdELEFBSUgsQUFZTixBQUdPLEFBU0MsQUFVSCxBQWVBLEFBV0EsQUFlQSxBQVdVLEFBY0ksQUFhWCxBQVlBLEFBa0JBLEFBVVAsQUFRRCxBQVVRLEFBUVIsQUFZRixBQVNBLEFBVUEsQUFTQSxBQVVBLEFBVUEsQUFVRyxBQVNBLEFBVUEsQUFJTyxBQVFSLEFBWUEsQUFZRixBQVNBLEFBVUcsQUFTSCxBQVNBLEFBVUcsQUFJRCxBQVFFLEFBUU0sQUFXVyxBQUtKLEFBR3dCLEFBS3JDLEFBR0MsQUFRRixBQUtJLEFBV0osQUFNSSxBQWNpQixBQVFuQixBQVlELEFBUUssQUFhSCxBQWVBLEFBU0QsQUFnQkUsQUFjQSxBQWVBLEFBY0EsQUFlQSxBQU1LLEFBSVgsQUFHQSxBQUlPLEFBS0UsQUFHSixBQWNDLEFBU0osQUFPRyxBQUtJLEFBV1IsQUFPWSxBQU1QLEFBTWtCLEFBSVksQUFHUixBQUdULEFBR1MsQUFZekIsQUFPSyxBQVVGLEFBZUQsQUFNSSxBQUlBLEFBSUEsQUFJQSxBQUttQixBQUdwQixBQUd5QixBQVc3QixBQU9DLEFBVUEsQUFhQyxBQVNBLEFBSUwsQUFVUSxBQVVBLEFBY0gsQUFXRyxBQWNILEFBV1UsQUFnQkssQUFnQlosQUFZQSxBQW1CQSxBQVVOLEFBSUcsQUFNdUIsQUFNdkIsQUFhRixBQVFFLEFBU0YsQUFhRSxBQVdILEFBVUcsQUFlQSxBQWVFLEFBZUYsQUFlUyxBQVFULEFBV0osQUFNSSxBQWlCOEIsQUFRaEMsQUFhRCxBQVFLLEFBYUgsQUFnQkEsQUFRRCxBQVVBLEFBZ0JBLEFBVUUsQUFlRixBQVVFLEFBZUcsQUFVQSxBQUdKLEFBZ0JDLEFBS0MsQUFLRyxBQUdMLEFBTWQsQUFDNEMsQUFPekIsQUFTSCxBQU9GLEFBY0UsUUFyc0ZULEFBU0EsQUFVQyxBQVNpQixBQVVsQixBQVVDLEFBbUVELEFBU0EsQUFtQkMsQUFTQSxBQXk1Q0MsQUFTQSxBQVVDLEFBU2lCLEFBVWxCLEFBVUMsQUFpRUQsQUFTQSxBQW1CQyxBQVNBLENBbHJDZCxBQUcwQixBQW1XeEIsQUFHMEIsQUFta0MxQixBQUcwQixDQTVyRTVCLEFBT0EsQUFHQSxBQWlEQSxBQXNKZ0IsQUEwQkksQUFzR0EsQUFhQSxBQWdFTCxBQStCTyxBQW95QkwsQUE2Q3NCLEFBd1dyQyxBQXFKZ0IsQUFrQkksQUFxR0EsQUFZQSxBQStETCxBQXlTSyxBQStKQSxDQTdzRVIsQUEwR0gsQUFTQSxBQVVDLEFBeURELEFBNEJDLEFBNkNFLEFBNEtBLEFBa1BFLEFBcUhBLEFBK1NBLEFBMEpBLEFBZ1dBLEFBZ0dILEFBU0EsQUFVQyxBQXVERCxBQTRCQyxBQXVERSxBQWdCQSxBQW1yQkEsQ0F6d0VoQixBQXFEYSxBQThDYixBQXFIYSxBQTJDYixBQXdNRSxBQTBIYSxBQTJPSSxBQW1CakIsQUF5QzhCLEFBcUM5QixBQStIYSxBQTJnQkksQUFnQ2pCLEFBbUVhLEFBME9PLEFBa1FILEFBc0VqQixBQXFJYSxDQXpzRmYsQUF3QkEsQUF5Ym9CLEFBdVNjLEFBOERkLEFBaUJFLEFBc1JjLEFBeUVqQixBQW9DakIsQUF3d0JvQixBQXlrQnBCLEFBaUI4QixBQTBNTSxBQTBCcEMsQUF5QkEsQ0F2ekZtQixBQVNBLEFBMllSLEFBd0ZtQixBQWdCaEMsQUE4RW1CLEFBa0VhLEFBZ0JoQyxBQTZFbUIsQUFNRCxBQTRRZ0IsQUFlaEMsQUE0RWtCLEFBa0RHLEFBc0RELEFBNkZILEFBZWpCLEFBZ0ZtQixBQTRFYSxBQWVoQyxBQWdtQmdDLEFBZWhDLEFBNEdvQixBQThCTixBQTRGRyxBQStDSSxBQVVJLEFBeVlNLEFBZ0IvQixBQWlHb0IsQUE2QnBCLEFBOEJvQixDQWgxRkcsQUEwQkEsQUFpVkwsQUE0RkQsQUFjRCxBQTZCQSxBQXVDRSxBQThFRCxBQWNELEFBOEJBLEFBNERELEFBV0ksQUFRQSxBQU1uQixBQU1vQixBQTRDRCxBQXFCQSxBQWNOLEFBNkJLLEFBZ0JDLEFBc0JDLEFBMEZELEFBY0QsQUE2QkEsQUFxQkMsQUFvRUwsQUF1SkssQUFlRCxBQThCQSxBQXNCTixBQWlCUSxBQTRGRCxBQWNELEFBNkJBLEFBVUMsQUFrRkMsQUFlSyxBQVdMLEFBZUssQUFnVmIsQUFpQlEsQUErRkQsQUFjRCxBQWVDLEFBY0QsQUFlQyxBQXVDQSxBQTZDSixBQWdEQyxBQXFGUyxBQVNDLEFBc0NELEFBeUJBLEFBd0ZGLEFBWUgsQUFxQlAsQUFzQk0sQUFxQkEsQUFlUSxBQThCVCxBQXVCTixBQWlCUSxBQXVIRixBQXlCQSxBQTRDQyxDQTd4RVQsQUE0S1MsQUFLQSxBQXNMUCxBQStLUyxBQXVCSixBQW1CRixBQXdaTSxBQXdCSixBQWtCSSxBQXNsQkEsQUEwc0JBLEFBK0JKLEFBcUJJLENBcDVGdkIsQUErTUEsQUFTNkIsQUE2QkssQUE2RWxDLEFBUzZCLEFBK01aLEFBc0ZELEFBMkVDLEFBaUZPLEFBc0hMLEFBMkZGLEFBZ0ZFLEFBNFJBLEFBK0tBLEFBdUZqQixBQWlMQSxBQVM2QixBQTZCSyxBQTJFbEMsQUFTNkIsQUE0SmQsQUF5T0ssQUFtRHBCLEFBc1RpQixBQXFHRixDQWhyRmpCLEFBVWlCLEFBMEJBLEFBcURqQixBQVlZLEFBa0JtQixBQTBDL0IsQUFvQ0EsQUE2QjZCLEFBZ0M3QixBQStEQSxBQVM2QixBQTBiM0IsQUF3YW1CLEFBYUUsQUFrTk4sQUFnTGYsQUF5RkEsQUFZWSxBQWtCbUIsQUE0Qi9CLEFBd0NBLEFBNkI2QixBQWdDN0IsQUE2REEsQUFTNkIsQUE2QmdCLEFBd083QyxBQXNDZ0IsQUE2RkMsQUFJQSxBQUlBLEFBSUEsQUEyRWpCLEFBVWMsQUF5QkEsQUF5RGQsQUFZVyxBQW1Cb0IsQUE4VWQsQUFVakIsQ0EvekZnQixBQW1YTSxBQWd4QnRCLEFBNkJBLEFBa1hBLEFBMDBDQSxBQWlCa0IsQ0E3bUZwQixBQVM2QixBQW1FN0IsQUE4eEJFLEFBbWNBLEFBR0EsQUFpUUEsQUFTNkIsQUFpRTdCLEFBdVFtQixBQXdFQSxDQXY3RHJCLEFBcUZBLEFBNDlDRSxBQW1GQSxFQWp3RGEsQUErUGYsQUF3Q0EsQUFvSW9CLEFBK0JwQixBQW1ORSxBQXFIb0IsQUFxQ3BCLEFBMFFZLEFBMEpRLEFBdUNwQixBQXlUZSxBQTZQSCxBQWdCUSxBQXdDcEIsQUEyb0JvQixBQTRDcEIsQ0E5aEZrQixBQTBqREUsQUFvNkJQLENBM2lGWSxBQXdTYixBQTQrQlUsQUF1U0ssQUE2UzNCLEFBeUJzQixBQXFkSyxBQThOTCxDQWhsRUYsQUFxVEosQUFrRE0sQUF1eENGLEFBbVdOLENBdjdFRixBQTRpQ1MsQUE0Q0osQUFtZUgsQUF3UUcsQUFrakJOLEFBNkJYLENBeDNFUyxBQStESyxBQXNHQSxBQWFBLEFBODJCSyxBQTJoQlIsQUFzREssQUFxR0EsQUFZQSxBQXdXaEIsQUFhZ0QsQUFrSmhELEFBcUZZLENBOW9EWixBQTRVc0MsQUEySW5CLEFBb3JCeUIsQUE0VXZCLEFBZUYsQ0F0eEVKLEFBaVpGLEFBMFVNLEFBd0NGLEFBK1RJLEFBazlCVyxBQWtPakIsQUF1SUYsQUF5QkMsQUFxVGtCLENBaHdFbkIsQUE4RFMsQUE2QlgsQUFnQkcsQUF3RGhCLEFBMkR3QixBQThCVixBQWNDLEFBNEdFLEFBNkVGLEFBOElXLEFBNkJYLEFBZ0RNLEFBK01LLEFBOEJYLEFBZ0JHLEFBaUlRLEFBNkJYLEFBd0NNLEFBZ2FxQixBQTJJaEIsQUE2QlgsQUFpZ0JjLEFBK0pILEFBeUJKLEFBZ0ZELENBaDlFckIsQUE4RWdCLEFBNkJBLEFBbUlTLEFBOEJBLEFBcUZGLEFBUUMsQUF3REQsQUFxQkwsQUE2QkEsQUE4QkEsQUFpQ2hCLEFBK0V5QixBQTZCQSxBQW1DekIsQUE0RnFCLEFBNERyQixBQW1FZ0IsQUE4QkEsQUFtRWhCLEFBK0V5QixBQTZCQSxBQXdCRSxBQXllSCxBQWtGQyxBQTZCQSxBQTZCVixBQXlCeUMsQUFjN0IsQUFxQmIsQUFvWE8sQUFxQkwsQUE4QkEsQUFtT29DLEFBZ0JwQyxBQTJDc0MsQ0F4NUYxQyxBQVNLLEFBZ0RKLEFBMEJBLEFBcUhmLEFBSUEsQUF1T1ksQUE4S0EsQUF1SlosQUE4RGMsQUFrSkEsQUFzSlosQUEwQ2MsQUEwR2QsQUErSmtCLEFBbU9KLEFBMEJBLEFBMlZkLEFBcUJrQixBQXNLbEIsQUE0SUEsQUFJQSxBQUlBLEFBSTZDLEFBNkJDLEFBbU1sQyxBQXFKTSxBQStKQyxDQXpsQm5CLEFBTXFDLEFBbUVyQyxDQXJ5RWEsQUF5S0ssQUF5Tk4sQUErVkssQUFLRyxBQWFKLEFBd1ZNLEFBK0NHLEFBc0VQLEFBNlVJLEFBZUosQUEyQk8sQUFzbEJOLEFBeUdXLEFBdVliLEFBME5LLEFBc0JRLEFBOEJSLENBdjNDTixBQWk4QmEsQ0EzMUVGLEFBZ1FYLEFBeVloQixBQTBjZSxBQXdlYyxBQTZjN0IsQUF3RWlCLEFBOEhDLENBM3hFcEIsQUEwQkEsQUFpaURFLEFBMEJBLEFBbXRCQSxBQStDQSxBQXlCQSxBQTJCYyxBQWtFVyxBQTZCekIsQ0F2N0VZLEFBMmpERSxBQWdwQk8sQUFtRHJCLENBbi9DbUIsQUE2T2tCLEFBMkp0QixBQTYxQ0MsQ0E3dEVELEFBOE1JLEFBdVdFLEFBeWNBLEFBNm1CQSxBQXlaSSxBQXdLVixBQWtITSxBQW9OckIsQ0F0c0ZXLEFBMEJjLEFBc0dBLEFBYUEsQUFvUEgsQUF3V0UsQUEyS0EsQUFxSUosQUF3SkksQUE4S0EsQUEyTlgsQUFrQkQsQUFxR0EsQUFZQyxBQXVFUSxBQTJNRyxBQTJHeEIsQUF1THlCLEFBc1JELENBM3hFTSxBQWNLLEFBOEtuQixBQTBITSxBQTJGTixBQWtKRCxBQW9sREMsQUErTUMsQ0Fod0VGLEFBZ0tBLEFBOEZTLEFBaVJQLEFBMmNBLEFBK21CQSxBQTBKakIsQUFLVyxDQW50RUksQUFvQkosQUFzakJhLEFBMkxWLEFBcVdFLEFBOEJDLEFBNENDLEFBaUVKLEFBcUlZLEFBTVgsQUFvUEYsQUEwQkMsQUErVkMsQUEwS1csQUF5Z0JYLENBdm1GUixBQTBCQyxBQTRiTSxBQTZCQSxBQW9DRCxBQXVTRyxBQTZCQSxBQThCaEIsQUFLZSxBQW9XVyxBQWtDVixBQThCQSxBQTJuQnFCLEFBb1ZuQixBQWtURixBQThCRSxBQW1QbEIsQ0F4c0YwQyxBQXdQNUMsQUEwWEEsQUF5OEI4QyxBQWl5QkEsQUFrUTVDLENBdG9EQSxBQW1jQSxBQWkxQ0EsQ0FscUVnQixBQXVXaEIsQUEyVFksQUE2bUJBLEFBbXJCQSxBQWdKWSxDQXh6RjFCLEFBbUdjLEFBNG5Dd0IsQUF1VXBDLEFBd0hxQixBQTJ4QlAsQUFtQm9CLEFBbU1mLEFBd0xDLENBcnRGdEIsQUFtcEJBLEFBb0JFLEFBZ0VBLEFBeVhpQixBQTRWakIsQUErSEEsQUFpNUJBLENBMzBERixBQThDRSxBQTQ5QmEsQUFxR0EsQUE2VGIsQUE2RGtCLENBM3FFSyxBQWdJWCxBQVVkLEFBaU5pQixBQSsxQ0QsQUFtSUQsQUE2VlEsQUErSUosQ0Evd0VNLEFBdTdEdkIsQUFnbUJtQixDQTU3REwsQUE4QkEsQUFvRGhCLEFBaVNrQixBQTZCQSxBQXVDaEIsQUF1WWdCLEFBNkJBLEFBOEJoQixBQXFqQmdCLEFBNkJBLEFBd3ZCaEIsQUFvREEsQ0FqNUZtQixBQXlYUixBQTJqQnFCLEFBNHFCUCxBQW9oQ0QsQ0FsMURSLEFBK0VLLEFBZ1hyQixBQTRTQSxBQTZHeUIsQUEraUJ6QixBQStWZ0IsQ0F4NENFLEFBNE9VLEFBaU5SLEFBa1hELEFBMENTLEFBd1ZFLEFBMlZGLEFBMkVWLENBaHdFRCxBQXFHUyxBQWlCYixBQTBDSSxBQTBIbkIsQUFrTDhCLEFBbUVULEFBZ0huQixBQXVTZSxBQW9ESSxBQXlqQkosQUFzREksQUE2bkJKLENBanJGRSxBQStnQkUsQUE2QkEsQUErQ3JCLEFBNFJzQixBQTZCQSxBQThDcEIsQUFzTW1CLEFBMEVuQixBQTJHcUIsQUE4QkEsQUFnRHJCLEFBNm1CQSxBQStDZ0IsQUFxakJFLEFBK0VsQixBQW1EZ0IsQ0F2dUZDLEFBNnJDakIsQUF5d0IyQixBQXVsQkwsQ0F4NkVILEFBOHJFbkIsQUF3SmtELEFBd0xsQyxDQXAzQmhCLEFBcUdBLEFBcWFBLENBelpBLEFBMGhCa0IsQUErU2xCLENBdGdGNkIsQUFxakIvQixBQWdha0IsQUFxbUJGLEFBc3JCSSxDQS9zQ0YsQ0F4Z0NOLEFBc0dBLEFBYUMsQUF3RWIsQUEwd0VrQixDQW53RVMsQUFvVjNCLEFBcXVDOEMsQUFzUHBCLEFBaUN4QixBQThIbUIsQUE2ZUksQ0F0d0V6QixBQXFHcUIsQUE4QkEsQUFxVkUsQUE2QkEsQUEyVHJCLEFBbUhxQixBQTZCQSxBQTZKUCxBQXdUYSxBQThITixBQTZCQSxBQTZCckIsQUFxR3lCLENBaitCSixDQXBlSCxBQXN1REEsQUE4RUcsQ0F6Z0VTLEFBZ3pCRSxBQTZtQkEsQUFxTmxCLEFBOGRrQixDQTd3RVosQUFzNURwQixDQW4xRVUsQUFVQSxBQW9kYSxBQXFLQSxBQTZXRSxBQXdETyxBQXFJakIsQUEwR1UsQUFvS0EsQUF3RE8sQUFzakJQLEFBdUJKLEFBa0NXLEFBZ0toQixBQUlxQixBQWlHaEIsQUFTckIsQUErVzZCLEFBd0JSLEFBYUYsQUErQmEsQ0F6cERkLEFBazFCQSxDQTE0REYsQUFrYlEsQUFnS0EsQUEwUEEsQUFxSEUsQUEyY0EsQUE0SVgsQUFtZVcsQUF3aUJOLEFBOEJBLENBMW5GRCxBQW1GSCxBQWdJTCxBQXNHQSxBQSswQmtDLEFBNG1CMUIsQ0E3dkRDLEFBK1VULEFBNEdHLEFBcWNkLEFBNkJBLENBcllGLEFBNkJBLEFBbW1CRSxBQThLb0IsQUE4QkEsQUF5UkYsQUE0eENwQixDQXJyRHVCLEFBbWJILEFBbXdCbEIsQ0FyeUVGLEFBMmpERSxBQThTYyxBQXFkZCxBQTBHZ0IsQUFvSUUsQ0FtTU0sRUFuM0YxQixBQVVBLEFBaVpxQixBQW0wQkssQUFpQ0csQUF5SkwsQUFrakJFLEFBMkRGLEFBdU9MLEFBNGNLLEFBc1BFLENBdDBFSixBQXVXRSxBQTQ2Q0YsQ0EvckVELEFBb3lCTixBQXV4QlEsQUE4TkMsQUFpUEUsQUF1SkosQUEyTEMsQ0F6c0RSLEFBOFZBLEFBdzRDQSxDQXowRWYsQUFzR0EsQUFxWEEsQUE4QkEsQUFxVkUsQUE2QkEsQUE4YUEsQUE2QkEsQUFtbEJBLEFBNkJBLEFBZ0hBLENBbjZERixBQW85Qm9CLEFBdVRILEFBOHZDRCxDQTVvQkMsQUF1YVMsQ0EvbkRBLEFBc0l4QixBQWsxQmlCLEFBd3lCVSxDQWxyRjdCLEFBeVhnQixBQW9nQ1UsQUFxMEJOLENBeHFFcEIsQUFpVThCLEFBZ0JkLEFBcXFDRyxBQTRZakIsQ0E1eERZLEFBMmpESyxBQTBPSyxBQThuQnRCLEFBOEJBLENBdGdDQSxBQWc2QkEsQ0F0NEJBLEFBd21CQSxDQXprRW1CLEFBMnhCTCxBQXFYZCxBQThCQSxBQTZZcUIsQUFnN0JyQixDQWpxRnFELEFBZzBCdEMsQUE4VkQsQUF3NENkLENBelVtQixBQWlyQm5CLENBMTVFbUIsQUFnS0EsQUErV0MsQUEyY0EsQUErbUJBLENBNXpEWCxBQWlqREUsQUF1aUMwQixDQS91RTFCLEFBZ3pCRSxBQTZtQkEsQUFtckJBLENBN2VvQixBQStKakMsQ0FuK0JlLEFBNm1CQSxBQTBSVSxBQThEVixBQTJWQyxBQTJMSCxDQXZyRkQsQUF3VFUsQUFvSFIsQUFrUVUsQUFxR1IsQUFvV08sQUFvY1QsQUFpeUJBLENBdDBFRSxBQXlQQSxBQWloRFcsQUFrOUJkLENBai9FUSxBQXdpRHJCLEFBb2ZxQixDQXYzQnJCLEFBb21CYSxBQThFRSxDQXB1RUksQUFpN0JHLEFBOFJBLEFBOGdCdEIsQUF3ZkEsQ0F2Z0VGLEFBbUJBLEFBZ0dBLEFBNnpCRSxBQWlvQkEsQUFtQkEsQUE4RkEsQ0EzbkRGLEFBd0dBLEFBbWNFLEFBc2dDQSxBQXNHQSxFQXBvREYsQUFrVWMsQUFnekJFLEFBK2JkLEFBOEtjLEFBbXJCQyxDQXY2Q1MsQUFvdEJSLENBd2xCUSxBQXFTYixDQXZvQmtDLEFBdVRsQixBQWdPUCxDQXZrRkYsQUFtK0JsQixBQXlQdUIsQUErVkgsQUE4UUcsQUFtaEJILEFBc1pWLENBNTVEYSxBQTJjQSxBQSttQkEsQUE0bUJBLENBcnJFUCxBQXFHSyxBQTJETCxBQTRTTyxBQXV2Q2YsQ0E1Z0NRLENBMGxDSCxDQWxrRUUsQUF3RWpCLEFBaUxrQixBQWc0Q2hCLEFBb2VtQixFQXFrQkwsQ0ExdkVNLEFBd2xCUixBQXdOUyxBQTZtQkEsQUFnTE4sQUF3dUJELENBdGRBLEFBaVBLLEVBN3dFQSxBQTBqRG5CLENBdGhDK0MsQUE4Ui9CLEFBcXdDVSxDQTMxRUYsQUEyakRFLENBd1BILENBeVRULEVBMWxDMkIsQUF5eEJ6QyxBQXdRQSxBQXdpQnFCLENBdmtGZixBQXVVZSxBQWdLQSxBQStpQk0sQUFxaUJuQixBQWl5QkEsQ0F4K0RHLEFBZ0tDLEFBbVhDLEFBNFJBLEFBK0tBLEFBZ25CQSxBQTZyQkEsQUE0Q08sQUFhTCxDQWxxRkYsQUE2dEZBLENBcCtFRixBQTY4QlUsQUE2bUJBLEFBa01SLEFBa1JiLENBMUtnQixBQXlZSyxDQWhsRUYsQUF1V0UsQ0FseEJLLEFBMmpERSxBQWl5QkEsQUFVRSxFQXB5QzlCLEFBcW1DbUIsQUFzV0UsQ0FoeUNnQixBQTZtQkEsQUE4UHRCLENBM3BEOEIsRUF6RS9CLEFBNkJBLEFBd1dFLEFBOElBLEFBNkJBLEFBK1BBLEFBOEJBLEFBaUpBLEFBNkJBLEFBbWxCQSxBQTZCQSxBQWdxQkEsQ0E5eUZsQixBQW1zQmdCLEFBOEJBLEFBaXNFRixDQXY0RmQsQUFtYWUsQUE0dkRELEFBNnFCQyxDQWxxRmYsR0FzTTZCLEFBdTVEYyxBQW9OdkIsQ0EzMUVGLEFBMmpERSxBQWluQ0YsQUFtQmhCLEVBNW5CQSxDQWowRFcsQ0FzZ0ZVLENBeHVCQSxDQTZxQlQsQ0FwMEVLLEFBNkJBLEFBd1dFLEFBOElBLEFBNkJBLEFBK1BBLEFBOEJBLEFBaUpBLEFBNkJBLEFBbWxCQSxBQTZCQSxBQWdnQkgsQUFnS0csQ0FoM0VVLEFBcVFaLEFBOEJBLEFBNGVjLEFBNHVCQSxBQW13Qk0sQ0FubUNoQixHQXA2Q0ksQUEyakRFLENBOFQzQixBQXVyQkEsQ0F4MEVGLEFBMDZFcUIsQ0FwMURhLEFBdStDaEMsQUE0QjZDLENBLytFRixBQW9KQSxBQWloQ0osQUFrUlAsQUF3UmEsQUFrcEN4QixDQXQ1RGlCLEVBdGdCbkIsQUFxS0ksQUE2V0YsQUFvUU0sQUFtQ04sQUFvS0EsQUE4bUJBLEVBd25CRixFQW9SMEIsQ0FuNEYxQixBQW9nQnJCLEFBNkJxQixBQXdXRSxBQThJckIsQUE2QnFCLEFBK1ByQixBQThCb0IsQUFpSnBCLEFBNkJvQixBQW1sQnBCLEFBNkJvQixBQTRDNkIsQUFrSjVCLEFBa2VyQixDQTNtRWtCLEFBOEJwQixBQTByQjBDLEFBNm1CQSxBQW9zQmYsRUFqMER6QixFQXhhOEIsQUFzWEUsRUE4K0RaLEVBNXRFZ0IsRUEwYWYsQUEyY0EsQUErbUJBLEFBa05rQixBQStlbEIsQUF3RjRCLEVBMTZFTixDQW8xQlgsQUE2M0NYLENBakZXLEVBbURoQyxDQWh3Q0EsQUE4S0EsQUFnbkJBLENBOWtERixBQW1JQSxBQXFPRSxBQTJLQSxBQXdtRGdDLENBMTlDVixLQTRpQ0QsQUEwakJyQixFQXBUQSxDQXgyQ29CLEFBc0hwQixBQW1qQ3FCLEdBaUtGLENBLytFckIsQUFvSkEsQUEyakRFLENBMDdCQSxHQXB2Q3NDLEFBNm1CQSxHQTA1QmQsQ0E3cEJILENBcHdDckIsQUEyY0EsQUErbUJBLEVBL29ERixDQXN4QmUsQUF3L0JXLEVBOWdDeEIsQ0FxbkNvQixDQXFOcEIsQ0FzTWMsQUF1RGQsSUF0a0ZGLEFBaVJzQyxBQTA4QnBDLEFBZ1dBLEFBNlFBLEFBb2hCQSxDQWo3QnFCLEFBbVhNLEFBNnRCM0IsQ0FobEVGLEFBdVdFLEFBb1FnQixBQXFxRDhCLEdBcjNFaEQsQUFnS0EsR0EwaUV5QyxBQXNPdkMsSUFqb0JBLENBdkdBLEVBejlCQSxDQTlCaUIsQUF3b0NJLElBMzNDckIsTUEyL0JzQixDQW5rRFAsSUE0ekJJLENBamhDQSxBQTJqREUsR0FweUNSLEFBa2hCQSxBQXVTRSxBQW9LRixBQThtQkEsQ0EzNkNmLElBNWtCZ0MsR0EwMEZOLEdBMzRETixBQTJjQSxBQThtQkEsRUEza0RQLEFBMHZCWCxBQStEYSxHQXJwQkYsQUFxYVUsQUEyY0EsQUErbUJBLEFBaXNCQSxFQTl4RHJCLENBME5pQixBQWlQakIsQUEyZmlCLEVBOFVJLENBc2NSLEVBL3ZFRyxBQXl6QkUsR0FycEJGLEFBOFdoQixBQTJjQSxBQThtQkEsQ0E1bkJBLEFBNm1CQSxFQXFRQSxBQTRsQkEsRUF2NEVGLEFBc1hFLENBNC9DYSxBQXdYQyxDQWhnRE8sQUE0dUJBLEtBb0JyQixDQS8vQzBCLEFBeXpCMUIsQ0FXQSxDQTR5Q0EsQ0E1OERGLENBb3VERSxDQXY1REYsQUErd0VvQixJQXAwRUYsSUFvMEJJLEFBNHVCcEIsRUFvd0J3QixJQXJtQ1EsRUFzbkNoQyxJQXAwRUYsQ0FvRUEsS0Fnd0JFLEdBOG5DZ0MsR0FrWGhDLFFBenFEbUIsQUEyY0EsQUErbUJBLEFBaXNCQSxLQTVsRndCLEFBMmpEM0Msd0JBdWhCQSxNQXZ1RUYsVUFzSkEsa0JBaTJCc0IsQUEyY0EsQUErbUJBLEFBaXNCQSxrQkExdkRwQixBQTJjQSxBQSttQmlCLEFBaXNCQSxRQXpyQ1UsT0F5ZjNCLEFBaXNCQSxRQXRjd0IsVUFudkJ4QixZQW92QkEiLCJmaWxlIjoiRzpcXE9TUGFuZWxcXGRvbWFpbnNcXGdtbmV4dDlcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxQcm9kdWN0c0xpc3RQbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzTGlzdFBsYXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLmRhdGFbMF07XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IHRoaXMucHJvcHMuZGF0YS5kYXRhWzFdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnktaGVhZGVyXCI+0JHRgNC10L3QtNGLOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIvcHJvZHVjdHM/Y2F0ZWdvcnk9bXR1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5NVFU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIvcHJvZHVjdHM/Y2F0ZWdvcnk9bWFuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpbmtcIj5NQU48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHM/Y2F0ZWdvcnk9bGllYmhlcnJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeS1saW5rXCI+TGllYmhlcnI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9XCIvcHJvZHVjdHM/Y2F0ZWdvcnk9eWFtelwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeS1saW5rXCI+0K/QnNCXPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMCBwcm9kdWN0LWNhcmQtcGxhdGVcIj5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtY29udGFpbmVyXCIga2V5PXtpdGVtLmtleX0+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcHJvZHVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdGVnb3J5LCBpZDogaXRlbS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhcz17YC9wcm9kdWN0cy8ke2NhdGVnb3J5fS8ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvcHJvZHVjdHMvdGh1bWItJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57aXRlbS5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ib3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQstC40LPQsNGC0LXQu9GMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtbW90b3IgcGItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubW90b3JNYXJrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtcG93ZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCc0L7RidC90L7RgdGC0Yw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1wb3dlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZWxlY3RyaWNQb3dlcn0g0LrQktGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZC1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LTRgNC+0LHQvdC10LUuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgLmVudGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbnRlci1hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZW50ZXItZG9uZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXhpdCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXhpdC1hY3RpdmUge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2R1Y3RzLXByb21vIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTFlMWUxIDAlLCAjYjFiMWIxIDEwMCUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMTBweCAxNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXByb21vIC50ZXh0LWNvbnRhaW5lciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAudGV4dC1jb250YWluZXIgLnRleHQtbWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmZpbHRlci1ncm91cCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuZmlsdGVyLWdyb3VwIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBib3R0b206IC0zNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnINC60JLRgic7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnINC60JLRgic7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MiwgMTI1LCAxNCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS12YWx1ZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzUlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAudmlldy1pdGVtIHtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLmFjdGl2ZSAuYmxvY2sge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC5hY3RpdmUgLmJsb2NrLW1pbixcclxuICAgICAgICAgIC5ibG9jay1tYXgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC5wbGF0ZS1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAucGxhdGUtaWNvbiAuYmxvY2sge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTEge1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMiB7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTMge1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTQge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay01IHtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay02IHtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTcge1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stOCB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTkge1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLmxpc3QtaWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stbWluIHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTtcclxuICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLW1heCB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMSB7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTIge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTMge1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay00IHtcclxuICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTUge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay02IHtcclxuICAgICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3Qge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGkge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5hY3RpdmUgLmNhdGVnb3J5LWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDAgMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAucHJvZHVjdC1uYW1lOjpmaXJzdC13b3JkKCkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAucHJvZHVjdC1uYW1lOjpmaXJzdC13b3JkKCkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLmhlYWRlci1taW4tY29sb3JlZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIC5zZWN0aW9uLXdyYXBwZXIgLnByb2otZmVlZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgLnNlY3Rpb24td3JhcHBlclxyXG4gICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAucHJvai1pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgLnNlY3Rpb24td3JhcHBlclxyXG4gICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb21tb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5wcm9tby10ZXh0LWNvbnRhaW5lciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW9cclxuICAgICAgICAgICAgICAucHJvbW8tdGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAudGV4dC1taW4tY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnRleHQtbWluIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUge1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lOjpmaXJzdC13b3JkKCkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXRleHQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC5zdWJoZWFkaW5nLWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAucHJvai1mZWVkIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAgIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLnByb21vLXRleHQtY29udGFpbmVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXIgLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXIgLmNhcmQgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tb1xyXG4gICAgICAgICAgICAgIC5jYXJkcy1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpLCBzZXJpZjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vXHJcbiAgICAgICAgICAgICAgLmNhcmRzLXBsYXRlXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgIHRvcDogNDc1cHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtNzJweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2Q1ZDVkNTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmFjdGl2ZSAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI3MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMTVweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogOHB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lOjpmaXJzdC13b3JkKCkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXRleHQgLnRleHQtd3JhcHBlciAudGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2Uge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIC5zZWN0aW9uLXdyYXBwZXIgLmhlYWRlci1taW4tY29sb3JlZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIC5zZWN0aW9uLXdyYXBwZXIgLnByb2otZmVlZCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAgIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24td3JhcHBlclxyXG4gICAgICAgICAgICAgIC5wcm9qLWZlZWRcclxuICAgICAgICAgICAgICAucHJvbW9wcm9qLWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb21tb24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDE1cHggMjVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuZmlsdGVyLWdyb3VwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAgLmZpbHRlci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2Uge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTc0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXg6OmFmdGVyIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnINC60JLRgic7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAxMjUsIDE0KTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLXZhbHVlIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDIlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC52aWV3LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLnBsYXRlLWljb24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2sge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTEge1xyXG4gICAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stMiB7XHJcbiAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stMyB7XHJcbiAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stNCB7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stNSB7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay02IHtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stNyB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay04IHtcclxuICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay05IHtcclxuICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLmxpc3QtaWNvbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLW1pbiB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay1tYXgge1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTEge1xyXG4gICAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay0yIHtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTMge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay00IHtcclxuICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTUge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTYge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YjdiN2I7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGk6aG92ZXIgLmNhdGVnb3J5LWxpbmsge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE1cHggcmdiYSgyMTAsIDc0LCA2NywgMC40NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuYWN0aXZlIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNzBweDtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDhweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LXVwKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC5zdWJoZWFkaW5nLWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXRleHQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvSU1HXzMuanBnJykgLTYwcHggMCBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTE1cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvcHJvZHVjdHMvYmctcHJvZHVjdHMuanBnJykgNTAlIDAlXHJcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAucHJvbW8tdGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5wcm9tby10ZXh0LWNvbnRhaW5lciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc3MHB4O1xyXG4gICAgICAgICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLnByb21vLXRleHQtY29udGFpbmVyIC50ZXh0LW1pbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tb1xyXG4gICAgICAgICAgICAgIC5wcm9tby10ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC50ZXh0LW1pbi1jb250YWluZXJcclxuICAgICAgICAgICAgICAudGV4dC1taW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMTI1cHggMTI1cHggMTI1cHggLyAzMzBweCAzMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNhcmQtY29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXI6aG92ZXIgLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXI6YWN0aXZlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXIgLmNhcmQgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lciAuY2FyZCAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tb1xyXG4gICAgICAgICAgICAgIC5jYXJkcy1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCksIHNlcmlmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW9cclxuICAgICAgICAgICAgICAuY2FyZHMtcGxhdGVcclxuICAgICAgICAgICAgICAuY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jb250YWluZXItMSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jb250YWluZXItMiB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jb250YWluZXItMyB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jb250YWluZXItNCB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xyXG4gICAgICAgICAgICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNvbnRhaW5lci00IC5jYXJkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTVweCAxN3B4IDI1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLXRleHQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNlYXJjaC10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5zZWFyY2gtdGV4dC12YWx1ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuZmlsdGVyLWdyb3VwIC5maWx0ZXItYmxvY2sge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1taW4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTc4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICByaWdodDogLTg1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzMSwgMTcyLCAxMTcpO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksXHJcbiAgICAgICAgICAgICAgICBpbnNldCAtMXB4IC0xcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgICAgICAgICAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tdmFsdWUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQyJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4ycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIHtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE5N3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMjBweCAyNXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNjNGM0YzQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3RvciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXItdGl0bGUge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2M0YzRjNDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbm90by1mb250KTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZTo6Zmlyc3Qtd29yZCgpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3ItdGl0bGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXRleHQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvSU1HXzMuanBnJykgMCAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTE1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAucHJvai1mZWVkIHtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24td3JhcHBlclxyXG4gICAgICAgICAgICAgIC5wcm9qLWZlZWRcclxuICAgICAgICAgICAgICAucHJvbW9wcm9qLWNhcmQ6aG92ZXJcclxuICAgICAgICAgICAgICAucHJvai1pbWcge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yMjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAgIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXdyYXBwZXJcclxuICAgICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvaW1hZ2VzL0lNR18yLmpwZycpIDI1JSAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTglO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2Uge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0xpc3RQbGF0ZTtcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\ProductsListPlate.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ProductsListPlate);

/***/ }),

/***/ "./components/products/ProductsNewContainer.js":
/*!*****************************************************!*\
  !*** ./components/products/ProductsNewContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video-react */ "video-react");
/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(video_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../YoutubeVideo */ "./components/YoutubeVideo.js");
/* harmony import */ var _YoutubeVideoMan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../YoutubeVideoMan */ "./components/YoutubeVideoMan.js");
/* harmony import */ var _YoutubeVideoMan2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../YoutubeVideoMan2 */ "./components/YoutubeVideoMan2.js");
/* harmony import */ var _YoutubeVideo1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../YoutubeVideo1 */ "./components/YoutubeVideo1.js");
/* harmony import */ var _YoutubeVideoLiebherr2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../YoutubeVideoLiebherr2 */ "./components/YoutubeVideoLiebherr2.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class ProductsNew extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: _tables_productsList__WEBPACK_IMPORTED_MODULE_1__["default"],
      categorySelected: 'MTU',
      itemsSelected: [{
        label: 'MTU 700',
        id: 24,
        img: 'mtu700.jpg',
        as: '/mtu-700',
        motorMark: 'MTU 8V4000 GS L32',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '776',
        thermalPower: '886',
        electricEfficiency: '41,9',
        thermalEfficiency: '46,7',
        overallEfficiency: '88,6',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '210',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer, Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 800',
        id: 25,
        img: 'mtu800.jpg',
        as: '/mtu-800',
        motorMark: 'MTU 8V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '854',
        thermalPower: '891',
        electricEfficiency: '42,8',
        thermalEfficiency: '44,8',
        overallEfficiency: '87,6',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '230',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1000',
        id: 26,
        img: 'mtu1000.jpg',
        as: '/mtu-1000',
        motorMark: 'MTU 8V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400',
        electricPower: '1013',
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
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1100',
        id: 27,
        img: 'mtu1100.jpg',
        as: '/mtu-1100',
        motorMark: 'MTU 12V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1169',
        thermalPower: '1228',
        electricEfficiency: '42,8',
        thermalEfficiency: '45,0',
        overallEfficiency: '87,8',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '330',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1200',
        id: 28,
        img: 'mtu1200.jpg',
        as: '/mtu-1200',
        motorMark: 'MTU 12V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1286',
        thermalPower: '1323',
        electricEfficiency: '43,2',
        thermalEfficiency: '44,5',
        overallEfficiency: '87,7',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '347',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1500',
        id: 29,
        img: 'mtu1500.jpg',
        as: '/mtu-1500',
        motorMark: 'MTU 12V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1521',
        thermalPower: '1403',
        electricEfficiency: '44,3',
        thermalEfficiency: '40,8',
        overallEfficiency: '85,1',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '410',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1600',
        id: 30,
        img: 'mtu1600.jpg',
        as: '/mtu-1600',
        motorMark: 'MTU 16V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1560',
        thermalPower: '1662',
        electricEfficiency: '42,8',
        thermalEfficiency: '45,6',
        overallEfficiency: '88,4',
        fuelType: 'Природный газ ГОСТ 5542-87',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '420',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 1700',
        id: 31,
        img: 'mtu1700.jpg',
        as: '/mtu-1700',
        motorMark: 'MTU 16V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '1718',
        thermalPower: '1795',
        electricEfficiency: '43',
        thermalEfficiency: '45',
        overallEfficiency: '88',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '464',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 2000',
        id: 32,
        img: 'mtu2000.jpg',
        as: '/mtu-2000',
        motorMark: 'MTU 16V4000 GS L64',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '2028',
        thermalPower: '1901',
        electricEfficiency: '44,3',
        thermalEfficiency: '41,6',
        overallEfficiency: '85,9',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '527',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }, {
        label: 'MTU 2020',
        id: 33,
        img: 'mtu2000.jpg',
        as: '/mtu-2000',
        motorMark: 'MTU 20V4000 GS L33',
        gasMixer: '',
        controlBlock: '',
        ignitionSystem: '',
        throttleValve: '',
        excessAirRatio: '',
        voltage: '400, 6300, 10500',
        electricPower: '2145',
        thermalPower: '2239',
        electricEfficiency: '43',
        thermalEfficiency: '44,9',
        overallEfficiency: '87,9',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '',
        nominalGazConsumption: '579',
        noiseLevel: '80',
        serviceInterval: '2000 моточасов',
        totalPowerPlant: 'Не менее 15 лет',
        description: 'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
      }]
    };
  }

  handleClick(e, category) {
    let itemsSelected = [];
    e.preventDefault();

    for (const productsCategory in this.state.items) {
      if (this.state.items.hasOwnProperty(productsCategory)) {
        const products = this.state.items[productsCategory];

        if (products.category == category) {
          itemsSelected = products.products;
        }
      }
    }

    this.setState({
      categorySelected: category,
      itemsSelected: itemsSelected
    });
  }

  render() {
    const data = this.state.itemsSelected;
    const category = this.state.categorySelected;
    const brand = this.props.brand;
    console.log('brand is ' + brand);
    return __jsx("div", {
      className: "container-fluid products"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-12 col-md-3 col-lg-2"
    }, __jsx("span", {
      className: "category-header"
    }, "\u0411\u0440\u0435\u043D\u0434\u044B:"), __jsx("ul", {
      className: "category-list"
    }, __jsx("li", {
      className: category == 'MTU' ? 'category-li active' : 'category-li'
    }, __jsx("a", {
      onClick: e => this.handleClick(e, 'MTU'),
      className: "category-link"
    }, "MTU")), __jsx("li", {
      className: category == 'MAN' ? 'category-li active' : 'category-li'
    }, __jsx("a", {
      onClick: e => this.handleClick(e, 'MAN'),
      className: "category-link"
    }, "MAN")), __jsx("li", {
      className: category == 'LIEBHERR' ? 'category-li active' : 'category-li'
    }, __jsx("a", {
      onClick: e => this.handleClick(e, 'LIEBHERR'),
      className: "category-link"
    }, "Liebherr")), __jsx("li", {
      className: category == 'YAMZ' ? 'category-li active' : 'category-li'
    }, __jsx("a", {
      onClick: e => this.handleClick(e, 'YAMZ'),
      className: "category-link"
    }, "\u042F\u041C\u0417")), __jsx("li", {
      className: category == 'JENBACHER' ? 'category-li active' : 'category-li'
    }, __jsx("a", {
      onClick: e => this.handleClick(e, 'JENBACHER'),
      className: "category-link"
    }, "JENBACHER")), __jsx("li", {
      className: category == 'MTU' ? 'category-li active' : 'category-li'
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: "/products?brand=MTU",
      scroll: false
    }, __jsx("a", {
      className: "category-link"
    }, "MTU"))), __jsx("li", {
      className: category == 'MAN' ? 'category-li active' : 'category-li'
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: "/products?brand=MAN",
      scroll: false
    }, __jsx("a", {
      className: "category-link"
    }, "MAN"))))), __jsx("div", {
      className: "col-12 col-md-9 col-lg-10 product-card-plate"
    }, data.map(item => __jsx("div", {
      className: "product-card-container",
      key: item.id
    }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
      href: `/products/${category}/${item.id}`,
      key: item.key
    }, __jsx("a", {
      className: "product-card"
    }, __jsx("div", {
      className: "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${item.img}`,
      alt: item.label,
      className: "product-card-img"
    })), __jsx("div", {
      className: "text-container"
    }, __jsx("div", {
      className: "flex-top"
    }, __jsx("span", {
      className: "product-name"
    }, item.label)), __jsx("div", {
      className: "flex-bot"
    }, __jsx("div", {
      className: "flex-row"
    }, __jsx("span", {
      className: "product-card-motor-title"
    }, "\u0414\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C:"), __jsx("span", {
      className: "product-card-motor"
    }, item.motorMark)), __jsx("div", {
      className: "flex-row"
    }, __jsx("span", {
      className: "product-card-power-title"
    }, "\u041C\u043E\u0449\u043D\u043E\u0441\u0442\u044C:"), __jsx("span", {
      className: "product-card-power"
    }, item.electricPower, " \u043A\u0412\u0442"), __jsx("span", {
      className: "product-card-details"
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435...")))))))))), category == 'LIEBHERR' && __jsx("div", {
      className: "row mt-5 m-0 d-flex flex-column"
    }, __jsx("div", {
      className: "col-12 col-md-10 offset-md-2"
    }, __jsx(_YoutubeVideo1__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "myVideo"
    })), __jsx("div", {
      className: "col-12 col-md-10 offset-md-2"
    }, __jsx(_YoutubeVideoLiebherr2__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "myVideo"
    }))), category == 'MAN' && __jsx("div", {
      className: "row mt-5 m-0"
    }, __jsx("div", {
      className: "col-12 col-md-10 col-xl-6"
    }, __jsx(_YoutubeVideoMan__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "myVideo"
    })), __jsx("div", {
      className: "col-12 col-md-10 col-xl-6"
    }, __jsx(_YoutubeVideoMan2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "myVideo"
    })))));
  }

}

ProductsNew.propTypes = {
  brand: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
ProductsNew.defaultProps = {
  brand: 'MTU'
};
/* harmony default export */ __webpack_exports__["default"] = (ProductsNew);

/***/ }),

/***/ "./components/products/ProductsTextSections.js":
/*!*****************************************************!*\
  !*** ./components/products/ProductsTextSections.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsTextSections; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Link */ "./components/Link.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProductsTextSections() {
  return __jsx("div", null, __jsx("section", {
    className: "products-text"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12 col-lg-7 col-xl-8"
  }, __jsx("div", {
    className: "text-wrapper"
  }, __jsx("h2", {
    className: "header-min-colored"
  }, "\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430"), __jsx("span", {
    className: "subheading-common mb-2"
  }, "\u041D\u043E\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), __jsx("p", {
    className: "text"
  }, "\u041F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430 \u043C\u0430\u043B\u044B\u0445 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u043E\u0433\u0440\u043E\u043C\u0435\u043D. \u041E\u043D \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435\u043C \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0438. \u042D\u0442\u043E\u0442 \u0444\u0430\u043A\u0442\u043E\u0440 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 5\xA0\u041C\u0412\u0442. \u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0432 \u0420\u0424", ' ', __jsx("b", null, "\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0438\u0436\u0435 2\xA0\u041C\u0412"), ' ', "\u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u044D\u0442\u0438 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0438\u0441\u043A\u0430\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u043E \u0441\u043D\u0438\u0436\u0435\u043D\u0438\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), __jsx("p", {
    className: "text"
  }, "\u041D\u0435\u043C\u0430\u043B\u043E\u0432\u0430\u0436\u043D\u0443\u044E \u0440\u043E\u043B\u044C \u0434\u043B\u044F \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u0441\u044B\u0433\u0440\u0430\u043B\u043E \u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \u2116442 \u043E\u0442 04.05.2012\u0433., \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043E\u043D\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0442\u0435\u0432\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u043E", ' ', __jsx("b", null, "\u0441\u043D\u0438\u0437\u0438\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044B"), " \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0439 \u043F\u0440\u0438 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0438\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u043F\u0440\u0438 \u044D\u0442\u043E\u043C \u0438\u0437\u043B\u0438\u0448\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0432 \u0441\u0435\u0442\u044C.", ' '), __jsx("p", {
    className: "text"
  }, "\u0412 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043D\u0435\u0440\u0433\u043E\u0434\u0435\u0444\u0438\u0446\u0438\u0442\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u043E\u0432. \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0435\u0439 \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044E \u043C\u043E\u0436\u0435\u0442 \u0434\u043E\u0441\u0442\u0438\u0433\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0438\u0445 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438.", ' '))))))));
}

/***/ }),

/***/ "./components/products/ProductsUsage.js":
/*!**********************************************!*\
  !*** ./components/products/ProductsUsage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsUsage; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ProductsUsage() {
  return __jsx("div", {
    className: "jsx-1695318915"
  }, __jsx("div", {
    className: "jsx-1695318915" + " " + "container-fluid usage"
  }, __jsx("div", {
    className: "jsx-1695318915" + " " + "container"
  }, __jsx("div", {
    className: "jsx-1695318915" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1695318915" + " " + "col"
  }, __jsx("div", {
    className: "jsx-1695318915" + " " + "usage-wrapper"
  }, __jsx("h4", {
    className: "jsx-1695318915" + " " + "header-min-colored pb-1 pb-md-3"
  }, "\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439"), __jsx("p", {
    className: "jsx-1695318915" + " " + "text text-bold"
  }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043C\u043E\u0433\u0443\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E, \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u0438\u043B\u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u043D\u0430\u0431\u0436\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u043F\u043B\u0430 \u043D\u0430:"), __jsx("ul", {
    className: "jsx-1695318915"
  }, __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445,")), __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0411\u0443\u0440\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445, \u0441\u043A\u0432\u0430\u0436\u0438\u043D\u0430\u0445 \u0438 \u0448\u0430\u0445\u0442\u0430\u0445,")), __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u041E\u0447\u0438\u0441\u0442\u043D\u044B\u0445 \u0441\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u044F\u0445,")), __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0412 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435,")), __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0438\u0445 \u0443\u0447\u0435\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044F\u0445,")), __jsx("li", {
    className: "jsx-1695318915"
  }, __jsx("span", {
    className: "jsx-1695318915" + " " + "text"
  }, "\u0410\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0430\u0445, \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u0430\u0445, \u0443\u0437\u043B\u0430\u0445 \u0441\u0432\u044F\u0437\u0438, \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u0436\u0438\u0437\u043D\u0435\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0442. \u043F."))), __jsx("p", {
    className: "jsx-1695318915" + " " + "text-bold pt-3 pb-3"
  }, "\u0413\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438\u043C\u0435\u044E\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u041A\u041F\u0414, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u043B\u0438\u044F\u043D\u0438\u0435 \u043D\u0430 \u041A\u041F\u0414 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0433\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u043C\u0435\u043D\u044C\u0448\u0435\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u0433\u0430\u0437\u0430 \u043F\u043E \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u043C\u0438\u043A\u0440\u043E\u0442\u0443\u0440\u0431\u0438\u043D\u0430\u043C\u0438, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043C\u0435\u043D\u044C\u0448\u0435 \u0432\u044B\u0445\u043B\u043E\u043F\u0430 \u0432 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443.")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1695318915"
  }, ".usage.jsx-1695318915{background-color:var(--l-grey);padding-top:30px;padding-bottom:30px;}.usage.jsx-1695318915 .text-bold.jsx-1695318915{color:var(--accent-grey);font-weight:300;}.usage.jsx-1695318915 ul.jsx-1695318915{padding:0;margin-top:30px;width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915{position:relative;padding:0;padding-top:5px;padding-bottom:5px;padding-left:35px;margin-bottom:5px;}.usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915::before{display:block;content:'';position:absolute;width:14px;height:14px;background-color:var(--accent-red);border-radius:10px;left:0px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915 .text.jsx-1695318915{line-height:20px;}@media (min-width:768px){.usage.jsx-1695318915{padding-top:45px;padding-bottom:45px;}.usage.jsx-1695318915 .text-bold.jsx-1695318915{line-height:25px;font-size:19px;}.usage.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915 .text.jsx-1695318915{font-size:19px;line-height:20px;}}@media (min-width:992px){.usage.jsx-1695318915{background-color:#fafafa;padding-top:30px;padding-bottom:30px;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915{padding:45px;background-color:transparent;background:linear-gradient( to right, #fff 25%, rgba(255,255,255,0.85) ), url('/images/IMG_2.jpg') 100% 100% no-repeat;border-radius:10px;box-shadow:3px 3px 4px rgba(0,0,0,0.15);}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 .text-bold.jsx-1695318915{line-height:26px;font-size:18px;color:var(--text);font-weight:500;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915{position:relative;padding:0;padding-top:10px;padding-bottom:10px;padding-left:35px;}.usage.jsx-1695318915 .usage-wrapper.jsx-1695318915 ul.jsx-1695318915 li.jsx-1695318915::before{display:block;content:'';position:absolute;width:14px;height:14px;background-color:var(--accent-red);border-top-left-radius:10px;left:0px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);box-shadow:3px 3px 3px rgba(0,0,0,0.2);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvZHVjdHNVc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RGtCLEFBRzBDLEFBS04sQUFJZixBQVFRLEFBUUosQUFZRyxBQUtFLEFBSUEsQUFJRixBQU1VLEFBS1osQUFZSSxBQU1DLEFBT0osVUE1RUEsR0FvRGUsQ0FwQ3BCLEFBNkRFLENBcENNLEVBYnJCLEFBS3dCLEFBSUwsQUEyQkEsQ0F4RFAsQUE4REUsT0ExRUksQUFxQkUsQUE4QkMsQUErQkMsQ0E3RVQsRUFRSyxBQThERyxHQWhGRixDQStDakIsQUFJQSxBQXVCb0IsS0EvRFIsQUFnQ1osSUFyQ0YsQ0FtRHdCLEFBVTBCLENBeENyQyxBQTZERSxDQXJFTSxDQThERyxHQWhGRixDQVdQLENBK0RLLElBL0NOLEFBNkRFLFFBL0JkLENBdENrQixFQThERSxDQXJEZSxBQStDbkMsQUFjcUMsRUF4RnZDLGFBbUJvQixFQThEbEIsZ0JBN0RGLEVBUXFCLEFBNkRXLG1CQTVEckIsR0FsQmEsTUFtQmQsQUE0REcsUUEzRGdCLENBNERqQixRQUNtQixlQTFCUixtQkFDd0IscUJBdkQvQyxtQkF3REUsVUFwQ0YsU0E2RDhDLHVDQUM1QyIsImZpbGUiOiJHOlxcT1NQYW5lbFxcZG9tYWluc1xcZ21uZXh0OVxcY29tcG9uZW50c1xccHJvZHVjdHNcXFByb2R1Y3RzVXNhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNVc2FnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdXNhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXItbWluLWNvbG9yZWQgcGItMSBwYi1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgINCe0LHQu9Cw0YHRgtGMINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINCz0LDQt9C+0L/QvtGA0YjQvdC10LLRi9GFINGN0LvQtdC60YLRgNC+0YHRgtCw0L3RhtC40LlcclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0IHRleHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICDQndCw0YjQuCDRg9GB0YLQsNC90L7QstC60Lgg0LzQvtCz0YPRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINCyINC60LDRh9C10YHRgtCy0LUg0YDQtdC30LXRgNCy0L3QvtCz0L4sXHJcbiAgICAgICAgICAgICAgICAgINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90L7Qs9C+INC40LvQuCDQvtGB0L3QvtCy0L3QvtCz0L4g0LjRgdGC0L7Rh9C90LjQutCwINGN0LvQtdC60YLRgNC+0Y3QvdC10YDQs9C40Lgg0LJcclxuICAgICAgICAgICAgICAgICAg0LDQstGC0L7QvdC+0LzQvdC+0Lwg0YDQtdC20LjQvNC1INC40LvQuCDRgdC+0LLQvNC10YHRgtC90L4g0YEg0YbQtdC90YLRgNCw0LvQuNC30L7QstCw0L3QvdGL0LzQuCDRgdC40YHRgtC10LzQsNC80LhcclxuICAgICAgICAgICAgICAgICAg0Y3Qu9C10LrRgtGA0L7RgdC90LDQsdC20LXQvdC40Y8g0Lgg0YLQtdC/0LvQsCDQvdCwOlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPtCf0YDQvtC80YvRiNC70LXQvdC90YvRhSDQv9GA0LXQtNC/0YDQuNGP0YLQuNGP0YUsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JHRg9GA0L7QstGL0YUg0L/Qu9Cw0YLRhNC+0YDQvNCw0YUsINGB0LrQstCw0LbQuNC90LDRhSDQuCDRiNCw0YXRgtCw0YUsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPtCe0YfQuNGB0YLQvdGL0YUg0YHQvtC+0YDRg9C20LXQvdC40Y/RhSw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+0JIg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LUsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0YUg0Lgg0LzQtdC00LjRhtC40L3RgdC60LjRhSDRg9GH0LXRgNC10LbQtNC10L3QuNGP0YUsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JDRjdGA0L7Qv9C+0YDRgtCw0YUsINCz0L7RgdGC0LjQvdC40YbQsNGFLCDRg9C30LvQsNGFINGB0LLRj9C30LgsINGB0LjRgdGC0LXQvNCw0YVcclxuICAgICAgICAgICAgICAgICAgICAgINC20LjQt9C90LXQvtCx0LXRgdC/0LXRh9C10L3QuNGPINC4INGCLiDQvy5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ib2xkIHB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICDQk9Cw0LfQvtC/0L7RgNGI0L3QtdCy0YvQtSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC4INC40LzQtdGO0YIg0LLRi9GB0L7QutC40Lkg0L/QvtC60LDQt9Cw0YLQtdC70Ywg0JrQn9CULFxyXG4gICAgICAgICAgICAgICAgICDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCINCy0LvQuNGP0L3QuNC1INC90LAg0JrQn9CUINGC0LXQvNC/0LXRgNCw0YLRg9GA0Ysg0L7QutGA0YPQttCw0Y7RidC10LPQviDQstC+0LfQtNGD0YXQsCxcclxuICAgICAgICAgICAgICAgICAg0LzQtdC90YzRiNC10LUg0L/QvtGC0YDQtdCx0LvQtdC90LjQtSDQs9Cw0LfQsCDQv9C+INGB0YDQsNCy0L3QtdC90LjQuCDRgSDQvNC40LrRgNC+0YLRg9GA0LHQuNC90LDQvNC4LFxyXG4gICAgICAgICAgICAgICAgICDRgdC+0L7RgtCy0LXRgtGB0YLQstC10L3QvdC+INC80LXQvdGM0YjQtSDQstGL0YXQu9C+0L/QsCDQsiDQvtC60YDRg9C20LDRjtGJ0YPRjiDRgdGA0LXQtNGDLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC51c2FnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sLWdyZXkpO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzYWdlIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2FnZSB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2FnZSB1bCBsaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2FnZSB1bCBsaTo6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudXNhZ2UgdWwgbGkgLnRleHQge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC51c2FnZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2FnZSAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2FnZSB1bCBsaSAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgLnVzYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzYWdlIC51c2FnZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgI2ZmZiAyNSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB1cmwoJy9pbWFnZXMvSU1HXzIuanBnJykgMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2FnZSAudXNhZ2Utd3JhcHBlciAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzYWdlIC51c2FnZS13cmFwcGVyIHVsIGxpIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2FnZSAudXNhZ2Utd3JhcHBlciB1bCBsaTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\ProductsUsage.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tables_projectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables/projectList */ "./components/tables/projectList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class PromoProjects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.randomArray = this.randomArray.bind(this);
  }

  randomArray(arr, count) {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let temp;
    let index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }

    return shuffled.slice(min);
  }

  render() {
    const {
      itemsCount
    } = this.props;
    let projectsZero = [];
    let promoprojects = [];
    let content = '';
    _tables_projectList__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => {
      if (item.id !== 0) {
        projectsZero.push(item);
      }
    });
    promoprojects = this.randomArray(projectsZero, itemsCount);
    content = promoprojects.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: `${index}-promoproj`,
      href: `/proekti/${item.id}`
    }, __jsx("a", {
      key: `${index}-promoproj`,
      className: "d-block promoproj-card"
    }, __jsx("div", {
      className: "proj-img"
    }, __jsx("img", {
      src: `/images/projects/${item.img}`,
      alt: item.label,
      title: item.label,
      className: "w-100"
    })), __jsx("span", {
      className: "text-common"
    }, item.label))));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h4", {
      className: "jsx-2158328390" + " " + "header-min-colored"
    }, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B:"), __jsx("div", {
      className: "jsx-2158328390" + " " + "proj-feed"
    }, content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2158328390"
    }, ".promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:15px;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}@media (min-width:576px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:30px;display:grid;grid-template:auto auto / 1fr 1fr;grid-gap:15px;}}@media (min-width:768px){.promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{grid-gap:30px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:12px;padding-left:0px;padding-right:35px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:18px;}}@media (min-width:992px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;}}@media (min-width:1200px){.promo-projects.jsx-2158328390{padding:0;padding-left:40px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-top:31px;margin-bottom:15px;font-size:19px;text-align:right;border-bottom:1px solid rgba(0,0,0,0.125);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding:0px;display:grid;grid-template:1fr / 1fr;grid-auto-flow:row;grid-gap:30px;grid-gap:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;cursor:pointer;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:10px;overflow:hidden;box-shadow:3px 3px 2px rgba(0,0,0,0.2);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;margin-top:0px;text-align:right;padding-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvbW9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRG9CLEFBRzZCLEFBS0UsQUFHRCxBQVNELEFBR0UsQUFJRixBQVlHLEFBVUQsQUFLRSxBQUdKLEFBR0UsQUFHRSxBQUlELEFBYUEsQUFRRCxBQUdFLEFBSUgsQUFNTCxBQUlNLEFBT0osQUFVSSxBQUlHLEFBS0osVUE3QkcsRUFXTCxFQXZEZixDQXNDQSxBQW9DaUIsQ0FoSUEsQUFpQm5CLEFBT21CLEFBc0JFLEFBV25CLEFBNEJBLEFBaUJxQixBQWlCSixDQS9HRyxBQTRCRSxBQTRCSCxBQWFKLENBeEVqQixBQWVrQixBQStCaEIsQUFTa0IsQUE0QkEsQ0FtQ0EsTUFiUSxHQVgxQixFQXJCc0MsQUFtRG5CLENBVG5CLEVBdkhrQixBQXdCQyxBQXNCQyxDQTFCdEIsQUF3Q0UsQUFJcUIsQUF3QnJCLENBY2lCLEFBcUIyQixFQW5IL0IsQUE0QkUsVUE2RkcsRUFuQkcsQ0FyR1csQUE0QkksQUFrRWpCLENBdEdyQixBQThDRSxDQXRCYyxDQXdDRSxVQWlFaEIsR0F4R2UsQUFvREMsQ0FaQyxBQXNDOEIsQ0FPL0IsTUFhaEIsTUE3Q3lCLENBcERULENBakJGLEFBeURJLEFBNkNGLEVBMUVBLFlBM0JPLEFBc0dFLENBckZULENBV2hCLEFBNkJrQixXQXFDbEIsSUE1RWlCLENBd0NFLGdCQXZDckIsQ0F3Q0UsZ0RBVXVCLGdCQXBFRixBQXNHRSxLQWpDdkIsZ0JBcEVGLEFBc0dFIiwiZmlsZSI6Ikc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxjb21wb25lbnRzXFxwcm9kdWN0c1xcUHJvbW9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuLi90YWJsZXMvcHJvamVjdExpc3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgUHJvbW9Qcm9qZWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMucmFuZG9tQXJyYXkgPSB0aGlzLnJhbmRvbUFycmF5LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICByYW5kb21BcnJheShhcnIsIGNvdW50KSB7XHJcbiAgICBsZXQgc2h1ZmZsZWQgPSBhcnIuc2xpY2UoMCk7XHJcbiAgICBsZXQgaSA9IGFyci5sZW5ndGg7XHJcbiAgICBsZXQgbWluID0gaSAtIGNvdW50O1xyXG4gICAgbGV0IHRlbXA7XHJcbiAgICBsZXQgaW5kZXg7XHJcblxyXG4gICAgd2hpbGUgKGktLSA+IG1pbikge1xyXG4gICAgICBpbmRleCA9IE1hdGguZmxvb3IoKGkgKyAxKSAqIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICB0ZW1wID0gc2h1ZmZsZWRbaW5kZXhdO1xyXG4gICAgICBzaHVmZmxlZFtpbmRleF0gPSBzaHVmZmxlZFtpXTtcclxuICAgICAgc2h1ZmZsZWRbaV0gPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNodWZmbGVkLnNsaWNlKG1pbik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zQ291bnQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgcHJvamVjdHNaZXJvID0gW107XHJcbiAgICBsZXQgcHJvbW9wcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgIHByb2plY3RzLm1hcChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgIT09IDApIHtcclxuICAgICAgICBwcm9qZWN0c1plcm8ucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwcm9tb3Byb2plY3RzID0gdGhpcy5yYW5kb21BcnJheShwcm9qZWN0c1plcm8sIGl0ZW1zQ291bnQpO1xyXG4gICAgY29udGVudCA9IHByb21vcHJvamVjdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICA8TGluayBrZXk9e2Ake2luZGV4fS1wcm9tb3Byb2pgfSBocmVmPXtgL3Byb2VrdGkvJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgIDxhIGtleT17YCR7aW5kZXh9LXByb21vcHJvamB9IGNsYXNzTmFtZT1cImQtYmxvY2sgcHJvbW9wcm9qLWNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvai1pbWdcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvcHJvamVjdHMvJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29tbW9uXCI+e2l0ZW0ubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyLW1pbi1jb2xvcmVkXCI+0JLRi9C/0L7Qu9C90LXQvdC90YvQtSDQv9GA0L7QtdC60YLRizo8L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvai1mZWVkXCI+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBhdXRvIC8gMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cyAucHJvai1mZWVkIC5wcm9tb3Byb2otY2FyZCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzIC5wcm9qLWZlZWQgLnByb21vcHJvai1jYXJkIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMgLnByb2otZmVlZCAucHJvbW9wcm9qLWNhcmQgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblByb21vUHJvamVjdHMucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW9Qcm9qZWN0cztcclxuIl19 */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\components\\\\products\\\\PromoProjects.js */"));
  }

}

PromoProjects.propTypes = {
  itemsCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PromoProjects);

/***/ }),

/***/ "./components/tables/newsList.js":
/*!***************************************!*\
  !*** ./components/tables/newsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newsList = [{
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
}].map(link => {
  link.key = `nav-link-${link.id}-${link.id}`;
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
const productsList = [{
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
}].map(link => {
  link.key = `nav-link-${link.id}-${link.electricPower}`;
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
const projectList = [{
  label: "«Энергоцентр ЯМЗ»",
  id: 0,
  img: "project-avtodisel.jpg",
  galery: ["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg", "IMG_4.jpg"],
  as: "/yamz",
  energy: "1500 кВт",
  tenergy: "1825 кВт",
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
  class: "Энергоцентр",
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
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
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
const serviceList = [{
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
}].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});
/* harmony default export */ __webpack_exports__["default"] = (serviceList);

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

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
  return (href, as) => {
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
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
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

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
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

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tables/productsList */ "./components/tables/productsList.js");
/* harmony import */ var _components_products_ProductsNewContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/products/ProductsNewContainer */ "./components/products/ProductsNewContainer.js");
/* harmony import */ var _components_products_Catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/products/Catalog */ "./components/products/Catalog.js");
/* harmony import */ var _components_products_ProductsTextSections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/products/ProductsTextSections */ "./components/products/ProductsTextSections.js");
/* harmony import */ var _components_products_ProductsUsage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/products/ProductsUsage */ "./components/products/ProductsUsage.js");
/* harmony import */ var _components_tables_newsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tables/newsList */ "./components/tables/newsList.js");
/* harmony import */ var _components_news_OtherNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/news/OtherNews */ "./components/news/OtherNews.js");
/* harmony import */ var _components_products_PromoProjects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/products/PromoProjects */ "./components/products/PromoProjects.js");
/* harmony import */ var _components_products_ProductsListPlate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/products/ProductsListPlate */ "./components/products/ProductsListPlate.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import Head from '../components/head';













class Products extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      data
    } = this.props;
    const {
      brand
    } = this.props;
    return __jsx("div", {
      className: "jsx-1400608521"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", {
      className: "jsx-1400608521"
    }, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0435 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435\u0432\u044B\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0438 \u0438 \u043C\u0438\u043D\u0438-\u0442\u044D\u0446. \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\""), __jsx("meta", {
      name: "description",
      content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0435\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0438 \u043C\u0438\u043D\u0438-\u0442\u044D\u0446 \u043D\u0430 \u0431\u0430\u0437\u0435 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u0435\u0439: MAN, LIEBHERR, MTU, JENBACHER \u0438 \u042F\u041C\u0417.",
      className: "jsx-1400608521"
    }), __jsx("link", {
      rel: "canonical",
      href: "https://gmenergo.ru/products",
      className: "jsx-1400608521"
    })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid products-promo"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-md-11 col-xl-5"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "promo-text-container"
    }, __jsx("h1", {
      className: "jsx-1400608521" + " " + "header-min-colored"
    }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0438 \u043C\u0438\u043D\u0438-\u0422\u042D\u0421"), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-min-container"
    }, __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min"
    }, "\u041C\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0441\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0441\u0431\u043E\u0440\u043A\u043E\u0439 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0433\u0430\u0437\u043E\u043F\u043E\u0440\u0448\u043D\u0435\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439 \u0443\u0436\u0435 \u0431\u043E\u043B\u0435\u0435 12 \u043B\u0435\u0442 \u0438 \u0437\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445 \u0438 \u0441\u0445\u0435\u043C \u0441\u0431\u043E\u0440\u043A\u0438, \u0438 \u0441\u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0439\u0442\u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438 \u043C\u0438\u043D\u0438\u043C\u0443\u043C\u0435 \u0437\u0430\u0442\u0440\u0430\u0442."), __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min"
    }, "\u0421\u0438\u043B\u043E\u0432\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0435\u0441\u044F \u043F\u0440\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 \u0433\u0430\u0437\u043E\u0432\u044B\u0445 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0442\u0430\u043D\u0446\u0438\u0439, \u043F\u0440\u043E\u0448\u043B\u0438 \u043C\u043D\u043E\u0433\u043E\u043B\u0435\u0442\u043D\u044E\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0432 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u044E\u0442 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0433\u0438\u0445 \u043B\u0435\u0442.")))), __jsx("div", {
      className: "jsx-1400608521" + " " + "col-12 col-xl-7"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "cards-plate"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-1"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, __jsx("img", {
      src: "/images/icon-1.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-container "
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0410\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u0430\u044F \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438 \u0447\u0438\u0441\u0442\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0438\u044F \u0432 \u043B\u044E\u0431\u044B\u0445 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0445.")))), __jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-2"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, __jsx("img", {
      src: "/images/icon-3.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u041E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435"), __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 \u0442\u0435\u043F\u043B\u0430 \u0432 \u0445\u043E\u043B\u043E\u0434 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F.")))), __jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-3"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, __jsx("img", {
      src: "/images/icon-2.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u041E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435"), __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0414\u0435\u0448\u0451\u0432\u043E\u0435 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u043F\u043E\u0431\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u0446\u0438\u0438.")))), __jsx("div", {
      className: "jsx-1400608521" + " " + "card-container container-4"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "card"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "icon-container"
    }, __jsx("img", {
      src: "/images/icon-4.png",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u0438",
      alt: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u0442\u0432\u043E",
      className: "jsx-1400608521" + " " + "icon"
    })), __jsx("div", {
      className: "jsx-1400608521" + " " + "text-container"
    }, __jsx("span", {
      className: "jsx-1400608521" + " " + "card-title"
    }, "\u0412\u044B\u0433\u043E\u0434\u0430"), __jsx("p", {
      className: "jsx-1400608521" + " " + "text-min card-description"
    }, "\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 - \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F 50% \u0432 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0438 \u0441 \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u044B\u043C\u0438 \u043E\u0431\u044A\u0451\u043C\u0430\u043C\u0438 g\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F."))))))))), __jsx(_components_products_Catalog__WEBPACK_IMPORTED_MODULE_7__["default"], {
      brand: brand
    }), __jsx(_components_products_ProductsTextSections__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid promo-projects-product-page"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "col"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "section-wrapper"
    }, __jsx(_components_products_PromoProjects__WEBPACK_IMPORTED_MODULE_12__["default"], {
      itemsCount: 4
    })))))), __jsx(_components_products_ProductsUsage__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx("div", {
      className: "jsx-1400608521" + " " + "container-fluid"
    }, __jsx("div", {
      className: "jsx-1400608521" + " " + "container"
    }, __jsx(_components_news_OtherNews__WEBPACK_IMPORTED_MODULE_11__["default"], {
      news: _components_tables_newsList__WEBPACK_IMPORTED_MODULE_10__["default"]
    })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1400608521"
    }, ".enter{opacity:0;}.enter-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:1;}.enter-done{opacity:1;}.exit{opacity:1;}.exit-active{-webkit-transition:opacity 200ms ease-in;transition:opacity 200ms ease-in;opacity:0;}.products-promo{background:linear-gradient(to right,#e1e1e1 0%,#b1b1b1 100%);padding-top:30px;padding-bottom:30px;box-shadow:inset 0 10px 15px -5px rgba(0,0,0,0.2);}.products-promo .text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:27px;line-height:32px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products-promo .text-container .text-min{display:block;margin-bottom:15px;line-height:18px;}.products-promo .cards-plate{display:none;}.products{padding-top:30px;}.products .category-header{font-family:var(--molot-font);font-size:20px;color:grey;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}.products .filter .filter-component{margin-bottom:40px;margin-top:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .text-container{display:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;font-size:12px;bottom:-35px;left:0;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;font-size:12px;bottom:-35px;right:0;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;height:15px;border-radius:15px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:15px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(35%);-ms-transform:translateY(35%);transform:translateY(35%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:22px;height:24px;background-color:transparent;border:none;margin-left:8px;cursor:pointer;outline:none;}.products .filter .filter-component .button-group .active{background-color:var(--accent-red);border-radius:3px;}.products .filter .filter-component .button-group .active .block{background-color:#fff !important;}.products .filter .filter-component .button-group .active .block-min,.block-max{background-color:#fff !important;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:2px;left:2px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:2px;right:2px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:2px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:2px;left:2px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:2px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:2px;right:2px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;background-color:#bababa;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;background-color:#bababa;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:2px;left:2px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:2px;left:2px;}.products .filter .filter-component .button-group .list-icon .block-4{top:2px;right:2px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:2px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:2px;right:2px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;}.products .category-list .category-li{border-radius:30px;border:1px solid grey;cursor:pointer;margin:5px;}.products .category-list .category-li .category-link{display:block;width:100%;height:100%;font-weight:300;font-size:14px;text-transform:uppercase;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;color:grey;}.products .category-list .active{background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .plate .product-card-container{width:100%;height:100%;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:var(--border-radius);display:block;margin:0 auto;background:#fff;max-width:230px;width:100%;height:245px;box-shadow:var(--box-shadow);box-shadow:3px 3px 4px rgba(0,0,0,0.25);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;width:100%;overflow:hidden;border-radius:7px 7px 0 0;}.products .plate .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .plate .product-card-container .product-card .text-container{height:120px;padding:15px 10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:10px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:#313131;display:block;padding-bottom:2px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:#313131;display:block;padding-bottom:2px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;border-radius:0;display:grid;grid-template-columns:2fr 3fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 15px;display:block;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:20px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:13px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:13px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:black;display:block;line-height:14px;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:10px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:13px;font-weight:700;color:black;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:9px;text-align:right;display:none;color:var(--accent-red);}.products-text{display:block;margin-top:15px;margin-bottom:15px;overflow:hidden;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:15px;margin-bottom:15px;line-height:20px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:5px;font-size:13px;line-height:15px;}@media (min-width:576px){.products-promo{padding-top:60px;padding-bottom:60px;}.products-promo .promo-text-container .header-min-colored{font-size:36px;line-height:42px;margin-bottom:30px;}.products-promo .promo-text-container .text-min-container .text-min{font-size:20px;line-height:24px;padding-bottom:15px;}.products .plate{grid-row-gap:0;}.products .plate .product-card-container{padding:25px 15px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;height:380px;}.products .plate .product-card-container .product-card .img-container{height:160px;overflow:hidden;}.products .plate .product-card-container .product-card .img-container .product-card-img{width:100%;height:auto;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:35px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:25px;line-height:22px;margin-bottom:20px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:grey;display:block;line-height:14px;margin-bottom:10px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#313131;display:block;margin-bottom:6px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:12px;text-align:right;display:block;}.products .list{margin-top:15px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:15px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:grid;grid-template-columns:1fr 2fr;width:100%;height:auto;padding-bottom:15px;border-bottom:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:13px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:10px;}.products-text{display:block;margin-top:30px;margin-bottom:30px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{font-size:16px;line-height:21px;}.promo-projects-product-page{margin-top:15px;margin-bottom:15px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{box-shadow:3px 3px 4px rgba(0,0,0,0.25);border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:22px;}}@media (min-width:768px){.products-promo{padding-bottom:30px;}.products-promo .promo-text-container .header-min-colored{display:block;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .cards-plate{margin-top:30px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.products-promo .cards-plate .card-container .card{border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;}.products-promo .cards-plate .card-container .card .icon-container{margin-bottom:15px;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:17px;color:white;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:none;font-size:12px;line-height:15px;margin-bottom:0;}.products .filter{margin-bottom:30px;}.products .category-header{display:block;position:absolute;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;top:475px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);left:-72px;color:#d5d5d5;font-size:48px;line-height:26px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;position:relative;}.products .category-list .category-li{height:50px;cursor:pointer;margin-top:5px;margin-bottom:5px;}.products .category-list .category-li:first-child{margin-top:0;}.products .category-list .category-li .category-link{text-align:center;line-height:40px;font-weight:700;font-size:16px;color:#313131;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .active .category-link{color:white;}.products .plate{padding-left:30px;padding-right:15px;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .plate .product-card-container .product-card{z-index:0;border-radius:var(--border-radius);height:100%;}.products .plate .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .plate .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:120px;width:100%;overflow:hidden;}.products .plate .product-card-container .product-card .text-container{height:auto;padding:20px 10px 15px 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-size:17px;line-height:18px;color:var(--accent-red);margin-bottom:15px;font-weight:700;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:10px;line-height:11px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:11px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:11px;font-size:10px;color:#313131;display:block;padding-bottom:0px;margin-bottom:3px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:11px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-details{font-size:9px;text-align:right;display:block;color:var(--accent-red);}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 3fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:10px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:24px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:5px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:12px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:14px;font-size:12px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:14px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products-text .text-wrapper .text{font-size:19px;line-height:25px;color:var(--accent-grey);}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:var(--border-radius);overflow:hidden;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:17px;line-height:22px;}}@media (min-width:992px){.products-promo{padding-bottom:30px;}.products{padding-bottom:30px;}.products .category-header{-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:48px;}.products .filter .filter-component{box-shadow:none;border-radius:10px;padding:30px 15px 25px;margin-bottom:0px;margin-top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fafafa;}.products .filter .filter-component .filter-group{width:70%;}.products .filter .filter-component .filter-group .filter-block{margin-left:90px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{font-size:16px;position:absolute;bottom:-2px;left:-74px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{font-size:16px;position:absolute;bottom:-2px;right:-90px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(242,125,14);opacity:0.3;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-10px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .filter .filter-component .button-group{width:auto;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .filter .filter-component .button-group .view-item{z-index:0;display:block;position:relative;width:26px;height:28px;border:none;margin-left:15px;cursor:pointer;}.products .filter .filter-component .button-group .plate-icon{position:relative;}.products .filter .filter-component .button-group .plate-icon .block{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .plate-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-2{top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-3{top:4px;right:4px;}.products .filter .filter-component .button-group .plate-icon .block-4{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:4px;}.products .filter .filter-component .button-group .plate-icon .block-5{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.products .filter .filter-component .button-group .plate-icon .block-6{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .plate-icon .block-7{bottom:4px;left:4px;}.products .filter .filter-component .button-group .plate-icon .block-8{bottom:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.products .filter .filter-component .button-group .plate-icon .block-9{bottom:4px;right:4px;}.products .filter .filter-component .button-group .list-icon{position:relative;}.products .filter .filter-component .button-group .list-icon .block-min{z-index:1;position:absolute;display:block;width:4px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-max{z-index:1;position:absolute;display:block;width:12px;height:4px;}.products .filter .filter-component .button-group .list-icon .block-1{top:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-2{top:50%;left:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-3{bottom:4px;left:4px;}.products .filter .filter-component .button-group .list-icon .block-4{top:4px;right:4px;}.products .filter .filter-component .button-group .list-icon .block-5{top:50%;right:4px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.products .filter .filter-component .button-group .list-icon .block-6{bottom:4px;right:4px;}.products .category-list{padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:0px;border-bottom:none;}.products .category-list .category-li{height:50px;cursor:pointer;margin:5px 0px;border-radius:10px;border:1px solid #7b7b7b;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li .category-link{text-align:center;background-color:rgba(255,255,255,0.05);line-height:40px;font-weight:500;font-size:16px;color:var(--accent-grey);-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;text-transform:uppercase;-webkit-transition:all 0.2s;transition:all 0.2s;}.products .category-list .category-li:hover{border:1px solid transparent;box-shadow:3px 3px 2px rgba(0,0,0,0.2);background-color:rgba(255,255,255,0.9);}.products .category-list .category-li:hover .category-link{color:var(--accent-grey);}.products .category-list .active{box-shadow:5px 10px 15px rgba(210,74,67,0.45);background-color:var(--accent-red);border:none;}.products .category-list .active .category-link{color:white;}.products .plate{display:grid;padding-left:25px;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:270px;grid-auto-rows:auto;grid-gap:20px;}.products .plate .product-card-container{width:100%;height:100%;padding:0;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:8px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 5fr;width:100%;height:auto;padding-bottom:0px;border-radius:var(--border-radius);border:1px solid rgba(0,0,0,0.125);-webkit-transition:box-shadow 0.2s ease-out;transition:box-shadow 0.2s ease-out;}.products .list .product-card-container .product-card:hover{box-shadow:var(--box-shadow-up);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 2fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--molot-font);font-size:23px;line-height:24px;color:var(--accent-red);margin-bottom:0px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:700;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{font-size:14px;line-height:14px;color:var(--sub-color);display:block;padding-bottom:2px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:grey;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{font-size:12px;text-align:right;display:none;color:var(--accent-red);}.products-text{padding-bottom:60px;padding-top:60px;}.products-text .text-wrapper .header-min-colored{margin:0;}.products-text .text-wrapper .subheading-common{margin:0;color:var(--accent-red);}.products-text .text-wrapper .text{margin-top:19px;margin-bottom:15px;line-height:24px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') -60px 0 no-repeat;background-size:cover;content:'';top:0;right:-100px;height:95%;width:50%;border-radius:15px;box-shadow:-15px 25px 0px rgba(0,0,0,0.125);background-color:#fff;}.products-text .text-wrapper .text{font-size:18px;line-height:24px;color:var(--accent-grey);}}@media (min-width:1200px){{.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card:hover;}.products-promo{background:url('/images/products/bg-products.jpg') 50% 0% no-repeat;background-size:cover;padding:30px;border-bottom:15px solid white;}.products-promo .promo-text-container{display:block;height:100%;position:relative;}.products-promo .promo-text-container .header-min-colored{position:absolute;display:block;width:770px;top:30px;margin-bottom:15px;color:white;font-size:47px;line-height:56px;text-shadow:4px 4px 2px rgba(0,0,0,0.2);}.products-promo .promo-text-container .text-min-container{top:150px;position:absolute;}.products-promo .promo-text-container .text-min-container .text-min{color:rgb(41,41,41);line-height:20px;font-size:16px;margin-top:20px;}.products-promo .cards-plate{margin-top:0px;display:grid;grid-template:125px 125px 125px / 330px 330px;grid-gap:15px;}.products-promo .cards-plate .card-container{-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;border-radius:var(--border-radius);}.products-promo .cards-plate .card-container:hover{box-shadow:10px 10px 15px rgba(0,0,0,0.2);}.products-promo .cards-plate .card-container:hover .card{background:rgba(255,255,255,0.25);}.products-promo .cards-plate .card-container:active{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}.products-promo .cards-plate .card-container .card{background:rgba(255,255,255,0.05);border-radius:var(--border-radius);border:3px solid white;background:none;padding:15px;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .icon-container{width:120px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products-promo .cards-plate .card-container .card .text-container{margin-left:15px;padding-left:15px;border-left:1px solid white;}.products-promo .cards-plate .card-container .card .text-container .card-title{font-size:19px;color:#fafafa;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;line-height:19px;display:block;text-shadow:0 0 5px rgba(0,0,0,0.1);font-family:var(--molot-font),serif;margin-bottom:5px;}.products-promo .cards-plate .card-container .card .text-container .card-description{display:block;font-size:14px;line-height:17px;margin-bottom:0;}.products-promo .cards-plate .container-1{grid-column:2 / 3;grid-row:1 / 2;}.products-promo .cards-plate .container-2{grid-column:2 / 3;grid-row:2 / 3;}.products-promo .cards-plate .container-3{grid-column:2 / 3;grid-row:3 / 4;}.products-promo .cards-plate .container-4{grid-column:1 / 2;grid-row:3 / 4;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}.products-promo .cards-plate .container-4 .card{background:rgba(255,255,255,0.15);}.products{padding-top:18px;}.products .filter .filter-component{box-shadow:1px 1px 2px rgba(0,0,0,0.2);border-radius:10px;padding:20px 15px 17px 25px;margin-bottom:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;}.products .filter .filter-component .filter-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.products .filter .filter-component .filter-group .text-container{display:block;padding-right:25px;border-right:1px solid rgba(0,0,0,0.125);}.products .filter .filter-component .filter-group .text-container .filter-text{display:block;color:var(--sub-color);font-weight:700;font-size:15px;line-height:18px;margin-bottom:0px;}.products .filter .filter-component .filter-group .text-container .search-text{font-size:12px;color:var(--sub-color);}.products .filter .filter-component .filter-group .text-container .search-text-value{font-size:12px;color:var(--accent-red);}.products .filter .filter-component .filter-group .filter-block{width:45%;margin-left:110px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min{position:absolute;bottom:-2px;left:-78px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--min::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max{position:absolute;bottom:-2px;right:-85px;color:var(--sub-color);font-weight:300;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__label--max::after{content:' \u043A\u0412\u0442';color:var(--sub-color);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background{background-color:#fafafa;border:1px solid #dddddd;border:none;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.2);border-radius:15px;height:22px;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__track--active{background:rgb(231,172,117);opacity:1;height:22px;box-shadow:inset 1px 1px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(0,0,0,0.15), 1px 1px 1px rgba(0,0,0,0.2);}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container{position:relative;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__label--value{position:absolute;top:-7px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);color:var(--accent-red);font-weight:600;text-shadow:3px 3px 2px rgba(0,0,0,0.1);text-shadow:none;}.products .filter .filter-component .filter-group .filter-block .input-block .input-range .input-range__track--background .input-range__slider-container .input-range__slider{position:absolute;background:var(--accent-red);box-shadow:3px 3px 2px rgba(0,0,0,0.2);border-radius:11px;height:35px;position:relative;top:0;-webkit-transform:translateY(42%);-ms-transform:translateY(42%);transform:translateY(42%);}.products .category-list .category-li{height:50px;cursor:pointer;}.products .category-list .category-li .category-link{font-size:18px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-transform:uppercase;-webkit-transition:text-shadow 0.2s;transition:text-shadow 0.2s;}.products .plate{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;grid-auto-rows:auto;grid-gap:25px;}.products .plate .product-card-container .product-card{cursor:pointer;position:relative;z-index:0;display:block;margin:0 auto;background:#fff;width:100%;}.products .plate .product-card-container .product-card .img-container{height:197px;}.products .plate .product-card-container .product-card .img-container .product-card-img{max-width:100%;width:auto;height:100%;}.products .plate .product-card-container .product-card .text-container{height:190px;padding:25px 20px 25px 25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.products .plate .product-card-container .product-card .text-container .flex-top .product-name{font-size:21px;line-height:22px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row{height:auto;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{font-size:14px;line-height:13px;color:#c4c4c4;display:block;font-weight:300;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:14px;color:var(--accent-grey);display:block;line-height:14px;margin-bottom:12px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{line-height:13px;font-size:14px;color:#c4c4c4;font-weight:300;display:block;margin-bottom:7px;}.products .plate .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:700;color:var(--accent-grey);-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;display:block;line-height:14px;margin-bottom:15px;}.products .plate .product-card-container .product-card .text-container .flex-bot .product-card-details{color:var(--accent-red);width:100%;font-size:12px;text-align:right;display:block;font-weight:700;}.products .list{margin-top:0px;padding:0;padding-bottom:30px;display:grid;grid-template-columns:1fr;grid-auto-rows:auto;grid-gap:10px;justify-items:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container{width:100%;height:100%;padding-left:15px;padding-right:15px;}.products .list .product-card-container .product-card{cursor:pointer;position:relative;overflow:hidden;z-index:0;display:grid;grid-template-columns:1fr 7fr;width:100%;height:100px;min-height:100px;padding-bottom:0px;border-radius:var(--border-radius);box-shadow:var(--card-shadow);border:none;-webkit-transition:box-shadow 0.15s ease-out;transition:box-shadow 0.15s ease-out;background-color:#fff;}.products .list .product-card-container .product-card:hover{box-shadow:0px 10px 20px rgba(0,0,0,0.15);background-color:#fff;}.products .list .product-card-container .product-card .img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;height:100%;overflow:hidden;}.products .list .product-card-container .product-card .img-container .product-card-img{height:auto;width:100%;}.products .list .product-card-container .product-card .text-container{padding:0px 30px;display:grid;grid-template-columns:1fr 3fr;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.products .list .product-card-container .product-card .text-container .flex-top .product-name{display:block;font-family:var(--noto-font);font-size:18px;font-weight:900;line-height:24px;color:var(--accent-grey);margin-bottom:0px;-webkit-letter-spacing:0px;-moz-letter-spacing:0px;-ms-letter-spacing:0px;letter-spacing:0px;}.products .list .product-card-container .product-card .text-container .flex-top .product-name::first-word(){color:#353535;}.products .list .product-card-container .product-card .text-container .flex-bot{display:grid;grid-template-columns:2fr 1fr 1fr;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-bottom:8px;margin-top:8px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-motor{font-size:16px;font-weight:300;-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;color:grey;display:block;line-height:14px;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power-title{display:none;}.products .list .product-card-container .product-card .text-container .flex-bot .flex-row .product-card-power{font-size:16px;font-weight:900;color:var(--text);-webkit-letter-spacing:-0.6px;-moz-letter-spacing:-0.6px;-ms-letter-spacing:-0.6px;letter-spacing:-0.6px;display:block;line-height:14px;margin-bottom:0px;}.products .list .product-card-container .product-card .text-container .flex-bot .product-card-details{padding:10px 15px;font-size:12px;line-height:14px;text-align:center;display:inline-block;color:white;background-color:var(--accent-red);border-radius:3px;}.products-text{position:relative;}.products-text::after{display:block;position:absolute;background:url('/images/IMG_3.jpg') 0 0 no-repeat;background-size:cover;content:'';top:auto;bottom:15px;right:-100px;height:80%;width:40%;border-radius:15px;box-shadow:-15px 15px 0px rgba(0,0,0,0.125);box-shadow:-3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.products-text .text-wrapper .text{font-size:17px;line-height:25px;color:#313131;}.promo-projects-product-page{margin-top:30px;margin-bottom:30px;padding-bottom:15px;}.promo-projects-product-page .section-wrapper .header-min-colored{margin-bottom:15px;}.promo-projects-product-page .section-wrapper .proj-feed{grid-gap:30px;}.proj-img{box-shadow:0 10px 15px rgba(0,0,0,0.225);}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .proj-img{border-radius:10px;overflow:hidden;-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.promo-projects-product-page .section-wrapper .proj-feed .promoproj-card .text-common{margin-top:10px;font-size:18px;line-height:23px;}}@media (min-width:1500px){.products-text::before{display:block;position:absolute;background:url('/images/IMG_2.jpg') 25% 0 no-repeat;background-size:cover;content:'';top:0px;left:-100px;height:80%;width:18%;border-radius:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);background-color:#fff;}.promo-projects-product-page{margin-top:60px;margin-bottom:30px;padding-bottom:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkc6XFxPU1BhbmVsXFxkb21haW5zXFxnbW5leHQ5XFxwYWdlc1xccHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0syQixBQUd1QixBQUd1QixBQUl2QixBQUdBLEFBR3VCLEFBSzhCLEFBTWpELEFBU0EsQUFLRCxBQUlJLEFBR2EsQUFNWCxBQVFULEFBR0csQUFTSyxBQVVBLEFBZUgsQUFXRyxBQWVILEFBV1UsQUFjSSxBQWFYLEFBWUEsQUFrQkEsQUFVUCxBQVNELEFBWXlCLEFBSUYsQUFJQSxBQUdmLEFBR1IsQUFhRixBQVNBLEFBVUEsQUFTQSxBQVVBLEFBVUEsQUFVRyxBQVNBLEFBVUEsQUFJTyxBQVFSLEFBYUEsQUFhRixBQVNBLEFBVUcsQUFTSCxBQVNBLEFBVUcsQUFJRCxBQVFTLEFBTUwsQUFVcUIsQUFJdkIsQUFHRixBQVVDLEFBSUksQUFlaUIsQUFPbkIsQUFjRCxBQVFDLEFBYUMsQUFnQkEsQUFTRixBQVVHLEFBY0EsQUFlRSxBQWNGLEFBZ0JELEFBTUUsQUFXTCxBQU1JLEFBYUYsQUFZRCxBQVFLLEFBVUgsQUFnQkEsQUFTRixBQVVHLEFBY0EsQUFnQkUsQUFjRixBQWNELEFBTUEsQUFNTCxBQUdBLEFBSU8sQUFLQSxBQUtILEFBU3NCLEFBUXBCLEFBT0ksQUFJRixBQVFBLEFBTUEsQUFHRyxBQUdILEFBY0YsQUFTRixBQVFFLEFBYUUsQUFXSCxBQVVHLEFBY0EsQUFlRSxBQWNGLEFBZ0JBLEFBS0MsQUFXTCxBQU1JLEFBWWlCLEFBT25CLEFBWUQsQUFRSyxBQVlILEFBZUEsQUFTRCxBQWVFLEFBY0EsQUFlRSxBQWNGLEFBU0QsQUFLTCxBQUdBLEFBSU0sQUFJQyxBQUtILEFBUzhCLEFBUzNCLEFBUUksQUFHTixBQVFFLEFBTW1CLEFBUWhCLEFBUUosQUFjRixBQU9NLEFBR0wsQUFXSixBQVNFLEFBTUMsQUFHSyxBQVVOLEFBR00sQUFTUCxBQUtELEFBS3NCLEFBT25CLEFBWUQsQUFhRSxBQWVBLEFBU0YsQUFVRyxBQWVBLEFBZUUsQUFlRixBQWdCRCxBQU1DLEFBV0osQUFNSSxBQWNpQixBQU9uQixBQVlELEFBUU0sQUFZSixBQWVBLEFBU0QsQUFlRSxBQWNBLEFBZUUsQUFjRixBQVVBLEFBTUMsQUFLRyxBQUdpQixBQVFELEFBUW5CLEFBUUksQUFHQSxBQUdELEFBSUgsQUFZTixBQUdPLEFBU0MsQUFVSCxBQWVBLEFBV0EsQUFlQSxBQVdVLEFBY0ksQUFhWCxBQVlBLEFBa0JBLEFBVVAsQUFRRCxBQVVRLEFBUVIsQUFZRixBQVNBLEFBVUEsQUFTQSxBQVVBLEFBVUEsQUFVRyxBQVNBLEFBVUEsQUFJTyxBQVFSLEFBWUEsQUFZRixBQVNBLEFBVUcsQUFTSCxBQVNBLEFBVUcsQUFJRCxBQVFFLEFBUU0sQUFXVyxBQUtKLEFBR3dCLEFBS3JDLEFBR0MsQUFRRixBQUtJLEFBV0osQUFNSSxBQWNpQixBQVFuQixBQVlELEFBUUssQUFhSCxBQWVBLEFBU0QsQUFnQkUsQUFjQSxBQWVBLEFBY0EsQUFlQSxBQU1LLEFBSVgsQUFHQSxBQUlPLEFBS0UsQUFHSixBQWNDLEFBU0osQUFPRyxBQUtJLEFBV1IsQUFPWSxBQU1QLEFBTWtCLEFBSVksQUFHUixBQUdULEFBR1MsQUFZekIsQUFPSyxBQVVGLEFBZUQsQUFNSSxBQUlBLEFBSUEsQUFJQSxBQUttQixBQUdwQixBQUd5QixBQVc3QixBQU9DLEFBVUEsQUFhQyxBQVNBLEFBSUwsQUFVUSxBQVVBLEFBY0gsQUFXRyxBQWNILEFBV1UsQUFnQkssQUFnQlosQUFZQSxBQW1CQSxBQVVOLEFBSUcsQUFNdUIsQUFNdkIsQUFhRixBQVFFLEFBU0YsQUFhRSxBQVdILEFBVUcsQUFlQSxBQWVFLEFBZUYsQUFlUyxBQVFULEFBV0osQUFNSSxBQWlCOEIsQUFRaEMsQUFhRCxBQVFLLEFBYUgsQUFnQkEsQUFRRCxBQVVBLEFBZ0JBLEFBVUUsQUFlRixBQVVFLEFBZUcsQUFVQSxBQUdKLEFBZ0JDLEFBS0MsQUFLRyxBQUdMLEFBTWQsQUFDNEMsQUFPekIsQUFTSCxBQU9GLEFBY0UsUUFyc0ZULEFBU0EsQUFVQyxBQVNpQixBQVVsQixBQVVDLEFBbUVELEFBU0EsQUFtQkMsQUFTQSxBQXk1Q0MsQUFTQSxBQVVDLEFBU2lCLEFBVWxCLEFBVUMsQUFpRUQsQUFTQSxBQW1CQyxBQVNBLENBbHJDZCxBQUcwQixBQW1XeEIsQUFHMEIsQUFta0MxQixBQUcwQixDQTVyRTVCLEFBT0EsQUFHQSxBQWlEQSxBQXNKZ0IsQUEwQkksQUFzR0EsQUFhQSxBQWdFTCxBQStCTyxBQW95QkwsQUE2Q3NCLEFBd1dyQyxBQXFKZ0IsQUFrQkksQUFxR0EsQUFZQSxBQStETCxBQXlTSyxBQStKQSxDQTdzRVIsQUEwR0gsQUFTQSxBQVVDLEFBeURELEFBNEJDLEFBNkNFLEFBNEtBLEFBa1BFLEFBcUhBLEFBK1NBLEFBMEpBLEFBZ1dBLEFBZ0dILEFBU0EsQUFVQyxBQXVERCxBQTRCQyxBQXVERSxBQWdCQSxBQW1yQkEsQ0F6d0VoQixBQXFEYSxBQThDYixBQXFIYSxBQTJDYixBQXdNRSxBQTBIYSxBQTJPSSxBQW1CakIsQUF5QzhCLEFBcUM5QixBQStIYSxBQTJnQkksQUFnQ2pCLEFBbUVhLEFBME9PLEFBa1FILEFBc0VqQixBQXFJYSxDQXpzRmYsQUF3QkEsQUF5Ym9CLEFBdVNjLEFBOERkLEFBaUJFLEFBc1JjLEFBeUVqQixBQW9DakIsQUF3d0JvQixBQXlrQnBCLEFBaUI4QixBQTBNTSxBQTBCcEMsQUF5QkEsQ0F2ekZtQixBQVNBLEFBMllSLEFBd0ZtQixBQWdCaEMsQUE4RW1CLEFBa0VhLEFBZ0JoQyxBQTZFbUIsQUFNRCxBQTRRZ0IsQUFlaEMsQUE0RWtCLEFBa0RHLEFBc0RELEFBNkZILEFBZWpCLEFBZ0ZtQixBQTRFYSxBQWVoQyxBQWdtQmdDLEFBZWhDLEFBNEdvQixBQThCTixBQTRGRyxBQStDSSxBQVVJLEFBeVlNLEFBZ0IvQixBQWlHb0IsQUE2QnBCLEFBOEJvQixDQWgxRkcsQUEwQkEsQUFpVkwsQUE0RkQsQUFjRCxBQTZCQSxBQXVDRSxBQThFRCxBQWNELEFBOEJBLEFBNERELEFBV0ksQUFRQSxBQU1uQixBQU1vQixBQTRDRCxBQXFCQSxBQWNOLEFBNkJLLEFBZ0JDLEFBc0JDLEFBMEZELEFBY0QsQUE2QkEsQUFxQkMsQUFvRUwsQUF1SkssQUFlRCxBQThCQSxBQXNCTixBQWlCUSxBQTRGRCxBQWNELEFBNkJBLEFBVUMsQUFrRkMsQUFlSyxBQVdMLEFBZUssQUFnVmIsQUFpQlEsQUErRkQsQUFjRCxBQWVDLEFBY0QsQUFlQyxBQXVDQSxBQTZDSixBQWdEQyxBQXFGUyxBQVNDLEFBc0NELEFBeUJBLEFBd0ZGLEFBWUgsQUFxQlAsQUFzQk0sQUFxQkEsQUFlUSxBQThCVCxBQXVCTixBQWlCUSxBQXVIRixBQXlCQSxBQTRDQyxDQTd4RVQsQUE0S1MsQUFLQSxBQXNMUCxBQStLUyxBQXVCSixBQW1CRixBQXdaTSxBQXdCSixBQWtCSSxBQXNsQkEsQUEwc0JBLEFBK0JKLEFBcUJJLENBcDVGdkIsQUErTUEsQUFTNkIsQUE2QkssQUE2RWxDLEFBUzZCLEFBK01aLEFBc0ZELEFBMkVDLEFBaUZPLEFBc0hMLEFBMkZGLEFBZ0ZFLEFBNFJBLEFBK0tBLEFBdUZqQixBQWlMQSxBQVM2QixBQTZCSyxBQTJFbEMsQUFTNkIsQUE0SmQsQUF5T0ssQUFtRHBCLEFBc1RpQixBQXFHRixDQWhyRmpCLEFBVWlCLEFBMEJBLEFBcURqQixBQVlZLEFBa0JtQixBQTBDL0IsQUFvQ0EsQUE2QjZCLEFBZ0M3QixBQStEQSxBQVM2QixBQTBiM0IsQUF3YW1CLEFBYUUsQUFrTk4sQUFnTGYsQUF5RkEsQUFZWSxBQWtCbUIsQUE0Qi9CLEFBd0NBLEFBNkI2QixBQWdDN0IsQUE2REEsQUFTNkIsQUE2QmdCLEFBd083QyxBQXNDZ0IsQUE2RkMsQUFJQSxBQUlBLEFBSUEsQUEyRWpCLEFBVWMsQUF5QkEsQUF5RGQsQUFZVyxBQW1Cb0IsQUE4VWQsQUFVakIsQ0EvekZnQixBQW1YTSxBQWd4QnRCLEFBNkJBLEFBa1hBLEFBMDBDQSxBQWlCa0IsQ0E3bUZwQixBQVM2QixBQW1FN0IsQUE4eEJFLEFBbWNBLEFBR0EsQUFpUUEsQUFTNkIsQUFpRTdCLEFBdVFtQixBQXdFQSxDQXY3RHJCLEFBcUZBLEFBNDlDRSxBQW1GQSxFQWp3RGEsQUErUGYsQUF3Q0EsQUFvSW9CLEFBK0JwQixBQW1ORSxBQXFIb0IsQUFxQ3BCLEFBMFFZLEFBMEpRLEFBdUNwQixBQXlUZSxBQTZQSCxBQWdCUSxBQXdDcEIsQUEyb0JvQixBQTRDcEIsQ0E5aEZrQixBQTBqREUsQUFvNkJQLENBM2lGWSxBQXdTYixBQTQrQlUsQUF1U0ssQUE2UzNCLEFBeUJzQixBQXFkSyxBQThOTCxDQWhsRUYsQUFxVEosQUFrRE0sQUF1eENGLEFBbVdOLENBdjdFRixBQTRpQ1MsQUE0Q0osQUFtZUgsQUF3UUcsQUFrakJOLEFBNkJYLENBeDNFUyxBQStESyxBQXNHQSxBQWFBLEFBODJCSyxBQTJoQlIsQUFzREssQUFxR0EsQUFZQSxBQXdXaEIsQUFhZ0QsQUFrSmhELEFBcUZZLENBOW9EWixBQTRVc0MsQUEySW5CLEFBb3JCeUIsQUE0VXZCLEFBZUYsQ0F0eEVKLEFBaVpGLEFBMFVNLEFBd0NGLEFBK1RJLEFBazlCVyxBQWtPakIsQUF1SUYsQUF5QkMsQUFxVGtCLENBaHdFbkIsQUE4RFMsQUE2QlgsQUFnQkcsQUF3RGhCLEFBMkR3QixBQThCVixBQWNDLEFBNEdFLEFBNkVGLEFBOElXLEFBNkJYLEFBZ0RNLEFBK01LLEFBOEJYLEFBZ0JHLEFBaUlRLEFBNkJYLEFBd0NNLEFBZ2FxQixBQTJJaEIsQUE2QlgsQUFpZ0JjLEFBK0pILEFBeUJKLEFBZ0ZELENBaDlFckIsQUE4RWdCLEFBNkJBLEFBbUlTLEFBOEJBLEFBcUZGLEFBUUMsQUF3REQsQUFxQkwsQUE2QkEsQUE4QkEsQUFpQ2hCLEFBK0V5QixBQTZCQSxBQW1DekIsQUE0RnFCLEFBNERyQixBQW1FZ0IsQUE4QkEsQUFtRWhCLEFBK0V5QixBQTZCQSxBQXdCRSxBQXllSCxBQWtGQyxBQTZCQSxBQTZCVixBQXlCeUMsQUFjN0IsQUFxQmIsQUFvWE8sQUFxQkwsQUE4QkEsQUFtT29DLEFBZ0JwQyxBQTJDc0MsQ0F4NUYxQyxBQVNLLEFBZ0RKLEFBMEJBLEFBcUhmLEFBSUEsQUF1T1ksQUE4S0EsQUF1SlosQUE4RGMsQUFrSkEsQUFzSlosQUEwQ2MsQUEwR2QsQUErSmtCLEFBbU9KLEFBMEJBLEFBMlZkLEFBcUJrQixBQXNLbEIsQUE0SUEsQUFJQSxBQUlBLEFBSTZDLEFBNkJDLEFBbU1sQyxBQXFKTSxBQStKQyxDQXpsQm5CLEFBTXFDLEFBbUVyQyxDQXJ5RWEsQUF5S0ssQUF5Tk4sQUErVkssQUFLRyxBQWFKLEFBd1ZNLEFBK0NHLEFBc0VQLEFBNlVJLEFBZUosQUEyQk8sQUFzbEJOLEFBeUdXLEFBdVliLEFBME5LLEFBc0JRLEFBOEJSLENBdjNDTixBQWk4QmEsQ0EzMUVGLEFBZ1FYLEFBeVloQixBQTBjZSxBQXdlYyxBQTZjN0IsQUF3RWlCLEFBOEhDLENBM3hFcEIsQUEwQkEsQUFpaURFLEFBMEJBLEFBbXRCQSxBQStDQSxBQXlCQSxBQTJCYyxBQWtFVyxBQTZCekIsQ0F2N0VZLEFBMmpERSxBQWdwQk8sQUFtRHJCLENBbi9DbUIsQUE2T2tCLEFBMkp0QixBQTYxQ0MsQ0E3dEVELEFBOE1JLEFBdVdFLEFBeWNBLEFBNm1CQSxBQXlaSSxBQXdLVixBQWtITSxBQW9OckIsQ0F0c0ZXLEFBMEJjLEFBc0dBLEFBYUEsQUFvUEgsQUF3V0UsQUEyS0EsQUFxSUosQUF3SkksQUE4S0EsQUEyTlgsQUFrQkQsQUFxR0EsQUFZQyxBQXVFUSxBQTJNRyxBQTJHeEIsQUF1THlCLEFBc1JELENBM3hFTSxBQWNLLEFBOEtuQixBQTBITSxBQTJGTixBQWtKRCxBQW9sREMsQUErTUMsQ0Fod0VGLEFBZ0tBLEFBOEZTLEFBaVJQLEFBMmNBLEFBK21CQSxBQTBKakIsQUFLVyxDQW50RUksQUFvQkosQUFzakJhLEFBMkxWLEFBcVdFLEFBOEJDLEFBNENDLEFBaUVKLEFBcUlZLEFBTVgsQUFvUEYsQUEwQkMsQUErVkMsQUEwS1csQUF5Z0JYLENBdm1GUixBQTBCQyxBQTRiTSxBQTZCQSxBQW9DRCxBQXVTRyxBQTZCQSxBQThCaEIsQUFLZSxBQW9XVyxBQWtDVixBQThCQSxBQTJuQnFCLEFBb1ZuQixBQWtURixBQThCRSxBQW1QbEIsQ0F4c0YwQyxBQXdQNUMsQUEwWEEsQUF5OEI4QyxBQWl5QkEsQUFrUTVDLENBdG9EQSxBQW1jQSxBQWkxQ0EsQ0FscUVnQixBQXVXaEIsQUEyVFksQUE2bUJBLEFBbXJCQSxBQWdKWSxDQXh6RjFCLEFBbUdjLEFBNG5Dd0IsQUF1VXBDLEFBd0hxQixBQTJ4QlAsQUFtQm9CLEFBbU1mLEFBd0xDLENBcnRGdEIsQUFtcEJBLEFBb0JFLEFBZ0VBLEFBeVhpQixBQTRWakIsQUErSEEsQUFpNUJBLENBMzBERixBQThDRSxBQTQ5QmEsQUFxR0EsQUE2VGIsQUE2RGtCLENBM3FFSyxBQWdJWCxBQVVkLEFBaU5pQixBQSsxQ0QsQUFtSUQsQUE2VlEsQUErSUosQ0Evd0VNLEFBdTdEdkIsQUFnbUJtQixDQTU3REwsQUE4QkEsQUFvRGhCLEFBaVNrQixBQTZCQSxBQXVDaEIsQUF1WWdCLEFBNkJBLEFBOEJoQixBQXFqQmdCLEFBNkJBLEFBd3ZCaEIsQUFvREEsQ0FqNUZtQixBQXlYUixBQTJqQnFCLEFBNHFCUCxBQW9oQ0QsQ0FsMURSLEFBK0VLLEFBZ1hyQixBQTRTQSxBQTZHeUIsQUEraUJ6QixBQStWZ0IsQ0F4NENFLEFBNE9VLEFBaU5SLEFBa1hELEFBMENTLEFBd1ZFLEFBMlZGLEFBMkVWLENBaHdFRCxBQXFHUyxBQWlCYixBQTBDSSxBQTBIbkIsQUFrTDhCLEFBbUVULEFBZ0huQixBQXVTZSxBQW9ESSxBQXlqQkosQUFzREksQUE2bkJKLENBanJGRSxBQStnQkUsQUE2QkEsQUErQ3JCLEFBNFJzQixBQTZCQSxBQThDcEIsQUFzTW1CLEFBMEVuQixBQTJHcUIsQUE4QkEsQUFnRHJCLEFBNm1CQSxBQStDZ0IsQUFxakJFLEFBK0VsQixBQW1EZ0IsQ0F2dUZDLEFBNnJDakIsQUF5d0IyQixBQXVsQkwsQ0F4NkVILEFBOHJFbkIsQUF3SmtELEFBd0xsQyxDQXAzQmhCLEFBcUdBLEFBcWFBLENBelpBLEFBMGhCa0IsQUErU2xCLENBdGdGNkIsQUFxakIvQixBQWdha0IsQUFxbUJGLEFBc3JCSSxDQS9zQ0YsQ0F4Z0NOLEFBc0dBLEFBYUMsQUF3RWIsQUEwd0VrQixDQW53RVMsQUFvVjNCLEFBcXVDOEMsQUFzUHBCLEFBaUN4QixBQThIbUIsQUE2ZUksQ0F0d0V6QixBQXFHcUIsQUE4QkEsQUFxVkUsQUE2QkEsQUEyVHJCLEFBbUhxQixBQTZCQSxBQTZKUCxBQXdUYSxBQThITixBQTZCQSxBQTZCckIsQUFxR3lCLENBaitCSixDQXBlSCxBQXN1REEsQUE4RUcsQ0F6Z0VTLEFBZ3pCRSxBQTZtQkEsQUFxTmxCLEFBOGRrQixDQTd3RVosQUFzNURwQixDQW4xRVUsQUFVQSxBQW9kYSxBQXFLQSxBQTZXRSxBQXdETyxBQXFJakIsQUEwR1UsQUFvS0EsQUF3RE8sQUFzakJQLEFBdUJKLEFBa0NXLEFBZ0toQixBQUlxQixBQWlHaEIsQUFTckIsQUErVzZCLEFBd0JSLEFBYUYsQUErQmEsQ0F6cERkLEFBazFCQSxDQTE0REYsQUFrYlEsQUFnS0EsQUEwUEEsQUFxSEUsQUEyY0EsQUE0SVgsQUFtZVcsQUF3aUJOLEFBOEJBLENBMW5GRCxBQW1GSCxBQWdJTCxBQXNHQSxBQSswQmtDLEFBNG1CMUIsQ0E3dkRDLEFBK1VULEFBNEdHLEFBcWNkLEFBNkJBLENBcllGLEFBNkJBLEFBbW1CRSxBQThLb0IsQUE4QkEsQUF5UkYsQUE0eENwQixDQXJyRHVCLEFBbWJILEFBbXdCbEIsQ0FyeUVGLEFBMmpERSxBQThTYyxBQXFkZCxBQTBHZ0IsQUFvSUUsQ0FtTU0sRUFuM0YxQixBQVVBLEFBaVpxQixBQW0wQkssQUFpQ0csQUF5SkwsQUFrakJFLEFBMkRGLEFBdU9MLEFBNGNLLEFBc1BFLENBdDBFSixBQXVXRSxBQTQ2Q0YsQ0EvckVELEFBb3lCTixBQXV4QlEsQUE4TkMsQUFpUEUsQUF1SkosQUEyTEMsQ0F6c0RSLEFBOFZBLEFBdzRDQSxDQXowRWYsQUFzR0EsQUFxWEEsQUE4QkEsQUFxVkUsQUE2QkEsQUE4YUEsQUE2QkEsQUFtbEJBLEFBNkJBLEFBZ0hBLENBbjZERixBQW85Qm9CLEFBdVRILEFBOHZDRCxDQTVvQkMsQUF1YVMsQ0EvbkRBLEFBc0l4QixBQWsxQmlCLEFBd3lCVSxDQWxyRjdCLEFBeVhnQixBQW9nQ1UsQUFxMEJOLENBeHFFcEIsQUFpVThCLEFBZ0JkLEFBcXFDRyxBQTRZakIsQ0E1eERZLEFBMmpESyxBQTBPSyxBQThuQnRCLEFBOEJBLENBdGdDQSxBQWc2QkEsQ0F0NEJBLEFBd21CQSxDQXprRW1CLEFBMnhCTCxBQXFYZCxBQThCQSxBQTZZcUIsQUFnN0JyQixDQWpxRnFELEFBZzBCdEMsQUE4VkQsQUF3NENkLENBelVtQixBQWlyQm5CLENBMTVFbUIsQUFnS0EsQUErV0MsQUEyY0EsQUErbUJBLENBNXpEWCxBQWlqREUsQUF1aUMwQixDQS91RTFCLEFBZ3pCRSxBQTZtQkEsQUFtckJBLENBN2VvQixBQStKakMsQ0FuK0JlLEFBNm1CQSxBQTBSVSxBQThEVixBQTJWQyxBQTJMSCxDQXZyRkQsQUF3VFUsQUFvSFIsQUFrUVUsQUFxR1IsQUFvV08sQUFvY1QsQUFpeUJBLENBdDBFRSxBQXlQQSxBQWloRFcsQUFrOUJkLENBai9FUSxBQXdpRHJCLEFBb2ZxQixDQXYzQnJCLEFBb21CYSxBQThFRSxDQXB1RUksQUFpN0JHLEFBOFJBLEFBOGdCdEIsQUF3ZkEsQ0F2Z0VGLEFBbUJBLEFBZ0dBLEFBNnpCRSxBQWlvQkEsQUFtQkEsQUE4RkEsQ0EzbkRGLEFBd0dBLEFBbWNFLEFBc2dDQSxBQXNHQSxFQXBvREYsQUFrVWMsQUFnekJFLEFBK2JkLEFBOEtjLEFBbXJCQyxDQXY2Q1MsQUFvdEJSLENBd2xCUSxBQXFTYixDQXZvQmtDLEFBdVRsQixBQWdPUCxDQXZrRkYsQUFtK0JsQixBQXlQdUIsQUErVkgsQUE4UUcsQUFtaEJILEFBc1pWLENBNTVEYSxBQTJjQSxBQSttQkEsQUE0bUJBLENBcnJFUCxBQXFHSyxBQTJETCxBQTRTTyxBQXV2Q2YsQ0E1Z0NRLENBMGxDSCxDQWxrRUUsQUF3RWpCLEFBaUxrQixBQWc0Q2hCLEFBb2VtQixFQXFrQkwsQ0ExdkVNLEFBd2xCUixBQXdOUyxBQTZtQkEsQUFnTE4sQUF3dUJELENBdGRBLEFBaVBLLEVBN3dFQSxBQTBqRG5CLENBdGhDK0MsQUE4Ui9CLEFBcXdDVSxDQTMxRUYsQUEyakRFLENBd1BILENBeVRULEVBMWxDMkIsQUF5eEJ6QyxBQXdRQSxBQXdpQnFCLENBdmtGZixBQXVVZSxBQWdLQSxBQStpQk0sQUFxaUJuQixBQWl5QkEsQ0F4K0RHLEFBZ0tDLEFBbVhDLEFBNFJBLEFBK0tBLEFBZ25CQSxBQTZyQkEsQUE0Q08sQUFhTCxDQWxxRkYsQUE2dEZBLENBcCtFRixBQTY4QlUsQUE2bUJBLEFBa01SLEFBa1JiLENBMUtnQixBQXlZSyxDQWhsRUYsQUF1V0UsQ0FseEJLLEFBMmpERSxBQWl5QkEsQUFVRSxFQXB5QzlCLEFBcW1DbUIsQUFzV0UsQ0FoeUNnQixBQTZtQkEsQUE4UHRCLENBM3BEOEIsRUF6RS9CLEFBNkJBLEFBd1dFLEFBOElBLEFBNkJBLEFBK1BBLEFBOEJBLEFBaUpBLEFBNkJBLEFBbWxCQSxBQTZCQSxBQWdxQkEsQ0E5eUZsQixBQW1zQmdCLEFBOEJBLEFBaXNFRixDQXY0RmQsQUFtYWUsQUE0dkRELEFBNnFCQyxDQWxxRmYsR0FzTTZCLEFBdTVEYyxBQW9OdkIsQ0EzMUVGLEFBMmpERSxBQWluQ0YsQUFtQmhCLEVBNW5CQSxDQWowRFcsQ0FzZ0ZVLENBeHVCQSxDQTZxQlQsQ0FwMEVLLEFBNkJBLEFBd1dFLEFBOElBLEFBNkJBLEFBK1BBLEFBOEJBLEFBaUpBLEFBNkJBLEFBbWxCQSxBQTZCQSxBQWdnQkgsQUFnS0csQ0FoM0VVLEFBcVFaLEFBOEJBLEFBNGVjLEFBNHVCQSxBQW13Qk0sQ0FubUNoQixHQXA2Q0ksQUEyakRFLENBOFQzQixBQXVyQkEsQ0F4MEVGLEFBMDZFcUIsQ0FwMURhLEFBdStDaEMsQUE0QjZDLENBLytFRixBQW9KQSxBQWloQ0osQUFrUlAsQUF3UmEsQUFrcEN4QixDQXQ1RGlCLEVBdGdCbkIsQUFxS0ksQUE2V0YsQUFvUU0sQUFtQ04sQUFvS0EsQUE4bUJBLEVBd25CRixFQW9SMEIsQ0FuNEYxQixBQW9nQnJCLEFBNkJxQixBQXdXRSxBQThJckIsQUE2QnFCLEFBK1ByQixBQThCb0IsQUFpSnBCLEFBNkJvQixBQW1sQnBCLEFBNkJvQixBQTRDNkIsQUFrSjVCLEFBa2VyQixDQTNtRWtCLEFBOEJwQixBQTByQjBDLEFBNm1CQSxBQW9zQmYsRUFqMER6QixFQXhhOEIsQUFzWEUsRUE4K0RaLEVBNXRFZ0IsRUEwYWYsQUEyY0EsQUErbUJBLEFBa05rQixBQStlbEIsQUF3RjRCLEVBMTZFTixDQW8xQlgsQUE2M0NYLENBakZXLEVBbURoQyxDQWh3Q0EsQUE4S0EsQUFnbkJBLENBOWtERixBQW1JQSxBQXFPRSxBQTJLQSxBQXdtRGdDLENBMTlDVixLQTRpQ0QsQUEwakJyQixFQXBUQSxDQXgyQ29CLEFBc0hwQixBQW1qQ3FCLEdBaUtGLENBLytFckIsQUFvSkEsQUEyakRFLENBMDdCQSxHQXB2Q3NDLEFBNm1CQSxHQTA1QmQsQ0E3cEJILENBcHdDckIsQUEyY0EsQUErbUJBLEVBL29ERixDQXN4QmUsQUF3L0JXLEVBOWdDeEIsQ0FxbkNvQixDQXFOcEIsQ0FzTWMsQUF1RGQsSUF0a0ZGLEFBaVJzQyxBQTA4QnBDLEFBZ1dBLEFBNlFBLEFBb2hCQSxDQWo3QnFCLEFBbVhNLEFBNnRCM0IsQ0FobEVGLEFBdVdFLEFBb1FnQixBQXFxRDhCLEdBcjNFaEQsQUFnS0EsR0EwaUV5QyxBQXNPdkMsSUFqb0JBLENBdkdBLEVBejlCQSxDQTlCaUIsQUF3b0NJLElBMzNDckIsTUEyL0JzQixDQW5rRFAsSUE0ekJJLENBamhDQSxBQTJqREUsR0FweUNSLEFBa2hCQSxBQXVTRSxBQW9LRixBQThtQkEsQ0EzNkNmLElBNWtCZ0MsR0EwMEZOLEdBMzRETixBQTJjQSxBQThtQkEsRUEza0RQLEFBMHZCWCxBQStEYSxHQXJwQkYsQUFxYVUsQUEyY0EsQUErbUJBLEFBaXNCQSxFQTl4RHJCLENBME5pQixBQWlQakIsQUEyZmlCLEVBOFVJLENBc2NSLEVBL3ZFRyxBQXl6QkUsR0FycEJGLEFBOFdoQixBQTJjQSxBQThtQkEsQ0E1bkJBLEFBNm1CQSxFQXFRQSxBQTRsQkEsRUF2NEVGLEFBc1hFLENBNC9DYSxBQXdYQyxDQWhnRE8sQUE0dUJBLEtBb0JyQixDQS8vQzBCLEFBeXpCMUIsQ0FXQSxDQTR5Q0EsQ0E1OERGLENBb3VERSxDQXY1REYsQUErd0VvQixJQXAwRUYsSUFvMEJJLEFBNHVCcEIsRUFvd0J3QixJQXJtQ1EsRUFzbkNoQyxJQXAwRUYsQ0FvRUEsS0Fnd0JFLEdBOG5DZ0MsR0FrWGhDLFFBenFEbUIsQUEyY0EsQUErbUJBLEFBaXNCQSxLQTVsRndCLEFBMmpEM0Msd0JBdWhCQSxNQXZ1RUYsVUFzSkEsa0JBaTJCc0IsQUEyY0EsQUErbUJBLEFBaXNCQSxrQkExdkRwQixBQTJjQSxBQSttQmlCLEFBaXNCQSxRQXpyQ1UsT0F5ZjNCLEFBaXNCQSxRQXRjd0IsVUFudkJ4QixZQW92QkEiLCJmaWxlIjoiRzpcXE9TUGFuZWxcXGRvbWFpbnNcXGdtbmV4dDlcXHBhZ2VzXFxwcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbi8vIGltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7XHJcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHByb2R1Y3RzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlcy9wcm9kdWN0c0xpc3QnO1xyXG5pbXBvcnQgUHJvZHVjdHNOZXcgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c05ld0NvbnRhaW5lcic7XHJcbmltcG9ydCBDYXRhbG9nIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdHMvQ2F0YWxvZyc7XHJcbmltcG9ydCBQcm9kdWN0c1RleHRTZWN0aW9ucyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RzVGV4dFNlY3Rpb25zJztcclxuaW1wb3J0IFByb2R1Y3RzVXNhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c1VzYWdlJztcclxuaW1wb3J0IG5ld3MgZnJvbSAnLi4vY29tcG9uZW50cy90YWJsZXMvbmV3c0xpc3QnO1xyXG5pbXBvcnQgT3RoZXJOZXdzIGZyb20gJy4uL2NvbXBvbmVudHMvbmV3cy9PdGhlck5ld3MnO1xyXG5pbXBvcnQgUHJvbW9Qcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb21vUHJvamVjdHMnO1xyXG5pbXBvcnQgUHJvZHVjdHNMaXN0UGxhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c0xpc3RQbGF0ZSc7XHJcblxyXG5jbGFzcyBQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBicmFuZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5leHRIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgICDQkNCy0YLQvtC90L7QvNC90YvQtSDQs9Cw0LfQvtC/0L7RgNGI0L3QtdCy0YvQtdCy0YvQtSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC4INC4INC80LjQvdC4LdGC0Y3Rhi4g0JrQsNGC0LDQu9C+0LNcclxuICAgICAgICAgICAg0L/RgNC+0LTRg9C60YbQuNC4INCe0J7QniBcItCT0LDQt9C+0LLRi9C1INC80LDRiNC40L3Ri1wiXHJcbiAgICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgY29udGVudD1cItCa0LDRgtCw0LvQvtCzINCz0LDQt9C+0L/QvtGA0YjQvdC10LLRi9C10YUg0Y3Qu9C10LrRgtGA0L7RgdGC0LDQvdGG0LjQuSDQuCDQvNC40L3QuC3RgtGN0YYg0L3QsCDQsdCw0LfQtSDQtNCy0LjQs9Cw0YLQtdC70LXQuTogTUFOLCBMSUVCSEVSUiwgTVRVLCBKRU5CQUNIRVIg0Lgg0K/QnNCXLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vZ21lbmVyZ28ucnUvcHJvZHVjdHNcIiAvPlxyXG4gICAgICAgIDwvTmV4dEhlYWQ+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHByb2R1Y3RzLXByb21vXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMSBjb2wteGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb21vLXRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlci1taW4tY29sb3JlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg0JrQsNGC0LDQu9C+0LMg0LPQsNC30L7Qv9C+0YDRiNC90LXQstGL0YUg0Y3Qu9C10LrRgtGA0L7RgdGC0LDQvdGG0LjQuSDQuCDQvNC40L3QuC3QotCt0KFcclxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQnNGLINC30LDQvdC40LzQsNC10LzRgdGPINC/0YDQvtC10LrRgtC40YDQvtCy0LDQvdC40LXQvCwg0YHQsdC+0YDQutC+0Lkg0Lgg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC10LxcclxuICAgICAgICAgICAgICAgICAgICAgICAg0LPQsNC30L7Qv9C+0YDRiNC90LXQstGL0YUg0Y3Qu9C10LrRgtGA0L7RgdGC0LDQvdGG0LjQuSDRg9C20LUg0LHQvtC70LXQtSAxMiDQu9C10YIg0Lgg0LfQsCDRjdGC0L5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0LLRgNC10LzRjyDQv9GA0L7RgtC10YHRgtC40YDQvtCy0LDQu9C4INCx0L7Qu9GM0YjQvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60L7QvNC/0LvQtdC60YLRg9GO0YnQuNGFINC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINGB0YXQtdC8INGB0LHQvtGA0LrQuCwg0Lgg0YHQvNC+0LPQu9C4INC90LDQudGC0Lgg0LvRg9GH0YjQuNC1INGA0LXRiNC10L3QuNGPINC/0YDQuCDQvNC40L3QuNC80YPQvNC1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC30LDRgtGA0LDRgi5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0LjQu9C+0LLRi9C1INGD0YHRgtCw0L3QvtCy0LrQuCwg0LjRgdC/0L7Qu9GM0LfRg9GO0YnQuNC10YHRjyDQv9GA0Lgg0L/RgNC+0LXQutGC0LjRgNC+0LLQsNC90LjQuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQs9Cw0LfQvtCy0YvRhSDRjdC70LXQutGC0YDQvtGB0YLQsNC90YbQuNC5LCDQv9GA0L7RiNC70Lgg0LzQvdC+0LPQvtC70LXRgtC90Y7RjiDQv9GA0L7QstC10YDQutGDINCyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgINGA0LDQsdC+0YfQuNGFINGD0YHQu9C+0LLQuNGP0YUg0Lgg0LPQsNGA0LDQvdGC0LjRgNGO0YIg0LjRgdC/0YDQsNCy0L3Rg9GOINGA0LDQsdC+0YLRgyDQsiDRgtC10YfQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQvNC90L7Qs9C40YUg0LvQtdGCLlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcy1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgY29udGFpbmVyLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29uLTEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi0K3QutC+0L3QvtC80LjRjyDQvdCwINGN0LvQtdC60YLRgNC+0Y3QvdC10YDQs9C40LhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwi0K3Qu9C10LrRgtGA0LjRh9C10YHRgtCy0L5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jb250YWluZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPtCt0LvQtdC60YLRgNC40YfQtdGB0YLQstC+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWluIGNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0LLRgtC+0L3QvtC80L3QsNGPINGN0LrQvtC70L7Qs9C40YfQtdGB0LrQuCDRh9C40YHRgtCw0Y8g0Y3QvdC10YDQs9C40Y8g0LIg0LvRjtCx0YvRhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0LrQvtC70LjRh9C10YHRgtCy0LDRhS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciBjb250YWluZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb24tMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQrdC60L7QvdC+0LzQuNGPINC90LAg0Y3Qu9C10LrRgtGA0L7RjdC90LXRgNCz0LjQuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCLQrdC70LXQutGC0YDQuNGH0LXRgdGC0LLQvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj7QntGF0LvQsNC20LTQtdC90LjQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1pbiBjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktC+0LfQvNC+0LbQvdC+0YHRgtGMINC60L7QvdCy0LXRgNGC0LDRhtC40Lgg0YLQtdC/0LvQsCDQsiDRhdC+0LvQvtC0INC4INC/0L7Qu9GD0YfQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC+0YXQu9Cw0LbQtNC10L3QuNGPLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyIGNvbnRhaW5lci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbi0yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cItCt0LrQvtC90L7QvNC40Y8g0L3QsCDRjdC70LXQutGC0YDQvtGN0L3QtdGA0LPQuNC4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cItCt0LvQtdC60YLRgNC40YfQtdGB0YLQstC+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPtCe0YLQvtC/0LvQtdC90LjQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1pbiBjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQlNC10YjRkdCy0L7QtSDQvtGC0L7Qv9C70LXQvdC40LUg0LrQsNC6INC/0L7QsdC+0YfQvdGL0Lkg0L/RgNC+0LTRg9C60YIg0YDQsNCx0L7RgtGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDRgdGC0LDQvdGG0LjQuC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRhaW5lciBjb250YWluZXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb24tNC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLQrdC60L7QvdC+0LzQuNGPINC90LAg0Y3Qu9C10LrRgtGA0L7RjdC90LXRgNCz0LjQuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCLQrdC70LXQutGC0YDQuNGH0LXRgdGC0LLQvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj7QktGL0LPQvtC00LA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1taW4gY2FyZC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JIg0YDQtdC30YPQu9GM0YLQsNGC0LUgLSDRjdC60L7QvdC+0LzQuNGPIDUwJSDQsiDRgdGA0LDQstC90LXQvdC40Lgg0YFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCw0L3QsNC70L7Qs9C40YfQvdGL0LzQuCDQvtCx0YrRkdC80LDQvNC4IGfQv9C+0YLRgNC10LHQu9C10L3QuNGPLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDYXRhbG9nIGJyYW5kPXticmFuZH0gLz5cclxuICAgICAgICAgIHsvKiA8UHJvZHVjdHNOZXcgYnJhbmQ9e2RhdGEuYnJhbmR9IC8+ICovfVxyXG4gICAgICAgICAgPFByb2R1Y3RzVGV4dFNlY3Rpb25zIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvbW9Qcm9qZWN0cyBpdGVtc0NvdW50PXs0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFByb2R1Y3RzVXNhZ2UgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPE90aGVyTmV3cyBuZXdzPXtuZXdzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAuZW50ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVudGVyLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lbnRlci1kb25lIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5leGl0IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5leGl0LWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZHVjdHMtcHJvbW8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlMWUxZTEgMCUsICNiMWIxYjEgMTAwJSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxMHB4IDE1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLnRleHQtY29udGFpbmVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXByb21vIC50ZXh0LWNvbnRhaW5lciAudGV4dC1taW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuZmlsdGVyLWdyb3VwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWluIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWluOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS1tYXgge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgYm90dG9tOiAtMzVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4OjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAxMjUsIDE0KTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fc2xpZGVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLXZhbHVlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXJcclxuICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzNSUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC52aWV3LWl0ZW0ge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAuYWN0aXZlIC5ibG9jayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLmFjdGl2ZSAuYmxvY2stbWluLFxyXG4gICAgICAgICAgLmJsb2NrLW1heCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLnBsYXRlLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCAuYnV0dG9uLWdyb3VwIC5wbGF0ZS1pY29uIC5ibG9jayB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMSB7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay0yIHtcclxuICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMyB7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stNCB7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTUge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTYge1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stNyB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay04IHtcclxuICAgICAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stOSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAubGlzdC1pY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay1taW4ge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xyXG4gICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stbWF4IHtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgIC5ibG9jay0xIHtcclxuICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMiB7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stMyB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTQge1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgLmxpc3QtaWNvblxyXG4gICAgICAgICAgICAuYmxvY2stNSB7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICByaWdodDogMnB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgLmJsb2NrLTYge1xyXG4gICAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmFjdGl2ZSAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0NXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy11cCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3ItdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3RvciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5saXN0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3RvciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXItdGl0bGUge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZHVjdHMtdGV4dCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXRleHQgLnRleHQtd3JhcHBlciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RzLXRleHQgLnRleHQtd3JhcHBlciAuc3ViaGVhZGluZy1jb21tb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnRleHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2Uge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAucHJvai1mZWVkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgIC5wcm9qLWZlZWRcclxuICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgIC5wcm9qLWZlZWRcclxuICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLnByb21vLXRleHQtY29udGFpbmVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tb1xyXG4gICAgICAgICAgICAgIC5wcm9tby10ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC50ZXh0LW1pbi1jb250YWluZXJcclxuICAgICAgICAgICAgICAudGV4dC1taW4ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMjBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3ItdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3RvciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3Qge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLmhlYWRlci1taW4tY29sb3JlZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSAuc2VjdGlvbi13cmFwcGVyIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXdyYXBwZXJcclxuICAgICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgICAgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXdyYXBwZXJcclxuICAgICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29tbW9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAucHJvbW8tdGV4dC1jb250YWluZXIgLmhlYWRlci1taW4tY29sb3JlZCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0N3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lciAuY2FyZCAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vXHJcbiAgICAgICAgICAgICAgLmNhcmRzLXBsYXRlXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCksIHNlcmlmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW9cclxuICAgICAgICAgICAgICAuY2FyZHMtcGxhdGVcclxuICAgICAgICAgICAgICAuY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiA0NzVweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IC03MnB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZDVkNWQ1O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3Qge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuYWN0aXZlIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjcwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5wbGF0ZSAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAxNXB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZTo6Zmlyc3Qtd29yZCgpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3RvciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy11cCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1vbG90LWZvbnQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWU6OmZpcnN0LXdvcmQoKSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNTM1MzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCAudGV4dC13cmFwcGVyIC50ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAuaGVhZGVyLW1pbi1jb2xvcmVkIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2UgLnNlY3Rpb24td3JhcHBlciAucHJvai1mZWVkIHtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXdyYXBwZXJcclxuICAgICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgICAgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbW1vbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktaGVhZGVyIHtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMTVweCAyNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmZpbHRlci1ncm91cCAuZmlsdGVyLWJsb2NrIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWluIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAtNzRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWluOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyDQutCS0YInO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICByaWdodDogLTkwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1heDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcg0LrQktGCJztcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDIsIDEyNSwgMTQpO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tdmFsdWUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXJcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MiUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5idXR0b24tZ3JvdXAgLnZpZXctaXRlbSB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAucGxhdGUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jayB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuYnV0dG9uLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnBsYXRlLWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stMSB7XHJcbiAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay0yIHtcclxuICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay0zIHtcclxuICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay00IHtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay01IHtcclxuICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTYge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAucGxhdGUtaWNvblxyXG4gICAgICAgICAgICAgIC5ibG9jay03IHtcclxuICAgICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTgge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5wbGF0ZS1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTkge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmJ1dHRvbi1ncm91cCAubGlzdC1pY29uIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stbWluIHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLW1heCB7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stMSB7XHJcbiAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTIge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stMyB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5idXR0b24tZ3JvdXBcclxuICAgICAgICAgICAgICAubGlzdC1pY29uXHJcbiAgICAgICAgICAgICAgLmJsb2NrLTQge1xyXG4gICAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stNSB7XHJcbiAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1ncm91cFxyXG4gICAgICAgICAgICAgIC5saXN0LWljb25cclxuICAgICAgICAgICAgICAuYmxvY2stNiB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3Qge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGkge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiN2I3YjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIC5jYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5jYXRlZ29yeS1saTpob3ZlciAuY2F0ZWdvcnktbGluayB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTVweCByZ2JhKDIxMCwgNzQsIDY3LCAwLjQ1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5jYXRlZ29yeS1saXN0IC5hY3RpdmUgLmNhdGVnb3J5LWxpbmsge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLnBsYXRlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI3MHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogOHB4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5saXN0IC5wcm9kdWN0LWNhcmQtY29udGFpbmVyIC5wcm9kdWN0LWNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctdXApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtaW1nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbW9sb3QtZm9udCk7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtdG9wXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtbmFtZTo6Zmlyc3Qtd29yZCgpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM1MzUzNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXRleHQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLmhlYWRlci1taW4tY29sb3JlZCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnN1YmhlYWRpbmctY29tbW9uIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnRleHQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2ltYWdlcy9JTUdfMy5qcGcnKSAtNjBweCAwIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICByaWdodDogLTEwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWdyZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8ge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2ltYWdlcy9wcm9kdWN0cy9iZy1wcm9kdWN0cy5qcGcnKSA1MCUgMCVcclxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5wcm9tby10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLnByb21vLXRleHQtY29udGFpbmVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDogNzcwcHg7XHJcbiAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDdweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAucHJvbW8tdGV4dC1jb250YWluZXIgLnRleHQtbWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vXHJcbiAgICAgICAgICAgICAgLnByb21vLXRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnRleHQtbWluLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC50ZXh0LW1pbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlOiAxMjVweCAxMjVweCAxMjVweCAvIDMzMHB4IDMzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNhcmQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lcjpob3ZlciAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lcjphY3RpdmUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY2FyZC1jb250YWluZXIgLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtcHJvbW8gLmNhcmRzLXBsYXRlIC5jYXJkLWNvbnRhaW5lciAuY2FyZCAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNhcmQtY29udGFpbmVyIC5jYXJkIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vXHJcbiAgICAgICAgICAgICAgLmNhcmRzLXBsYXRlXHJcbiAgICAgICAgICAgICAgLmNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tb2xvdC1mb250KSwgc2VyaWY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tb1xyXG4gICAgICAgICAgICAgIC5jYXJkcy1wbGF0ZVxyXG4gICAgICAgICAgICAgIC5jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNvbnRhaW5lci0xIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNvbnRhaW5lci0yIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNvbnRhaW5lci0zIHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy1wcm9tbyAuY2FyZHMtcGxhdGUgLmNvbnRhaW5lci00IHtcclxuICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzLXByb21vIC5jYXJkcy1wbGF0ZSAuY29udGFpbmVyLTQgLmNhcmQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmZpbHRlciAuZmlsdGVyLWNvbXBvbmVudCB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAxNXB4IDE3cHggMjVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmZpbHRlci1ncm91cCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzIC5maWx0ZXIgLmZpbHRlci1jb21wb25lbnQgLmZpbHRlci1ncm91cCAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuc2VhcmNoLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnNlYXJjaC10ZXh0LXZhbHVlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuZmlsdGVyIC5maWx0ZXItY29tcG9uZW50IC5maWx0ZXItZ3JvdXAgLmZpbHRlci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2Uge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fbGFiZWwtLW1pbiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAtNzhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWluOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyDQutCS0YInO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAtODVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19sYWJlbC0tbWF4OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyDQutCS0YInO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5maWx0ZXJcclxuICAgICAgICAgICAgICAuZmlsdGVyLWNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItZ3JvdXBcclxuICAgICAgICAgICAgICAuZmlsdGVyLWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LWJsb2NrXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX190cmFjay0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMxLCAxNzIsIDExNyk7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSxcclxuICAgICAgICAgICAgICAgIGluc2V0IC0xcHggLTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICAgICAgICAgIDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAuZmlsdGVyXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1jb21wb25lbnRcclxuICAgICAgICAgICAgICAuZmlsdGVyLWdyb3VwXHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1ibG9ja1xyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZVxyXG4gICAgICAgICAgICAgIC5pbnB1dC1yYW5nZV9fdHJhY2stLWJhY2tncm91bmRcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3NsaWRlci1jb250YWluZXJcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX2xhYmVsLS12YWx1ZSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmZpbHRlclxyXG4gICAgICAgICAgICAgIC5maWx0ZXItY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgLmZpbHRlci1ncm91cFxyXG4gICAgICAgICAgICAgIC5maWx0ZXItYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtYmxvY2tcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VcclxuICAgICAgICAgICAgICAuaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmlucHV0LXJhbmdlX19zbGlkZXIge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtcmVkKTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDIlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmNhdGVnb3J5LWxpc3QgLmNhdGVnb3J5LWxpIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAuY2F0ZWdvcnktbGlzdCAuY2F0ZWdvcnktbGkgLmNhdGVnb3J5LWxpbmsge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUge1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAucGxhdGUgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTk3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLmltZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWltZyB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyMHB4IDI1cHggMjVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvdyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3ItdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2M0YzRjNDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAucGxhdGVcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLW1vdG9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1ncmV5KTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLnBsYXRlXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjYzRjNGM0O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtcG93ZXIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5wbGF0ZVxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICAgICAgICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMgLmxpc3QgLnByb2R1Y3QtY2FyZC1jb250YWluZXIgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cyAubGlzdCAucHJvZHVjdC1jYXJkLWNvbnRhaW5lciAucHJvZHVjdC1jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC5pbWctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1pbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LXRvcFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ub3RvLWZvbnQpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JleSk7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC10b3BcclxuICAgICAgICAgICAgICAucHJvZHVjdC1uYW1lOjpmaXJzdC13b3JkKCkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzUzNTM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1tb3Rvci10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHNcclxuICAgICAgICAgICAgICAubGlzdFxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZFxyXG4gICAgICAgICAgICAgIC50ZXh0LWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5mbGV4LWJvdFxyXG4gICAgICAgICAgICAgIC5mbGV4LXJvd1xyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmQtbW90b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgLmxpc3RcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgIC5wcm9kdWN0LWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb250YWluZXJcclxuICAgICAgICAgICAgICAuZmxleC1ib3RcclxuICAgICAgICAgICAgICAuZmxleC1yb3dcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkLXBvd2VyLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLmZsZXgtcm93XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1wb3dlciB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0c1xyXG4gICAgICAgICAgICAgIC5saXN0XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1jb250YWluZXJcclxuICAgICAgICAgICAgICAucHJvZHVjdC1jYXJkXHJcbiAgICAgICAgICAgICAgLnRleHQtY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgLmZsZXgtYm90XHJcbiAgICAgICAgICAgICAgLnByb2R1Y3QtY2FyZC1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZHVjdHMtdGV4dCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0OjphZnRlciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2ltYWdlcy9JTUdfMy5qcGcnKSAwIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICByaWdodDogLTEwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0IC50ZXh0LXdyYXBwZXIgLnRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMxMzEzMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSAuc2VjdGlvbi13cmFwcGVyIC5oZWFkZXItbWluLWNvbG9yZWQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSAuc2VjdGlvbi13cmFwcGVyIC5wcm9qLWZlZWQge1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcm9tby1wcm9qZWN0cy1wcm9kdWN0LXBhZ2VcclxuICAgICAgICAgICAgICAuc2VjdGlvbi13cmFwcGVyXHJcbiAgICAgICAgICAgICAgLnByb2otZmVlZFxyXG4gICAgICAgICAgICAgIC5wcm9tb3Byb2otY2FyZDpob3ZlclxyXG4gICAgICAgICAgICAgIC5wcm9qLWltZyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIyNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZVxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXdyYXBwZXJcclxuICAgICAgICAgICAgICAucHJvai1mZWVkXHJcbiAgICAgICAgICAgICAgLnByb21vcHJvai1jYXJkXHJcbiAgICAgICAgICAgICAgLnByb2otaW1nIHtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvbW8tcHJvamVjdHMtcHJvZHVjdC1wYWdlXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24td3JhcHBlclxyXG4gICAgICAgICAgICAgIC5wcm9qLWZlZWRcclxuICAgICAgICAgICAgICAucHJvbW9wcm9qLWNhcmRcclxuICAgICAgICAgICAgICAudGV4dC1jb21tb24ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICAgIC5wcm9kdWN0cy10ZXh0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9pbWFnZXMvSU1HXzIuanBnJykgMjUlIDAgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTEwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxOCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb21vLXByb2plY3RzLXByb2R1Y3QtcGFnZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qcm9kdWN0cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCwgcXVlcnkpIHtcclxuICBsZXQgYnJhbmQgPSBjb250ZXh0LnF1ZXJ5LmJyYW5kO1xyXG5cclxuICBpZiAoY29udGV4dC5xdWVyeS5jYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNvbnRleHQucXVlcnkuY2F0ZWdvcnkudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgIGRhdGEuY2F0ZWdvcnkgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnF1ZXJ5ICYmIGNvbnRleHQucXVlcnkuYnJhbmQpIHtcclxuICAgICAgZGF0YS5icmFuZCA9IGNvbnRleHQucXVlcnkuYnJhbmQ7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNhdCBpbiBwcm9kdWN0c0xpc3QpIHtcclxuICAgICAgaWYgKHByb2R1Y3RzTGlzdC5oYXNPd25Qcm9wZXJ0eShjYXQpKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHByb2R1Y3RzTGlzdFtjYXRdO1xyXG4gICAgICAgIGlmIChlbGVtZW50LmNhdGVnb3J5ID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICAgZGF0YS5wdXNoKGVsZW1lbnQucHJvZHVjdHMpO1xyXG4gICAgICAgICAgZGF0YS5wdXNoKGVsZW1lbnQuY2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZGF0YSwgYnJhbmQgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSAnTUFOJztcclxuXHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgZGF0YS5jYXRlZ29yeSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucXVlcnkgJiYgY29udGV4dC5xdWVyeS5icmFuZCkge1xyXG4gICAgICBkYXRhLmJyYW5kID0gY29udGV4dC5xdWVyeS5icmFuZDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgY2F0IGluIHByb2R1Y3RzTGlzdCkge1xyXG4gICAgICBpZiAocHJvZHVjdHNMaXN0Lmhhc093blByb3BlcnR5KGNhdCkpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gcHJvZHVjdHNMaXN0W2NhdF07XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2F0ZWdvcnkgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgICBkYXRhLnB1c2goZWxlbWVudC5wcm9kdWN0cyk7XHJcblxyXG4gICAgICAgICAgZGF0YS5wdXNoKGVsZW1lbnQuY2F0ZWdvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGRhdGEsIGJyYW5kIH07XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XHJcbiJdfQ== */\n/*@ sourceURL=G:\\\\OSPanel\\\\domains\\\\gmnext9\\\\pages\\\\products.js */"));
  }

}

Products.getInitialProps = async function (context, query) {
  let brand = context.query.brand;

  if (context.query.category !== undefined) {
    const category = context.query.category.toUpperCase();
    const data = [];
    data.category = '';

    if (context.query && context.query.brand) {
      data.brand = context.query.brand;
    }

    for (const cat in _components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"]) {
      if (_components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"].hasOwnProperty(cat)) {
        const element = _components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"][cat];

        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }

    return {
      data,
      brand
    };
  } else {
    const category = 'MAN';
    let data = [];
    data.category = '';

    if (context.query && context.query.brand) {
      data.brand = context.query.brand;
    }

    for (const cat in _components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"]) {
      if (_components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"].hasOwnProperty(cat)) {
        const element = _components_tables_productsList__WEBPACK_IMPORTED_MODULE_5__["default"][cat];

        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }

    return {
      data,
      brand
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ 11:
/*!*********************************!*\
  !*** multi ./pages/products.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\OSPanel\domains\gmnext9\pages\products.js */"./pages/products.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-input-range":
/*!************************************!*\
  !*** external "react-input-range" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-yandex-metrika":
/*!***************************************!*\
  !*** external "react-yandex-metrika" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-yandex-metrika");

/***/ }),

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "video-react":
/*!******************************!*\
  !*** external "video-react" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("video-react");

/***/ })

/******/ });
//# sourceMappingURL=products.js.map