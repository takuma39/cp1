<template>
  <!-- <Header/> -->
  <router-view/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
// import 'normalize.css';
// import Header from '@/layouts/HeaderLayout.vue';
import Footer from '@/layouts/FooterLayout.vue';
export default {
  name: 'AppView',
  components: {
    // Header
    Footer
  },
  data(){
    return {
    }
  },
  methods: {},
  mounted() {

  }
}

</script>

<style lang="scss">
@import "@/assets/sass/foundation/reset.scss";
@import "@/assets/sass/foundation/base.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
