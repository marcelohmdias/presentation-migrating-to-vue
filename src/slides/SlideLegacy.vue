<template>
  <content-slide title="O Legado: Performance e Dados">
    <slide-box :size="35">
      <text-step
        :current="step"
        :step="1"
        text="O ciclo de vida AngularJS."
      />
      <text-step
        :current="step"
        :step="2"
        text="Componente de montagem dinâmica."
      />
      <text-step
        :current="step"
        :step="3"
        text="Massa de dados em exibição."
      />
      <text-step
        :current="step"
        :step="4"
        text="Usuários exigentes."
      />
      <image-slide
        class="photo"
        :path="images.desespero"
        name="Desespero"
        v-if="step >= 4"
      />
    </slide-box>
  </content-slide>
</template>

<script>
import ContentSlide from '@/components/ContentSlide'
import ImageSlide from '@/components/ImageSlide'
import SlideBox from '@/components/SlideBox'
import TextStep from '@/components/TextStep'

import desespero from '@/assets/desespero.jpg'

export default {
  name: 'SlideLegacy',
  components: { ContentSlide, ImageSlide, SlideBox, TextStep },
  props: {
    step: Number
  },
  data: () => ({
    images: {
      desespero
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
