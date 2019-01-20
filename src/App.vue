<template>
  <div class="eg-slideshow">
    <slide leave="fadeOut" :steps="2">
      <slide-home :step="step" />
    </slide>

    <slide enter="fadeIn" leave="fadeOut">
      <slide-presentation />
    </slide>

    <slide enter="fadeIn" leave="fadeOut" :steps="4">
      <slide-legacy :step="step" />
    </slide>

    <slide enter="fadeIn" leave="fadeOut" :steps="5">
      <slide-choice :step="step" />
    </slide>

    <slide enter="fadeIn" leave="fadeOut" :steps="3">
      <slide-architecture :step="step" />
    </slide>

    <slide enter="fadeIn" leave="fadeOut" :steps="1">
      <slide-example :step="step" />
    </slide>

    <slide enter="fadeIn" leave="fadeOut" :steps="1">
      <slide-finished :step="step" />
    </slide>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'

import SlideArchitecture from '@/slides/SlideArchitecture'
import SlideChoice from '@/slides/SlideChoice'
import SlideExample from '@/slides/SlideExample'
import SlideFinished from '@/slides/SlideFinished'
import SlideHome from '@/slides/SlideHome'
import SlideLegacy from '@/slides/SlideLegacy'
import SlidePresentation from '@/slides/SlidePresentation'

export default {
  name: 'App',
  mixins: [ Slideshow ],
  components: {
    SlideArchitecture,
    SlideChoice,
    SlideExample,
    SlideFinished,
    SlideHome,
    SlideLegacy,
    SlidePresentation
  }
}
</script>

<style lang="scss">
html {
  background-color: #dadfe1;
  font-family: 'Ubuntu', sans-serif;
  overflow: hidden;
  text-shadow:  1px 3px 5px rgba(0,0,0,0.5),
                1px 5px 10px rgba(0,0,0,0.15),
                1px 1px 15px rgba(0,0,0,0.1);
}

code, pre {
  font-family: 'Ubuntu Mono', monospace;
  overflow: initial;
  text-shadow:  initial;
}

.eg-code-block.container {
  width: 59em !important;

  .code-box {
    max-height: 73em;
  }
}

.eg-slideshow .eg-code-block {
  font-size: 0.25em !important;
  margin-bottom: 2em;
  margin-top: 0em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  .eg-code-block.container {
    width: 100% !important;

    .code-box {
      max-height: 31em;
    }
  }
}

@media screen and (orientation:landscape) and (max-width: 768px) {
  .eg-code-block.container {
    width: 65em !important;
  }
}
</style>
