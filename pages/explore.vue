<template>
  <div class="bg-black min-h-screen">
    <h1>Explore</h1>
    <div class="max-w-screen-lg mx-auto">
      <PromiseOverview :promises="promises" :filters="[]" />
    </div>
    <div class="bg-gray">
      <PromiseCard
        class="pt-2"
        v-for="promise in promises.slice(93, 96)"
        :key="`promise-card-${promise.id}`"
        :promise="promise"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import promises from '@/data/promises.json';
import PromiseCard from '@/components/promise-card/promise-card.vue';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    PromiseOverview,
    PromiseCard,
  },
  data() {
    return {
      promises,
    };
  },
});
</script>
