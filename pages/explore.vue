<template>
  <div class="bg-black min-h-screen">
    <h1>Explore</h1>
    <div class="max-w-screen-lg mx-auto">
      <PromiseOverview :promises="promises" :filters="[]" />
    </div>
    <div class="bg-gray">
      <SingleCard></SingleCard>
      <ExpandedCard></ExpandedCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import promises from '@/data/promises.json';
import SingleCard from '@/components/promise-card/single-card.vue';
import ExpandedCard from '@/components/promise-card/expanded-card.vue';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    PromiseOverview,
    SingleCard,
    ExpandedCard,
  },
  data() {
    return {
      promises,
    };
  },
});
</script>
