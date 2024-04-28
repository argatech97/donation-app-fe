<template>
  <CampaignDetai>
    <CampaignInfo></CampaignInfo>
  </CampaignDetai>
</template>

<script lang="ts">
import CampaignDetai from 'src/components/CampaignDetail.vue';
import CampaignInfo from 'src/components/CampaignInfo.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CampaignInfo,
    CampaignDetai,
  },
  setup() {
    return {};
  },
});
</script>
