<template>
  <img :src="path" :alt="name">
</template>

<script>
export default {
  name: 'ImageSlide',
  props: {
    name: String,
    path: String
  }
}
</script>

<style lang="scss" scoped>
img {
  border: 0.15em solid #ddd;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
              0px 5px 8px 0px rgba(0,0,0,0.14),
              0px 1px 14px 0px rgba(0,0,0,0.12);
  position: absolute;
}
</style>
