<template>
  <body>
    <Header></Header>
  </body>
</template>

<script>
import Header from './components/HeaderMain.vue';
import './assets/style/global.css'


export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
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
