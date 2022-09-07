<template>
  <header class="header">
    <nav class="header__nav">
    <h1 class="header__logo">
      <router-link to="/">
        <img alt="Vue logo" src="@/assets/logo.png">
      </router-link>
    </h1>
    <div class="header__menu">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style lang="scss">
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);

  &__nav{
    width: 90%;
    max-width: 1070px;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo{
    width: 54px;
  }

  &__menu {
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #0080ff;
      }
    }
  }
}
</style>