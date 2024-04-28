<template>
  <SeeMoreComponent :title="$t('section3')" route="" isColumn>
    <CardComponentV2 class="q-mb-sm" />
    <CardComponentV2 class="q-mb-sm" />
    <CardComponentV2 class="q-mb-sm" />
  </SeeMoreComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SeeMoreComponent from './SeeMoreComponent.vue';
import CardComponentV2 from './CardComponentV2.vue';

export default defineComponent({
  components: {
    CardComponentV2,
    SeeMoreComponent,
  },
  setup() {
    return {};
  },
});
</script>
