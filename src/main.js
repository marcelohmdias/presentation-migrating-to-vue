// Libs
import Vue from 'vue'
import Eagle, { Options } from 'eagle.js'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

// App
import App from './App.vue'

// Modules
import './registerServiceWorker'
import 'eagle.js/dist/eagle.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'animate.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

Options.hljs = hljs

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
