<template>
  <div class="homeTop">
    <div class="homeTop__hero">
      <img alt="logo" src="@/assets/images/logo/logo.png">
    </div>
    <ul class="homeTop__list">
      <li class="homeTop__circle" data-type="concept">
        <router-link to="/concept">Concept</router-link>
      </li>
      <li class="homeTop__circle" data-type="products">
        <router-link to="/products">Products</router-link>
      </li>
      <li class="homeTop__circle" data-type="shop">
        <router-link to="/shop">Shop</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HomeTop',

}
</script>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.homeTop{
  position: relative;
  width: 100%;
  display: flex;

  // $break5: 600;
  @include mq(u-br3) {
    flex-direction: column;
    padding-top: 20px;
  }

  &__hero{
    width: 30%;
    padding: 100px 0;
    animation: upDown 2s ease 0s infinite alternate none running;

    // $break5: 600;
    @include mq(u-br3) {
      width: 50%;
      padding: 0;
      margin: 0 auto;
    }
  }

  &__list{
    position: relative;
    height: auto;
    width: 65%;
    z-index: 100;

    // $break5: 600;
    @include mq(u-br3) {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
    }
  }

  &__circle{
    $circleMin:150px;
    $length: 30%;
    padding-top: max($length, $circleMin);
    width: max($length, $circleMin);
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    border-radius: 50%;
    position: absolute;
    transition: all 0.2s;

    &:hover{
      background-color: rgba($color: #63C8FF, $alpha: 0.8);
      color: #fff;
    }

    // $break5: 600;
    @include mq(u-br3) {
      position: static;
      padding-top: 25%;
      width: 25%;
    }

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      @include rem(30);
      font-weight: bold;
      position: absolute;
      top: 0;

      // $break5: 600;
      @include mq(u-br3) {
        @include rem(20);
      }

      // $break5: 480;
      @include mq(u-br2) {
        @include rem(15);
      }
    }

    &[data-type='concept']{
      left: 25%;
      top: 5%;
      animation: upDown 2s ease 1.2s infinite alternate none running;
    }

    &[data-type='products']{
      left:55%;
      top: 40%;
      animation: upDown 2s ease 0.2s infinite alternate none running;
    }

    &[data-type='shop']{
      left: 10%;
      top: 55%;
      animation: upDown 2s ease 1.5s infinite alternate none running;
    }
  }
}

@keyframes upDown {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
