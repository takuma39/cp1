<template>
  <h1><span>{{ title }}</span></h1>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
  h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color:#0080ff;

    span{
      border-bottom:5px solid  #0080ff;
    }
  }
</style>