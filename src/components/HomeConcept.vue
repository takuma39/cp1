<template>
  <div class="homeConcept">
    <div class="homeConcept__inner">
      <SectionTitle title="Concept"/>
      <div class="homeConcept__flex">
        <div class="homeConcept__image">
          <img alt="logo" src="@/assets/images/woman/woman1.jpg">
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
@import "@/assets/sass/foundation/breakpoint.scss";
.homeConcept{
  background-color: rgba($color: #fff, $alpha: 0.8);
  padding: 30px;

  h2{
    text-align: center;
    font-size: 50px;
    font-weight: bold;
  }

  &__inner{
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  &__flex{
    margin-top: 20px;
    display: flex;

    // $break5: 960;
    @include mq(u-br5) {
    }
  }

  &__image{
    display: block;
    width: 100%;
    max-width: 400px;
    height: 500px;
    overflow: hidden;
    border-radius: 20px;

    img{
      position: relative;
      top:-100px;
    }
  }

  &__textArea{
    margin: 0 0 0 30px;
    width: calc(100% - 500px);
    height: 100%;

    h4{
      font-size: 30px;
      font-weight: bold;
      color: #8ebeec;
    }

    p{
      margin: 20px 0 0 0;
      font-size: 18px;
      font-weight: bold;
      line-height: 1.5;

      // $break5: 960;
      @include mq(u-br5) {
        
      }
    }
  }

  &__buttonArea{
    text-align: center;
    margin-top: 30px;
  }
}

</style>
