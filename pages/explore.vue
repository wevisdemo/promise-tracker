<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import promises from '@/data/promises-example.json';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    ActiveFilters,
  },
  data() {
    return {
      promises,
    };
  },
});
</script>
