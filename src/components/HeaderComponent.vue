<template>
  <div class="header--wrapper row items-center full-width no-wrap bg-white">
    <div class="full-width"><SearchComponent /></div>
    <LangComponent></LangComponent>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LangComponent from './LangComponent.vue';
import SearchComponent from './SearchComponent.vue';

export default defineComponent({
  components: {
    LangComponent,
    SearchComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.header--wrapper {
  padding: 12px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
