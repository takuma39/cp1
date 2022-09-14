<template>
  <div class="home">
    <HomeTop/>
    <HomeConcept/>
    <HomeProducts/>
  </div>
</template>

<script>
import HomeTop from './components/HomeTop.vue';
import HomeConcept from './components/HomeConcept.vue';
import HomeProducts from './components/HomeProducts.vue';

export default {
  name: 'HomeView',
  components: {
    HomeTop,
    HomeConcept,
    HomeProducts
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
</style>