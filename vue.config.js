const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const NotifyPlugin = require('webpack-notifier')
const WebpackBar = require('webpackbar')

const plugins = [
  new NotifyPlugin(),
  new WebpackBar()
]

plugins.push(new BrowserSyncPlugin({
  host: 'localhost',
  open: false,
  port: 3001,
  proxy: 'http://localhost:8081/'
}, { reload: false }))

const path = 'https://marcelohmdias.github.io/presentation-migrating-to-vue/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? path : '/',

  configureWebpack: { plugins },

  devServer: {
    progress: false
  },

  lintOnSave: true,
  runtimeCompiler: true,
  parallel: undefined,
  productionSourceMap: undefined,

  pwa: {
    name: 'Apresentação: Migrando do AngularJS para o Vue.js',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#000000',
    themeColor: '#000000',
    workboxOptions: {
      cacheId: 'sismed-app',
      navigateFallback: 'index.html',
      skipWaiting: true,
      runtimeCaching: [{
          urlPattern: /^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
          handler: 'staleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [
                0,
                200
              ]
            }
          }
        },
        {
          urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
          handler: 'cacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 2592000
            }
          }
        }
      ]
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  css: {
    sourceMap: true
  }
}
