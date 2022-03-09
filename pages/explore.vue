<template>
  <div class="bg-black min-h-screen">
    <h1>Explore</h1>
    <ActiveFilters
      :promises="promises"
      :filters="[
        {
          type: 'party',
          value: 'พลังประชารัฐ',
        },
        {
          type: 'keyword',
          value: 'รถเมล์',
        },
        {
          type: 'status',
          value: 'done',
        },
      ]"
    />
    <ActiveFilters :promises="promises" />
    <ActiveFilters />
    <TabNavigation active-tab="status" />
    <TabBody :promises="promises" group-by="topic" />
    <div class="bg-gray">
      <SingleCard></SingleCard>
      <ExpandedCard></ExpandedCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import promises from '@/data/promises.json';
import TabBody from '@/components/explore/promise-overview/tab-body.vue';
import { PromiseStatus } from '@/models/promise';
import TabNavigation from '@/components/explore/promise-overview/tab-navigation.vue';
import SingleCard from '@/components/promise-card/single-card.vue';
import ExpandedCard from '@/components/promise-card/expanded-card.vue';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    ActiveFilters,
    TabBody,
    TabNavigation,
    SingleCard,
    ExpandedCard,
  },
  data() {
    return {
      promises,
      items: [
        { status: PromiseStatus.NoData, count: 2 },
        { status: PromiseStatus.Proposed, count: 3 },
        { status: PromiseStatus.Paused, count: 1 },
        { status: PromiseStatus.Working, count: 4 },
        { status: PromiseStatus.Done, count: 5 },
      ],
    };
  },
});
</script>
