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
@import "@/assets/sass/app2.scss";
  h1{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color:$blue-1;
    padding: 20px 0;
    

    span{
      border-bottom:5px solid  $blue-1;
    }
  }
</style>