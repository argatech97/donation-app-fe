<template>
  <q-page class="column items-center justify-start q-pa-md">
    <CardComponent />
  </q-page>
</template>
<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CardComponent,
  },
  setup() {
    return {};
  },
});
</script>
