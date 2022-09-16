<template>
  <div class="products">
    <div class="shop__header">
      <PageTitle title="Products"/>
    </div>
    <div class="products__inner">
      <ProductsList/>
    </div>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList.vue';
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: {
    PageTitle,
    ProductsList
  },
  data(){
    return {
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
.products{
  background-color: rgba($color: #FFF, $alpha: 0.7);
  padding: 20px 0 50px;

  &__inner{
    width: 95%;
    max-width: 1000px;
    margin:20px auto 0 auto;
    background-color: rgba($color: #FFF, $alpha: 0.8);
    border-radius: 20px;
  }

  &__item{
    padding: 20px;

    h3{
      font-weight: bold;
      display: flex;
      align-items: center;

      // $break5: 760;
      @include mq(u-br4) {
        flex-direction: column;
      }

      span[data-type="name"]{
        @include rem(40);
        // $break5: 480;
        @include mq(u-br2) {
          @include rem(30);
        }
      }
      span[data-color="blue"]{
        color: $product_blue;
      }
      span[data-color="white"]{
        color: $product_white;
      }
      span[data-color="green"]{
        color: $product_green;
      }
      span[data-color="orange"]{
        color: $product_orange;
      }
      span[data-type="text"]{
        margin-left: 30px;
        @include rem(20);

        // $break5: 760;
        @include mq(u-br4) {
          margin: 10px 0 0 0;
          @include rem(15);
        }
        // $break5: 480;
        @include mq(u-br2) {
          @include rem(14);
          line-height: 1.2;
        }
      }

      br{
        display: none;
        // $break5: 480;
        @include mq(u-br2) {
          display: block;
        }
      }
    }
  }

  &__flex{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    // $break5: 760;
    @include mq(u-br4) {
      flex-direction: column;
    }
  }

  &__image{
    width: 38%;
    max-width: 400px;

    // $break5: 760;
    @include mq(u-br4) {
      width: 100%;
      max-width: 100%;
    }
  }

  &__textArea{
    width: 58%;
    // $break5: 760;
    @include mq(u-br4) {
      width: 100%;
      margin-top: 10px
    }
  }

  &__features{
    h4{
      @include rem(18);
      font-weight: bold;

      // $break5: 960;
      @include mq(u-br5) {
        @include rem(15);
      }
    }

    ul{
      margin-top: 8px;
      border-top: dashed 1px $border-1;


      li{
        padding: 8px;
        border-bottom: dashed 1px $border-1;

        // $break5: 960;
        @include mq(u-br5) {
          padding: 5px;
        }

        p{
          @include rem(16);
          font-weight: bold;

          // $break5: 960;
          @include mq(u-br5) {
            @include rem(13);
          }
        }
      }
    }
  }

  &__priceList{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    

    // $break5: 960;
    @include mq(u-br5) {
      margin-top: 10px;
    }

    h5{
      background-color: $blue-4;
      padding: 3px;
      font-weight: bold;
    }

    ul{
      margin-top: 10px;

      li{
        display: flex;

        &:nth-child(n + 2){
          margin-top: 10px;
        }

        p{
          width: 50%;
          // $break5: 960;
          @include mq(u-br5) {
            @include rem(13);
          }

          span{
            @include rem(12);
          }
        }

      }
    }

    div[data-type="shampoo"]{
      width: 50%;
    }

    div[data-type="treatment"]{
      width: 50%;
      margin-left: 20px;
    }
  }

}
</style>