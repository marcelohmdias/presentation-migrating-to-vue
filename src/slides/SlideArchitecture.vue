<template>
  <content-slide title="Arquitetura de uma aplicação mista">
    <slide-box :size="35">
      <text-step
        :current="step"
        :step="1"
        text="Webpack: O gerador e orquestrador de bundlers."
      />
      <text-step
        :current="step"
        :step="2"
        text="ngVue: O responsável pela mágica."
      />
      <text-step
        :current="step"
        :step="3"
        text="Sopa de letrinha no Frontend."
      />
      <image-slide
        class="photo"
        :path="images.logos"
        name="Sopa de Letrinhas"
        v-if="step >= 3"
      />
    </slide-box>
  </content-slide>
</template>

<script>
import ContentSlide from '@/components/ContentSlide'
import ImageSlide from '@/components/ImageSlide'
import SlideBox from '@/components/SlideBox'
import TextStep from '@/components/TextStep'

import logos from '@/assets/logos.png'

export default {
  name: 'SlideArchitecture',
  components: { ContentSlide, ImageSlide, SlideBox, TextStep },
  props: {
    step: Number
  },
  data: () => ({
    images: {
      logos
    }
  })
}
</script>

<style lang="scss" scoped>
.photo {
  right: 1em;
  top: 4em;
  width: 18em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  .photo {
    display: block;
    right: inherit;
    top: inherit;
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 20em;
  }
}
</style>
