<template>
  <div class="full-width column">
    <div class="row items-center justify-between q-mb-sm">
      <p class="no-margin text-subtitle2">{{ title }}</p>
      <router-link class="route" :to="route"
        ><span class="text-blue">{{ $t('seeMore') }}</span></router-link
      >
    </div>
    <div
      :class="{
        'no-wrap overflow-auto full-width': true,
        row: isRow,
        column: isColumn,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.route {
  text-decoration: none;
  font-size: 12px;
}

p {
  font-size: 15px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    isRow: Boolean,
    isColumn: Boolean,
  },
  setup() {
    return {};
  },
});
</script>
