<template>
  <p v-if="isShow" v-text="text" />
</template>

<script>
export default {
  name: 'TextStep',
  props: {
    current: {
      required: true,
      type: Number
    },
    step: {
      required: true,
      type: Number
    },
    text: {
      required: true,
      type: String
    }
  },
  computed: {
    isShow () {
      return this.current >= this.step
    }
  }
}
</script>
