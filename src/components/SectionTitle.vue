<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
  h2{
    text-align: center;
    @include rem(50);
    font-weight: bold;

    // $break1: 380;
    @include mq(u-br1) {
      @include rem(40);
    }
  }
</style>