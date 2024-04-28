<template>
  <q-layout>
    <q-page-container class="row items-center justify-center bg-grey-1">
      <div class="full-width layout-container bg-secondary">
        <router-view />
        <div class="footer">
          <MenuComponent />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.layout-container {
  max-width: 540px;
}

.footer {
  position: sticky;
  bottom: 0;
  left: 0;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from 'src/components/MenuComponent.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuComponent,
  },

  setup() {
    return {};
  },
});
</script>
