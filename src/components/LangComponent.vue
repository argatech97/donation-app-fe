<template>
  <div>
    <q-btn
      flat
      round
      color="black"
      :icon="`img:${lang === 'id-IDN' ? '/indo-flag.svg' : '/us-flag.svg'}`"
      size="12px"
      @click="dialog = !dialog"
    ></q-btn>
    <q-dialog v-model="dialog" backdrop-filter="blur(4px) saturate(150%)">
      <q-card>
        <q-card-section class="row items-center q-pb-none text-h6">
          Pilih Bahasa
        </q-card-section>

        <q-card-section class="column">
          <div class="column">
            <q-btn
              v-for="(item, index) in availableLocales"
              @click="changeLang(item)"
              flat
              :key="index"
              :icon="`img:/${icon[item]}`"
              :label="langLabel[item]"
              align="left"
            ></q-btn>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { locale, availableLocales } = useI18n();
    const dialog = ref<boolean>(false);
    const lang = ref<string>(locale.value);
    const icon: { [key: string]: string } = {
      'id-IDN': 'indo-flag.svg',
      'en-US': 'us-flag.svg',
    };

    const langLabel: { [key: string]: string } = {
      'id-IDN': 'Bahasa Indonesia',
      'en-US': 'English',
    };

    function changeLang(x: string) {
      lang.value = x;
      locale.value = x;
      dialog.value = !dialog.value;
    }

    return {
      lang,
      dialog,
      changeLang,
      locale,
      availableLocales,
      icon,
      langLabel,
    };
  },
});
</script>
