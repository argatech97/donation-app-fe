<template>
  <CampaignDetail>
    <div class="column q-pa-md">
      <CardItem
        :icon="'eva-person'"
        :title="'Arga Wirawan'"
        :description="'Rp 100.000'"
      />
    </div>
  </CampaignDetail>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CampaignDetail from 'src/components/CampaignDetail.vue';
import CardItem from 'src/components/CardItem.vue';
export default defineComponent({
  components: {
    CardItem,
    CampaignDetail,
  },
  setup() {
    return {};
  },
});
</script>
