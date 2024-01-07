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
import './assets/style/global.css'

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
/* #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px; 
} */
body {
  background-color: #E8EBE4;
}
</style>
