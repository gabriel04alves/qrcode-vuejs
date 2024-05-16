<template>
  <body>
    <Header></Header>
    <ContentMain></ContentMain>
    <Footer></Footer>
  </body>
</template>

<script>
import Header from './components/HeaderMain.vue';
import Footer from './components/FooterMain.vue'
import ContentMain from './components/ContentMain.vue'
import './assets/style/reset.css'
import './assets/style/main.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ContentMain
  }
}
</script>

<style>
* {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
}

body {
  height: 100%;
  background-color: #202020;
}
</style>
