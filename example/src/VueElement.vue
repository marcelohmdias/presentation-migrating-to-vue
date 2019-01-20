<template>
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

<style scoped>
.table tbody td[colspan="4"] {
  text-align: center;
}

.table td {
  text-align: center;
}

.btn-sm {
  line-height: 0.65em;
  padding: 0.35em;
}
</style>
