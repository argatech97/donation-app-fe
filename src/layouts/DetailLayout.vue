<template>
  <q-layout>
    <q-page-container class="row items-center justify-center bg-grey-1">
      <div class="full-width layout-container bg-secondary">
        <div class="header items-center row q-px-md q-py-sm text-bold bg-white">
          <q-icon
            @click="
              () => {
                router.back();
              }
            "
            class="q-mr-sm"
            color="black"
            name="eva-arrow-back"
          ></q-icon>
          <p v-if="typeof route.name === 'string'" class="no-margin">
            {{ $t(route.name) }}
          </p>
        </div>
        <router-view />
        <div class="footer">
          <q-btn
            class="bg-primary text-center text-white full-width"
            flat
            label="Doante Now"
          ></q-btn>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'DetailLayout',

  components: {},

  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      router,
      route,
    };
  },
});
</script>

<style scoped>
.layout-container {
  max-width: 540px;
}

.footer {
  position: sticky;
  bottom: 5px;
  left: 0;
  padding: 0px 10px;
  z-index: 1000;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 45px;
  cursor: pointer;
}
</style>
