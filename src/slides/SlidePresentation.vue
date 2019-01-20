<template>
  <content-slide title="Olá...">
    <slide-box :size="28">
      <image-slide
        class="photo"
        path="https://avatars3.githubusercontent.com/u/5412367?s=460&v=4"
        name="Foto"
      />
      <address-text />
    </slide-box>
  </content-slide>
</template>

<script>
import AddressText from '@/components/AddressText'
import ContentSlide from '@/components/ContentSlide'
import ImageSlide from '@/components/ImageSlide'
import SlideBox from '@/components/SlideBox'

export default {
  name: 'SlidePresentation',
  components: { AddressText, ContentSlide, ImageSlide, SlideBox },
  props: {
    step: Number
  }
}
</script>

<style lang="scss" scoped>
.photo {
  border-radius: 50%;
  right: 1em;
  top: -1.15em;
  width: 10em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  .photo {
    display: block;
    right: inherit;
    top: inherit;
    position: relative;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 13em;
  }
}
</style>
