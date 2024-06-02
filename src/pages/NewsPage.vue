<template>
  <CampaignDetail><ComingSoon /> </CampaignDetail>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CampaignDetail from 'src/components/CampaignDetail.vue';
import ComingSoon from 'src/components/ComingSoon.vue';
export default defineComponent({
  components: {
    ComingSoon,
    CampaignDetail,
  },
  setup() {
    return {};
  },
});
</script>
