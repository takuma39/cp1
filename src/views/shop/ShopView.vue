<template>
  <div class="shop">
    <div class="shop__header">
      <PageTitle title="Shop"/>
    </div>
    <div class="shop__inner">
      <p>商品お取り扱い店舗はこちら</p>
      <ul class="shop__list">
        <li>
          <img alt="logo" src="@/assets/images/logo/logo.png">
          <p>店舗A</p>
        </li>
        <li>
          <img alt="logo" src="@/assets/images/logo/logo.png">
          <p>店舗B</p>
        </li>
      </ul>
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
.shop{
  padding: 20px 0 50px 0;
  background-color: rgba($color: #FFF, $alpha: 0.7);

  &__inner{
    width: 95%;
    max-width: 1000px;
    margin:20px auto 0 auto;
    background-color: rgba($color: #FFF, $alpha: 0.8);
    border-radius: 20px;
    padding: 60px;

    p{
      text-align: center;
      @include rem(25);
      font-weight: bold;

      // $break5: 600;
      @include mq(u-br3) {
        @include rem(18);
      }
      // $break5: 480;
      @include mq(u-br2) {
        @include rem(16);
      }
      // $break5: 380;
      @include mq(u-br1) {
        @include rem(14);
      }
    }
  }

  &__list{
    margin-top: 35px;
    display: flex;
    justify-content: space-around;

    li{
      width: 200px;
      margin: 0 10px;

      p{
        margin-top: 20px;
      }
    }
  }
}

</style>
