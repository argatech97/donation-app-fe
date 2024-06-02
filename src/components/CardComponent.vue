<template>
  <div
    @click="router.push('/campaign-detail')"
    class="full-width rounded-borders column overflow-hidden"
  >
    <div class="card--image">
      <q-img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        loading="lazy"
        fit="cover"
        alt="card image"
      >
        <template v-slot:loading>
          <ImageLoading />
        </template>
        <template v-slot:error> <ImageError /> </template
      ></q-img>
    </div>

    <div class="bg-white column q-pa-sm">
      <router-link
        to=""
        class="underline-none text-black q-my-none caption-text text-subtitle2"
      >
        Help Avisa to continue her school at elementry school
      </router-link>
      <ul>
        <li><span class="text-blue">50%</span> {{ $t('donor') }}</li>
        <li><span class="text-grey">50</span> {{ $t('collected') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 5px 0px;
  margin: 0px;
}

li {
  float: left;
  font-size: 12px;
}

li:not(:last-child) {
  margin-right: 10px;
}

.card--image {
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  max-height: 120px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import ImageLoading from './ImageLoading.vue';
import ImageError from './ImageError.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    ImageError,
    ImageLoading,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
});
</script>
