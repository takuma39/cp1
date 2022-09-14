<template>
  <div class="concept">
    <div class="concept__header">
      <PageTitle title="Concept"/>
    </div>
    <ConceptBg/>
    <div class="concept__inner">
      <ConceptText/>
    </div>
  </div>
</template>


<script>
import ConceptBg from './components/ConceptBg.vue';
import ConceptText from './components/ConceptText.vue';
import PageTitle from '@/components/PageTitle.vue';
export default {
  components: {
    ConceptBg,
    ConceptText,
    PageTitle
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/app2.scss";
.concept{
  padding: 100px 0 0 0;
  background-color: rgba($color: #fff, $alpha: 0.8);

}


</style>