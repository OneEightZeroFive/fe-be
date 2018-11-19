<template>
  <div id="app">
    <Xheader />
    <Xfooter />
    <Xsearch />
    <Xcard />
  </div>
</template>

<script>
import Xheader from './components/Header.vue';
import Xfooter from './components/Footer.vue';
import Xsearch from './components/Search.vue';
import Xcard from './components/Card.vue';
export default {
  name: 'app',
  components: {
    Xheader,
    Xfooter,
    Xsearch,
    Xcard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
