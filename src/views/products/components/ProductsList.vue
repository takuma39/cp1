<template>
  <ul class="productsList" v-for="product in products" :key="product.id">
    <li class="productsList__item">
      <h3>
        <span data-type="name" :data-color="product.name">{{ product.name }}</span>
        <span data-type="text">{{ product.title }}</span>
      </h3>
      <div class="productsList__flex">
      <div class="productsList__image">
        <img :src="require(`@/assets/images/bottles/${product.image}`)" :alt="product.name">
      </div>
      <div class="productsList__textArea">

        <div class="productsList__features">
          <h4>こんな髪質の方へ</h4>
          <ul>
            <li>
              <p>{{ product.hair_type }}</p>
            </li>
            <li>
              <p>{{ product.efficacy }}</p>
            </li>
          </ul>
        </div>

        <div class="productsList__priceList">
          <div class="productsList__price" data-type="shampoo">
            <h5>shampoo</h5>
            <ul>
              <li>
                <p>{{ product.shampoo.amount[0] }}mL</p>
                <p>{{ product.shampoo.price[0] }}円</p>
              </li>
              <li>
                <p>{{ product.shampoo.amount[1] }}mL</p>
                <p>{{ product.shampoo.price[1] }}円</p>
              </li>
              <li>
                <p>{{ product.shampoo.amount[2] }}mL</p>
                <p>{{ product.shampoo.price[2] }}円<span>（詰替）</span></p>
              </li>
            </ul>
          </div>

          <div class="productsList__price" data-type="treatment">
            <h5>treatment</h5>
            <ul>
              <li>
                <p>{{ product.treatment.amount[0] }}g</p>
                <p>{{ product.treatment.price[0] }}円</p>
              </li>
              <li>
                <p>{{ product.treatment.amount[1] }}g</p>
                <p>{{ product.treatment.price[1] }}円</p>
              </li>
              <li>
                <p>{{ product.treatment.amount[2] }}g</p>
                <p>{{ product.treatment.price[2] }}円<span>（詰替）</span></p>
              </li>
            </ul>
          </div>
        </div>            

      </div>
      </div>
    </li>
  </ul>
</template>


<script>
import productsJson from '../json/products.json';
export default {
  components: {
  },
  data(){
    return {
      products: productsJson,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
.productsList{
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

