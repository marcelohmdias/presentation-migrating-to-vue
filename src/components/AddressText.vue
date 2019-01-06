<template>
  <div class="address-text">
    <h4>Marcelo H M Dias</h4>
    <p>@marcelohmdias</p>
    <div>
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
  .address-text {
    h4 {
      margin-bottom: 0.5em
    }

    img {
      display: inline-block;
      padding-right: 0.5em;
      width: 1.5em;
    }

    p {
      color: #4183d7;
      font-style: italic;
      margin: 0;
      margin-bottom: 0.35em;
    }
  }
</style>
