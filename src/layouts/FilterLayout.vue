<template>
    <div id="filter"></div>
</template>

<script>
export default {
  name: 'FilterLayout',
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
#filter {
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
}
</style>