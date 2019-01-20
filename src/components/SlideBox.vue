<template>
  <div class="box" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SlideBox',
  props: {
    size: Number
  },
  computed: {
    style () {
      return {
        width: `${this.size}em`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  margin: 1em auto;
  max-width: 90%;
  position: relative;
}
</style>
