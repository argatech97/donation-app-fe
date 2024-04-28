<template>
  <div class="container row items-center nowrap q-mb-md bg-white q-pa-sm">
    <div class="icon">
      <q-icon color="primary" :name="icon"></q-icon>
    </div>
    <div class="content q-ml-md column items-start justify-center">
      <p class="no-margin text-bold">{{ title }}</p>
      <p class="no-margin text-grey-8">{{ description }}</p>
    </div>
    <q-icon color="dark" name="eva-arrow-ios-forward"></q-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  border-radius: 5px;
}

.icon {
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
}

.content {
  flex-grow: 1;
}
</style>
