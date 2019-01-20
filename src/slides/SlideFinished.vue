<template>
  <content-slide title="...E é isso. Obrigado!">
    <slide-box :size="35">
      <div class="box">
        <image-slide
          class="photo"
          :path="images.solved"
          name="Problema resolvido"
        />
      </div>
    </slide-box>
    <div class="text-footer">
      <span>
        <span>Feito com</span>
        <img class="logo" :src="images.heart" alt="Coração">
        <span>e</span>
        <img class="logo" :src="images.vue" alt="Logo do Vue.js">
        <span>...</span>
      </span>
    </div>
  </content-slide>
</template>

<script>
import ContentSlide from '@/components/ContentSlide'
import ImageSlide from '@/components/ImageSlide'
import SlideBox from '@/components/SlideBox'

import heart from '@/assets/heart.svg'
import solved from '@/assets/problem-solved.jpg'
import vue from '@/assets/vue.svg'

export default {
  name: 'SlideArchitecture',
  components: { ContentSlide, ImageSlide, SlideBox },
  props: {
    step: Number
  },
  data: () => ({
    images: {
      heart,
      solved,
      vue
    }
  })
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  width: 100%;
}

.photo {
  height: 15em;
  margin-top: 1em;
  width: 15em;
}

.logo {
  height: 1.3em;
  margin-bottom: -0.4em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  width: 0.85em;
}

.text-footer {
  bottom: 1em;
  font-size: 0.6em;
  position: absolute;
  text-align: center;
  width: 100%;
}
</style>
