webpackHotUpdate("static\\development\\pages\\askForm.js",{

/***/ "./components/form/AskForm.js":
/*!************************************!*\
  !*** ./components/form/AskForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/TextFieldGroup */ "./components/common/TextFieldGroup.js");
/* harmony import */ var _common_RadioInputGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/RadioInputGroup */ "./components/common/RadioInputGroup.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_formActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/formActions */ "./actions/formActions.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // import axios from 'axios';
// import validateFormData from '../validation/mailer';

var AskForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AskForm, _Component);

  var _super = _createSuper(AskForm);

  function AskForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AskForm);

    _this = _super.call(this, props);
    _this.state = {
      organizationname: '',
      organizationadres: '',
      personname: '',
      personstatus: '',
      personemail: '',
      personphone: '',
      personmobile: '',
      locationparams: '',
      projectmountadres: '',
      projectdescription: '',
      operationmode: '',
      proposedmodel: '',
      electricpower: '',
      connectiontype: '',
      minimalload: '',
      energyloadgraph: '',
      installationsettings: '',
      fueltype: '',
      utilsystem: '',
      reqheatpower: '',
      chefmontage: '',
      stafflearning: '',
      otherworks: '',
      gasprice: '',
      currentenergytarif: '',
      currentheattarif: '',
      commentary: '',
      // isValid: false,
      errors: {}
    };
    _this.onSelect = _this.onSelect.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AskForm, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "onSelect",
    value: function onSelect(e) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var askFormData = {
        organizationname: this.state.organizationname,
        organizationadres: this.state.organizationadres,
        personname: this.state.personname,
        personstatus: this.state.personstatus,
        personemail: this.state.personemail,
        personphone: this.state.personphone,
        personmobile: this.state.personmobile,
        locationparams: this.state.locationparams,
        projectmountadres: this.state.projectmountadres,
        projectdescription: this.state.projectdescription,
        operationmode: this.state.operationmode,
        proposedmodel: this.state.proposedmodel,
        electricpower: this.state.electricpower,
        connectiontype: this.state.connectiontype,
        minimalload: this.state.minimalload,
        energyloadgraph: this.state.energyloadgraph,
        installationsettings: this.state.installationsettings,
        fueltype: this.state.fueltype,
        utilsystem: this.state.utilsystem,
        reqheatpower: this.state.reqheatpower,
        chefmontage: this.state.chefmontage,
        stafflearning: this.state.stafflearning,
        otherworks: this.state.otherworks,
        gasprice: this.state.gasprice,
        currentenergytarif: this.state.currentenergytarif,
        currentheattarif: this.state.currentheattarif,
        commentary: this.state.commentary
      };
      this.props.validateFormData(askFormData); // this.setState(validateFormData(askFormData));
      // console.log(this.state.isValid);
      // this.state.isValid
      //   ? axios
      //       .post('/api/form-validation', askFormData)
      //       .then((res) => {
      //         console.log(res);
      //       })
      //       .catch(function (error) {
      //         console.log(error);
      //       })
      //   : '';

      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.state.errors;
      return __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-4153203840"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel ask-form"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("h1", {
        className: "jsx-4153203840" + " " + "header-min-colored mb-2"
      }, "\u041E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442 \u0434\u043B\u044F \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel razdel-contacts"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("span", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "1. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043B\u0438\u0446\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0449\u0435\u0433\u043E \u043E\u043F\u0440\u043E\u0441\u043D\u044B\u0439 \u043B\u0438\u0441\u0442"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "organizationname",
        placeholder: "\u041E\u041E\u041E '\u0412\u0430\u0448\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F'",
        label: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:",
        value: this.state.organizationname,
        onChange: this.onChange,
        error: errors.organizationname,
        info: ""
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "organizationadres",
        placeholder: "123456 \u0433. \u042F\u0440\u043E\u0441\u043B\u0430\u0432\u043B\u044C, \u0434\u043E\u043C, \u043A\u043E\u0440\u043F\u0443\u0441, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435...",
        label: "\u0410\u0434\u0440\u0435\u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438:",
        value: this.state.organizationadres,
        onChange: this.onChange,
        error: errors.organizationadres
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "personname",
        placeholder: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447",
        label: "\u0424\u0418\u041E:",
        value: this.state.personname,
        onChange: this.onChange,
        error: errors.personname
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "personstatus",
        placeholder: "\u041A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
        label: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C:",
        value: this.state.personstatus,
        onChange: this.onChange,
        error: errors.personstatus
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "personemail",
        placeholder: "mail@mail.ru",
        label: "e-mail:",
        value: this.state.personemail,
        onChange: this.onChange,
        error: errors.personemail
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "personphone",
        placeholder: "8-4852-12-34-56",
        label: "\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:",
        value: this.state.personphone,
        onChange: this.onChange,
        error: errors.personphone
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "personmobile",
        placeholder: "8-903-123-45-67",
        label: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:",
        value: this.state.personmobile,
        onChange: this.onChange,
        error: errors.personmobile
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel project-description"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("h2", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "2. \u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0435\u0441\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "locationparams",
        placeholder: "\u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u044F\u0442\u0438\u0435, \u0436\u0438\u043B\u0430\u044F \u0437\u043E\u043D\u0430, \u0434\u0440.",
        label: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043C\u0435\u0441\u0442\u0430 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F:",
        value: this.state.locationparams,
        onChange: this.onChange,
        error: errors.locationparams
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "projectmountadres",
        placeholder: "\u0430\u0434\u0440\u0435\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",
        label: "\u0410\u0434\u0440\u0435\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 (\u0433\u043E\u0440\u043E\u0434 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438): ",
        value: this.state.projectmountadres,
        onChange: this.onChange,
        error: errors.projectmountadres
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "projectdescription",
        placeholder: "\u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u0430, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
        label: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0435: ",
        value: this.state.projectdescription,
        onChange: this.onChange,
        error: errors.projectdescription
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel parametres"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("h2", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "3. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_RadioInputGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "operationmode",
        label: "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F: ",
        values: ['Резервный генератор (аварийный)', 'Посменный длительный режим', 'Постоянный режим работы (круглосуточный)'],
        askother: true,
        otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0439",
        onSelect: this.onSelect,
        error: errors.operationmode
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "proposedmodel",
        placeholder: "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \xAB2  \u043F\u043E 400 \u043A\u0412\u0442\xBB: ",
        label: "\u041F\u0440\u0435\u0434\u043F\u043E\u043B\u0430\u0433\u0430\u0435\u043C\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C (\u0435\u0434\u0438\u043D\u0438\u0447\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C) \r \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A: ",
        value: this.state.proposedmodel,
        onChange: this.onChange,
        error: errors.proposedmodel
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "electricpower",
        placeholder: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043A\u0412\u0442): ",
        label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C (\u043A\u0412\u0442): ",
        value: this.state.electricpower,
        onChange: this.onChange,
        error: errors.electricpower
      }), __jsx(_common_RadioInputGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "connectiontype",
        label: "\u0412\u0438\u0434 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F: ",
        values: ['Один генератор на изолированную нагрузку (изолированно от централизованной сети)', 'Параллельная работа нескольких генераторов на общую нагрузку (изолированно от сети )', 'Параллельная работа с централизованной сетью (с запретом экспорта электроэнергии в сеть)'],
        askother: true,
        otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0435",
        onSelect: this.onSelect,
        error: errors.connectiontype
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "minimalload",
        placeholder: "\u043A\u0412\u0442",
        label: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430: ",
        value: this.state.minimalload,
        onChange: this.onChange,
        error: errors.minimalload
      }), __jsx(_common_RadioInputGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "installationsettings",
        label: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u043A: ",
        values: ['Поставка в открытом исполнении (монтаж в здании)', 'Поставка в шумозащитном кожухе на улице', 'Поставка в шумозащитном кожухе в здании', 'В контейнере (монтажная площадка расположена на улице)'],
        askother: true,
        otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0435",
        onSelect: this.onSelect,
        error: errors.installationsettings
      }), __jsx(_common_RadioInputGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
        name: "fueltype",
        label: "\u0422\u0438\u043F \u0438 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0433\u043E \u0442\u043E\u043F\u043B\u0438\u0432\u0430: ",
        values: ['Магистральный природный газ (метан)'],
        askother: true,
        otherlabel: "\u0414\u0440\u0443\u0433\u043E\u0439 (\u043F\u043E\u043F\u0443\u0442\u043D\u044B\u0439 \u0433\u0430\u0437, \u0441\u0436\u0438\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u043F\u0430\u043D-\u0431\u0443\u0442\u0430\u043D, \u0431\u0438\u043E\u0433\u0430\u0437, \u0434\u0440.) \r (\u0434\u043B\u044F \u043B\u044E\u0431\u043E\u0433\u043E \u0433\u0430\u0437\u0430 \u043A\u0440\u043E\u043C\u0435 \u043C\u0435\u0442\u0430\u043D\u0430, \u043F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u044B\u0439 \u0441\u043E\u0441\u0442\u0430\u0432)\r ",
        onSelect: this.onSelect,
        error: errors.fueltype
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel heat-params"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("h2", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "4. \u0422\u0435\u043F\u043B\u043E\u0432\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "utilsystem",
        placeholder: "\u0434\u0430 / \u043D\u0435\u0442",
        label: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0423\u0442\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0422\u0435\u043F\u043B\u0430 (\u0421\u0423\u0422): ",
        value: this.state.utilsystem,
        onChange: this.onChange,
        error: errors.utilsystem
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "reqheatpower",
        placeholder: "\u043A\u0412\u0442",
        label: "\u0422\u0440\u0435\u0431\u0443\u0435\u043C\u0430\u044F \u0442\u0435\u043F\u043B\u043E\u0432\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C: ",
        value: this.state.reqheatpower,
        onChange: this.onChange,
        error: errors.reqheatpower
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel add-works"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("h2", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "5. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u0438\u0434\u044B \u0440\u0430\u0431\u043E\u0442"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "chefmontage",
        placeholder: "\u0428\u0435\u0444-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u041F\u0443\u0441\u043A\u043E-\u043D\u0430\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B: ",
        label: "\u0428\u0435\u0444-\u043C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u041F\u0443\u0441\u043A\u043E-\u043D\u0430\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B: ",
        value: this.state.chefmontage,
        onChange: this.onChange,
        error: errors.chefmontage
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "stafflearning",
        placeholder: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430: ",
        label: "\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u0443\u044E\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430: ",
        value: this.state.stafflearning,
        onChange: this.onChange,
        error: errors.stafflearning
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "otherworks",
        placeholder: "\u041F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438: ",
        label: "\u041F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0438\u0442\u0435 \u0436\u0435\u043B\u0430\u0435\u043C\u044B\u0435 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438: ",
        value: this.state.otherworks,
        onChange: this.onChange,
        error: errors.otherworks
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel economic-params"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "razdel"
      }, __jsx("h2", {
        className: "jsx-4153203840" + " " + "razdel-title"
      }, "6. \u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"), __jsx("span", {
        className: "jsx-4153203840" + " " + "title-description"
      }, "(\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u043E-\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F)"), __jsx("div", {
        className: "jsx-4153203840" + " " + "fields"
      }, __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "gasprice",
        placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C 1000 \u043C3 \u0433\u0430\u0437\u0430 (\u0440\u0443\u0431./1000 \u043C3): ",
        label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C 1000 \u043C3 \u0433\u0430\u0437\u0430 (\u0440\u0443\u0431./1000 \u043C3): ",
        value: this.state.gasprice,
        onChange: this.onChange,
        error: errors.gasprice
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "currentenergytarif",
        placeholder: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u043A\u0412\u0442*\u0447\u0430\u0441: ",
        label: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u043A\u0412\u0442*\u0447\u0430\u0441: ",
        value: this.state.currentenergytarif,
        onChange: this.onChange,
        error: errors.currentenergytarif
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "currentheattarif",
        placeholder: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u0413\u043A\u0430\u043B: ",
        label: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043D\u0430 \u0442\u0435\u043F\u043B\u043E\u0432\u0443\u044E \u044D\u043D\u0435\u0440\u0433\u0438\u044E, \u0440\u0443\u0431./\u0413\u043A\u0430\u043B: ",
        value: this.state.currentheattarif,
        onChange: this.onChange,
        error: errors.currentheattarif
      }), __jsx(_common_TextFieldGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "commentary",
        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438: ",
        label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438: ",
        value: this.state.commentary,
        onChange: this.onChange,
        error: errors.commentary
      }))))))), __jsx("div", {
        className: "jsx-4153203840" + " " + "container-fluid form-razdel button-section pb-5"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "container"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "row"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "col"
      }, __jsx("div", {
        className: "jsx-4153203840" + " " + "button-container"
      }, __jsx("button", {
        type: "submit",
        className: "jsx-4153203840" + " " + "button-submit"
      }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4153203840"
      }, [".razdel-title{display:block;text-transform:uppercase;font-size:17px;font-weight:900;color:var(--accent-grey);line-height:23px;margin-bottom:0px;}", ".title-description{font-size:14px;line-height:12px;}", ".form-razdel{padding-top:30px;padding-bottom:15px;}", ".fields{padding-top:15px;padding-bottom:15px;}", ".fields .label-title{display:block;font-size:16px;line-height:20px;font-weight:700;margin-top:7px;margin-bottom:5px;}", ".fields .form-control{font-size:16px;padding-left:10px;font-weight:300;}", ".fields .radio-input-group .label-title{margin-bottom:10px;}", ".fields .radio-input-group .radio-input-field{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:8px;padding-left:25px;}", ".fields .radio-input-group .radio-input-field input{width:100%;height:inherit;position:absolute;left:0;z-index:1;opacity:0;margin-right:10px;}", ".fields .radio-input-group .radio-input-field input:checked+label::after{opacity:1;}", ".fields .radio-input-group .radio-input-field label{position:relative;font-size:14px;line-height:16px;margin-bottom:0;margin-left:5px;font-weight:300;cursor:pointer;}", ".fields .radio-input-group .radio-input-field label::before{position:absolute;display:block;content:'';top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-30px;width:20px;height:20px;border-radius:13px;border:1px solid rgba(0,0,0,0.4);}", ".fields .radio-input-group .radio-input-field label::after{position:absolute;display:block;content:'';top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:-25px;width:10px;height:10px;border-radius:13px;background:var(--accent-red);opacity:0;}", ".radio:checked+label:after{opacity:1;}", ".radio:focus+label:before{box-shadow:0 0 0 3px rgba(255,255,0,0.7);}", ".fields .radio-input-group .radio-input-field:last-child{display:block;}", ".form-razdel:nth-child(even){background-color:#fff;}", ".button-section .button-submit{display:block;margin:0 auto;display:block;border-radius:50px;color:#fff;font-family:var(--molot-font);background-color:var(--accent-red);border:none;padding:12px 20px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:15px auto;box-shadow:var(--box-shadow-up);font-size:15px;-webkit-transition:all 0.2s ease-in;transition:all 0.2s ease-in;}", ".button-section .button-submit:hover{cursor:pointer;box-shadow:var(--box-shadow);}", "@media (min-width:768px){.razdel-title{display:block;text-transform:uppercase;font-size:21px;font-weight:300;color:var(--accent-grey);line-height:28px;margin-bottom:0px;}.title-description{font-size:16px;line-height:12px;}.form-razdel{padding-top:30px;padding-bottom:15px;}.fields{padding-top:15px;padding-bottom:15px;}.fields .label-title{display:block;font-size:20px;line-height:24px;font-weight:700;margin-top:7px;margin-bottom:10px;}.fields .form-control{font-size:16px;padding-left:10px;}.fields .radio-input-group .label-title{margin-bottom:12px;font-size:20px;line-height:24px;}.fields .radio-input-group .radio-input-field{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:12px;}.fields .radio-input-group .radio-input-field input{margin-right:10px;}.fields .radio-input-group .radio-input-field label{font-size:16px;line-height:18px;margin-bottom:0;font-weight:300;}}", "@media (min-width:1200px){.razdel-title{display:block;text-transform:uppercase;font-size:27px;font-weight:300;color:var(--accent-grey);line-height:34px;margin-bottom:0px;padding-right:300px;}.title-description{font-size:16px;line-height:12px;}.form-razdel{padding-top:30px;padding-bottom:15px;}.fields{padding-top:15px;padding-bottom:15px;}.fields .label-title{display:block;font-size:22px;line-height:24px;font-weight:700;margin-top:10px;margin-bottom:7px;}.fields .form-control{font-size:18px;padding-left:15px;}.fields .radio-input-group .label-title{margin-bottom:15px;font-size:22px;line-height:24px;}.fields .radio-input-group .radio-input-field{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px;}.fields .radio-input-group .radio-input-field input{margin-right:10px;}.fields .radio-input-group .radio-input-field label{font-size:18px;line-height:18px;margin-bottom:0;font-weight:300;}}"]));
    }
  }]);

  return AskForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  validateFormData: _actions_formActions__WEBPACK_IMPORTED_MODULE_12__["validateFormData"]
})(AskForm)); // export default AskForm;

/***/ })

})
//# sourceMappingURL=askForm.js.7b1993e7e28638a2c0aa.hot-update.js.map