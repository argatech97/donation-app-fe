<template>
  <q-page class="column">
    <div class="header q-mb-sm">
      <HeaderComponent />
    </div>
    <div class="full-width q-px-md q-mb-md q-mt-sm">
      <MainSectionComponent />
    </div>
    <div class="full-width q-px-md q-mb-md">
      <CategorySectionComponent />
    </div>
    <div class="full-width col q-px-md q-mb-md">
      <SecondarySection />
    </div>
  </q-page>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from 'src/components/HeaderComponent.vue';
import MainSectionComponent from 'src/components/MainSectionComponent.vue';
import CategorySectionComponent from 'src/components/CategorySectionComponent.vue';
import SecondarySection from 'src/components/SecondarySection.vue';
export default defineComponent({
  name: 'IndexPage',

  components: {
    MainSectionComponent,
    HeaderComponent,
    CategorySectionComponent,
    SecondarySection,
  },

  setup() {
    return {};
  },
});
</script>
