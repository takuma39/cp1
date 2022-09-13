<template>
  <div class="homeConcept">
    <div class="homeConcept__inner">
      <SectionTitle title="Concept"/>
      <div class="homeConcept__flex">
        <div class="homeConcept__image">
          <!-- <img alt="logo" src="@/assets/images/woman/woman1.jpg"> -->
        </div>
        <div class="homeConcept__textArea">
          <h4>どんな悩みも、向き合い、受け止める。</h4>
          <p>
            髪は自然治癒力を持たないため、生まれた瞬間からダメージを蓄積しつづけています。<br>
            XXXXXは髪のメカニズムを解明しつづけることで、美しさの実感を追及し続けてきました。<br><br>
            いつまでも触れていたくなる質感<br>
            内側から溢れ出るような、美しい艶<br>
            うねりのない、しなやかな強さ<br><br>
            かけがえのない、すこやかな美しさのために、
            まっすぐ、正しくあるべき姿を問いつづけていく、<br>
            私たちXXXXXXXです。
          </p>
        </div>
      </div>
    </div>
    <div class="homeConcept__buttonArea">
      <MoreButton link="/concept"/>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue';
import MoreButton from '@/components/MoreButton.vue';
export default {
  name: 'HomeConcept',
  components: {
    SectionTitle,
    MoreButton,
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.homeConcept{
  background-color: rgba($color: #fff, $alpha: 0.8);
  padding: 30px;

  // $break5: 480;
  @include mq(u-br2) {
    padding: 15px;
  }

  &__inner{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__flex{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    // $break5: 960;
    @include mq(u-br4) {
      flex-direction: column;
    }
  }

  &__image{
    display: block;
    width: 35%;
    min-width: 270px;
    padding-top: 500px;
    overflow: hidden;
    border-radius: 20px;
    background-image: url(@/assets/images/woman/woman1.jpg);
    background-size: cover;
    background-position: center;

    // $break5: 760;
    @include mq(u-br4) {
      width: 100%;
      padding-top: 60%;
      background-position: 50% 35%;
    }
  }

  &__textArea{
    width: 60%;
    height: 100%;
    margin-left: 20px;

    // $break5: 760;
    @include mq(u-br4) {
      width: 100%;
      margin: 20px 0 0 0;
    }

    h4{
      @include rem(28);
      font-weight: bold;
      color: #8ebeec;

      // $break5: 960;
      @include mq(u-br5) {
        @include rem(22);
      }

      // $break2: 480;
      @include mq(u-br2) {
        @include rem(19);
      }

      // $break1: 380;
      @include mq(u-br1) {
        @include rem(16);
      }
    }

    p{
      margin-top: 20px;
      @include rem(18);
      font-weight: bold;
      line-height: 1.5;

      // $break2: 480;
      @include mq(u-br2) {
        @include rem(15);
        margin-top: 10px;
      }

      // $break1: 380;
      @include mq(u-br1) {
        @include rem(14);
      }
    }
  }

  &__buttonArea{
    text-align: center;
    margin-top: 30px;

    // $break2: 480;
    @include mq(u-br2) {
      @include rem(15);
      margin-top: 15px;
    }
  }
}

</style>
