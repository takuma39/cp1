<template>
  <div class="homeProducts">
    <div class="homeProducts__inner">
      <SectionTitle title="Products"/>
      <h4>LINE UP</h4>
      <ul class="homeProducts__list">
        <li data-type="blue"></li>
        <li data-type="white"></li>
        <li data-type="green"></li>
        <li data-type="orange"></li>
      </ul>
    </div>
    <div class="homeProducts__buttonArea">
      <MoreButton link="/products"/>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import MoreButton from '@/components/MoreButton.vue';
export default {
  name: 'HomeProducts',
  components: {
    SectionTitle,
    MoreButton
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.homeProducts{
  position: relative;
  padding: 30px;
  background-color: rgba($color: $blue-4, $alpha: 0.6);

  &__inner{
  }

  h4{
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    // $break5: 600;
    @include mq(u-br3) {
      margin-top: 10px;
    }
  }

  &__list{
    display: flex;
    justify-content: space-around;
    padding-bottom: 28px;
    margin-top: 30px;

    // $break5: 600;
    @include mq(u-br3) {
      flex-wrap: wrap;
      margin-top: 20px;
    }

    li{
      width: 20%;
      padding-top: 20%;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      position: relative;

      // $break5: 600;
      @include mq(u-br3) {
        width: 35%;
        padding-top: 35%;
      }

      &:nth-child(n+3){   
        // $break5: 600;
        @include mq(u-br3) {
          margin-top: 40px;
        }                             
      }

      &::after{
        font-size: 20px;
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -28px;
      }

      &[data-type="blue"]{
        background-image: url(@/assets/images/bottles/bottles_blue.png);
        &::after{
          content: 'BLUE';
        }
      }
      &[data-type="white"]{
        background-image: url(@/assets/images/bottles/bottles_white.png);
        &::after{
          content: 'WHITE';
        }
      }
      &[data-type="green"]{
        background-image: url(@/assets/images/bottles/bottles_green.png);
        &::after{
          content: 'GREEN';
        }
      }
      &[data-type="orange"]{
        background-image: url(@/assets/images/bottles/bottles_orange.png);
        &::after{
          content: 'ORANGE';
        }
      }
    }
  }

  &__buttonArea{
    text-align: center;
    margin-top: 30px;

    // $break5: 480;
    @include mq(u-br2) {
      margin-top: 20px;
    }
  }
}
</style>
