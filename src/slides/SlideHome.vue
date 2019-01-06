<template>
  <div class="eg-slide-content">
    <h1>O Desafio do Legado</h1>
    <h3>
      <span>Migrando do</span>
      <span>
        <img class="logo" :src="images.ng" alt="Logo do AngularJS">
        <span>para</span>
        <img class="logo" :src="images.vue" alt="Logo do Vue.js">
      </span>
    </h3>
    <eg-transition enter='fadeIn'>
      <img
        class="photo-challenge"
        :src="images.challenge"
        alt="Challenge Accepted"
        v-if="step >= 2"
      >
    </eg-transition>
  </div>
</template>

<script>
import challenge from '@/assets/challenge-accepted.png'
import ng from '@/assets/ng.svg'
import vue from '@/assets/vue.svg'

export default {
  name: 'SlideHome',
  props: {
    step: Number
  },
  data: () => ({
    images: {
      challenge,
      ng,
      vue
    }
  })
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 0.5em;
}

.logo {
  height: 1.3em;
  margin-bottom: -0.35em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  width: 1.3em;
}

.photo-challenge {
  border: 0.15em solid #efefef;
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
              0px 5px 8px 0px rgba(0,0,0,0.14),
              0px 1px 14px 0px rgba(0,0,0,0.12);
  margin: 1.5em auto;
  display: block;
  width: 8em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  h3 > span {
    display: block;
    margin-bottom: 0.5em;
  }
}
</style>
