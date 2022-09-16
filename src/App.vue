<template>
  <SpMenu/>
  <Header v-if="$route.path !== '/'" />
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
  <Footer/>
  <Filter/>
</template>

<script>

// @ is an alias to /src
// import 'normalize.css';
import Header from '@/layouts/HeaderLayout.vue';
import Footer from '@/layouts/FooterLayout.vue';
import Filter from '@/layouts/FilterLayout.vue';
import SpMenu from '@/layouts/SpMenuLayout.vue';
export default {
  name: 'AppView',
  components: {
    Header,
    Footer,
    Filter,
    SpMenu
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
}

.fade{
  &-enter{
    transform: translate(-100px, 0);

    &-from{
      opacity: 0;
    }
    &-to{
      opacity: 1;
    }
    &-active{
      transition: all 1s 0s ease;
    }
  }
  &-leave{
    transform: translate(0, 0);
    &-from{
      opacity: 1;
    }
    &-to{
      transform: translate(100px, 0);
      opacity: 0;
    }
    &-active{
      transition: all .5s 0s ease;
    }
  }
}
</style>
