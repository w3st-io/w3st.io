// [IMPORT]
import aos from 'aos'
import 'aos/dist/aos.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue from 'vue'
import Viewer from 'v-viewer'
import VueRellax from 'vue-rellax'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueLazyload from 'vue-lazyload'
import VueMeta from 'vue-meta'
import 'viewerjs/dist/viewer.css'
import 'tiny-slider/src/tiny-slider.scss'

// [IMPORT] Personal
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/styles/bootstrap-override.scss'
import '@/assets/styles/style.scss'



// [USE]
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Viewer)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: import('./assets/media/err.png'),
  loading: import('./assets/media/loading.gif'),
  attempt: 1
})
Vue.use(VueMeta)
Vue.use(VueRellax)
Vue.use(VueYouTubeEmbed)


// [EXPORT] EventBus
export const EventBus = new Vue()


// [CONFIG]
Vue.config.productionTip = false


// [RENDER]
new Vue({
  router,
  store,
  created() { aos.init() },
  render: h => h(App)
}).$mount('#app')
