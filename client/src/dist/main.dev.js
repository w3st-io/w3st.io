"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventBus = void 0;

var _aos = _interopRequireDefault(require("aos"));

var _bootstrapVue = require("bootstrap-vue");

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("vue-editor-js/src/index"));

var _vViewer = _interopRequireDefault(require("v-viewer"));

var _vueRellax = _interopRequireDefault(require("vue-rellax"));

var _vueYoutubeEmbed = _interopRequireDefault(require("vue-youtube-embed"));

var _vueLazyload = _interopRequireDefault(require("vue-lazyload"));

require("aos/dist/aos.css");

require("tiny-slider/src/tiny-slider.scss");

require("viewerjs/dist/viewer.css");

var _App = _interopRequireDefault(require("@/App.vue"));

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

require("@/assets/styles/bootstrap-override.scss");

require("@/assets/styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// [IMPORT]
// [IMPORT] Personal //
// [USE]
_vue["default"].use(_index["default"]);

_vue["default"].use(_bootstrapVue.BootstrapVue);

_vue["default"].use(_bootstrapVue.IconsPlugin);

_vue["default"].use(_vViewer["default"]);

_vue["default"].use(_vueRellax["default"]);

_vue["default"].use(_vueYoutubeEmbed["default"]);

_vue["default"].use(_vueLazyload["default"], {
  preLoad: 1.3,
  error: require('./assets/media/err.png'),
  loading: require('./assets/media/loading.gif'),
  attempt: 1
}); // [EXPORT] EventBus //


var EventBus = new _vue["default"](); // [CONFIG + RENDER]

exports.EventBus = EventBus;
_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  created: function created() {
    _aos["default"].init();
  },
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');