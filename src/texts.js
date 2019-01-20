export const indexJS = `// index.js

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
})`

export const indexHTML = `<!-- index.html -->

<!DOCTYPE html>
<html lang="pt-BR">
<head>[...]</head>
<body>
  <div ng-controller="AppCtrl">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <form ng-submit="addList($event, entity)">[...]</form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <app-table
            v-props-list="list"
            v-props-date-format="dataFormat"
            v-props-value-format="valueFormat"
            v-on-remove="removeItem">
          </app-table>
        </div>
      </div>
      <code>
        <pre style="background-color: #eee; border: 1px solid #000;padding: 1em;">{{ list | json }}</pre>
      </code>
    </div>
  </div>
</body>
</html>`

export const vue = `<template>
  <table class="table table-striped table-bordered table-hover table-sm">
    <caption>
      <span>Total de registros</span>
      <span v-text="totalItens" />
    </caption>
    <thead class="thead-dark">
      <tr>
        <th scope="col" />
        <th scope="col">Nome</th>
        <th scope="col">Data</th>
        <th scope="col">Valor</th>
      </tr>
    </thead>
    <tbody v-if="totalItens">
      <tr v-for="(item, index) in formatedList" :key="index">
        <td>
          <button class="btn btn-danger btn-sm" @click="remove(index)">
            x
          </button>
        </td>
        <td v-text="item.name" />
        <td v-text="item.date" />
        <td v-text="item.value" />
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="4">
          Sem registros...
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3"></td>
        <td v-text="total" />
      </tr>
    </tfoot>
  </table>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'VueElement',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    dateFormat: {
      type: Function,
      required: true
    },
    valueFormat: {
      type: Function,
      required: true
    }
  },
  computed: {
    formatedList () {
      return this.list.map((item) => ({
        ...item,
        date: this.dateFormat(item.date),
        value: this.valueFormat(item.value)
      }))
    },

    totalItens () {
      return this.list.length
    },

    total () {
      return this.valueFormat(
        this.list.reduce((prev, curr) => prev + curr.value, 0)
      )
    }
  },
  methods: {
    remove (index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style scoped>[...]</style>`

export const ctrl = `function appCtrl ($scope) {
  $scope.entity = {}

  $scope.list = [
    {
      name: 'João da Silva',
      date: Date.now(),
      value: 150.50
    }
  ]

  $scope.addList = function ($event, entity) {
    $event.preventDefault()
    $scope.list.push(entity)
    $scope.entity = {}
  }

  $scope.removeItem = function (index) {
    $scope.list.splice(index, 1)
  }

  /**
   * @param {Date} date
   */
  $scope.dataFormat = function (date) {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date))
  }

  /**
   * @param {number} value
   */
  $scope.valueFormat = function (value) {
    const opt = { style: 'currency', currency: 'BRL' }
    return new Intl.NumberFormat('pt-BR', opt).format(value)
  }
}

appCtrl.$inject = ['$scope']

export default appCtrl`
