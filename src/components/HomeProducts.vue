<template>
  <div class="homeProducts">
    <SectionTitle title="Products"/>
    <div class="homeProducts__inner">

    </div>
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

  &__inner{
    height: 600px;
    background-color: rgba($color: #fff, $alpha: 1.0);
    background-image: url(@/assets/images/bottles/bottles_all.png);
    background-size: cover;
    background-position: center;
  }
}
</style>
