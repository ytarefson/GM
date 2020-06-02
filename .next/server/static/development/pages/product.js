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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GaleryProducts.js":
/*!**************************************!*\
  !*** ./components/GaleryProducts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GaleryProducts; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class GaleryProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const images = this.props.product.galery;
    const product = this.props.product;
    const {
      photoIndex,
      isOpen
    } = this.state;
    return __jsx("div", {
      className: "jsx-1977262990" + " " + "mycontainer section-plate galery-plate galery-products"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "galery row m-0"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${images[0]}` // /products/
      ,
      alt: product.label,
      title: product.label,
      onClick: () => this.setState({
        isOpen: true,
        photoIndex: 0
      }),
      className: "jsx-1977262990" + " " + "detail-img"
    }))), __jsx("div", {
      className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${images[1]}` // /products/
      ,
      alt: product.label,
      title: product.label,
      onClick: () => this.setState({
        isOpen: true,
        photoIndex: 1
      }),
      className: "jsx-1977262990" + " " + "detail-img"
    }))), __jsx("div", {
      className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${images[2]}` // /products/
      ,
      alt: product.label,
      title: product.label,
      onClick: () => this.setState({
        isOpen: true,
        photoIndex: 2
      }),
      className: "jsx-1977262990" + " " + "detail-img"
    }))), __jsx("div", {
      className: "jsx-1977262990" + " " + "col-12 col-md-6 col-lg-3"
    }, __jsx("div", {
      className: "jsx-1977262990" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/thumb-${images[3]}` // /products/
      ,
      alt: product.label,
      title: product.label,
      onClick: () => this.setState({
        isOpen: true,
        photoIndex: 3
      }),
      className: "jsx-1977262990" + " " + "detail-img"
    })))), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
      mainSrc: `/images/products/${images[photoIndex]}` // /products/
      ,
      nextSrc: `/images/products/${// /products/
      images[(photoIndex + 1) % images.length]}`,
      prevSrc: `/images/products/${// /products/
      images[(photoIndex + images.length - 1) % images.length]}`,
      onCloseRequest: () => this.setState({
        isOpen: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + images.length - 1) % images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % images.length
      })
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1977262990"
    }, [".galery-plate.jsx-1977262990{margin-bottom:30px;}", ".galery-products.jsx-1977262990{margin-bottom:0;}", ".galery.jsx-1977262990{padding-top:15px;padding-bottom:15px;}", ".galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:120px 120px;grid-gap:15px;}", ".galery.jsx-1977262990 .img-container-plate.jsx-1977262990 .img-container.jsx-1977262990{margin:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;overflow:hidden;}", ".galery.jsx-1977262990 .img-container-plate.jsx-1977262990 .img-container.jsx-1977262990 .detail-img.jsx-1977262990{width:auto;height:100%;}", "@media (min-width:768px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:120px;grid-gap:15px;}}", "@media (min-width:992px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:150px;}}", "@media (min-width:1200px){.galery.jsx-1977262990 .img-container-plate.jsx-1977262990{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:180px;grid-gap:30px;}}"]));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function JumboAskForm() {
  return __jsx("div", {
    className: "jsx-2451680366"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "container-fluid jumbo-askForm"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "container"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "col"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "wrapper"
  }, __jsx("div", {
    className: "jsx-2451680366" + " " + "text-container"
  }, __jsx("span", {
    className: "jsx-2451680366" + " " + "jumbo-title"
  }, "\u041D\u0443\u0436\u0435\u043D \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0451\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438?"), __jsx("span", {
    className: "jsx-2451680366" + " " + "jumbo-text"
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0430\u043D\u043A\u0435\u0442\u0443 \u0438 \u043D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044F\u0442 \u0432\u0430\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442.", ' ')), __jsx("div", {
    className: "jsx-2451680366" + " " + "button-container"
  }, __jsx("a", {
    href: "/askForm",
    className: "jsx-2451680366" + " " + "button-askForm"
  }, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2451680366"
  }, [".jumbo-askForm.jsx-2451680366{background:var(--new-gradient);min-height:150px;padding-top:30px;padding-bottom:30px;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366{display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto;grid-gap:30px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366{display:block;width:100%;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-title.jsx-2451680366{display:block;font-size:20px;font-weight:900;color:var(--accent-dark);color:white;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-text.jsx-2451680366{display:block;margin-top:10px;font-size:14px;padding-right:120px;font-weight:500;color:var(--text);}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366{width:100%;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366{position:relative;display:block;margin:0 auto;width:270px;height:70px;border-radius:3px;border:3px solid white;color:white;text-align:center;font-family:var(--molot-font);line-height:66px;font-size:24px;overflow:hidden;-webkit-transition:all 0.2s;transition:all 0.2s;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366::after{position:absolute;display:block;content:'';height:120px;width:35px;background-color:rgb(238,238,238);top:50%;-webkit-transform:translateY(-50%) rotate(15deg);-ms-transform:translateY(-50%) rotate(15deg);transform:translateY(-50%) rotate(15deg);left:-10px;-webkit-transition:all 0.2s;transition:all 0.2s;}", ".jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366:hover.jsx-2451680366::after{left:240px;}", "@media (min-width:576px){.jumbo-askForm.jsx-2451680366{min-height:150px;padding-top:30px;padding-bottom:30px;}}", "@media (min-width:768px){.jumbo-askForm.jsx-2451680366{margin-bottom:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366{grid-template-columns:2fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366{display:block;width:100%;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-title.jsx-2451680366{display:block;font-size:20px;font-weight:900;color:var(--accent-dark);color:white;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-text.jsx-2451680366{display:block;margin-top:10px;font-size:14px;padding-right:0px;font-weight:500;color:var(--text);}}", "@media (min-width:992px){.jumbo-askForm.jsx-2451680366{min-height:150px;padding-top:30px;padding-bottom:30px;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366{display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366{display:block;width:100%;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-title.jsx-2451680366{display:block;font-size:22px;font-weight:900;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-text.jsx-2451680366{display:block;font-size:16px;font-weight:500;}}", "@media (min-width:1200px){.jumbo-askForm.jsx-2451680366{background:none;min-height:150px;padding-top:30px;padding-bottom:30px;margin-bottom:0px;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366{display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366{display:block;width:100%;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-title.jsx-2451680366{display:block;font-size:36px;margin-bottom:0px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:300;line-height:34px;color:var(--text);}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .text-container.jsx-2451680366 .jumbo-text.jsx-2451680366{display:block;font-size:18px;font-weight:900;color:var(--accent-grey);}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366{width:100%;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366{position:relative;display:block;margin:0 auto;width:270px;height:70px;border-radius:3px;border:3px solid var(--accent-grey);color:var(--accent-grey);text-align:center;font-family:var(--molot-font);line-height:66px;font-size:24px;overflow:hidden;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366::after{position:absolute;display:block;content:'';height:120px;width:35px;background-color:rgb(238,238,238);top:50%;-webkit-transform:translateY(-50%) rotate(15deg);-ms-transform:translateY(-50%) rotate(15deg);transform:translateY(-50%) rotate(15deg);left:-10px;-webkit-transition:all 0.2s;transition:all 0.2s;}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366:hover{background-color:#fff;box-shadow:var(--box-shadow);}.jumbo-askForm.jsx-2451680366 .wrapper.jsx-2451680366 .button-container.jsx-2451680366 .button-askForm.jsx-2451680366:hover.jsx-2451680366::after{left:240px;}}"]));
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
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
    }, ["@import '../node_modules/video-react/dist/video-react';", ".myVideo.jsx-4268982151{padding-left:15px;padding-right:15px;width:100%;height:300px;}", ".video-react-poster.jsx-4268982151{top:0;}", ".myVideoKompleks-2.jsx-4268982151{width:auto;overflow:hidden;}", "@media (min-width:992px){.myVideo.jsx-4268982151{height:400px;}}", "@media (min-width:1200px){.myVideo.jsx-4268982151{height:400px;}}"]));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables/serviceList */ "./components/tables/serviceList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Footer = () => __jsx("footer", {
  className: "jsx-2510472162" + " " + "footer"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "gaz-mash"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "dots-right"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "white-stripe"
}), __jsx("div", {
  className: "jsx-2510472162" + " " + "container"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "row m-0"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/"
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "footer-logo-container"
}, __jsx("img", {
  src: "/images/logo-big.png",
  alt: "\u041E\u041E\u041E \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  title: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F - \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2510472162" + " " + "footer-logo"
})))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-3 link-map"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u041A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  as: as
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, label)))), __jsx("a", {
  href: "/calculator",
  className: "jsx-2510472162" + " " + "footer-button calc-link"
}, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440"), __jsx("a", {
  href: "/askForm",
  className: "jsx-2510472162" + " " + "footer-button askForm-link"
}, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-sm-6 col-lg-5 link-map"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "link-map-header"
}, "\u0423\u0441\u043B\u0443\u0433\u0438:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "link-map-list"
}, _tables_serviceList__WEBPACK_IMPORTED_MODULE_4__["default"].map(item => __jsx("li", {
  key: item.key,
  className: "jsx-2510472162" + " " + "link-map-item"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/uslugi/${item.href}`,
  as: `/uslugi/${item.as}`
}, __jsx("a", {
  className: "jsx-2510472162" + " " + "link-map-link"
}, item.label)))))), __jsx("div", {
  className: "jsx-2510472162" + " " + "col-12 col-md-6 col-lg-4"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "contacts-header"
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B:"), __jsx("ul", {
  className: "jsx-2510472162" + " " + "adres-list"
}, __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("a", {
  href: "https://yandex.ru/maps/-/CBFyIKsQPB",
  target: "_blank",
  className: "jsx-2510472162" + " " + "adres-map-link pb-3"
}, "150062, \u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C,", __jsx("br", {
  className: "jsx-2510472162"
}), "\u043F\u0440-\u0442.\xA0\u0410\u0432\u0438\u0430\u0442\u043E\u0440\u043E\u0432-155")), __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "adres-phones"
}, __jsx("a", {
  href: "tel:+74852260368",
  className: "jsx-2510472162" + " " + "phone-link phone-link-big"
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-03-68"), __jsx("a", {
  href: "tel:+74852267960",
  className: "jsx-2510472162" + " " + "phone-link"
}, "+7 ", __jsx("b", {
  className: "jsx-2510472162" + " " + "text-grey"
}, "(4852)"), " 26-79-60"))), __jsx("li", {
  className: "jsx-2510472162"
}, __jsx("a", {
  href: "mailto:market@gmenergo.ru",
  className: "jsx-2510472162" + " " + "adres-email"
}, "market@gmenergo.ru")), __jsx("li", {
  className: "jsx-2510472162"
})), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u0433\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B:"), __jsx("span", {
  className: "jsx-2510472162" + " " + "link-1"
}, "\u043F\u043D-\u043F\u0442: 9:00-18:00")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "intersell"
}, __jsx("a", {
  href: "http://intersell.su/",
  className: "jsx-2510472162" + " " + "interlink"
}, __jsx("div", {
  className: "jsx-2510472162" + " " + "text-container"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-description"
}, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"), __jsx("span", {
  className: "jsx-2510472162" + " " + "logo-name"
}, "intersell.su")), __jsx("div", {
  className: "jsx-2510472162" + " " + "logo-cont"
}, __jsx("span", {
  className: "jsx-2510472162" + " " + "logo"
}, "IS")))), __jsx("div", {
  className: "jsx-2510472162" + " " + "rights-reserved"
}, "2006 - 2019 \u041E\u041E\u041E \"\u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B\" \xA9 \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2510472162"
}, [".text-grey.jsx-2510472162{color:#e5e5e5;}", ".footer-button.jsx-2510472162{display:block;width:170px;height:40px;border:2px solid white;text-align:center;color:white;margin-bottom:10px;line-height:40px;border-radius:3px;text-transform:uppercase;font-weight:700;}", ".footer-button.jsx-2510472162:hover{color:white;background-color:rgba(255,255,255,0.2);}", ".footer.jsx-2510472162{overflow:hidden;text-align:left;padding-top:25px;padding-bottom:60px;background:linear-gradient(115deg,#353535 0%,#2f2f2f 100%);position:relative;}", ".footer.jsx-2510472162 .gaz-mash.jsx-2510472162{position:absolute;display:block;z-index:0;left:0;right:0;top:40%;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);width:auto;height:200px;opacity:0.05;background:url('/images/bg-gaz-mash.png') 50% 50% no-repeat;background-size:contain;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer;}", ".footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:30px;}", ".footer.jsx-2510472162 .contacts-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;margin-bottom:15px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-1.jsx-2510472162{display:block;color:white;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162{padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:15px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 li.jsx-2510472162{padding:0;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{width:100%;color:#ffffff;font-size:20px;font-weight:700;line-height:26px;font-weight:300;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162{width:100%;display:block;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{font-family:var(--molot-font);display:block;margin:0 auto;font-weight:400;font-size:23px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;line-height:30px;color:#ffffff;}", ".footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-email.jsx-2510472162{color:#ffffff;width:100%;font-style:italic;font-size:16px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{font-family:var(--molot-font);display:block;width:100%;color:var(--l-grey);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;line-height:30px;text-transform:uppercase;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0;margin-bottom:5px;}", ".footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-size:14px;font-weight:400;line-height:22px;}", ".footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:none;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162{width:100%;margin-top:15px;position:absolute;height:50px;width:180px;bottom:0;right:-10px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162{position:relative;z-index:10;margin:0 0 0 auto;bottom:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:180px;height:50px;color:white;background-color:white;-webkit-transform:skewX(-10deg);-ms-transform:skewX(-10deg);transform:skewX(-10deg);}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162{width:50px;left:-50px;opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162:hover .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:1;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162{background-color:#2759d9;display:block;position:absolute;opacity:1;z-index:0;left:-10px;width:10px;height:50px;border-radius:3px;margin:0 auto;margin-bottom:5px;-webkit-transition:all 0.3s ease-out;transition:all 0.3s ease-out;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162 .logo.jsx-2510472162{opacity:0;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);font-family:var(--molot-font);position:relative;line-height:50px;text-align:center;display:block;font-size:15px;-webkit-transition:all 0.5s ease-in 0.2s;transition:all 0.5s ease-in 0.2s;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .logo-cont.jsx-2510472162::after{display:block;position:absolute;content:'';top:50%;left:50%;width:30px;height:30px;border-radius:50px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px solid white;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162{z-index:1;-webkit-transform:skewX(10deg);-ms-transform:skewX(10deg);transform:skewX(10deg);display:block;position:relative;width:auto;height:auto;padding-top:12px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-description.jsx-2510472162{color:#353535;display:block;text-align:left;line-height:11px;font-size:11px;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;}", ".footer.jsx-2510472162 .intersell.jsx-2510472162 .interlink.jsx-2510472162 .text-container.jsx-2510472162 .logo-name.jsx-2510472162{display:block;color:#2759d9;text-align:left;text-transform:uppercase;font-size:14px;line-height:18px;font-weight:900;}", "@media (min-width:768px){.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:10px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;text-align:left;font-size:16px;font-weight:400;line-height:28px;}.footer.jsx-2510472162 .rights-reserved.jsx-2510472162{display:block;position:absolute;bottom:-20px;left:0;padding-right:10px;padding-left:10px;font-size:12px;height:40px;line-height:14px;color:white;}}", "@media (min-width:992px){.footer.jsx-2510472162{padding-top:15px;}.footer.jsx-2510472162 .white-stripe.jsx-2510472162{display:block;position:absolute;content:'';background-color:#fafafa;opacity:1;z-index:0;top:58px;right:0;left:0;height:32px;}.footer.jsx-2510472162 .dots-right.jsx-2510472162{position:absolute;width:460px;height:560px;top:15%;right:-5%;opacity:0.05;z-index:0;background:url('/images/dots-big-white.png') 0% 0% no-repeat;}.footer.jsx-2510472162 .gaz-mash.jsx-2510472162{left:0;right:0;top:25%;width:auto;height:350px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);background:url('/images/bg-gaz-mash.png') 5% 10% no-repeat;}.footer.jsx-2510472162 .footer-logo-container.jsx-2510472162 .footer-logo.jsx-2510472162{display:block;width:auto;height:30px;margin-bottom:14px;}.footer.jsx-2510472162 .contacts-header.jsx-2510472162{z-index:1;color:#353535;}.footer.jsx-2510472162 .adres-list.jsx-2510472162{text-align:left;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-map-link.jsx-2510472162{font-size:18px;}.footer.jsx-2510472162 .adres-list.jsx-2510472162 .adres-phones.jsx-2510472162 .phone-link.jsx-2510472162{margin:0 auto 0 0 !important;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-header.jsx-2510472162{padding-left:0px;text-align:left;color:#353535;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162{margin-top:15px;padding-left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162{padding:0px 0px;}.footer.jsx-2510472162 .link-map.jsx-2510472162 .link-map-list.jsx-2510472162 .link-map-item.jsx-2510472162 .link-map-link.jsx-2510472162{display:block;color:#ffffff;width:100%;font-weight:300;text-align:left;font-size:16px;line-height:26px;}}"]));

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class FormPage extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPhone: '',
      isEmailEmpty: true,
      isPhoneEmpty: true,
      isFormFullfiled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  handleSubmit(event) {
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
    }).then(res => next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/confirm-email'));
  }

  handleChangeEmail(e) {
    this.setState({
      userEmail: e.target.value
    });
  }

  handleChangePhone(e) {
    this.setState({
      userPhone: e.target.value
    });
  }

  render() {
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
    }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3691667022"
    }, [".form-bg.jsx-3691667022{margin-top:30px;padding-left:15px;padding-right:15px;}", ".forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:30px;border-radius:var(--border-radius);background:linear-gradient( to bottom, #fafafa 0%, #fff 20%, #fff 80%, #fafafa 100% );border:1px solid #dcdcdc;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);color:var(--accent-dark);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:24px;text-align:center;position:relative;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;background-color:var(--wall-color);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:24px;line-height:30px;color:var(--accent-dark);padding-bottom:15px;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;border-radius:50px;padding-left:15px;width:100%;font-size:14px;height:40px;margin-bottom:15px;background-color:#e6e6e6;border:none;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:10px 15px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow-up);}", ".forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:16px;font-weight:500;line-height:20px;color:var(--sub-color);}", "@media (min-width:576px){.forma.jsx-3691667022{padding:15px 30px 30px 30px;margin-bottom:60px;border-radius:var(--border-radius);}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto;margin-bottom:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022{margin-top:15px;margin-bottom:15px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:34px;text-align:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::after{position:absolute;content:'';width:45%;right:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';width:45%;left:-30px;top:50%;-webkit-transform:translateY(-50%) rotate(0deg);-ms-transform:translateY(-50%) rotate(0deg);transform:translateY(-50%) rotate(0deg);height:2px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-family:var(--molot-font);font-weight:700;font-size:34px;line-height:34px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{margin-bottom:20px;height:45px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:15px 30px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto 0;box-shadow:var(--box-shadow);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:18px;padding-right:80px;line-height:22px;font-weight:700;}}", "@media (min-width:768px){.forma.jsx-3691667022{padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 10fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:36px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:none;position:absolute;content:'';width:2px;height:180px;top:-120px;left:50%;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{display:none;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-weight:700;font-size:36px;line-height:40px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:15px;width:230px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .callTime.jsx-3691667022{display:block;border-radius:30px;padding-left:15px;width:230px;height:42px;margin:0 auto 20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:15px 20px;margin:0 auto 20px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:17px;line-height:20px;padding-right:0;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:20px;padding-left:20px;}}", "@media (min-width:992px){.forma.jsx-3691667022{overflow:hidden;padding:30px;}.forma.jsx-3691667022 .form-group.jsx-3691667022{padding-left:30px;display:grid;grid-gap:0px;grid-template-columns:10fr 1fr 11fr;grid-template-rows:auto;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022{display:block;font-family:var(--molot-font);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:44px;text-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;border:4px solid white;padding:30px;border-radius:var(--border-radius);box-shadow:45px 0px 60px -30px rgba(255,255,255,0.4), -45px 0px 60px -30px rgba(255,255,255,0.4);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::after{display:block;position:absolute;content:'';width:2px;height:200px;top:-200px;left:50%;-webkit-transform:translateX(-50%) rotate(0deg);-ms-transform:translateX(-50%) rotate(0deg);transform:translateX(-50%) rotate(0deg);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .form-mid.jsx-3691667022 .form-text-or.jsx-3691667022::before{position:absolute;content:'';display:block;left:50%;top:100px;width:2px;height:173px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-context.jsx-3691667022 .form-cta-title.jsx-3691667022{font-size:44px;line-height:48px;padding-bottom:15px;margin-bottom:20px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .userEmail.jsx-3691667022{display:block;padding-left:30px;height:60px;width:300px;margin:0 auto 20px;font-size:16px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022{display:block;border-radius:50px;border:none;padding:18px 20px;margin:15px auto 0px;box-shadow:var(--box-shadow-up);-webkit-transition:all 0.2s;transition:all 0.2s;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-button.jsx-3691667022:hover{cursor:pointer;box-shadow:var(--box-shadow);}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-2.jsx-3691667022{font-size:22px;line-height:27px;padding-right:100px;}.forma.jsx-3691667022 .form-group.jsx-3691667022 .colform.jsx-3691667022 .form-cta-text-22.jsx-3691667022{text-align:center;padding-right:50px;padding-left:50px;margin-bottom:15px;}}", "@media (min-width:1400px){.forma.jsx-3691667022{margin-left:15px;margin-right:15px;}}"]));
  }

}

FormPage.defaultProps = {
  product: ''
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const defaultDescription = 'Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.';
const defaultOGURL = 'https://gmenergo.ru';
const defaultOGImage = '/images/favicon.ico';

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  charSet: "UTF-8"
}), __jsx("title", null, props.title || 'Производство газопоршневых электростанций - Газовые Машины'), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescription
}), __jsx("link", {
  rel: "icon",
  href: "/images/favicon.ico"
}), __jsx("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/images/apple-touch-icon.png"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/images/favicon-32x32.png"
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/images/favicon-16x16.png"
}), __jsx("link", {
  rel: "manifest",
  href: "/images/site.webmanifest"
}), __jsx("link", {
  rel: "mask-icon",
  href: "/images/safari-pinned-tab.svg",
  color: "#5bbad5"
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  property: "og:title",
  content: props.title || ''
}), __jsx("meta", {
  property: "og:description",
  content: props.description || defaultDescription
}), __jsx("meta", {
  name: "twitter:site",
  content: props.url || defaultOGURL
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary_large_image"
}), __jsx("meta", {
  name: "twitter:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage
}), __jsx("meta", {
  property: "og:image:width",
  content: "1200"
}), __jsx("meta", {
  property: "og:image:height",
  content: "630"
}));

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = () => __jsx("nav", {
  className: "jsx-2809465157" + " " + "navbar navbar-expand-lg navbar-light"
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "/"
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "navbar-brand"
}, __jsx("img", {
  src: "/images/logo-grey.png",
  title: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
  alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0413\u0430\u0437\u043E\u0432\u044B\u0435 \u041C\u0430\u0448\u0438\u043D\u044B",
  className: "jsx-2809465157"
}))), __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarNav",
  "aria-controls": "navbarNav",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-2809465157" + " " + "navbar-toggler"
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "navbar-toggler-icon-mine"
})), __jsx("div", {
  id: "navbarNav",
  className: "jsx-2809465157" + " " + "collapse navbar-collapse"
}, __jsx("ul", {
  className: "jsx-2809465157" + " " + "navbar-nav"
}, _menu__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
  key,
  href,
  label,
  as
}) => __jsx("li", {
  key: key,
  className: "jsx-2809465157" + " " + "nav-item"
}, __jsx(_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
  activeClassName: "active",
  href: href,
  as: as
}, __jsx("a", {
  className: "jsx-2809465157" + " " + "nav-link"
}, label)))), __jsx("li", {
  className: "jsx-2809465157" + " " + "nav-item"
}, __jsx("div", {
  className: "jsx-2809465157" + " " + "contacts-container"
}, __jsx("span", {
  className: "jsx-2809465157" + " " + "lorem"
}, "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), __jsx("span", {
  className: "jsx-2809465157" + " " + "tel"
}, "+7 (4852) 26\xB703\xB768, 26\xB779\xB760"), __jsx("span", {
  className: "jsx-2809465157" + " " + "pochta"
}, "market@gmenergo.ru"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2809465157"
}, ["body{margin:0;}", ".navbar.jsx-2809465157{position:fixed !important;top:0;left:0;right:0;z-index:10;min-height:70px;background:#fafafa;border-bottom:15px solid white;overflow:hidden;box-shadow:0 35px 30px -30px rgba(0,0,0,0.05);}", ".navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:25px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157{position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{position:absolute;content:'\u043D\u043E\u0432\u0438\u043D\u043A\u0430';color:var(--accent-red);left:70%;top:-6px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);font-size:12px;font-weight:700;text-shadow:4px 4px 2px rgba(0,0,0,0.05);-webkit-letter-spacing:2.2px;-moz-letter-spacing:2.2px;-ms-letter-spacing:2.2px;letter-spacing:2.2px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:15px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:5px;text-align:center;background-color:white;padding-top:10px;padding-bottom:10px;border-radius:3px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{display:block;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#272727;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-weight:900;color:$text;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;color:var(--accent-red);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;font-weight:300;color:#525252;position:relative;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover{color:var(--accent-red);}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157::before{position:absolute;content:'';display:block;width:0%;height:1px;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);background:linear-gradient( to right, rgba(255,0,0,0) 0%, rgb(211,20,20) 50%, rgba(255,0,0,0) 100% );-webkit-transition:all 0.2s;transition:all 0.2s;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157:hover.jsx-2809465157::before{width:100%;}", ".navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .active.jsx-2809465157{color:var(--accent-red) !important;font-weight:500 !important;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157{height:40px;border:none;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157{background:black;width:21px;height:2px;display:block;position:relative;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::before,.navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{content:'';position:absolute;width:21px;height:2px;background:black;left:0;top:7px;}", ".navbar.jsx-2809465157 .navbar-toggler.jsx-2809465157 .navbar-toggler-icon-mine.jsx-2809465157::after{top:-7px;}", "@media (min-width:992px){.navbar.jsx-2809465157{padding-top:25px;padding-bottom:20px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:first-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:last-child{margin-top:0px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{background-color:#fafafa;margin-bottom:0px;margin-left:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.lorem.jsx-2809465157{line-height:15px;display:block;font-weight:300;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#929292;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.tel.jsx-2809465157{display:block;font-weight:900;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}#navbarNav.jsx-2809465157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}}", "@media (min-width:1200px){.navbar.jsx-2809465157{padding-top:20px !important;padding-bottom:10px !important;}.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{display:block;height:40px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157:nth-child(2)::after{top:10px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:15px;}}", "@media (min-width:1400px){.navbar.jsx-2809465157 .navbar-brand.jsx-2809465157 img.jsx-2809465157{margin-left:30px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157{padding:0 7px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .nav-link.jsx-2809465157{font-size:16px;font-weight:300;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157{margin-bottom:0px;margin-left:60px;margin-right:15px;text-align:right;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .lorem.jsx-2809465157{line-height:15px;display:block;font-weight:500;font-size:12px;-webkit-letter-spacing:2.7px;-moz-letter-spacing:2.7px;-ms-letter-spacing:2.7px;letter-spacing:2.7px;color:#a3a3a3;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .tel.jsx-2809465157{display:block;font-size:20px;line-height:28px;font-weight:700;-webkit-letter-spacing:-0.5px;-moz-letter-spacing:-0.5px;-ms-letter-spacing:-0.5px;letter-spacing:-0.5px;color:#525252;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-item.jsx-2809465157 .contacts-container.jsx-2809465157 .pochta.jsx-2809465157{line-height:12px;font-size:13px;display:block;font-weight:300;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.navbar.jsx-2809465157 .navbar-nav.jsx-2809465157 .nav-calc-link.jsx-2809465157{font-size:15px;position:relative;}}"]));

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, [".other-new-plate{display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:30px;}", ".other-new-plate .other-new{display:block;}", ".other-new-plate .other-new .img-container{border-radius:var(--border-radius);overflow:hidden;margin-bottom:15px;box-shadow:3px 3px 4px rgba(0,0,0,0.25);}", ".other-new-plate .other-new .img-container .detail-img{max-width:100%;}", ".other-new-plate .other-new .other-new-title{color:var(--accent-dark);-webkit-text-decoration:none;text-decoration:none;display:block;margin-top:2px;font-size:14px;line-height:17px;}", ".other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "@media (min-width:576px){.other-new-plate{display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:30px;margin-bottom:15px;}.other-new-plate .other-new .img-container{height:150px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}}", "@media (min-width:768px){.other-new .img-container{height:230px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.other-new .img-container .detail-img{max-width:100%;}}", "@media (min-width:992px){.other-new-plate{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:30px;margin-bottom:30px;}.other-new-plate .other-new .img-container{height:155px;overflow:hidden;border-radius:var(--border-radius);}.other-new-plate .other-new .img-container .detail-img{display:block;min-width:105%;height:105%;}}", "@media (min-width:1200px){.subheading-common{display:block;margin-top:30px;}.other-new-plate{padding-top:15px;}.other-new-plate .other-new .img-container{height:160px;overflow:hidden;}.other-new-plate .other-new .img-container .detail-img{max-width:100%;}.other-new-plate .other-new .other-new-title{margin-top:7px;font-size:15px;line-height:20px;font-weight:300;}.other-new-plate .other-new .other-new-title:hover{-webkit-text-decoration:underline;text-decoration:underline;}}"]));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/head */ "./components/head.js");
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");
/* harmony import */ var _products_SimilarProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/SimilarProducts */ "./components/products/SimilarProducts.js");
/* harmony import */ var _products_ProductsBenefits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products/ProductsBenefits */ "./components/products/ProductsBenefits.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form */ "./components/form.js");
/* harmony import */ var _JumboAskForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../JumboAskForm */ "./components/JumboAskForm.js");
/* harmony import */ var _components_GaleryProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/GaleryProducts */ "./components/GaleryProducts.js");
/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../YoutubeVideo */ "./components/YoutubeVideo.js");
/* harmony import */ var _tables_newsList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tables/newsList */ "./components/tables/newsList.js");
/* harmony import */ var _components_news_OtherNews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/news/OtherNews */ "./components/news/OtherNews.js");
/* harmony import */ var _PromoProjects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PromoProjects */ "./components/products/PromoProjects.js");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-image-lightbox */ "react-image-lightbox");
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














class ProductsUnitPlate extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const {
      photoIndex,
      isOpen
    } = this.state;
    const {
      id,
      category
    } = this.props.data;
    const data = _tables_productsList__WEBPACK_IMPORTED_MODULE_4__["default"];
    let products = [];
    let product = [];
    const isVideo = false;
    data.map(item => {
      if (item.category === category) {
        products = item.products;
        products.map(item => {
          if (item.id === Number(id)) {
            product = item;
          }
        });
      }
    });

    if (product.id == 7) {
      isVideo = true;
    }

    let similar = [];
    products.map(item => {
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
    }, __jsx(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: `Газопоршневая электростанция ${product.label}`,
      description: `${product.descriptionTwo}`
    }), __jsx("div", {
      className: "jsx-3895916260" + " " + "container"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "col-12"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "breadcrumbs"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "jsx-3895916260" + " " + "crambs"
    }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F > ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      src: `/images/products/thumb-${product.img}`,
      alt: product.label,
      title: product.label,
      onClick: () => this.setState({
        isOpen: true
      }),
      className: "jsx-3895916260" + " " + "product-img"
    }), isOpen && __jsx(react_image_lightbox__WEBPACK_IMPORTED_MODULE_14___default.a, {
      mainSrc: `/images/products/${product.img}`,
      onCloseRequest: () => this.setState({
        isOpen: false
      })
    })))))), __jsx("div", {
      className: "jsx-3895916260" + " " + "container-fluid description product-unit pt-4 pb-5"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "mycontainer section-plate"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "col-12"
    }, __jsx(_products_ProductsBenefits__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("h4", {
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
    }, __jsx(_PromoProjects__WEBPACK_IMPORTED_MODULE_13__["default"], {
      itemsCount: 4
    }))))), __jsx(_JumboAskForm__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("div", {
      className: "jsx-3895916260" + " " + "container-fluid bg-gradient-white pt-2"
    }, product.id == 12 && __jsx("div", {
      className: "jsx-3895916260" + " " + "mycontainer"
    }, __jsx(_YoutubeVideo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "myVideo"
    })), __jsx(_products_SimilarProducts__WEBPACK_IMPORTED_MODULE_5__["default"], {
      similar: similar,
      category: category
    })), __jsx(_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
      product: product.label
    }), __jsx("div", {
      className: "jsx-3895916260" + " " + "container-fluid"
    }, __jsx("div", {
      className: "jsx-3895916260" + " " + "container pl-xl-4 pr-xl-4"
    }, __jsx(_components_news_OtherNews__WEBPACK_IMPORTED_MODULE_12__["default"], {
      news: _tables_newsList__WEBPACK_IMPORTED_MODULE_11__["default"]
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3895916260"
    }, [".react-fancybox .box{position:fixed;background-color:rgba(0,0,0,0.4);top:0;right:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:1;}", ".react-fancybox .thumbnail img{max-width:600px;}", ".react-fancybox .box .image-box{padding:10px;background-color:white;border-radius:4px;position:relative;}", ".react-fancybox .box .image-box .caption{text-align:center;font-size:14px;margin-top:7px;}", ".react-fancybox .fade-enter{-webkit-animation:fadein 600ms;animation:fadein 600ms;}", ".react-fancybox .fade-leave{-webkit-animation:fadeout 600ms;animation:fadeout 600ms;}", ".react-fancybox .close-btn{background-color:white;width:25px;border-radius:50%;height:25px;position:absolute;right:-13px;top:-13px;}", "@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}", "@keyframes fadein{from{opacity:0;}to{opacity:1;}}", "@-webkit-keyframes fadeout{from{opacity:1;}to{opacity:0;}}", "@keyframes fadeout{from{opacity:1;}to{opacity:0;}}", ".product-unit{overflow:hidden;padding:0;}", ".description{background-color:#fafafa;}", ".description .benefits-plate{margin-bottom:30px;display:grid;grid-template:1fr 1fr 1fr 1fr / 1fr;grid-gap:15px;}", ".description .benefits-plate .benefit-card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:var(--border-radius);padding:15px;background-color:#fff;box-shadow:0 0 15px rgba(0,0,0,0.05);}", ".description .benefits-plate .benefit-card .icon-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:45px;height:45px;margin-right:15px;background-color:var(--accent-red);border-radius:30px;}", ".description .benefits-plate .benefit-card .icon-container .bene-icon{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);-webkit-filter:invert(100%);filter:invert(100%);}", ".description .benefits-plate .benefit-card .text-container .bene-title{display:block;font-size:14px;line-height:18px;font-weight:300;color:#636363;}", ".description .benefits-plate .benefit-card .text-container .bene-text{display:block;color:#4c4c4c;text-transform:uppercase;font-size:16px;font-weight:700;}", ".section-plate .product-img-container{max-width:100%;}", ".section-plate .product-img-container .product-img{width:100%;}", ".section-plate .header-red{display:block;color:var(--text);margin-top:15px;margin-bottom:0px;}", ".section-plate .text-container-2{margin-top:5px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".section-plate .text-container-2 .text-min{color:var(--text);}", ".section-plate .text-container-2 .text-min-value{font-size:13px;color:#2e2e2e;}", ".section-plate .text-container-2 .text-min-value-price{font-size:16px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:900;}", ".section-plate .text-black{color:#353535;}", ".section-plate .product-energy-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:100%;}", ".section-plate .product-energy-container::after{display:block;position:absolute;content:'';width:100%;height:1px;background-color:var(--sub-color);top:50%;z-index:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}", ".section-plate .product-energy-container .product-energy{font-weight:900;font-size:13px;border-radius:var(--border-radius);border:1px solid var(--sub-color);top:50%;display:inline-block;z-index:1;color:var(--accent-red);margin:15px 0 15px auto;background-color:#fff;display:block;padding:4px 15px;}", ".section-plate .button-group .cta-button-container{margin-top:30px;margin-bottom:30px;}", ".section-plate .button-group .cta-button-container .cta-button{display:block;margin:0 auto;width:210px;height:50px;border-radius:2px;border:3px solid var(--accent-red);text-align:center;color:var(--accent-red);font-size:15px;font-weight:700;line-height:45px;-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;}", ".section-plate .button-group .cta-button-container .cta-button:hover{box-shadow:var(--box-shadow);}", ".section-plate .button-group .arenda-text-min{display:block;margin-bottom:15px;font-size:12px;color:#9b9b9b;}", ".section-plate .product-img-container{border-radius:var(--border-radius);box-shadow:3px 3px 2px rgba(0,0,0,0.25);overflow:hidden;}", ".section-plate .parametrs-container{padding-bottom:40px;}", ".section-plate .parametrs-container .calc-link{display:block;width:100%;height:400px;background:var(--red-gradient);}", ".section-plate .parametrs-container .text-container{min-height:40px;height:auto;padding-top:10px;padding-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid lightgrey;}", ".section-plate .parametrs-container .text-container .text-common{line-height:20px;display:block;}", ".section-plate .parametrs-container .text-container .text-bold{display:block;font-size:15px;line-height:20px;text-align:right;}", ".form-bg{position:relative;padding:0;}", "@media (min-width:576px){.section-plate .button-group{margin-top:30px;display:grid;grid-template-columns:1fr 2fr;grid-template-rows:auto;grid-gap:15px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.section-plate .button-group .cta-button-container{margin-top:0px;margin-bottom:0px;}.section-plate .button-group .cta-button-container .cta-button{display:block;margin:0;}.section-plate .button-group .arenda-text-min{display:block;margin-bottom:0;margin-left:15px;}}", "@media (min-width:768px){.color-section .section-plate .header-red{margin-top:0px;}.color-section .section-plate .product-energy-container{margin-top:8px;margin-bottom:8px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:100%;}.color-section .section-plate .product-energy-container::after{display:block;position:absolute;content:'';width:100%;height:1px;top:50%;z-index:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}.color-section .section-plate .product-energy-container .product-energy{margin:0px 0 0px auto;}.color-section .section-plate .text-container-2{margin-top:5px;margin-bottom:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.color-section .section-plate .text-container-2 .text-min{color:var(--text);}.color-section .section-plate .text-container-2 .text-min-value{font-size:16px;color:#2e2e2e;font-weight:700;}.color-section .section-plate .text-container-2 .text-min-value-price{font-size:18px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:900;color:var(--sub-color);}.color-section .section-plate .product-img-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.description .benefits-plate{margin-top:-15px;grid-template:1fr 1fr / 1fr 1fr;}}", "@media (min-width:992px){.color-section .section-plate .header-red{padding-bottom:3px;}.color-section .section-plate .text{line-height:24px;font-size:17px;font-weight:300;}.color-section .section-plate .product-energy-container .product-energy{font-size:18px;padding:5px 15px;}.section-plate .parametrs-container .text-container{padding-top:15px;padding-bottom:15px;}.section-plate .parametrs-container .text-container .text-bold{font-size:18px;}}", "@media (min-width:1200px){.color-section{position:relative;}.color-section .border-left{display:block;position:absolute;z-index:1;top:50%;left:-60px;width:100px;height:90%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,0.3);border-radius:3px;}.color-section .border-right{display:block;position:absolute;z-index:1;top:50%;right:-60px;width:100px;height:90%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border:15px solid rgba(255,255,255,0.3);border-radius:3px;}.product-unit{height:100%;}.product-unit .parametrs-container .text-container{margin-right:30px;}.product-unit .flex-container{height:auto;min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-unit .flex-container .flex-top .header-red{padding-bottom:15px;}.product-unit .flex-container .flex-top .text-container-2{margin-top:4px;margin-bottom:4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.product-unit .flex-container .flex-top .text-container-2 .text-min{color:var(--accent-grey);font-weight:500;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-size:14px;}.product-unit .flex-container .flex-top .text-container-2 .text-min-value{font-size:16px;color:#2e2e2e;font-weight:700;}.product-unit .flex-container .flex-top .text-container-2 .text-min-value-price{font-size:18px;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;font-weight:700;color:var(--sub-color);}.product-unit .flex-container .flex-top .product-energy-container{margin-top:0px;margin-bottom:15px;}.product-unit .flex-container .flex-top .product-energy-container .product-energy{padding:5px 20px 3px;font-weight:500;font-size:18px;}.product-unit .flex-container .flex-bottom .button-group{margin-top:30px;}.product-unit .flex-container .flex-bottom .button-group .cta-button-container{margin-top:0;margin-bottom:0;}.description .benefits-plate{margin-bottom:45px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;}.description .benefits-plate .benefit-card{height:90px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px;padding-right:5px;box-shadow:none;background-color:#fff;box-shadow:0 0 15px rgba(0,0,0,0.05);border-radius:var(--border-radius);}.description .benefits-plate .benefit-card .icon-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:45px;height:45px;margin-right:15px;background-color:var(--accent-red);border-radius:30px;}.description .benefits-plate .benefit-card .icon-container .bene-icon{-webkit-transform:scale(0.75);-ms-transform:scale(0.75);transform:scale(0.75);-webkit-filter:invert(100%);filter:invert(100%);}.description .benefits-plate .benefit-card .text-container .bene-title{display:block;font-size:13px;line-height:16px;font-weight:300;color:#838383;}.description .benefits-plate .benefit-card .text-container .bene-text{margin-top:3px;display:block;color:#242424;text-transform:uppercase;font-size:16px;font-weight:700;}}"]));
  }

}
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables_projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables/projectList */ "./components/tables/projectList.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

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
    _tables_projectList__WEBPACK_IMPORTED_MODULE_2__["default"].map(item => {
      if (item.id !== 0) {
        projectsZero.push(item);
      }
    });
    promoprojects = this.randomArray(projectsZero, itemsCount);
    content = promoprojects.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
    }, [".promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}", ".promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:15px;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}", ".promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}", "@media (min-width:576px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;padding-bottom:30px;display:grid;grid-template:auto auto / 1fr 1fr;grid-gap:15px;}}", "@media (min-width:768px){.promo-projects.jsx-2158328390{margin-top:30px;padding-top:15px;border-radius:3px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-bottom:0px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{grid-gap:30px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{padding-top:12px;padding-left:0px;padding-right:35px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:18px;}}", "@media (min-width:992px){.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding-top:15px;display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:3px;overflow:hidden;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;}}", "@media (min-width:1200px){.promo-projects.jsx-2158328390{padding:0;padding-left:40px;}.promo-projects.jsx-2158328390 .header-min-colored.jsx-2158328390{margin-top:31px;margin-bottom:15px;font-size:19px;text-align:right;border-bottom:1px solid rgba(0,0,0,0.125);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390{padding:0px;display:grid;grid-template:1fr / 1fr;grid-auto-flow:row;grid-gap:30px;grid-gap:30px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-items:center;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390{max-width:360px;cursor:pointer;}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .proj-img.jsx-2158328390{border-radius:10px;overflow:hidden;box-shadow:3px 3px 2px rgba(0,0,0,0.2);}.promo-projects.jsx-2158328390 .proj-feed.jsx-2158328390 .promoproj-card.jsx-2158328390 .text-common.jsx-2158328390{font-size:18px;margin-top:0px;text-align:right;padding-right:0;}}"]));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tables_productsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tables/productsList */ "./components/tables/productsList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SimilarProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;
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
    }, similar.map(({
      label,
      key,
      id,
      img
    }) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/products/${category}/${id}`,
      key: `${key}+${id}`
    }, __jsx("div", {
      className: "jsx-4001456038" + " " + "similar-card-container"
    }, __jsx("a", {
      className: "jsx-4001456038" + " " + "d-block similar-card"
    }, __jsx("div", {
      className: "jsx-4001456038" + " " + "img-container"
    }, __jsx("img", {
      src: `/images/products/${img}`,
      alt: label,
      title: label,
      className: "jsx-4001456038" + " " + "similar-card-img"
    })), __jsx("span", {
      className: "jsx-4001456038" + " " + "similar-card-title"
    }, `Газопоршневая электростанция ${label}`)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4001456038"
    }, [".header-red-2.jsx-4001456038{padding-top:15px;margin-left:0;}", ".similar-products.jsx-4001456038{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:grid;grid-template:1fr 1fr / 1fr 1fr;grid-gap:15px;margin:0;margin-bottom:20px;border-radius:3px;}", ".similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{width:100%;height:100%;max-width:270px;max-height:auto;cursor:pointer;}", ".similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{border-radius:var(--border-radius);overflow:hidden;}", ".similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;}", ".similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:5px;padding-left:5px;padding-right:5px;display:block;font-size:12px;font-weight:700;text-align:center;line-height:16px;}", "@media (min-width:576px){.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{cursor:pointer;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:8px;padding-left:0px;padding-right:35px;display:block;font-size:14px;font-weight:500;text-align:left;line-height:18px;}}", "@media (min-width:768px){.similar-products.jsx-4001456038{margin-bottom:20px;grid-gap:30px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038{height:auto;max-height:auto;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{height:auto;max-height:auto;max-width:360px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{padding-top:12px;padding-left:0px;padding-right:65px;display:block;font-size:16px;font-weight:500;text-align:left;line-height:24px;}}", "@media (min-width:992px){.similar-products.jsx-4001456038{display:grid;grid-template:1fr / 1fr 1fr 1fr 1fr;grid-gap:15px;margin:0;margin-bottom:20px;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038{max-width:360px;cursor:pointer;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{border-radius:3px;max-height:154px;overflow:hidden;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{font-size:18px;}}", "@media (min-width:1200px){.jsx-4001456038{.similar-products .similar-card-container .similar-card:hover;}#power-header.jsx-4001456038{margin-top:30px;padding-left:15px;}.bg-gradient-white.jsx-4001456038{background:linear-gradient(to bottom,#fff 0%,#fafafa 100%);}.similar-products.jsx-4001456038{margin:0 15px;margin-bottom:60px;grid-gap:30px;}.img-container.jsx-4001456038{box-shadow:5px 25px 25px -15px rgba(0,0,0,0.35);}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038{height:180px;border-radius:var(--border-radius);overflow:hidden;box-shadow:3px 3px 4px rgba(0,0,0,0.2);-webkit-transition:all 0.1s ease-in;transition:all 0.1s ease-in;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .img-container.jsx-4001456038 .similar-card-img.jsx-4001456038{width:100%;object-fit:cover;height:100%;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}.similar-products.jsx-4001456038 .similar-card-container.jsx-4001456038 .similar-card.jsx-4001456038 .similar-card-title.jsx-4001456038{display:block;font-size:17px;padding-right:0;font-weight:300;line-height:22px;}}"]));
  }

}
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

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_products_ProductUnitPlate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/products/ProductUnitPlate */ "./components/products/ProductUnitPlate.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // import NextHead from 'next/head';



class Product extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      data
    } = this.props;
    return __jsx("div", {
      className: "jsx-1516201080"
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-1516201080" + " " + "container-fluid product-unit-wrapper pb-5"
    }, __jsx(_components_products_ProductUnitPlate__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: data
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1516201080"
    }, [".product-unit-wrapper.jsx-1516201080{position:relative;padding-bottom:80px;padding:0;}"]));
  }

}

Product.getInitialProps = async function (context) {
  const data = {
    id: '',
    category: ''
  };
  data.id = context.query.id;
  data.category = context.query.category;
  return {
    data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ 8:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\OSPanel\domains\gmnext9\pages\product.js */"./pages/product.js");


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

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

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

/***/ })

/******/ });
//# sourceMappingURL=product.js.map