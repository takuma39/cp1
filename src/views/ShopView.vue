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
.shop{
  padding: 100px 0;
  &__header{
  }

  &__inner{
    width:100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: rgba($color: #fff, $alpha: 0.5);
    border-radius: 20px;
    padding: 60px 0px;
    margin-top: 30px;

    p{
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
  }

  &__list{
    margin-top: 60px;
    display: flex;
    justify-content: center;

    li{
      width: 200px;
      margin: 0 60px;

      p{
        margin-top: 20px;
      }
    }
  }
}

</style>
