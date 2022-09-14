<template>
  <div class="concept">
    <div class="concept__header">
      <PageTitle title="Concept"/>
    </div>
    <div class="concept__inner">
    </div>
  </div>
</template>


<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: {
    PageTitle
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
.concept{
  padding: 100px 0 50px 0;
}


</style>