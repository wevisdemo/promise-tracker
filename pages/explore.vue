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
    <ChartItem
      label="ไม่พบข้อมูล"
      icon="status/nodata.png"
      :data="items"
      :max="15"
      :total="60"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import promises from '@/data/promises-example.json';
import ChartItem from '@/components/explore/promise-overview/chart-item.vue';
import { PromiseStatus } from '@/models/promise';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    ActiveFilters,
    ChartItem,
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
