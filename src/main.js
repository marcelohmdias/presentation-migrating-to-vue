// Libs
import Vue from 'vue'
import Eagle from 'eagle.js'

// App
import App from './App.vue'

// Modules
import './registerServiceWorker'
import 'eagle.js/dist/eagle.css'
import 'animate.css'

Vue.use(Eagle)

const isDev = process.env.NODE_ENV === 'development'

Vue.config.debug = isDev
Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = false
Vue.config.silent = !isDev

const render = h => h(App)

const vm = new Vue({ render })

vm.$mount('[data-app]')
