<template>
  <div class="q-px-md q-py-sm">
    <p class="q-mb-sm title-v1">{{ $t('basicInfo') }}</p>
    <p class="text-grey-8">
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
      :bg-color="'rgba(255, 233, 233, 0.8)'"
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
      :bg-color="'rgba(233, 251, 255, 0.8)'"
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
      :bg-color="'rgba(234, 255, 233, 0.8)'"
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
      :bg-color="'rgba(233, 251, 255, 0.8)'"
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
