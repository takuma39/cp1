<template>
  <div class="conceptBg">
    <p>どんな悩みも、<br>向き合い、受け止める。</p>
  </div>
</template>


<script>
export default {
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
.conceptBg{
  width: 100%;
  padding-top: max(200px, 40%);
  margin-top: 30px;
  position: relative;

  &::before{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(@/assets/images/woman/woman2.jpg);
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  &::after{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($color: rgb(207, 207, 207), $alpha: 0.3);
    z-index: 2;
  }

  p{
    position: absolute;
    content: "test";
    bottom:10%;
    left: 3%;
    font-weight: bolder;
    color: #fff;
    z-index: 3;
    @include rem(50);

    // $break5: 960;
    @include mq(u-br5) {
      @include rem(40);
    }
    // $break4: 760;
    @include mq(u-br4) {
      @include rem(30);
    }
    // $break3: 600;
    @include mq(u-br3) {
      line-height: 1.2;
    }
    // $break2: 480;
    @include mq(u-br2) {
      @include rem(25);
    }
    // $break1: 380;
    @include mq(u-br1) {
      @include rem(22);
    }

    br{
      display: none;
      // $break3: 600;
      @include mq(u-br3) {
        display: block;
      }
    }
  }
}
</style>