<template>
  <header class="header">
    <nav class="header__nav">
    <h1 class="header__logo">
      <router-link to="/">
        <img alt="logo" src="@/assets/images/logo/logo.png">
      </router-link>
    </h1>
    <ul class="header__menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/concept">Concept</router-link>
      </li>
      <li>
        <router-link to="/products">Product</router-link>
      </li>
      <li>
        <router-link to="/shop">Shop</router-link>
      </li>
    </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style lang="scss">
@import "@/assets/sass/app2.scss";
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #fff, $alpha: 0.9);

  &__nav{
    position: relative;
    height: 80px;
    width: 100%;
  }

  &__logo{
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    width: 54px;
  }

  &__menu {
    display: flex;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    

    li:nth-child(n+2){
      margin-left: 20px;
    }

    a {
      font-weight: bold;
      transition: all 0.2s;
  
      &.router-link-exact-active {
        color: $blue-1;
      }

      &:hover{
        color: $blue-1;
      }
    }
  }
}
</style>