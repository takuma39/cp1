<template>
  <div class="homeTop">
    <div class="homeTop__hero">
      <img alt="logo" src="@/assets/images/logo/logo.png">
    </div>
    <div class="homeTop__circle" data-type="concept">
      <router-link to="/concept">Concept</router-link>
    </div>
    <div class="homeTop__circle" data-type="products">
      <router-link to="/products">Products</router-link>
    </div>
    <div class="homeTop__circle" data-type="shop">
      <router-link to="/shop">Shop</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeTop',

}
</script>

<style scoped lang="scss">
.homeTop{
  position: relative;
  width: 100%;
  height: calc(40vw + 200px);
  min-height: 320px;
  max-height: 750px;

  &__hero{
    position: absolute;
    left: 1vw;
    top: 100px;
    width: 40vw;
    max-width: 550px;
    z-index: 2;
    animation: upDown 2s ease 0s infinite alternate none running;
  }

  &__circle{
    $circleMax:280px;
    $circleMin:85px;
    $length: 20vw;
    height: $length;
    min-height: $circleMin;
    max-height: $circleMax;
    width: $length;
    min-width: $circleMin;
    max-width: $circleMax;
    background-color: rgba($color: #ffffff, $alpha: 0.8);
    border-radius: 50%;
    position: absolute;

    a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      font-size: 20px;
      font-weight: bold;
      transition: all 0.2s;

      &:hover{
        background-color: rgba($color: #63C8FF, $alpha: 0.8);
        color: #fff;
      }
    }

    &[data-type='concept']{
      left: 53vw;
      top: 10%;
      animation: upDown 2s ease 1.2s infinite alternate none running;
    }

    &[data-type='products']{
      left: 73vw;
      top: 350px;
      top: 45%;
      animation: upDown 2s ease 0.2s infinite alternate none running;
    }

    &[data-type='shop']{
      left: 40vw;
      top: 400px;
      top: 60%;
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
