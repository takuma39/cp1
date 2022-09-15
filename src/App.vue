<template>
  <div class="mobile-menu__cover"></div>
  <Header v-if="$route.path !== '/'" />
  <router-view/>
  <Footer/>
  <Filter/>
</template>

<script>

// @ is an alias to /src
// import 'normalize.css';
import Header from '@/layouts/HeaderLayout.vue';
import Footer from '@/layouts/FooterLayout.vue';
import Filter from '@/layouts/FilterLayout.vue';
export default {
  name: 'AppView',
  components: {
    Header,
    Footer,
    Filter,
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
@import "@/assets/sass/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black-1;
  // position: relative;
  // top:100px;
  // left: -100px;
  // transition: all 0.5s;
}

.mobile-menu__cover{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // width: 100%;
  // height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0; 
  visibility: hidden;
  transition: opacity 1s;
  cursor: pointer;
  z-index: 1000000;
}
</style>
