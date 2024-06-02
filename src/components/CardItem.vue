<template>
  <div
    :style="`background-color: ${bgColor ? bgColor : 'white'}`"
    class="container row items-center nowrap q-mb-md q-pa-sm"
  >
    <div v-if="icon" class="icon">
      <q-icon color="primary" :name="icon"></q-icon>
    </div>
    <q-avatar v-else-if="avatar">
      <img :src="avatar" />
    </q-avatar>
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
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  border-radius: 10px;
  cursor: pointer;
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
