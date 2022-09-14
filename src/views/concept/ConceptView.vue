<template>
  <div class="concept">
    <div class="concept__header">
      <PageTitle title="Concept"/>
    </div>
    <div class="concept__bg">
      <p>一人のためのXXX</p>
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

  &__bg{
    width: 100%;
    height: 500px;
    margin-top: 30px;
    background-image: url(@/assets/images/woman/woman2.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

    &::after{
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba($color: #fff, $alpha: 0.2);
    }

    p{
      position: absolute;
      content: "test";
      bottom:50px;
      left: 30px;
      font-size: 100px;
      font-weight: bold;
      mix-blend-mode: overlay;
      color: #fff;
      z-index: 2;
    }
  }
}


</style>