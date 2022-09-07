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
  h2{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
  }
</style>