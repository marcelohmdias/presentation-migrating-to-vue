<template>
  <div>
    <h4>Marcelo H M Dias</h4>
    <p>@marcelohmdias</p>
    <div class="box">
      <img :src="facebook" alt="Facebook Logo">
      <img :src="github" alt="Github Logo">
      <img :src="instagram" alt="Instagram Logo">
      <img :src="linkedin" alt="Linkedin Logo">
      <img :src="twitter" alt="Twitter Logo">
    </div>
  </div>
</template>

<script>
import facebook from '@/assets/facebook.svg'
import github from '@/assets/github.svg'
import instagram from '@/assets/instagram.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'

export default {
  name: 'AddressText',
  data: () => ({
    facebook,
    github,
    instagram,
    linkedin,
    twitter
  })
}
</script>

<style lang="scss" scoped>
h4 {
  margin-bottom: 0.5em;
  margin-top: 1.5em;
}

img {
  display: inline-block;
  padding-right: 0.75em;
  width: 1.75em;
}

p {
  color: #4183d7;
  font-style: italic;
  margin: 0;
  margin-bottom: 0.75em;
}

@media screen and (orientation:portrait) and (max-width: 768px) {
  h4, p {
    text-align: center
  }

  .box {
    align-items: flex-start;
    display: flex;
    justify-content: center;
  }
}
</style>
