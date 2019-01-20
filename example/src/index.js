import angular from 'angular'
import Vue from 'vue'
import VueElement from './VueElement.vue'

import 'ngVue'
import 'bootstrap/dist/css/bootstrap.min.css'

import ctrl from './ctrl'

const app = angular.module('app', ['ngVue'])

app.controller('AppCtrl', ctrl)

app.directive('appTable', ['createVueComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('AppTable', VueElement))
}])

window.addEventListener('load', () => {
  angular.bootstrap(window.document.body, ['app'])
})
