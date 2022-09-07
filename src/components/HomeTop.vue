<template>
  <div class="homeTop">
    <div class="homeTop__hero">
      <img alt="Vue logo" src="@/assets/logo.png">
    </div>
    <div class="homeTop__circle" data-type="concept">
      <router-link to="/about">Concept</router-link>
    </div>
    <div class="homeTop__circle" data-type="product">
      <router-link to="/about">Product</router-link>
    </div>
    <div class="homeTop__circle" data-type="shop">
      <router-link to="/about">Shop</router-link>
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

  &__hero{
    position: absolute;
    left: 1vw;
    top: 100px;
    width: 40vw;
    z-index: 2;
    animation: upDown 2s ease 0s infinite alternate none running;
  }

  &__circle{
    $length: 20vw;
    height: $length;
    width: $length;
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
      left: 55vw;
      top: 100px;
      animation: upDown 2s ease 1.2s infinite alternate none running;
    }

    &[data-type='product']{
      left: 73vw;
      top: 350px;
      animation: upDown 2s ease 0.2s infinite alternate none running;
    }

    &[data-type='shop']{
      left: 43vw;
      top: 400px;
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
