(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        name: '',
        surname: '',
        address: '',
        email: '',
        password: ''
      },
      showRegister: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    user: function user(state) {
      return state.user;
    }
  })),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    login: 'login',
    register: 'register'
  })), {}, {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.login(_this.form);

              case 2:
                _this.$router.replace({
                  name: 'home'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    registration: function registration() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.register(_this2.form);

              case 2:
                _this2.$router.replace({
                  name: 'home'
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    [
      _c(
        "b-row",
        { staticClass: "justify-content-md-center" },
        [
          _c(
            "b-col",
            { staticClass: "mt-5", attrs: { cols: "12", md: "auto" } },
            [
              _c(
                "b-card",
                {
                  staticClass: "text-center",
                  staticStyle: { "max-width": "25rem" },
                  scopedSlots: _vm._u([
                    {
                      key: "header",
                      fn: function() {
                        return [
                          !_vm.showRegister
                            ? _c("h3", [_vm._v("Sign in")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showRegister
                            ? _c("h3", [_vm._v("Registration")])
                            : _vm._e()
                        ]
                      },
                      proxy: true
                    },
                    {
                      key: "footer",
                      fn: function() {
                        return [
                          !_vm.showRegister
                            ? _c(
                                "small",
                                { staticClass: "text-muted" },
                                [
                                  _vm._v(
                                    "\n                        Not a member?\n                        "
                                  ),
                                  _c(
                                    "b-link",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.showRegister = !_vm.showRegister
                                        }
                                      }
                                    },
                                    [_vm._v("Join now")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.showRegister
                            ? _c(
                                "small",
                                { staticClass: "text-muted" },
                                [
                                  _vm._v(
                                    "\n                        Already registered?\n                        "
                                  ),
                                  _c(
                                    "b-link",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.showRegister = !_vm.showRegister
                                        }
                                      }
                                    },
                                    [_vm._v("Sign in")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c("b-card-body", [
                    !_vm.showRegister
                      ? _c(
                          "div",
                          [
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-1",
                                  label: "Email",
                                  "label-for": "input-1"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-1",
                                    type: "email",
                                    required: "",
                                    placeholder: "Enter email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-2",
                                  label: "Password",
                                  "label-for": "input-2"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-2",
                                    required: "",
                                    type: "password",
                                    placeholder: "Enter password"
                                  },
                                  model: {
                                    value: _vm.form.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "password", $$v)
                                    },
                                    expression: "form.password"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.submit()
                                  }
                                }
                              },
                              [_vm._v("Sign in")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showRegister
                      ? _c(
                          "div",
                          [
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-3",
                                  label: "Email*",
                                  "label-for": "input-3"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-3",
                                    type: "email",
                                    required: "",
                                    placeholder: "Enter email"
                                  },
                                  model: {
                                    value: _vm.form.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "email", $$v)
                                    },
                                    expression: "form.email"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-5",
                                  label: "Name*",
                                  "label-for": "input-5"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-5",
                                    required: "",
                                    placeholder: "Enter name"
                                  },
                                  model: {
                                    value: _vm.form.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "name", $$v)
                                    },
                                    expression: "form.name"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-6",
                                  label: "Surname*",
                                  "label-for": "input-6"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-6",
                                    required: "",
                                    placeholder: "Enter surname"
                                  },
                                  model: {
                                    value: _vm.form.surname,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "surname", $$v)
                                    },
                                    expression: "form.surname"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-7",
                                  label: "Address*",
                                  "label-for": "input-7"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-7",
                                    placeholder: "Enter address"
                                  },
                                  model: {
                                    value: _vm.form.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "address", $$v)
                                    },
                                    expression: "form.address"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-4",
                                  label: "Password*",
                                  "label-for": "input-4"
                                }
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-4",
                                    required: "",
                                    type: "password",
                                    placeholder: "Enter password"
                                  },
                                  model: {
                                    value: _vm.form.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "password", $$v)
                                    },
                                    expression: "form.password"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                attrs: { variant: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.registration()
                                  }
                                }
                              },
                              [_vm._v("Register")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/login.vue":
/*!********************************************!*\
  !*** ./resources/js/views/pages/login.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=13364a2f& */ "./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/pages/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=13364a2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/login.vue?vue&type=template&id=13364a2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_13364a2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);