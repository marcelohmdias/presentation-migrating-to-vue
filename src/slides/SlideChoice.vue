<template>
  <content-slide title="Por que escolhemos Vue.js?">
    <slide-box :size="35">
      <text-step
        :current="step"
        :step="1"
        text="Estrutura sintática."
      />
      <text-step
        :current="step"
        :step="2"
        text="Facilidade no aprendizado."
      />
      <text-step
        :current="step"
        :step="3"
        text="Leveza dos elementos."
      />
      <text-step
        :current="step"
        :step="4"
        text="Facilidade em compor os componentes."
      />
      <text-step
        :current="step"
        :step="5"
        text="Comunidade ativa e crescente."
      />
      <image-slide
        class="photo"
        :path="images.awesome"
        name="Fantástico"
        v-if="step >= 5"
      />
    </slide-box>
  </content-slide>
</template>

<script>
import ContentSlide from '@/components/ContentSlide'
import ImageSlide from '@/components/ImageSlide'
import SlideBox from '@/components/SlideBox'
import TextStep from '@/components/TextStep'

import awesome from '@/assets/chuck-norris-awesome-meme.png'

export default {
  name: 'SlideChoice',
  components: { ContentSlide, ImageSlide, SlideBox, TextStep },
  props: {
    step: Number
  },
  data: () => ({
    images: {
      awesome
    }
  })
}
</script>

<style lang="scss" scoped>
.photo {
  right: 1em;
  top: 0em;
  width: 15em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  .photo {
    display: block;
    right: inherit;
    top: inherit;
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 17em;
  }
}
</style>
