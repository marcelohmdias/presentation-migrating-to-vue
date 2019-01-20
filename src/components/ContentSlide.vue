<template>
  <div class="eg-slide-content">
    <h3 v-text="title" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentSlide',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.eg-slide-content {
  margin-left: auto;
  margin-right: auto;
}
</style>
