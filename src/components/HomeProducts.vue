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
.homeProducts{
  position: relative;
  padding: 30px;

  &__inner{
  }

  h4{
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  &__list{
    display: flex;
    justify-content: space-around;
    padding-bottom: 28px;
    margin-top: 30px;

    li{
      width: 25vw;
      max-width: 200px;
      height: 25vw;
      max-height: 200px;
      border-radius: 50%;
      background-position: center;
      background-size: cover;
      position: relative;

      &:nth-child(n+2){
        margin-left: 10px;
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
  }
}
</style>
