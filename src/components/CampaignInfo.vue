<template>
  <div class="q-px-md q-py-sm">
    <p class="q-mb-sm title-v1">{{ $t('basicInfo') }}</p>
    <p>
      {{ $t('donationCollectedDesc') }}
      <span class="text-bold">Rp 2.000.000</span> .
      {{ $t('donationTargetDesc') }}
      <span class="text-bold">Rp 5.000.000 </span>
    </p>
    <CardItem
      @click="
        () => {
          router.push('/campaign-detail/story');
        }
      "
      :icon="'eva-book-open'"
      :title="$t('story')"
      :description="$t('storyDesc')"
    />
    <CardItem
      @click="
        () => {
          router.push('/campaign-detail/donor');
        }
      "
      :icon="'eva-people'"
      :title="$t('donor')"
      :description="`20 ${$t('donorDesc')}`"
    />
    <CardItem
      @click="
        () => {
          router.push('/campaign-detail/funding-info');
        }
      "
      :icon="'eva-person'"
      :title="$t('fundInfo')"
      :description="$t('fundInfoDesc')"
    />
    <CardItem
      @click="
        () => {
          router.push('/campaign-detail/news');
        }
      "
      :icon="'eva-email'"
      :title="$t('news')"
      :description="$t('newsEmpty')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardItem from './CardItem.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    CardItem,
  },
  setup() {
    const router = useRouter();

    return { router };
  },
});
</script>
