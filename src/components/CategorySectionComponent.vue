<template>
  <SeeMoreComponent :title="$t('section2')" route="" isRow>
    <CategoryComponent
      v-for="(item, index) in category"
      :key="index"
      :label="item.label"
      :icon="item.icon"
      :route="item.route"
    />
  </SeeMoreComponent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SeeMoreComponent from './SeeMoreComponent.vue';
import CategoryComponent from './CategoryComponent.vue';

interface ICategory {
  label: string;
  route: string;
  icon: string;
}

export default defineComponent({
  components: {
    CategoryComponent,
    SeeMoreComponent,
  },
  setup() {
    const category = ref<ICategory[]>([
      {
        label: 'Title 1',
        icon: 'eva-bell-outline',
        route: '',
      },
      {
        label: 'Title 2',
        icon: 'eva-activity-outline',
        route: '',
      },
      {
        label: 'Title 3',
        icon: 'eva-calendar-outline',
        route: '',
      },
      {
        label: 'Title 4',
        icon: 'eva-bulb-outline',
        route: '',
      },
    ]);
    return {
      category,
    };
  },
});
</script>
