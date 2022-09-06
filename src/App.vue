<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- <router-view/> -->
</template>

<script>
// @ is an alias to /src
export default {
  name: 'AppView',
  components: {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      color: #0080ff;
    }
  }
}

body{
  z-index: -2;
}
</style>
