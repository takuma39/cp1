<template>
  <footer class="footer">
    <h1>XXXXXXXXXX</h1>
    <ul class="footer__sns">
      <li><img src="@/assets/images/logo/facebook.png" alt="facebook"></li>
      <li><img src="@/assets/images/logo/instagram.png" alt="instagram"></li>
    </ul>

    <ul class="footer__menu">
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
    <p class="footer__copyright">¬©takumafolio</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterLayout',
}
</script>

<style lang="scss">
@import "@/assets/sass/app2.scss";
.footer{
  background-color: rgba($color: $blue-5, $alpha: 0.7);
  padding: 50px 30px;

  h1{
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: $blue-1;
    color: #fff;
  }

  &__sns{
    display: flex;
    margin-top: 30px;
    justify-content: center;

    li{
      width: 50px;
      margin: 0 10px;
      transition: all 0.2s;

      &:hover{
        opacity: 0.8;
      }
    }
  }

  &__menu{
    display: flex;
    justify-content: center;
    margin-top: 30px;

    li{
      margin: 0 10px;
      font-weight: bold;
      transition: all 0.2s;

      &:hover{
        color: #fff;
      }

      .router-link-exact-active{
        color: #fff;
      }
    }
  }

  &__copyright{
    margin-top: 30px;
    text-align: center;
  }
}

</style>