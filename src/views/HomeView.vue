<template>
<!-- <Header/> -->
  <div class="home">
    <HomeTop/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Header from '@/layouts/HeaderLayout.vue';
import HomeTop from '@/components/HomeTop.vue';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
    HomeTop,
    // Header
  }
}
</script>
