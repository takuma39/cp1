<template>
  <div class="homeProducts">
    <SectionTitle title="Products"/>

  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
export default {
  name: 'HomeProducts',
  components: {
    SectionTitle,
  }
}
</script>

<style scoped lang="scss">
.homeProducts{
  position: relative;
  padding: 30px;
}
</style>
