webpackJsonp([1],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    mounted: function mounted() {
        var _this = this;

        axios.get('/api/question/index').then(function (response) {
            _this.questions = response.data;
            console.log(_this.questions);
        });
    },
    data: function data() {
        return {
            questions: []
        };
    }
});

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c(
          "div",
          { staticClass: "panel panel-default" },
          [
            _c("div", { staticClass: "panel-heading" }, [
              _vm._v("Home Componen")
            ]),
            _vm._v(" "),
            _vm._l(_vm.questions, function(question) {
              return _c(
                "div",
                { staticClass: "bs-callout bs-callout-primary" },
                [
                  _c(
                    "h4",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "question_show",
                              params: { id: question.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(question.title))]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(question.content) +
                        "\n                    "
                    )
                  ])
                ]
              )
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f671ac0", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(18)
/* script */
var __vue_script__ = __webpack_require__(203)
/* template */
var __vue_template__ = __webpack_require__(204)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/question/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f671ac0", Component.options)
  } else {
    hotAPI.reload("data-v-7f671ac0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});