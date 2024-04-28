<template>
  <div class="category--wrapper bg-white column items-center justify-center">
    <q-btn flat color="blue" :icon="icon"></q-btn>
    <span class="category--title">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: String,
    icon: String,
    route: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.category--wrapper {
  border-radius: 10px;
  padding: 10px;
}

.category--wrapper:not(:last-child) {
  margin-right: 10px;
}

.category--title {
  font-size: 12px;
}
</style>
