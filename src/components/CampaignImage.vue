<template>
  <div class="container" ref="imageContainer">
    <q-img
      ref="imageWrapper"
      loading="lazy"
      fit="cover"
      src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="card image"
    ></q-img>
    <div class="container__wrapper">
      <div class="card--collected q-mb-sm">50% {{ $t('collected') }}</div>
      <p class="title q-mb-sm">
        Help Avisa to continue her school at elementry school
      </p>
      <div class="row full-width justify-between items-center">
        <div class="row items-center">
          <q-icon
            class="q-mr-sm"
            color="white"
            name="eva-person-outline"
          ></q-icon>
          <a style="text-decoration: none" class="text-white" href=""
            >20 {{ $t('donor') }}</a
          >
        </div>
        <div class="row items-center">
          <q-icon
            class="q-mr-sm"
            color="white"
            name="eva-clock-outline"
          ></q-icon>
          <a style="text-decoration: none" class="text-white" href=""
            >2 {{ $t('daysLeft') }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imageContainer = ref<HTMLElement>();
    return {
      imageContainer,
    };
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
  display: inline-block;
  transition: all 0.5s ease;
  overflow-y: hidden;
  max-height: 300px;
}

.container__wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 15px;
}

.title {
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.card--collected {
  border-radius: 5px;
  padding: 2px 5px;
  background-color: var(--q-primary);
  color: white;
  font-size: 12px;
}
</style>
