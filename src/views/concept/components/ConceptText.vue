<template>
  <div class="conceptText">
    <p>
      髪は生き方をも表現するものだと私たちは考えます。<br><br>
      反面、表現すればするほど、<br>
      自然治癒力を持たない髪は、生まれた瞬間からダメージを蓄積しつづけています。<br>
      XXXXXは髪のメカニズムを解明しつづけることで、美しさの実感を追及し続けてきました。<br><br>
      いつまでも触れていたくなる質感<br>
      内側から溢れ出るような、美しい艶<br>
      うねりのない、しなやかな強さ<br><br>
      かけがえのない、すこやかな美しさのために、
      まっすぐ、正しくあるべき姿を問いつづけていく、<br>
      私たちXXXXXXXです。
    </p>
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

.conceptText{
  padding: 50px 30px;

  // $break2: 480;
  @include mq(u-br2) {
    padding: 30px 20px;
  }

  p{
    @include rem(20);
    text-align: center;
    font-weight: bold;
    line-height: 2.2;

    // $break5: 960;
    @include mq(u-br5) {
      @include rem(19);
    }
    // $break4: 760;
    @include mq(u-br4) {
      @include rem(16);
    }
    // $break3: 600;
    @include mq(u-br3) {
      @include rem(15);
    }
    // $break2: 480;
    @include mq(u-br2) {
      @include rem(14);
    }
    // $break1: 380;
    @include mq(u-br1) {
      @include rem(13);
    }
    // $break1: 330;
    @include mq(u-br0) {
      @include rem(12);
    }
  }
}

</style>