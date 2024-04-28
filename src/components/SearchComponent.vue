<template>
  <div class="row items-center justify-start no-wrap full-width">
    <q-input
      class="full-width"
      rounded
      dense
      :label="$t('search')"
      outlined
      v-model="value"
    >
      <template v-slot:append
        ><q-icon name="eva-search-outline"></q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const value = ref();
    return {
      value,
    };
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 10px;
}

img {
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.profile--title {
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.profile--text-grey {
  color: grey;
  font-size: 12px;
  text-decoration: none;
}
</style>
