<template>
  <content-slide title="E como ficou...">
    <slide-box :width="100">
      <div class="row">
        <div class="col">
          <eg-code-block lang="javascript">{{ text.indexJS }}</eg-code-block>

          <eg-code-block lang="xml">{{ text.indexHTML }}</eg-code-block>
        </div>

        <div class="col">
          <eg-code-block lang="xml">{{ text.vue }}</eg-code-block>
        </div>

        <div class="col">
          <eg-code-block lang="javascript">{{ text.ctrl }}</eg-code-block>
        </div>
      </div>
    </slide-box>
  </content-slide>
</template>

<script>
import ContentSlide from '@/components/ContentSlide'
import SlideBox from '@/components/SlideBox'

import { ctrl, indexHTML, indexJS, vue } from '@/texts.js'

export default {
  name: 'SlideArchitecture',
  components: { ContentSlide, SlideBox },
  props: {
    step: Number
  },
  data: () => ({
    text: {
      ctrl,
      indexHTML,
      indexJS,
      vue
    }
  })
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;

  .col {
    margin: 0;
    margin-right: 0.25em;

    .eg-code-block.container {
      margin: 0;
      margin-bottom: 1em;
    }

    .code-box {
      width: 100%;
    }
  }
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}
</style>
