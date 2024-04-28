<template>
  <SeeMoreComponent :title="$t('section1')" route="" isRow>
    <div class="card--wrapper">
      <CardComponent />
    </div>
    <div class="card--wrapper">
      <CardComponent />
    </div>
  </SeeMoreComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import SeeMoreComponent from './SeeMoreComponent.vue';

export default defineComponent({
  components: {
    SeeMoreComponent,
    CardComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.card--wrapper {
  max-width: 220px;
  margin-right: 10px;
  flex-shrink: 0;
}
</style>
