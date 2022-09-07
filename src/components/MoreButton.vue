<template>
  <router-link :to="link">more</router-link>
</template>

<script>
export default {
  name: 'MoreButton',
  props: {
    link: String
  }
}
</script>

<style scoped lang="scss">
a{
  display: inline-block;
  padding: 8px 45px;
  border: 1px solid #fff;
  border-radius: 100em;
  background-color: rgba($color: #ffffff, $alpha: 0.8);
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover{
    background-color: rgba($color: #63C8FF, $alpha: 0.8);
    color: #fff;
  }
}
</style>