<template>
  <q-page class="column items-center justify-start">
    <div class="campaignImg__wrapper full-width full-height">
      <CampaignImage />
    </div>
    <div class="full-width full-height campaignBody__wrapper">
      <slot></slot>
    </div>
  </q-page>
</template>

<script lang="ts">
import CampaignImage from './CampaignImage.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CampaignImage,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.campaignImg__wrapper {
  position: sticky;
  left: 0;
  top: 45px;
  z-index: 0;
}

.campaignBody__wrapper {
  z-index: 100;
  background: var(--q-secondary);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
